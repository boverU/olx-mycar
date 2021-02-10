import axios from 'axios'

export const getCreditAvailableBrands = () =>
  axios.get('https://credit.mycar.kz/credits/')

export const getCreditInfoByBrandId = (brandId) =>
  axios.get(`https://credit.mycar.kz/credits/${brandId}`)

export const getAnnualPayment = (data) =>
  axios.post('https://credit.mycar.kz/calculate/detail_calculation/', data)

export const getScorringTimer = () =>
  axios.get('https://credit.mycar.kz/scoring_config/')

export const getScorring = (iin) =>
  axios.get(`https://credit.mycar.kz/get_scoring/?iin=${iin}
`)
