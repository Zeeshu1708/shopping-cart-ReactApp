import React from 'react'
import { useDispatch } from "react-redux";
import { toast } from 'react-hot-toast';

const img1 = "https://istyle.hu/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/m/a/macbook_pro_13_in_space_gray_pdp_image_position-2__wwen_7.jpg";

const img2 = "https://img.eobuwie.cloud/eob_product_656w_656h(0/4/6/5/04656537a431686502bd9f12845d5b046ff3557b_0000209032697_03_st.jpg,jpg)/chaussures-adidas-duramo-10-gw8336-core-black-cloud-white-core-black.jpg";

const img3 = "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS_bXtLl-ct6BR0l5tG5y7BCDZ_KThaWrKp11lqDw9lpXUyeomFjcyhdCZUITJtUVSV09V1kUCezfLdb6sayHEMoHVRBxPbERg8Fj-kK46kUB5kZLzc4CuiOA"

const img4 = "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRfAcXhHi2x3zi0hvXR7B4gKeJbHpLp7UqBA8pCmHCO2MejT8belOrN8K3mdkUQ8c0YGzmCApRFs4_sLau1BT0zwKxV4qdPgz0zNbggVwX8xjUW7oXs8EyS";

const img5 = "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTxxdef4MwnQWd6zcbTGVxvHGKSWSFffFm2cdrOjW8v0NYvOFFqwdzZ81NFI0wY5gBH3za-_4rRTsRVaCBbWs_mqIVnl9HKN_O5adxVMUNk";

const img6 = "https://img6.gadgetsnow.com/gd/images/products/additional/large/G411450_View_1/accessories/smart-watches/fire-boltt-gladiator-1-96-inch-ips-lcd-display-light-gold-smart-watch.jpg";

const img7 = "https://rukminim2.flixcart.com/image/416/416/kw104nk0/table-clock/s/s/d/digital-led-alarm-clock-mirror-alarm-clock-for-heavy-sleepers-original-imag8ssygxeu3hum.jpeg?q=70";

const img8 = "https://www.reliancedigital.in/medias/boAt-Partypal-208-Travel-Speaker-493072601-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w4MTg0N3xpbWFnZS9qcGVnfGltYWdlcy9oNmMvaDA3Lzk4NjkwMDE0MjQ5MjYuanBnfDAwMzExYTljODgxMzExMGIwMDBlMWE4MGQ5ZWFmNGRlNjgxZjg1OWUwYzJiMTViMjM3ZDRhMWNkNWU5OGM2OGU";

const img9 = "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1675869065/Croma%20Assets/Entertainment/Speakers%20and%20Media%20Players/Images/221147_0_auazrj.png?tr=w-640";

const img10 = "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRjZwcXLULeGgQncs1FTjL8JO6oz82v7lmB1lwHV5lC0pCu-GD4khJkedtklEp5SBO1PQAQT2lzXfPoCE9Pp9UK7DUHVLsSKB_bJGwAP_XuWs0HljQMrZxi";

const img11 = "https://redragon.in/cdn/shop/products/1_bd401b53-49cc-4440-9b65-e4417f7b24a2_1000x.jpg?v=1658320482";

const img12 = "https://shop.zebronics.com/cdn/shop/products/ZEB-AC32FHD-LED_165hz_-pic1.jpg?v=1660628368&width=800";


const Home = () => {

  const productlist = [
    {
      name: "Mack Book",
      price : "80000",
      imgSrc : img1,
      id : "fasfsayfqwdsaufu"
    },
    {
      name: "Black Shoes",
      price : "2000",
      imgSrc : img2,
      id : "fasfsayfqwdfchycdsfd"
    },
    {
      name: "Black Watch",
      price : "800",
      imgSrc : img3,
      id : "fasfsayfqwdfcxashgxsa"
    },
    {
      name: "JBL Tune Earbuds",
      price : "7600",
      imgSrc : img4,
      id : "fasfvxsujyfvyfqwdfcxashgxsa"
    },
    {
      name: "realme 11 Pro 5G",
      price : "23500",
      imgSrc : img5,
      id : "fasfvhgdcexqwdfcxashgxsa"
    },
    {
      name: "Fire-Boltt Smartwatch",
      price : "2909",
      imgSrc : img6,
      id : "fasfvxsujdcsdcxgxsa"
    },
    {
      name: "Digital Alarm Clock",
      price : "7600705",
      imgSrc : img7,
      id : "faxszqdwspknmlcdgxsa"
    },
    {
      name: "boAt Speaker",
      price : "9600",
      imgSrc : img8,
      id : "fasfvxsujyfvnjoioioubu"
    },
    {
      name: "Google Home",
      price : "4999",
      imgSrc : img9,
      id : "fasxcswlojvcdfsbnashgxsa"
    },
    {
      name: "Gaming Mouse",
      price : "329",
      imgSrc : img10,
      id : "fasfvxgviubvcdua"
    },
    {
      name: "Mechanical Keyboard",
      price : "3600",
      imgSrc : img11,
      id : "fasfvxsujyuiydfeyvqga"
    },
    {
      name: "Curved Monitor",
      price : "14600",
      imgSrc : img12,
      id : "faduygtdwexiuutcswvdwexsa"
    },
  ];
  
  const dispatch = useDispatch();
  
  const addToCartHandler = (options) =>{
    dispatch({type:"addToCart",payload:options});
    dispatch({type:"calculatePrice"});
    // console.log(options);
    toast.success("Added To Cart");
  };
  
  return (
    <div className="home">
    {
      productlist.map((i) => (
        <ProductCard key={i.id} name={i.name} imgSrc={i.imgSrc} price={i.price} id={i.id} handler={addToCartHandler} />
      ))
    }
    </div>

  )
}
const ProductCard = ({name, id, price, handler, imgSrc }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>₹{price}</h4>
    <button onClick={() => handler({name,price,id,quantity:1,imgSrc})}>Add to cart</button>
  </div>
)
export default Home
