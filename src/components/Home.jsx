import React from 'react'
import { toast } from 'react-hot-toast';

const img1 = "https://istyle.hu/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/m/a/macbook_pro_13_in_space_gray_pdp_image_position-2__wwen_7.jpg";

const img2 = "https://img.eobuwie.cloud/eob_product_656w_656h(0/4/6/5/04656537a431686502bd9f12845d5b046ff3557b_0000209032697_03_st.jpg,jpg)/chaussures-adidas-duramo-10-gw8336-core-black-cloud-white-core-black.jpg";

const productlist = [
  {
    name: "Mack Book",
    price : "80,000",
    imgSrc : img1,
    key : "fasfsayfqwdsaufu"
  },
  {
    name: "Black Shoes",
    price : "2,000",
    imgSrc : img2,
    id : "fasfsayfqwdsfdsdtf"
  }
]

const addToCart = (options) =>{
  console.log(options);
  toast.success("Added To Cart");
};

const Home = () => {
  return (
    <div className="home">
    {
      productlist.map(i => (
        <ProductCard key={i.id} name={i.name} imgSrc={i.imgSrc} price={i.price} id={i.id} handler={addToCart} />
      ))
    }
    </div>

  )
}
const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>₹{price}</h4>
    <button onClick={() => handler({name,price,id,quantity:1,imgSrc})}>Add to cart</button>
  </div>
)
export default Home
