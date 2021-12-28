import "./aboutme.scss"

export default function AboutMe() {
    return (
        <div className="aboutme" id="aboutme">
            <h1 className="title">About Me:</h1>
            <p className="Overview">
                Hello, I am a Junior in Computer Engineering at Penn State University Park with a 3.94 (/4.0) GPA. 
                I am an active student at Penn State; being in many major-related and non-major-related extracarricular activities. 
                I love programming software, and I find hardware to be really interesting too! 
                
            </p>
            <div className="Experience">
                <h2 className="title">Experience:</h2>
                <p>
                    During my sophmore year, I worked as a peer tutor. 
                    I helped with Calculus 1, Computer Science 1-2, Physics 1-2, and Computer Engineering: Intro to Digital Systems.
                    <br/>
                    During the summer of 2017, I worked as a busser at a local ice cream shop. 
                    At which I mainly cleaned tables, cleaned dishes, and helped guests with any problems or questions.
                </p>
            </div>
            <div className="Activities">
                <h2 className="title">Activities:</h2>
                <h3>
                    Since Fall 2021, I have been involved in:
                </h3>
                <p>
                    <ul>
                        <li>PSU Humanoid Robotics Club - Creating a life-size humanoid robot and simulating using ROS and Unity</li>
                        <li>PSU Robotics Club - Creating a robot for a tsumo-style robotic competition</li>
                        <li>PSU Game Developement Club - Creating a 2D video game using the Unity Engine</li>
                        <li>PSU IEEE - Electrical Engineering Club - </li>
                        <li>Numerous Social Clubs:
                            <ul>
                                <li>Nittanyville</li>
                                <li>Theme Park Engineering Group</li>
                                <li>French Club</li>
                                <li>Monty Python Society</li>
                                <li>Harry Potter Club</li>
                            </ul>
                        </li>
                    </ul>
                </p>
                <h3>
                    At Penn State Harrisburg, I was mainly invloved in:
                </h3>
                <p>
                    <ul>
                        <li>Penn State Harrisburg Coding Club (2021)</li>
                        <li>Game development marathons:
                            <br/>
                            AI and Games Jam 2021 & Mix and Game Jam 2020
                            </li>
                        
                    </ul>
                </p>
            </div>
        </div>
    )
}
