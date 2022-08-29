import UnrealProjects from './unrealprojects/UnrealProjects'
import Ihmc from './ihmc/Ihmc'
import Avt from './avt/Avt'
import './popupproject.scss'

export default function PopUpExperience({link}) {
    return (
        <div>
            <div className="popupproject">
            
                    <div>
                        {
                            {
                                "IHMC": <Ihmc/>,
                                "AVT": <Avt/>,
                            }[link] 
                        }
                    </div>
            </div>
        </div>
    )
}
