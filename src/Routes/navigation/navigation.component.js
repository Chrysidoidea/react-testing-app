import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";

import CardIcon from "../../components/cart-icon/card-icon.component";
import CardDropdown from "../../components/card-dropdown/cart-dropdown.component";

import './navigation.styles.scss';

import { ReactComponent as TreeLogo} from "../../assets/Logo.svg";
import { UserContext } from "../../contexts/user.context";

const Navigation = () => {

    const { currentUser } = useContext(UserContext)


    return (
        <Fragment>
            <div className='navigation-logo'>
                <Link className='logo-container' to='/react-testing-app'>
                <TreeLogo className='logo'/>
                </Link>
              <div className='navigation-elements'>

                <div className='nav-links-container'>
                    <Link className='nav-link upper-case' to='/react-testing-app/merch'>
                        Merch
                    </Link>
                </div>


                  <div className='nav-links-container'>
                      {currentUser ? (
                          <div className='nav-user-settings-container'>
                          <Link className='nav-link upper-case' to='/react-testing-app/user-menu'>Settings</Link>
                          <CardIcon/>
                          </div>
                          ) : (
                              <div>
                               <Link className='sign-in upper-case' to='/react-testing-app/auth'>Sign In</Link>
                              </div>
                      )
                  }
                  </div>

                </div>
                <CardDropdown/>
            </div>

            <Outlet/>

        </Fragment>
    )
};

export default Navigation;