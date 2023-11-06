import express from 'express';
import BookController from '../src/controllers/bookController.js';

const routes = express.Router();

routes.get("/books", BookController.getBooks);
routes.post("/books", BookController.registerBook);

export default routes;