import { HTTPService } from "utilities/HTTPService";
import configs from "config";

const { devAPIUrl } = configs;

const getCarInfo = (data = {}) =>
  HTTPService("POST", `${devAPIUrl}/explore/vehicle-information`, data);

// eslint-disable-next-line
export { getCarInfo };
