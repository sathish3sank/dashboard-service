import * as t from "io-ts";

const CategoryMessages = t.union([t.literal("Name cannot be empty."), t.literal("Cannot create category"), t.literal("Category name already exist.")])

export type ErrorT = Error & {
    code ?: string
}

export type ErrorWithStatusAndMessage = {
    status: number;
    errorCode: string;
    errorMessage?: string
}

export type CategoryErrorMessages = t.TypeOf<typeof CategoryMessages>
