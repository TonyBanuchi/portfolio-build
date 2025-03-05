// Style Imports
import UnderConstruction from '../under-construction/UnderConstruction'
import './DropGame.scss'

function DropGame(){
  return(
    <>
    <h1 className="title">Drop Game</h1>
    <p className="description">The object of the game is to make it from one corner of the game grid to the opposite corner without being dropped.</p>
    <p className="description">You can move forward, backward, left, or right, to any "Available" space.</p>
    <p className='description'>Then its the System's turn. The System will open a random space. If you are on that space, you ... get ...... DROPPED!</p>
    <br />
    <UnderConstruction />
    </>
  )

}

export default DropGame