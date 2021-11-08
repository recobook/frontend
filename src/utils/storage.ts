interface Data { 
    error: boolean,
    message: string,
    user: {
        id:number
        ,name:string
        ,email:string
        ,username:string
        ,photo:string
        ,bio:string
    },
    token: string
}

export const storage = {
    data: JSON.parse(`${localStorage.getItem("data")}`) as Data,
    save: (data:Data) => {
        localStorage.setItem("data", JSON.stringify(data));
    }
}
