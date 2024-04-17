import Wrapper from "../assets/wrappers/SmallSidebar";
import { FaTimes } from 'react-icons/fa';
import Logo from "./Logo";
import { useSelector, useDispatch } from 'react-redux';
import { toggleSidebar } from "../features/user/userSlice";
import { NavbarLinks } from "./NavbarLinks";



const SmallSidebar = () => {
    const { isSidebarOpen } = useSelector(store => store.user);
    const dispatch = useDispatch();
    

    return ( 
        <Wrapper>
            <div className={isSidebarOpen ? "sidebar-container show-sidebar" : 'sidebar-container'}>
                <div className="content">
                    <button className="close-btn" onClick={() => dispatch(toggleSidebar()) }>
                        <FaTimes />
                    </button>
                    <header>
                        <Logo /> 
                    </header>
                    <NavbarLinks toggleSidebar={toggleSidebar} />
                </div>
            </div>
        </Wrapper>
    )
};

export default SmallSidebar;