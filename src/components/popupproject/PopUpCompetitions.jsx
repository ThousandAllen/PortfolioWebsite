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
                                "Iowa State Ride Engineering Competition 2023": <Iowarec/>,
                                "TMU Ride Design Competition 2022 and IAAPA 2022": <Tmuiaapa/>,
                            }[link] 
                        }
                    </div>
            </div>
        </div>
    )
}
