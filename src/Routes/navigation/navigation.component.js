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
                    <Link className='nav-link upper-case' to='/que'>
                        Glory
                    </Link>
                </div>


                  <div className='nav-links-container'>
                      {currentUser ? (
                          <Link className='nav-link upper-case' onClick={signOutUser}>Sign out</Link>
                          ) : ( <Link className='sign-in upper-case' to='/auth'>
                          Sign In
                      </Link>
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