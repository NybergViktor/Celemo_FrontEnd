import "../checkboxRandomPicture/RandomPic.css"

const RandomPic = () => {
  return (
    <div className="random">
      <label className="checkbox-container">
        <input type="checkbox" />
        <span className="checkmark"></span>
        <span className="text">Random Picture</span>
      </label>
    </div>
  );
};

export default RandomPic;
