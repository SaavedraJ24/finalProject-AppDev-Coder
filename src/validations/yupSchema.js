import {object, string, ref} from "yup";

export const signupSchema = object({
    confirmPassword:
        string()
        .required("You need to confirm the password.")
        .oneOf([ref('password'),null],"The passwords need to be exactly."),
    password:
        string()
        .required("Password needed.")
        .min(8,"Password requirements: 8 characters."),
    email:
        string()
        .required("Fill in with your email.")
        .email("Choose a correct email, please.")
})

export const loginSchema = object({
    password:
        string()
        .required("There must be a password."),
    email:
        string()
        .required("There must be an email.")
        .email("Email incorrect.")
})