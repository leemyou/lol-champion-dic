import { AlertEnum } from "@/enums/alertType";
import { atom } from "recoil";

export const alertState = atom({
  key: "alertState_key",
  default: {
    isOpen: false,
    hideDuration: 5000,
    message: "",
    type: AlertEnum.ERROR,
  },
});
