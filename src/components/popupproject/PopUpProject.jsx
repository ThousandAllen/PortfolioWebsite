import Halloween from './halloween/Halloween'
import UnrealProjects from './unrealprojects/UnrealProjects'
import Dog from './dog/Dog'
import Website from './website/Website'
import './popupproject.scss'

export default function PopUpProject({link}) {
    return (
        <div className="popupproject">
            {
                {
                    "Halloween": <Halloween/>,
                    "UnrealProjects": <UnrealProjects/>,
                    "DogAsset": <Dog/>,
                    "Website": <Website/>,
                }[link] 
            }

        </div>
    )
}
