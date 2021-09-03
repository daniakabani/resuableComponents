import styled from "styled-components";

const LabelStyle = styled.div`
   {
    .IN-label {
      display: inline-block;
      .label-wrapper {
        border-radius: 12px;
        border: 1px solid ${(props) => props.theme.primaryColor};
        padding: 10px;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        text-transform: uppercase;
        color: ${(props) => props.theme.primaryColor};
      }
    }
  }
`;

export default LabelStyle;
