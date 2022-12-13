import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SideBar(props) {

    const [array, setArray] = useState(["Personal Details", "History", "Sign out"])

    const navigate = useNavigate()
    

    React.useEffect(() => {
        const userInfo = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null
        if (userInfo && userInfo.accountType === "seller") {
            setArray(["Personal Details", "History", "Create", "Update", "Sign out"])
        }
    }, [])


    return (
        <div className={props.showFilterSideBar ? "absoluteClass" : ""}>
            {/* {vars.loading && <LoadingBox />} */}
            <div className={props.filterSideBarClass}>
                <div className='mainFilterDiv'>

                    {array.map(x => (
                        <div key={x} className="row1 center">
                            <p className='filterHeading' onClick={() => navigate(`/accounts/${x.toLowerCase()}`)} style={{ padding: "1.2rem", borderBottom: "1px solid grey", background: "#ffffff", width: "90%" }}><strong>{x}</strong></p>
                        </div>
                    ))}

                </div>
            </div >
        </div >
    )
}
