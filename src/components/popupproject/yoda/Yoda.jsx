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
                
    

                <div className="imgContainer">
                    <img src="assets/Projects/YodaBlender.jpg" alt="" style ={{aspectRatio:2}}/>
                    <figcaption>I first designed it in blender to have a good understanding of the proportions.</figcaption>

                    <img src="assets/Projects/Yoda/Clay.jpg" alt="" style ={{aspectRatio:2}}/>
                    <figcaption>Next, I created the head using WED clay. </figcaption>

                    <img src="assets/Projects/Yoda/MoldBeingCreated.jpeg" alt="" style ={{aspectRatio:2}}/>
                    <img src="assets/Projects/Yoda/MoldHalf.jpg" alt="" style={{ aspectRatio: 2 }} />
                    <figcaption>After creating the clay head and spraying it with crystal clear, I created a hydrocal mold.
                                This will be used to create a latex mask.    
                    </figcaption>

                    <img src="assets/Projects/Yoda/MoldWithLatexIn.jpeg" alt="" style={{ aspectRatio: 2 }} />
                    <figcaption>Once the mold was created, I pourred latex inside and strapped the two halves of the mold together.
                        I would rotate the mold occasioanlly to make sure the latex got everywhere, so I would have a complete latex cast.
                    </figcaption>

                    <img src="assets/Projects/Yoda/LatexInMold.jpeg" alt="" style={{ aspectRatio: 2 }} />
                    <img src="assets/Projects/Yoda/Latex.jpeg" alt="" style={{ aspectRatio: 2 }} />
                    <figcaption>Once the latex dried, I split open the mold and removed the latex cast of Yoda's head.
                    </figcaption>
                </div>
                          
            </div>


        </div>
    )
}
