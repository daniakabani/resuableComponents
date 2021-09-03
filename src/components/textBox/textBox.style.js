import styled from "styled-components";

const TextBoxStyle = styled.div`
   {
    .insurance-textbox {
      label {
        display: flex;
        flex-direction: column;
        position: relative;
        width: 100%;

        input {
          border-radius: 10px;
          padding: 15px;
          width: 100%;
          border: 1px solid #f5f5f5;
          margin: 5px 0;
          box-shadow: -2px 2px 0px -1px rgb(222 222 222 / 75%);
          background-color: ${(props) =>
            props.theme.form.secondaryBackgroundColor};
          transition: ease all 0.3s;
          &:focus {
            outline: none;
            background-color: ${(props) =>
              props.theme.form.primaryBackgroundColor};
          }
        }
        svg {
          max-width: 20px;
          position: absolute;
          right: 10px;
          bottom: 19px;
        }
      }

      &.error {
        label {
          input {
            border-color: ${(props) => props.theme.red};
          }
        }
        p {
          color: ${(props) => props.theme.red};
        }
      }
    }
  }
`;

export default TextBoxStyle;
