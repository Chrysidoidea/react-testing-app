import {Outlet, Link} from "react-router-dom";
import { Fragment} from "react";
import './navigation.styles.scss';

import { ReactComponent as TreeLogo} from "../../assets/Logo.svg";

const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation-logo'>

                <Link className='logo-container' to='/'>
                <TreeLogo className='logo'/>
                </Link>
<div className='navigation-elements'>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/que'>
                        Glory
                    </Link>
                </div>

                <div className='nav-links-container'>
                    <Link className='sign-in' to='/auth'>
                        Sign In
                    </Link>
                </div>
</div>
            </div>

            <Outlet/>
        </Fragment>
    )
};

export default Navigation;