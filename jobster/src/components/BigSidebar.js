import Wrapper from "../assets/wrappers/BigSidebar";
import Logo from "./Logo";
import { useSelector } from 'react-redux';
import { NavbarLinks } from "./NavbarLinks";
import { toggleSidebar } from "../features/user/userSlice";


const BigSidebar = () => {
    const { isSidebarOpen } = useSelector(store => store.user)
    return (
        <Wrapper>
          <div
            className={
              isSidebarOpen
                ? 'sidebar-container '
                : 'sidebar-container show-sidebar'
            }
          >
            <div className='content'>
              <header>
                <Logo />
              </header>
              <NavbarLinks toggleSidebar={toggleSidebar} />
            </div>
          </div>
        </Wrapper>
      );
};

export default BigSidebar;