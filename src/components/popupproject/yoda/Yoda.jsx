import { AspectRatio } from '@material-ui/icons'
import React from 'react'
import "../popup1.scss"

export default function Yoda() {
    return (
       
        <div className="popup1">
            <div className="title">
                <h1>Yoda Project</h1>
                
            </div>

            <div className="line">
                <span > </span>
            </div>

            <div className="sectionwrapper">
                
                <div className="text">
                    <p>
                        I am currently creating an animatronic yoda.
                        
                    </p>
                </div>  

                <div className="imgContainer">
                    <img src="assets/Projects/Yoda/YOLOv5.png" alt="" style ={{aspectRatio:2}}/>
                    <figcaption>I first designed it in blender to have a good understanding of the proportions.</figcaption>

                    <img src="assets/Projects/Yoda/YOLOv5.png" alt="" style ={{aspectRatio:2}}/>
                    <figcaption>Next, I created the head using WED clay. </figcaption>

                    <img src="assets/Projects/Yoda/YOLOv5.png" alt="" style ={{aspectRatio:2}}/>
                    <figcaption>After creating the clay head and spraying it with crystal clear, I created a hydrocal mold. 
                                This will be used to create a latex mask.    
                    </figcaption>
                </div>
                          
            </div>


        </div>
    )
}
