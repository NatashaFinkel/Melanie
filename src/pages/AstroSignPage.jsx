import getCurrentZodiacSign from "../JavaScript/getCurrentZodiacSign";
import { getAssetUrl } from "../utils/assetUtils";
import GenerateParagrahTxtContent from "../components/GenerateParagrahTxtContent";
import astroSignPageTxt from "../json/astroSignPage-txt.json";
import whichPartitiveArticleForZodiacSign from "../JavaScript/whichPartitiveArticleForZodiacSign";

function AstroSignPage() {
  const currentZodiacSignData = getCurrentZodiacSign();

  if (!currentZodiacSignData) {
    return (
      <p>Erreur : Impossible de déterminer le signe astrologique actuel.</p>
    );
  }

  const { zodiacSign, img, imgAlt } = currentZodiacSignData;

  return (
    <main>
      <section className="center-display">
        <div className="center-display astroSignPage">
          <h2>Le signe du mois</h2>
          <div className="astroSignPage-main-content">
            <img
              src={getAssetUrl(img)}
              alt={imgAlt}
              className="astroSign-img"
            />
            <div className="astroSignPage-txt-container">
              <GenerateParagrahTxtContent
                page="astroSignPage-prop-1"
                jsonFile={[
                  {
                    txt: "Bonjour, amis des GuidanSes de Mélanie !",
                  },
                ].map((item) => ({
                  paragraph: <>{item.txt}</>,
                }))}
                textType="p"
                className="no-margin"
                textProp="paragraph"
              />
              <GenerateParagrahTxtContent
                page="astroSignPage-prop"
                jsonFile={[
                  {
                    before: "Nous voici maintenant sous le signe ",
                    after: ".",
                  },
                ].map((item) => ({
                  paragraph: (
                    <>
                      {item.before}
                      {whichPartitiveArticleForZodiacSign(zodiacSign)}
                      <span> {zodiacSign}</span>
                      {item.after}
                    </>
                  ),
                }))}
                textType="p"
                textProp="paragraph"
              />
              <GenerateParagrahTxtContent
                page="astroSignPage"
                jsonFile={astroSignPageTxt}
                textType="p"
                textProp="paragraph"
              ></GenerateParagrahTxtContent>
              <GenerateParagrahTxtContent
                page="astroSignPage-prop-2"
                jsonFile={[
                  {
                    before: "JOYEUX ANNIVERSAIRE, MES AMIS ET AMIES ",
                    after: "!! 🎂 👏 🥂🥂🍀 🌺 🌺 👀 👍 💕",
                  },
                ].map((item) => ({
                  paragraph: (
                    <>
                      {item.before}
                      <span> {zodiacSign}</span>
                      {item.after}
                    </>
                  ),
                }))}
                textType="p"
                className="upperCaseTxt"
                textProp="paragraph"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AstroSignPage;
