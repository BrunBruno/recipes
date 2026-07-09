import IngredientIcon from "../../assets/ingredientsIcon";
import UnitIcon from "../../assets/unitIcon";
import UtilsIcon from "../../assets/utilsIcon";
import { iOTH } from "../../ingredients/ingOther";
import type { IngredientItem, UnitType } from "../../types";
import { formatUnit, IngredientTypeData } from "../../utils";
import "./ingredient-card.css";

type IngredientCardProps = {
  ingredient: IngredientItem;
  onClose: () => void;
};

export default function IngredientCard({
  ingredient,
  onClose,
}: IngredientCardProps) {
  const [fat, carb, prot] = ingredient.nutrientsPer100g;

  const macroGradient = `
  conic-gradient(
    #ffa94d 0% ${fat}%,
    #99e9f2 ${fat}% ${fat + carb}%,
    #ff8787 ${fat + carb}% ${fat + carb + prot}%,
    #444 ${fat + carb + prot}% 100%
  )
`;

  const unitWeights = ingredient.unitWeights;
  const hasMultipleUnits = unitWeights && Object.keys(unitWeights).length > 1;

  console.log(hasMultipleUnits);

  return (
    <div className="ingredient-card-backdrop" onClick={onClose}>
      <div
        className="ingredient-card-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="ingredient-card-close" onClick={onClose}>
          <UtilsIcon name="close" color="#888" />
        </button>

        <header className="ingredient-card-title">
          <IngredientIcon
            ingType={ingredient.type}
            subType={ingredient.subType}
            color={ingredient.color}
          />

          <div>
            <h2>{ingredient.name}</h2>

            <span>{IngredientTypeData[ingredient.type].label}</span>
          </div>

          <div className="ing-verified">
            {ingredient.verified && <UtilsIcon name="check" color="#63e6be" />}
          </div>
        </header>

        <section className="ingredient-card-main">
          <div className="ingredient-card-main-row">
            <div className="ingredient-kcal">
              <strong>{ingredient.kcalPer100g}</strong>

              <span>kcal / 100g</span>
            </div>

            {ingredient.price !== undefined && (
              <div className="ingredient-price">
                <strong>{ingredient.price.toFixed(2)}</strong>

                <span>zł / kg</span>
              </div>
            )}
          </div>

          <div className="macro-section">
            <div
              className="macro-chart"
              style={{
                background: macroGradient,
              }}
            >
              <div>100g</div>
            </div>

            <div className="macro-list">
              <div>
                <i className="fat" />
                Tłuszcz
                <strong>{fat} g</strong>
              </div>

              <div>
                <i className="carb" />
                Węglowodany
                <strong>{carb} g</strong>
              </div>

              <div>
                <i className="prot" />
                Białko
                <strong>{prot} g</strong>
              </div>
            </div>
          </div>

          {unitWeights && Object.keys(unitWeights).length > 0 && (
            <div
              className={`ingredient-units ${hasMultipleUnits ? "mult-rows" : ""}`}
            >
              <h3>Przeliczniki</h3>

              {Object.entries(unitWeights).map(([unit, weight]) => (
                <div key={unit} className={`units-row`}>
                  <span>
                    <UnitIcon type={unit as UnitType} color="#aaa" />
                    {formatUnit({
                      ing: iOTH.none,
                      amount: 1,
                      unit: unit as UnitType,
                    })}
                  </span>
                  <strong>{weight}g</strong>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
