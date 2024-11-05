import { LanguageCodeEnums } from "@/enums/language";

/**
 * 언어 enum을 객체 배열로 리턴
 * @param data
 * @returns
 */
const langObjToArr = (data: { [key in LanguageCodeEnums]: string }) => {
  return Object.entries(data).map(([key, value]) => ({
    key: key,
    value: value,
  }));
};

export { langObjToArr };
