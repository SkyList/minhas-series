import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001/'
})

export const loadGenres = () => api.get('genres')
export const saveSeries = (newSeries) => api.post('series', newSeries)
export const updateSeries = (series) => api.put('series/'+series.id, series)
export const loadSeriesByGenrew = (genre) => api.get('series?genre='+genre)
export const deleteSeries = (id) => api.delete('series/'+id)
export const loadSeriesbyId = (id) => api.get('series/'+id)

const apis = {
    loadGenres : loadGenres,
    saveSeries : saveSeries,
    loadSeriesByGenrew : loadSeriesByGenrew,
    deleteSeries : deleteSeries,
    loadSeriesbyId: loadSeriesbyId,
    updateSeries : updateSeries
}

export default apis