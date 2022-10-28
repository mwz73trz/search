import axios from "axios";

const BASE_URL = "http://localhost:8000/api/";

const searchAPI = {};

const tryCatchFetch = async (axiosCall) => {
  try {
    const response = await axiosCall();
    return response.data ? response.data : { message: "success" };
  } catch (e) {
    console.error("-- tryCatchFetch ERROR:", e.response ? e.response.data : e);
    return null;
  }
};

searchAPI.getSearches = async () => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}searches/`));
};

export default searchAPI;
