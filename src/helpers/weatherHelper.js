const weatherConditions = {
    1000: {
        en: "Sunny / Clear",
        sr: "Sunčano / Vedro",
    },
    1003: {
        en: "Partly cloudy",
        sr: "Djelimično oblačno",
    },
    1006: {
        en: "Cloudy",
        sr: "Oblačno",
    },
    1009: {
        en: "Overcast",
        sr: "Potpuno oblačno",
    },
    1012: {
        en: "Haze",
        sr: "Izmaglica",
    },
    1015: {
        en: "Dust haze",
        sr: "Prašinasta izmaglica",
    },
    1018: {
        en: "Blowing dust",
        sr: "Prašina nošena vjetrom",
    },
    1021: {
        en: "Dust storm",
        sr: "Prašinska oluja",
    },
    1024: {
        en: "Sandstorm",
        sr: "Pješčana oluja",
    },
    1027: {
        en: "Severe sandstorm",
        sr: "Jaka pješčana oluja",
    },
    1030: {
        en: "Mist",
        sr: "Sumaglica",
    },
    1033: {
        en: "Smoke",
        sr: "Dim",
    },
    1036: {
        en: "Smoky haze",
        sr: "Izmaglica od dima",
    },
    1039: {
        en: "Smog",
        sr: "Smog",
    },
    1042: {
        en: "Severe smog",
        sr: "Jaki smog",
    },
    1045: {
        en: "Saharan dust",
        sr: "Saharska prašina",
    },
    1048: {
        en: "Dust",
        sr: "Prašina",
    },
    1063: {
        en: "Patchy rain possible",
        sr: "Moguća mjestimična kiša",
    },
    1066: {
        en: "Patchy snow possible",
        sr: "Moguć mjestimičan snijeg",
    },
    1069: {
        en: "Patchy sleet possible",
        sr: "Moguća mjestimična susnježica",
    },
    1072: {
        en: "Patchy freezing drizzle possible",
        sr: "Moguća mjestimična ledena rosulja",
    },
    1087: {
        en: "Thundery outbreaks possible",
        sr: "Moguća grmljavina",
    },
    1114: {
        en: "Blowing snow",
        sr: "Snijeg nošen vjetrom",
    },
    1117: {
        en: "Blizzard",
        sr: "Mećava",
    },
    1135: {
        en: "Fog",
        sr: "Magla",
    },
    1147: {
        en: "Freezing fog",
        sr: "Ledeća magla",
    },
    1150: {
        en: "Patchy light drizzle",
        sr: "Mjestimična slaba rosulja",
    },
    1153: {
        en: "Light drizzle",
        sr: "Slaba rosulja",
    },
    1168: {
        en: "Freezing drizzle",
        sr: "Ledeća rosulja",
    },
    1171: {
        en: "Heavy freezing drizzle",
        sr: "Jaka ledeća rosulja",
    },
    1180: {
        en: "Patchy light rain",
        sr: "Mjestimična slaba kiša",
    },
    1183: {
        en: "Light rain",
        sr: "Slaba kiša",
    },
    1186: {
        en: "Moderate rain at times",
        sr: "Povremeno umjerena kiša",
    },
    1189: {
        en: "Moderate rain",
        sr: "Umjerena kiša",
    },
    1192: {
        en: "Heavy rain at times",
        sr: "Povremeno jaka kiša",
    },
    1195: {
        en: "Heavy rain",
        sr: "Jaka kiša",
    },
    1198: {
        en: "Light freezing rain",
        sr: "Slaba ledeća kiša",
    },
    1201: {
        en: "Moderate or heavy freezing rain",
        sr: "Umjerena ili jaka ledeća kiša",
    },
    1204: {
        en: "Light sleet",
        sr: "Slaba susnježica",
    },
    1207: {
        en: "Moderate or heavy sleet",
        sr: "Umjerena ili jaka susnježica",
    },
    1210: {
        en: "Patchy light snow",
        sr: "Mjestimičan slab snijeg",
    },
    1213: {
        en: "Light snow",
        sr: "Slab snijeg",
    },
    1216: {
        en: "Patchy moderate snow",
        sr: "Mjestimičan umjeren snijeg",
    },
    1219: {
        en: "Moderate snow",
        sr: "Umjeren snijeg",
    },
    1222: {
        en: "Patchy heavy snow",
        sr: "Mjestimičan jak snijeg",
    },
    1225: {
        en: "Heavy snow",
        sr: "Jak snijeg",
    },
    1237: {
        en: "Ice pellets",
        sr: "Ledene kuglice",
    },
    1240: {
        en: "Light rain shower",
        sr: "Slab kišni pljusak",
    },
    1243: {
        en: "Moderate or heavy rain shower",
        sr: "Umjeren ili jak kišni pljusak",
    },
    1246: {
        en: "Torrential rain shower",
        sr: "Obilan kišni pljusak",
    },
    1249: {
        en: "Light sleet showers",
        sr: "Slab pljusak susnježice",
    },
    1252: {
        en: "Moderate or heavy sleet showers",
        sr: "Umjeren ili jak pljusak susnježice",
    },
    1255: {
        en: "Light snow showers",
        sr: "Slab pljusak snijega",
    },
    1258: {
        en: "Moderate or heavy snow showers",
        sr: "Umjeren ili jak pljusak snijega",
    },
    1261: {
        en: "Light showers of ice pellets",
        sr: "Slab pljusak ledenih kuglica",
    },
    1264: {
        en: "Moderate or heavy showers of ice pellets",
        sr: "Umjeren ili jak pljusak ledenih kuglica",
    },
    1273: {
        en: "Patchy light rain with thunder",
        sr: "Mjestimična slaba kiša s grmljavinom",
    },
    1276: {
        en: "Moderate or heavy rain with thunder",
        sr: "Umjerena ili jaka kiša s grmljavinom",
    },
    1279: {
        en: "Patchy light snow with thunder",
        sr: "Mjestimičan slab snijeg s grmljavinom",
    },
    1282: {
        en: "Moderate or heavy snow with thunder",
        sr: "Umjeren ili jak snijeg s grmljavinom",
    }
};

export function translateWeatherCondition(code) {
    if (weatherConditions[code] === undefined) {
        return "";
    } else {
        return weatherConditions[code].sr;
    }
}