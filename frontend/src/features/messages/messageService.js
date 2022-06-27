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

const deleteMessage = async (messageId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(`${API_URL}/${messageId}`, config);

  return response.data;
};

const getAllMessages = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};

const messageService = {
  createMessage,
  getAllMessages,
  deleteMessage,
};

export default messageService;
