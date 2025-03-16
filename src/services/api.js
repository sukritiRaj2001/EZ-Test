import axios from 'axios';

// Base API URL
const API_BASE_URL = 'https://test.ezworks.ai';

/**
 * Function to submit email
 * @param {string} email - Email entered by the user
 * @returns API response
 */
export const submitEmail = async (email) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api`, { email }, {
            headers: {
                'Content-Type': 'application/json'  // ✅ Ensuring correct content type
            }
        });
        return response.data;  // ✅ Return API response data
    } catch (error) {
        return error.response ? error.response.data : { error: 'Server error' };
    }
};
