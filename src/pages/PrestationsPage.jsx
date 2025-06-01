import GenerateParagrahTxtContent from "../components/GenerateParagrahTxtContent";
import prestationsList from "../json/prestations-list.json";
import Card from "../components/Card";
import cardData from "../json/card-data.json";

function PrestationsPage() {
  return (
    <main>
      <section className="center-display">
        <div className="center-display main-content">
          <h2>Tout mon savoir-faire, à votre service !</h2>
          <GenerateParagrahTxtContent
            page="disclaimerPage"
            jsonFile={[
              {
                txt: "Toujours avec bienveillance, beaucoup d'écoute, dans le désir d'être utile, voire réconfortante... sans oublier dans certains cas un soupçon d'humour, car le rire, la légèreté sont autant de facteurs de dédramatisation, voire de guérison.",
              },
            ].map((item) => ({
              paragraph: <>{item.txt}</>,
            }))}
            textType="p"
            textProp="paragraph"
          />
        </div>
      </section>
      <section>
        {/* TODO: optimiser les images */}
        {/* TODO: faire le README */}
        <Card cards={cardData} />
      </section>
      <section>
        <div className="prestation-details-div">
          <p className="styled-p">
            Deux formats possibles pour les consultations :
          </p>
          <ul className="prestation-page-ul">
            <GenerateParagrahTxtContent
              page="prestationsPage"
              jsonFile={prestationsList}
              textType="li"
              textProp="list"
            />
          </ul>
        </div>
      </section>
    </main>
  );
}

export default PrestationsPage;
