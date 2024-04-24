import './ProfilePage.css';
import Footer from '../../components/footer/Footer';

const ProfilePage = () => {
    return (
        <>
            {/* temp header */}
            <header className='header'>Header</header> 
            <main className='main'>
                <div className='container'>
                    <div className='profile-picture'></div>
                </div>
            </main>
            <Footer></Footer>
        </>
    )
}

export default ProfilePage;