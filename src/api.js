import axios from 'axios';

const movieApiToken = 'SE6GF43-RV2473Z-QR19TQH-YTFZ378'
const movieApiToken2 = 'VH7CSXR-N15MFZG-JX04631-64VRXXB'
const movieApiToken3 = 'VD7ST12-3KQMENT-P836VBP-AQA04GY'
const movieApiToken4 = "WKE87JD-4D441GJ-MPRMZ0Q-6DC5G21"
const movieApiUrl = 'https://api.kinopoisk.dev/v1.4/';


const movieApi = axios.create({
  baseURL: movieApiUrl,
  headers: {accept:'application/json', 'X-API-KEY': movieApiToken},
});

export const getMoviesAPI = async (page = 1, limit = 10) => {
  const selectedFields = ['id', 'name', 'description', 'shortDescription', 'slogan', 'type', 'year', 'rating', 'poster']
  const selectedFieldsParam = selectedFields.map(field => `&selectFields=${field}`).join('')
  const movieData = await movieApi.get(`movie?${selectedFieldsParam}`, {
    params: {
      page: page,
      limit: limit > 250 ? 250 : limit,
      type: 'movie'
    }
  }).catch(error => {
    console.error("getMoviesApi error -", error)
    return new Error('error api, check console')
  })
  console.warn("get movie api request success", `
  limit - ${limit > 250 ? 250 : limit}`)
  return movieData.data
}