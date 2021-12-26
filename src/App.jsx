import './app.scss';
import TopBar from './components/topbar/TopBar';
import Menu from './components/menu/Menu';
import AboutMe from './components/aboutme/AboutMe';
import Projects from './components/projects/Projects';
import Resume from './components/resume/Resume'
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Menu />
        <div className="sections">
          <AboutMe/>
          <Projects/> {/*(Personal Projects*)/}
          {/*<Extracarriculars/>*/}
          <Resume/>
          <Contact/>
        </div>

    </div>
  );
}

export default App;
