import getCurrentZodiacSign from "../JavaScript/getCurrentZodiacSign";

function AstroSignPage() {
    const currentZodiacSignData = getCurrentZodiacSign();

    if (!currentZodiacSignData) {
        return (
            <p>Erreur : Impossible de déterminer le signe astrologique actuel.</p>
        );
    }

    function whichPartitiveArticle(sign) {
        if (sign === "Vierge" || sign === "Balance") {
            return "de la ";
        } else {
            return "du ";
        }
    }

    const { zodiacSign, img, imgAlt } = currentZodiacSignData;

    return (
        <main>
            <section className="center-display">
                <div className="center-display astroSignPage">
                    <h2>Le signe du mois</h2>
                    <div className="astroSignPage-main-content">
                        <img src={img} alt={imgAlt} className="astroSign-img" />
                        <div className="astroSignPage-txt-container">
                            <p>Bonjour, amis des GuidanSes de Mélanie !</p>
                            <p>
                                Nous voici maintenant sous le signe {whichPartitiveArticle(zodiacSign)}<span> {zodiacSign}</span>
                                .
                            </p>
                            <p>
                                C'est votre anniversaire ce mois-ci ? Sachez que vous bénéficiez
                                d'une réduction de 20 % sur les GuidanSes individuelles privées.
                            </p>
                            <p>
                                Attention, c'est une offre à durée limitée : elle est valable
                                uniquement si votre propre signe astrologique est identique à
                                celui de la date de la prestation.
                            </p>
                            <br />
                            <p>
                                JOYEUX ANNIVERSAIRE, MES AMIS/AMIES {zodiacSign} !! 🎂 👏 🥂
                                🥂🍀 🌺 🌺 👀 👍 💕
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default AstroSignPage;