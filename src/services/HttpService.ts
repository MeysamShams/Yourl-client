import Axios from "axios";
import {prod,dev} from 'config.json'

export class HttpService{
    protected readonly axios=Axios.create({
        baseURL: process.env.NODE_ENV === 'production' ? prod.apiBaseUrl : dev.apiBaseUrl,
        timeout: 10000,
    });
    protected readonly get=this.axios.get
    protected readonly post=this.axios.post
    protected readonly delete=this.axios.delete
    protected readonly put=this.axios.put
    protected readonly patch=this.axios.patch
}