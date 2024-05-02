import './UserContainerContent.css';

const UserContainerContent = ({btnTitle}) => {
    return (
        <div className='userContainerContentMain'>
            <div className='containerItem'>
                <div className='dynamicItem'>
                    {/** Här ska det skickas in något man hämtar från databasen */}
                    <a href='#'>Foppas Toffla</a> {/** Exempel rad, tas bort sedan */}
                </div>
                <div className='containerItemBtn'>
                    <button className='dynamicItemBtn'>{btnTitle}</button>
                </div>
                
            </div>
        </div>
    )
}

export default UserContainerContent;