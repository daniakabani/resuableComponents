/* eslint-disable */
export default function stateReducer(state, actions) {
  for (const action of actions) {
    if (!action?.type) return state;
    switch (action?.type) {
      case "initSubmit":
        state = {
          ...state,
          allowSubmit: true,
          extras: {},
        };
        break;
      case "buildQuote":
        state = {
          ...state,
          quoteData: {},
        };
        break;
      default:
        state = { ...state, [action.type]: action.value };
        break;
    }
  }
  return state;
}
