// Icon Imports
import { TiWarning } from "react-icons/ti";

// Style Imports
import './UnderConstruction.scss'

function UnderConstruction(){
  return(
    <>
    <div className="main">
    <div className="sign">
    <TiWarning />
    </div>
    <div className="message">
    <h2> Under Construction </h2>
    <h3> Please check back soon.</h3>
    </div>
    <div className="sign">
    <TiWarning />
    </div>
    </div>
    </>
  )

}

export default UnderConstruction;