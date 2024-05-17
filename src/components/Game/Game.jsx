import Background from "../Background";
import Pikachu from "../Pikachu";

const WIDTH = 1000;
const HEIGHT = 1000;
const MIDDLE_WIDTH = window.innerWidth / 2 - 45;
const MIDDLE_HEIGHT = window.innerHeight / 2 - 45;
const Game = () => {
  return (
    <div>
      <Background width={WIDTH} height={HEIGHT} />
      <Pikachu
        minWidth={MIDDLE_WIDTH - WIDTH / 2 - 10}
        maxWidth={MIDDLE_WIDTH + WIDTH / 2}
        minHeight={MIDDLE_HEIGHT - HEIGHT / 2 - 10}
        maxHeight={MIDDLE_HEIGHT + HEIGHT / 2}
      />
    </div>
  );
};

export default Game;
