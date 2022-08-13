import { AspectRatio } from '@material-ui/icons'
import React from 'react'
import "./ihmc.scss"

export default function Ihmc() {
    return (
       
        <div className="ihmc">
            <div className="title">
                <h1>Software Engineering Internship at IHMC</h1>
                
            </div>

            <div className="line">
                <span > </span>
            </div>

            <div className="sectionwrapper">
                
                <div className="text">
                    <p>
                    Over the summer of 2022, I was a Software Engineering Intern at IHMC. 
                    I worked in the Fast Behaviors group, where we had a lot to get done and we had to do everything fast.
                    The main things I did are:
                        <ul>
                            <li>Implemented YOLOv5 in Java</li>
                            <li>Created an optical flow (feature tracking) demo</li>
                            <li>Made an AR View, where you can view point clouds in front of the camera’s video</li>
                            <li>Camera calibration using openCV</li>
                            <li>Manual footstep placement teleoperation in LibGDX</li>
                            <li>Sent ArUco marker poses to the UI over ROS</li>
                            <li>Helped with running the Atlas and Nadia robots</li>
                        </ul>
                    </p>
                </div>
                <div className="imgContainer">
                    <img src="assets/Projects/IHMC/YOLOv5.png" alt="" style ={{aspectRatio:2}}/>
                    <figcaption>YOLOv5 in Java</figcaption>
                </div>
                
            </div>
            <div className="line">
                <span > </span>
            </div>
        
        </div>
    )
}
