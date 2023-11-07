import express from "express";
import BookController from "../src/controllers/bookController.js";

const routes = express.Router();

// Routes take precedence for calls in the express

// Order: more complex routes first

routes.get("/books", BookController.getBooks);
routes.get("/books/search", BookController.getBooksByEditor);
routes.get("/books/:id", BookController.getBookById);
routes.post("/books", BookController.registerBook);
routes.put("/books/:id", BookController.updatedBook);
routes.delete("/books/:id", BookController.deleteBook);

export default routes;