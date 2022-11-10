import axiosInstance from "./axiosInstance";

export const recommendBooks = async (requestBody) => {
  try {
    console.log(requestBody);

    const res = await axiosInstance.post("/recommendBooks", requestBody);
    return res;
  } catch (error) {
    return error;
  }
};

export default recommendBooks;

