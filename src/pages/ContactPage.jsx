import GenerateParagrahTxtContent from "../components/GenerateParagrahTxtContent";
import contactPageTxt from "../json/contactPage-txt.json";

function ContactPage() {
  return (
    <main>
      <section className="contact-page-main-section">
        <div className="contact-details-div">
          <h2>Contactez-moi !</h2>
          <GenerateParagrahTxtContent
            page="contactPage"
            jsonFile={contactPageTxt}
            textType="p"
            textProp="paragraph"
          />
        </div>
      </section>
    </main>
  );
}

export default ContactPage;
