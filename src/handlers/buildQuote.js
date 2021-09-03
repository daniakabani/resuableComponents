export default function buildQuote(value) {
  const { dispatch } = this;
  dispatch([{ type: "updateState", value }]);
}
