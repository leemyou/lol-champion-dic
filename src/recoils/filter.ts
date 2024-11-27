import { RelationEnums } from "@/enums";
import { getUserLanguage } from "@/utils/language";
import { atom } from "recoil";

export const relationChecked = [
  RelationEnums.FAMILY,
  RelationEnums.LOVERS,
  RelationEnums.EX_LOVERS,
];

export const regionChecked = [
  "Demacia",
  "Noxus",
  "Bilgewater",
  "Freljord",
  "ShadowIsles",
  "Shurima",
  "Ixtal",
  "Ionia",
  "BandleCity",
  "Targon",
  "Zaun",
  "Void",
  "Piltover",
  "Runeterra",
];

export const filterState = atom({
  key: "filterState_key",
  default: {
    language: getUserLanguage(),
    relation: relationChecked,
    region: regionChecked,
  },
});
