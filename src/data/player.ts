export type PlayerData = {
  name: string;
  ingame_name: string;
  team: {
    name: string;
    logo: string;
  } | null;
  country: {
    name: string;
    logo: string;
  };
  slug?: string;
};

const myanmarPlayer = [
  {
    name: "Htoo Aung Thit",
    ingame_name: "Alitaaa",
    team: {
      name: "AI Esports",
      logo: "/images/myanmar/team_icon/ai.png",
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲",
    },
    slug: "alita-mlbb-myanmar",
  },
  {
    name: "Phone Myint Kyi",
    ingame_name: "Ardam",
    team: null,
    country: {
      name: "Myanmar",
      logo: "🇲🇲",
    },
    slug: "ardam-mlbb-myanmar",
  },
  {
    name: "Min Swan Kon",
    ingame_name: "Beni",
    team: {
      name: "Falcon Esports",
      logo: "/images/myanmar/team_icon/falcon.png",
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲",
    },
  },
  {
    name: "Kyaw Khaung Htut",
    ingame_name: "Benno",
    team: {
      name: "Falcon Esports",
      logo: "/images/myanmar/team_icon/falcon.png",
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲",
    },
  },
  {
    name: "Tain Yan Lin",
    ingame_name: "Bird",
    team: {
      name: "Zino Esports",
      logo: "/images/myanmar/team_icon/zino.png",
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲",
    },
  },
  {
    name: "Thet Naing Zaw",
    ingame_name: "Black",
    team: {
      name: "AI Esports",
      logo: "/images/myanmar/team_icon/ai.png",
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲",
    },
  },
  {
    name: "Htoo Htet Kyaw",
    ingame_name: "Blank",
    team: null,
    country: {
      name: "Myanmar",
      logo: "🇲🇲",
    },
  },
  {
    name: "Kyaw Thuya",
    ingame_name: "Blink",
    team: {
      name: "Burmese Ghouls",
      logo: "/images/myanmar/team_icon/bg.png",
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲",
    },
  },
  {
    name: "Yan Moe Aung",
    ingame_name: "Bloodkikaka",
    team: {
      name: "Burmese Ghouls",
      logo: "/images/myanmar/team_icon/bg.png",
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲",
    },
  },
  {
    name: "Thiha Kyaw",
    ingame_name: "Carbon",
    team: {
      name: "Blade Violet",
      logo: "/images/myanmar/team_icon/bv.png",
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲",
    },
  },
  {
    name: "Hsu Yamin Htet",
    ingame_name: "Cassie",
    team: null,
    country: {
      name: "Myanmar",
      logo: "🇲🇲",
    },
  },
  {
    name: "Wint Yadanar Linn",
    ingame_name: "Cko",
    team: {
      name: "Blade Angels",
      logo: "/images/myanmar/team_icon/ba.png",
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲",
    },
  },
  {
    name: "Thuya Aung",
    ingame_name: "DK",
    team: null,
    country: {
      name: "Myanmar",
      logo: "🇲🇲",
    },
  },
  {
    name: "Kaung Sett",
    ingame_name: "Daxx",
    team: {
      name: "Falcon Esports",
      logo: "/images/myanmar/team_icon/falcon.png",
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲",
    },
  },
  {
    name: "Kyaw Hein Zin",
    ingame_name: "FayYan",
    team: {
      name: "AI Esports",
      logo: "/images/myanmar/team_icon/ai.png",
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲",
    },
  },
  {
    name: "Zaw Thu Hein",
    ingame_name: "Gumi",
    team: null,
    country: {
      name: "Myanmar",
      logo: "🇲🇲",
    },
  },
  {
    name: "Yadanar Hlaing",
    ingame_name: "Hlaing",
    team: {
      name: "Blade Angels",
      logo: "/images/myanmar/team_icon/ba.png",
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲",
    },
  },
  {
    name: "Aung Htut Myat",
    ingame_name: "Htut Htut",
    team: {
      name: "Zino Esports",
      logo: "/images/myanmar/team_icon/zino.png",
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲",
    },
  },
  {
    name: "Kaung Min Khant",
    ingame_name: "J3X",
    team: {
      name: "Falcon Esports",
      logo: "/images/myanmar/team_icon/falcon.png",
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲",
    },
  },
  {
    name: "Nyi Ju No",
    ingame_name: "Juno",
    team: {
      name: "Young Legion",
      logo: "/images/myanmar/team_icon/yl.png",
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲",
    },
  },
  {
    name: "Pyae Sone Khant",
    ingame_name: "JustiN",
    team: {
      name: "Mythic SEAL",
      logo: "/images/myanmar/team_icon/ms.png",
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲",
    },
  },
  {
    name: "Hsu Labb Nyi Nyi Maung",
    ingame_name: "KELL",
    team: {
      name: "Net Angels",
      logo: "/images/myanmar/team_icon/na.png",
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲",
    },
  },
  {
    name: "Pyae Hein Ko",
    ingame_name: "Kenn",
    team: {
      name: "Mythic SEAL",
      logo: "/images/myanmar/team_icon/ms.png",
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲",
    },
  },
  {
    name: "Khant Khant",
    ingame_name: "Khant Khant",
    team: {
      name: "Team Star Boyz",
      logo: "/images/myanmar/team_icon/ts.png",
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲",
    },
  },
  {
    name: "Khant Thurein Aung",
    ingame_name: "Khant Thurein",
    team: {
      name: "Zino Esports",
      logo: "/images/myanmar/team_icon/zino.png",
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲",
    },
  },
  {
    name: "Hein Min Thu",
    ingame_name: "Kid",
    team: null,
    country: {
      name: "Myanmar",
      logo: "🇲🇲",
    },
  },
  {
    name: "Yehtet Sithu",
    ingame_name: "KidX",
    team: {
      name: "Falcon Esports",
      logo: "/images/myanmar/team_icon/falcon.png",
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲",
    },
  },
  {
    name: "Hsu Wai Zin",
    ingame_name: "Kuu",
    team: {
      name: "Blade Angels",
      logo: "/images/myanmar/team_icon/ba.png",
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲",
    },
  },
  {
    name: "Thet Htar Thinzar",
    ingame_name: "LICCA",
    team: {
      name: "Net Angels",
      logo: "/images/myanmar/team_icon/na.png",
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲",
    },
  },
  {
    name: "Thura Pyae Sone",
    ingame_name: "Light",
    team: {
      name: "Zino Esports",
      logo: "/images/myanmar/team_icon/zino.png",
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲",
    },
  },
  {
    name: "Kaung Min Khant",
    ingame_name: "Lina",
    team: {
      name: "AI Esports",
      logo: "/images/myanmar/team_icon/ai.png",
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲",
    },
  },
  {
    name: "Win Min Htoo",
    ingame_name: "Meow",
    team: null,
    country: {
      name: "Myanmar",
      logo: "🇲🇲",
    },
  },
  {
    name: "Moe Ko Ko",
    ingame_name: "Mok",
    team: {
      name: "Falcon Esports",
      logo: "/images/myanmar/team_icon/falcon.png",
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲",
    },
  },
  {
    name: "Min Ko Ko",
    ingame_name: "Naomi",
    team: null,
    country: {
      name: "Myanmar",
      logo: "🇲🇲",
    },
  },
  {
    name: "Hein Arkar Htet",
    ingame_name: "Niko",
    team: {
      name: "Burmese Ghouls",
      logo: "/images/myanmar/team_icon/bg.png",
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲",
    },
  },
  {
    name: "Khant Kyaw Zay",
    ingame_name: "OHMYJ3NNIE",
    team: {
      name: "AI Esports",
      logo: "/images/myanmar/team_icon/ai.png",
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲",
    },
  },
  {
    name: "Si Thu Min Htet",
    ingame_name: "Policy",
    team: {
      name: "Burmese Ghouls",
      logo: "/images/myanmar/team_icon/bg.png",
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲",
    },
  },
  {
    name: "Wai Phyo Aung",
    ingame_name: "Ps",
    team: {
      name: "AI Esports",
      logo: "/images/myanmar/team_icon/ai.png",
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲",
    },
  },
  {
    name: "Yar Zar Mon",
    ingame_name: "Px7",
    team: {
      name: "Falcon Esports",
      logo: "/images/myanmar/team_icon/falcon.png",
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲",
    },
  },
  {
    name: "Arkar Bhone Pyae",
    ingame_name: "Royal Milk",
    team: {
      name: "Falcon Esports",
      logo: "/images/myanmar/team_icon/falcon.png",
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲",
    },
  },
  {
    name: "Swan Htet Aung",
    ingame_name: "Ruby DD",
    team: {
      name: "Mythic SEAL",
      logo: "/images/myanmar/team_icon/ms.png",
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲",
    },
  },
  {
    name: "Htet Wai Kywal",
    ingame_name: "SAYU",
    team: {
      name: "Net Angels",
      logo: "/images/myanmar/team_icon/na.png",
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲",
    },
  },
  {
    name: "Kaung Htet Hein",
    ingame_name: "Shadow",
    team: null,
    country: {
      name: "Myanmar",
      logo: "🇲🇲",
    },
  },
  {
    name: "Hlwan Moe Htet",
    ingame_name: "Shine CG",
    team: {
      name: "9K EsportsxMG",
      logo: "/images/myanmar/team_icon/9k.png",
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲",
    },
  },
  {
    name: "Phyo Kyaw Hlaing",
    ingame_name: "Shinshinkick",
    team: null,
    country: {
      name: "Myanmar",
      logo: "🇲🇲",
    },
  },
  {
    name: "Pyae Sone",
    ingame_name: "Silent",
    team: null,
    country: {
      name: "Myanmar",
      logo: "🇲🇲",
    },
  },
  {
    name: "Kaung Khant Min",
    ingame_name: "Simple",
    team: null,
    country: {
      name: "Myanmar",
      logo: "🇲🇲",
    },
  },
  {
    name: "Htet Linn Hlyan Aung",
    ingame_name: "Stitch",
    team: {
      name: "Burmese Ghouls",
      logo: "/images/myanmar/team_icon/bg.png",
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲",
    },
  },
  {
    name: "Ye Htut Lwin",
    ingame_name: "Tychon",
    team: {
      name: "Young Legion",
      logo: "/images/myanmar/team_icon/yl.png",
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲",
    },
  },
  {
    name: "Van Maung",
    ingame_name: "VI VI",
    team: null,
    country: {
      name: "Myanmar",
      logo: "🇲🇲",
    },
  },
  {
    name: "Khant Paing Soe Htet",
    ingame_name: "Vam Vam",
    team: {
      name: "Team Star Boyz",
      logo: "/images/myanmar/team_icon/ts.png",
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲",
    },
  },
  {
    name: "Ye Man Wint",
    ingame_name: "XAM",
    team: null,
    country: {
      name: "Myanmar",
      logo: "🇲🇲",
    },
  },
  {
    name: "Thi Ha Aung",
    ingame_name: "Xiao Yan",
    team: {
      name: "Team Star Boyz",
      logo: "/images/myanmar/team_icon/ts.png",
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲",
    },
  },
  {
    name: "Hein Zaw Aung",
    ingame_name: "Xidde",
    team: {
      name: "Mythic SEAL",
      logo: "/images/myanmar/team_icon/ms.png",
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲",
    },
  },
  {
    name: "Kan Kaung",
    ingame_name: "Yato",
    team: null,
    country: {
      name: "Myanmar",
      logo: "🇲🇲",
    },
  },
  {
    name: "Hein Htet Oo",
    ingame_name: "Ying",
    team: {
      name: "AI Esports",
      logo: "/images/myanmar/team_icon/ai.png",
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲",
    },
  },
  {
    name: "Kyaw Zin Bo",
    ingame_name: "Zippx",
    team: {
      name: "Mythic SEAL",
      logo: "/images/myanmar/team_icon/ms.png",
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲",
    },
  },
  {
    name: "Hein Min Khant",
    ingame_name: "yellowflash",
    team: {
      name: "Mythic SEAL",
      logo: "/images/myanmar/team_icon/ms.png",
    },
    country: {
      name: "Myanmar",
      logo: "🇲🇲",
    },
  },
];

