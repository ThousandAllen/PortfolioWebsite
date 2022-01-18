import "./topbar.scss"
import {useState} from "react";


export default function TopBar({menuOpen, setMenuOpen}) {

    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="top">
                <div className="left">
                    <a href="#About" className="logo">
                        <div className="imgContainer">
                            <img src="assets/TopBar/ProfilePicture.jpg"
                                alt="" />
                        </div>
                        <div className="name">Allen Reed</div>
                    </a>
                </div>  
                <div className="center">
                    <div className="email">wdwocnj@gmail.com</div>
                    <div className="phone">1-(717)-892-0532</div>    
                </div> 
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>  

            {/*<div className="bottom">
                Bottom
            </div>*/}           
        </div>
    )
}
