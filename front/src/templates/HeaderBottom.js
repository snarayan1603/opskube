import React from 'react'
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

export default function HeaderBottom() {


    return (
        <div>
            <div className='HeaderBottom'>
                <div className='row1 center'>
                    <div className='headerBottomContainer row1'>
                        <div className='row1 center burgerDiv'>
                        
                            <div className='desktop'><SearchBar> </SearchBar></div>

                        </div>

                        {/* <div>
                            <Link to="/"><img src="https://drive.google.com/uc?export=view&id=16fOXtW378CKG9mAh36atirRaoWI9QnYG" alt="logo" className='logoImg'></img></Link>
                        </div> */}

                        <div className='row1 center'>

                            <Link to="/accounts/personal details"><img src="https://drive.google.com/uc?export=view&id=1HrCXMmVHFJpBF1cOalaFH-w-UGIrkYKB" alt="logo" className='cartImage desktop'></img></Link>

                            <Link to="/accounts/my wishlist"><img src="https://drive.google.com/uc?export=view&id=1GZgcBtQ2tFJiN9IiQrHtEEXMNobO7EkN" alt="logo" className='cartImage desktop'></img></Link>

                            <Link to="/cart">
                                <div className='row1 center'>
                                    <img src="https://drive.google.com/uc?export=view&id=1Ym6flUAdzE_T9e98aMg8zxsNQt4DvKBJ" alt="cart" className='cartImage'></img>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
