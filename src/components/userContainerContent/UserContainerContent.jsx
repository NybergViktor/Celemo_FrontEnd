import './UserContainerContent.css';

const UserContainerContent = ({btnTitle}) => {
    return (
        <div className='userContainerContentMain'>
            <div className='containerItem'>
                <div className='dynamicItem'>
                    <p>asd</p>
                </div>
                <div>
                    <button className='dynamicItemBtn'>{btnTitle}</button>
                </div>
                
            </div>
        </div>
    )
}

export default UserContainerContent;