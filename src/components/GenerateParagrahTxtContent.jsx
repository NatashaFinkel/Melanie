function GenerateParagrahTxtContent({ page, jsonFile, textType: TextTag = "p", textProp }) {
    return (
        <div>
            {jsonFile.map((item, idx) => (
                <TextTag key={`${textProp}-${idx}`} id={`${page}-${textProp}-${idx}`}>
                    {item[textProp]}
                </TextTag>
            ))}
        </div>
    );
}

export default GenerateParagrahTxtContent;