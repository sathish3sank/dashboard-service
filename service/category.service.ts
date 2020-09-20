import {prisma} from "../common/prisma.utils"

export const GetCategories = async() => prisma.category.findMany();

export const GetCategory = async(name : string) => prisma.category.findOne({where : {
    name
}})

export const CreateCategory = async(name : string) => prisma.category.create({data : {
    name, created_at : new Date(), updated_at : new Date()
}})

export const UpdateCategory = async(name : string, newName : string) => prisma.category.update({where : {name : name}, data : {name : newName}})