import "../infoFields/InputFields.css";

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
          <textarea
            className="textarea"
            name="myTextarea"
            placeholder="description"
            cols="15"
            rows="8"
            // minlength="10"
            // maxlength="500"
            required
          ></textarea>
        </label>
        <div className="bid-bottom">
          <label className="lable">
            <input
              className="bid-input"
              type="text"
              placeholder="Starting Bid"
            />
          </label>
          <select className="end-time" id="endtime">
            <option value="endtime" required hidden>
              End Time
            </option>
          </select>
        </div>
      </div>
    </>
  );
};

export default InputFields;
