
const PubProfileComp = () => {

    return (
        <div>
            <h1>Pub Profile</h1>
            <div className="Userinfo">
                {userData.map((user) => (
                    <div key={user.id}>
                        <h2>{user.username}</h2>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>
                        <p>{user.address}</p>
                        <p>{user.postal}</p>
                        <p>{user.city}</p>
                        <p>{user.country}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PubProfileComp;