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
        setCurrentSlide(currentSlide > 0? currentSlide-1: 2)
        :setCurrentSlide(currentSlide< 2? currentSlide+1 : 0)
}

  const [menuOpen,setMenuOpen] = useState(false);

  return (
    <div className="app"> 
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="sections" style ={{transform: `translateX(-${currentSlide*100}vw)`}}>
          {/*Currently: AboutMe=0, Projects=1, Resume=2, Contact=3*/}
          <AboutMe/>
          <Projects/> {/*(Personal Projects)*/}
          {/*<Extracarriculars/>*/}
          <Resume/>
          <Contact/>
        </div>

    </div>
  );
}

export default App;
