export interface IChampionImage {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface IChampion {
  [key: string]: {
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
    image: IChampionImage;
    tags: string[];
    partype: string;
    stats: {
      hp: number;
      hpperlevel: number;
      mp: number;
      mpperlevel: number;
      movespeed: number;
      armor: number;
      armorperlevel: number;
      spellblock: number;
      spellblockperlevel: number;
      attackrange: number;
      hpregen: number;
      hpregenperlevel: number;
      mpregen: number;
      mpregenperlevel: number;
      crit: number;
      critperlevel: number;
      attackdamage: number;
      attackdamageperlevel: number;
      attackspeedperlevel: number;
      attackspeed: number;
    };
  };
}

export interface ResChampList {
  type: string;
  format: string;
  version: string;
  data: IChampion;
}

export interface ReqChampDetail {
  champId: string;
}

export interface ISkin {
  id: number;
  num: number;
  name: string;
  chromas: boolean;
}

export interface IChampionSpell {
  id: string;
  name: string;
  description: string;
  tooltip: string;
  leveltip: {
    label: string[];
    effect: [];
  };
  maxrank: number;
  cooldown: number[];
  cooldownBurn: string;
  cost: number[];
  costBurn: number;
  datavalues: {};
  effect: [null | number[]];
  effectBurn: null | number[];
  vars: [];
  costType: string;
  maxammo: number;
  range: number[];
  rangeBurn: number;
  image: IChampionImage;
  resource: string;
}

export interface IChampionDetail {
  id: string;
  key: string;
  name: string;
  title: string;
  image: IChampionImage;
  skins: ISkin[];
  lore: string;
  blurb: string;
  allytips: string[];
  enemytips: string[];
  tags: string[];
  partype: string;
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
  stats: {
    hp: number;
    hpperlevel: number;
    mp: number;
    mpperlevel: number;
    movespeed: number;
    armor: number;
    armorperlevel: number;
    spellblock: number;
    spellblockperlevel: number;
    attackrange: number;
    hpregen: number;
    hpregenperlevel: number;
    mpregen: number;
    mpregenperlevel: number;
    crit: number;
    critperlevel: number;
    attackdamage: number;
    attackdamageperlevel: number;
    attackspeedperlevel: number;
    attackspeed: number;
  };
  spells: IChampionSpell[];
  passive: {
    name: string;
    description: string;
    image: IChampionImage;
  };
  recommended: Array<any>;
}

export interface ResChampDetail {
  type: string;
  format: string;
  version: string;
  data: { [key: string]: IChampionDetail };
}
