export { removetv } from '../reducers/tvSlice'
import instance from '../../utils/axios'
import { loadtv } from '../reducers/tvSlice'

export const asyncloadTv = (id) => async (dispatch, getState) => {
    if (!id) return;
    try {


        const detail = await instance.get(`/tv/${id}`);
        const externalid = await instance.get(`/tv/${id}/external_ids`);
        const recommendations = await instance.get(`/tv/${id}/recommendations`);
        const similar = await instance.get(`/tv/${id}/similar`);
        const videos = await instance.get(`/tv/${id}/videos`);
        const translations = await instance.get(`/tv/${id}/translations`);
        const watchproviders = await instance.get(`/tv/${id}/watch/providers`);

        console.log('detail', videos);


        const getAllDetailsInObject = {
            detail: detail.data,
            externalid: externalid.data,
            recommendations: recommendations.data.results,
            similar: similar.data.results,
            videos: (videos.data?.results).find(i => i.type === 'Trailer'),
            translations: translations.data,
            watchproviders: watchproviders.data?.results?.IN
        }
        dispatch(loadtv(getAllDetailsInObject))
        console.log('getAllDetailsInObject', getAllDetailsInObject)
    } catch (err) {
        console.log('Error is ', err);
    }



}