import "./projects.scss"
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import PopUpProject from "../popupproject/PopUpProject";
import { SiReact } from "react-icons/si";

export default function Projects() {
    const PersonalProjects = [
        {
            title: "Halloween Light Show",
            img: "assets/Projects/Halloween/Halloween.jpg",
            descr: "I created a 7-minute long, arduino-controlled, light show for Halloween themed to Stranger Things.",
            link: "Halloween",
        },
        {
            title: "Small Unreal Engine Projects",
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
            title: "Game Development Club Game",
            img: "assets/Projects/Halloween.jpg",
            descr: "IN PROGRESS: I am creating my golden retriever as a fully animated/programmed dog in Blender / Unreal Engine.", 
            link: "DogAsset",
        },
        {
            title: "3D-Printted Humanoid Robot for Humanoid Robotics Club",
            img: "assets/Projects/Halloween.jpg",
            descr: "IN PROGRESS: I am creating my golden retriever as a fully animated/programmed dog in Blender / Unreal Engine.", 
            link: "DogAsset",
        },
        {
            title: "Metal Humanoid Robot for Thon-Bot Club",
            img: "assets/Projects/Halloween.jpg",
            descr: "IN PROGRESS: I am creating my golden retriever as a fully animated/programmed dog in Blender / Unreal Engine.", 
            link: "DogAsset",
        },
    ];


    return (
        <div className="projects" id="projects">
            <div className="wrapper">
                <div className="personal">
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
                </div>
                {/*<div className="clubs">
                    <div className="sectionTitle">
                        <h1>Personal Projects</h1>
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
                                    poppy
                                </Popup>
                            </div>
                        ))}
                    </div>
                </div> */}
            </div>
        </div>
    )
}
