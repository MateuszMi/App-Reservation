const seats = [
  {
    id: "s02",
    cords: {
      x: 0,
      y: 2,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s03",
    cords: {
      x: 0,
      y: 3,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s04",
    cords: {
      x: 0,
      y: 4,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s06",
    cords: {
      x: 0,
      y: 6,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s07",
    cords: {
      x: 0,
      y: 7,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s08",
    cords: {
      x: 0,
      y: 8,
    },
    blocked: true,

    reservation: false,
  },
  {
    id: "s09",
    cords: {
      x: 0,
      y: 9,
    },
    blocked: true,

    reservation: false,
  },
  {
    id: "s011",
    cords: {
      x: 0,
      y: 11,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s012",
    cords: {
      x: 0,
      y: 12,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s013",
    cords: {
      x: 0,
      y: 13,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s014",
    cords: {
      x: 0,
      y: 14,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s12",
    cords: {
      x: 1,
      y: 2,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s13",
    cords: {
      x: 1,
      y: 3,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s14",
    cords: {
      x: 1,
      y: 4,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s16",
    cords: {
      x: 1,
      y: 6,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s17",
    cords: {
      x: 1,
      y: 7,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s18",
    cords: {
      x: 1,
      y: 8,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s19",
    cords: {
      x: 1,
      y: 9,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s111",
    cords: {
      x: 1,
      y: 11,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s112",
    cords: {
      x: 1,
      y: 12,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s113",
    cords: {
      x: 1,
      y: 13,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s114",
    cords: {
      x: 1,
      y: 14,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s22",
    cords: {
      x: 2,
      y: 2,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s23",
    cords: {
      x: 2,
      y: 3,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s24",
    cords: {
      x: 2,
      y: 4,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s26",
    cords: {
      x: 2,
      y: 6,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s27",
    cords: {
      x: 2,
      y: 7,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s28",
    cords: {
      x: 2,
      y: 8,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s29",
    cords: {
      x: 2,
      y: 9,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s211",
    cords: {
      x: 2,
      y: 11,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s212",
    cords: {
      x: 2,
      y: 12,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s213",
    cords: {
      x: 2,
      y: 13,
    },
    blocked: true,

    reservation: false,
  },
  {
    id: "s214",
    cords: {
      x: 2,
      y: 14,
    },
    blocked: true,

    reservation: false,
  },
  {
    id: "s30",
    cords: {
      x: 3,
      y: 0,
    },
    blocked: true,

    reservation: false,
  },
  {
    id: "s31",
    cords: {
      x: 3,
      y: 1,
    },
    blocked: true,

    reservation: false,
  },
  {
    id: "s32",
    cords: {
      x: 3,
      y: 2,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s33",
    cords: {
      x: 3,
      y: 3,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s34",
    cords: {
      x: 3,
      y: 4,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s36",
    cords: {
      x: 3,
      y: 6,
    },
    blocked: true,

    reservation: false,
  },
  {
    id: "s37",
    cords: {
      x: 3,
      y: 7,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s38",
    cords: {
      x: 3,
      y: 8,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s39",
    cords: {
      x: 3,
      y: 9,
    },
    blocked: true,

    reservation: false,
  },
  {
    id: "s311",
    cords: {
      x: 3,
      y: 11,
    },
    blocked: true,

    reservation: false,
  },
  {
    id: "s312",
    cords: {
      x: 3,
      y: 12,
    },
    blocked: true,

    reservation: false,
  },
  {
    id: "s313",
    cords: {
      x: 3,
      y: 13,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s314",
    cords: {
      x: 3,
      y: 14,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s40",
    cords: {
      x: 4,
      y: 0,
    },
    blocked: true,

    reservation: false,
  },
  {
    id: "s41",
    cords: {
      x: 4,
      y: 1,
    },
    blocked: true,

    reservation: false,
  },
  {
    id: "s42",
    cords: {
      x: 4,
      y: 2,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s43",
    cords: {
      x: 4,
      y: 3,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s44",
    cords: {
      x: 4,
      y: 4,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s46",
    cords: {
      x: 4,
      y: 6,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s47",
    cords: {
      x: 4,
      y: 7,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s48",
    cords: {
      x: 4,
      y: 8,
    },
    blocked: true,

    reservation: false,
  },
  {
    id: "s49",
    cords: {
      x: 4,
      y: 9,
    },
    blocked: true,

    reservation: false,
  },
  {
    id: "s411",
    cords: {
      x: 4,
      y: 11,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s412",
    cords: {
      x: 4,
      y: 12,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s413",
    cords: {
      x: 4,
      y: 13,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s414",
    cords: {
      x: 4,
      y: 14,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s50",
    cords: {
      x: 5,
      y: 0,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s51",
    cords: {
      x: 5,
      y: 1,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s52",
    cords: {
      x: 5,
      y: 2,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s53",
    cords: {
      x: 5,
      y: 3,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s54",
    cords: {
      x: 5,
      y: 4,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s60",
    cords: {
      x: 6,
      y: 0,
    },
    blocked: true,

    reservation: false,
  },
  {
    id: "s61",
    cords: {
      x: 6,
      y: 1,
    },
    blocked: true,

    reservation: false,
  },
  {
    id: "s62",
    cords: {
      x: 6,
      y: 2,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s63",
    cords: {
      x: 6,
      y: 3,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s64",
    cords: {
      x: 6,
      y: 4,
    },
    blocked: true,

    reservation: false,
  },
  {
    id: "s66",
    cords: {
      x: 6,
      y: 6,
    },
    blocked: true,

    reservation: false,
  },
  {
    id: "s67",
    cords: {
      x: 6,
      y: 7,
    },
    blocked: true,

    reservation: false,
  },
  {
    id: "s68",
    cords: {
      x: 6,
      y: 8,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s611",
    cords: {
      x: 6,
      y: 11,
    },
    blocked: true,

    reservation: false,
  },
  {
    id: "s612",
    cords: {
      x: 6,
      y: 12,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s613",
    cords: {
      x: 6,
      y: 13,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s614",
    cords: {
      x: 6,
      y: 14,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s70",
    cords: {
      x: 7,
      y: 0,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s71",
    cords: {
      x: 7,
      y: 1,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s72",
    cords: {
      x: 7,
      y: 2,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s73",
    cords: {
      x: 7,
      y: 3,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s74",
    cords: {
      x: 7,
      y: 4,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s76",
    cords: {
      x: 7,
      y: 6,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s77",
    cords: {
      x: 7,
      y: 7,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s78",
    cords: {
      x: 7,
      y: 8,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s79",
    cords: {
      x: 7,
      y: 9,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s711",
    cords: {
      x: 7,
      y: 11,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s712",
    cords: {
      x: 7,
      y: 12,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s713",
    cords: {
      x: 7,
      y: 13,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s714",
    cords: {
      x: 7,
      y: 14,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s80",
    cords: {
      x: 8,
      y: 0,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s81",
    cords: {
      x: 8,
      y: 1,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s82",
    cords: {
      x: 8,
      y: 2,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s83",
    cords: {
      x: 8,
      y: 3,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s84",
    cords: {
      x: 8,
      y: 4,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s86",
    cords: {
      x: 8,
      y: 6,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s87",
    cords: {
      x: 8,
      y: 7,
    },
    blocked: true,

    reservation: false,
  },
  {
    id: "s88",
    cords: {
      x: 8,
      y: 8,
    },
    blocked: true,

    reservation: false,
  },
  {
    id: "s89",
    cords: {
      x: 8,
      y: 9,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s811",
    cords: {
      x: 8,
      y: 11,
    },
    blocked: true,

    reservation: false,
  },
  {
    id: "s812",
    cords: {
      x: 8,
      y: 12,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s813",
    cords: {
      x: 8,
      y: 13,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s814",
    cords: {
      x: 8,
      y: 14,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s90",
    cords: {
      x: 9,
      y: 0,
    },
    blocked: true,

    reservation: false,
  },
  {
    id: "s91",
    cords: {
      x: 9,
      y: 1,
    },
    blocked: true,

    reservation: false,
  },
  {
    id: "s92",
    cords: {
      x: 9,
      y: 2,
    },
    blocked: true,

    reservation: false,
  },
  {
    id: "s93",
    cords: {
      x: 9,
      y: 3,
    },
    blocked: true,

    reservation: false,
  },
  {
    id: "s94",
    cords: {
      x: 9,
      y: 4,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s96",
    cords: {
      x: 9,
      y: 6,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s97",
    cords: {
      x: 9,
      y: 7,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s98",
    cords: {
      x: 9,
      y: 8,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s99",
    cords: {
      x: 9,
      y: 9,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s911",
    cords: {
      x: 9,
      y: 11,
    },
    blocked: true,

    reservation: false,
  },
  {
    id: "s912",
    cords: {
      x: 9,
      y: 12,
    },
    blocked: true,

    reservation: false,
  },
  {
    id: "s913",
    cords: {
      x: 9,
      y: 13,
    },
    blocked: false,
    reservation: false,
  },
  {
    id: "s914",
    cords: {
      x: 9,
      y: 14,
    },
    blocked: false,
    reservation: false,
  },
];

export default seats;
