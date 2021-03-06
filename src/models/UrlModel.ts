export default class UrlModel{
    public shortenedUrl:string;
    constructor(
        public hash:string,
        public id?:string,
        public originalUrl?:string,
        public createdAt?:number,
        public expireAt?:number
    ){
        this.shortenedUrl=window.location.host+"/"+this.hash
    }
}