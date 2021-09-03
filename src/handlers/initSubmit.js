export default function initSubmit(value) {
  const { dispatch } = this;
  dispatch([{ type: "initSubmit", value }]);
}
