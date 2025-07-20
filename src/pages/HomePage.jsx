import GenerateParagrahTxtContent from "../components/GenerateParagrahTxtContent";
import homePageTxt from "../json/homePage-txt.json";

function HomePage() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <main>
      <section className="center-display">
        <div className="center-display">
          <img
            src={`${baseUrl}assets/photo-melanie.png`}
            alt="Mélanie"
            className="presentation-picture"
          ></img>
        </div>
        <div className="presentation-txt">
          <h2>Êtes-vous prêt à transformer votre vie ?</h2>
          <div>
            <GenerateParagrahTxtContent
              page="homePage"
              jsonFile={homePageTxt}
              textType="p"
              textProp="paragraph"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
