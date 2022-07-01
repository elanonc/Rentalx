import express from 'express';
import { categoriesRoutes } from './routes/categories.routes';

const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes); // assim os métodos criados no categoriesRoutes terão como path o /categories

app.listen(3333);