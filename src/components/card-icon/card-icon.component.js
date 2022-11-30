import { ReactComponent as MerchIcon } from "../../assets/shopping-bag.svg";
import {useContext} from "react";
import {DropdownContext} from "../../contexts/card-dropdown-handler.context";


import './card-icon.styles.scss';

const CardIcon = () => {

        const {setIsActive} = useContext(DropdownContext);
        const changeHandler = () => {
            setIsActive(isActive => !isActive)
        }


    return (
        <div
            className='card-icon-container'
            onClick={changeHandler}
        >
            <MerchIcon className='merch-icon'/>
            <span className='icon-count'>0</span>
        </div>
    )
};

export default CardIcon;