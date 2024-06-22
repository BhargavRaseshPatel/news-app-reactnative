import { create } from "apisauce"

const api = create({
    baseURL : 'https://newsapi.org/v2',
})

const apiKey = '?country=us&apiKey=4f0fb2df2b4247aabf5f97478a749be4'
const getTopHeadline = api.get('/top-headlines'+apiKey)
const getByCategory = (category) => api.get('/everything?q='+category+"&apiKey=4f0fb2df2b4247aabf5f97478a749be4")

export default{
    getTopHeadline,
    getByCategory
}