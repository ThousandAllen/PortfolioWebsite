import Halloween from './halloween/Halloween'
import UnrealProjects from './unrealprojects/UnrealProjects'
import './popupproject.scss'

export default function PopUpProject({link}) {
    return (
        <div className="popupproject">
            {
                {
                    "Halloween": <Halloween/>,
                    "UnrealProjects": <UnrealProjects/>,
                }[link] 
            }

        </div>
    )
}
