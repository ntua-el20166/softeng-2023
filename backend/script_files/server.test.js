const request = require("supertest");
const app = require("./server");

describe("API Endpoints", () => {
  it("GET /ntuaflix_api/popular_movies should return a list of popular movies", async () => {
    const response = await request(app).get("/ntuaflix_api/popular_movies");
    expect(response.statusCode).toBe(200);
  });

  it("GET /ntuaflix_api/healthcheck should return state of server", async () => {
    const expectedData = {
      api: {
        status: "OK",
        url: "https://api.themoviedb.org/3",
        key: "f98bafc1f4c7d1e56519e6d382d1774f",
      },
    };
    const response = await request(app).get("/ntuaflix_api/admin/healthcheck");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(expectedData);
  });

  it("GET /ntuaflix_api/searchname should return state of server", async () => {
    const expectedData = [
      {
        titleID: 27205,
        type: "movie",
        originalTitle: "Inception",
        titlePoster: "/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
        startYear: "2010",
        endYear: null,
        genres: [
          {
            genreTitle: "Action",
          },
          {
            genreTitle: "Science Fiction",
          },
          {
            genreTitle: "Adventure",
          },
        ],
        titleAkas: [
          {
            AkaTitle: "El Origen",
            regionAbbr: "ES",
          },
          {
            AkaTitle: "인셉션",
            regionAbbr: "KR",
          },
          {
            AkaTitle: "El origen",
            regionAbbr: "MX",
          },
          {
            AkaTitle: "A Origem",
            regionAbbr: "BR",
          },
          {
            AkaTitle: "Başlangıç",
            regionAbbr: "TR",
          },
          {
            AkaTitle: "潛行凶間",
            regionAbbr: "HK",
          },
          {
            AkaTitle: "盗梦空间",
            regionAbbr: "CN",
          },
          {
            AkaTitle: "Eredet",
            regionAbbr: "HU",
          },
          {
            AkaTitle: "Pirmsākums",
            regionAbbr: "LV",
          },
          {
            AkaTitle: "จิตพิฆาตโลก",
            regionAbbr: "TH",
          },
          {
            AkaTitle: "全面啟動",
            regionAbbr: "TW",
          },
          {
            AkaTitle: "奠基",
            regionAbbr: "CN",
          },
          {
            AkaTitle: "心灵犯案",
            regionAbbr: "CN",
          },
          {
            AkaTitle: "记忆迷阵",
            regionAbbr: "CN",
          },
          {
            AkaTitle: "记忆魔方",
            regionAbbr: "CN",
          },
          {
            AkaTitle: "インセプション：2010",
            regionAbbr: "JP",
          },
          {
            AkaTitle: "Kẻ Trộm Giấc Mơ",
            regionAbbr: "VN",
          },
          {
            AkaTitle: "تلقین",
            regionAbbr: "IR",
          },
        ],
        principals: [
          {
            nameID: 6193,
            name: "Leonardo DiCaprio",
            category: "actor",
          },
          {
            nameID: 24045,
            name: "Joseph Gordon-Levitt",
            category: "actor",
          },
          {
            nameID: 3899,
            name: "Ken Watanabe",
            category: "actor",
          },
          {
            nameID: 2524,
            name: "Tom Hardy",
            category: "actor",
          },
          {
            nameID: 27578,
            name: "Elliot Page",
            category: "actor",
          },
          {
            nameID: 95697,
            name: "Dileep Rao",
            category: "actor",
          },
          {
            nameID: 2037,
            name: "Cillian Murphy",
            category: "actor",
          },
          {
            nameID: 13022,
            name: "Tom Berenger",
            category: "actor",
          },
          {
            nameID: 8293,
            name: "Marion Cotillard",
            category: "actor",
          },
          {
            nameID: 4935,
            name: "Pete Postlethwaite",
            category: "actor",
          },
          {
            nameID: 3895,
            name: "Michael Caine",
            category: "actor",
          },
          {
            nameID: 526,
            name: "Lukas Haas",
            category: "actor",
          },
          {
            nameID: 66441,
            name: "Talulah Riley",
            category: "actor",
          },
          {
            nameID: 173212,
            name: "Tohoru Masamune",
            category: "actor",
          },
          {
            nameID: 967376,
            name: "Taylor Geare",
            category: "actor",
          },
          {
            nameID: 973135,
            name: "Claire Geare",
            category: "actor",
          },
          {
            nameID: 1677266,
            name: "Johnathan Geare",
            category: "actor",
          },
          {
            nameID: 56120,
            name: "Yuji Okumoto",
            category: "actor",
          },
          {
            nameID: 2246,
            name: "Earl Cameron",
            category: "actor",
          },
          {
            nameID: 1677267,
            name: "Ryan Hayward",
            category: "actor",
          },
          {
            nameID: 1334309,
            name: "Miranda Nolan",
            category: "actor",
          },
          {
            nameID: 535,
            name: "Russ Fega",
            category: "actor",
          },
          {
            nameID: 72864,
            name: "Tim Kelleher",
            category: "actor",
          },
          {
            nameID: 1677498,
            name: "Coralie Dedykere",
            category: "actor",
          },
          {
            nameID: 13695,
            name: "Silvie Laguna",
            category: "actor",
          },
          {
            nameID: 133257,
            name: "Virgile Bramly",
            category: "actor",
          },
          {
            nameID: 1677507,
            name: "Nicolas Clerc",
            category: "actor",
          },
          {
            nameID: 1536351,
            name: "Jean-Michel Dagory",
            category: "actor",
          },
          {
            nameID: 203087,
            name: "Marc Raducci",
            category: "actor",
          },
          {
            nameID: 2157567,
            name: "Tai-Li Lee",
            category: "actor",
          },
          {
            nameID: 2157568,
            name: "Magnus Nolan",
            category: "actor",
          },
          {
            nameID: 2157569,
            name: "Helena Cullinan",
            category: "actor",
          },
          {
            nameID: 1470134,
            name: "Mark Fleischmann",
            category: "actor",
          },
          {
            nameID: 2157570,
            name: "Shelley Lang",
            category: "actor",
          },
          {
            nameID: 2157571,
            name: "Adam Cole",
            category: "actor",
          },
          {
            nameID: 1460686,
            name: "Jack Murray",
            category: "actor",
          },
          {
            nameID: 1742659,
            name: "Kraig Thornber",
            category: "actor",
          },
          {
            nameID: 2157572,
            name: "Angela Nathenson",
            category: "actor",
          },
          {
            nameID: 61642,
            name: "Natasha Beaumont",
            category: "actor",
          },
          {
            nameID: 155308,
            name: "Carl Gilliard",
            category: "actor",
          },
          {
            nameID: 2157573,
            name: "Jill Maddrell",
            category: "actor",
          },
          {
            nameID: 565500,
            name: "Alex Lombard",
            category: "actor",
          },
          {
            nameID: 98811,
            name: "Nicole Pulliam",
            category: "actor",
          },
          {
            nameID: 1168075,
            name: "Peter Basham",
            category: "actor",
          },
          {
            nameID: 33241,
            name: "Michael Gaston",
            category: "actor",
          },
          {
            nameID: 208492,
            name: "Felix Scott",
            category: "actor",
          },
          {
            nameID: 17291,
            name: "Andrew Pleavin",
            category: "actor",
          },
          {
            nameID: 2011839,
            name: "Lisa Reynolds",
            category: "actor",
          },
          {
            nameID: 2157574,
            name: "Jason Tendell",
            category: "actor",
          },
          {
            nameID: 2157575,
            name: "Jack Gilroy",
            category: "actor",
          },
          {
            nameID: 1217812,
            name: "Shannon Welles",
            category: "actor",
          },
          {
            nameID: 3443663,
            name: "Daniel Girondeaud",
            category: "actor",
          },
          {
            nameID: 947,
            name: "Hans Zimmer",
            category: "Original Music Composer",
          },
          {
            nameID: 525,
            name: "Christopher Nolan",
            category: "Director",
          },
          {
            nameID: 525,
            name: "Christopher Nolan",
            category: "Producer",
          },
          {
            nameID: 525,
            name: "Christopher Nolan",
            category: "Writer",
          },
          {
            nameID: 556,
            name: "Emma Thomas",
            category: "Producer",
          },
          {
            nameID: 559,
            name: "Wally Pfister",
            category: "Director of Photography",
          },
          {
            nameID: 561,
            name: "John Papsidera",
            category: "Casting",
          },
          {
            nameID: 3904,
            name: "Lee Smith",
            category: "Editor",
          },
          {
            nameID: 10571,
            name: "John Bernard",
            category: "Line Producer",
          },
          {
            nameID: 5311,
            name: "Hélène Cardona",
            category: "ADR & Dubbing",
          },
          {
            nameID: 6348,
            name: "Jeffrey Kurland",
            category: "Costume Design",
          },
          {
            nameID: 10958,
            name: "Douglas A. Mowat",
            category: "Set Decoration",
          },
          {
            nameID: 8281,
            name: "Robert Fechtman",
            category: "Set Designer",
          },
          {
            nameID: 8705,
            name: "Brad Ricker",
            category: "Supervising Art Director",
          },
          {
            nameID: 9379,
            name: "Paul Wilkowsky",
            category: "Grip",
          },
          {
            nameID: 40767,
            name: "Clive Mackey",
            category: 'First Assistant "B" Camera',
          },
          {
            nameID: 19567,
            name: "Terry Leonard",
            category: "Stunts",
          },
          {
            nameID: 21984,
            name: "Larry Dias",
            category: "Set Decoration",
          },
          {
            nameID: 28496,
            name: "Paula Turnbull",
            category: "Second Assistant Director",
          },
          {
            nameID: 37301,
            name: "Frank Walsh",
            category: "Supervising Art Director",
          },
          {
            nameID: 41018,
            name: "Chris Brigham",
            category: "Executive Producer",
          },
          {
            nameID: 49192,
            name: "Benoit Hemard",
            category: "Assistant Unit Manager",
          },
          {
            nameID: 52193,
            name: "R.J. Kizer",
            category: "ADR Editor",
          },
          {
            nameID: 54211,
            name: "Thomas Tull",
            category: "Executive Producer",
          },
          {
            nameID: 113208,
            name: "Melissa R. Stubbs",
            category: "Stunt Driver",
          },
          {
            nameID: 113211,
            name: "Chris Webb",
            category: "Stunts",
          },
          {
            nameID: 66650,
            name: "Rio Ahn",
            category: "Stand In",
          },
          {
            nameID: 59961,
            name: "Brian Leslie Parker",
            category: "Unit Production Manager",
          },
          {
            nameID: 68016,
            name: "Kevin Kaska",
            category: "Orchestrator",
          },
          {
            nameID: 92356,
            name: "Carmine Goglia",
            category: "Standby Painter",
          },
          {
            nameID: 77511,
            name: "Zakaria Alaoui",
            category: "Line Producer",
          },
          {
            nameID: 71577,
            name: "Matthew Gray",
            category: "Standby Art Director",
          },
          {
            nameID: 75095,
            name: "Christopher Atkinson",
            category: "Boom Operator",
          },
          {
            nameID: 113913,
            name: "Jordan Goldberg",
            category: "Co-Producer",
          },
          {
            nameID: 76054,
            name: "Luke Freeborn",
            category: "Art Direction",
          },
          {
            nameID: 106025,
            name: "Derek Thornton",
            category: "Producer's Assistant",
          },
          {
            nameID: 91055,
            name: "Jan Foster",
            category: "Production Manager",
          },
          {
            nameID: 91136,
            name: "Laura Rindner",
            category: "First Assistant Editor",
          },
          {
            nameID: 89291,
            name: "Nino Aldi",
            category: "Set Production Assistant",
          },
          {
            nameID: 117218,
            name: "Lisa Chugg",
            category: "Set Decoration",
          },
          {
            nameID: 129990,
            name: "Raymond Yu",
            category: "Stand In",
          },
          {
            nameID: 135935,
            name: "Scott Maginnis",
            category: "Property Master",
          },
          {
            nameID: 138618,
            name: "Gary Rizzo",
            category: "Sound Re-Recording Mixer",
          },
          {
            nameID: 159112,
            name: "David Orr",
            category: "Color Timer",
          },
          {
            nameID: 200465,
            name: "Diana R. Lupo",
            category: "Stunts",
          },
          {
            nameID: 419327,
            name: "Johnny Marr",
            category: "Musician",
          },
          {
            nameID: 578724,
            name: "Stacy Kelly",
            category: "Producer's Assistant",
          },
          {
            nameID: 589942,
            name: "Terry Baliel",
            category: "Key Hair Stylist",
          },
          {
            nameID: 929145,
            name: "Lorne Balfe",
            category: "Additional Music",
          },
          {
            nameID: 930532,
            name: "Andy Thomson",
            category: "Art Direction",
          },
          {
            nameID: 932186,
            name: "Bruce Fowler",
            category: "Orchestrator",
          },
          {
            nameID: 962164,
            name: "Jason Knox-Johnston",
            category: "Art Direction",
          },
          {
            nameID: 962165,
            name: "Nancy Thompson",
            category: "Set Costumer",
          },
          {
            nameID: 969743,
            name: "Dean Wolcott",
            category: "Art Direction",
          },
          {
            nameID: 1018001,
            name: "Bruce White",
            category: "Musician",
          },
          {
            nameID: 1032069,
            name: "Mark Mostyn",
            category: "Unit Production Manager",
          },
          {
            nameID: 1050930,
            name: "Hugo Weng",
            category: "Dialogue Editor",
          },
          {
            nameID: 1050932,
            name: "Cheri Reed",
            category: "Costumer",
          },
          {
            nameID: 1056606,
            name: "Brian Kobo",
            category: "Production Coordinator",
          },
          {
            nameID: 1081073,
            name: "Chris Corbould",
            category: "Special Effects Supervisor",
          },
          {
            nameID: 1081488,
            name: "Doug Chapman",
            category: "Stunts",
          },
          {
            nameID: 1105644,
            name: "Diego Stocco",
            category: "Thanks",
          },
          {
            nameID: 1116937,
            name: "John Roesch",
            category: "Foley Artist",
          },
          {
            nameID: 1133968,
            name: "Matt Dunkley",
            category: "Conductor",
          },
          {
            nameID: 1151457,
            name: "Hélène Dubreuil",
            category: "Set Decoration",
          },
          {
            nameID: 1155668,
            name: "Mike Chambers",
            category: "Visual Effects Producer",
          },
          {
            nameID: 1172414,
            name: "Melissa Moseley",
            category: "Still Photographer",
          },
          {
            nameID: 1188581,
            name: "Gilles Castera",
            category: "Production Manager",
          },
          {
            nameID: 1205126,
            name: "Patricia Colin",
            category: "Wardrobe Supervisor",
          },
          {
            nameID: 1260602,
            name: "William Eliscu",
            category: "Graphic Designer",
          },
          {
            nameID: 1268079,
            name: "Josh Elwell",
            category: "Production Assistant",
          },
          {
            nameID: 1270040,
            name: "Essouci Zakia",
            category: "Wardrobe Assistant",
          },
          {
            nameID: 1271644,
            name: "Guy Hendrix Dyas",
            category: "Production Design",
          },
          {
            nameID: 1294863,
            name: "Michael David Lynch",
            category: "Additional Production Assistant",
          },
          {
            nameID: 1298625,
            name: "Cory Geryak",
            category: "Chief Lighting Technician",
          },
          {
            nameID: 1299326,
            name: "Matt Wynne",
            category: "Draughtsman",
          },
          {
            nameID: 1319160,
            name: "Ken Crouch",
            category: "Costume Supervisor",
          },
          {
            nameID: 1322015,
            name: "Luisa Abel",
            category: "Makeup Department Head",
          },
          {
            nameID: 1322016,
            name: "Bob Morgan",
            category: "Costume Supervisor",
          },
          {
            nameID: 1323769,
            name: "Phillip Boutte Jr.",
            category: "Costume Illustrator",
          },
          {
            nameID: 1327030,
            name: "Lora Hirschberg",
            category: "Sound Re-Recording Mixer",
          },
          {
            nameID: 1333087,
            name: "Jeffrey Fayle",
            category: "Costume Set Supervisor",
          },
          {
            nameID: 1334492,
            name: "Thomas Jones",
            category: "Props",
          },
          {
            nameID: 1334493,
            name: "Sarah Robinson",
            category: "Costume Coordinator",
          },
          {
            nameID: 1335570,
            name: "Steven Brigden",
            category: "Transportation Coordinator",
          },
          {
            nameID: 1337414,
            name: "Richard Bain",
            category: "Compositor",
          },
          {
            nameID: 1339455,
            name: "David Fernandez",
            category: "Set Costumer",
          },
          {
            nameID: 1340318,
            name: "Paul Berolzheimer",
            category: "Sound Effects Editor",
          },
          {
            nameID: 1340769,
            name: "Khalid Ameskane",
            category: "Transportation Captain",
          },
          {
            nameID: 1341403,
            name: "Richard King",
            category: "Sound Designer",
          },
          {
            nameID: 1341786,
            name: "Bryan O. Watkins",
            category: "Sound Effects Editor",
          },
          {
            nameID: 1343872,
            name: "Omar Benbrahim",
            category: "Set Production Assistant",
          },
          {
            nameID: 1354919,
            name: "Sophie Tarver",
            category: "Propmaker",
          },
          {
            nameID: 1357047,
            name: "Aric Cheng",
            category: "Set Designer",
          },
          {
            nameID: 1357062,
            name: "Scott R. Fisher",
            category: "Special Effects Coordinator",
          },
          {
            nameID: 1357064,
            name: "Greg Baldi",
            category: "Camera Operator",
          },
          {
            nameID: 1357070,
            name: "Denny Caira",
            category: "Transportation Coordinator",
          },
          {
            nameID: 1367508,
            name: "Steve Gehrke",
            category: "Script Supervisor",
          },
          {
            nameID: 1372882,
            name: "Derrick Mitchell",
            category: "Visual Effects Editor",
          },
          {
            nameID: 1373708,
            name: "Pollyanna Seath",
            category: "Production Assistant",
          },
          {
            nameID: 1377222,
            name: "Michael W. Mitchell",
            category: "Sound Effects Editor",
          },
          {
            nameID: 1378726,
            name: "Francie Brown",
            category: "Dialect Coach",
          },
          {
            nameID: 1379517,
            name: "Craig Hosking",
            category: "Aerial Coordinator",
          },
          {
            nameID: 1379517,
            name: "Craig Hosking",
            category: "Pilot",
          },
          {
            nameID: 1386906,
            name: "Jonas Kirk",
            category: "Construction Coordinator",
          },
          {
            nameID: 1387215,
            name: "Zachary Fannin",
            category: "Graphic Designer",
          },
          {
            nameID: 1388848,
            name: "Jim Barr",
            category: "Set Designer",
          },
          {
            nameID: 1388860,
            name: "Matt Sims",
            category: "Assistant Art Director",
          },
          {
            nameID: 1390368,
            name: "Graham Hall",
            category: '"B" Camera Operator',
          },
          {
            nameID: 1392095,
            name: "Ian Hunter",
            category: "Visual Effects",
          },
          {
            nameID: 1394117,
            name: "Jennifer Lewicki",
            category: "Art Department Coordinator",
          },
          {
            nameID: 1394305,
            name: "Philip Goldsworthy",
            category: "Set Costumer",
          },
          {
            nameID: 1394415,
            name: "Paul Laugier",
            category: "Art Direction",
          },
          {
            nameID: 1394445,
            name: "David Sanger",
            category: "Visual Effects",
          },
          {
            nameID: 1394739,
            name: "Charlotte Raybourn",
            category: "Art Department Coordinator",
          },
          {
            nameID: 1394956,
            name: "Shannon Blake Gans",
            category: "Visual Effects",
          },
          {
            nameID: 1395432,
            name: "Forest P. Fischer",
            category: "Visual Effects",
          },
          {
            nameID: 1395437,
            name: "J. Bryan Holloway",
            category: "Sculptor",
          },
          {
            nameID: 1397823,
            name: "Alyson Dee Moore",
            category: "Foley Artist",
          },
          {
            nameID: 1398083,
            name: "Abdellah Baadil",
            category: "Assistant Art Director",
          },
          {
            nameID: 1398972,
            name: "Pete Romano",
            category: "Underwater Director of Photography",
          },
          {
            nameID: 1399063,
            name: "Rob Hodgson",
            category: "Visual Effects Supervisor",
          },
          {
            nameID: 1399071,
            name: "Hans Bjerno",
            category: "Aerial Director of Photography",
          },
          {
            nameID: 1399322,
            name: "Elizabeth Frank",
            category: "Set Costumer",
          },
          {
            nameID: 1400087,
            name: "Sean Haley",
            category: "Set Costumer",
          },
          {
            nameID: 1400089,
            name: "Sam Breckman",
            category: "Production Manager",
          },
          {
            nameID: 1400478,
            name: "Sarah Monfort",
            category: "Costume Assistant",
          },
          {
            nameID: 1400527,
            name: "Katherine Tibbetts",
            category: "Production Coordinator",
          },
          {
            nameID: 1400539,
            name: "Amanda Brand",
            category: "Unit Publicist",
          },
          {
            nameID: 1402015,
            name: "Kathryn Blondell",
            category: "Hairstylist",
          },
          {
            nameID: 1402920,
            name: "Sharon O'Brien",
            category: "Key Hair Stylist",
          },
          {
            nameID: 1403434,
            name: "Brett C. Smith",
            category: "Set Dresser",
          },
          {
            nameID: 1403490,
            name: "Alex Gibson",
            category: "Supervising Music Editor",
          },
          {
            nameID: 1403554,
            name: "Otniel Gonzalez",
            category: "Armorer",
          },
          {
            nameID: 1403708,
            name: "Abderrahim Bissar",
            category: "Electrician",
          },
          {
            nameID: 1405423,
            name: "Mounir Badia",
            category: "Picture Car Coordinator",
          },
          {
            nameID: 1406105,
            name: "Steve Rhee",
            category: "Visual Effects Assistant Editor",
          },
          {
            nameID: 1406389,
            name: "Bruce Tanis",
            category: "Foley Editor",
          },
          {
            nameID: 1406837,
            name: "Matthew Plummer",
            category: "Visual Effects Producer",
          },
          {
            nameID: 1406844,
            name: "Jean-François Drigeard",
            category: "Gaffer",
          },
          {
            nameID: 1406845,
            name: "Brahim Amarak",
            category: "Gaffer",
          },
          {
            nameID: 1406850,
            name: "Maxime Couteret",
            category: "Transportation Coordinator",
          },
          {
            nameID: 1407867,
            name: "James Starr",
            category: "Set Runner",
          },
          {
            nameID: 1408347,
            name: "Peter Bebb",
            category: "Visual Effects Supervisor",
          },
          {
            nameID: 1408384,
            name: "Charlie Noble",
            category: "Compositor",
          },
          {
            nameID: 1408386,
            name: "Stuart Farley",
            category: "CG Supervisor",
          },
          {
            nameID: 1412185,
            name: "Jay Wejebe",
            category: "Key Makeup Artist",
          },
          {
            nameID: 1412199,
            name: "John J. Downey",
            category: "Special Effects Technician",
          },
          {
            nameID: 1412476,
            name: "Aya Yabuuchi",
            category: "Makeup Artist",
          },
          {
            nameID: 1413036,
            name: "Andy Long",
            category: "Gaffer",
          },
          {
            nameID: 1414174,
            name: "Scott Bobbitt",
            category: "Leadman",
          },
          {
            nameID: 1415463,
            name: "Scott R. Lewis",
            category: "Sound Mix Technician",
          },
          {
            nameID: 1415506,
            name: "Shelli Nishino",
            category: "Costumer",
          },
          {
            nameID: 1417398,
            name: "Janice Alexander",
            category: "Hair Department Head",
          },
          {
            nameID: 1417406,
            name: "Michael Murray",
            category: "Production Manager",
          },
          {
            nameID: 1417407,
            name: "Thomas Hayslip",
            category: "Associate Producer",
          },
          {
            nameID: 1417514,
            name: "Michael Babcock",
            category: "Additional Sound Re-Recording Mixer",
          },
          {
            nameID: 1417823,
            name: "Steve Miller",
            category: "Visual Effects Editor",
          },
          {
            nameID: 1417826,
            name: "Paul J. Franklin",
            category: "Visual Effects Supervisor",
          },
          {
            nameID: 1417827,
            name: "Nicola Hoyle",
            category: "VFX Supervisor",
          },
          {
            nameID: 1417828,
            name: "Andrew Lockley",
            category: "Visual Effects Supervisor",
          },
          {
            nameID: 1417829,
            name: "Alison Wortman",
            category: "CG Supervisor",
          },
          {
            nameID: 1417834,
            name: "Dane Bjerno",
            category: "Aerial Camera Technician",
          },
          {
            nameID: 1417835,
            name: "Ian Franklin",
            category: "Rigging Gaffer",
          },
          {
            nameID: 1417840,
            name: "Eric A. Lewy",
            category: "First Assistant Editor",
          },
          {
            nameID: 1417841,
            name: "Ryan Rubin",
            category: "Music Editor",
          },
          {
            nameID: 1417843,
            name: "Tyler W. Gaisford",
            category: "Picture Car Coordinator",
          },
          {
            nameID: 1420326,
            name: "Daniel C. McFadden",
            category: "Assistant Camera",
          },
          {
            nameID: 1420643,
            name: "Heather Moore",
            category: "Set Costumer",
          },
          {
            nameID: 1422420,
            name: "Robert E. Dingle",
            category: "Driver",
          },
          {
            nameID: 1422795,
            name: "Sian Grigg",
            category: "Makeup Artist",
          },
          {
            nameID: 1422985,
            name: "Ali Bakkioui",
            category: "Transportation Coordinator",
          },
          {
            nameID: 1425530,
            name: "John Norster",
            category: "Assistant Costume Designer",
          },
          {
            nameID: 1425547,
            name: "Gurel Mehmet",
            category: "Visual Effects Art Director",
          },
          {
            nameID: 1425550,
            name: "Peter Olliff",
            category: "Visual Effects Coordinator",
          },
          {
            nameID: 1425828,
            name: "Brooks Robinson",
            category: '"B" Camera Operator',
          },
          {
            nameID: 1426727,
            name: "Bill Ives",
            category: "Art Direction",
          },
          {
            nameID: 1426735,
            name: "Paul Healy",
            category: "Set Decoration",
          },
          {
            nameID: 1426745,
            name: "Jason Paradis",
            category: "Special Effects Coordinator",
          },
          {
            nameID: 1426845,
            name: "Aleksandar Pejic",
            category: "CG Supervisor",
          },
          {
            nameID: 1432024,
            name: "Charlie McIntyre",
            category: "Rigging Gaffer",
          },
          {
            nameID: 1440853,
            name: "Donald Likovich",
            category: "Assistant Editor",
          },
          {
            nameID: 1442172,
            name: "Charles Heidet",
            category: "Picture Car Coordinator",
          },
          {
            nameID: 1445820,
            name: "Teressa Hill",
            category: "Additional Hairstylist",
          },
          {
            nameID: 1446558,
            name: "Chris Hall",
            category: "Additional Production Assistant",
          },
          {
            nameID: 1447570,
            name: "Joel Tobman",
            category: "Production Assistant",
          },
          {
            nameID: 1447601,
            name: "Andrew Bock",
            category: "First Assistant Sound Editor",
          },
          {
            nameID: 1447602,
            name: "Linda Yeaney",
            category: "First Assistant Sound Editor",
          },
          {
            nameID: 1447603,
            name: "Dan Neal",
            category: "CG Supervisor",
          },
          {
            nameID: 1447614,
            name: "Dorian Knapp",
            category: "Animation",
          },
          {
            nameID: 1447627,
            name: "Martin Keough",
            category: "Gaffer",
          },
          {
            nameID: 1447633,
            name: "Kelly Porter (costumer)",
            category: "Set Costumer",
          },
          {
            nameID: 1458115,
            name: "Leanne Young",
            category: "Visual Effects Editor",
          },
          {
            nameID: 1463292,
            name: "Zack Smith",
            category: "Key Set Production Assistant",
          },
          {
            nameID: 1463299,
            name: "Mark Bialuski",
            category: "Propmaker",
          },
          {
            nameID: 1463354,
            name: "Steve Rosolio",
            category: "Production Assistant",
          },
          {
            nameID: 1463384,
            name: "Ben Woodworth",
            category: "Painter",
          },
          {
            nameID: 1463571,
            name: "Terry Marriott",
            category: "VFX Artist",
          },
          {
            nameID: 1464310,
            name: "Eliza Coleman",
            category: "Stunts",
          },
          {
            nameID: 1465952,
            name: "David Campbell-Bell",
            category: "Unit Manager",
          },
          {
            nameID: 1465987,
            name: "Chris Kitisakkul",
            category: "Assistant Art Director",
          },
          {
            nameID: 1465990,
            name: "Malcolm Roberts",
            category: "Construction Coordinator",
          },
          {
            nameID: 1466007,
            name: "Ciara McArdle",
            category: "Set Costumer",
          },
          {
            nameID: 1470165,
            name: "Andrea Pirisi",
            category: "Digital Colorist",
          },
          {
            nameID: 1472774,
            name: "Rachid Quiat",
            category: "Assistant Art Director",
          },
          {
            nameID: 1478557,
            name: "Satnam Ramgotra",
            category: "Musician",
          },
          {
            nameID: 1478653,
            name: "Aya Tanimura",
            category: "Producer's Assistant",
          },
          {
            nameID: 1482842,
            name: "Philippe Leprince",
            category: "CG Supervisor",
          },
          {
            nameID: 1495958,
            name: "Gregory J. Pawlik Jr.",
            category: "Second Second Assistant Director",
          },
          {
            nameID: 1510438,
            name: "Ben Vokes",
            category: "Production Assistant",
          },
          {
            nameID: 1512157,
            name: "Robert Spurlock",
            category: "Visual Effects",
          },
          {
            nameID: 1532597,
            name: "Terry Anderson",
            category: "Assistant Costume Designer",
          },
          {
            nameID: 1532610,
            name: "Bob Hall",
            category: 'First Assistant "A" Camera',
          },
          {
            nameID: 1533084,
            name: "Pablo Borges",
            category: "Costumer",
          },
          {
            nameID: 1534821,
            name: "Gabriel Hardman",
            category: "Storyboard Artist",
          },
          {
            nameID: 1534982,
            name: "Cesar Orozco",
            category: "Propmaker",
          },
          {
            nameID: 1535087,
            name: "Robert Cole",
            category: "Special Effects",
          },
          {
            nameID: 1535096,
            name: "Adam Camacho",
            category: "Grip",
          },
          {
            nameID: 1535102,
            name: "Shaun Sangkarat",
            category: "Grip",
          },
          {
            nameID: 1540470,
            name: "Jeff Smithwick",
            category: "Color Timer",
          },
          {
            nameID: 1541583,
            name: "John Whitby",
            category: "Carpenter",
          },
          {
            nameID: 1544396,
            name: "Estelle Tolstoukine",
            category: "Hairstylist",
          },
          {
            nameID: 1546026,
            name: "Kevin Jenkins",
            category: "Unit Manager",
          },
          {
            nameID: 1546755,
            name: "Dave Evans",
            category: "Armorer",
          },
          {
            nameID: 1546875,
            name: "Christopher Flick",
            category: "Foley Supervisor",
          },
          {
            nameID: 1547313,
            name: "Paula Suhy",
            category: "Assistant Editor",
          },
          {
            nameID: 1548668,
            name: "David Carberry",
            category: "Painter",
          },
          {
            nameID: 1549272,
            name: "Cookie Lopez",
            category: "Costumer",
          },
          {
            nameID: 1550832,
            name: "Ed Novick",
            category: "Sound Mixer",
          },
          {
            nameID: 1550849,
            name: "Cyril Kuhnholtz",
            category: "Key Grip",
          },
          {
            nameID: 1550851,
            name: "Tom Struthers",
            category: "Stunt Coordinator",
          },
          {
            nameID: 1551772,
            name: "Lynne Corbould",
            category: "Special Effects Coordinator",
          },
          {
            nameID: 1551796,
            name: "Amin Rharda",
            category: "Assistant Property Master",
          },
          {
            nameID: 1551797,
            name: "Joss Skottowe",
            category: "Armorer",
          },
          {
            nameID: 1551971,
            name: "Victor Abadia",
            category: "Electrician",
          },
          {
            nameID: 1552191,
            name: "Larry Sushinski",
            category: "Assistant Chief Lighting Technician",
          },
          {
            nameID: 1553623,
            name: "Olivier Suffert",
            category: "Driver",
          },
          {
            nameID: 1557584,
            name: "Stewart Ash",
            category: "Animation",
          },
          {
            nameID: 1557584,
            name: "Stewart Ash",
            category: "Visual Effects",
          },
          {
            nameID: 1558714,
            name: "Craig Myers",
            category: "Armorer",
          },
          {
            nameID: 1559583,
            name: "Alexander Aben",
            category: "Driver",
          },
          {
            nameID: 1566280,
            name: "Nilo Otero",
            category: "First Assistant Director",
          },
          {
            nameID: 1568245,
            name: "Tommaso Colognese",
            category: "Actor's Assistant",
          },
          {
            nameID: 1570791,
            name: "Elona Tsou",
            category: "Production Supervisor",
          },
          {
            nameID: 1571601,
            name: "David E. Hall",
            category: "Post Production Supervisor",
          },
          {
            nameID: 1571749,
            name: "Erick Garibay",
            category: "Assistant Property Master",
          },
          {
            nameID: 1571979,
            name: "Alan Hall",
            category: "Assistant Camera",
          },
          {
            nameID: 1574834,
            name: "Myriam Loukili",
            category: "Production Accountant",
          },
          {
            nameID: 1575003,
            name: "John Lee",
            category: "Additional Editor",
          },
          {
            nameID: 1586890,
            name: "Helen Kozora",
            category: "Set Decoration Buyer",
          },
          {
            nameID: 1597149,
            name: "Maurice Routly",
            category: "Special Effects Assistant",
          },
          {
            nameID: 1600114,
            name: "Alan Meyerson",
            category: "Scoring Mixer",
          },
          {
            nameID: 1603331,
            name: "Brian Robinson",
            category: "Boom Operator",
          },
          {
            nameID: 1608775,
            name: "Tien Nguyen",
            category: "Set Production Assistant",
          },
          {
            nameID: 1609057,
            name: "Jeff Chassler",
            category: "Lighting Technician",
          },
          {
            nameID: 1614549,
            name: "Jessie Mann",
            category: "Costumer",
          },
          {
            nameID: 1616041,
            name: "Hugues Espinasse",
            category: "First Assistant Camera",
          },
          {
            nameID: 1616042,
            name: "Manuel Gaspar",
            category: "Best Boy Electric",
          },
          {
            nameID: 1622450,
            name: "Yasushi Miyata",
            category: "Assistant Camera",
          },
          {
            nameID: 1624418,
            name: "Garry Moore",
            category: "Standby Carpenter",
          },
          {
            nameID: 1627975,
            name: "Saad Ajedigue",
            category: "Production Assistant",
          },
          {
            nameID: 1635238,
            name: "Michael Duarte",
            category: "Additional Grip",
          },
          {
            nameID: 1637491,
            name: "Kim Bailey",
            category: "Production Assistant",
          },
          {
            nameID: 1638552,
            name: "Kevin McGill",
            category: "Camera Operator",
          },
          {
            nameID: 1646240,
            name: "Jason Inman",
            category: "Set Medic",
          },
          {
            nameID: 1646992,
            name: "Duffy Gaver",
            category: "Stunts",
          },
          {
            nameID: 1651238,
            name: "Chuck Martinez",
            category: "Driver",
          },
          {
            nameID: 1651247,
            name: "Kit Conners",
            category: "Additional Production Assistant",
          },
          {
            nameID: 1670877,
            name: "Kevin Caira",
            category: "Driver",
          },
          {
            nameID: 1691676,
            name: "Damien Jousselin",
            category: "Electrician",
          },
          {
            nameID: 1697630,
            name: "Helen Medrano",
            category: "Production Controller",
          },
          {
            nameID: 1698591,
            name: "Linda Griffis",
            category: "Second Assistant Accountant",
          },
          {
            nameID: 1701153,
            name: "Jamie Rama",
            category: "Costume Illustrator",
          },
          {
            nameID: 1701730,
            name: "Samuel Pactol",
            category: "Painter",
          },
          {
            nameID: 1706222,
            name: "Dara Norman",
            category: "Lighting Technician",
          },
          {
            nameID: 1707415,
            name: "John P. Cazin",
            category: "Visual Effects",
          },
          {
            nameID: 1710259,
            name: "Andy Hopkins",
            category: "Best Boy Grip",
          },
          {
            nameID: 1712105,
            name: "Debra Coleman",
            category: "Digital Compositor",
          },
          {
            nameID: 1713701,
            name: "Ciaran Crowley",
            category: "Compositor",
          },
          {
            nameID: 1720208,
            name: "Lauren Fash",
            category: "Production Assistant",
          },
          {
            nameID: 1727295,
            name: "Rich Andrade",
            category: "Set Dresser",
          },
          {
            nameID: 1733019,
            name: "Mark Berrow",
            category: "Musician",
          },
          {
            nameID: 1733778,
            name: "Eugene Grobler",
            category: "Lighting Technician",
          },
          {
            nameID: 1733796,
            name: "Nourdine Zaoui",
            category: "Sound",
          },
          {
            nameID: 1734646,
            name: "Richard Berkeley",
            category: "Unit Manager",
          },
          {
            nameID: 1736662,
            name: "Steve Newburn",
            category: "Modeling",
          },
          {
            nameID: 1738113,
            name: "Frédéric North",
            category: "Aerial Coordinator",
          },
          {
            nameID: 1738113,
            name: "Frédéric North",
            category: "Pilot",
          },
          {
            nameID: 1739318,
            name: "Alexandre Millet",
            category: "Visual Effects",
          },
          {
            nameID: 1739881,
            name: "Anthea Strangis",
            category: "First Assistant Accountant",
          },
          {
            nameID: 1739962,
            name: "Mary Beth Smith",
            category: "Negative Cutter",
          },
          {
            nameID: 1741194,
            name: "James Thatcher",
            category: "Musician",
          },
          {
            nameID: 1748818,
            name: "Bruce Toy",
            category: "Driver",
          },
          {
            nameID: 1750212,
            name: "Robert Lamkin",
            category: "Catering",
          },
          {
            nameID: 1759296,
            name: "Nick Infield",
            category: "Additional Camera",
          },
          {
            nameID: 1759739,
            name: "Daniel F. Malone",
            category: "Marine Coordinator",
          },
          {
            nameID: 1765240,
            name: "Grégori Gajéro",
            category: "Second Assistant Camera",
          },
          {
            nameID: 1772294,
            name: "Roger McDonald",
            category: "Camera Operator",
          },
          {
            nameID: 1772976,
            name: "Steve Mair",
            category: "Musician",
          },
          {
            nameID: 1775008,
            name: "Satch Watanabe",
            category: "Actor's Assistant",
          },
          {
            nameID: 1778307,
            name: "Alexis Seymour",
            category: "Assistant Editor",
          },
          {
            nameID: 1779520,
            name: "John Curran",
            category: "Grip",
          },
          {
            nameID: 1781644,
            name: "Jason McCameron",
            category: "Special Effects",
          },
          {
            nameID: 1789573,
            name: "Josh O'Neill",
            category: "Carpenter",
          },
          {
            nameID: 1789909,
            name: "Gregory Byrne",
            category: "Set Dresser",
          },
          {
            nameID: 1792888,
            name: "Scott Patten",
            category: "Rigging Grip",
          },
          {
            nameID: 1794870,
            name: "Tony Marks",
            category: "Carpenter",
          },
          {
            nameID: 1810412,
            name: "Jodi Stecyk",
            category: "Stunt Double",
          },
          {
            nameID: 1813111,
            name: "Hallam Rice-Edwards",
            category: "Assistant Production Coordinator",
          },
          {
            nameID: 1814807,
            name: "Dan Schroer",
            category: 'Second Assistant "B" Camera',
          },
          {
            nameID: 1814846,
            name: "Luke Towers",
            category: "Second Assistant Camera",
          },
          {
            nameID: 1816356,
            name: "Sarah Hood",
            category: "Third Assistant Director",
          },
          {
            nameID: 1817066,
            name: "Glenn Ferrara",
            category: "Production Assistant",
          },
          {
            nameID: 1826906,
            name: "Tim McGaughy",
            category: "Production Driver",
          },
          {
            nameID: 1826915,
            name: "Scott Wesley Ross",
            category: "Assistant Editor",
          },
          {
            nameID: 1826925,
            name: "Ryan Monro",
            category: "Key Grip",
          },
          {
            nameID: 1826944,
            name: "Marie Fink",
            category: "Stunt Driver",
          },
          {
            nameID: 1827039,
            name: "Roger Williams",
            category: "BTS Footage",
          },
          {
            nameID: 1828264,
            name: "Robert McKinnon",
            category: "Concept Artist",
          },
          {
            nameID: 1828569,
            name: "Amanda Paller",
            category: "Special Effects Assistant",
          },
          {
            nameID: 1831575,
            name: "Sasha McLaughlin",
            category: "Hairstylist",
          },
          {
            nameID: 1835185,
            name: "Erin Stern",
            category: "Set Production Assistant",
          },
          {
            nameID: 1838173,
            name: "Christine Hawes",
            category: "Costumer",
          },
          {
            nameID: 1844512,
            name: "Jeff Hubbard",
            category: "Set Production Assistant",
          },
          {
            nameID: 1847883,
            name: "Amy Venghaus",
            category: "Set Production Assistant",
          },
          {
            nameID: 1854360,
            name: "Richard Graysmark",
            category: "Second Assistant Director",
          },
          {
            nameID: 1855889,
            name: "Renaud Madeline",
            category: "Rotoscoping Artist",
          },
          {
            nameID: 1855917,
            name: "Carlo Scaduto",
            category: "Digital Compositor",
          },
          {
            nameID: 1855920,
            name: "Brian Sepanzyk",
            category: "Third Assistant Director",
          },
          {
            nameID: 1855926,
            name: "Giuseppe Tagliavini",
            category: "Digital Compositor",
          },
          {
            nameID: 1857478,
            name: "Kevin Westley",
            category: "Unit Manager",
          },
          {
            nameID: 1857758,
            name: "Sarah Spearing",
            category: "Production Coordinator",
          },
          {
            nameID: 1867157,
            name: "Yann Mari Faget",
            category: "Second Assistant Director",
          },
          {
            nameID: 1867158,
            name: "Tarik Ait Ben Ali",
            category: "Second Second Assistant Director",
          },
          {
            nameID: 1867160,
            name: "Mohamed Essaghir Aabach",
            category: "Third Assistant Director",
          },
          {
            nameID: 1869084,
            name: "Houman Eshraghi",
            category: "Storyboard Artist",
          },
          {
            nameID: 1870638,
            name: "Brandon Lambdin",
            category: "Second Assistant Director",
          },
          {
            nameID: 1893947,
            name: "Henry Stuart John",
            category: "Construction Foreman",
          },
          {
            nameID: 1894918,
            name: "Tina Guo",
            category: "Musician",
          },
          {
            nameID: 1899036,
            name: "Kyle Photo Bucher",
            category: "Set Production Assistant",
          },
          {
            nameID: 1906599,
            name: "Alex Loubert",
            category: "Production Assistant",
          },
          {
            nameID: 1913890,
            name: "Trevor Steeves",
            category: "Grip",
          },
          {
            nameID: 1918766,
            name: "Carlton Jarvis",
            category: "Medical Consultant",
          },
          {
            nameID: 1918773,
            name: "Wailoon Chung",
            category: "Electrician",
          },
          {
            nameID: 1919507,
            name: "Adam Slutsky",
            category: "Set Production Assistant",
          },
          {
            nameID: 1933258,
            name: "Alanna Hanson",
            category: "Production Assistant",
          },
          {
            nameID: 1935761,
            name: "Agnes Bermejo",
            category: "Production Coordinator",
          },
          {
            nameID: 1936130,
            name: "Paul Boyd",
            category: "VFX Artist",
          },
          {
            nameID: 1942673,
            name: "Darryl Paterson",
            category: "Assistant Property Master",
          },
          {
            nameID: 1942705,
            name: "Bronwyn Edwards",
            category: "Compositor",
          },
          {
            nameID: 1949890,
            name: "Edward Andrews",
            category: "Rotoscoping Artist",
          },
          {
            nameID: 1963997,
            name: "Karym Ronda",
            category: "Sound Recordist",
          },
          {
            nameID: 1973210,
            name: "Fulvio Pozzobon",
            category: "Hairstylist",
          },
          {
            nameID: 1973234,
            name: "Laurence Caines",
            category: "Key Costumer",
          },
          {
            nameID: 1979354,
            name: "Ray Garcia",
            category: "Key Grip",
          },
          {
            nameID: 1979370,
            name: "Daniel Baldwin",
            category: "Matchmove Supervisor",
          },
          {
            nameID: 1979385,
            name: "Muhittin Bilginer",
            category: "Visual Effects Technical Director",
          },
          {
            nameID: 1992243,
            name: "Simon Gustafsson",
            category: "Matte Painter",
          },
          {
            nameID: 1993184,
            name: "Rachel Bolt",
            category: "Musician",
          },
          {
            nameID: 1993199,
            name: "Roger Linley",
            category: "Musician",
          },
          {
            nameID: 1994224,
            name: "Thomas J. O'Connell",
            category: "ADR Mixer",
          },
          {
            nameID: 2000147,
            name: "Christopher Franey",
            category: "Lighting Technician",
          },
          {
            nameID: 2001357,
            name: "Frédéric Greene",
            category: "Production Controller",
          },
          {
            nameID: 2001870,
            name: "Jonathan Williams",
            category: "Musician",
          },
          {
            nameID: 2005019,
            name: "Maureen O'Heron",
            category: "Costumer",
          },
          {
            nameID: 2011428,
            name: "Kirsty Clark",
            category: "Digital Compositor",
          },
          {
            nameID: 2011616,
            name: "Mike Gould",
            category: "Assistant Chief Lighting Technician",
          },
          {
            nameID: 2015676,
            name: "Daniel Leatherdale",
            category: "Rotoscoping Artist",
          },
          {
            nameID: 2015679,
            name: "James McPherson",
            category: "Digital Compositor",
          },
          {
            nameID: 2018883,
            name: "Ben Hicks",
            category: "Compositor",
          },
          {
            nameID: 2024949,
            name: "Adam Mull",
            category: "Modeling",
          },
          {
            nameID: 2025838,
            name: "Nicolas Brechat",
            category: "Swing",
          },
          {
            nameID: 2026509,
            name: "Brian Kruse",
            category: "Stand In",
          },
          {
            nameID: 2037438,
            name: "François-Louis Delfolie",
            category: "Costumer",
          },
          {
            nameID: 2038145,
            name: "Llyr Tobias Johansen",
            category: "Visual Effects Coordinator",
          },
          {
            nameID: 2038146,
            name: "Paula Diane Lopez",
            category: "Visual Effects Coordinator",
          },
          {
            nameID: 2040910,
            name: "John J. Galloway",
            category: "Digital Compositor",
          },
          {
            nameID: 2040947,
            name: "Emma Moffat",
            category: "Set Production Assistant",
          },
          {
            nameID: 2045401,
            name: "Don Telles",
            category: "Rigging Grip",
          },
          {
            nameID: 2045906,
            name: "Christy Richmond",
            category: "Assistant Editor",
          },
          {
            nameID: 2046849,
            name: "Chad Wadsworth",
            category: "Driver",
          },
          {
            nameID: 2047123,
            name: "Carrie Oyer",
            category: "Travel Coordinator",
          },
          {
            nameID: 2053271,
            name: "Peres Owino",
            category: "ADR & Dubbing",
          },
          {
            nameID: 2053738,
            name: "Steve Nelson",
            category: "Sound Mixer",
          },
          {
            nameID: 2053862,
            name: "Steven Cuellar",
            category: "Post Production Assistant",
          },
          {
            nameID: 2059550,
            name: "Daniel Rauchwerger",
            category: "Digital Compositor",
          },
          {
            nameID: 2064768,
            name: "Pete Washburn",
            category: "Set Dresser",
          },
          {
            nameID: 2066934,
            name: "Christopher A. Suarez",
            category: "Special Effects Technician",
          },
          {
            nameID: 2068450,
            name: "Prateek Kaushal",
            category: "Rotoscoping Artist",
          },
          {
            nameID: 2068879,
            name: "David Hyde",
            category: "Visual Effects Technical Director",
          },
          {
            nameID: 2069553,
            name: "Romain Bouvard",
            category: "Digital Compositor",
          },
          {
            nameID: 2069555,
            name: "Kamelia Chabane",
            category: "Rotoscoping Artist",
          },
          {
            nameID: 2070812,
            name: "Sonny Merritt",
            category: "Key Costumer",
          },
          {
            nameID: 2071239,
            name: "Sonia Akouz",
            category: "Makeup Artist",
          },
          {
            nameID: 2072813,
            name: "Roy Goode",
            category: "Visual Effects",
          },
          {
            nameID: 2080553,
            name: "Rossana De Cicco",
            category: "Painter",
          },
          {
            nameID: 2080815,
            name: "Gabriel J. Lewis",
            category: "Lighting Technician",
          },
          {
            nameID: 2081258,
            name: "Simon Quinn",
            category: "Special Effects Technician",
          },
          {
            nameID: 2083198,
            name: "Sylvain Bardoux",
            category: "Rigging Grip",
          },
          {
            nameID: 2090026,
            name: "Ben Perry",
            category: "Second Assistant Camera",
          },
          {
            nameID: 2092333,
            name: "John Giuliano",
            category: "Propmaker",
          },
          {
            nameID: 2095273,
            name: "Paul Brannan",
            category: "Visual Effects",
          },
          {
            nameID: 2096530,
            name: "Nik Brownlee",
            category: "Digital Compositor",
          },
          {
            nameID: 2096952,
            name: "Katy Mummery",
            category: "Visual Effects Coordinator",
          },
          {
            nameID: 2100425,
            name: "David Gray",
            category: "Standby Rigger",
          },
          {
            nameID: 2101093,
            name: "Brian Scotti",
            category: "Electrician",
          },
          {
            nameID: 2116549,
            name: "Ryan Allen",
            category: "Driver",
          },
          {
            nameID: 2121835,
            name: "Antonin Drigeard",
            category: "Electrician",
          },
          {
            nameID: 2121845,
            name: "Laurent Martin",
            category: "Rigging Grip",
          },
          {
            nameID: 2125364,
            name: "Dawn-Anne Coulson",
            category: "Construction Buyer",
          },
          {
            nameID: 2125551,
            name: "Samantha Nottingham",
            category: "First Assistant Accountant",
          },
          {
            nameID: 2128700,
            name: "Jeff Winkle",
            category: "Post Production Assistant",
          },
          {
            nameID: 2133610,
            name: "Simon O'Connell",
            category: "Aerial Coordinator",
          },
          {
            nameID: 2133906,
            name: "Chuck Choi",
            category: "Score Engineer",
          },
          {
            nameID: 2134008,
            name: "Stephen Lee",
            category: "Video Assist Operator",
          },
          {
            nameID: 2134994,
            name: "Eric Vrba",
            category: "Special Effects Technician",
          },
          {
            nameID: 2138452,
            name: "Scott Marriott",
            category: "Compositor",
          },
          {
            nameID: 2139278,
            name: "Kyla McFeat",
            category: "Assistant Accountant",
          },
          {
            nameID: 2142341,
            name: "Kim Goddard-Rains",
            category: "Production Coordinator",
          },
          {
            nameID: 2142494,
            name: "Emily Kwong",
            category: "Modeling",
          },
          {
            nameID: 2142513,
            name: "Evan Godfrey",
            category: "Production Assistant",
          },
          {
            nameID: 2142527,
            name: "Nathaniel West",
            category: "Concept Artist",
          },
          {
            nameID: 2142544,
            name: "Cammie Caira",
            category: "Driver",
          },
          {
            nameID: 2142552,
            name: "Nolan B. Medrano",
            category: "Post Production Accountant",
          },
          {
            nameID: 2142554,
            name: "Lena Schmigalla",
            category: "Assistant Accountant",
          },
          {
            nameID: 2142639,
            name: "Landin Walsh",
            category: "Lighting Technician",
          },
          {
            nameID: 2142649,
            name: "Adam Gelbart",
            category: "Modeling",
          },
          {
            nameID: 2142659,
            name: "Steven Kajorinne",
            category: "Set Dresser",
          },
          {
            nameID: 2142663,
            name: "Bobbie Shay",
            category: "Post Production Assistant",
          },
          {
            nameID: 2142673,
            name: "Ron Landry",
            category: "Production Assistant",
          },
          {
            nameID: 2142694,
            name: "Richard S. Wilson",
            category: "Second Assistant Accountant",
          },
          {
            nameID: 2142709,
            name: "Olivia McCallum",
            category: "Set Production Assistant",
          },
          {
            nameID: 2142730,
            name: "Mark Stanton",
            category: "Special Effects Technician",
          },
          {
            nameID: 2142732,
            name: "Michael Rifkin",
            category: "Special Effects Technician",
          },
          {
            nameID: 2142739,
            name: "Robert L. Slater",
            category: "Special Effects Technician",
          },
          {
            nameID: 2142789,
            name: "Yasmeen Al-Mazeedi",
            category: "Musician",
          },
          {
            nameID: 2142807,
            name: "Joe Wehmeyer",
            category: "Data Wrangler",
          },
          {
            nameID: 2142824,
            name: "Samual Dawes",
            category: "Rotoscoping Artist",
          },
          {
            nameID: 2142853,
            name: "Brandon Seifert",
            category: "Visual Effects",
          },
          {
            nameID: 2143100,
            name: "Mark H. Weingartner",
            category: "VFX Director of Photography",
          },
          {
            nameID: 2143102,
            name: "Anne Putnam Kolbe",
            category: "Executive Visual Effects Producer",
          },
          {
            nameID: 2143769,
            name: "Michelle Wraight",
            category: "Production Coordinator",
          },
          {
            nameID: 2144850,
            name: "Alexander Hamilton Westmore",
            category: "Production Assistant",
          },
          {
            nameID: 2145451,
            name: "Dimitri Delacovias",
            category: "Matte Painter",
          },
          {
            nameID: 2146042,
            name: "Darlene Forrester",
            category: "Hairdresser",
          },
          {
            nameID: 2146979,
            name: "Fiona May McLaren",
            category: "Assistant Accountant",
          },
          {
            nameID: 2148433,
            name: "Jeremy Hey",
            category: "Digital Compositor",
          },
          {
            nameID: 2148557,
            name: "Ellen E. Miki",
            category: "Rotoscoping Artist",
          },
          {
            nameID: 2149397,
            name: "Jonathan Fox",
            category: "Key Production Assistant",
          },
          {
            nameID: 2150471,
            name: "Jennifer Webb",
            category: "Production Coordinator",
          },
          {
            nameID: 2150940,
            name: "Sotiris Georghiou",
            category: "VFX Artist",
          },
          {
            nameID: 2151817,
            name: "Richard Wulf",
            category: "Stand In",
          },
          {
            nameID: 2151842,
            name: "Paul Harford",
            category: "Special Effects",
          },
          {
            nameID: 2155277,
            name: "Crystal Munson",
            category: "Production Assistant",
          },
          {
            nameID: 2156081,
            name: "Bryan Davis",
            category: "Assistant Production Coordinator",
          },
          {
            nameID: 2156217,
            name: "Michelle Kuginis",
            category: "Visual Effects Coordinator",
          },
          {
            nameID: 2156240,
            name: "Glenn Forbes",
            category: "Assistant Property Master",
          },
          {
            nameID: 2156257,
            name: "Ryan Huston",
            category: "Lighting Technician",
          },
          {
            nameID: 2156328,
            name: "Ryan Amborn",
            category: "Special Effects Technician",
          },
          {
            nameID: 2157600,
            name: "James Babiarz",
            category: "Additional Production Assistant",
          },
          {
            nameID: 2157603,
            name: "Lindsay Heller",
            category: "Additional Production Assistant",
          },
          {
            nameID: 2157604,
            name: "Roger Mohn",
            category: "Additional Production Assistant",
          },
          {
            nameID: 2157605,
            name: "Mishi Reyes",
            category: "Additional Production Assistant",
          },
          {
            nameID: 2157606,
            name: "Matthew Switzer",
            category: "Additional Production Assistant",
          },
          {
            nameID: 2157621,
            name: "Clinton Wade Childress",
            category: "Art Department Assistant",
          },
          {
            nameID: 2157625,
            name: "Hellen Marin",
            category: "Assistant Accountant",
          },
          {
            nameID: 2157627,
            name: "Kelly Johnson-Beaven",
            category: "Assistant Accountant",
          },
          {
            nameID: 2157633,
            name: "Ian Zweig",
            category: "Assistant Chef",
          },
          {
            nameID: 2157634,
            name: "Tetsuo Funabashi",
            category: "Assistant Director",
          },
          {
            nameID: 2157635,
            name: "Mohammed Hamza Regragui",
            category: "Assistant Director",
          },
          {
            nameID: 2157635,
            name: "Mohammed Hamza Regragui",
            category: "Production Assistant",
          },
          {
            nameID: 2157636,
            name: "Kevin Frilet",
            category: "Assistant Director",
          },
          {
            nameID: 2157637,
            name: "Katie Hedrich",
            category: "Assistant Editor",
          },
          {
            nameID: 2157638,
            name: "Ben Renton",
            category: "Assistant Editor",
          },
          {
            nameID: 2157639,
            name: "Bouchra Bentayeb",
            category: "Assistant Production Coordinator",
          },
          {
            nameID: 2157640,
            name: "Cheryl Brauer",
            category: "Assistant Production Coordinator",
          },
          {
            nameID: 2157641,
            name: "Frédéric Millet",
            category: "Assistant Production Coordinator",
          },
          {
            nameID: 2157642,
            name: "Mardie Anderson",
            category: "Actor's Assistant",
          },
          {
            nameID: 2157643,
            name: "Kevin Proctor",
            category: "Actor's Assistant",
          },
          {
            nameID: 2157644,
            name: "Jason Irizarry",
            category: "Actor's Assistant",
          },
          {
            nameID: 2157645,
            name: "Carrie Gooch",
            category: "Actor's Assistant",
          },
          {
            nameID: 2157646,
            name: "Walter Byrnes",
            category: "Best Boy Grip",
          },
          {
            nameID: 2157647,
            name: "Michelle Ortt",
            category: "Camera Loader",
          },
          {
            nameID: 2157650,
            name: "Brannon D. Brown",
            category: "Camera Technician",
          },
          {
            nameID: 2157651,
            name: "Jonathan England",
            category: "Camera Trainee",
          },
          {
            nameID: 2157652,
            name: "Alan Neighbour",
            category: "Carpenter",
          },
          {
            nameID: 2157658,
            name: "Michael Prokop",
            category: "Chef",
          },
          {
            nameID: 2157659,
            name: "Paul Christopher",
            category: "Concept Artist",
          },
          {
            nameID: 2157661,
            name: "Robert Voysey",
            category: "Construction Manager",
          },
          {
            nameID: 2157665,
            name: "Othmane Ajana",
            category: "Costume Assistant",
          },
          {
            nameID: 2157666,
            name: "Warren Haigh",
            category: "Costume Assistant",
          },
          {
            nameID: 2157667,
            name: "Caroline Hickman",
            category: "Costume Assistant",
          },
          {
            nameID: 2157672,
            name: "Frances Sweeney",
            category: "Costume Supervisor",
          },
          {
            nameID: 2157673,
            name: "Kurt J. Blackwell",
            category: "Costumer",
          },
          {
            nameID: 2157674,
            name: "Jennifer Nunez",
            category: "Costumer",
          },
          {
            nameID: 2157675,
            name: "Nina Padovano",
            category: "Costumer",
          },
          {
            nameID: 2157676,
            name: "Alice Cordie",
            category: "Driver",
          },
          {
            nameID: 2157678,
            name: "Charles Miambanzila",
            category: "Driver",
          },
          {
            nameID: 2157679,
            name: "Chris Morse",
            category: "Driver",
          },
          {
            nameID: 2157680,
            name: "Andrew Thurlbourne",
            category: "Driver",
          },
          {
            nameID: 2157681,
            name: "Terry Woodcock",
            category: "Driver",
          },
          {
            nameID: 2157682,
            name: "Danny Bress",
            category: "Driver",
          },
          {
            nameID: 2157683,
            name: "Denis Gilmore",
            category: "Driver",
          },
          {
            nameID: 2157684,
            name: "Alexandre Thiery",
            category: "Driver",
          },
          {
            nameID: 2157685,
            name: "Jamie Barham",
            category: "Driver",
          },
          {
            nameID: 2157686,
            name: "Kaiser Clark",
            category: "Driver",
          },
          {
            nameID: 2157687,
            name: "Adil Arbouch",
            category: "Electrician",
          },
          {
            nameID: 2157689,
            name: "Matthew Butler",
            category: "Electrician",
          },
          {
            nameID: 2157690,
            name: "Steve Charnow",
            category: "Electrician",
          },
          {
            nameID: 2157692,
            name: "Paul Jarvis",
            category: "Electrician",
          },
          {
            nameID: 2157693,
            name: "Thami Lahrach",
            category: "Electrician",
          },
          {
            nameID: 2157697,
            name: "Adam Lee",
            category: "Electrician",
          },
          {
            nameID: 2157698,
            name: "William Lehnhart",
            category: "Electrician",
          },
          {
            nameID: 2157701,
            name: "Becky Maxwell",
            category: "First Assistant Accountant",
          },
          {
            nameID: 2157704,
            name: "Carlo Pratto",
            category: "First Assistant Accountant",
          },
          {
            nameID: 2157705,
            name: "Barbara Unrau",
            category: "First Assistant Accountant",
          },
          {
            nameID: 2157706,
            name: "Ahmed Hatimi",
            category: "First Assistant Director",
          },
          {
            nameID: 2157708,
            name: "Zakaria Badreddine",
            category: "Focus Puller",
          },
          {
            nameID: 2157710,
            name: "Pierre-Loup Corvez",
            category: "Grip",
          },
          {
            nameID: 2157712,
            name: "David Draper",
            category: "Grip",
          },
          {
            nameID: 2157713,
            name: "Charles Ehrlinger",
            category: "Grip",
          },
          {
            nameID: 2157714,
            name: "Hassan Hajhouj",
            category: "Grip",
          },
          {
            nameID: 2157715,
            name: "Matt Perry",
            category: "Grip",
          },
          {
            nameID: 2157716,
            name: "Tony Sommo",
            category: "Grip",
          },
          {
            nameID: 2157717,
            name: "Benjamin Vial",
            category: "Grip",
          },
          {
            nameID: 2157718,
            name: "Mark Wojciechowski",
            category: "Grip",
          },
          {
            nameID: 2157719,
            name: "Arthur Ehret",
            category: "Grip",
          },
          {
            nameID: 2157749,
            name: "Steve Zvorsky",
            category: "Lighting Technician",
          },
          {
            nameID: 2157753,
            name: "Maggie Elliott",
            category: "Makeup Artist",
          },
          {
            nameID: 2157757,
            name: "RJ Casey",
            category: "Military Consultant",
          },
          {
            nameID: 2157758,
            name: "Nicholas Hiegel",
            category: "Modeling",
          },
          {
            nameID: 2157762,
            name: "Joe Downs",
            category: "Payroll Accountant",
          },
          {
            nameID: 2157771,
            name: "Hailey Murray",
            category: "Post Production Coordinator",
          },
          {
            nameID: 2157772,
            name: "Daniel Paress",
            category: "Post Production Coordinator",
          },
          {
            nameID: 2157773,
            name: "Kanjirô Sakura",
            category: "Producer",
          },
          {
            nameID: 2157775,
            name: "Yoshikuni Taki",
            category: "Producer",
          },
          {
            nameID: 2157776,
            name: "Mustapha Bentayeb",
            category: "Production Assistant",
          },
          {
            nameID: 2157777,
            name: "Kohl V. Bladen",
            category: "Production Assistant",
          },
          {
            nameID: 2157779,
            name: "Rey Boemi",
            category: "Production Assistant",
          },
          {
            nameID: 2157780,
            name: "Valeria Bullo",
            category: "Production Assistant",
          },
          {
            nameID: 2157782,
            name: "Tony Fang",
            category: "Production Assistant",
          },
          {
            nameID: 2157783,
            name: "Timothy Farmer",
            category: "Production Assistant",
          },
          {
            nameID: 2157785,
            name: "Jeff Feuerhaken",
            category: "Production Assistant",
          },
          {
            nameID: 2157787,
            name: "Colter Freeman",
            category: "Production Assistant",
          },
          {
            nameID: 2157788,
            name: "Derick Green",
            category: "Production Assistant",
          },
          {
            nameID: 2157789,
            name: "Khalid Guouram",
            category: "Production Assistant",
          },
          {
            nameID: 2157790,
            name: "Robert Hoehn",
            category: "Production Assistant",
          },
          {
            nameID: 2157791,
            name: "Ryley Huston",
            category: "Production Assistant",
          },
          {
            nameID: 2157793,
            name: "C.J. Izzo",
            category: "Production Assistant",
          },
          {
            nameID: 2157796,
            name: "Jordan Londe",
            category: "Production Assistant",
          },
          {
            nameID: 2157797,
            name: "Aurélie Maerten",
            category: "Production Assistant",
          },
          {
            nameID: 2157798,
            name: "Mark McSorley",
            category: "Production Assistant",
          },
          {
            nameID: 2157799,
            name: "Troy Proffitt",
            category: "Production Assistant",
          },
          {
            nameID: 2157801,
            name: "Alexandra Pursglove",
            category: "Production Assistant",
          },
          {
            nameID: 2157802,
            name: "Jamie Reiff",
            category: "Production Assistant",
          },
          {
            nameID: 2157803,
            name: "Paul Michael Saldaña",
            category: "Production Assistant",
          },
          {
            nameID: 2157806,
            name: "Adela Tirado",
            category: "Production Assistant",
          },
          {
            nameID: 2157807,
            name: "Darius de Andrade",
            category: "Production Assistant",
          },
          {
            nameID: 2157808,
            name: "Tucker Maloney",
            category: "Production Assistant",
          },
          {
            nameID: 2157810,
            name: "Khadja Koulla",
            category: "Production Coordinator",
          },
          {
            nameID: 2157812,
            name: "Hollie Foster",
            category: "Production Coordinator",
          },
          {
            nameID: 2157813,
            name: "Barbara Russo",
            category: "Production Manager",
          },
          {
            nameID: 2157814,
            name: "Morgan Ahlborn",
            category: "Production Secretary",
          },
          {
            nameID: 2157816,
            name: "Helen Christine Dwyer",
            category: "Production Secretary",
          },
          {
            nameID: 2157818,
            name: "Michael Pennington",
            category: "Prop Maker",
          },
          {
            nameID: 2157821,
            name: "Shelly Goldsack",
            category: "Property Master",
          },
          {
            nameID: 2157822,
            name: "Matthew Broderick",
            category: "Props",
          },
          {
            nameID: 2157823,
            name: "Karim Elamri",
            category: "Props",
          },
          {
            nameID: 2157824,
            name: "Ashlie Jump",
            category: "Props",
          },
          {
            nameID: 2157825,
            name: "Tiara Motem",
            category: "Props",
          },
          {
            nameID: 2157826,
            name: "Francois Poublan",
            category: "Props",
          },
          {
            nameID: 2157827,
            name: "Gregor Telfer",
            category: "Props",
          },
          {
            nameID: 2157829,
            name: "Michael Kay",
            category: "Pyrotechnician",
          },
          {
            nameID: 2157831,
            name: "Sarena Bhargava",
            category: "Sculptor",
          },
          {
            nameID: 2157832,
            name: "Tara Howie",
            category: "Second Assistant Accountant",
          },
          {
            nameID: 2157833,
            name: "Carrie Wilson",
            category: "Second Assistant Camera",
          },
          {
            nameID: 2157834,
            name: "Allison Shok",
            category: "Second Assistant Camera",
          },
          {
            nameID: 2157835,
            name: "Eric Yu",
            category: "Second Assistant Camera",
          },
          {
            nameID: 2157836,
            name: "William D. Robinson",
            category: "Second Assistant Director",
          },
          {
            nameID: 2157837,
            name: "Tracey Poirier",
            category: "Second Assistant Director",
          },
          {
            nameID: 2157840,
            name: "Caroline Delaney",
            category: "Set Costumer",
          },
          {
            nameID: 2157841,
            name: "Lahcen Elyazidi",
            category: "Set Dresser",
          },
          {
            nameID: 2157842,
            name: "Antonio Nogueira",
            category: "Set Dresser",
          },
          {
            nameID: 2157843,
            name: "Thibaut Peschard",
            category: "Set Dresser",
          },
          {
            nameID: 2157844,
            name: "Emily O'Banion",
            category: "Set Medic",
          },
          {
            nameID: 2157845,
            name: "Sam Alvelo",
            category: "Set Production Assistant",
          },
          {
            nameID: 2157846,
            name: "Jayson Chang",
            category: "Set Production Assistant",
          },
          {
            nameID: 2157847,
            name: "Heather Kehayas",
            category: "Set Production Assistant",
          },
          {
            nameID: 2157848,
            name: "Kelly Lane",
            category: "Set Production Assistant",
          },
          {
            nameID: 2157849,
            name: "Mandy Noack",
            category: "Set Production Assistant",
          },
          {
            nameID: 2157850,
            name: "Gerson Paz",
            category: "Set Production Assistant",
          },
          {
            nameID: 2157851,
            name: "Prashant Roy",
            category: "Set Production Assistant",
          },
          {
            nameID: 2157853,
            name: "Sean Ip Fung Chun",
            category: "Set Production Assistant",
          },
          {
            nameID: 2157855,
            name: "Alexander Fabre",
            category: "Special Effects",
          },
          {
            nameID: 2157857,
            name: "Tom Goodman",
            category: "Special Effects",
          },
          {
            nameID: 2157859,
            name: "Pete Britten",
            category: "Special Effects Assistant",
          },
          {
            nameID: 2157860,
            name: "Jeremy Maupin",
            category: "Special Effects Assistant",
          },
          {
            nameID: 2157863,
            name: "Kelly Coe",
            category: "Special Effects Technician",
          },
          {
            nameID: 2157864,
            name: "Jody Eltham",
            category: "Special Effects Technician",
          },
          {
            nameID: 2157865,
            name: "Thomas R. Homsher",
            category: "Special Effects Technician",
          },
          {
            nameID: 2157866,
            name: "Hanin Ouidder",
            category: "Special Effects Technician",
          },
          {
            nameID: 2157867,
            name: "Jim Rollins",
            category: "Special Effects Technician",
          },
          {
            nameID: 2157868,
            name: "Clark Templeman",
            category: "Special Effects Technician",
          },
          {
            nameID: 2157869,
            name: "Leo Leoncio Solis",
            category: "Special Effects Technician",
          },
          {
            nameID: 2157870,
            name: "Chris Grondin",
            category: "Special Effects Technician",
          },
          {
            nameID: 2157874,
            name: "Fabrizia Dal Farra",
            category: "Stand In",
          },
          {
            nameID: 2157875,
            name: "Alex Richard",
            category: "Stand In",
          },
          {
            nameID: 2157876,
            name: "David A. Burt",
            category: "Stand In",
          },
          {
            nameID: 2157877,
            name: "Michael James Faradie",
            category: "Stand In",
          },
          {
            nameID: 2157878,
            name: "Caroline Fife",
            category: "Stand In",
          },
          {
            nameID: 2157880,
            name: "Lorie Gibson",
            category: "Third Assistant Director",
          },
          {
            nameID: 2157881,
            name: "Gordon Piper",
            category: "Third Assistant Director",
          },
          {
            nameID: 2157882,
            name: "Jody Ryan",
            category: "Third Assistant Director",
          },
          {
            nameID: 2157886,
            name: "Todd W. Nobles",
            category: "Transportation Captain",
          },
          {
            nameID: 2157887,
            name: "Steve Bridgen",
            category: "Transportation Captain",
          },
          {
            nameID: 2157889,
            name: "Sky Rockit",
            category: "Ultimate Arm Operator",
          },
          {
            nameID: 2157891,
            name: "Shuhei Okabayashi",
            category: "Unit Production Manager",
          },
          {
            nameID: 2157906,
            name: "Wesley Roberts",
            category: "Digital Compositor",
          },
          {
            nameID: 2157906,
            name: "Wesley Roberts",
            category: "2D Artist",
          },
          {
            nameID: 2157907,
            name: "Vanessa Gratton",
            category: "CG Supervisor",
          },
          {
            nameID: 2157908,
            name: "Phillip Johnson",
            category: "CG Supervisor",
          },
          {
            nameID: 2157910,
            name: "Astrid Busser-Casas",
            category: "Sequence Supervisor",
          },
          {
            nameID: 2157912,
            name: "Matthew Jacques",
            category: "Compositor",
          },
          {
            nameID: 2157913,
            name: "Sonny Pye",
            category: "Compositor",
          },
          {
            nameID: 2157914,
            name: "Chandan Singh",
            category: "Compositor",
          },
          {
            nameID: 2157915,
            name: "Oscar Tornincasa",
            category: "Compositor",
          },
          {
            nameID: 2157916,
            name: "Susanne Becker",
            category: "Compositor",
          },
          {
            nameID: 2157917,
            name: "Bimla Chall",
            category: "Compositor",
          },
          {
            nameID: 2157918,
            name: "Dan Churchill",
            category: "Compositor",
          },
          {
            nameID: 2157919,
            name: "Helgi Laxdal",
            category: "Compositor",
          },
          {
            nameID: 2157920,
            name: "Alice Mitchell",
            category: "Compositor",
          },
          {
            nameID: 2157921,
            name: "Per Mørk-Jensen",
            category: "Compositor",
          },
          {
            nameID: 2157922,
            name: "Mark Payne",
            category: "Compositor",
          },
          {
            nameID: 2157923,
            name: "Sharon Warmington",
            category: "Compositor",
          },
          {
            nameID: 2157924,
            name: "Helen Wood",
            category: "Compositor",
          },
          {
            nameID: 2157927,
            name: "Ami Patel",
            category: "Digital Compositor",
          },
          {
            nameID: 2157928,
            name: "Miodrag Colombo",
            category: "Visual Effects",
          },
          {
            nameID: 2157928,
            name: "Miodrag Colombo",
            category: "Digital Compositor",
          },
          {
            nameID: 2157929,
            name: "Adam Hammond",
            category: "Visual Effects",
          },
          {
            nameID: 2157929,
            name: "Adam Hammond",
            category: "Digital Compositor",
          },
          {
            nameID: 2157930,
            name: "Kim Wiseman",
            category: "Visual Effects",
          },
          {
            nameID: 2157930,
            name: "Kim Wiseman",
            category: "Digital Compositor",
          },
          {
            nameID: 2157932,
            name: "Graham Day",
            category: "Digital Compositor",
          },
          {
            nameID: 2157934,
            name: "Andi Dorfan",
            category: "Digital Compositor",
          },
          {
            nameID: 2157936,
            name: "Peter Vickery",
            category: "Digital Compositor",
          },
          {
            nameID: 2157938,
            name: "Annie V. Wong",
            category: "Digital Compositor",
          },
          {
            nameID: 2157939,
            name: "Thomas Luff",
            category: "Digital Compositor",
          },
          {
            nameID: 2157940,
            name: "Stephen Tew",
            category: "Rotoscoping Artist",
          },
          {
            nameID: 2157941,
            name: "Joe Thornley",
            category: "VFX Artist",
          },
          {
            nameID: 2157942,
            name: "Diccon Alexander",
            category: "Matte Painter",
          },
          {
            nameID: 2157943,
            name: "Philippe Gaulier",
            category: "Matte Painter",
          },
          {
            nameID: 2157944,
            name: "Enrico Altmann",
            category: "Modeling",
          },
          {
            nameID: 2157945,
            name: "Noah DePietro",
            category: "Modeling",
          },
          {
            nameID: 2157946,
            name: "Dave Horowitz",
            category: "Modeling",
          },
          {
            nameID: 2157947,
            name: "Kayte Sabicer",
            category: "Modeling",
          },
          {
            nameID: 2157948,
            name: "Marcelo M. Santos",
            category: "Modeling",
          },
          {
            nameID: 2157949,
            name: "Paula Schneider",
            category: "Modeling",
          },
          {
            nameID: 2157950,
            name: "E.M. Bowen",
            category: "Production Manager",
          },
          {
            nameID: 2157951,
            name: "Arun Sharma",
            category: "Rotoscoping Artist",
          },
          {
            nameID: 2157953,
            name: "Sherin Varghese",
            category: "Rotoscoping Artist",
          },
          {
            nameID: 2157954,
            name: "Tara Roseblade",
            category: "Rotoscoping Artist",
          },
          {
            nameID: 2157955,
            name: "Yoav Dolev",
            category: "Rotoscoping Artist",
          },
          {
            nameID: 2157956,
            name: "Luke Ballard",
            category: "Rotoscoping Artist",
          },
          {
            nameID: 2157957,
            name: "Christopher Jaques",
            category: "Rotoscoping Artist",
          },
          {
            nameID: 2157962,
            name: "Kevin Norris",
            category: "Rotoscoping Artist",
          },
          {
            nameID: 2157964,
            name: "Mary Stroumpouli",
            category: "Rotoscoping Artist",
          },
          {
            nameID: 2157965,
            name: "Luke Bigley",
            category: "Rotoscoping Artist",
          },
          {
            nameID: 2157968,
            name: "Lester Brown",
            category: "Rotoscoping Artist",
          },
          {
            nameID: 2157971,
            name: "Yousaf Main",
            category: "Rotoscoping Artist",
          },
          {
            nameID: 2157972,
            name: "Enrik Pavdeja",
            category: "Rotoscoping Artist",
          },
          {
            nameID: 2157974,
            name: "Charlie H. Ellis",
            category: "Rotoscoping Artist",
          },
          {
            nameID: 2157977,
            name: "Sourajit Bhattacharya",
            category: "Visual Effects",
          },
          {
            nameID: 2157978,
            name: "Mahesh Kumar",
            category: "VFX Artist",
          },
          {
            nameID: 2157979,
            name: "George Plakides",
            category: "VFX Artist",
          },
          {
            nameID: 2157980,
            name: "Erik Tvedt",
            category: "VFX Artist",
          },
          {
            nameID: 2157981,
            name: "Dominic Carus",
            category: "VFX Artist",
          },
          {
            nameID: 2157984,
            name: "Ali Ingham",
            category: "Visual Effects Coordinator",
          },
          {
            nameID: 2157988,
            name: "Shunsuke Tsuchiya",
            category: "Visual Effects Production Assistant",
          },
          {
            nameID: 2157989,
            name: "Curtis Michael Davey",
            category: "Visual Effects Production Assistant",
          },
          {
            nameID: 2157990,
            name: "Matthew Eberle",
            category: "Visual Effects Production Assistant",
          },
          {
            nameID: 2157991,
            name: "Kieran Ahern",
            category: "Visual Effects Production Assistant",
          },
          {
            nameID: 2157995,
            name: "Jean Claude Nouchy",
            category: "Visual Effects Technical Director",
          },
          {
            nameID: 2157997,
            name: "Scott Beverly",
            category: "Visual Effects",
          },
          {
            nameID: 2158001,
            name: "Scott Schneider",
            category: "Visual Effects",
          },
          {
            nameID: 2158004,
            name: "Richard King Slifka",
            category: "Visual Effects",
          },
          {
            nameID: 2238426,
            name: "Jörg Baier",
            category: "Digital Compositor",
          },
          {
            nameID: 2311955,
            name: "Jessica Ward",
            category: "Second Assistant Camera",
          },
          {
            nameID: 4144743,
            name: "Nigel Sinclair",
            category: "Special Effects Technician",
          },
        ],
        rating: {
          avRating: 8.368,
          nVotes: 35193,
        },
      },
      {
        titleID: 613092,
        type: "movie",
        originalTitle: "El crack cero",
        titlePoster: "/kzgPu2CMxBr4YZZxC1Off4cUfR9.jpg",
        startYear: "2019",
        endYear: null,
        genres: [
          {
            genreTitle: "Drama",
          },
          {
            genreTitle: "Thriller",
          },
        ],
        titleAkas: [],
        principals: [
          {
            nameID: 1050908,
            name: "Carlos Santos",
            category: "actor",
          },
          {
            nameID: 125852,
            name: "Miguel Ángel Muñoz",
            category: "actor",
          },
          {
            nameID: 1171836,
            name: "Luisa Gavasa",
            category: "actor",
          },
          {
            nameID: 1261472,
            name: "María Cantuel",
            category: "actor",
          },
          {
            nameID: 67052,
            name: "Macarena Gómez",
            category: "actor",
          },
          {
            nameID: 1167670,
            name: "Raúl Mérida",
            category: "actor",
          },
          {
            nameID: 275949,
            name: "Ramón Langa",
            category: "actor",
          },
          {
            nameID: 1090395,
            name: "Andoni Ferreño",
            category: "actor",
          },
          {
            nameID: 43337,
            name: "Cayetana Guillén Cuervo",
            category: "actor",
          },
          {
            nameID: 1243743,
            name: "Patricia Vico",
            category: "actor",
          },
          {
            nameID: 227071,
            name: "Pedro Casablanc",
            category: "actor",
          },
          {
            nameID: 1170151,
            name: "Alfonso Delgado",
            category: "actor",
          },
          {
            nameID: 1325346,
            name: "Jacobo Dicenta",
            category: "actor",
          },
          {
            nameID: 2566949,
            name: "Samuel Miró",
            category: "actor",
          },
          {
            nameID: 2566950,
            name: "Susana Paz",
            category: "actor",
          },
          {
            nameID: 2426475,
            name: "Víctor Anciones",
            category: "actor",
          },
          {
            nameID: 2566951,
            name: "Óskar Redondo",
            category: "actor",
          },
          {
            nameID: 1794109,
            name: "Daniel Huarte",
            category: "actor",
          },
          {
            nameID: 2566953,
            name: "Damián Biacho",
            category: "actor",
          },
          {
            nameID: 96686,
            name: "Belén López",
            category: "actor",
          },
          {
            nameID: 264323,
            name: "Fiorella Faltoyano",
            category: "actor",
          },
          {
            nameID: 2264691,
            name: "Ana Iglesias",
            category: "actor",
          },
          {
            nameID: 57861,
            name: "Luis Varela",
            category: "actor",
          },
          {
            nameID: 1473370,
            name: "Jero García",
            category: "actor",
          },
          {
            nameID: 103511,
            name: "José Luis Garci",
            category: "Screenplay",
          },
          {
            nameID: 103511,
            name: "José Luis Garci",
            category: "Director",
          },
          {
            nameID: 103511,
            name: "José Luis Garci",
            category: "Editor",
          },
          {
            nameID: 103511,
            name: "José Luis Garci",
            category: "Producer",
          },
          {
            nameID: 231727,
            name: "Jesús Gluck",
            category: "Original Music Composer",
          },
          {
            nameID: 1354757,
            name: "Luis Ángel Pérez",
            category: "Director of Photography",
          },
          {
            nameID: 1435013,
            name: "Javier Muñoz",
            category: "Screenplay",
          },
          {
            nameID: 1696383,
            name: "Alicia López",
            category: "Hair Department Head",
          },
          {
            nameID: 2426484,
            name: "José A. Sánchez",
            category: "Producer",
          },
          {
            nameID: 2566942,
            name: "Noelia García Lorite",
            category: "Costume Design",
          },
          {
            nameID: 2566944,
            name: "Virginia Ruiz",
            category: "Makeup Artist",
          },
        ],
        rating: {
          avRating: 6.635,
          nVotes: 37,
        },
      },
      {
        titleID: 64956,
        type: "movie",
        originalTitle: "Inception: The Cobol Job",
        titlePoster: "/sNxqwtyHMNQwKWoFYDqcYTui5Ok.jpg",
        startYear: "2010",
        endYear: null,
        genres: [
          {
            genreTitle: "Animation",
          },
          {
            genreTitle: "Action",
          },
          {
            genreTitle: "Thriller",
          },
          {
            genreTitle: "Science Fiction",
          },
        ],
        titleAkas: [],
        principals: [
          {
            nameID: 6193,
            name: "Leonardo DiCaprio",
            category: "actor",
          },
          {
            nameID: 24045,
            name: "Joseph Gordon-Levitt",
            category: "actor",
          },
          {
            nameID: 526,
            name: "Lukas Haas",
            category: "actor",
          },
          {
            nameID: 947,
            name: "Hans Zimmer",
            category: "Music",
          },
          {
            nameID: 525,
            name: "Christopher Nolan",
            category: "Characters",
          },
          {
            nameID: 113913,
            name: "Jordan Goldberg",
            category: "Executive Producer",
          },
          {
            nameID: 113913,
            name: "Jordan Goldberg",
            category: "Writer",
          },
          {
            nameID: 1168899,
            name: "Ian Kirby",
            category: "Director",
          },
          {
            nameID: 1168899,
            name: "Ian Kirby",
            category: "Producer",
          },
          {
            nameID: 1168900,
            name: "Caleb Bouchard",
            category: "Producer",
          },
          {
            nameID: 1168901,
            name: "Daniel Sioui",
            category: "Producer",
          },
        ],
        rating: {
          avRating: 7.267,
          nVotes: 294,
        },
      },
      {
        titleID: 350632,
        type: "movie",
        originalTitle: "Nātyārambham",
        titlePoster: null,
        startYear: "",
        endYear: null,
        genres: [],
        titleAkas: [],
        principals: [
          {
            nameID: 1488957,
            name: "Anjali Nandan",
            category: "actor",
          },
        ],
        rating: {
          avRating: 5.8,
          nVotes: 3,
        },
      },
      {
        titleID: 542438,
        type: "movie",
        originalTitle: "Bikini Inception",
        titlePoster: "/mNASlEOFX2c9upxaSbgeKFvIr1L.jpg",
        startYear: "2015",
        endYear: null,
        genres: [
          {
            genreTitle: "Comedy",
          },
        ],
        titleAkas: [],
        principals: [
          {
            nameID: 2107370,
            name: "Paizley Bishop",
            category: "actor",
          },
          {
            nameID: 174906,
            name: "Shelly Desai",
            category: "actor",
          },
          {
            nameID: 1634313,
            name: "Ana Flavia Gavlak",
            category: "actor",
          },
          {
            nameID: 97823,
            name: "Joe Estevez",
            category: "actor",
          },
          {
            nameID: 147,
            name: "Michael Madsen",
            category: "actor",
          },
          {
            nameID: 2107371,
            name: "Taylor Conzelman",
            category: "actor",
          },
          {
            nameID: 2107372,
            name: "Patrice Costleigh",
            category: "actor",
          },
          {
            nameID: 2107373,
            name: "Shea Davis",
            category: "actor",
          },
          {
            nameID: 1064041,
            name: "Alena Savostikova",
            category: "actor",
          },
          {
            nameID: 61233,
            name: "Larry Romano",
            category: "actor",
          },
          {
            nameID: 2107374,
            name: "Ken Waco",
            category: "actor",
          },
          {
            nameID: 103011,
            name: "John Philbin",
            category: "actor",
          },
          {
            nameID: 566889,
            name: "John Sjogren",
            category: "Director",
          },
          {
            nameID: 566889,
            name: "John Sjogren",
            category: "Writer",
          },
        ],
        rating: {
          avRating: 7,
          nVotes: 1,
        },
      },
      {
        titleID: 973484,
        type: "movie",
        originalTitle: "Inception: Music from the Motion Picture",
        titlePoster: "/7uM4DyRVAcgagvhZoWrkrqMPbqV.jpg",
        startYear: "2010",
        endYear: null,
        genres: [
          {
            genreTitle: "Music",
          },
        ],
        titleAkas: [
          {
            AkaTitle: "Inception (Special Features)",
            regionAbbr: "US",
          },
        ],
        principals: [],
        rating: {
          avRating: 6,
          nVotes: 1,
        },
      },
      {
        titleID: 250845,
        type: "movie",
        originalTitle: "WWA The Inception",
        titlePoster: null,
        startYear: "2001",
        endYear: null,
        genres: [],
        titleAkas: [],
        principals: [
          {
            nameID: 1076694,
            name: "Jeffrey Leonard Jarrett",
            category: "actor",
          },
          {
            nameID: 112217,
            name: "The Hitman",
            category: "actor",
          },
          {
            nameID: 1195489,
            name: "Brian James",
            category: "actor",
          },
          {
            nameID: 952032,
            name: "Charles Ashenoff",
            category: "actor",
          },
          {
            nameID: 218023,
            name: "Glenn Gilbertti",
            category: "actor",
          },
          {
            nameID: 238321,
            name: "Jerry Lawler",
            category: "actor",
          },
          {
            nameID: 1237863,
            name: "Jeremy Borash",
            category: "actor",
          },
          {
            nameID: 1214494,
            name: "Norman Smiley",
            category: "actor",
          },
          {
            nameID: 1016912,
            name: "Christopher Ford",
            category: "actor",
          },
          {
            nameID: 154642,
            name: "Marcus Bagwell",
            category: "actor",
          },
          {
            nameID: 24898,
            name: "Nathan Jones",
            category: "actor",
          },
          {
            nameID: 1265913,
            name: "Leonard Carlson",
            category: "actor",
          },
          {
            nameID: 1071742,
            name: "Brad Cain",
            category: "actor",
          },
          {
            nameID: 1198934,
            name: "David Heath",
            category: "actor",
          },
          {
            nameID: 1227442,
            name: "Trudy Vachon",
            category: "actor",
          },
          {
            nameID: 950958,
            name: "Eduardo Hernández",
            category: "actor",
          },
          {
            nameID: 1201840,
            name: "Dionicio Castellanos",
            category: "actor",
          },
        ],
        rating: {
          avRating: 3.1,
          nVotes: 5,
        },
      },
      {
        titleID: 107600,
        type: "tv",
        originalTitle: "The Cruise",
        titlePoster: "/dw6hlIEfxhJGzLMJtwh5EfhyWsA.jpg",
        startYear: "2021",
        endYear: "2021",
        genres: [
          {
            genreTitle: "Action & Adventure",
          },
          {
            genreTitle: "Drama",
          },
          {
            genreTitle: "Crime",
          },
          {
            genreTitle: "Sci-Fi & Fantasy",
          },
          {
            genreTitle: "Mystery",
          },
          {
            genreTitle: "Documentary",
          },
          {
            genreTitle: "Reality",
          },
        ],
        titleAkas: [],
        principals: [
          {
            nameID: 2590133,
            name: "Hazar Deniz BG",
            category: "Directing",
          },
          {
            nameID: 2590117,
            name: "Ezra ELS",
            category: "Acting",
          },
          {
            nameID: 2735191,
            name: "Cansu Gamze Durmuş",
            category: "Acting",
          },
          {
            nameID: 2590133,
            name: "Hazar Deniz BG",
            category: "Directing",
          },
          {
            nameID: 2735191,
            name: "Cansu Gamze Durmuş",
            category: "Acting",
          },
          {
            nameID: 2590133,
            name: "Hazar Deniz BG",
            category: "Directing",
          },
          {
            nameID: 2590136,
            name: "Tarık Güneş",
            category: "Production",
          },
          {
            nameID: 2590133,
            name: "Hazar Deniz BG",
            category: "Directing",
          },
        ],
        rating: {
          avRating: 0,
          nVotes: 0,
        },
      },
    ];
    const response = await request(app)
      .post("/ntuaflix_api/searchname")
      .send({ titlePart: "inception" });
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(expectedData);
  });

  //   it("POST /ntuaflix_api/searchtitle should search titles", async () => {
  //     const response = await request(app)
  //       .post("/ntuaflix_api/searchtitle")
  //       .send({ searchTerm: "Inception" });
  //     expect(response.statusCode).toBe(200);
  //   });
});
