const getCurrentTime = () => Date.now();

const randomGenerator = () => Math.ceil(Math.random() * 1000);

const FormSerializer = (form) =>
  Object.fromEntries(
    Object.values(form)
      .filter(({ value, name }) => typeof value !== "undefined" && name)
      .map(({ name, value }) => [name, value])
  );

export default {
  getCurrentTime,
  randomGenerator,
  FormSerializer,
};
