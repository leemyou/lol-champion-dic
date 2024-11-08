import React from "react";
import {
  Chip,
  Grid2,
  Box,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import { SearchRounded } from "@mui/icons-material";
import { ChampionCard } from "../ChampionCard";

interface Champion {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  tags: string[];
  partype: string;
  stats: {
    [key: string]: number;
  };
}

interface ChampionData {
  [key: string]: Champion;
}

export const Main = () => {
  const handleSearch = () => {
    console.log("search");
  };

  const handleEnter = (
    event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (event.key === "Enter") {
      // 엔터키가 눌렸을 때 실행할 로직
      handleSearch();
    }
  };

  const handleDelete = () => {
    console.log("run delete");
  };

  const testData: ChampionData = {
    Aatrox: {
      version: "14.20.1",
      id: "Aatrox",
      key: "266",
      name: "아트록스",
      title: "다르킨의 검",
      blurb:
        "한때는 공허에 맞서 싸웠던 슈리마의 명예로운 수호자 아트록스와 그의 종족은 결국 공허보다 위험한 존재가 되어 룬테라의 존속을 위협했지만, 교활한 필멸자의 마법에 속아넘어가 패배하게 되었다. 수백 년에 걸친 봉인 끝에, 아트록스는 자신의 정기가 깃든 마법 무기를 휘두르는 어리석은 자들을 타락시키고 육신을 바꾸는 것으로 다시 한번 자유의 길을 찾아내었다. 이제 이전의 잔혹한 모습을 닮은 육체를 차지한 아트록스는 세상의 종말과 오랫동안 기다려온 복수를...",
      info: {
        attack: 8,
        defense: 4,
        magic: 3,
        difficulty: 4,
      },
      image: {
        full: "Aatrox.png",
        sprite: "champion0.png",
        group: "champion",
        x: 0,
        y: 0,
        w: 48,
        h: 48,
      },
      tags: ["Fighter"],
      partype: "피의 샘",
      stats: {
        hp: 650,
        hpperlevel: 114,
        mp: 0,
        mpperlevel: 0,
        movespeed: 345,
        armor: 38,
        armorperlevel: 4.8,
        spellblock: 32,
        spellblockperlevel: 2.05,
        attackrange: 175,
        hpregen: 3,
        hpregenperlevel: 0.5,
        mpregen: 0,
        mpregenperlevel: 0,
        crit: 0,
        critperlevel: 0,
        attackdamage: 60,
        attackdamageperlevel: 5,
        attackspeedperlevel: 2.5,
        attackspeed: 0.651,
      },
    },
    Ahri: {
      version: "14.20.1",
      id: "Ahri",
      key: "103",
      name: "아리",
      title: "구미호",
      blurb:
        "영혼 세계의 마법과 선천적으로 연결된 아리는 먹잇감의 감정을 조종하고 정수를 집어삼킬 수 있는 여우 모습의 바스타야로, 영혼을 먹어 치울 때마다 그 안에 담긴 지혜와 기억의 편린을 받아들인다. 강력하면서도 불안정한 포식자였던 아리는 이제 조상들의 흔적을 찾아 세상을 여행하며 지금껏 훔친 기억을 버리고 스스로 자신만의 추억을 쌓으려 한다.",
      info: {
        attack: 3,
        defense: 4,
        magic: 8,
        difficulty: 5,
      },
      image: {
        full: "Ahri.png",
        sprite: "champion0.png",
        group: "champion",
        x: 48,
        y: 0,
        w: 48,
        h: 48,
      },
      tags: ["Mage", "Assassin"],
      partype: "마나",
      stats: {
        hp: 590,
        hpperlevel: 104,
        mp: 418,
        mpperlevel: 25,
        movespeed: 330,
        armor: 21,
        armorperlevel: 4.7,
        spellblock: 30,
        spellblockperlevel: 1.3,
        attackrange: 550,
        hpregen: 2.5,
        hpregenperlevel: 0.6,
        mpregen: 8,
        mpregenperlevel: 0.8,
        crit: 0,
        critperlevel: 0,
        attackdamage: 53,
        attackdamageperlevel: 3,
        attackspeedperlevel: 2.2,
        attackspeed: 0.668,
      },
    },
    Akali: {
      version: "14.20.1",
      id: "Akali",
      key: "84",
      name: "아칼리",
      title: "섬기는 이 없는 암살자",
      blurb:
        "킨코우 결사단과 그림자의 권이라는 지위를 버린 아칼리는 아이오니아인들에게 필요한 강력한 무기가 되어 홀로 싸우고 있다. 스승 쉔의 가르침을 잊지 않은 채 아이오니아의 적을 하나씩 암살하기로 맹세했다. 아칼리의 살행은 은밀할지 모르나 그녀의 메시지는 대륙 전체를 뒤흔든다. ''경외하라. 나는 섬기는 이 없는 암살자다.''",
      info: {
        attack: 5,
        defense: 3,
        magic: 8,
        difficulty: 7,
      },
      image: {
        full: "Akali.png",
        sprite: "champion0.png",
        group: "champion",
        x: 96,
        y: 0,
        w: 48,
        h: 48,
      },
      tags: ["Assassin"],
      partype: "기력",
      stats: {
        hp: 600,
        hpperlevel: 119,
        mp: 200,
        mpperlevel: 0,
        movespeed: 345,
        armor: 23,
        armorperlevel: 4.7,
        spellblock: 37,
        spellblockperlevel: 2.05,
        attackrange: 125,
        hpregen: 9,
        hpregenperlevel: 0.9,
        mpregen: 50,
        mpregenperlevel: 0,
        crit: 0,
        critperlevel: 0,
        attackdamage: 62,
        attackdamageperlevel: 3.3,
        attackspeedperlevel: 3.2,
        attackspeed: 0.625,
      },
    },
    Akshan: {
      version: "14.20.1",
      id: "Akshan",
      key: "166",
      name: "아크샨",
      title: "떠도는 감시자",
      blurb:
        "상반신을 드러낸 아크샨은 위험에 직면하면 눈썹을 치켜올리며 당당한 카리스마, 정의로운 복수심으로 악과 맞서 싸운다. 전투에서 뛰어난 은신술을 발휘하며 적의 눈을 피한 후 제일 예기치 못한 순간 다시 모습을 드러낸다. 불타는 정의감과 죽음을 되돌리는 전설적인 무기로 룬테라의 수많은 악한들이 저지른 잘못을 바로잡으며 '멍청이가 되지 말자'라는 자신만의 도덕적 기준에 따라 살아간다.",
      info: {
        attack: 0,
        defense: 0,
        magic: 0,
        difficulty: 0,
      },
      image: {
        full: "Akshan.png",
        sprite: "champion0.png",
        group: "champion",
        x: 144,
        y: 0,
        w: 48,
        h: 48,
      },
      tags: ["Marksman", "Assassin"],
      partype: "마나",
      stats: {
        hp: 630,
        hpperlevel: 107,
        mp: 350,
        mpperlevel: 40,
        movespeed: 330,
        armor: 26,
        armorperlevel: 4.7,
        spellblock: 30,
        spellblockperlevel: 1.3,
        attackrange: 500,
        hpregen: 3.75,
        hpregenperlevel: 0.65,
        mpregen: 8.2,
        mpregenperlevel: 0.7,
        crit: 0,
        critperlevel: 0,
        attackdamage: 52,
        attackdamageperlevel: 3,
        attackspeedperlevel: 4,
        attackspeed: 0.638,
      },
    },
    Alistar: {
      version: "14.20.1",
      id: "Alistar",
      key: "12",
      name: "알리스타",
      title: "미노타우로스",
      blurb:
        "비할 데 없이 강력한 전사라는 평판이 자자한 알리스타는 녹서스 제국에게 부족 전체가 몰살당한 이래 그 복수를 꿈꾸고 있다. 노예로 잡힌 후 참혹한 전투를 거듭해야 하는 검투사 신세가 되었으나, 그 누구도 꺾을 수 없는 의지가 있어 마음 깊은 곳까지 야수로 변하지는 않았다. 알리스타는 노예라는 구속에서 벗어나 자유의 몸이 된 후에도 탄압당하고 기댈 곳 없는 자들을 위해 싸우고 있다. 알리스타의 분노는 그의 뿔이나 발굽, 주먹 못지 않게 적들이...",
      info: {
        attack: 6,
        defense: 9,
        magic: 5,
        difficulty: 7,
      },
      image: {
        full: "Alistar.png",
        sprite: "champion0.png",
        group: "champion",
        x: 192,
        y: 0,
        w: 48,
        h: 48,
      },
      tags: ["Tank", "Support"],
      partype: "마나",
      stats: {
        hp: 685,
        hpperlevel: 120,
        mp: 350,
        mpperlevel: 40,
        movespeed: 330,
        armor: 47,
        armorperlevel: 4.7,
        spellblock: 32,
        spellblockperlevel: 2.05,
        attackrange: 125,
        hpregen: 8.5,
        hpregenperlevel: 0.85,
        mpregen: 8.5,
        mpregenperlevel: 0.8,
        crit: 0,
        critperlevel: 0,
        attackdamage: 62,
        attackdamageperlevel: 3.75,
        attackspeedperlevel: 2.125,
        attackspeed: 0.625,
      },
    },
    Amumu: {
      version: "14.20.1",
      id: "Amumu",
      key: "32",
      name: "아무무",
      title: "슬픈 미라",
      blurb:
        "뼛속까지 사무치는 외로움과 쓸쓸함 속에 살아가는 아무무. 평생을 오로지 마음을 나눌 수 있는 단 한 명의 친구를 찾아 헤매는, 고대 슈리마 제국의 가엾은 영혼이다. 끔찍한 저주를 받은 아무무는 영원히 혼자인 채로 남겨졌다. 그 저주란 지독하리만큼 잔인한 것이었다. 상대가 누구든 아무무와의 신체적 접촉은 죽음을 의미했고 정서적 교류는 파멸을 불러왔다. 그의 운명을 아는 한 누구도 그를 가까이하려 들지 않았다. 간혹 아무무를 봤다는 이들은 그를 두고...",
      info: {
        attack: 2,
        defense: 6,
        magic: 8,
        difficulty: 3,
      },
      image: {
        full: "Amumu.png",
        sprite: "champion0.png",
        group: "champion",
        x: 240,
        y: 0,
        w: 48,
        h: 48,
      },
      tags: ["Tank", "Support"],
      partype: "마나",
      stats: {
        hp: 685,
        hpperlevel: 94,
        mp: 285,
        mpperlevel: 40,
        movespeed: 335,
        armor: 33,
        armorperlevel: 4,
        spellblock: 32,
        spellblockperlevel: 2.05,
        attackrange: 125,
        hpregen: 9,
        hpregenperlevel: 0.85,
        mpregen: 7.4,
        mpregenperlevel: 0.55,
        crit: 0,
        critperlevel: 0,
        attackdamage: 57,
        attackdamageperlevel: 3.8,
        attackspeedperlevel: 2.18,
        attackspeed: 0.736,
      },
    },
    Anivia: {
      version: "14.20.1",
      id: "Anivia",
      key: "34",
      name: "애니비아",
      title: "얼음불사조",
      blurb:
        "애니비아는 삶과 죽음, 부활을 끊임없이 반복하며 프렐요드를 지키는 날개 달린 반신이다. 매섭기 짝이 없는 얼음과 칼바람에서 태어났으며, 이런 자연의 힘을 자유자재로 이용하여 자신의 고향땅을 어지럽히려 드는 무모한 자들을 응징한다. 혹한의 북쪽에 터를 잡은 부족들에게 애니비아는 그들을 이끌고 보호하는 자애로운 존재로, 희망의 상징이자 크나큰 변화를 가져오는 징조로 숭배를 받는다. 애니비아는 전장에서 죽음을 두려워하지 않고 전력을 다해 싸운다. 자신을...",
      info: {
        attack: 1,
        defense: 4,
        magic: 10,
        difficulty: 10,
      },
      image: {
        full: "Anivia.png",
        sprite: "champion0.png",
        group: "champion",
        x: 288,
        y: 0,
        w: 48,
        h: 48,
      },
      tags: ["Mage"],
      partype: "마나",
      stats: {
        hp: 550,
        hpperlevel: 92,
        mp: 495,
        mpperlevel: 45,
        movespeed: 325,
        armor: 21,
        armorperlevel: 4.9,
        spellblock: 30,
        spellblockperlevel: 1.3,
        attackrange: 600,
        hpregen: 5.5,
        hpregenperlevel: 0.55,
        mpregen: 8,
        mpregenperlevel: 0.8,
        crit: 0,
        critperlevel: 0,
        attackdamage: 51,
        attackdamageperlevel: 3.2,
        attackspeedperlevel: 1.68,
        attackspeed: 0.658,
      },
    },
    Annie: {
      version: "14.20.1",
      id: "Annie",
      key: "1",
      name: "애니",
      title: "어둠의 아이",
      blurb:
        "순수함 속에 아이답지 않은 위험한 모습을 간직한 애니는 불을 다루는 강력한 마법사다. 녹서스 북부의 산속에서 그림자처럼 숨어 지내면서도 그녀의 마법은 두각을 드러냈다. 아기였을 때부터 예측할 수 없는 감정의 분출과 함께 타고난 화염 친화성을 보인 애니는 곧 이런 '재주'를 제어할 수 있게 되었다. 그 중 사랑하는 곰 인형 '티버'를 열렬한 수호자로 소환하는 것을 가장 좋아한다. 끝 모를 동심을 품은 애니는 언제나 어두운 숲을 거닐며 같이 놀 누군가를...",
      info: {
        attack: 2,
        defense: 3,
        magic: 10,
        difficulty: 6,
      },
      image: {
        full: "Annie.png",
        sprite: "champion0.png",
        group: "champion",
        x: 336,
        y: 0,
        w: 48,
        h: 48,
      },
      tags: ["Mage", "Support"],
      partype: "마나",
      stats: {
        hp: 560,
        hpperlevel: 102,
        mp: 418,
        mpperlevel: 25,
        movespeed: 335,
        armor: 19,
        armorperlevel: 4.7,
        spellblock: 30,
        spellblockperlevel: 1.3,
        attackrange: 625,
        hpregen: 5.5,
        hpregenperlevel: 0.55,
        mpregen: 8,
        mpregenperlevel: 0.8,
        crit: 0,
        critperlevel: 0,
        attackdamage: 50,
        attackdamageperlevel: 2.65,
        attackspeedperlevel: 1.36,
        attackspeed: 0.61,
      },
    },
    Aphelios: {
      version: "14.20.1",
      id: "Aphelios",
      key: "523",
      name: "아펠리오스",
      title: "신념의 무기",
      blurb:
        "달그림자에서 나타나는 아펠리오스는 음울한 적막 속에서 적을 쓰러뜨린다. 정확한 조준과 총성만이 그의 목소리를 대신한다. 독에 중독되어 말을 할 수 없게 되었지만 머나먼 사원에 있는 쌍둥이 여동생 알룬이 그를 인도하며 월석의 힘을 그의 손에 쥐여 준다. 하늘에서 달이 빛나는 한 아펠리오스는 결코 혼자가 아니다.",
      info: {
        attack: 6,
        defense: 2,
        magic: 1,
        difficulty: 10,
      },
      image: {
        full: "Aphelios.png",
        sprite: "champion0.png",
        group: "champion",
        x: 384,
        y: 0,
        w: 48,
        h: 48,
      },
      tags: ["Marksman"],
      partype: "마나",
      stats: {
        hp: 600,
        hpperlevel: 102,
        mp: 348,
        mpperlevel: 42,
        movespeed: 325,
        armor: 26,
        armorperlevel: 4.2,
        spellblock: 30,
        spellblockperlevel: 1.3,
        attackrange: 550,
        hpregen: 3.25,
        hpregenperlevel: 0.55,
        mpregen: 6.5,
        mpregenperlevel: 0.4,
        crit: 0,
        critperlevel: 0,
        attackdamage: 55,
        attackdamageperlevel: 2.3,
        attackspeedperlevel: 2.1,
        attackspeed: 0.64,
      },
    },
    Ashe: {
      version: "14.20.1",
      id: "Ashe",
      key: "22",
      name: "애쉬",
      title: "서리 궁수",
      blurb:
        "아바로사 부족의 냉기의 화신이자 전쟁의 어머니인 애쉬는 북방에서 가장 규모가 큰 군단을 이끌고 있다. 절제력이 뛰어나고 총명한데다 이상주의적인 면을 갖추고 있지만 지도자라는 역할을 부담스러워하기도 한다. 고대 마법의 힘이 흐르는 혈통을 이어받았기에 얼음 정수의 활을 무기로 사용할 수 있다. 아바로사 부족민들은 애쉬가 전설 속 영웅 아바로사 여왕의 화신이라고 굳게 믿으며, 애쉬는 이들과 함께 먼 옛날 자신의 부족이 살았던 영토를 되찾아 다시 한 번...",
      info: {
        attack: 7,
        defense: 3,
        magic: 2,
        difficulty: 4,
      },
      image: {
        full: "Ashe.png",
        sprite: "champion0.png",
        group: "champion",
        x: 432,
        y: 0,
        w: 48,
        h: 48,
      },
      tags: ["Marksman", "Support"],
      partype: "마나",
      stats: {
        hp: 610,
        hpperlevel: 101,
        mp: 280,
        mpperlevel: 35,
        movespeed: 325,
        armor: 26,
        armorperlevel: 4.6,
        spellblock: 30,
        spellblockperlevel: 1.3,
        attackrange: 600,
        hpregen: 3.5,
        hpregenperlevel: 0.55,
        mpregen: 7,
        mpregenperlevel: 0.65,
        crit: 0,
        critperlevel: 0,
        attackdamage: 59,
        attackdamageperlevel: 2.95,
        attackspeedperlevel: 3.33,
        attackspeed: 0.658,
      },
    },
    AurelionSol: {
      version: "14.20.1",
      id: "AurelionSol",
      key: "136",
      name: "아우렐리온 솔",
      title: "별의 창조자",
      blurb:
        "아우렐리온 솔은 천상의 경이로운 별들을 손수 빚어 한때 텅 비어있던 광활한 우주를 수놓았다. 그러나 이제 그는 속임수로 자신을 복종시킨 우주 제국의 명령에 따라 자신의 막강한 힘을 발휘해야 하는 처지가 되었다. 별을 만들던 때로 돌아가려는 열망에 불타는 아우렐리온 솔은 자신의 자유를 되찾기 위해서라면 자신의 창조물인 별들을 하늘에서 없앨 각오마저 되어 있다.",
      info: {
        attack: 2,
        defense: 3,
        magic: 8,
        difficulty: 7,
      },
      image: {
        full: "AurelionSol.png",
        sprite: "champion0.png",
        group: "champion",
        x: 0,
        y: 48,
        w: 48,
        h: 48,
      },
      tags: ["Mage"],
      partype: "마나",
      stats: {
        hp: 620,
        hpperlevel: 90,
        mp: 530,
        mpperlevel: 40,
        movespeed: 335,
        armor: 22,
        armorperlevel: 4,
        spellblock: 30,
        spellblockperlevel: 1.3,
        attackrange: 550,
        hpregen: 5.5,
        hpregenperlevel: 0.55,
        mpregen: 8,
        mpregenperlevel: 0.75,
        crit: 0,
        critperlevel: 0,
        attackdamage: 58,
        attackdamageperlevel: 3.2,
        attackspeedperlevel: 1.5,
        attackspeed: 0.625,
      },
    },
    Aurora: {
      version: "14.20.1",
      id: "Aurora",
      key: "893",
      name: "오로라",
      title: "세계의 경계에 선 마녀",
      blurb:
        "태어난 순간부터 오로라는 영혼 세계와 물질 세계를 넘나드는 특별한 능력으로 삶의 길을 찾았다. 영혼 세계의 주민들에 대해 더 알고 싶었던 오로라는 자신의 고향을 떠났고, 시간 속에 뒤틀리고 길을 잃어 방황하는 반신을 만났다. 그의 절박함을 목격한 오로라는 자신의 거친 친구가 잊어버린 자아를 되찾도록 도와줄 방법을 찾기로 결심했고 프렐요드의 가장 먼 곳으로 여정을 떠났다.",
      info: {
        attack: 3,
        defense: 4,
        magic: 8,
        difficulty: 5,
      },
      image: {
        full: "Aurora.png",
        sprite: "champion0.png",
        group: "champion",
        x: 48,
        y: 48,
        w: 48,
        h: 48,
      },
      tags: ["Mage", "Assassin"],
      partype: "마나",
      stats: {
        hp: 607,
        hpperlevel: 110,
        mp: 475,
        mpperlevel: 30,
        movespeed: 335,
        armor: 23,
        armorperlevel: 4.5,
        spellblock: 30,
        spellblockperlevel: 1.3,
        attackrange: 550,
        hpregen: 6,
        hpregenperlevel: 0.55,
        mpregen: 8,
        mpregenperlevel: 0.8,
        crit: 0,
        critperlevel: 0,
        attackdamage: 53,
        attackdamageperlevel: 3,
        attackspeedperlevel: 2,
        attackspeed: 0.668,
      },
    },
    Azir: {
      version: "14.20.1",
      id: "Azir",
      key: "268",
      name: "아지르",
      title: "사막의 황제",
      blurb:
        "불멸을 꿈꾸던 고대 슈리마의 거만한 황제, 아지르. 그의 오만은 생애 최전성기에 그를 배반과 죽음으로 몰아 넣었다. 그 후 수천 년이 흘렀고, 아지르는 가공할 힘을 지닌 초월체로 다시 태어났다. 사막 아래 묻혀 있던 그의 도시가 지표면 위로 솟아 오르는 장관을 목도하며 아지르는 슈리마 제국의 옛 영광을 되살리겠다고 다짐한다.",
      info: {
        attack: 6,
        defense: 3,
        magic: 8,
        difficulty: 9,
      },
      image: {
        full: "Azir.png",
        sprite: "champion0.png",
        group: "champion",
        x: 96,
        y: 48,
        w: 48,
        h: 48,
      },
      tags: ["Mage", "Marksman"],
      partype: "마나",
      stats: {
        hp: 550,
        hpperlevel: 119,
        mp: 320,
        mpperlevel: 40,
        movespeed: 335,
        armor: 25,
        armorperlevel: 5,
        spellblock: 30,
        spellblockperlevel: 1.3,
        attackrange: 525,
        hpregen: 5,
        hpregenperlevel: 0.75,
        mpregen: 8,
        mpregenperlevel: 0.8,
        crit: 0,
        critperlevel: 0,
        attackdamage: 52,
        attackdamageperlevel: 3.5,
        attackspeedperlevel: 6,
        attackspeed: 0.625,
      },
    },
    Bard: {
      version: "14.20.1",
      id: "Bard",
      key: "432",
      name: "바드",
      title: "영겁의 수호자",
      blurb:
        "별 너머에서 온 여행자 바드는 뜻밖의 발견과 예기치 않은 행운을 수호하며, 삶이 무심한 혼돈을 견딜 수 있도록 우주의 균형을 유지하기 위해 싸운다. 룬테라 인들은 바드가 신비하고 초월자적인 존재라는 내용의 노래를 곧잘 흥얼거리지만, 이 우주의 방랑자가 강력한 마법의 힘이 깃든 유물에 집착한다는 사실은 모든 룬테라 인이 동의하는 바다. 하지만 유익한 정령들이 내는 환희 어린 합창에 둘러싸인 바드가 악의를 지니고 있는 것은 아닐 터이다. 바드는 필멸의...",
      info: {
        attack: 4,
        defense: 4,
        magic: 5,
        difficulty: 9,
      },
      image: {
        full: "Bard.png",
        sprite: "champion0.png",
        group: "champion",
        x: 144,
        y: 48,
        w: 48,
        h: 48,
      },
      tags: ["Support", "Mage"],
      partype: "마나",
      stats: {
        hp: 630,
        hpperlevel: 103,
        mp: 350,
        mpperlevel: 50,
        movespeed: 330,
        armor: 34,
        armorperlevel: 5,
        spellblock: 30,
        spellblockperlevel: 1.3,
        attackrange: 500,
        hpregen: 5.5,
        hpregenperlevel: 0.55,
        mpregen: 6,
        mpregenperlevel: 0.45,
        crit: 0,
        critperlevel: 0,
        attackdamage: 52,
        attackdamageperlevel: 3,
        attackspeedperlevel: 2,
        attackspeed: 0.658,
      },
    },
    Belveth: {
      version: "14.20.1",
      id: "Belveth",
      key: "200",
      name: "벨베스",
      title: "공허의 여제",
      blurb:
        "잡아먹힌 도시를 재료로 만들어진 사악한 여제 벨베스는 룬테라의 종말이자, 자신이 만든 끔찍한 현실의 시작이기도 하다. 그녀는 지상 세계의 바뀐 역사와 지식, 기억의 시대에 힘입어 새로운 경험과 감정에 대한 갈망을 채우고, 마주치는 모든 것을 집어삼킨다. 하지만 하나의 세계만으로 굶주림을 채우지 못한 벨베스는 공허의 옛 주인들에게 눈을 돌린다...",
      info: {
        attack: 4,
        defense: 2,
        magic: 7,
        difficulty: 10,
      },
      image: {
        full: "Belveth.png",
        sprite: "champion0.png",
        group: "champion",
        x: 192,
        y: 48,
        w: 48,
        h: 48,
      },
      tags: ["Fighter"],
      partype: "",
      stats: {
        hp: 610,
        hpperlevel: 99,
        mp: 60,
        mpperlevel: 0,
        movespeed: 340,
        armor: 32,
        armorperlevel: 4.7,
        spellblock: 32,
        spellblockperlevel: 2.05,
        attackrange: 150,
        hpregen: 6,
        hpregenperlevel: 0.6,
        mpregen: 0,
        mpregenperlevel: 0,
        crit: 0,
        critperlevel: 0,
        attackdamage: 60,
        attackdamageperlevel: 1.5,
        attackspeedperlevel: 0,
        attackspeed: 0.85,
      },
    },
    Blitzcrank: {
      version: "14.20.1",
      id: "Blitzcrank",
      key: "53",
      name: "블리츠크랭크",
      title: "거대 증기 골렘",
      blurb:
        "블리츠크랭크는 지하도시 자운의 기술이 만들어낸 거대한 기계로 사실상 파괴불가능에 가깝다. 원래는 자운을 뒤덮은 유독 폐기물을 처리하기 위해 만들어진 골렘이었으나, 연약하기 짝이 없는 자운 시민들을 지키기 위해서는 폐기물을 치우는 것만으로는 모자란다고 판단하여 스스로 형체를 변형시키기에 이르렀다. 블리츠크랭크는 골렘다운 힘과 내구성을 사심 없이 활용하여 사람들을 보호하고, 말썽꾼이 눈에 띄면 강철 주먹을 내지르거나 에너지를 분출하여 진압한다.",
      info: {
        attack: 4,
        defense: 8,
        magic: 5,
        difficulty: 4,
      },
      image: {
        full: "Blitzcrank.png",
        sprite: "champion0.png",
        group: "champion",
        x: 240,
        y: 48,
        w: 48,
        h: 48,
      },
      tags: ["Tank", "Support"],
      partype: "마나",
      stats: {
        hp: 600,
        hpperlevel: 109,
        mp: 267,
        mpperlevel: 40,
        movespeed: 325,
        armor: 37,
        armorperlevel: 4.7,
        spellblock: 32,
        spellblockperlevel: 2.05,
        attackrange: 125,
        hpregen: 7.5,
        hpregenperlevel: 0.75,
        mpregen: 8.5,
        mpregenperlevel: 0.8,
        crit: 0,
        critperlevel: 0,
        attackdamage: 62,
        attackdamageperlevel: 3.5,
        attackspeedperlevel: 1.13,
        attackspeed: 0.625,
      },
    },
    Brand: {
      version: "14.20.1",
      id: "Brand",
      key: "63",
      name: "브랜드",
      title: "타오르는 복수",
      blurb:
        "케간 로디는 얼음이 뒤덮인 프렐요드의 어느 부족민이었으나 거대한 힘의 유혹에 넘어가 브랜드가 되었다. 전설처럼 전해지는 세계 룬 중 하나를 찾아나선 그는 막판에 동료들을 배신하고 세계 룬을 혼자 차지했다. 그리고 다음 순간, 케간 로디는 더 이상 존재하지 않았다. 영혼은 불에 타 사라지고, 육신은 살아 있는 화염에 휩싸여 브랜드가 되어버린 것이다. 브랜드는 이제 또 다른 세계 룬을 찾아 발로란을 헤매며, 필멸자는 십여 번을 다시 태어나 산다 해도...",
      info: {
        attack: 2,
        defense: 2,
        magic: 9,
        difficulty: 4,
      },
      image: {
        full: "Brand.png",
        sprite: "champion0.png",
        group: "champion",
        x: 288,
        y: 48,
        w: 48,
        h: 48,
      },
      tags: ["Mage", "Support"],
      partype: "마나",
      stats: {
        hp: 570,
        hpperlevel: 105,
        mp: 469,
        mpperlevel: 21,
        movespeed: 340,
        armor: 27,
        armorperlevel: 4.2,
        spellblock: 30,
        spellblockperlevel: 1.3,
        attackrange: 550,
        hpregen: 5.5,
        hpregenperlevel: 0.55,
        mpregen: 10.65,
        mpregenperlevel: 0.6,
        crit: 0,
        critperlevel: 0,
        attackdamage: 57,
        attackdamageperlevel: 3,
        attackspeedperlevel: 2,
        attackspeed: 0.681,
      },
    },
    Braum: {
      version: "14.20.1",
      id: "Braum",
      key: "201",
      name: "브라움",
      title: "프렐요드의 심장",
      blurb:
        "축복받은 거대 이두박근과 그보다도 더 크고 호방한 마음을 지닌 브라움은 프렐요드 주민들이 사랑해 마지않는 영웅이다. 프로스텔드 북방에서 연회가 열리면 빠지지 않는 순서가 바로 브라움의 팔힘에 건배를 하는 것이다. 전설에 따르면 브라움은 단 하룻밤에 오크나무 숲 전체를 베어버렸고, 산 하나를 주먹으로 부수어 돌무더기로 만들어 버렸다고 한다. 마법이 깃든 동굴 문짝을 방패 삼아 들고, 근육만큼이나 커다란 콧수염 아래 사람 좋은 미소를 활짝 띤 브라움은...",
      info: {
        attack: 3,
        defense: 9,
        magic: 4,
        difficulty: 3,
      },
      image: {
        full: "Braum.png",
        sprite: "champion0.png",
        group: "champion",
        x: 336,
        y: 48,
        w: 48,
        h: 48,
      },
      tags: ["Tank", "Support"],
      partype: "마나",
      stats: {
        hp: 610,
        hpperlevel: 112,
        mp: 311,
        mpperlevel: 45,
        movespeed: 335,
        armor: 47,
        armorperlevel: 5.2,
        spellblock: 32,
        spellblockperlevel: 2.05,
        attackrange: 125,
        hpregen: 8.5,
        hpregenperlevel: 1,
        mpregen: 7,
        mpregenperlevel: 0.8,
        crit: 0,
        critperlevel: 0,
        attackdamage: 55,
        attackdamageperlevel: 3.2,
        attackspeedperlevel: 3.5,
        attackspeed: 0.644,
      },
    },
    Briar: {
      version: "14.20.1",
      id: "Briar",
      key: "233",
      name: "브라이어",
      title: "억눌린 허기",
      blurb:
        "검은 장미단의 실패한 실험으로 탄생한 브라이어는 피를 향한 갈망을 통제할 수 없어서 특수 족쇄로 광기를 다스려야 했다. 몇 년이나 갇혀있던 끝에, 살아있는 무기인 브라이어는 구속에서 벗어나 바깥세상에 풀려났다. 브라이어는 이제 누구의 통제도 받지 않는다. 지식과 피에 목마른 브라이어는 마음껏 날뛸 기회를 마다하지 않는다. 물론 그 뒤에 광증을 억누르는 것이 쉽진 않지만.",
      info: {
        attack: 9,
        defense: 5,
        magic: 3,
        difficulty: 3,
      },
      image: {
        full: "Briar.png",
        sprite: "champion0.png",
        group: "champion",
        x: 384,
        y: 48,
        w: 48,
        h: 48,
      },
      tags: ["Fighter", "Assassin"],
      partype: "분노",
      stats: {
        hp: 590,
        hpperlevel: 95,
        mp: 0,
        mpperlevel: 0,
        movespeed: 340,
        armor: 30,
        armorperlevel: 4.2,
        spellblock: 32,
        spellblockperlevel: 2.05,
        attackrange: 125,
        hpregen: 0,
        hpregenperlevel: 0,
        mpregen: 0,
        mpregenperlevel: 0,
        crit: 0,
        critperlevel: 0,
        attackdamage: 60,
        attackdamageperlevel: 3,
        attackspeedperlevel: 2,
        attackspeed: 0.644,
      },
    },
    Caitlyn: {
      version: "14.20.1",
      id: "Caitlyn",
      key: "51",
      name: "케이틀린",
      title: "필트오버의 보안관",
      blurb:
        "필트오버 제일가는 평화 수호자로 명성이 자자한 케이틀린은 이 도시에서 가장 뛰어난 명사수이기도 하다. 그 잡기 어렵다는 필트오버의 범죄 조직들도 그녀의 손에 소탕되었다. 케이틀린은 주로 바이와 짝을 이루어, 바이의 불같은 성미를 자신의 냉철함으로 보완하며 멋진 콤비로 활약한다. 케이틀린의 마법공학 소총이 독보적으로 우수한 성능인 것은 사실이지만, 정작 케이틀린의 가장 강력한 무기는 따로 있다. 필트오버에서 활개칠 생각을 할 정도로 무모한 범죄자를...",
      info: {
        attack: 8,
        defense: 2,
        magic: 2,
        difficulty: 6,
      },
      image: {
        full: "Caitlyn.png",
        sprite: "champion0.png",
        group: "champion",
        x: 432,
        y: 48,
        w: 48,
        h: 48,
      },
      tags: ["Marksman"],
      partype: "마나",
      stats: {
        hp: 580,
        hpperlevel: 107,
        mp: 315,
        mpperlevel: 40,
        movespeed: 325,
        armor: 27,
        armorperlevel: 4.7,
        spellblock: 30,
        spellblockperlevel: 1.3,
        attackrange: 650,
        hpregen: 3.5,
        hpregenperlevel: 0.55,
        mpregen: 7.4,
        mpregenperlevel: 0.7,
        crit: 0,
        critperlevel: 0,
        attackdamage: 60,
        attackdamageperlevel: 3.8,
        attackspeedperlevel: 4,
        attackspeed: 0.681,
      },
    },
  };

  return (
    <Grid2
      container
      columns={{ xs: 6, sm: 8, md: 12 }}
      sx={{
        mx: {
          xs: "16px",
          sm: "90px",
          md: "120px",
          lg: "200px",
        },
        pb: 4,
      }}
    >
      <Grid2 size={{ xs: 6, md: 8 }} sx={{ mx: "auto", mb: "12px" }}>
        <OutlinedInput
          fullWidth
          // variant="outlined"
          placeholder="Search"
          onKeyDown={handleEnter}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={handleSearch}>
                <SearchRounded />
              </IconButton>
            </InputAdornment>
          }
        />
      </Grid2>

      <Grid2
        size={{ xs: 6, md: 8 }}
        sx={{ mx: "auto", mb: { xs: "48px", sm: "64px", md: "100px" } }}
      >
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          <Chip label="#전사" onDelete={handleDelete} variant="outlined" />
          <Chip
            label="#근거리 챔피언"
            onDelete={handleDelete}
            variant="outlined"
          />
        </Box>
      </Grid2>

      <Grid2 size={12}>
        <Grid2 container spacing={2} columns={{ xs: 4, sm: 12 }}>
          {Object.keys(testData).map((championKey) => {
            const champion = testData[championKey];
            return (
              <Grid2 size={{ xs: 2, sm: 4, md: 3 }} id={champion.id}>
                <ChampionCard
                  name={champion.name}
                  tags={champion.tags}
                  image={champion.image}
                />
              </Grid2>
            );
          })}
        </Grid2>
      </Grid2>
    </Grid2>
  );
};
