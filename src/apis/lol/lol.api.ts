import axios from "axios";
import { ReqChampDetail, ResChampDetail, ResChampList } from "./lol.model";

// Axios 인스턴스 생성
const Axios = axios.create({
  baseURL: "https://ddragon.leagueoflegends.com/cdn",
  headers: {
    "Content-Type": "application/json",
  },
});

// TODO: 추후 파라미터(버전, 국가) 추가 필요
const getChampionList = async () => {
  return await Axios.get("/14.20.1/data/ko_KR/champion.json", {}).then(
    (res: { data: ResChampList }) => res.data
  );
};

// TODO: 추후 파라미터(버전, 국가) 추가 필요
const getChampionDetail = async (param: ReqChampDetail) => {
  return await Axios.get(
    `/14.20.1/data/ko_KR/champion/${param.champId}.json`,
    {}
  ).then((res: { data: ResChampDetail }) => res.data);
};

export { getChampionList, getChampionDetail };
