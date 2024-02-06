const axios = require("axios");
const { Command } = require("commander");
const program = new Command();

require("./name")(program);
const { writeCsv, printJson } = require("../../utils/csvWriter");

jest.mock("../../utils/csvWriter", () => ({
  writeCsv: jest.fn(),
  printJson: jest.fn(),
}));

describe("fetchName Command", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  const mockData = {
    nameID: "31",
    name: "Tom Hanks",
    namePoster: "/xndWFsBlClOJFRdhSt4NBwiPq2o.jpg",
    birthYr: "1956",
    deathYr: null,
    profession: "Acting",
    nameTitles: [
      {
        titleID: 13,
        category: "Actor",
      },
      {
        titleID: 568,
        category: "Actor",
      },
      {
        titleID: 591,
        category: "Actor",
      },
      {
        titleID: 497,
        category: "Actor",
      },
      {
        titleID: 594,
        category: "Actor",
      },
      {
        titleID: 857,
        category: "Actor",
      },
      {
        titleID: 862,
        category: "Actor",
      },
      {
        titleID: 858,
        category: "Actor",
      },
      {
        titleID: 10193,
        category: "Actor",
      },
      {
        titleID: 2280,
        category: "Actor",
      },
      {
        titleID: 2565,
        category: "Actor",
      },
      {
        titleID: 2619,
        category: "Actor",
      },
      {
        titleID: 10466,
        category: "Actor",
      },
      {
        titleID: 4147,
        category: "Actor",
      },
      {
        titleID: 10905,
        category: "Actor",
      },
      {
        titleID: 30172,
        category: "Actor",
      },
      {
        titleID: 5516,
        category: "Actor",
      },
      {
        titleID: 5707,
        category: "Actor",
      },
      {
        titleID: 11287,
        category: "Actor",
      },
      {
        titleID: 6538,
        category: "Actor",
      },
      {
        titleID: 6951,
        category: "Actor",
      },
      {
        titleID: 8358,
        category: "Actor",
      },
      {
        titleID: 11974,
        category: "Actor",
      },
      {
        titleID: 12309,
        category: "Actor",
      },
      {
        titleID: 9489,
        category: "Actor",
      },
      {
        titleID: 9586,
        category: "Actor",
      },
      {
        titleID: 9591,
        category: "Actor",
      },
      {
        titleID: 9800,
        category: "Actor",
      },
      {
        titleID: 27348,
        category: "Actor",
      },
      {
        titleID: 13448,
        category: "Actor",
      },
      {
        titleID: 35866,
        category: "Actor",
      },
      {
        titleID: 29968,
        category: "Actor",
      },
      {
        titleID: 64685,
        category: "Actor",
      },
      {
        titleID: 19259,
        category: "Actor",
      },
      {
        titleID: 82424,
        category: "Actor",
      },
      {
        titleID: 77887,
        category: "Actor",
      },
      {
        titleID: 59861,
        category: "Actor",
      },
      {
        titleID: 109424,
        category: "Actor",
      },
      {
        titleID: 170039,
        category: "Actor",
      },
      {
        titleID: 83542,
        category: "Actor",
      },
      {
        titleID: 296098,
        category: "Actor",
      },
      {
        titleID: 207932,
        category: "Actor",
      },
      {
        titleID: 270010,
        category: "Actor",
      },
      {
        titleID: 363676,
        category: "Actor",
      },
      {
        titleID: 374164,
        category: "Actor",
      },
      {
        titleID: 377229,
        category: "Actor",
      },
      {
        titleID: 301528,
        category: "Actor",
      },
      {
        titleID: 414792,
        category: "Actor",
      },
      {
        titleID: 5255,
        category: "Actor",
      },
      {
        titleID: 121100,
        category: "Actor",
      },
      {
        titleID: 456703,
        category: "Actor",
      },
      {
        titleID: 478639,
        category: "Actor",
      },
      {
        titleID: 863,
        category: "Actor",
      },
      {
        titleID: 516486,
        category: "Actor",
      },
      {
        titleID: 522402,
        category: "Actor",
      },
      {
        titleID: 567649,
        category: "Actor",
      },
      {
        titleID: 581032,
        category: "Actor",
      },
      {
        titleID: 31107,
        category: "Actor",
      },
      {
        titleID: 638302,
        category: "Actor",
      },
      {
        titleID: 785930,
        category: "Actor",
      },
      {
        titleID: 885058,
        category: "Actor",
      },
      {
        titleID: 923252,
        category: "Actor",
      },
      {
        titleID: 937278,
        category: "Actor",
      },
      {
        titleID: 940139,
        category: "Actor",
      },
      {
        titleID: 1038873,
        category: "Actor",
      },
      {
        titleID: 1061818,
        category: "Actor",
      },
      {
        titleID: 1084244,
        category: "Actor",
      },
      {
        titleID: 1198548,
        category: "Actor",
      },
      {
        titleID: 1116589,
        category: "Actor",
      },
      {
        titleID: 640,
        category: "Actor",
      },
      {
        titleID: 10023,
        category: "Actor",
      },
      {
        titleID: 40820,
        category: "Actor",
      },
      {
        titleID: 140823,
        category: "Actor",
      },
      {
        titleID: 130925,
        category: "Actor",
      },
      {
        titleID: 173458,
        category: "Actor",
      },
      {
        titleID: 339988,
        category: "Actor",
      },
      {
        titleID: 406122,
        category: "Actor",
      },
      {
        titleID: 252451,
        category: "Actor",
      },
      {
        titleID: 446354,
        category: "Actor",
      },
      {
        titleID: 464729,
        category: "Actor",
      },
      {
        titleID: 501907,
        category: "Actor",
      },
      {
        titleID: 325450,
        category: "Actor",
      },
      {
        titleID: 614934,
        category: "Actor",
      },
      {
        titleID: 729031,
        category: "Actor",
      },
      {
        titleID: 532639,
        category: "Actor",
      },
      {
        titleID: 127850,
        category: "Actor",
      },
      {
        titleID: 213121,
        category: "Actor",
      },
      {
        titleID: 237353,
        category: "Actor",
      },
      {
        titleID: 256835,
        category: "Actor",
      },
      {
        titleID: 356325,
        category: "Actor",
      },
      {
        titleID: 43714,
        category: "Actor",
      },
      {
        titleID: 550600,
        category: "Actor",
      },
      {
        titleID: 504561,
        category: "Actor",
      },
      {
        titleID: 606078,
        category: "Actor",
      },
      {
        titleID: 740985,
        category: "Actor",
      },
      {
        titleID: 747188,
        category: "Actor",
      },
      {
        titleID: 1071583,
        category: "Actor",
      },
      {
        titleID: 1128918,
        category: "Actor",
      },
      {
        titleID: 16279,
        category: "Actor",
      },
      {
        titleID: 56235,
        category: "Actor",
      },
      {
        titleID: 380994,
        category: "Actor",
      },
      {
        titleID: 471198,
        category: "Actor",
      },
      {
        titleID: 712062,
        category: "Actor",
      },
      {
        titleID: 181007,
        category: "Actor",
      },
      {
        titleID: 510173,
        category: "Actor",
      },
      {
        titleID: 13508,
        category: "Actor",
      },
      {
        titleID: 1208060,
        category: "Actor",
      },
      {
        titleID: 65262,
        category: "Actor",
      },
      {
        titleID: 467062,
        category: "Actor",
      },
      {
        titleID: 459682,
        category: "Actor",
      },
      {
        titleID: 720203,
        category: "Actor",
      },
      {
        titleID: 989517,
        category: "Actor",
      },
      {
        titleID: 141498,
        category: "Actor",
      },
      {
        titleID: 315085,
        category: "Actor",
      },
      {
        titleID: 305642,
        category: "Actor",
      },
      {
        titleID: 224355,
        category: "Actor",
      },
      {
        titleID: 1111122,
        category: "Actor",
      },
      {
        titleID: 1125624,
        category: "Actor",
      },
      {
        titleID: 453422,
        category: "Actor",
      },
      {
        titleID: 698229,
        category: "Actor",
      },
      {
        titleID: 705899,
        category: "Actor",
      },
      {
        titleID: 1016902,
        category: "Actor",
      },
      {
        titleID: 37641,
        category: "Actor",
      },
      {
        titleID: 454330,
        category: "Actor",
      },
      {
        titleID: 473544,
        category: "Actor",
      },
      {
        titleID: 253639,
        category: "Actor",
      },
      {
        titleID: 711704,
        category: "Actor",
      },
      {
        titleID: 962192,
        category: "Actor",
      },
      {
        titleID: 103733,
        category: "Actor",
      },
      {
        titleID: 574379,
        category: "Actor",
      },
      {
        titleID: 208238,
        category: "Actor",
      },
      {
        titleID: 87061,
        category: "Actor",
      },
      {
        titleID: 32562,
        category: "Actor",
      },
      {
        titleID: 1221257,
        category: "Actor",
      },
      {
        titleID: 40196,
        category: "Actor",
      },
      {
        titleID: 966435,
        category: "Actor",
      },
      {
        titleID: 838219,
        category: "Actor",
      },
      {
        titleID: 426128,
        category: "Actor",
      },
      {
        titleID: 15302,
        category: "Actor",
      },
      {
        titleID: 979163,
        category: "Actor",
      },
      {
        titleID: 1113682,
        category: "Actor",
      },
      {
        titleID: 269535,
        category: "Actor",
      },
      {
        titleID: 35,
        category: "Actor",
      },
      {
        titleID: 298859,
        category: "Actor",
      },
      {
        titleID: 920,
        category: "Actor",
      },
      {
        titleID: 558912,
        category: "Actor",
      },
      {
        titleID: 32694,
        category: "Actor",
      },
      {
        titleID: 28236,
        category: "Actor",
      },
      {
        titleID: 881931,
        category: "Actor",
      },
      {
        titleID: 126314,
        category: "Actor",
      },
      {
        titleID: 979660,
        category: "Actor",
      },
      {
        titleID: 1157462,
        category: "Actor",
      },
      {
        titleID: 1224690,
        category: "Actor",
      },
      {
        titleID: 20763,
        category: "Actor",
      },
      {
        titleID: 1065395,
        category: "Actor",
      },
      {
        titleID: 653610,
        category: "Actor",
      },
      {
        titleID: 42348,
        category: "Actor",
      },
      {
        titleID: 285783,
        category: "Actor",
      },
      {
        titleID: 595841,
        category: "Actor",
      },
      {
        titleID: 316067,
        category: "Actor",
      },
      {
        titleID: 37757,
        category: "Actor",
      },
      {
        titleID: 47813,
        category: "Actor",
      },
      {
        titleID: 1900,
        category: "Actor",
      },
      {
        titleID: 2103,
        category: "Actor",
      },
      {
        titleID: 2221,
        category: "Actor",
      },
      {
        titleID: 2224,
        category: "Actor",
      },
      {
        titleID: 2391,
        category: "Actor",
      },
      {
        titleID: 2518,
        category: "Actor",
      },
      {
        titleID: 3845,
        category: "Actor",
      },
      {
        titleID: 4573,
        category: "Actor",
      },
      {
        titleID: 31708,
        category: "Actor",
      },
      {
        titleID: 217,
        category: "Actor",
      },
      {
        titleID: 496,
        category: "Actor",
      },
      {
        titleID: 562,
        category: "Actor",
      },
      {
        titleID: 766,
        category: "Actor",
      },
      {
        titleID: 1709,
        category: "Actor",
      },
      {
        titleID: 2574,
        category: "Actor",
      },
      {
        titleID: 4385,
        category: "Actor",
      },
      {
        titleID: 10946,
        category: "Actor",
      },
      {
        titleID: 23936,
        category: "Actor",
      },
      {
        titleID: 27023,
        category: "Actor",
      },
      {
        titleID: 35340,
        category: "Actor",
      },
      {
        titleID: 1667,
        category: "Actor",
      },
      {
        titleID: 60909,
        category: "Actor",
      },
      {
        titleID: 62223,
        category: "Actor",
      },
      {
        titleID: 10918,
        category: "Actor",
      },
      {
        titleID: 40605,
        category: "Actor",
      },
      {
        titleID: 53489,
        category: "Actor",
      },
      {
        titleID: 66623,
        category: "Actor",
      },
      {
        titleID: 1181,
        category: "Actor",
      },
      {
        titleID: 1220,
        category: "Actor",
      },
      {
        titleID: 3556,
        category: "Actor",
      },
      {
        titleID: 62811,
        category: "Actor",
      },
      {
        titleID: 31750,
        category: "Actor",
      },
      {
        titleID: 31750,
        category: "Actor",
      },
      {
        titleID: 1503,
        category: "Actor",
      },
      {
        titleID: 16997,
        category: "Actor",
      },
      {
        titleID: 89293,
        category: "Actor",
      },
      {
        titleID: 1823,
        category: "Actor",
      },
      {
        titleID: 1667,
        category: "Actor",
      },
      {
        titleID: 1667,
        category: "Actor",
      },
      {
        titleID: 1667,
        category: "Actor",
      },
      {
        titleID: 63498,
        category: "Actor",
      },
      {
        titleID: 45336,
        category: "Actor",
      },
      {
        titleID: 39983,
        category: "Actor",
      },
      {
        titleID: 104370,
        category: "Actor",
      },
      {
        titleID: 11894,
        category: "Actor",
      },
      {
        titleID: 63770,
        category: "Actor",
      },
      {
        titleID: 42265,
        category: "Actor",
      },
      {
        titleID: 32415,
        category: "Actor",
      },
      {
        titleID: 60694,
        category: "Actor",
      },
      {
        titleID: 133349,
        category: "Actor",
      },
      {
        titleID: 3556,
        category: "Actor",
      },
      {
        titleID: 3556,
        category: "Actor",
      },
      {
        titleID: 14981,
        category: "Actor",
      },
      {
        titleID: 1667,
        category: "Actor",
      },
      {
        titleID: 118357,
        category: "Actor",
      },
      {
        titleID: 4608,
        category: "Actor",
      },
      {
        titleID: 72757,
        category: "Actor",
      },
      {
        titleID: 113667,
        category: "Actor",
      },
      {
        titleID: 437,
        category: "Actor",
      },
      {
        titleID: 1220,
        category: "Actor",
      },
      {
        titleID: 132374,
        category: "Actor",
      },
      {
        titleID: 63770,
        category: "Actor",
      },
      {
        titleID: 63770,
        category: "Actor",
      },
      {
        titleID: 113445,
        category: "Actor",
      },
      {
        titleID: 17046,
        category: "Actor",
      },
      {
        titleID: 225948,
        category: "Actor",
      },
      {
        titleID: 2251,
        category: "Actor",
      },
      {
        titleID: 61818,
        category: "Actor",
      },
      {
        titleID: 4981,
        category: "Actor",
      },
      {
        titleID: 2261,
        category: "Actor",
      },
      {
        titleID: 105197,
        category: "Actor",
      },
      {
        titleID: 87061,
        category: "Thanks",
      },
      {
        titleID: 43939,
        category: "Thanks",
      },
      {
        titleID: 9591,
        category: "Director",
      },
      {
        titleID: 59861,
        category: "Director",
      },
      {
        titleID: 473544,
        category: "Director",
      },
      {
        titleID: 2698,
        category: "Executive Producer",
      },
      {
        titleID: 5255,
        category: "Executive Producer",
      },
      {
        titleID: 6538,
        category: "Producer",
      },
      {
        titleID: 250011,
        category: "Producer",
      },
      {
        titleID: 11631,
        category: "Executive Producer",
      },
      {
        titleID: 8346,
        category: "Producer",
      },
      {
        titleID: 8358,
        category: "Producer",
      },
      {
        titleID: 9906,
        category: "Producer",
      },
      {
        titleID: 13600,
        category: "Producer",
      },
      {
        titleID: 16523,
        category: "Producer",
      },
      {
        titleID: 209262,
        category: "Producer",
      },
      {
        titleID: 305642,
        category: "Executive Producer",
      },
      {
        titleID: 16279,
        category: "Producer",
      },
      {
        titleID: 339988,
        category: "Producer",
      },
      {
        titleID: 243784,
        category: "Executive Producer",
      },
      {
        titleID: 59861,
        category: "Producer",
      },
      {
        titleID: 377229,
        category: "Producer",
      },
      {
        titleID: 302688,
        category: "Producer",
      },
      {
        titleID: 235199,
        category: "Producer",
      },
      {
        titleID: 15675,
        category: "Producer",
      },
      {
        titleID: 91010,
        category: "Executive Producer",
      },
      {
        titleID: 15673,
        category: "Producer",
      },
      {
        titleID: 23049,
        category: "Executive Producer",
      },
      {
        titleID: 14055,
        category: "Producer",
      },
      {
        titleID: 458423,
        category: "Executive Producer",
      },
      {
        titleID: 145227,
        category: "Producer",
      },
      {
        titleID: 31107,
        category: "Executive Co-Producer",
      },
      {
        titleID: 937278,
        category: "Producer",
      },
      {
        titleID: 1061712,
        category: "Producer",
      },
      {
        titleID: 1061818,
        category: "Producer",
      },
      {
        titleID: 1001811,
        category: "Producer",
      },
      {
        titleID: 1007919,
        category: "Executive Producer",
      },
      {
        titleID: 940139,
        category: "Producer",
      },
      {
        titleID: 30172,
        category: "Writer",
      },
      {
        titleID: 9591,
        category: "Screenplay",
      },
      {
        titleID: 59861,
        category: "Screenplay",
      },
      {
        titleID: 516486,
        category: "Screenplay",
      },
      {
        titleID: 426128,
        category: "Idea",
      },
      {
        titleID: 2391,
        category: "Director",
      },
      {
        titleID: 3556,
        category: "Director",
      },
      {
        titleID: 3556,
        category: "Executive Producer",
      },
      {
        titleID: 4613,
        category: "Writer",
      },
      {
        titleID: 4613,
        category: "Director",
      },
      {
        titleID: 4613,
        category: "Executive Producer",
      },
      {
        titleID: 4981,
        category: "Director",
      },
      {
        titleID: 16997,
        category: "Executive Producer",
      },
      {
        titleID: 3556,
        category: "Writer",
      },
      {
        titleID: 15114,
        category: "Executive Producer",
      },
      {
        titleID: 53489,
        category: "Writer",
      },
      {
        titleID: 72757,
        category: "Executive Producer",
      },
      {
        titleID: 66482,
        category: "Producer",
      },
      {
        titleID: 62811,
        category: "Producer",
      },
      {
        titleID: 60909,
        category: "Producer",
      },
      {
        titleID: 61585,
        category: "Executive Producer",
      },
      {
        titleID: 79774,
        category: "Executive Producer",
      },
      {
        titleID: 80446,
        category: "Executive Producer",
      },
      {
        titleID: 90832,
        category: "Executive Producer",
      },
      {
        titleID: 46518,
        category: "Executive Producer",
      },
      {
        titleID: 17194,
        category: "Songs",
      },
      {
        titleID: 214739,
        category: "Executive Producer",
      },
      {
        titleID: 4392,
        category: "Executive Producer",
      },
      {
        titleID: 225948,
        category: "Executive Producer",
      },
      {
        titleID: 4613,
        category: "Creator",
      },
      {
        titleID: 62811,
        category: "Creator",
      },
      {
        titleID: 53489,
        category: "Creator",
      },
      {
        titleID: 72757,
        category: "Creator",
      },
      {
        titleID: 3556,
        category: "Creator",
      },
      {
        titleID: 214739,
        category: "Creator",
      },
    ],
  };

  it("should call the name command with --nameid and output JSON", async () => {
    jest.mock("axios", () => ({
      get: jest.fn(() => Promise.resolve({ data: mockData })),
    }));
    process.argv = ["node", "test", "name", "--nameid", "31"];

    // Clear mocks before each test case
    printJson.mockClear();

    await program.parseAsync(process.argv);

    // Assertions for JSON output
    expect(printJson).toHaveBeenCalledTimes(1);
    expect(printJson).toHaveBeenCalledWith(mockData);
  });
});
