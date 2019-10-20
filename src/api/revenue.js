import axios from '../commons/Axios';
import queryString from 'query-string';


const prefix = `user/revenue`;

const urlGetListRevenue = `${prefix}/getListRevenue`;
const urlDeleteRevenueById = `${prefix}`;

export const getListRevenue = (param = {})=>{
    let url = `${urlGetListRevenue}?${queryString.stringify(param)}`;
    return axios.get(url);
}


export const deleteRevenueById = (param)=>{
    let url = `${urlDeleteRevenueById}/${param.id}`;
    return axios.delete(url);
}