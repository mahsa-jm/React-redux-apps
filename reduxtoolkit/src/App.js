import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { calculateTotals } from "./features/cart/cartSlice";
import Modal from "./components/Modal";
import { getCartItems } from "./features/cart/cartSlice";

const App = () => {
    const { cartItems, isLoading } = useSelector((state) => state.cart);
    const { isopen } = useSelector((state) => state.modal)
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(calculateTotals());
    }, [cartItems]);
    
    useEffect(()=> {
        dispatch(getCartItems('random'));
    },[]);

    if(isLoading) {
        return <div className="loading">
            <h1>Loading...</h1>
        </div>
    }

    return <main> 
        { isopen && <Modal />}
        <Navbar/>
        <CartContainer />
    </main>
};

export default App;