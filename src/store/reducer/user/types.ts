export type initialStateType = {
    users: UserType[],
    success:boolean,
    page:number,
    total_pages:number,
    total_users:number,
    count:number,
    links:{
        next_url:string,
        prev_url:null
    },
}

export type UserType = {
    id: string,
    name: string,
    email: string,
    phone: string,
    position: string,
    position_id: string,
    registrationTimestamp: number,
    photo: string,
}