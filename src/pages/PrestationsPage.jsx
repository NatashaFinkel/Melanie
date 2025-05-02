import Card from "../components/Card";
import cardData from "../json/card-data.json";

function PrestationsPage() {
    return (
        <main>
            <section className="center-display">
                <div className="center-display main-content">
                    <h2>Tout mon savoir-faire, à votre service !</h2>
                    <p>
                        Toujours avec bienveillance, beaucoup d'écoute, dans le désir d'être
                        utile, voire réconfortante... sans oublier dans certains cas un
                        soupçon d'humour, car le rire, la légèreté sont autant de facteurs
                        de dédramatisation, voire de guérison.
                    </p>
                </div>
            </section>
            <section>
                {/* TODO: ajouter footer */}
                {/* TODO: faire le README */}
                <Card cards={cardData} />
            </section>
            <section>
                <div className="prestation-details-div">
                    <p className="styled-p">
                        Deux formats possibles pour les consultations :
                    </p>
                    <ul>
                        <li>
                            Tarification à la minute : permet d’adapter la séance en fonction
                            de vos besoins et de vos disponibilités, sans subir la contrainte
                            de temps.<br></br>
                            Par exemple, 55 minutes faites valent 55 euros.
                        </li>
                        <li>
                            Consultation à durée prédéfinie : cliquez sur les cartes ci-dessus
                            !
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    );
}

export default PrestationsPage;
