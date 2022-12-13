
import { FormControl, InputLabel, MenuItem, Select, SwipeableDrawer, TextField } from "@mui/material";
import React, { useState } from 'react'

export default function ShippingAddress(props) {



    const [shippingAddress, setShippingAddress] = useState({})

    React.useEffect(() => {
        setShippingAddress(props.shippingAddress ? props.shippingAddress
            : localStorage.getItem("shippingAddress") ? JSON.parse(localStorage.getItem("shippingAddress")) : {
                fullname: "",
                dob: "",
                anniversary: "",
                address: "",
                landmark: "",
                city: "",
                state: "",
                pincode: "",
                country: "INDIA",
                contactNo: ""
            })
    }, [shippingAddress, props.shippingAddress])

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    function submitHandler(e) {

        e.preventDefault();
        localStorage.setItem("shippingAddress", JSON.stringify(shippingAddress))

    }    



    return (

        <>

            <div >
                {['right'].map((anchor) => (
                    <React.Fragment key={anchor}>

                        <div className="row center" style={{ justifyContent: "left", marginBottom: "10px", letterSpacing: "1px" }}>
                            <h3 style={{ marginRight: "5px", marginTop: "4px" }}>Shipping Address</h3>

                        </div>
                        {shippingAddress && shippingAddress.fullname &&
                            <div style={{ marginBottom: "11px", letterSpacing: "1px" }}>
                                <p style={{ marginBottom: "4px" }}><strong>Name : </strong>{shippingAddress.fullname}</p>
                                <p style={{ marginBottom: "4px" }}><strong>DOB : </strong>{shippingAddress.dob}</p>
                                <p style={{ marginBottom: "4px" }}><strong>Anniversary : </strong>{shippingAddress.anniversary}</p>
                                <p style={{ marginBottom: "4px" }}><strong>Address : </strong>{shippingAddress.address} {shippingAddress.city && `, ${shippingAddress.city}`} {shippingAddress.state && `, ${shippingAddress.state}`} {shippingAddress.pincode && `-${shippingAddress.pincode}`}</p>
                                <p style={{ marginBottom: "4px" }}><strong>Landmark : </strong>{shippingAddress.landmark} </p>
                                <p style={{ marginBottom: "4px" }}><strong>Country : </strong>{shippingAddress.country}</p>
                                <p><strong>Contact No : </strong>{shippingAddress.contactNo}</p>
                            </div>
                        }


                        <SwipeableDrawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                            onOpen={toggleDrawer(anchor, true)}
                        >

                            <form
                                className="shippingAddressForm"
                                onSubmit={submitHandler}
                            >
                                <h3>Shipping Address</h3>

                                <TextField id="outlined-basic" label="Full Name" variant="outlined" value={shippingAddress.fullname} onChange={(e) => setShippingAddress({ ...shippingAddress, fullname: e.target.value })} sx={{ marginTop: "15px" }} fullWidth size={window.innerWidth > 576 ? "large" : 'small'} />

                                <TextField id="outlined-basic" label="DOB" variant="outlined" value={shippingAddress.dob} onChange={(e) => setShippingAddress({ ...shippingAddress, dob: e.target.value })} sx={{ marginTop: "15px" }} fullWidth size={window.innerWidth > 576 ? "large" : 'small'} />

                                <TextField id="outlined-basic" label="Anniversary" variant="outlined" value={shippingAddress.anniversary} onChange={(e) => setShippingAddress({ ...shippingAddress, anniversary: e.target.value })} sx={{ marginTop: "15px" }} fullWidth size={window.innerWidth > 576 ? "large" : 'small'} />

                                <TextField id="outlined-basic" label="Address" variant="outlined" value={shippingAddress.address} onChange={(e) => setShippingAddress({ ...shippingAddress, address: e.target.value })} sx={{ marginTop: "15px" }} fullWidth size={window.innerWidth > 576 ? "large" : 'small'} />

                                <TextField id="outlined-basic" label="Landmark" variant="outlined" value={shippingAddress.landmark} onChange={(e) => setShippingAddress({ ...shippingAddress, landmark: e.target.value })} sx={{ marginTop: "15px" }} fullWidth size={window.innerWidth > 576 ? "large" : 'small'} />

                                <div className="row1">
                                    <TextField id="outlined-basic" label="City" variant="outlined" value={shippingAddress.city} onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })} sx={{ marginTop: "15px", marginRight: "10px" }} fullWidth size={window.innerWidth > 576 ? "large" : 'small'} />

                                    <TextField id="outlined-basic" label="State" variant="outlined" value={shippingAddress.state} onChange={(e) => setShippingAddress({ ...shippingAddress, state: e.target.value })} sx={{ marginTop: "15px" }} fullWidth size={window.innerWidth > 576 ? "large" : 'small'} />
                                </div>

                                <TextField id="outlined-basic" label="Pincode" variant="outlined" value={shippingAddress.pincode} onChange={(e) => setShippingAddress({ ...shippingAddress, pincode: e.target.value })} sx={{ marginTop: "15px" }} fullWidth size={window.innerWidth > 576 ? "large" : 'small'} />

                                <FormControl fullWidth sx={{ marginTop: "15px" }}>
                                    <InputLabel id="demo-simple-select-label">Country</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Country"
                                        value={shippingAddress.country} onChange={(e) => setShippingAddress({ ...shippingAddress, country: e.target.value })}
                                        size={window.innerWidth > 576 ? "large" : 'small'}
                                    >
                                        <MenuItem value={"INDIA"}>INDIA</MenuItem>
                                    </Select>
                                </FormControl>

                                <TextField id="outlined-basic" label="Contact No" variant="outlined" value={shippingAddress.contactNo} onChange={(e) => setShippingAddress({ ...shippingAddress, contactNo: e.target.value })} sx={{ marginTop: "15px" }} fullWidth size={window.innerWidth > 576 ? "large" : 'small'} />

                                <button className="addToBag" onClick={toggleDrawer(anchor, false)}>Save</button>

                            </form>

                        </SwipeableDrawer>

                        {props.update &&

                            <div onClick={toggleDrawer(anchor, true)}>
                                <p style={shippingAddress.fullname ? { color: "red", letterSpacing: "1px", padding: "10px", cursor: "pointer", border: "1px solid red", textAlign: "center" } : { color: "black", letterSpacing: "1px", padding: "10px", cursor: "pointer", border: "1px solid black", textAlign: "center" }} >Add or change a Shipping Address</p>
                            </div>
                        }

                    </React.Fragment>
                ))}
            </div>

        </ >
    )
}
