import axios from 'axios';

const APIKEY = '39658126-cca0e2f1e761c4f8cef133a9f';
const url = 'https://pixabay.com/api/';
export const maxPhotos = 12;

export const getAllPhoto = async (photoTag, page) => {
  const response = await axios.get(`${url}`, {
    params: {
      key: `${APIKEY}`,
      q: `${photoTag.toLowerCase()}`,
      safesearch: true,
      image_type: 'photo',
      // orientation: 'horizontal',
      page: page,
      per_page: `${maxPhotos}`,
    },
  });
  return response.data;
};
