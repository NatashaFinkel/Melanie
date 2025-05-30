import disclaimerProsData from '../json/disclaimer-pros-data.json';
import disclaimerConsData from '../json/disclaimer-cons-data.json';

function DisclaimerPage() {
    return (
        <main>
            <section className="center-display">
                <div className="center-display disclaimer-page">
                    <h2 className='disclaimer-h3'>Je peux t'apporter quelque chose si...</h2>
                    <div className="disclaimer-container">
                        {disclaimerProsData.map((item) => (
                            <div key={`pro-argument-` + item.id} id={`pro-argument-` + item.id} className="disclaimerDiv disclaimerProDiv">
                                {item.pro && <p>{item.pro}</p>}
                                {item.pro2 && <p>{item.pro2}</p>}
                            </div>
                        ))}
                    </div>
                    <h2 className="disclaimer-h3">Je ne peux pas être utile si...</h2>
                    <div className="disclaimer-container">
                        {disclaimerConsData.map((item) => (
                            <div key={`con-argument-` + item.id} id={`con-argument-` + item.id} className="disclaimerDiv disclaimerConDiv">
                                {item.con && <p>{item.con}</p>}
                            </div>
                        ))}
                    </div>

                    <div className="disclaimer-page-recap">
                        <p>À ce titre, un ou une tarologue est là pour t'aider, grâce au langage des cartes, à traduire les messages que t'envoie ton subconscient.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default DisclaimerPage;