export const philippinesPlayer = [
  {
    name: "Frediemar Serafico",
    ingame_name: "3MarTzy",
    team: null,
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Matthew Mandilag",
    ingame_name: "666",
    team: null,
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Aaron Lim",
    ingame_name: "Aaronqt",
    team: null,
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Jermaine Fernandez",
    ingame_name: "Aizawa",
    team: {
      name: "Team Liquid",
      logo: "/images/philippines/team_icon/liquid.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Romiere Padilla",
    ingame_name: "Allidap",
    team: null,
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Rica Fatima Amores",
    ingame_name: "Amoree",
    team: {
      name: "Omega Empress",
      logo: "/images/philippines/team_icon/omega.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Andrew Lew Flora",
    ingame_name: "Andoryuuu",
    team: {
      name: "Omega Esports",
      logo: "/images/philippines/team_icon/omega.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Arvie Calderon Antonio",
    ingame_name: "Aqua",
    team: {
      name: "RSG Philippines",
      logo: "/images/philippines/team_icon/rsg.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Gwyneth Berdin Diagon",
    ingame_name: "Ayanami",
    team: {
      name: "Omega Empress",
      logo: "/images/philippines/team_icon/omega.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Mc Ivan Kelly Ocampo",
    ingame_name: "Aykii",
    team: {
      name: "Galaxy Legends",
      logo: "/images/philippines/team_icon/gl.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Allen Jedric O. Baloy",
    ingame_name: "Baloyskie",
    team: {
      name: "Geek Fam ID",
      logo: "/images/philippines/team_icon/gf.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Peter Bryce Lozano",
    ingame_name: "Basic",
    team: {
      name: "Cloud9",
      logo: "/images/philippines/team_icon/clould.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Paul Ian Sergio",
    ingame_name: "Beemo",
    team: null,
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Venezia Corpuz",
    ingame_name: "Bene",
    team: {
      name: "ONIC ZOL",
      logo: "/images/philippines/team_icon/onicz.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Frederic Benedict Gonzales",
    ingame_name: "Bennyqt",
    team: {
      name: "Team Liquid PH",
      logo: "/images/philippines/team_icon/liquid.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Ben Seloe Dizon Maglaque",
    ingame_name: "Benthings",
    team: {
      name: "Aurora Gaming",
      logo: "/images/philippines/team_icon/auora.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Bien Chumecera",
    ingame_name: "Boyet",
    team: null,
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Borris James Parro",
    ingame_name: "Brusko",
    team: {
      name: "Fnatic ONIC PH",
      logo: "/images/philippines/team_icon/fonic.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Kenneth Palejo Castro",
    ingame_name: "CADENZA",
    team: {
      name: "Galaxy Legends",
      logo: "/images/philippines/team_icon/gl.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Joshua Garcia Mangilog",
    ingame_name: "Ch4knu",
    team: {
      name: "Omega Esports",
      logo: "/images/philippines/team_icon/omega.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Ralph Mico Sampang",
    ingame_name: "Coco",
    team: {
      name: "Falcons AP.Bren",
      logo: "/images/philippines/team_icon/apbren.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Jahaziel Jay Villanueva",
    ingame_name: "Crypzu",
    team: null,
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Cymond Torres",
    ingame_name: "Cy",
    team: {
      name: "RRQ Kaito",
      logo: "/images/philippines/team_icon/rrqk.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Dan Nathaniel Yambao",
    ingame_name: "Dan",
    team: {
      name: "Omega Neos",
      logo: "/images/philippines/team_icon/omega.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Marc Danielle San Luis",
    ingame_name: "Dee",
    team: null,
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Jonard Cedrix Caranto",
    ingame_name: "Demonkite",
    team: {
      name: "Aurora Gaming",
      logo: "/images/philippines/team_icon/auora.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Landher Mendoza San Gabriel",
    ingame_name: "Der",
    team: {
      name: "ONIC Arsenals",
      logo: "/images/philippines/team_icon/onica.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Dian Felix Cruz",
    ingame_name: "Dian",
    team: null,
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Danver Canja",
    ingame_name: "Ding",
    team: {
      name: "Vanguard Esports",
      logo: "/images/philippines/team_icon/varguard.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Gerald Trinchera",
    ingame_name: "Dlar",
    team: null,
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Naser Ignacio Mollazehi",
    ingame_name: "Dogie",
    team: null,
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Mark Ferry Nazar",
    ingame_name: "Dokmen",
    team: {
      name: "Omega Neos",
      logo: "/images/philippines/team_icon/omega.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Jan Dominic Del Delmundo",
    ingame_name: "Domeng",
    team: {
      name: "Aurora Gaming",
      logo: "/images/philippines/team_icon/auora.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Kyle Dominic Soto",
    ingame_name: "Dominic",
    team: {
      name: "Bleed Esports",
      logo: "/images/philippines/team_icon/bleed.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Mariusz Villamero Tan",
    ingame_name: "Donut",
    team: {
      name: "Team Flash KH",
      logo: "/images/philippines/team_icon/teamflash.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Mark Exequiel Chua Cruz",
    ingame_name: "Dysania",
    team: null,
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Eman Llanda Sangco",
    ingame_name: "EMANN",
    team: {
      name: "Bigetron Alpha",
      logo: "/images/philippines/team_icon/bige.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Edward Jay Dapadap",
    ingame_name: "Edward",
    team: {
      name: "Aurora Gaming",
      logo: "/images/philippines/team_icon/auora.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Emanuel Cervantes Candelaria",
    ingame_name: "Elpizo",
    team: {
      name: "MHRLK Esports",
      logo: "/images/philippines/team_icon/mhrlk.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Jomearie Delos Santos",
    ingame_name: "Escalera",
    team: null,
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Dexter Piedad Martinez",
    ingame_name: "Exort",
    team: {
      name: "Blacklist International",
      logo: "/images/philippines/team_icon/blacklist.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Russel Aaron Usi",
    ingame_name: "Eyon",
    team: null,
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "David Charles Canon",
    ingame_name: "FlapTzy",
    team: {
      name: "Falcons AP.Bren",
      logo: "/images/philippines/team_icon/apbren.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Ralph Benedict Hamoy",
    ingame_name: "Flick",
    team: null,
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Cedric Pasusani",
    ingame_name: "Fuzaken",
    team: null,
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Jaylord Bacog",
    ingame_name: "Goodnight",
    team: {
      name: "Team Falcons",
      logo: "/images/philippines/team_icon/tfalcon.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Jetson Ignacio",
    ingame_name: "Goyo",
    team: {
      name: "TNC Pro Team",
      logo: "/images/philippines/team_icon/tcnpro.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Christian Martinez",
    ingame_name: "Goyong",
    team: null,
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "John Paul Sandueta Salonga",
    ingame_name: "H2wo",
    team: {
      name: "Omega Esports",
      logo: "/images/philippines/team_icon/omega.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Christian Francis Morada",
    ingame_name: "HEADS",
    team: {
      name: "TNC Pro Team",
      logo: "/images/philippines/team_icon/tcnpro.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Jaymark Aaron Thomas Lazaro",
    ingame_name: "Hadess",
    team: {
      name: "NIP Flash",
      logo: "/images/philippines/team_icon/nipflash.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Salic Alauya Imam",
    ingame_name: "Hadji",
    team: {
      name: "Blacklist International",
      logo: "/images/philippines/team_icon/blacklist.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Jaylord Gonzales",
    ingame_name: "Hate",
    team: {
      name: "TNC Pro Team",
      logo: "/images/philippines/team_icon/tcnpro.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Earvin John Esperanza",
    ingame_name: "Heath",
    team: null,
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Jhonwin Dela Merced Vergara",
    ingame_name: "Hesa",
    team: {
      name: "VSG",
      logo: "/images/philippines/team_icon/vsg.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Kristofer Malcus Calderon",
    ingame_name: "Hesu",
    team: null,
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Robert Remar Candoy",
    ingame_name: "Hito",
    team: {
      name: "ONIC Arsenals",
      logo: "/images/philippines/team_icon/onica.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "John Vincent Banal",
    ingame_name: "Innocent",
    team: {
      name: "Selangor Red Giants",
      logo: "/images/philippines/team_icon/srg.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "John Darry Abarquez",
    ingame_name: "Irrad",
    team: {
      name: "RSG Philippines",
      logo: "/images/philippines/team_icon/rsg.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Joshwell Christian Manaog",
    ingame_name: "Iy4knu",
    team: {
      name: "ZOL Esports",
      logo: "/images/philippines/team_icon/zol.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Jhon Marl Sebastian",
    ingame_name: "JM",
    team: {
      name: "Blacklist International",
      logo: "/images/philippines/team_icon/blacklist.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Jason Rafael Torculas",
    ingame_name: "Jay",
    team: {
      name: "The Simpsons",
      logo: "/images/philippines/team_icon/the_simpsons.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Jaypee Gonzales Dela Cruz",
    ingame_name: "Jaypee",
    team: {
      name: "Team Liquid PH",
      logo: "/images/philippines/team_icon/liquid.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Jeff Frankin Anaya",
    ingame_name: "JeffQT4ever",
    team: null,

    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Jem Lanojan",
    ingame_name: "Jem",
    team: null,

    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Jewel Gayle Vicencio Reyes",
    ingame_name: "Jewel",
    team: {
      name: "Victory Song Gamers",
      logo: "/images/philippines/team_icon/victory_song_gamers.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "James Gloria",
    ingame_name: "Jeymz",
    team: null,

    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Jomari Pingol",
    ingame_name: "Jowm",
    team: {
      name: "Omega Esports",
      logo: "/images/philippines/team_icon/omega.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Vincent De Guzman",
    ingame_name: "Joy Boy",
    team: null,

    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "King Cyric Perez",
    ingame_name: "K1NGKONG",
    team: {
      name: "Fnatic ONIC PH",
      logo: "/images/philippines/team_icon/fonic.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Kent Xavier Lopez",
    ingame_name: "KEVIER",
    team: {
      name: "Blacklist International",
      logo: "/images/philippines/team_icon/blacklist.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Kairi Ygnacio Rayosdelsol",
    ingame_name: "Kairi",
    team: {
      name: "Fnatic ONIC",
      logo: "/images/philippines/team_icon/fonic.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Karl Rouvic P. Devosora",
    ingame_name: "Karl",
    team: null,

    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Karl Gabriel Nepomuceno",
    ingame_name: "KarlTzy",
    team: {
      name: "Team Liquid PH",
      logo: "/images/philippines/team_icon/liquid.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Kaye Maerylle Alpuerto",
    ingame_name: "Keishi",
    team: {
      name: "Omega Empress",
      logo: "/images/philippines/team_icon/omega.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Jefferdson Mogol",
    ingame_name: "Kekedoot",
    team: {
      name: "ONIC Arsenals",
      logo: "/images/philippines/team_icon/onica.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Grant Duane Pillas",
    ingame_name: "Kelra",
    team: {
      name: "Fnatic ONIC PH",
      logo: "/images/philippines/team_icon/fonic.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Kenneth Jiane S. Villa",
    ingame_name: "Kenji",
    team: {
      name: "RRQ Kaito",
      logo: "/images/philippines/team_icon/rrqk.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Kiel VJ Hernandez Cruzem",
    ingame_name: "Kielvj",
    team: {
      name: "DFYG",
      logo: "/images/philippines/team_icon/dfyg.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Ashley Marco Cruz",
    ingame_name: "Killuash",
    team: null,

    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Kim Dela Cruz",
    ingame_name: "Kimpoy",
    team: {
      name: "Blacklist International",
      logo: "/images/philippines/team_icon/blacklist.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Jann Kirk Solcruz Gutierrez",
    ingame_name: "Kirk",
    team: {
      name: "Fnatic ONIC PH",
      logo: "/images/philippines/team_icon/fonic.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Mark Glenn Florencio",
    ingame_name: "Kram God",
    team: {
      name: "Omega Esports",
      logo: "/images/philippines/team_icon/omega.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Mark Genzon Sojero Rusiana",
    ingame_name: "Kramm",
    team: {
      name: "Selangor Red Giants",
      logo: "/images/philippines/team_icon/srg.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Jankurt Russel Matira",
    ingame_name: "KurtTzy",
    team: {
      name: "NIP Flash",
      logo: "/images/philippines/team_icon/nipflash.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Clarense Jay G. Camilo",
    ingame_name: "Kusey",
    team: {
      name: "RSG Philippines",
      logo: "/images/philippines/team_icon/rsg.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Michael Angelo Sayson",
    ingame_name: "KyleTzy",
    team: {
      name: "Falcons AP.Bren",
      logo: "/images/philippines/team_icon/apbren.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Ken Louie Bermudes Pile",
    ingame_name: "Kzen",
    team: {
      name: "TNC Pro Team",
      logo: "/images/philippines/team_icon/tcnpro.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Lance Walter Cunanan",
    ingame_name: "LanceCy",
    team: {
      name: "TNC Pro Team",
      logo: "/images/philippines/team_icon/tcnpro.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Lance Aron Misa",
    ingame_name: "Lansu",
    team: null,

    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Patrick Lawrence G. Ciego",
    ingame_name: "Lawtrick",
    team: null,

    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Dylan Aaron Poblete Catipon",
    ingame_name: "Light",
    team: {
      name: "RSG Philippines",
      logo: "/images/philippines/team_icon/rsg.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Louis Gabriel Ariola",
    ingame_name: "Louis",
    team: {
      name: "Omega Neos",
      logo: "/images/philippines/team_icon/omega.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Allan Castromayor Jr.",
    ingame_name: "Lusty",
    team: {
      name: "ZOL Esports",
      logo: "/images/philippines/team_icon/zol.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Michael Medrocillo Endino",
    ingame_name: "MP the King",
    team: {
      name: "Blacklist International",
      logo: "/images/philippines/team_icon/blacklist.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Mujahid Usman Malik",
    ingame_name: "Malik",
    team: {
      name: "Aurora Hunters",
      logo: "/images/philippines/team_icon/auora.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Mark Christian Etcobanez Capacio",
    ingame_name: "Markyyyyy",
    team: {
      name: "Evil",
      logo: "/images/philippines/team_icon/evil.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Mery Christine Vivero",
    ingame_name: "Meraaay",
    team: {
      name: "Omega Empress",
      logo: "/images/philippines/team_icon/omega.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Karl Mico Tarala Quitlong",
    ingame_name: "Micophobia",
    team: null,

    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Chris Amiel Enobio",
    ingame_name: "Mielow",
    team: {
      name: "Cloud9",
      logo: "/images/philippines/team_icon/clould.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Ren Consulta Diong",
    ingame_name: "Mike Sama",
    team: {
      name: "Twisted Minds",
      logo: "/images/philippines/team_icon/twisted.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Deomark Sabugo Tabangay",
    ingame_name: "Mikko",
    team: null,

    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Carl Edriel Gallantes",
    ingame_name: "Minguin",
    team: {
      name: "RRQ Kaito",
      logo: "/images/philippines/team_icon/rrqk.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Nathanael Sumpay Estrologo",
    ingame_name: "Nathzz",
    team: {
      name: "RSG Philippines",
      logo: "/images/philippines/team_icon/rsg.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Kenneth Sablande Barro",
    ingame_name: "Nets",
    team: {
      name: "Team Vamos",
      logo: "/images/philippines/team_icon/varmos.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Jhondy Ranque",
    ingame_name: "Nibor",
    team: {
      name: "RSG Philippines",
      logo: "/images/philippines/team_icon/rsg.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Robee Bryan Pormocille",
    ingame_name: "Ninjakilla",
    team: {
      name: "LOT",
      logo: "/images/philippines/team_icon/lot.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Jonmar Villaluna",
    ingame_name: "OhMyV33NUS",
    team: null,

    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Kiel Calvin Q. Soriano",
    ingame_name: "Oheb",
    team: {
      name: "Blacklist International",
      logo: "/images/philippines/team_icon/blacklist.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Jhonville Borres Villar",
    ingame_name: "Outplayed",
    team: {
      name: "Blacklist International",
      logo: "/images/philippines/team_icon/blacklist.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Rowgien Stimpson Unigo",
    ingame_name: "Owgwen",
    team: {
      name: "Falcons AP.Bren",
      logo: "/images/philippines/team_icon/apbren.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Lee Howard Gonzales",
    ingame_name: "Owl",
    team: {
      name: "RED Esports MY",
      logo: "/images/philippines/team_icon/red.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Archie Guevarra Jr",
    ingame_name: "Pancake",
    team: {
      name: "Rift Esports",
      logo: "/images/philippines/team_icon/rift.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Vincent Joseph Villones Unigo",
    ingame_name: "Pandora",
    team: {
      name: "Falcons AP.Bren",
      logo: "/images/philippines/team_icon/apbren.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Renz Carlo Reyes",
    ingame_name: "Pein",
    team: null,
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "John Sumawan",
    ingame_name: "Perkz",
    team: {
      name: "Blacklist International",
      logo: "/images/philippines/team_icon/blacklist.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Angelo Kyle Arcangel",
    ingame_name: "Pheww",
    team: {
      name: "Falcons AP.Bren",
      logo: "/images/philippines/team_icon/apbren.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Joshua Ramos",
    ingame_name: "RYUJIN",
    team: {
      name: "Team Falcons",
      logo: "/images/philippines/team_icon/tfalcon.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Christian Fajura",
    ingame_name: "Rafflesia",
    team: {
      name: "TODAK",
      logo: "/images/philippines/team_icon/todak.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Honey Jemlan",
    ingame_name: "Rain",
    team: {
      name: "ONIC ZOL",
      logo: "/images/philippines/team_icon/onicz.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Dean Christian Sumagui",
    ingame_name: "Raizen",
    team: {
      name: "Team Falcons",
      logo: "/images/philippines/team_icon/tfalcon.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Ralph Adrales",
    ingame_name: "Rapidoot",
    team: {
      name: "Team SV",
      logo: "/images/philippines/team_icon/teamsv.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Reginald Baluyot",
    ingame_name: "Regi",
    team: {
      name: "Blacklist Academy",
      logo: "/images/philippines/team_icon/blacklist.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Renejay Barcase",
    ingame_name: "Renejay",
    team: {
      name: "Aurora Gaming",
      logo: "/images/philippines/team_icon/auora.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Renz Errol Salonga Cadua",
    ingame_name: "Renzio",
    team: {
      name: "VSG",
      logo: "/images/philippines/team_icon/vsg.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Lhoureain Hadiyah Samon Alcaraz",
    ingame_name: "Rianne",
    team: {
      name: "Victory Song Gamers",
      logo: "/images/philippines/team_icon/vsg.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Carlito Ribo Jr.",
    ingame_name: "Ribo",
    team: null,
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Jayson Alupit",
    ingame_name: "Riku",
    team: {
      name: "Omega Esports",
      logo: "/images/philippines/team_icon/omega.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Ian Jakob Seguiran",
    ingame_name: "Rindo",
    team: null,
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Rion Kudo",
    ingame_name: "Rk3",
    team: null,
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Nowee Cabailo Macasa",
    ingame_name: "Ryota",
    team: {
      name: "Omega Esports",
      logo: "/images/philippines/team_icon/omega.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Jeff Lenjesson S. Subang",
    ingame_name: "S4gitnu",
    team: {
      name: "Bleed Esports",
      logo: "/images/philippines/team_icon/bleed.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Shemaiah Daniel Chu",
    ingame_name: "SDzyz",
    team: {
      name: "TNC Pro Team",
      logo: "/images/philippines/team_icon/tcnpro.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Sanford Marin Vinuya",
    ingame_name: "Sanford",
    team: {
      name: "Team Liquid PH",
      logo: "/images/philippines/team_icon/liquid.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Alston Pabico",
    ingame_name: "Sanji",
    team: {
      name: "Team Liquid PH",
      logo: "/images/philippines/team_icon/liquid.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Kenneth De Pedro Fedelin",
    ingame_name: "Saxa",
    team: {
      name: "KeepBest Gaming",
      logo: "/images/philippines/team_icon/keepbest.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Stephen Jasper Castillo",
    ingame_name: "Sensui",
    team: {
      name: "RED Esports MY",
      logo: "/images/philippines/team_icon/red.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Sheen Cobrado Perez",
    ingame_name: "Shinoa",
    team: {
      name: "Omega Empress",
      logo: "/images/philippines/team_icon/omega.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Jan Carl Valdez",
    ingame_name: "Shizou",
    team: {
      name: "TODAK",
      logo: "/images/philippines/team_icon/todak.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Justin Ahron Guanga",
    ingame_name: "Shocker",
    team: {
      name: "Zino Zenith",
      logo: "/images/philippines/team_icon/zeno.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Aaren Maximos Palomo",
    ingame_name: "Sindel",
    team: null,
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Kennt Anthony Baesa",
    ingame_name: "Souuul",
    team: {
      name: "HomeBois",
      logo: "/images/philippines/team_icon/home.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Brain Milez Santos",
    ingame_name: "SpiderMilez",
    team: {
      name: "Fnatic ONIC PH",
      logo: "/images/philippines/team_icon/fonic.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Dale Rolan Seña Vidor",
    ingame_name: "Stowm",
    team: {
      name: "RSG Malaysia",
      logo: "/images/philippines/team_icon/rsg.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Oscar Romero",
    ingame_name: "Sumpak",
    team: null,
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Frince Miguel Ramirez",
    ingame_name: "Super Frince",
    team: {
      name: "Fnatic ONIC PH",
      logo: "/images/philippines/team_icon/fonic.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Marco Stephen Requitiano",
    ingame_name: "Super Marco",
    team: {
      name: "Falcons AP.Bren",
      logo: "/images/philippines/team_icon/apbren.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Jon Redick Bordeos",
    ingame_name: "Super Red",
    team: {
      name: "PRO Esports",
      logo: "/images/philippines/team_icon/proesport.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Vincent Brian Montilla",
    ingame_name: "Takenaga",
    team: {
      name: "GameLab",
      logo: "/images/philippines/team_icon/gamelab.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Denise Leyda Maragisan",
    ingame_name: "Taro",
    team: {
      name: "ONIC ZOL",
      logo: "/images/philippines/team_icon/onicz.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Adrian Gaspar Bacallo",
    ingame_name: "Toshi",
    team: null,
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Damasco Tracy Danielle",
    ingame_name: "Tracy",
    team: {
      name: "KeepBest Gaming",
      logo: "/images/philippines/team_icon/keepbest.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Rainiel Jhim Agustin Logronio",
    ingame_name: "URESHIII",
    team: {
      name: "MLC Maple Leaf",
      logo: "/images/philippines/team_icon/mlc.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Vincent Orogo",
    ingame_name: "Venogo",
    team: {
      name: "YBINGAME",
      logo: "/images/philippines/team_icon/ybin.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Christian Mangabay",
    ingame_name: "West",
    team: {
      name: "Omega Neos",
      logo: "/images/philippines/team_icon/omega.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Danerie James Del Rosario",
    ingame_name: "Wise",
    team: null,
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Elyson Edouard Caranza",
    ingame_name: "Wrecker",
    team: {
      name: "RSG Philippines",
      logo: "/images/philippines/team_icon/rsg.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Jan Bradford Amande",
    ingame_name: "XBOCT",
    team: {
      name: "Team SV",
      logo: "/images/philippines/team_icon/teamsv.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Tristan Cabrera",
    ingame_name: "Yawi",
    team: {
      name: "TNC Pro Team",
      logo: "/images/philippines/team_icon/tcnpro.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Czedrick Romero",
    ingame_name: "Yoshinu",
    team: null,
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Kenneth Carl Tadeo",
    ingame_name: "Yue",
    team: {
      name: "Aurora Gaming",
      logo: "/images/philippines/team_icon/auora.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Yuji Aizawa",
    ingame_name: "Yuji",
    team: null,
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Masayuki Fujita",
    ingame_name: "YukTzy",
    team: null,
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Billy Jazha Alfonso",
    ingame_name: "Z4pnu",
    team: {
      name: "Omega Esports",
      logo: "/images/philippines/team_icon/omega.png",
    },
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
  {
    name: "Justine Sadia Palma",
    ingame_name: "Zaida",
    team: null,
    country: {
      name: "Philippines",
      logo: "🇵🇭",
    },
  },
];

export const playerData: PlayerData[] = [
  ...myanmarPlayer,
  ...philippinesPlayer,
];
