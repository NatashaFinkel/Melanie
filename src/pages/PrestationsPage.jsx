import { useState, useEffect, Suspense, lazy, memo } from "react";
import { loadJSON } from "../utils/jsonLoader";
import GenerateParagrahTxtContent from "../components/GenerateParagrahTxtContent";

// Lazy loading des composants
const Card = lazy(() => import("../components/Card"));

const PrestationsPage = memo(() => {
  const [cardData, setCardData] = useState([]);
  const [prestationsList, setPrestationsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Chargement asynchrone des données JSON avec cache
    const loadData = async () => {
      try {
        const [cardDataModule, prestationsListModule] = await Promise.all([
          loadJSON("card-data.json"),
          loadJSON("prestations-list.json"),
        ]);

        if (cardDataModule) setCardData(cardDataModule);
        if (prestationsListModule) setPrestationsList(prestationsListModule);
      } catch (error) {
        console.error("Erreur lors du chargement des données:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const staticText = {
    txt: "Toujours avec bienveillance, beaucoup d'écoute, dans le désir d'être utile, voire réconfortante... sans oublier dans certains cas un soupçon d'humour, car le rire, la légèreté sont autant de facteurs de dédramatisation, voire de guérison.",
  };

  if (loading) {
    return (
      <main>
        <div>Chargement...</div>
      </main>
    );
  }

  return (
    <main>
      <section className="center-display">
        <div className="center-display main-content">
          <h2>Tout mon savoir-faire, à votre service !</h2>
          <GenerateParagrahTxtContent
            page="disclaimerPage"
            jsonFile={[staticText].map((item) => ({
              paragraph: <>{item.txt}</>,
            }))}
            textType="p"
            textProp="paragraph"
          />
        </div>
      </section>
      <section className="full-page-section">
        <Suspense fallback={<div>Chargement des cartes...</div>}>
          <Card cards={cardData} />
        </Suspense>
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
});

PrestationsPage.displayName = "PrestationsPage";

export default PrestationsPage;
