function DisclaimerElement({ jsonFile, prop1, prop2, className = "" }) {
    return (
        <div className="disclaimer-container">
            {jsonFile.map((item) => (
                <div
                    key={item.id}
                    id={item.id ? `${className}-argument-${item.id}` : undefined}
                    className={`disclaimerDiv ${className}`}
                >
                    {item[prop1] && <p>{item[prop1]}</p>}
                    {item[prop2] && <p>{item[prop2]}</p>}
                </div>
            ))}
        </div>
    );
}

export default DisclaimerElement;
