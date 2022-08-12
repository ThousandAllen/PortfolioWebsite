import './app.scss';
import TopBar from "./components/topbar/TopBar";
import Menu from "./components/menu/Menu";
import AboutMe from "./components/aboutme/AboutMe";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";
import {useState} from "react";


function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleClick = (way)=>{
    way==="left"? 
        setCurrentSlide(currentSlide > 0? currentSlide-1: 3)
        :setCurrentSlide(currentSlide< 3? currentSlide+1 : 0)
}

  const [menuOpen,setMenuOpen] = useState(false);

  return (
    <div className="app"> 
      <div className="background">

      </div>

      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className = "wrapmiddle">
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide}/>
          <div className="sections" style={{transform: `translateX(-${currentSlide*100}vw)`}}>
            
              {/*Currently: AboutMe=0, Projects=1, Resume=2, Contact=3*/}
                <div><AboutMe/></div>
                <div><Projects/></div> 
          </div> 
      </div>
    </div>
  );
}

export default App;
