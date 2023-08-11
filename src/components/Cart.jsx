import React from 'react'
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';


const Cart = () => {

  const { cartItems,subTotal,shipping,tax,total } = useSelector((state)=>state.cart);

  const dispatch = useDispatch();
  
  const incrementHandler = (id) =>{
    dispatch({type:"addToCart",payload:{ id }});
    dispatch({type:"calculatePrice"});
    // console.log(options);
    // toast.success("Added To Cart");
  };
  const decrementHandler = (id) =>{
    dispatch({type:"decrement",payload:id});
    dispatch({type:"calculatePrice"});
    // console.log(options);
  };
  const deleteHandler = (id) =>{
    dispatch({type:"deletefromcart",payload:id});
    dispatch({type:"calculatePrice"});

    // console.log(options);
    toast.error("Item Removed From Cart");
    };


  return (
    <div className="cart">
      <main>{
        cartItems.length > 0 ?(
          cartItems.map((i)=>(
            <CartItems imgSrc={i.imgSrc} name={i.name} price={i.price} qty={i.quantity} id={i.id} key={i.id} decrement={decrementHandler} increment={incrementHandler} deleteHandler={deleteHandler}/>
          )) 
        ): (
          <h1>No Items Yet</h1>
        )}
      </main>
      <aside>
        <h2>Subtotal: ₹{subTotal}</h2>
        <h2>Shipping: ₹{shipping}</h2>
        <h2>Tax: ₹{tax}</h2>
        <h2>Total: ₹{total}</h2>
      </aside>
    </div>
  )
}

const CartItems = ({imgSrc,name,price,qty,decrement,increment,deleteHandler,id}) => (
  <div className="cartItem">
    <img src={imgSrc} alt={name} />
    <article>
      <h3>{name}</h3>
      <p>{price}</p>
    </article>
    <div>
      <button onClick={()=>decrement(id)}>-</button>
      <p>{qty}</p>
      <button onClick={()=>increment(id)}>+</button>
    </div>
    <AiFillDelete onClick={()=>deleteHandler(id)}/>
  </div>
);
export default Cart;

