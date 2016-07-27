DiabloCalc.minLevel = 70;
DiabloCalc.maxLevel = 70;

// 定义角色类型
DiabloCalc.classes = {
  wizard: {         // 魔法师
    name: "Wizard", // 显示的名称
    primary: "int", // 主属性,智力
    imageSuffix: "wizard_male",
    imageSuffixAlt: "wizard_female",
    resources: ["ap"],
  },
  demonhunter: {
    name: "Demon Hunter",
    primary: "dex",
    imageSuffix: "demonhunter_male",
    imageSuffixAlt: "demonhunter_female",
    resources: ["hatred", "disc"],
  },
  barbarian: {    // 野蛮人
    name: "Barbarian",
    dualwield: true,
    primary: "str",
    imageSuffix: "barbarian_male",
    imageSuffixAlt: "barbarian_female",
    resources: ["fury"],  // 技能消耗的资源类型
  },
  witchdoctor: {
    name: "Witch Doctor",
    primary: "int",
    imageSuffix: "witchdoctor_male",
    imageSuffixAlt: "witchdoctor_female",
    resources: ["mana"],
  },
  monk: {
    name: "Monk",
    dualwield: true,
    primary: "dex",
    imageSuffix: "monk_male",
    imageSuffixAlt: "monk_female",
    resources: ["spirit"],
  },
  crusader: {
    name: "Crusader",
    primary: "str",
    imageSuffix: "demonhunter_male",
    imageSuffixAlt: "demonhunter_female",
    resources: ["wrath"],
  },
  templar: {
    name: "Templar",
    follower: true,
    primary: "str",
    imageSuffix: "demonhunter_male",
  },
  enchantress: {
    name: "Enchantress",
    follower: true,
    primary: "int",
    imageSuffix: "demonhunter_male",
  },
  scoundrel: {
    name: "Scoundrel",
    follower: true,
    primary: "dex",
    imageSuffix: "demonhunter_male",
  },
};

