import type { JSX } from "react";
import type { KeyWord } from "../types";

type KeywordsIconProps = {
  type: KeyWord;
  color?: string;
};

const iconMap: Record<KeyWord, JSX.Element> = {
  ciasto: <span>🍰</span>,
  deser: <span>🍮</span>,
  biszkopt: <span>🍩</span>,
  wołowina: <span>🥩</span>,
  wieprzowina: <span>🍖</span>,
  kurczak: <span>🍗</span>,
  makaron: <span>🍝</span>,
  ryż: <span>🍚</span>,
  ziemniak: <span>🥔</span>,
  jajko: <span>🥚</span>,
  naleśnik: <span>🥞</span>,
  owoce: <span>🍎</span>,
  warzywa: <span>🥦</span>,
  sos: <span>🥫</span>,
  krem: <span>🍦</span>,
  ser: <span>🧀</span>,
  sałatka: <span>🥗</span>,
  indyk: <span>🦃</span>,
  pieczywo: <span>🍞</span>,
  ryba: <span>🐟</span>,
  zupa: <span>🍲</span>,
};

const KeywordsIcon = ({ type, color }: KeywordsIconProps) => {
  return <></>;

  const icon = iconMap[type];

  return <span style={{ color }}>{icon}</span>;
};

export default KeywordsIcon;
