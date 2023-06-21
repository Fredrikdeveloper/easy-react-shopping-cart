import React from "react";

export default function Header (props) {
    const {countCartItems} = props
 return(
    <div>
        <header className="row block center">
            <div>
                <a href="#">
                    <h1>Small Shopping Cart</h1>
                </a>
            </div>
            <div>
                <a href="#">Cart{""}
                {countCartItems? (
                    <button className="badge">{countCartItems}</button>
                ) : ("")}
                </a>
                <a href="#">Sign in</a>
            </div>
        </header>
    </div>
 )
}