import "./menu.scss"

export default function Menu({menuOpen, setMenuOpen, currentSlide, setCurrentSlide}) {

    const handleClick = (page)=>{
        setMenuOpen(false);
        setCurrentSlide(page);
    }

    

    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={()=>handleClick(0)}>
                    About Me
                </li>
                <li onClick={()=>handleClick(1)} >
                    Experience
                </li>
                {/*<li onClick={()=>handleClick(2)}>
                    Resume
                </li>
                <li onClick={()=>handleClick(3)}>
                    Contact
                </li>
                <li onClick={()=>handleClick(4)}>
                    Contact
    </li> */}
            </ul>
        </div>
    )
}
