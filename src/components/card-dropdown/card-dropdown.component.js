import Button from "../button/button.component";
import { useContext } from "react";
import {DropdownContext} from "../../contexts/card-dropdown-handler.context";


import './card-dropdown.styles.scss';

const CardDropdown = () => {

    const {isActive} = useContext(DropdownContext);
    let toggleClass = isActive ? 'card-dropdown-container active': 'card-dropdown-container';


    return (
        <div className={toggleClass}>
            <div className='card-items'/>
            <Button buttonType='inverted'>Checkout</Button>
        </div>
    )
}

export default CardDropdown;