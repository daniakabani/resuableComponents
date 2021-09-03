import styled from "styled-components";

const GlobalStyle = styled.div`
   {
    font-family: "Rubik", sans-serif;
    font-weight: 300;
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0 0 15px 0;
    }
    h1 {
      font-weight: 500;
      font-size: 48px;
      line-height: 57px;
    }
    h4 {
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
    }
    .IN-form-element {
      margin: 10px 0;
      width: 100%;
      font-size: 16px;
      font-family: "Quattrocento Sans", sans-serif;
    }
    .IN-card-element {
      border: 1px solid #ededed;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05), 0 2px 2px rgba(0, 0, 0, 0.15);
      border-radius: 16px;
      padding: 10px 20px;
      display: block;
      position: relative;
      margin: 20px 0;
    }
    form {
      font-family: "Quattrocento Sans", sans-serif;
    }
    .container {
      max-width: 1280px;
      width: 100%;
      margin: 0 auto;
      @media (max-width: 1281px) {
        max-width: 990px;
      }
      @media (max-width: 991px) {
        max-width: 768px;
      }
    }
  }
`;

export default GlobalStyle;
