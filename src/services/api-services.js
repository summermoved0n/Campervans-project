import axios from 'axios';

axios.defaults.baseURL = 'https://6636d78a288fedf6937edb3a.mockapi.io/api/';

export async function getAllAdverts() {
  const { data } = await axios.get('adverts');
  return data;
}

export async function getAdvertById(id) {
  const { data } = await axios.get(`adverts/${id}`);
  return data;
}
