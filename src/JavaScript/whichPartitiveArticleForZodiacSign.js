export default function whichPartitiveArticleForZodiacSign(sign) {
    if (sign === "Vierge" || sign === "Balance") {
        return "de la ";
    } else {
        return "du ";
    }
}