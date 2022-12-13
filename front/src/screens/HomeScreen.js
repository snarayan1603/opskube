import axios from 'axios';
import React from 'react'

export default function HomeScreen() {

    const [books, setBooks] = React.useState()

    React.useEffect(() => {
        getAll();
    }, [])

    async function getAll() {
        const { data } = await axios.get("/api/book/all")
        if (data) {
            setBooks(data.data)
        }
    }

    function AddToCart(x) {

        const cartItems = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []

        cartItems.push(x);

        localStorage.setItem("cartItems", JSON.stringify(cartItems))

    }

    return (
        <div className='row1 center' style={{ flexDirection: "column" }}>

            {books && books.map((x, i) => (
                <div key={i} className='row1 center' style={{ alignItems: "flex-start", width: "100%", marginTop: "1rem" }}>
                    <div>
                        <img src={x.bookLink} alt="book img" style={{ width: "20rem" }}></img>
                    </div>
                    <div style={{ marginLeft: "2rem" }}>
                        <p style={{ marginLeft: "1rem" }}>{x.name}</p>
                        <p style={{ marginLeft: "1rem" }}>{x.price}</p>
                        <p style={{ marginLeft: "1rem" }}>{x.bookDesc}</p>

                        <button className='addToBag' onClick={() => AddToCart(x)}>ADD TO CART</button>
                    </div>

                </div>
            ))}
        </div>
    )
}
