const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export type UserResponse = {
  meta: {
    message: string; // e.g., "Login success"
    code: number; // e.g., 200
    status: string; // e.g., "success"
  };
  data: {
    id: number; // e.g., 1
    name: string; // e.g., "derado"
    occupation: string; // e.g., "pro player"
    email: string; // e.g., "derado@gmail.com"
    token: string; // e.g., JWT token
  };
};
