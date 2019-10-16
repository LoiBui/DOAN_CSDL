import axios from '../commons/Axios';
import {API} from '../constants';
import queryString from 'query-string';

const prefix = `${API}/user`;

const urlGetListUser = `${prefix}/getListUser`;
export const getListUser = (param = {})=>{
    let url = `${urlGetListUser}?${queryString.stringify(param)}`;
    
    return axios.get(url);
}
