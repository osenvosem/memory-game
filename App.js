import React, { Component } from "react";
import { hot } from "react-hot-loader";
import generateTiles from "./helpers/generateTiles";

import { Canvas } from "./components/styled";
import OverlayWindow from "./components/OverlayWindow";
import Tile from "./components/Tile";

const initialState = {
  tiles: generateTiles(),
  pickedTiles: [],
  freezed: false,
  match: null
};

class App extends Component {
  state = initialState;

  onTileClick(tile) {
    const { pickedTiles } = this.state;

    if (this.state.freezed || pickedTiles.some(t => t.uid === tile.uid)) {
      return;
    } else {
      this.setState({ freezed: true });
      setTimeout(() => {
        this.setState({ freezed: false });
      }, 600);
    }

    if (pickedTiles.length < 2) {
      this.setState({ pickedTiles: [...this.state.pickedTiles, tile] });
    }

    if (pickedTiles.length === 1) {
      const pickedTile = pickedTiles[0];
      if (pickedTile.pairId === tile.pairId) {
        this.setState({ freezed: true });
        setTimeout(() => {
          this.setState({ match: true });
          setTimeout(() => {
            this.setState({
              tiles: this.state.tiles.filter(t => t.pairId !== tile.pairId),
              pickedTiles: [],
              freezed: false,
              match: null
            });
          }, 1000);
        }, 1000);
      } else {
        setTimeout(() => {
          this.setState({ match: false });
          setTimeout(() => {
            this.setState({ pickedTiles: [], match: null, freezed: false });
          }, 600);
        }, 1000);
      }
    }
  }

  onPlayAgainClick = () => {
    this.setState(initialState);
  };

  render() {
    return this.state.tiles.length === 0 ? (
      <OverlayWindow onClick={this.onPlayAgainClick} />
    ) : (
      <Canvas>
        {this.state.tiles.map(tile => (
          <Tile
            key={tile.uid}
            id={tile.pairId}
            color={tile.color}
            onClick={() => this.onTileClick(tile)}
            picked={this.state.pickedTiles.some(t => t.uid === tile.uid)}
            match={this.state.match}
          />
        ))}
      </Canvas>
    );
  }
}

export default hot(module)(App);
