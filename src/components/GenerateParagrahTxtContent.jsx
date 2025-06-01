function GenerateParagrahTxtContent({
  page,
  jsonFile,
  textType: TextTag = "p",
  className,
  textProp,
}) {
  return (
    <>
      {jsonFile.map((item, idx) => (
        <TextTag
          key={`${textProp}-${idx}`}
          id={`${page}-${textProp}-${idx}`}
          className={className}
        >
          {item[textProp]}
        </TextTag>
      ))}
    </>
  );
}

export default GenerateParagrahTxtContent;
