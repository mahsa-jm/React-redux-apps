import React from "react";
import main from '../assets/images/main.svg';
import Wrapper from "../assets/wrappers/LandingPage";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";

const Landing = () => {
    return (
      <Wrapper>
          <nav>
              <Logo/>
          </nav>
          <div className='container page'>
            {/* info */}
            <div className='info'>
              <h1>
                job <span>tracking</span> app
              </h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Voluptatem rem repudiandae aut veritatis ipsum? Sequi amet ab,
                 vel itaque quidem unde non commodi voluptate quas assumenda cumque
                  delectus aspernatur exercitationem, numquam asperiores voluptatibus accusantium 
                minima minus provident corrupti quo dolorem at error totam. Corrupti, aspernatur sint
                 fugit soluta expedita id!
              </p>
              <Link to='/register' className='btn btn-hero' >Login/Register</Link>
            </div>
            <img src={main} alt='job hunt' className='img main-img' />
          </div>
      </Wrapper>
      );
};

export default Landing;