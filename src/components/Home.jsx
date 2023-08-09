import React from 'react'

const Home = () => {
  return (
    <div className="home">
      <ProductCard />
    </div>

  )
}
const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={() => handler()}>Add to cart</button>
  </div>
)
export default Home
