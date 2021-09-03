import styled from "styled-components";

const LoaderStyle = styled.div`
   {
    .IN-loader {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 20px;
      .circle {
        width: 10px;
        height: 10px;
        background-color: ${(props) => props.theme.primaryColor};
        border-radius: 100%;
        margin-right: 10px;
        animation: jump 0.7s linear infinite;
        &:nth-child(3) {
          margin: 0;
        }
        &.circle1 {
          animation-delay: 0.2s;
        }
        &.circle2 {
          animation-delay: 0.4s;
        }
        &.circle3 {
          animation-delay: 0.6s;
        }
      }
    }
    @keyframes jump {
      0% {
        margin-top: 0;
      }
      30% {
        margin-top: -20px;
      }
      70% {
        margin-top: 0;
      }
    }
  }
`;

export default LoaderStyle;
