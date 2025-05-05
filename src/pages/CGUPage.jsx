import React from "react";
import cguData from "../json/cgu.json";

function CGUPage() {
    return (
        <main>
            <section className="center-display main-content CGU-page">
                <h2>Conditions générales d'utilisation du site</h2>
                <div>
                    {cguData.map((item, index) => (
                        <div key={index} className="cgu-section">
                            {item.title && <h3>{item.title}</h3>}
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

export default CGUPage;
