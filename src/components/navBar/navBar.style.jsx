import styled from "styled-components";

const NavBarStyle = styled.div`
   {
    nav {
      padding: 20px 0;
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05), 0px 2px 24px rgba(0, 0, 0, 0.15);
      .logo {
        display: flex;
        align-items: center;
        figure {
          margin-right: 10px;
        }
        p {
          font-size: 36px;
          color: ${(props) => props.theme.primaryColor};
          font-weight: bold;
          span {
            font-weight: 300;
            font-size: 30px;
          }
        }
      }
    }
  }
`;

export default NavBarStyle;
