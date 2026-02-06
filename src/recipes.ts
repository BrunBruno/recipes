import type { Recipe } from "./types";

const modules = import.meta.glob("./data/*.ts", {
  eager: true,
});

const loadedRecipes: Recipe[] = Object.values(modules).map(
  (mod: any) => mod.default as Recipe,
);

export const recipes: Recipe[] = loadedRecipes.sort((a, b) =>
  a.name.localeCompare(b.name),
);
