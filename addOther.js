const fs      = require('fs')
const path    = require('path')
const savePath = path.join(__dirname, 'data.json')
var data = require('./data.json')

const similarLetters = [
    { eng: "a", alts: "₳АаДдӔӕА̊а̊А̄а̄ӒӓӐӑꙘꙙѦѧӘәa͏ａＡａα𝓐𝓪𝐀🇦𝐚" },
    { eng: "b", alts: "฿БбВвЫыЪъЬь6Ҍҍb͏Ｂｂ𝓑𝓫𝐁𝐛🇧" },
    { eng: "c", alts: "🇨₵Сс(ҪҫС́с́c͏Ｃｃ¢𝓒𝓬𝐂𝐜" },
    { eng: "d", alts: "ĐԂԃ🇩Ԁԁd͏Ｄｄ∂𝓓𝓭𝐃𝐝" },
    { eng: "e", alts: "ɆЕеЁёЗ🇪зЭэЄ̈є̈Е̃е̃Е̄е̄Ё̄ё̄ӖӗЀѐԐԑЄєӠӡe͏Ｅｅ𝓔𝓮𝐄𝐞" },
    { eng: "f", alts: "₣Ғғf͏Ｆｆ𝓕🇫𝓯𝐅𝐟" },
    { eng: "g", alts: "₲Ԍԍg͏Ｇｇ𝓖𝓰𝐆🇬𝐠" },
    { eng: "h", alts: "НⱧнӉӊҢңԨԩӇӈҺһԊԋ🇭h͏Ｈｈ𝓗𝓱𝐇𝐡" },
    { eng: "i", alts: "l1ł|ӀӏЇїІіi͏Ｉｉι𝓘𝓲🇮𝐈𝐢" },
    { eng: "j", alts: "Јјj͏JＪｊנ𝓙𝓳𝐉𝐣🇯" },
    { eng: "k", alts: "КкҚқ₭ҜҝҞҟҠҡk͏Ｋｋ𝓚𝓴𝐊🇰𝐤" },
    { eng: "l", alts: "l͏ＬｌⱠℓ𝓛𝓵𝐋𝐥🇱" },
    { eng: "m", alts: "МмӍӎm͏₥Ｍｍ𝓜𝓶𝐌𝐦🇲" },
    { eng: "n", alts: "ИиЙйЛлП₦пԤԥn͏Ｎｎ𝓝𝓷𝐍𝐧🇳" },
    { eng: "o", alts: "ОоЮюФф0ӪØӫӦӧО̄о̄ꙔꙕѲѳѺѻꙪꙫꙨꙩꚚꚛӨө🇴o͏Ｏｏσ𝓞𝓸𝐎𝐨" },
    { eng: "p", alts: "РрР̌р̌Ҏҏp͏Ｐ₱ｐρ𝓟𝓹𝐏🇵" },
    { eng: "q", alts: "g9q͏Ｑｑ𝓠𝓺𝐐Q𝐪🇶" },
    { eng: "r", alts: "ГгЯяԘԙԆԇԄԅr͏Ｒｒ𝓡𝓻𝐑𝐫Ɽ🇷" },
    { eng: "s", alts: "5ꙄꙅЅѕs͏Ｓｓ𝓢𝓼𝐒𝐬🇸₴" },
    { eng: "t", alts: "ТтҬҭt͏Ｔｔ𝓣𝓽𝐓𝐭₮🇹" },
    { eng: "u", alts: "vЦцꙠꙡu͏Ｕｕυ𝓤𝓾𝐔𝐮🇺Ʉ"},
    { eng: "v", alts: "ѶѷѴѵv͏Ｖｖν𝓥𝓿𝐕𝐯🇻​"},
    { eng: "w", alts: "ШшЩщꚆꚇѠѡԜԝw͏Ｗｗω𝓦𝔀𝐖𝐰🇼​₩" },
    { eng: "x", alts: "ХхҲҳӾӿӼӽx͏Ｘｘχ𝓧𝔁𝐗🇽𝐱" },
    { eng: "y", alts: "УуҮүЧчЦцӮӯӰӱЎўӲӳꚎꚏy͏🇾Ｙｙ𝓨𝔂𝐘𝐲Ɏ" },
    { eng: "z", alts: "2ЗзЖжЗ́ж́z͏Ｚｚ𝓩𝔃𝐙𝐳Ⱬ🇿" }
]

similarLetters.forEach((letter) => {
    const alts = letter.alts.normalize('NFD').replace(/\p{Diacritic}/gu, "").replace(/[\u200B-\u200D\uFEFF\u034F]/g, '');
    [...alts].forEach((alt) => {
        data[alt.toLowerCase()] = letter.eng
    })
})

fs.writeFileSync(savePath, JSON.stringify(data, null, 2))

console.log("Added alternatives")
