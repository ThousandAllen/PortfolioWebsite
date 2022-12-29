import Yoda from './yoda/Yoda'
import Halloween from './halloween/Halloween'
import UnrealProjects from './unrealprojects/UnrealProjects'
import Dog from './dog/Dog'
import Website from './website/Website'
import './popupproject.scss'

export default function PopUpProject({link}) {
    return (
        <div>
            <div className="popupproject">
            
                    <div>
                        {
                            {
                                "Yoda": <Yoda/>,
                                "Halloween": <Halloween/>,
                                "UnrealProjects": <UnrealProjects/>,
                                "DogAsset": <Dog/>,
                                "Website": <Website/>,
                            }[link] 
                        }
                    </div>
            </div>
        </div>
    )
}
