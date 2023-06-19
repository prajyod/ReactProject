import { useSelector } from "react-redux";



const Cart = () => {
    const {cart} = useSelector((store) => store.cart);
    console.log(cart);
    return (
        <div>
            <ul>
                {cart.items.map((element) => <li key={element}>{element}</li>)}
            </ul>
        </div>
    );
};

export default Cart;