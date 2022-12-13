import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import MainContent from '../templates/MainContent';
import SideBar from '../templates/SideBar';


export default function Account() {
    const navigate = useNavigate()
    const params = useParams();
    const id = params.id
    console.log(id)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    let vars = { filterSideBarClass: "filterDiv col-1 desktopAndtablet", showContent: id ? id : "Insert" }

    const userInfo = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null

    React.useEffect(() => {
        const userInfo = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null
        
        if (!userInfo)
            navigate('/sign-in')

        if (id === "sign out") {
            localStorage.getItem("userInfo") && localStorage.removeItem("userInfo")
            window.location.reload()
        }

    }, [navigate, id, vars, userInfo])


    return (
        <div>

            <div className='serachScreen row1'>
                <div className="" style={{ alignItems: "flex-start", justifyContent: "left", flexDirection: "column" }}>
                    <SideBar filterSideBarClass={vars.filterSideBarClass} />
                </div>


                <div className='col-2' style={{ width: "100%" }}>
                    <MainContent showContent={id ? id : vars.showContent} userInfo={userInfo} />
                </div>
            </div>
        </div>
    )
}