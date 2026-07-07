import type { Recipe } from "./types";

const modules = import.meta.glob("./data/**/*.ts", {
  eager: true,
});

const loadedRecipes: Recipe[] = Object.entries(modules).map(
  ([path, mod]: [string, any]) => ({
    ...(mod.default as Recipe),
    fileName: path.split("/").pop()!.replace(".ts", ""),
  }),
);

export const recipes: Recipe[] = loadedRecipes.sort((a, b) => {
  const aDone = a.images.some((img) => img.trim() !== "");
  const bDone = b.images.some((img) => img.trim() !== "");

  if (aDone !== bDone) return bDone ? 1 : -1;

  return a.name.localeCompare(b.name);
});
