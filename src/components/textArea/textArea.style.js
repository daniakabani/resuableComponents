import styled from "styled-components";

const textAreaStyle = styled.div`
   {
    .IN-text-area {
      label {
        display: flex;
        flex-direction: column;
        position: relative;
        width: 100%;

        textarea {
          border-radius: 10px;
          padding: 15px;
          width: 100%;
          border: 1px solid #f5f5f5;
          margin: 5px 0;
          box-shadow: -2px 2px 0px -1px rgb(222 222 222 / 75%);
          background-color: ${(props) =>
            props.theme.form.secondaryBackgroundColor};
          transition: ease all 0.3s;
          font-family: "Quattrocento Sans", sans-serif;

          &:focus {
            outline: none;
            background-color: ${(props) =>
              props.theme.form.primaryBackgroundColor};
          }
        }
      }
    }
  }
`;

export default textAreaStyle;
