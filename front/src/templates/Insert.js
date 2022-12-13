import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Insert(props) {

    const navigate = useNavigate()

    const [data, setData] = useState({ img: "", name: "", price: "", desc: "" })

    function setImage(e) {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);

        reader.onload = function () {

            setData({ ...data, img: reader.result })
            console.log(reader.result)

        };
        reader.onerror = function (error) {
            ////console.log('Error: ', error);
        };
    }

    function showSnackbar(text) {
        var x = document.getElementById("snackbar");
        x.innerText = text
        x.className = "show1";
        setTimeout(function () { x.className = x.className.replace("show1", ""); }, 3000);
    }

    async function submitHandler() {

        const userInfo = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null
        console.log(userInfo)
        const result = await axios.post("/api/book/insert", { data, userInfo })
        if (result.status === 2000)
            showSnackbar("Inserted Successfully.")

    }

    return (
        <div className='row1 center' style={{ flexDirection: "column" }}>

            <div id="snackbar"></div>

            <div className='searchScreenDiv container row top center' style={{ borderBottom: "1px solid grey", paddingBottom: "1rem" }}>
                <h3 className='searchHeading'>Insert</h3>
            </div>

            <div className='searchScreenDiv container row top'>

                <div className='row1 center' style={{ justifyContent: "space-between" }}>

                    <TextField
                        type="file"
                        margin="normal"
                        fullWidth
                        id="img"
                        label="Book Image"
                        name="img"
                        autoComplete="img"
                        onChange={(e) => setImage(e)}
                        focused
                        sx={{ width: "50%" }}
                    />

                    <div>
                        <img src={data.img} alt="Book Image" style={{ width: "5rem", height: "5rem", marginLeft: "2rem", marginTop: "1rem" }}></img>
                    </div>

                </div>

                <TextField
                    margin="normal"
                    fullWidth
                    id="name"
                    label="Book Name"
                    name="name"
                    autoComplete="name"
                    value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })}
                />

                <TextField
                    margin="normal"
                    fullWidth
                    id="price"
                    label="Book Price"
                    name="price"
                    autoComplete="price"
                    value={data.price} onChange={(e) => setData({ ...data, price: e.target.value })}
                />

                <TextField
                    id="outlined-multiline-flexible"
                    label="Book Description"
                    multiline
                    maxRows={4}
                    minRows={4}
                    fullWidth
                    margin="normal"
                    value={data.desc} onChange={(e) => setData({ ...data, desc: e.target.value })}
                />

                <button className='addToBag' onClick={() => submitHandler()}>Submit</button>

            </div>
        </div>
    )
}
