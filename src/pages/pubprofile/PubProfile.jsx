import ".profilePage.css";
import { UserContext } from "../../components/context/UserContext";
import { useParams, useEffect, useContext } from "react-router-dom";
import PubProfileComp from "../../components/pubprofilecomp/PubProfileComp";

const PubProfile = () => {
    const  {getUserFromId, userData} = useContext(UserContext);

    const {userId} = useParams();

    console.log(userId);

    useEffect(() => {
        getUserFromId(userId);
    }, [userId]);


    return (
        <>
        <div> test </div>
        </>
    );
}

export default PubProfile;