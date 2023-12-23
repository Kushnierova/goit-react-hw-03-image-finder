import axios from 'axios';

const APIKEY = '39658126-cca0e2f1e761c4f8cef133a9f'
const url = 'https://pixabay.com/api/'
const maxPhotos = 12

export async function fetchPhotosByKeyword(keyword, pageNum) {
  try{
  const {data} = await axios.get('', {
     baseURL: url,
     params: {
       key: APIKEY,
       q: keyword,
       image_type: 'photo',
       orientation: 'horizontal',
       safesearch: true,
       per_page: maxPhotos,
       page: pageNum,
     }
   });

    return data
     } catch (error) {
    console.error(error);
  }
}