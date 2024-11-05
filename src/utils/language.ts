import { LanguageCodeEnums } from "@/enums/language";

const getUserLanguage = (): LanguageCodeEnums => {
  let userLang = navigator.language
    //  || navigator.userLnguage
    .replace("-", "_");

  // 언어만 있을 경우 기본 국가 코드 추가
  switch (userLang) {
    case "ar":
      userLang = "ar_AE";
      break;
    case "cs":
      userLang = "cs_CZ";
      break;
    case "de":
      userLang = "de_DE";
      break;
    case "el":
      userLang = "el_GR";
      break;
    case "en":
      userLang = "en_US";
      break;
    case "es":
      userLang = "es_ES";
      break;
    case "fr":
      userLang = "fr_FR";
      break;
    case "hu":
      userLang = "hu_HU";
      break;
    case "it":
      userLang = "it_IT";
      break;
    case "ja":
      userLang = "ja_JP";
      break;
    case "ko":
      userLang = "ko_KR";
      break;
    case "pl":
      userLang = "pl_PL";
      break;
    case "pt":
      userLang = "pt_BR";
      break;
    case "ro":
      userLang = "ro_RO";
      break;
    case "ru":
      userLang = "ru_RU";
      break;
    case "th":
      userLang = "th_TH";
      break;
    case "tr":
      userLang = "tr_TR";
      break;
    case "vi":
      userLang = "vi_VN";
      break;
    case "zh":
      userLang = "zh_CN";
      break;
    default:
      break;
  }

  // 타입 단언을 통해 enum 값과 매칭 시도
  return (
    LanguageCodeEnums[userLang as keyof typeof LanguageCodeEnums] ||
    LanguageCodeEnums.en_US
  );
};

const checkLanguageEng = (text: string) => {
  var patternEng = /[a-zA-Z]/;

  return patternEng.test(text);
};

export { getUserLanguage, checkLanguageEng };
