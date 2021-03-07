import styled, { createGlobalStyle, keyframes } from "styled-components";
import { SpinnerProps, ButtonProps } from "interfaces";

export default createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }

  body {
    height: 100vh;
    width: 100vw;
    background: #E6EAF9;
  }

  a {
    font-weight: bold;
    color: #086288;

    &:hover {
      color: #54ccff;
      text-decoration: underline;
    }
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: #71767C;
    border-radius: 4px;
  }
`;

const ripple = keyframes`
  from {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }

  to {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
`;

export const ListWrapper = styled.div`
  margin: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 425px) {
    margin: 60px;
  }
`;

export const UserCardWrapper = styled.div`
  padding: 15px;
  background-color: #fff;
  border-radius: 30px;
  margin-bottom: 10px;
  display: flex;
  flex: 0 1 300px;
  flex-flow: column;
  align-items: center;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  @media (min-width: 425px) {
    padding: 30px;
    margin-right: 35px;
    margin-bottom: 35px;
  }
`;

export const HeroCardWrapper = styled(UserCardWrapper)`
  background: rgb(50, 92, 241);
  background: linear-gradient(
    135deg,
    rgba(50, 92, 241, 1) 19%,
    rgba(28, 52, 137, 1) 67%
  );
  box-shadow: rgb(0 0 0 / 30%) 0px 8px 24px;
  align-items: flex-start;
  color: #fff;
`;

export const HeroCardTitle = styled.h1`
  font-weight: bold;
  font-size: 28px;
  margin: 0 0 10px;
`;

export const HeroCardDescription = styled(HeroCardTitle)`
  font-weight: normal;
  flex-grow: 1;
`;

export const DisplayPicture = styled.img`
  border-radius: 50%;
  margin: 10px;
  box-shadow: rgb(50 50 93 / 25%) 0px 13px 27px -5px,
    rgb(0 0 0 / 30%) 0px 8px 16px -8px;
  object-fit: cover;
`;

DisplayPicture.defaultProps = {
  height: "80px",
  width: "80px",
};

export const DisplayName = styled.p`
  font-weight: bold;
  margin: 8px 0;
`;

export const Email = styled.p`
  font-size: 14px;
  margin: 4px 0;
`;

export const SubSection = styled.div`
  padding: 15px 15px 5px;
  background-color: #f5f7ff;
  margin-top: 10px;
  border-radius: 15px;
  text-align: center;
`;

export const DetailsItem = styled.p`
  margin: 0 0 10px;
`;

export const Button = styled.button<ButtonProps>`
  background: #325cf1;
  height: ${({ small }) => (small ? "30px" : "50px")};
  border-radius: 50px;
  color: #fff;
  font-weight: bold;
  padding: 0 ${({ small }) => (small ? "20px" : "40px")};
  border: none;
  font-size: ${({ small }) => (small ? "14px" : "20px")};
  line-height: ${({ small }) => (small ? "30px" : "50px")};
  font-family: inherit;
  cursor: pointer;
  align-self: flex-end;
  border: 1px solid transparent;

  &:hover {
    background: #2c48ac;
  }

  &:focus {
    outline: none;
    border-color: ${({ small }) => (small ? "black" : "white")};
  }
`;

export const AppSpinnerWrap = styled.div<SpinnerProps>`
  margin-top: ${({ noMargin }) => (noMargin ? "0" : "100px")};
  text-align: center;
`;

export const RippleSpin = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  div {
    position: absolute;
    border: 4px solid #3f3d56;
    opacity: 1;
    border-radius: 50%;
    animation: ${ripple} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  div:nth-child(2) {
    animation-delay: -0.5s;
  }
`;

export const LoadMoreWrapper = styled.div`
  text-align: center;
  padding-bottom: 50px;
`;

export const AboutPageWrapper = styled(ListWrapper)`
  align-items: flex-start;
`;

export const ProfilePicture = styled(DisplayPicture)`
  height: 150px;
  width: 150px;
  margin: 0 0 20px;
`;

export const ProfileDescription = styled(HeroCardDescription)`
  font-size: 22px;
  margin-bottom: 30px;
`;

export const Changelog = styled(UserCardWrapper)`
  flex-grow: 1;
`;
