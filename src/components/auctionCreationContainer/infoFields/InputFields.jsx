import "../infoFields/InputFields.css"



const InputFields = () => {
  return (
    <>
    <div className="title-text-bottom">
      <label className="lable">
        <input className="title-input" type="text" placeholder="Title" />
      </label>
    </div>
    <div className="description-bottom">
    <label className="lable">
        <input type="text" placeholder="description"/>
    </label>
    </div>

    </>
  );
};

export default InputFields;
