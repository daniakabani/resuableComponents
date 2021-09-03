import styled from "styled-components";

const SelectStyle = styled.div`
   {
    .insurance-select {
      .IN-select {
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
        border-radius: 12px;
        border: 1px solid #f2f2f2;
        margin: 5px 0;
        > div {
          padding: 5px;
          border-radius: 12px;
          background-color: #f8f8f8;
          &:focus-within {
            outline: none;
            background-color: #fff;
          }
        }
      }
    }
  }
`;

export default SelectStyle;
