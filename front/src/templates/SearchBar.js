import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function SearchBar(props) {

    const [search, setSearch] = React.useState("")

    const navigate = useNavigate();    

    function submitHandler(e) {
        e.preventDefault();            
        navigate(`/products?search=${search}`)

        if (props.close) props.close()
    }

    function submitForm() {        
        navigate(`/products?search=${search}`)

        if (props.close) props.close()
    }

    return (

        <form onSubmit={submitHandler} id="searchForm">
            <div className={props.mobile ? "row1 searchboxMobile" : 'row1 searchBox'}>
                <input className='input' placeholder='Search...' value={search} onChange={(e) => setSearch(e.target.value)} style={{ width: "100%" }} ></input>
                <img src='https://drive.google.com/uc?export=view&id=1XunRvgr3iHscNOFuCqODzFMVc7x6uZWl' alt="search" style={{ width: "2rem" }} onClick={() => submitForm()}></img>
            </div>
        </form >

    )
}
