import "./UserContainer.css";

const UserContainer = ({title}) => {
  return (
    <div className="container">
      <div className="title">
        <p>{title}</p>
      </div>
      <div className="content">
        <p>Exempel rad</p>
        <p>Exempel rad</p>
        <p>Exempel rad</p>
      </div>
    </div>
  );
};

export default UserContainer;
