import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function History() {

    const userInfo = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : {}

    const [books, setBooks] = React.useState()

    const navigate = useNavigate()

    React.useEffect(() => {
        getAll();
    }, [])

    async function getAll() {

        const userInfo = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : {}

        if (userInfo && userInfo.accountType === "seller") {
            const { data } = await axios.post("/api/book/history", userInfo)
            setBooks(data.data)
        }

        if (userInfo && userInfo.accountType === "cutomer") {
            const { data } = await axios.post("/api/book/purchase", userInfo)
            setBooks(data.data)
        }
    }


    async function getSold() {

        const userInfo = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : {}

        const { data } = await axios.post("/api/book/sold", userInfo)
        setBooks(data.data)
    }

    function showSnackbar(text) {
        var x = document.getElementById("snackbar");
        x.innerText = text
        x.className = "show1";
        setTimeout(function () { x.className = x.className.replace("show1", ""); }, 3000);
    }

    async function Delete(x) {
        const { data } = await axios.post("/api/book/delete", { bookId: x.bookId })
        if (data)
            showSnackbar("Deleted Successfully.")
    }

    async function Update(x) {

        localStorage.setItem("updateItem", JSON.stringify(x))
        navigate("/accounts/update")

    }

    return (
        <div className='row1 center' style={{ flexDirection: "column" }}>

            <div id="snackbar"></div>

            <div className='searchScreenDiv container row top center' style={{ borderBottom: "1px solid grey", paddingBottom: "1rem" }}>
                <h3 className='searchHeading'>History</h3>
            </div>


            <div className='row1 center' style={{ width: "60%", marginTop: "1rem" }}>
                <div className='row1' style={{ width: "60%", marginTop: "1rem" }}>
                    <div onClick={() => getAll()}>All</div>
                    {userInfo && userInfo.accountType === "seller" && <div onClick={() => getSold()}>SOld</div>}
                </div>
            </div>

            <div>
                <div className='row1 center' style={{ flexDirection: "column" }}>

                    {books && books.map((x, i) => (
                        <div key={i} className='row1 center' style={{ alignItems: "flex-start", width: "100%", marginTop: "1rem" }}>
                            <div>
                                <img src={x.bookLink} alt="book img" style={{ width: "20rem" }}></img>
                            </div>
                            <div style={{ marginLeft: "1rem" }}>
                                <p style={{ marginTop: "1rem" }}>{x.name}</p>
                                <p style={{ marginTop: "1rem" }}>PRICE: {x.price}</p>
                                <p style={{ marginTop: "1rem" }}>DESCRIPTION: <br></br>{x.bookDesc}</p>

                                <div className='row1 center'>
                                    <button className='addToBag' onClick={() => Delete(x)} style={{ marginRight: "10px" }}>Delete</button>
                                    <button className='addToBag' onClick={() => Update(x)}>Update</button>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}
