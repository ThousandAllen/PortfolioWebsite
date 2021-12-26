import "./topbar.scss"
import {useState} from "react";


export default function TopBar() {
    const [menuOpen] = 1;

    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="top">
                <div className="left">
                    <a href="#About">
                        <div className="imgContainer">
                            <img src="assets/TopBar/ProfilePicture.jpg"
                                alt="" />
                        </div>
                        <div className="name">Allen Reed</div>
                    </a>
                </div>   
            </div>  

            <div className="bottom">
                Bottom
            </div>           
        </div>
    )
}
