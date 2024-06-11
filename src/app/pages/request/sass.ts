import axios, { AxiosResponse } from "axios";

const API_URL = 'https://minimalist-backend-1.onrender.com/haut';
const IMG_SEND_URL = `${API_URL}/image-upload/`;
const GET_SCORE_URL = `${API_URL}/get-score/`;


interface LoginResponse {
    access_token: string;
    company_id: string;
}

const sendImgToHaut = (imgSrc: string, cutomerInfo: any): Promise<any> => {
    return axios
        .post(`${IMG_SEND_URL}`, { imgSrc, cutomerInfo })
        .then((d: AxiosResponse<any>) => d.data);
};

const getScoreFromHaut = (apiData: any): Promise<any> => {
    return axios
        .post(`${GET_SCORE_URL}`, {apiData})
        .then((d: AxiosResponse<any>) => d.data);
}

export { sendImgToHaut, getScoreFromHaut }