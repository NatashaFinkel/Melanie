import zodiacSigns from "../json/zodiacSigns.json";

export default function getCurrentZodiacSign() {
    const today = new Date();
    const currentDay = today.getDate();
    const currentMonth = today.getMonth() + 1;

    for (const sign of zodiacSigns) {
        const [startDay, startMonth] = sign.start.split("-").map(Number);
        const [endDay, endMonth] = sign.end.split("-").map(Number);

        if (
            (currentMonth === startMonth && currentDay >= startDay) ||
            (currentMonth === endMonth && currentDay <= endDay) ||
            (currentMonth > startMonth && currentMonth < endMonth) ||
            (startMonth > endMonth &&
                ((currentMonth === startMonth && currentDay >= startDay) ||
                    (currentMonth === endMonth && currentDay <= endDay) ||
                    currentMonth > startMonth ||
                    currentMonth < endMonth))
        ) {
            return {
                zodiacSign: sign.zodiacSign,
                img: sign.zodiacSignImg,
                imgAlt: sign.zodiacSignAlt,
            };
        }
    }
    return null;
}
