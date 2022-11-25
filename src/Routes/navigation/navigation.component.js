import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";

import './navigation.styles.scss';

import { ReactComponent as TreeLogo} from "../../assets/Logo.svg";
import { UserContext } from "../../contexts/user.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {

    const { currentUser } = useContext(UserContext)


    return (
        <Fragment>
            <div className='navigation-logo'>
                <Link className='logo-container' to='/'>
                <TreeLogo className='logo'/>
                </Link>
              <div className='navigation-elements'>

                <div className='nav-links-container'>
                    <Link className='nav-link upper-case' to='/merch'>
                        Merch
                    </Link>
                </div>


                  <div className='nav-links-container'>
                      {currentUser ? (
                          <div>
                          <Link className='nav-link upper-case' to='/user-menu'>Settings</Link>
                          </div>
                          ) : ( <Link className='sign-in upper-case' to='/auth'>Sign In</Link>
                      )
                  }
                  </div>

                </div>
            </div>

            <Outlet/>

        </Fragment>
    )
};

export default Navigation;