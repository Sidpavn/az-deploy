import axiosInstance from "./axiosInstance";

export const addQuestion = async (requestBody) => {
  try {
    console.log(requestBody);

    const res = await axiosInstance.post("/questions", requestBody);
    return res;
  } catch (error) {
    return error;
  }
};

export default { addQuestion };