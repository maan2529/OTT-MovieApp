export { removeMovie } from '../reducers/movieSlice'
import instance from '../../utils/axios'
import { loadMovie } from '../reducers/movieSlice'

export const asyncloadMovie = (id) => async (dispatch, getState) => {
    if (!id) return;
    try {


        const detail = await instance.get(`/movie/${id}`);
        const externalid = await instance.get(`/movie/${id}/external_ids`);
        const recommendations = await instance.get(`/movie/${id}/recommendations`);
        const similar = await instance.get(`/movie/${id}/similar`);
        const videos = await instance.get(`/movie/${id}/videos`);
        const translations = await instance.get(`/movie/${id}/translations`);
        const watchproviders = await instance.get(`/movie/${id}/watch/providers`);



        const getAllDetailsInObject = {
            detail: detail.data,
            externalid: externalid.data,
            recommendations: recommendations.data.results,
            similar: similar.data.results,
            videos: (videos.data?.results).find(i => i.type === 'Trailer'),
            translations: translations.data,
            watchproviders: watchproviders.data?.results?.IN
        }
        dispatch(loadMovie(getAllDetailsInObject))
        console.log('getAllDetailsInObject', getAllDetailsInObject)
    } catch (err) {
        console.log('Error is ', err);
    }



}