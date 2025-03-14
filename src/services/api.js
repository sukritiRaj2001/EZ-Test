import axios from "axios";

const API_URL = "http://3.228.97.110:9000/api"; // API endpoint

export const submitEmail = async (email) => {
  try {
    const response = await axios.post(API_URL, { email });
    return response; // Returns response object
  } catch (error) {
    throw error.response ? error.response.data : "Error submitting email.";
  }
};
