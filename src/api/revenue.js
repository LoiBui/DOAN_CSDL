import axios from '../commons/Axios';
import {API} from '../constants';
import queryString from 'query-string';

const prefix = `${API}/user/revenue`;

const urlGetListRevenue = `${prefix}/getListRevenue`;

export const getListRevenue = (param = {})=>{
    let url = `${urlGetListRevenue}?${queryString.stringify(param)}`;
    return axios.get(url);
}
