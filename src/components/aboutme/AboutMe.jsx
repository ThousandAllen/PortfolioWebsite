import "./aboutme.scss";
import {SiCplusplus, SiC, SiPython, SiJava, SiXilinx, SiReact, SiSass, SiBlender, SiLinux, SiGithub, SiUnrealengine, SiUnity, SiOpencv, SiDassaultsystemes } from "react-icons/si";
import { FormatAlignCenter } from "@material-ui/icons";

export default function AboutMe({menuOpen, setMenuOpen, currentSlide, setCurrentSlide}) {

    const handleClick = (page)=>{
        setMenuOpen(false);
        setCurrentSlide(page);
    }

    const skills = [
        {
            img: <span className="icon word" >MAT</span>,
            name: "MATLAB",
            desc: "",
        },
        {
            img: <SiJava size={90} className="icon"/>,
            name: "Java",
            desc: "I used Java at IHMC and in CMPSC221, which was a class focused on creating Java GUI related projects.",
        },
        {
            img: <SiCplusplus size={90} className="icon"/>,
            name: "C++",
            desc: "I have become comftorble with c++, using it in Unreal Engine 4, arduino projects, and my first two college CS classes",
        },
        {
            img: <SiC size={90} className="icon"/>,
            name: "C",
            desc: "I used C in the course CMPSC311, where we created a client-side IO program to write/read from a disk and files, with cache and networking support. C was easy for me to pick-up thanks to the similarities between C and C++.",
        },
        {
            img: <SiPython size={90} className="icon"/>,
            name: "Python",
            desc: "I have used python for several smaller projects, such as a website scraper, programming using blender's python API, a divider and multiplier for CMPEN331, and high school assignments.",
        },
        
        {
            img: <SiXilinx size={90} className="icon"/>,
            name: "Vivado- Verilog",
            desc: "Verilog was used in CMPEN331, where we created a Verilog implementation of a pipelined processor with branch prediction and caching.",
        },
        {
            img: <span className="icon word" >AS</span>,
            name: "Assembly",
            desc: "MIPS was the assembly language used in CMPEN331 to explain how processors work, and a couple MIPS assignments were completed.",
        },
        {
            img: <SiReact size={90} className="icon"/>,
            name: "React jsx",
            desc: "I used React jsx to create this website.",
        },
        {
            img: <SiSass size={90} className="icon"/>,
            name: "Sass scss",
            desc: "I used scss to create this website.",
        },

        
    ];

    const Software = [
        {
            img: <SiOpencv size={90} className="icon"/>,
            name: "OpenCV",
            desc: "",
        },
        {
            img: <SiBlender size={90} className="icon"/>,
            name: "Blender",
            desc: "A 3D modeling/sculpting/texturing/animating/etc. program I use to create video game assets. I have also done some light programming using blender's python API.",
        },
        {
            img: <SiUnrealengine size={90} className="icon"/>,
            name: "Unreal Engine",
            desc: "A video game engine I have programmed some small video games in. I have also spent a lot of time witht he art side of the engine too, such as hair/grooms and attempting to create environments.",
        },
        {
            img: <SiUnity size={90} className="icon"/>,
            name: "Unity",
            desc: "Unity is a game engine that the PSU Video Game Development Club uses. I am one of three programmers, creating a small 2-D action-adventure game.",
        },
        
        {
            img: <SiLinux size={90} className="icon"/>,
            name: "Linux",
            desc: "I currently use Linux and Windows and equal amount. I used linux for a couple CS classes, and am creating this website using linux. I am familiar with te gcc compiler and gdb debuger, thanks to CMPSC311.",
        },
        
        {
            img: <SiGithub size={90} className="icon"/>,
            name: "GitHub",
            desc: "Username: ThousandAllen",

        },
        {
            img: <SiDassaultsystemes size={90} className="icon"/>,
            name: "SolidWorks",
            desc: "",
        },
        

    ];

    return (
        <div className="aboutme" id="aboutme">
            <div className="backgroundcolor"></div>
            <div className="wrapper">
                <div className="block">
                    <div className="textwrapper">
                        <h1 className="title">About Me:</h1>
                        <p>
                            Hello, I am a Senior in Computer Engineering at Penn State University Park with a 3.71 (/4.0) GPA. 
                            I am an active student at Penn State; being in many major-related and non-major-related extracarricular activities. 
                            I am very motivated in learning software and have interest mainly in simulation, robotics, perception, and embedded systems. 
                            
                        </p>
                    </div>
                    <div className="imgContainer">
                        <img src="assets/TopBar/ProfilePicture.jpg" alt="" />
                    </div>
                </div>
                
                <div className="pageButton">
                    <div className="textwrapper">
                        <div className = "PageButton" onClick={()=>handleClick(1)} >
                            Click to see Experience and Projects
                        </div>
                    </div>
                </div>
                
               

                <div className="block">
                    <div className="textwrapper">
                        <h1 className="title">Summary:</h1>
                        <p>
                        My passion for Computer Engineering started when I created an arduino-based Halloween light show themed to the Netflix show Stranger Things. 
                        I then became interested in video game developement and participated in some game-jams using Unreal Engine 4 and also helped create a 2D Unity game in the PSU game design club.
                        I then became interested in robotics/simulation in the PSU Robotics Club and PSU Humanoid Robotics Club, which led to me interning at IHMC's Humanoid Robotics Lab working on perception code.
                        For my senior year capstone project, I worked in the PSU AVT's Simulation Department doing MATLAB/Simulink Collision Avoidance using MPC.
                        </p>
                        <p>
                            I am also interested in the Themed Entertainment industry. I have attended IAAPA 2022, the TMU Thrill Design Competition 2022, 
                            and currently participating in the Iowa State Ride Engineering Competition 2023.
                            I have additionally been creating an animatronic Yoda in my free time.
                        </p>
                        <p>
                            Some of my hobbies include bicycling, walking/running, going to theme parks, learning more software, and learning mechanical design (Fusion/Solidworks).
                        </p>
                    </div>
                </div>
                

                <div className="skills">
                    <div className="skillsWrapper">
                        {skills.map((s)=>(
                            <div className="skill">
                                {s.img}
                                <div className="name">
                                    {s.name}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="skillsWrapper">
                        {Software.map((a) => (
                            <div className="skill">
                                 {a.img}
                                 <div className="name">
                                    {a.name}
                                 </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
        </div>
    )
}
