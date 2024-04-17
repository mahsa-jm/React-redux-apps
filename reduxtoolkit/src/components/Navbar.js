import React from "react";
import { cartIcon } from '../icons';
import { useSelector } from "react-redux";


const Navbar = () => {
    const { amount } = useSelector((state) => state.cart)

    return (
        <nav>
            <div className="nav-center">
                <h3>Redux toolkit</h3>
                <div className="nav-container">
                    <cartIcon/>
                    <div className="amount-container">
                        <p className="total-amount">{amount}</p>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;