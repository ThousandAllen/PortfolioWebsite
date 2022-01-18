import "./unrealprojects.scss"

export default function UnrealProjects() {
    return (
        <div className="ue4projects">
            <div className="title">
                <h1>Unreal Engine and Blender Projects</h1>
                
            </div>

            <div className="line">
                <span > </span>
            </div>

            <div className="sectionwrapper">
                <div className="imgContainer">
                    <img src="assets/Projects/UE4/Forest.png" alt="" />
                </div>
                <div className="text">
                    <p>
                        To learn Unreal Engine 4 and blender, I created several small projects.
                        Some projects I created for game development marathons, and are complete games.
                        Other projects I created were never intended to be games, as their only purpose was to help me learn how to program in Unreal Engine or learn the basics to art in Unreal Engine. 
                    </p>
                    <p>
                        The photo above is a forest I made, attempting to learn the artistic side of Unreal Engine 4 and 5.
                        The assets were already created, in the free Megascans library. 
                        The purpose of this projects was to learn how to put scenes together, learning how to use lighting, atmosphere effects, post processing to my advantage.
                        There are some other small scenes I created in other projects to learn different aspects of Unreal Engine, such as procedural foliage spawners, terrain using real geographic data (using BlenderGIS), splines, and more.
                    </p>
                </div>   
            </div>
            <div className="line">
                <span > </span>
            </div>
            
            <div className="sectionwrapper">
                <div className="imgContainer">
                    <img src="assets/Projects/UE4/GolfAttack.png" alt="" />
                </div>
                
                <div className="text">
                    <p>
                        I created some projects that were more programming related also.
                        Some projects I focused on AI/behavior trees, some on animation programming (such as getting the characters feet to make proper contact with the ground when walking, turning in place, etc.).
                        There were also some projects where I focused on gameplay mechanics and making complete games.
                    </p>
                    <p>
                        The photo above is from the game <a href="https://thousandallen.itch.io/golf-attack">
                            Golf Attack</a> which I created in 48 hours for the Mix and Game Jam. 
                        This projects obviously doesn't look good and has a lot of problems, since it was my first game jam.
                        The main reason for these game jams were to gain experience in all aspects of making a game.
                    </p>
                    <p>
                        I also created  <a href="https://thousandallen.itch.io/dog-attack">
                            Dog Attack</a>  at another game jam, called the AI and Games Jam. 
                        This game also looks terrible, as this is the result of trying to create a video game on a week that I was busy and not home for most of the week.
                        However, the reason I did it was to make my AI/behavior tree skills better and to be more comfortable working with AI in Unreal Engine.
                        I needed to be more comfortable with AI, because I was also working on another small project where I was trying to learn to write a better method for AI players to find where to walk to, and how to avoid obstacles (such as when in a crowd).
                    </p>
                </div>
                
            </div>
            <div className="line">
                <span > </span>
            </div>
            <div className="sectionwrapper">
                <div className="imgContainer">
                    <img src="assets/Projects/UE4/Lion.png" alt="" />
                </div>
                <div className="imgContainer">
                    <img src="assets/Projects/UE4/Ram.png" alt="" />
                </div>
                
                <div className="text">
                    <p>
                        I also tried to gain experience using blender.
                        I created many sculpts, such as those seen in the photos above, to help me become a better sculpter.
                        I also worked on rigging characters, animating, uv-mapping, texture painting, creating hair (particle and hair card methods), creating assets and LODs, rendering, and much more.
                        I have also done some programming using Blender's python API.
                    </p>
                </div>
            </div>

        </div>
        
    )
}
