
import re
from pathlib import Path
from collections import defaultdict

ROOT = Path(__file__).resolve().parent.parent

DATA_DIR = ROOT / "src" / "data"
FULL_DIR = ROOT / "public" / "full"
TMB_DIR = ROOT / "public" / "tmb"



def get_recipe_images():
    """Odczytuje zdjęcia i parametry taste/difficulty przepisów."""

    recipes = []

    for file in DATA_DIR.rglob("*.ts"):
        content = file.read_text(encoding="utf-8")

        matches = re.findall(
            r'\bimages\s*:\s*\[([^\]]*)\]',
            content,
            re.DOTALL
        )

        for match in matches:
            images = re.findall(r'["\']([^"\']*)["\']', match)
            images = [img for img in images if img.strip()]

            recipes.append({
                "file": file.relative_to(ROOT),
                "images": images,
                "missing_taste": bool(
                    re.search(r'\btaste\s*:\s*null\b', content)
                ),
                "missing_difficulty": bool(
                    re.search(r'\bdifficulty\s*:\s*null\b', content)
                ),
            })

    return recipes


def get_image_files(directory, extension):
    """Zwraca nazwy plików bez rozszerzeń."""

    return {
        file.stem
        for file in directory.rglob(f"*{extension}")
        if file.is_file()
    }


def main():
    recipes = get_recipe_images()

    full_files = get_image_files(FULL_DIR, ".jpg")
    tmb_files = get_image_files(TMB_DIR, ".png")

    used_full = set()
    missing_full = defaultdict(list)

    missing_tmb = []
    empty_recipes = []
    recipes_without_ratings = []


    for recipe in recipes:
        images = recipe["images"]
        recipe_file = str(recipe["file"])

        if images and (recipe["missing_taste"] or recipe["missing_difficulty"]):
            recipes_without_ratings.append(recipe)

        if not images:
            empty_recipes.append(recipe_file)
            continue

        for image in images:
            used_full.add(image)

            if image not in full_files:
                missing_full[image].append(recipe_file)

        first_image = images[0]

        if first_image not in tmb_files:
            missing_tmb.append({
                "image": first_image,
                "file": recipe_file,
            })

    unused_full = full_files - used_full

    print("\n" + "=" * 60)
    print("KONTROLA ZDJĘĆ PRZEPISÓW")
    print("=" * 60)

    print(f"\nLiczba przepisów: {len(recipes)}")
    print(f"Zdjęcia w full: {len(full_files)}")
    print(f"Zdjęcia użyte w przepisach: {len(used_full)}")
    print(f"Miniatury w tmb: {len(tmb_files)}")

    print("\n" + "-" * 60)
    print(f"BRAKUJĄCE ZDJĘCIA W FULL: {len(missing_full)}")
    print("-" * 60)

    if missing_full:
        for image, files in sorted(missing_full.items()):
            print(f"\n[!] {image}.jpg")
            for file in files:
                print(f"    -> {file}")
    else:
        print("OK - wszystkie zdjęcia istnieją.")

    print("\n" + "-" * 60)
    print(f"NIEUŻYWANE ZDJĘCIA W FULL: {len(unused_full)}")
    print("-" * 60)

    if unused_full:
        for image in sorted(unused_full):
            print(f"[!] {image}.jpg")
    else:
        print("OK - wszystkie zdjęcia są używane.")

    print("\n" + "-" * 60)
    print(f"BRAKUJĄCE MINIATURY W TMB: {len(missing_tmb)}")
    print("-" * 60)

    if missing_tmb:
        for item in missing_tmb:
            print(f"\n[!] {item['image']}.png")
            print(f"    -> {item['file']}")
    else:
        print("OK - wszystkie miniatury istnieją.")

    print("\n" + "-" * 60)
    print(f"PRZEPISY BEZ ZDJĘĆ: {len(empty_recipes)}")
    print("-" * 60)

    for file in empty_recipes:
        print(f"    {file}")

    errors = len(missing_full) + len(unused_full) + len(missing_tmb)

    print("\n" + "-" * 60)
    print(f"PRZEPISY ZE ZDJĘCIAMI BEZ OCEN: {len(recipes_without_ratings)}")
    print("-" * 60)

    if recipes_without_ratings:
        for recipe in recipes_without_ratings:
            missing = []

            if recipe["missing_taste"]:
                missing.append("taste")

            if recipe["missing_difficulty"]:
                missing.append("difficulty")

            print(f"\n[!] {recipe['file']}")
            print(f"    Brakuje: {', '.join(missing)}")
    else:
        print("OK - wszystkie przepisy ze zdjęciami mają oceny.")

    print("\n" + "=" * 60)

    if errors:
        print(f"WYKRYTO PROBLEMY: {errors}")
    else:
        print("WSZYSTKO OK - ZDJĘCIA SĄ POPRAWNIE POWIĄZANE!")

    print("=" * 60)


if __name__ == "__main__":
    main()
