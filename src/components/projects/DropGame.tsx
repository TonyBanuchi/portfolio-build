// Style Imports
import UnderConstruction from "../under-construction/UnderConstruction";
import styles from "./DropGame.module.scss";

function DropGame() {
  return (
    <>
      <div className="flex flex-col"><div className="title">
        <h1 className={styles.title}>Drop Game</h1>
      </div>
      <div className="content">
        <p className={styles.description}>
          The object of the game is to make it from one corner of the game grid
          to the opposite corner without being dropped.
        </p>
        <p className={styles.description}>
          You can move forward, backward, left, or right, to any "Available"
          space.
        </p>
        <p className={styles.description}>
          Then its the System's turn. The System will open a random space. If
          you are on that space, you ... get ...... DROPPED!
        </p>
      </div>
      <br />
      <UnderConstruction />
      </div>
    </>
  );
}

export default DropGame;
