const languages = [
  {
    language_code: "ab",
    language_name: "Abkhaz",
  },
  {
    language_code: "aa",
    language_name: "Afar",
  },
  {
    language_code: "af",
    language_name: "Afrikaans",
  },
  {
    language_code: "ak",
    language_name: "Akan",
  },
  {
    language_code: "sq",
    language_name: "Albanian",
  },
  {
    language_code: "am",
    language_name: "Amharic",
  },
  {
    language_code: "ar",
    language_name: "Arabic",
  },
  {
    language_code: "an",
    language_name: "Aragonese",
  },
  {
    language_code: "hy",
    language_name: "Armenian",
  },
  {
    language_code: "as",
    language_name: "Assamese",
  },
  {
    language_code: "av",
    language_name: "Avaric",
  },
  {
    language_code: "ae",
    language_name: "Avestan",
  },
  {
    language_code: "ay",
    language_name: "Aymara",
  },
  {
    language_code: "az",
    language_name: "Azerbaijani",
  },
  {
    language_code: "bm",
    language_name: "Bambara",
  },
  {
    language_code: "ba",
    language_name: "Bashkir",
  },
  {
    language_code: "eu",
    language_name: "Basque",
  },
  {
    language_code: "be",
    language_name: "Belarusian",
  },
  {
    language_code: "bn",
    language_name: "Bengali; Bangla",
  },
  {
    language_code: "bh",
    language_name: "Bihari",
  },
  {
    language_code: "bi",
    language_name: "Bislama",
  },
  {
    language_code: "bs",
    language_name: "Bosnian",
  },
  {
    language_code: "br",
    language_name: "Breton",
  },
  {
    language_code: "bg",
    language_name: "Bulgarian",
  },
  {
    language_code: "my",
    language_name: "Burmese",
  },
  {
    language_code: "ca",
    language_name: "Catalan; Valencian",
  },
  {
    language_code: "ch",
    language_name: "Chamorro",
  },
  {
    language_code: "ce",
    language_name: "Chechen",
  },
  {
    language_code: "ny",
    language_name: "Chichewa; Chewa; Nyanja",
  },
  {
    language_code: "zh",
    language_name: "Chinese",
  },
  {
    language_code: "cv",
    language_name: "Chuvash",
  },
  {
    language_code: "kw",
    language_name: "Cornish",
  },
  {
    language_code: "co",
    language_name: "Corsican",
  },
  {
    language_code: "cr",
    language_name: "Cree",
  },
  {
    language_code: "hr",
    language_name: "Croatian",
  },
  {
    language_code: "cs",
    language_name: "Czech",
  },
  {
    language_code: "da",
    language_name: "Danish",
  },
  {
    language_code: "dv",
    language_name: "Divehi; Dhivehi; Maldivian;",
  },
  {
    language_code: "nl",
    language_name: "Dutch",
  },
  {
    language_code: "dz",
    language_name: "Dzongkha",
  },
  {
    language_code: "en",
    language_name: "English",
  },
  {
    language_code: "eo",
    language_name: "Esperanto",
  },
  {
    language_code: "et",
    language_name: "Estonian",
  },
  {
    language_code: "ee",
    language_name: "Ewe",
  },
  {
    language_code: "fo",
    language_name: "Faroese",
  },
  {
    language_code: "fj",
    language_name: "Fijian",
  },
  {
    language_code: "fi",
    language_name: "Finnish",
  },
  {
    language_code: "fr",
    language_name: "French",
  },
  {
    language_code: "ff",
    language_name: "Fula; Fulah; Pulaar; Pular",
  },
  {
    language_code: "gl",
    language_name: "Galician",
  },
  {
    language_code: "ka",
    language_name: "Georgian",
  },
  {
    language_code: "de",
    language_name: "German",
  },
  {
    language_code: "el",
    language_name: "Greek, Modern",
  },
  {
    language_code: "gn",
    language_name: "GuaranÃ­",
  },
  {
    language_code: "gu",
    language_name: "Gujarati",
  },
  {
    language_code: "ht",
    language_name: "Haitian; Haitian Creole",
  },
  {
    language_code: "ha",
    language_name: "Hausa",
  },
  {
    language_code: "he",
    language_name: "Hebrew (modern)",
  },
  {
    language_code: "hz",
    language_name: "Herero",
  },
  {
    language_code: "hi",
    language_name: "Hindi",
  },
  {
    language_code: "ho",
    language_name: "Hiri Motu",
  },
  {
    language_code: "hu",
    language_name: "Hungarian",
  },
  {
    language_code: "ia",
    language_name: "Interlingua",
  },
  {
    language_code: "id",
    language_name: "Indonesian",
  },
  {
    language_code: "ie",
    language_name: "Interlingue",
  },
  {
    language_code: "ga",
    language_name: "Irish",
  },
  {
    language_code: "ig",
    language_name: "Igbo",
  },
  {
    language_code: "ik",
    language_name: "Inupiaq",
  },
  {
    language_code: "io",
    language_name: "Ido",
  },
  {
    language_code: "is",
    language_name: "Icelandic",
  },
  {
    language_code: "it",
    language_name: "Italian",
  },
  {
    language_code: "iu",
    language_name: "Inuktitut",
  },
  {
    language_code: "ja",
    language_name: "Japanese",
  },
  {
    language_code: "jv",
    language_name: "Javanese",
  },
  {
    language_code: "kl",
    language_name: "Kalaallisut, Greenlandic",
  },
  {
    language_code: "kn",
    language_name: "Kannada",
  },
  {
    language_code: "kr",
    language_name: "Kanuri",
  },
  {
    language_code: "ks",
    language_name: "Kashmiri",
  },
  {
    language_code: "kk",
    language_name: "Kazakh",
  },
  {
    language_code: "km",
    language_name: "Khmer",
  },
  {
    language_code: "ki",
    language_name: "Kikuyu, Gikuyu",
  },
  {
    language_code: "rw",
    language_name: "Kinyarwanda",
  },
  {
    language_code: "ky",
    language_name: "Kyrgyz",
  },
  {
    language_code: "kv",
    language_name: "Komi",
  },
  {
    language_code: "kg",
    language_name: "Kongo",
  },
  {
    language_code: "ko",
    language_name: "Korean",
  },
  {
    language_code: "ku",
    language_name: "Kurdish",
  },
  {
    language_code: "kj",
    language_name: "Kwanyama, Kuanyama",
  },
  {
    language_code: "la",
    language_name: "Latin",
  },
  {
    language_code: "lb",
    language_name: "Luxembourgish, Letzeburgesch",
  },
  {
    language_code: "lg",
    language_name: "Ganda",
  },
  {
    language_code: "li",
    language_name: "Limburgish, Limburgan, Limburger",
  },
  {
    language_code: "ln",
    language_name: "Lingala",
  },
  {
    language_code: "lo",
    language_name: "Lao",
  },
  {
    language_code: "lt",
    language_name: "Lithuanian",
  },
  {
    language_code: "lu",
    language_name: "Luba-Katanga",
  },
  {
    language_code: "lv",
    language_name: "Latvian",
  },
  {
    language_code: "gv",
    language_name: "Manx",
  },
  {
    language_code: "mk",
    language_name: "Macedonian",
  },
  {
    language_code: "mg",
    language_name: "Malagasy",
  },
  {
    language_code: "ms",
    language_name: "Malay",
  },
  {
    language_code: "ml",
    language_name: "Malayalam",
  },
  {
    language_code: "mt",
    language_name: "Maltese",
  },
  {
    language_code: "mi",
    language_name: "MÄori",
  },
  {
    language_code: "mr",
    language_name: "Marathi (MarÄá¹­hÄ«)",
  },
  {
    language_code: "mh",
    language_name: "Marshallese",
  },
  {
    language_code: "mn",
    language_name: "Mongolian",
  },
  {
    language_code: "na",
    language_name: "Nauru",
  },
  {
    language_code: "nv",
    language_name: "Navajo, Navaho",
  },
  {
    language_code: "nb",
    language_name: "Norwegian BokmÃ¥l",
  },
  {
    language_code: "nd",
    language_name: "North Ndebele",
  },
  {
    language_code: "ne",
    language_name: "Nepali",
  },
  {
    language_code: "ng",
    language_name: "Ndonga",
  },
  {
    language_code: "nn",
    language_name: "Norwegian Nynorsk",
  },
  {
    language_code: "no",
    language_name: "Norwegian",
  },
  {
    language_code: "ii",
    language_name: "Nuosu",
  },
  {
    language_code: "nr",
    language_name: "South Ndebele",
  },
  {
    language_code: "oc",
    language_name: "Occitan",
  },
  {
    language_code: "oj",
    language_name: "Ojibwe, Ojibwa",
  },
  {
    language_code: "cu",
    language_name:
      "Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic",
  },
  {
    language_code: "om",
    language_name: "Oromo",
  },
  {
    language_code: "or",
    language_name: "Oriya",
  },
  {
    language_code: "os",
    language_name: "Ossetian, Ossetic",
  },
  {
    language_code: "pa",
    language_name: "Panjabi, Punjabi",
  },
  {
    language_code: "pi",
    language_name: "PÄli",
  },
  {
    language_code: "fa",
    language_name: "Persian (Farsi)",
  },
  {
    language_code: "pl",
    language_name: "Polish",
  },
  {
    language_code: "ps",
    language_name: "Pashto, Pushto",
  },
  {
    language_code: "pt",
    language_name: "Portuguese",
  },
  {
    language_code: "qu",
    language_name: "Quechua",
  },
  {
    language_code: "rm",
    language_name: "Romansh",
  },
  {
    language_code: "rn",
    language_name: "Kirundi",
  },
  {
    language_code: "ro",
    language_name: "Romanian, [])",
  },
  {
    language_code: "ru",
    language_name: "Russian",
  },
  {
    language_code: "sa",
    language_name: "Sanskrit (Saá¹ská¹›ta)",
  },
  {
    language_code: "sc",
    language_name: "Sardinian",
  },
  {
    language_code: "sd",
    language_name: "Sindhi",
  },
  {
    language_code: "se",
    language_name: "Northern Sami",
  },
  {
    language_code: "sm",
    language_name: "Samoan",
  },
  {
    language_code: "sg",
    language_name: "Sango",
  },
  {
    language_code: "sr",
    language_name: "Serbian",
  },
  {
    language_code: "gd",
    language_name: "Scottish Gaelic; Gaelic",
  },
  {
    language_code: "sn",
    language_name: "Shona",
  },
  {
    language_code: "si",
    language_name: "Sinhala, Sinhalese",
  },
  {
    language_code: "sk",
    language_name: "Slovak",
  },
  {
    language_code: "sl",
    language_name: "Slovene",
  },
  {
    language_code: "so",
    language_name: "Somali",
  },
  {
    language_code: "st",
    language_name: "Southern Sotho",
  },
  {
    language_code: "es",
    language_name: "Spanish; Castilian",
  },
  {
    language_code: "su",
    language_name: "Sundanese",
  },
  {
    language_code: "sw",
    language_name: "Swahili",
  },
  {
    language_code: "ss",
    language_name: "Swati",
  },
  {
    language_code: "sv",
    language_name: "Swedish",
  },
  {
    language_code: "ta",
    language_name: "Tamil",
  },
  {
    language_code: "te",
    language_name: "Telugu",
  },
  {
    language_code: "tg",
    language_name: "Tajik",
  },
  {
    language_code: "th",
    language_name: "Thai",
  },
  {
    language_code: "ti",
    language_name: "Tigrinya",
  },
  {
    language_code: "bo",
    language_name: "Tibetan Standard, Tibetan, Central",
  },
  {
    language_code: "tk",
    language_name: "Turkmen",
  },
  {
    language_code: "tl",
    language_name: "Tagalog",
  },
  {
    language_code: "tn",
    language_name: "Tswana",
  },
  {
    language_code: "to",
    language_name: "Tonga (Tonga Islands)",
  },
  {
    language_code: "tr",
    language_name: "Turkish",
  },
  {
    language_code: "ts",
    language_name: "Tsonga",
  },
  {
    language_code: "tt",
    language_name: "Tatar",
  },
  {
    language_code: "tw",
    language_name: "Twi",
  },
  {
    language_code: "ty",
    language_name: "Tahitian",
  },
  {
    language_code: "ug",
    language_name: "Uyghur, Uighur",
  },
  {
    language_code: "uk",
    language_name: "Ukrainian",
  },
  {
    language_code: "ur",
    language_name: "Urdu",
  },
  {
    language_code: "uz",
    language_name: "Uzbek",
  },
  {
    language_code: "ve",
    language_name: "Venda",
  },
  {
    language_code: "vi",
    language_name: "Vietnamese",
  },
  {
    language_code: "vo",
    language_name: "VolapÃ¼k",
  },
  {
    language_code: "wa",
    language_name: "Walloon",
  },
  {
    language_code: "cy",
    language_name: "Welsh",
  },
  {
    language_code: "wo",
    language_name: "Wolof",
  },
  {
    language_code: "fy",
    language_name: "Western Frisian",
  },
  {
    language_code: "xh",
    language_name: "Xhosa",
  },
  {
    language_code: "yi",
    language_name: "Yiddish",
  },
  {
    language_code: "yo",
    language_name: "Yoruba",
  },
  {
    language_code: "za",
    language_name: "Zhuang, Chuang",
  },
  {
    language_code: "zu",
    language_name: "Zulu",
  },
];
module.exports = languages;
