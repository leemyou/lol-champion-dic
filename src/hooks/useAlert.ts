import { AlertEnum } from "@/enums/alertType";
import { alertState } from "@/recoils/alert";
import { useCallback } from "react";
import { useRecoilState } from "recoil";

export type alertOpenType = {
  message: string;
  hideDuration?: number;
  alertType?: AlertEnum;
};

export const useAlert = () => {
  const [alert, setAlert] = useRecoilState(alertState);

  const onAlertOpen = useCallback(
    ({
      message,
      hideDuration = 5000,
      alertType = AlertEnum.INFO,
    }: alertOpenType) => {
      setAlert((prev) => ({
        ...prev,
        message: message,
        hideDuration: hideDuration,
        type: alertType,
        isOpen: true,
      }));
    },
    [setAlert]
  );

  const onAlertClose = useCallback(() => {
    setAlert((prev) => ({ ...prev, isOpen: false }));
  }, [setAlert]);

  return {
    isOpen: alert.isOpen,
    alertOption: alert,
    onAlertOpen,
    onAlertClose,
  };
};
