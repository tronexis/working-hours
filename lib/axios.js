import Axios from "axios";

const axios = Axios.create({
  baseURL:
    "https://api.timekit.io/v2/resources/" + process.env.NEXT_PUBLIC_TIMEKIT_RESOURCE_ID,
  auth: {
    password: process.env.NEXT_PUBLIC_TIMEKIT_API_KEY,
  },
});

export const getAvailabilityConstraints = async () => {
  const data = await axios
    .get("?include=availability_constraints")
    .then(function (response) {
      return response.data.data.availability_constraints;
    })
    .catch(function (error) {
      console.log(error.message, error.response);
    });
  return data;
};

export const updateAvailabilityConstraints = async (data) => {
  await axios
    .put('/',

      {
        availability_constraints: data,
      }
    )
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      console.log(error.message);
    });
};

export default axios;
