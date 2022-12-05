import './charity-elements-styles.scss';

const CharityElementsComponent = ({charityElements}) => {
    const {title, info, imageURL, logoURL, URL} = charityElements;

    return (
        <div className="category-container">
            <div className='background-image' style={{
                backgroundImage: `url(${imageURL})`
            }}/>
            <div className="category-body-container">
                <h2>{title}</h2>
                <a href={URL} className='phone-media-href'>
                <div className='entrance-logo'>
                        <p className='phone-media-href'>{info}</p>
                    <a href={URL} className='logo-image' style={{
                        backgroundImage: `url(${logoURL})`
                    }}></a>
                </div>
                </a>
            </div>
        </div>
    )
}

export default CharityElementsComponent;