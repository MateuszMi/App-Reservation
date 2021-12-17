const seats = [
  {
    id: "s02",
    cords: {
      rzad: 0,
      miejsce: 2,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s03",
    cords: {
      rzad: 0,
      miejsce: 3,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s04",
    cords: {
      rzad: 0,
      miejsce: 4,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s06",
    cords: {
      rzad: 0,
      miejsce: 6,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s07",
    cords: {
      rzad: 0,
      miejsce: 7,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s08",
    cords: {
      rzad: 0,
      miejsce: 8,
    },
    blocked: true,

    reservation: false,
  },
  {
    id: "s09",
    cords: {
      rzad: 0,
      miejsce: 9,
    },
    blocked: true,

    reservation: false,
  },
  {
    id: "s011",
    cords: {
      rzad: 0,
      miejsce: 11,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s012",
    cords: {
      rzad: 0,
      miejsce: 12,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s013",
    cords: {
      rzad: 0,
      miejsce: 13,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s014",
    cords: {
      rzad: 0,
      miejsce: 14,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s12",
    cords: {
      rzad: 1,
      miejsce: 2,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s13",
    cords: {
      rzad: 1,
      miejsce: 3,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s14",
    cords: {
      rzad: 1,
      miejsce: 4,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s16",
    cords: {
      rzad: 1,
      miejsce: 6,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s17",
    cords: {
      rzad: 1,
      miejsce: 7,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s18",
    cords: {
      rzad: 1,
      miejsce: 8,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s19",
    cords: {
      rzad: 1,
      miejsce: 9,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s111",
    cords: {
      rzad: 1,
      miejsce: 11,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s112",
    cords: {
      rzad: 1,
      miejsce: 12,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s113",
    cords: {
      rzad: 1,
      miejsce: 13,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s114",
    cords: {
      rzad: 1,
      miejsce: 14,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s22",
    cords: {
      rzad: 2,
      miejsce: 2,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s23",
    cords: {
      rzad: 2,
      miejsce: 3,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s24",
    cords: {
      rzad: 2,
      miejsce: 4,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s26",
    cords: {
      rzad: 2,
      miejsce: 6,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s27",
    cords: {
      rzad: 2,
      miejsce: 7,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s28",
    cords: {
      rzad: 2,
      miejsce: 8,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s29",
    cords: {
      rzad: 2,
      miejsce: 9,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s211",
    cords: {
      rzad: 2,
      miejsce: 11,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s212",
    cords: {
      rzad: 2,
      miejsce: 12,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s213",
    cords: {
      rzad: 2,
      miejsce: 13,
    },
    blocked: true,

    reservation: false,
  },
  {
    id: "s214",
    cords: {
      rzad: 2,
      miejsce: 14,
    },
    blocked: true,

    reservation: false,
  },
  {
    id: "s30",
    cords: {
      rzad: 3,
      miejsce: 0,
    },
    blocked: true,

    reservation: false,
  },
  {
    id: "s31",
    cords: {
      rzad: 3,
      miejsce: 1,
    },
    blocked: true,

    reservation: false,
  },
  {
    id: "s32",
    cords: {
      rzad: 3,
      miejsce: 2,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s33",
    cords: {
      rzad: 3,
      miejsce: 3,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s34",
    cords: {
      rzad: 3,
      miejsce: 4,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s36",
    cords: {
      rzad: 3,
      miejsce: 6,
    },
    blocked: true,

    reservation: false,
  },
  {
    id: "s37",
    cords: {
      rzad: 3,
      miejsce: 7,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s38",
    cords: {
      rzad: 3,
      miejsce: 8,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s39",
    cords: {
      rzad: 3,
      miejsce: 9,
    },
    blocked: true,

    reservation: false,
  },
  {
    id: "s311",
    cords: {
      rzad: 3,
      miejsce: 11,
    },
    blocked: true,

    reservation: false,
  },
  {
    id: "s312",
    cords: {
      rzad: 3,
      miejsce: 12,
    },
    blocked: true,

    reservation: false,
  },
  {
    id: "s313",
    cords: {
      rzad: 3,
      miejsce: 13,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s314",
    cords: {
      rzad: 3,
      miejsce: 14,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s40",
    cords: {
      rzad: 4,
      miejsce: 0,
    },
    blocked: true,

    reservation: false,
  },
  {
    id: "s41",
    cords: {
      rzad: 4,
      miejsce: 1,
    },
    blocked: true,

    reservation: false,
  },
  {
    id: "s42",
    cords: {
      rzad: 4,
      miejsce: 2,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s43",
    cords: {
      rzad: 4,
      miejsce: 3,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s44",
    cords: {
      rzad: 4,
      miejsce: 4,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s46",
    cords: {
      rzad: 4,
      miejsce: 6,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s47",
    cords: {
      rzad: 4,
      miejsce: 7,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s48",
    cords: {
      rzad: 4,
      miejsce: 8,
    },
    blocked: true,

    reservation: false,
  },
  {
    id: "s49",
    cords: {
      rzad: 4,
      miejsce: 9,
    },
    blocked: true,

    reservation: false,
  },
  {
    id: "s411",
    cords: {
      rzad: 4,
      miejsce: 11,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s412",
    cords: {
      rzad: 4,
      miejsce: 12,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s413",
    cords: {
      rzad: 4,
      miejsce: 13,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s414",
    cords: {
      rzad: 4,
      miejsce: 14,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s50",
    cords: {
      rzad: 5,
      miejsce: 0,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s51",
    cords: {
      rzad: 5,
      miejsce: 1,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s52",
    cords: {
      rzad: 5,
      miejsce: 2,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s53",
    cords: {
      rzad: 5,
      miejsce: 3,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s54",
    cords: {
      rzad: 5,
      miejsce: 4,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s60",
    cords: {
      rzad: 6,
      miejsce: 0,
    },
    blocked: true,

    reservation: false,
  },
  {
    id: "s61",
    cords: {
      rzad: 6,
      miejsce: 1,
    },
    blocked: true,

    reservation: false,
  },
  {
    id: "s62",
    cords: {
      rzad: 6,
      miejsce: 2,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s63",
    cords: {
      rzad: 6,
      miejsce: 3,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s64",
    cords: {
      rzad: 6,
      miejsce: 4,
    },
    blocked: true,

    reservation: false,
  },
  {
    id: "s66",
    cords: {
      rzad: 6,
      miejsce: 6,
    },
    blocked: true,

    reservation: false,
  },
  {
    id: "s67",
    cords: {
      rzad: 6,
      miejsce: 7,
    },
    blocked: true,

    reservation: false,
  },
  {
    id: "s68",
    cords: {
      rzad: 6,
      miejsce: 8,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s611",
    cords: {
      rzad: 6,
      miejsce: 11,
    },
    blocked: true,

    reservation: false,
  },
  {
    id: "s612",
    cords: {
      rzad: 6,
      miejsce: 12,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s613",
    cords: {
      rzad: 6,
      miejsce: 13,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s614",
    cords: {
      rzad: 6,
      miejsce: 14,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s70",
    cords: {
      rzad: 7,
      miejsce: 0,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s71",
    cords: {
      rzad: 7,
      miejsce: 1,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s72",
    cords: {
      rzad: 7,
      miejsce: 2,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s73",
    cords: {
      rzad: 7,
      miejsce: 3,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s74",
    cords: {
      rzad: 7,
      miejsce: 4,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s76",
    cords: {
      rzad: 7,
      miejsce: 6,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s77",
    cords: {
      rzad: 7,
      miejsce: 7,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s78",
    cords: {
      rzad: 7,
      miejsce: 8,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s79",
    cords: {
      rzad: 7,
      miejsce: 9,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s711",
    cords: {
      rzad: 7,
      miejsce: 11,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s712",
    cords: {
      rzad: 7,
      miejsce: 12,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s713",
    cords: {
      rzad: 7,
      miejsce: 13,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s714",
    cords: {
      rzad: 7,
      miejsce: 14,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s80",
    cords: {
      rzad: 8,
      miejsce: 0,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s81",
    cords: {
      rzad: 8,
      miejsce: 1,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s82",
    cords: {
      rzad: 8,
      miejsce: 2,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s83",
    cords: {
      rzad: 8,
      miejsce: 3,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s84",
    cords: {
      rzad: 8,
      miejsce: 4,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s86",
    cords: {
      rzad: 8,
      miejsce: 6,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s87",
    cords: {
      rzad: 8,
      miejsce: 7,
    },
    blocked: true,

    reservation: false,
  },
  {
    id: "s88",
    cords: {
      rzad: 8,
      miejsce: 8,
    },
    blocked: true,

    reservation: false,
  },
  {
    id: "s89",
    cords: {
      rzad: 8,
      miejsce: 9,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s811",
    cords: {
      rzad: 8,
      miejsce: 11,
    },
    blocked: true,

    reservation: false,
  },
  {
    id: "s812",
    cords: {
      rzad: 8,
      miejsce: 12,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s813",
    cords: {
      rzad: 8,
      miejsce: 13,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s814",
    cords: {
      rzad: 8,
      miejsce: 14,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s90",
    cords: {
      rzad: 9,
      miejsce: 0,
    },
    blocked: true,

    reservation: false,
  },
  {
    id: "s91",
    cords: {
      rzad: 9,
      miejsce: 1,
    },
    blocked: true,

    reservation: false,
  },
  {
    id: "s92",
    cords: {
      rzad: 9,
      miejsce: 2,
    },
    blocked: true,

    reservation: false,
  },
  {
    id: "s93",
    cords: {
      rzad: 9,
      miejsce: 3,
    },
    blocked: true,

    reservation: false,
  },
  {
    id: "s94",
    cords: {
      rzad: 9,
      miejsce: 4,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s96",
    cords: {
      rzad: 9,
      miejsce: 6,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s97",
    cords: {
      rzad: 9,
      miejsce: 7,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s98",
    cords: {
      rzad: 9,
      miejsce: 8,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s99",
    cords: {
      rzad: 9,
      miejsce: 9,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s911",
    cords: {
      rzad: 9,
      miejsce: 11,
    },
    blocked: true,

    reservation: false,
  },
  {
    id: "s912",
    cords: {
      rzad: 9,
      miejsce: 12,
    },
    blocked: true,

    reservation: false,
  },
  {
    id: "s913",
    cords: {
      rzad: 9,
      miejsce: 13,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s914",
    cords: {
      rzad: 9,
      miejsce: 14,
    },
    blocked: false,
    reservation: false,
  },
];

export default seats;
