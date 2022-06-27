import axios from 'axios';

const API_URL = '/api/messages';

const createMessage = async (messageData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, messageData, config);

  return response.data;
};

const messageService = {
  createMessage,
};

export default messageService;
