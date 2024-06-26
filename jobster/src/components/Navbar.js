import Wrapper from "../assets/wrappers/Navbar";
import Logo from "./Logo";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';
import { useSelector, useDispatch  } from "react-redux";
import { toggleSidebar, clearStore } from "../features/user/userSlice";
import { useState } from "react";

const Navbar = () => {
    const [showLogout, setShowLogout] = useState(false);
    const user = useSelector(store => store.user);
    const dispatch = useDispatch();
    


    return (
        <Wrapper>
          <div className='nav-center'>
            <button
              type='button'
              className='toggle-btn'
              onClick={() => dispatch(toggleSidebar())}
            >
              <FaAlignLeft />
            </button>
            <div>
              <Logo />
              <h3 className='logo-text'>dashboard</h3>
            </div>
            <div className='btn-container'>
              <button
                type='button'
                className='btn'
                onClick={() => setShowLogout(!showLogout)}
              >
                <FaUserCircle />
                {user?.user.name}
                <FaCaretDown />
              </button>
              <div className={ showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
                <button
                  type='button'
                  className='dropdown-btn'
                  onClick={() => {
                    dispatch(clearStore('Logging out...'))
                  }}
                >
                  logout
                </button>
              </div>
            </div>
          </div>
        </Wrapper>
      );
};

export default Navbar;