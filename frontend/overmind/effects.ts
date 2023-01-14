import { state } from "./state";
import * as actions from "./actions";

export const getWorldTime = async () => {
  const response = await fetch("http://worldtimeapi.org/api/ip");
  return response.json();
};
