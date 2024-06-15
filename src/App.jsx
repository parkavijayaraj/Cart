import React, { useState } from 'react'
import NaveBar from './Components/NaveBar'
import Header from './Components/Header'
import Fooder from './Components/Fooder'
import Cart from './Components/Cart'

function App() {
  let data=[{
    image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    item:"Fancy Product",
    price:"$40.00 - $80.00"
  },
  {
    image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    item:"Special Item",
    price:"   $20.00 $18.00"
  },
  {
    image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    item:"Sale Item",
    price:"$50.00 $25.00"
  },
  {
    image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    item:"Sale Item",
    price:"   $40.00"
  },
  {
    image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    item:"Fancy Product",
    price:"   $40.00"
  },
  {
    image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    item:"Special Item",
    price:"$50.00 $25.00"
  },
  {
    image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    item:"Sale Item",
    price:"   $40.00"
  },
  {
    image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    item:"Popular Item",
    price:"$50.00 $25.00"
  }]
let [cart,setcart]=useState(0);

  return <>
  <NaveBar Cart={cart} />
   { <Header /> } 
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {
    data.map((e,i)=>{
      return <Cart data={e} key={i}  cart={cart} setcart={setcart}/>})
                }
                </div>
            </div>
        </section>
      { <Fooder /> }
  </>
}

export default App