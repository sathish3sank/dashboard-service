
import { CategoryErrorMessages, ErrorT, ErrorWithStatusAndMessage } from "./types";

export const makeError = (code : string, message : string) => {
    const error : ErrorT = new Error(message)
    error.code = code;
    return error
}

export const makeUniqueError = (field : string) : ErrorWithStatusAndMessage => ({status : 401, errorCode : "UNIQUE_ERROR", errorMessage : `${field} should be unique.`})

export const makeRequiredError = (field : string) : ErrorWithStatusAndMessage  => ({status : 402, errorCode : "REQUIRED_FIELD"})

export const makeResponseE = (error : any) => {
    console.log(error);
    return error
}

export const makeCategoryError = <T extends CategoryErrorMessages>(message : T) => ({message})