

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export type User = {
    user: Profile
}

export type Profile = {
    user_id : number
    name: string
    email : string
}

export type ResponseUsers = {
    user_id : number
    email: string
    username: string
}