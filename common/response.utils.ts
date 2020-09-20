import * as T from "fp-ts/lib/TaskEither";

export const makeResponse = () => T.right({status : true, success : true})