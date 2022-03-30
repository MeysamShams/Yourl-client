export default class AuthModel{
    constructor(
        public username:string,
        public password:string,
        public confirmPassword?:string
    ){}
}