import styled from "styled-components";

const HomePageStyle = styled.section`
   {
    .IN-Home-content {
      display: flex;
      height: 100vh;
      min-height: 800px;
      align-items: center;
      .IN-Home-form {
        width: 45%;
        padding: 0 10vw;
        .form-wrapper {
          max-width: 450px;
          margin: 0 auto;
          .confirm-accuracy {
            display: flex;
            justify-content: flex-start;
            align-items: center;
          }
        }
      }
      .IN-Home-graphics {
        width: 55%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fafafa;
        height: 100%;
        overflow: hidden;
        figure {
          img {
            height: 100%;
            width: auto;
          }
        }
      }
    }
  }
`;

export default HomePageStyle;
