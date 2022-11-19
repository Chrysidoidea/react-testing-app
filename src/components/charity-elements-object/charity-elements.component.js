import './charity-elements-styles.scss';




const CharityElementsComponent = ({charityElements}) => {
    const {title, info, imageURL, logoURL, URL} = charityElements;
    // console.log(charityElements)

    return (


        <div className="category-container">
            <div className='background-image' style={{
                backgroundImage: `url(${imageURL})`
            }}/>
            <div className="category-body-container">
                <h2>{title}</h2>
                {/*<p>{info}</p>*/}
                <div className='entrance-logo'>
                    <a href={URL} className='phone-media-href'>
                        <p className='phone-media-href'>{info}</p>
                    </a>
                    <a href={URL} className='logo-image' style={{
                        backgroundImage: `url(${logoURL})`
                    }}></a>
                </div>
            </div>
        </div>
    )
}
export default CharityElementsComponent;