import { modalState } from "@/recoils/modal";
import { useCallback } from "react";
import { useRecoilState } from "recoil";

export const useModal = () => {
  const [isOpen, setIsOpen] = useRecoilState(modalState);

  const openModal = useCallback(
    (id: string) => {
      setIsOpen({ isOpen: true, champId: id });
    },
    [setIsOpen]
  );

  const closeModal = useCallback(() => {
    setIsOpen({ isOpen: false, champId: "" });
  }, [setIsOpen]);

  return {
    open: isOpen.isOpen,
    championId: isOpen.champId,
    openModal,
    closeModal,
  };
};
