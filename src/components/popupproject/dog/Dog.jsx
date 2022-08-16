import { AspectRatio } from '@material-ui/icons'
import React from 'react'
import "../popup1.scss"

export default function Dog() {
    return (
       
        <div className="popup1">
            <div className="title">
                <h1>Dog project</h1>
                
            </div>

            <div className="line">
                <span > </span>
            </div>

            <div className="sectionwrapper">
                
                <div className="text">
                    <p>
                        I am currently working on creating my golden retriever in Unreal Engine 4.
                        Using Blender, I sculpted, re-topologized, UV mapped, textured, rigged (using rigify), and animated the dog.
                        I then brought the fbx file of the dog to Unreal Engine, however there are many problems bringing files from Blender to UE4.
                        There are issues with:
                        <ul>
                            <li>Axis of bones in rig is different for Blender/UE4- To fix, you must bake the animations onto the mesh and then back onto a UE4 compatible version of the rig (there are scripts that can create this rig automatically), and export that rig.</li>
                            <li>Doesn't export all animations- To fix, must make sure all NLA strips are active to export (same script as above can help ensure this).</li>
                            <li>Lots of problems hair related- Some are fixable, some aren't.</li>
                            <li>Many more minor problems that most were more easily fixable, such as issues with scaling, incorrect animation times, and other general export/import problems.</li>
                        </ul>
                    </p>
                </div>
                <div className="imgContainer">
                    <img src="assets/Projects/UE4/Dog_Rig.png" alt="" style ={{aspectRatio:2}}/>
                </div>
                
            </div>
            <div className="line">
                <span > </span>
            </div>
            
            <div className="sectionwrapper">
                <div className="imgContainer">
                    <img src="assets/Projects/UE4/DogWithHair.png" alt="" />
                </div>
                
                <div className="text">
                    <p>
                        The above photo is the dog in Unreal Engine 4. 
                        The dog's fur is in progress still, however the dog in the photo has the best version of the fur that I have created.
                        In this version, I used hair cards using the photo realistic human's hair material (with new textures and modified blueprints to fit the characteristics of dog fur).
                        There were many issues with making the hair cards.
                        Creating hair card textures were very tedious, and not well documented on how to create it well in Blender.
                        Blender also had an issue with painting colors from an image onto a mesh as vertex colors, which is typically how Unreal Engine hair materials give a base color to the overall hair card system.
                        Due to this problem, I used a second UV map/texture instead of using vertex colors to control the overall base color of the hair.
                    </p>
                    <p>
                        I originally was going to use the new UE4 groom system to render the individual strands of hair (instead of using hair cards).
                        I ended up not being able to do this, because Blender can't export advanced hair settings (such as groom_root_uv) to Unreal Engine.
                        I may try to fix this issue; however, if I am able to export the other settings it will take me a long time. 
                        Blender is missing a lot of code to make this possible (hundreds or possibly thousands of lines of code).
                        I know this because I have looked into the source code for Blender, source code for alembic files (this is the file type hair gets exported as), code for how Maya/Houdini export alembic files and the custom hair properties, and viewing the contents of exported alembic files from Blender and Maya.
                        There is possibly some ways to bypass what Blender doesn't support, and I will look into this soon, but this is not a priority (especially since these properties can be exported if Houdini or Maya is purchased and used instead of Blender (which is free)).
                    </p>
                    <p>
                        The eyes were created using the photorealistic character's eye material, with the model recreated, textures recreated, and parts of the blueprint rewritten to better match a dog's eye.
                        Before this project is done, I will need to fix the hair cards, update the hair card texture, fix the mouth/teeth, create audio, create more animations, and create the animation and character blueprints. 
                    </p>
                </div>

                <div className="line">
                <span > </span>
                </div>
                
            </div>
        </div>
    )
}
