function HomePage() {
    return (
        <main>
            <section className="center-display">
                <div className="center-display">
                    <img
                        src="/images/photo-melanie.png"
                        alt="Mélanie"
                        className="presentation-picture"
                    ></img>
                </div>

                <div className="presentation-txt">
                    <h2>Êtes-vous prêt à transformer votre vie ?</h2>
                    <div>
                        <p>
                            Vous avez entamé une recherche spirituelle, peut-être depuis des
                            années; vous sentez vos dons de perception croître.
                        </p>
                        <p>
                            {" "}
                            Il vous manque cependant des réponses à certains de vos
                            questionnements, ou tout simplement l'aide, ponctuelle ou plus,
                            d'une personne chevronnée ou qui, dans sa simplicité, apportera au
                            moment où vous en avez besoin des éléments susceptibles de
                            compléter votre quête.
                        </p>

                        <p>
                            C'est par cette même loi de synchronicité que vous vous trouvez
                            aujourd'hui sur ce site.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default HomePage;  