import React from "react";
import styled, { keyframes } from "styled-components";
import { stripUnit } from "polished";

const flipAnimation = keyframes`
  from {
    transform: rotateX(0deg);
  }
  to {
    transform: rotateX(180deg);
  }
`;

const flipBackAnimation = keyframes`
  from {
    transform: rotateX(180deg);
  }
  to {
    transform: rotateX(0deg);
  }
`;

const matchAnimation = keyframes`
  from {
    transform: rotateX(180deg);
  }
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;

export const TileSide = styled.div`
  position: absolute;
  width: ${({ theme }) => theme.scale.fourth};
  height: ${({ theme }) => theme.scale.fourth};
  backface-visibility: hidden;
  border-radius: ${({ theme }) => theme.scale.mSecond};
`;

export const TileFront = TileSide.extend`
  background: ${({ color }) => color};
  transform: rotateX(-180deg);
  z-index: 2;
  border: ${({ theme }) => theme.scale.mSecond} solid white;
  box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.15);
`;
export const TileBack = TileSide.extend`
  background: ${({ theme }) => theme.colors.blueGrey700};
  border: ${({ theme }) => theme.scale.mSecond} solid
    ${({ theme }) => theme.colors.blueGrey600};
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const TileContainer = styled.div`
  position: relative;
  width: ${({ theme }) => theme.scale.fourth};
  height: ${({ theme }) => theme.scale.fourth};
  perspective: 1000px;
  margin: ${({ theme }) => theme.scale.mFirst};
`;

export const TileFlipper = styled.div`
  position: relative;
  transform-style: preserve-3d;
  transform-origin: ${({ theme }) => stripUnit(theme.scale.fourth) / 2 + "em"}
    ${({ theme }) => stripUnit(theme.scale.fourth) / 2 + "em"};
  animation: ${({ picked, match }) => {
    if (picked && match === null && typeof null === "object") {
      return `${flipAnimation} .6s ease-out forwards`;
    } else if (picked && match === false) {
      return `${flipBackAnimation} .4s ease-out`;
    } else if (picked && match === true) {
      return `${matchAnimation} .6s ease forwards`;
    }
  }};
`;

const Tile = ({ color, picked, onClick, match }) => (
  <TileContainer>
    <TileFlipper picked={picked} match={match}>
      <TileFront color={color} />
      <TileBack onClick={onClick} />
    </TileFlipper>
  </TileContainer>
);

export default Tile;
