import { useState } from "react";
import helpers from "helpers";
import { getCarInfo } from "services/cars";

const { FormSerializer } = helpers;

const handleFormSubmit = async (event) => {
  event.preventDefault();
  const { icNo, regNo, postCode } = FormSerializer(event?.currentTarget);
  return getCarInfo({ icNo, regNo, postCode });
};

const checkBoxLogicHandler = () => {
  const [checked, setChecked] = useState(false);
  const handleCheckUpdate = () => {
    setChecked(!checked);
  };
  return { checked, handleCheckUpdate };
};

const ReroutingLogicHandler = () => {
  const [route, setRoute] = useState(false);
  const handleRedirect = (value) => {
    setRoute(value);
  };
  return { route, handleRedirect };
};

const LoadingLogicHandler = () => {
  const [isLoading, setLoading] = useState(false);
  const handleLoadingStatus = (value = false) => {
    setLoading(value);
  };
  return { isLoading, handleLoadingStatus };
};

export {
  handleFormSubmit,
  checkBoxLogicHandler,
  ReroutingLogicHandler,
  LoadingLogicHandler,
};
