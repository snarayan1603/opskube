import React from 'react'
import History from './History';
import Insert from './Insert';
import PersonalDetails from './PersonalDetails';
import Update from './Update';
// import CartScreen from "../cart/CartScreen"
// import OrderHistory from "../orders/OrderHistory"

export default function MainContent(props) {
    let showContent = props.showContent;

    return (
        <div>
            {showContent === "personal details"
                ? <PersonalDetails />
                : showContent === "history"
                    ? <History showNavBar={false} />
                    : showContent === "create"
                        ? <Insert />
                        : showContent === "update" ?
                            < Update from="accounts" showNavBar={false} />
                            : <div></div>
            }

        </div>
    )
}
