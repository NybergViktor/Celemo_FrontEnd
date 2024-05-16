import "../infoFields/InputFields.css";
import { useContext } from "react";
import { CreateAuctionContext} from "../../context/CreateAuctionContext";



const InputFields = () => {
  const { inputData, handleInputDataChange } = useContext(CreateAuctionContext);


  return (
    <>
      <div className="title-text-bottom">
        <label className="lable">
          <input
            className="title-input"
            type="text"
            name="title"
            placeholder="Title"
            value={inputData.title}
            onChange={handleInputDataChange}
          />
        </label>
      </div>

      <div className="description-bottom">
        <label className="lable">
          <textarea
            className="textarea"
            name="description"
            placeholder="Write description here"
            cols="15"
            rows="8"
            value={inputData.description}
            onChange={handleInputDataChange}
            required
          />
        </label>
        <div className="bid-bottom">
          <label className="lable">
            <input
              className="bid-input"
              type="number"
              name="startingBid"
              placeholder="Starting Bid"
              value={inputData.startingBid}
              onChange={handleInputDataChange}
            />
          </label>
          <label className="end-time" id="endDate">
          <select
            type="number"
            className="endDate"
            name="endDate"
            value={inputData.endDate}
            onChange={handleInputDataChange}
            required
          >
            <option value={7} > Select end date </option>
            <option value={3} > 3 days </option>
            <option value={5} > 5 days </option>
            <option value={7} > 7 days </option>
          </select>
          </label>
        </div>
      </div>
    </>
  );
};



export default InputFields;
