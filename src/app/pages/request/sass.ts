import axios, { AxiosResponse } from "axios";
import { error } from "console";

const BACKEND_API = import.meta.env.VITE_APP_THEME_API_URL;
// const BACKEND_API = 'http://localhost:3000';
const IMG_SEND_URL = `${BACKEND_API}/haut/image-upload/`;
const GET_SCORE_URL = `${BACKEND_API}/haut/get-score/`;


interface LoginResponse {
    access_token: string;
    company_id: string;
}

const sendImgToHaut = (imgSrc: string, cutomerInfo: any): Promise<any> => {
    return axios
        .post(`${IMG_SEND_URL}`, { imgSrc, cutomerInfo })
        .then((d: AxiosResponse<any>) => d.data)
        .catch((error) => {
            console.log(error)
        });
};

const getScoreFromHaut = (apiData: any): Promise<any> => {
    return axios
        .post(`${GET_SCORE_URL}`, {apiData})
        .then((d: AxiosResponse<any>) => d.data);
}

export { sendImgToHaut, getScoreFromHaut }