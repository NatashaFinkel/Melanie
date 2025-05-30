import DisclaimerElement from '../components/DisclaimerElement';
import disclaimerProsData from '../json/disclaimer-pros-data.json';
import disclaimerConsData from '../json/disclaimer-cons-data.json';

function DisclaimerPage() {
    return (
        <main>
            <section className="center-display">
                <div className="center-display disclaimer-page">
                    <h2 className='disclaimer-h3'>Je peux t'apporter quelque chose si...</h2>
                    <DisclaimerElement jsonFile={disclaimerProsData} prop1="pro"
                        prop2="pro2"
                        className="disclaimerProDiv" />
                    <h2 className="disclaimer-h3">Je ne peux pas être utile si...</h2>
                    <DisclaimerElement jsonFile={disclaimerConsData} prop1="con"
                        className="disclaimerConDiv" />
                    <div className="disclaimer-page-recap">
                        <p>À ce titre, un ou une tarologue est là pour t'aider, grâce au langage des cartes, à traduire les messages que t'envoie ton subconscient.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default DisclaimerPage;