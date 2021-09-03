import { useReducer } from "react";
import stateReducer from "stateReducer";
import initSubmit from "handlers/initSubmit";
import buildQuote from "handlers/buildQuote";

const INITIAL_STATE = {
  access_level: 0,
  allow_submit: false,
};

export default function useStore(initialValue = INITIAL_STATE) {
  const [store, dispatch] = useReducer(stateReducer, initialValue);
  const handlers = {
    initSubmit: initSubmit.bind({ store, dispatch }),
    buildQuote: buildQuote.bind({ store, dispatch }),
  };
  return [store, handlers];
}
