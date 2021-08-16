export const storage = {
    data: JSON.parse(`${localStorage.getItem("data")}`) as { error: boolean,message: string,user: {id:number,name:string,email:string,username:string,photo:string},token: string}
}
