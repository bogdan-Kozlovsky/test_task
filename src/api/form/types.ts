export type AddUserType = {
    name: string | number,
    email: string | number,
    phone: string | number,
    position_id: number | null,
    photo: string | number,
}

export type AnswerUser = {
    success: boolean
    user_id: number
    message: string
}