import express from "express";
import * as BP from "body-parser";
import { CategoryRoute } from "./routes/category.routes";


const app = express();
const port = 8000;
app.use(BP.json());
app.use(BP.urlencoded({ extended: true }));
app.use("/category", CategoryRoute)

app.listen(8000, () => {
    console.log(`Server running in ${port}.`)
})