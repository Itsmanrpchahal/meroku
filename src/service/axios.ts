import axios from "axios";
import { baseURL } from "../service/apiEndPoints";

// @ts-ignore
import { store } from "../store/store";
import AsyncStorage from '@react-native-async-storage/async-storage';

const state = store.getState();
const instance = axios.create({
    baseURL: baseURL,
    timeout: 50000,
    timeoutErrorMessage: "Timeout error",
});

AsyncStorage.getItem('TOKEN').then((asyncStorageRes) => {
    // @ts-ignore
    instance.defaults.headers['accessToken'] = asyncStorageRes;
});
export const setAuthInitalToken = (token: string) => {
    instance.defaults.headers['accessToken'] = token;
};

instance.defaults.headers.common.Accept = `application/json`;
instance.defaults.headers.common.Connection = "keep-alive"

instance.interceptors.request.use(payload => {
    console.log('request ===> ', payload)
    return payload;
});

instance.interceptors.response.use(
    response => {
        if (!response?.data?.success) {
           
        }

        return response;
    },
    error => {
      
        if (error.response?.data && !error.response.data.status) {
        }
        return Promise.reject(error);
    },
);

export default instance;