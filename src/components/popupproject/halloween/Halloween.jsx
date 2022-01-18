import React from 'react'
import './halloween.scss'
import Youtube from 'react-youtube'

export default function Halloween() {
    return (
        <div className="halloween">
            <div className="title">
                <h1>Halloween Light Show</h1>
                
            </div>

            <div className="line">
                <span > </span>
            </div>

            <div className="sectionwrapper">
                <div className="showvideo">
                    <Youtube videoId="XP6S27cT-gE"/>
                </div>
                <div className="text">
                    <p>
                        I always wanted to make a haunted house, which people in my neightbordhood typically hold in their garage. 
                        My house only has a one-car garage, which made it a challenge to do much inside such a small space, so I decided to take the haunted house outside.
                        I created a 7-minute long light show themed to the show Stranger Things, programmed using arduinos.
                    </p>
                    <p>
                        I used WS2811 programmable LED's for the LED's on the porch, so I could change each individual LED's properties.
                        Originally, the LED's came were placed very close together, which looked very strange on the alphabet wall, so I cut each individual LED and manually added more wire inbetween all of the LED's. 
                        The LED's coming off the porch did not need as much control, so I just used standars christmas lights and hooked them up to a arduino-programmable IoT Power Relay.
                    </p>
                    <p>
                        The lamps were connected to relays, which were of course also programmed by an arduino. 
                        The animation towards the end was created using blender, maya, substance designer, and substance painter. 
                        I created this animation before I truly learned how to animate or sculpt, so I could definitely create a better version of this if I did it again
                        The netflix trailer, animation, and audio were all combined into a single video, which I had a laptop/projector play on loop.
                    </p>
                </div>
                
            </div>
            <div className="line">
                <span > </span>
            </div>
            
            <div className="sectionwrapper">
                <div className="imgContainer">
                    <img src="assets/Projects/Halloween/Demogorgon.gif" alt="" />
                </div>
                
                <div className="text">
                        <p>
                        I also created a working demogorgon costume using a ski helmet, a hockey mask, fishing line, latex, clear putty, latex, food coloring, cloth, masking tape, coat hangers, and zip-ties. 
                        The bottom left piece stopped working, as scene in the video, due to the latex getting hot over the summer, melting over the fishing line, becoming solid again as the weather got colder, and finally breaking the fishing line.
                        The body of the costume was just a morph suit that we purchased online, since it would've been to difficult to store a full body suit with any kind of chemicals/ effects on it. 

                    </p>
                </div>
                
            </div>
            
        </div>
    )
}
