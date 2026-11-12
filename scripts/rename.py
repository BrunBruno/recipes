import os

# Ścieżka do folderu z miniaturkami
folder_path = os.path.join("public", "tmb")
suffix_to_remove = "-removebg-preview"

# Sprawdzenie, czy folder w ogóle istnieje
if not os.path.exists(folder_path):
    print(f"Błąd: Folder '{folder_path}' nie istnieje!")
else:
    counter = 0
    # Przebieganie przez pliki w folderze
    for filename in os.listdir(folder_path):
        # Rozdzielamy nazwę na nazwę pliku i rozszerzenie (np. .png)
        name, ext = os.path.splitext(filename)
        
        # Sprawdzamy, czy nazwa kończy się pożądaną frazą
        if name.endswith(suffix_to_remove):
            # Tworzymy nową nazwę bez końcówki
            new_name = name[:-len(suffix_to_remove)] + ext
            
            # Pełne ścieżki do plików
            old_file = os.path.join(folder_path, filename)
            new_file = os.path.join(folder_path, new_name)
            
            # Zmiana nazwy pliku
            os.rename(old_file, new_file)
            print(f"Zmieniono: {filename} -> {new_name}")
            counter += 1

    print(f"\nOperacja zakończona. Zmieniono nazwę {counter} plików.")