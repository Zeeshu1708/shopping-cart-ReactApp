import React from 'react'
import { AiFillDelete } from "react-icons/ai";

const img1 = "https://istyle.hu/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/m/a/macbook_pro_13_in_space_gray_pdp_image_position-2__wwen_7.jpg";

const Cart = () => {
  return (
    <div className="cart">
      <main>
      <CartItems imgSrc={img1} name={"Mackbook"} price={"80,000"} qty={1} id={'jyesjydxwe'}/>
      </main>
      <aside>
        <h2>Subtotal: ₹{2000}</h2>
        <h2>Shipping: ₹{200}</h2>
        <h2>Tax: ₹{20}</h2>
        <h2>Total: ₹{2220}</h2>
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
export default Cart

