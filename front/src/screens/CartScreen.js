import React, { useState } from 'react'
import axios from 'axios';
import ShippingAddress from '../templates/ShippingAddress';
// import { generateToken } from "../../shippingApis/fedex/token"
// import { productAndRating } from "../../shippingApis/fedex/productAndRating"

export default function CartScreen(props) {

    const [vars, setVars] = useState({ promo: "", shippingAddress: {}, isCheckout: false })
    const [cartItems, setCartItems] = React.useState([])

    React.useEffect(() => {

        const tempItems = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []
        setCartItems(tempItems)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    function removeCartItem() {

    }

    let cart = {}
    if (cartItems && cartItems[0]) {
        cart.subtotal = 0;
        for (let i = 0; i < cartItems.length; i++) {
            console.log(cartItems[i])
            cart.subtotal += parseInt(cartItems[i].price)

        }
    }

    return (
        <div>

            <p className='cartHeading'>Shopping Bag</p>
            <div className='row1 center' style={{ fontSize: "small" }}>
                <div className={props.from === 'accounts' ? 'cart row top' : 'cart row top center'} style={{ width: "90%", alignItems: "flex-start" }}>
                    <div className='col-3' style={{ border: "1px solid black" }}>
                        {cartItems.map((x, i) => (
                            <div key={i} className="mainDiv">
                                <div>
                                    <img src={x.bookLink} alt="" className='img'></img>
                                </div>

                                <div className='detailsDiv'>
                                    <p className='name'><strong>{x.name}</strong></p>
                                    <p className='details'>Price: {x.price}</p>
                                    <p className='details'>Description: <br />{x.bookDesc}</p>


                                    <div className='row1' style={{ marginTop: "1rem" }}>
                                        <p className='remove' onClick={() => removeCartItem(x.Product_Code)}>Remove</p>
                                    </div>

                                    {/* <p>Shipped by : {x.shipping_name}</p> */}

                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='cartSummary col-1' style={props.from === 'accounts' ? { border: "1px solid black", marginLeft: "0", marginTop: "1rem" } : { border: "1px solid black" }}>

                        <ul> <>
                            <strong className='heading'>Cart Total</strong>
                            <div style={{ marginBottom: "1rem", marginTop: "1rem" }}>
                                <hr />
                            </div>

                            <li className='row1'>
                                <p><strong>Items Total</strong></p>
                                <p><strong>{cart.subtotal}</strong></p>
                            </li>


                            <div style={{ marginBottom: "1rem", marginTop: "1rem" }}>
                                <hr />
                            </div>

                            <li>
                                <ShippingAddress shippingAddress={cart.shippingAddress} update={true} />
                            </li>
                        </>



                            <li>
                                {!vars.isCheckout
                                    ? <button className='addToBag' >PROCEED TO CHECKOUT</button>
                                    : <button className='addToBag' >PAY NOW</button>
                                }
                                <div style={{ marginTop: "10px" }}>
                                    {vars.cartTotalPriceErr && <p severity="error">{vars.cartTotalPriceErr}</p>}
                                    {vars.addressError && <p severity="error">{vars.addressError}</p>}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

