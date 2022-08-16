import "./projects.scss"
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import PopUpProject from "../popupproject/PopUpProject";
import PopUpExperience from "../popupproject/PopUpExperience"
import { SiReact } from "react-icons/si";

export default function Projects() {

    const MajorExperiences = [
        {
            title: "IHMC",
            img: "assets/Projects/MeAtIHMC.png",
            descr: "During the Summer of 2022, I was a Software Engineering Intern at IHMC's Humanoid Robotics Research Lab.", 
            link: "IHMC",
        },
        {
            title: "Advanced Vehicles Team",
            img: "assets/Projects/Halloween.jpg",
            descr: "IN PROGRESS: For my senior year captstonee project, I joined the Advanced Vehicles Team to help create a self driving car.", 
            link: "AVT",
        },
    ];

    const PersonalProjects = [
        {
            title: "Yoda",
            img: "assets/Projects/YodaBlender.jpg",
            descr: "I am creating a Yoda animatronic.",
            link: "Halloween",
        },
        {
            title: "Halloween Light Show",
            img: "assets/Projects/Halloween/Halloween.jpg",
            descr: "I created a 7-minute long, arduino-controlled, light show for Halloween themed to Stranger Things.",
            link: "Halloween",
        },
        {
            title: "Unreal Engine and Blender Projects",
            img: "assets/Projects/UE4/Forest.png",            
            descr: "To learn Unreal Engine, I have created several small projects to play around with different aspects of the game engine.",
            link: "UnrealProjects",
        },
        {
            title: "This Portfolio Website",
            img: "assets/Projects/React.png",            
            descr: "I created this website using jsx and scss to learn how websites are programmed.",
            link: "Website",
        },
        {
            title: "Dog - Unreal Engine Asset",
            img: "assets/Projects/UE4/DogWithHair.png",
            descr: "IN PROGRESS: I am creating my golden retriever as a fully animated/programmed dog in Blender / Unreal Engine.", 
            link: "DogAsset",
        },
    ];


    
    const ClubProjects = [
        {
            title: "Humanoid Robotics Club (InMoov Robot)",
            img: "assets/Projects/Halloween.jpg",
            descr: "Technical and Outreach Director. I focused on researching URDF files in Solidworks and setting up advertisements (website, instagram, flyers) for the club.", 
            link: "DogAsset",
        },
        {
            title: "Metal Humanoid Robot for Thon-Bot Club",
            img: "assets/Projects/THONBot.png",
            descr: "Helped with creating the URDF file of the robot and fixing the Solidworks file.", 
            link: "DogAsset",
        },
        {
            title: "Robotics Club",
            img: "assets/Projects/SumoBot.png",
            descr: "Helped create a robot for the sumo-bot and racing competitions.", 
            link: "DogAsset",
        },
        {
            title: "Game Design Club Game",
            img: "assets/Projects/UnityGame.png",
            descr: "Helped with creating a 2D game in Unity.", 
            link: "DogAsset",
        }
    ];


    return (
        <div className="projects" id="projects">
            <div className="backgroundcolor"></div>
            <div className="wrapper">
                {<div className="wrapSection">
                        <div className="sectionTitle">
                            <h1>Major Experience</h1>
                        </div>
                        <div className="projectCards">
                            {MajorExperiences.map((p) => (
                                <div className="project">
                                    <Popup trigger={
                                    <div className="projectWrapper">
                                        <div className="title">
                                            
                                                <h2>{p.title}</h2>
                                            
                                        </div>
                                        <div className="imgContainer">
                                            <img src={p.img} alt="" />
                                        </div>
                                        <div className="description">
                                            <p>{p.descr}</p>
                                        </div>
                                    </div>
                                    } modal nested>
                                        {close=>(<div className="buttonproject">
                                    <div className="buttonwrapper">
                                        <button className="close" onClick={close}>
                                            &times;
                                        </button>
                                    </div>
                                    
                                    
                                    <PopUpExperience link={p.link}/>
                                    </div>)}
                                    </Popup>
                                </div>
                            ))}
                        </div>
                    </div> }
                {<div className="wrapSection">
                    <div className="sectionTitle">
                        <h1>Personal Projects</h1>
                    </div>
                    <div className="projectCards">
                        {PersonalProjects.map((p) => (
                            <div className="project">
                                <Popup trigger={
                                <div className="projectWrapper">
                                    <div className="title">
                                        
                                            <h2>{p.title}</h2>
                                        
                                    </div>
                                    <div className="imgContainer">
                                        <img src={p.img} alt="" />
                                    </div>
                                    <div className="description">
                                        <p>{p.descr}</p>
                                    </div>
                                </div> } modal nested> 
                                    {close=>(<div className="buttonproject">
                                    <div className="buttonwrapper">
                                        <button className="close" onClick={close}>
                                            &times;
                                        </button>
                                    </div>
                                    
                                    
                                    <PopUpProject link={p.link}/>
                                    </div>)}
                                </Popup>
                            </div>
                        ))} 
                    </div>
                </div>}
                {<div className="wrapSection">
                    <div className="sectionTitle">
                        <h1>Club Projects</h1>
                    </div>
                    <div className="projectCards">
                        {ClubProjects.map((p) => (
                            <div className="project">
                                <Popup trigger={
                                <div className="projectWrapper">
                                    <div className="title">
                                        
                                            <h2>{p.title}</h2>
                                        
                                    </div>
                                    <div className="imgContainer">
                                        <img src={p.img} alt="" />
                                    </div>
                                    <div className="description">
                                        <p>{p.descr}</p>
                                    </div>
                                </div>
                                } modal nested>
                                    {close=>(<div className="buttonproject">
                                    <div className="buttonwrapper">
                                        <button className="close" onClick={close}>
                                            &times;
                                        </button>
                                    </div>
                                    
                                    
                                    <PopUpProject link={p.link}/>
                                    </div>)}
                                </Popup>
                            </div>
                        ))}
                    </div>
                </div> }
            </div>
        </div>
    )
}
