import express from "express";
import { makeRequiredError } from "../common/errors.utils";
import {GetCategories,GetCategory,CreateCategory,UpdateCategory} from "../service/category.service";
import * as R from "ramda";

export const CategoryRoute = express.Router()

CategoryRoute.get("/", async(req, res) => {
    try {
        const categories = await GetCategories();
        res.statusMessage = "Fetched Category Successfully.";
        res.json({categories})
    } catch (error) {
        res.statusCode = 401
        res.statusMessage = "Cannot fetch categories."
        res.json({success : false, errorCode : "SAMPLE_ERROR", errorMessage : "Sample Error"})
    }
})

CategoryRoute.post("/create", async(req, res) => {
    try {
        const params = req.body;
        if(!params.name){
            throw new Error("Name cannot be empty.")
        }
        const category = await CreateCategory(params.name);
        res.statusMessage = "Fetched Category Successfully.";
        res.json({category})
    } catch (error) {
        if(error.message){
            const errorMessage = error.message;
            res.statusCode = 402;
            res.statusMessage = "Missing Required Field.";
            if(R.includes("Name cannot be empty.")){
                res.json({...makeRequiredError("Name"), errorMessage})
            }
            res.json({success : false, errorMessage})
        }
        res.statusCode = 401
        res.statusMessage = "Cannot Create categories."
        res.json({success : false, errorCode : "SAMPLE_ERROR", errorMessage : "Something Went Wrong"})
    }
})