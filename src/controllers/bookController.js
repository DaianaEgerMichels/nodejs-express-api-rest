import book from "../models/Book.js";
import { author } from "../models/Author.js";

class BookController {

  //CRUD with mongoose

  static async getBooks (req, res, next) {
    try {
      const listBooks = await book.find({});
      res.status(200).json(listBooks);
    } catch (error) {
      next(error);
    }
  }

  static async getBookById (req, res, next) {
    try {
      const id = req.params.id;
      const getBook = await book.findById(id);
      res.status(200).json(getBook);
    } catch (error) {
      next(error);
    }
  }

  static async registerBook (req, res, next) {
    const newBook = req.body;
    try {
      const authorFind = await author.findById(newBook.author);
      const bookComplet = { ...newBook, author: {...authorFind._doc} };
      const bookCreated = await book.create(bookComplet);
      res.status(201).json({ message: "Book created with success", book: bookCreated });
    } catch (error) {
      next(error);
    }
  }

  static async updatedBook (req, res, next) {
    try {
      const id = req.params.id;
      await book.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Book updated with success" });
    } catch (error) {
      next(error);
    }
  }

  static async deleteBook (req, res, next) {
    try {
      const id = req.params.id;
      await book.findByIdAndDelete(id);
      res.status(200).json({ message: "Book deleted with success" });
    } catch (error) {
      next(error);
    }
  }

  static async getBooksByEditor (req, res, next) {
    const editor = req.query.editor;
    try {
      const getBooksByEditor = await book.find({ editor: editor });
      res.status(200).json(getBooksByEditor);
    } catch (error) {
      next(error);
    }
  }

}

export default BookController;