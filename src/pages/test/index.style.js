import styled from "styled-components";

const TestPageStyles = styled.div`
   {
    .container {
      article {
        position: relative;
        h1 {
          color: black;
          text-align: center;
          font-size: 40px;
        }
      }
      .form {
        display: flex;
        width: 100%;
        > div {
          width: calc(100% - 20px);
          margin: 10px;
        }
      }
    }
  }
`;

export default TestPageStyles;
