import theme from "../theme";
import shuffle from "./shuffle";

export default () => {
  const tiles = [];
  let colors = Object.keys(theme.colors).filter(key => !/blueGrey/.test(key));

  while (tiles.length < 16) {
    const pairId = Math.random()
      .toString(36)
      .slice(2, 8);
    const colorName = colors[Math.floor(Math.random() * colors.length)];
    const color = theme.colors[colorName];
    tiles.push(
      {
        uid: Math.random()
          .toString(36)
          .slice(2, 8),
        pairId,
        color
      },
      {
        uid: Math.random()
          .toString(36)
          .slice(2, 8),
        pairId,
        color
      }
    );
    colors = colors.filter(cn => cn !== colorName);
  }

  return shuffle(tiles);
};
