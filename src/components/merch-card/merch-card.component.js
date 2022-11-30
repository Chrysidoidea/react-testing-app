import './merch.styles.scss'
import Button from "../button/button.component";

const MerchCard = ({merch}) => {
    const {id, name, price} = merch;

    return (
        <div className="merch-card-container">
            <a href={process.env.PUBLIC_URL + `/merch/specimen_${id}.jpg`}>
                    <img src={process.env.PUBLIC_URL + `/merch/specimen_${id}.jpg`}
                         alt={`${name} — ${id}`}
                         width={400}
                         height={270}
                    />
            </a>

                    <div className='footer'>
                        <span className='name'>{name}</span>
                        <span className='price'>{`${price}$`}</span>
                    </div>
            <Button >Add to card</Button>
                </div>
    );


}

export default MerchCard;
