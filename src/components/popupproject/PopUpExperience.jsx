import UnrealProjects from './unrealprojects/UnrealProjects'
import Ihmc from './ihmc/Ihmc'
import './popupproject.scss'

export default function PopUpProject({link}) {
    return (
        <div>
            <div className="popupproject">
            
                    <div>
                        {
                            {
                                "IHMC": <Ihmc/>,
                                "UnrealProjects": <UnrealProjects/>,
                            }[link] 
                        }
                    </div>
            </div>
        </div>
    )
}
