import React, { useMemo } from "react";

import { useChampionDetail } from "@/apis";
import { IChampionDetail } from "@/apis/lol/lol.model";

import { Modal } from "@/components";
import { useModal, useFilter } from "@/hooks";

export type championData = {
  champId: string;
  bgImgMb: string;
  bgImg: string;
  champName: string;
  champTitle: string;
  champLore: string;
  champTags: string[];
};

type DetailModalProps = {};

export const DetailModal: React.FC<DetailModalProps> = ({}) => {
  const { closeModal, open, championId } = useModal();
  const { language } = useFilter();

  const { data, isLoading } = useChampionDetail({
    champId: championId,
    language: language,
  });

  const champData: championData = useMemo(() => {
    const champion = (data?.data?.[championId] as IChampionDetail) || {};
    return {
      champId: championId,
      bgImgMb: `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championId}_0.jpg`,
      bgImg: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championId}_0.jpg`,
      champName: champion.name || "",
      champTitle: champion.title || "",
      champLore: champion.lore || "",
      champTags: champion.tags || [],
    };
  }, [championId, data]);

  return (
    <Modal
      isOpen={open}
      handleClose={closeModal}
      isLoading={isLoading}
      champData={champData}
    />
  );
};
