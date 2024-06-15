import React, { useState } from 'react'

function Cart({data,cart,setcart}) {
    console.log(data);
    let[value,setvalue]=useState(true);
  return <>
   <div className="col mb-5">
                        <div className="card h-100">
                       
                            <img className="card-img-top" src={data.image} alt="..."/>
                       
                            <div className="card-body p-4">
                                <div className="text-center">
                            
                                    <h5 className="fw-bolder">{data.item}</h5>
                               
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                                  
                                    {data.price}
                                </div>
                            </div>
                          
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">{
                                   value? <button className="btn btn-outline-dark mt-auto" href="#" onClick={()=>{ 
                                    setvalue(prev=>!prev)
                                     setcart(cart+1) }}>Add to cart</button>:
                                    <button className="btn btn-danger mt-auto" href="#" onClick={()=>{setvalue(prev=>!prev) 
                                        setcart(cart-1) }}>Remove From cart</button>
                                }
                                    </div>
                            </div>
                        </div>
                    </div>
  </>
}

export default Cart