import React from 'react'

export default function PersonalDetails(props) {
    const userInfo = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : {}

    return (
        <div className='row1 center' style={{ flexDirection: "column" }}>
            <div className='searchScreenDiv container row top center' style={{ borderBottom: "1px solid grey", paddingBottom: "1rem" }}>
                <h3 className='searchHeading'>Personal Details</h3>
            </div>

            <div className='searchScreenDiv container row top'>
                <ul>
                    <li><strong>First Name :</strong>&nbsp;{userInfo.fname}</li>
                    <li><strong>Last Name :</strong>&nbsp;{userInfo.lname}</li>
                    <li><strong>Email :</strong>&nbsp;{userInfo.email}</li>
                    <li><strong>Mobile :</strong>&nbsp;{userInfo.mobile}</li>
                </ul>
            </div>
        </div>
    )
}
