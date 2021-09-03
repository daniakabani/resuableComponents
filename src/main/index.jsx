import React from "react";
import Routes from "routes";
import useStore from "hooks/useStore";
import Context from "providers/context";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./global.style";
import GlobalTheme from "./theme";

const InsuranceMain = () => {
  const [store, handlers] = useStore();
  return (
    <Context.Provider value={[store, handlers]}>
      <ThemeProvider theme={GlobalTheme}>
        <GlobalStyles>
          <Routes />
        </GlobalStyles>
      </ThemeProvider>
    </Context.Provider>
  );
};

export default InsuranceMain;
