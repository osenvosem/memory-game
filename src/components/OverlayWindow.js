import React from "react";
import styled from "styled-components";
import { rgba } from "polished";

export const Header = styled.h1`
  font-weight: 300;
`;

export const Content = styled.div`
  width: ${({ theme }) => theme.scale.seventh};
  height: ${({ theme }) => theme.scale.sixth};
  border-radius: ${({ theme }) => theme.scale.base};
  background: white;
  margin: ${({ theme }) => theme.scale.second} auto 0;
  text-align: center;
  padding: ${({ theme }) => theme.scale.base};
`;

export const Message = styled.p``;

export const Button = styled.button`
  width: ${({ theme }) => theme.scale.fifth};
  height: ${({ theme }) => theme.scale.third};
  background: ${({ theme }) => theme.colors.blue};
  border-radius: ${({ theme }) => theme.scale.mFirst}
  color: white;
  font-size: ${({ theme }) => theme.scale.base};
  font-weight: 400;
  margin-top: ${({ theme }) => theme.scale.second};
  cursor: pointer;
  border: none;
  box-shadow: none;
  transition: all .2s;
  :hover {
    box-shadow: 0px ${({ theme }) => theme.scale.mSecond} 16px ${({ theme }) =>
  rgba(theme.colors.blue, 0.6)};
    transform: translateY(-${({ theme }) => theme.scale.mThird});
  }
`;

const OverlayWindow = ({ onClick }) => (
  <Content>
    <Header>Congratulations!</Header>
    <Message>You have successfully finished the game.</Message>
    <Button onClick={onClick}>Play again?</Button>
  </Content>
);

export default OverlayWindow;
