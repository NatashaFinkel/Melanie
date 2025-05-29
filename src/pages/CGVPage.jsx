import cgvData from "../json/cgv.json";

function CGVPage() {
    return (
        <main>
            <section className="center-display main-content CG-page">
                <h2 className="cgv-main-title">Conditions générales de vente</h2>
                <div>
                    {cgvData.map((item, index) => (
                        <div key={index} className="cg-section">
                            {item.title && <h3 className="cgv-secondary-title">{item.title}</h3>}
                            {item.paragraph && <p>{item.paragraph}</p>}
                            {item.bullets && (
                                <ul>
                                    {item.bullets.map((bullet, i) => (
                                        <li key={i}>{bullet}</li>
                                    ))}
                                </ul>
                            )}
                            {item.emailLink && (
                                <p>
                                    Email :{" "}
                                    <a href={`mailto:${item.emailLink}`}>{item.emailLink}</a>
                                </p>
                            )}
                            {item.phoneNumber && <p>Téléphone : {item.phoneNumber}</p>}
                            {item.effectiveDate && (
                                <p>
                                    <strong>{item.effectiveDate}</strong>
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default CGVPage;
