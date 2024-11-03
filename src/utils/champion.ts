import { ResChampList } from "@/apis/lol/lol.model";

const champListToChampNode = (listData: ResChampList) => {
  return Object.entries(listData.data).map(([_, value]) => ({
    id: value.id,
    img: `https://ddragon.leagueoflegends.com/cdn/14.21.1/img/champion/${value.image.full}`,
    name: value.name,
  }));
};

export { champListToChampNode };
