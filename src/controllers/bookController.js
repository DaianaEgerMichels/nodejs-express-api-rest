import book from "../models/Book.js";
import { author } from "../models/Author.js";
import NotFound from "../errors/NotFound.js";

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
      if (getBook !== null) {
        res.status(200).json(getBook);
      } else {
        next(new NotFound("Book Id not found"));
      }
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
      const bookUpdated = await book.findByIdAndUpdate(id, req.body);
      if (bookUpdated !== null) {
        res.status(200).json({ message: "Book updated with success" });
      } else {
        next(new NotFound("Book Id not found"));
      }
    } catch (error) {
      next(error);
    }
  }

  static async deleteBook (req, res, next) {
    try {
      const id = req.params.id;
      const bookDeleted = await book.findByIdAndDelete(id);
      if (bookDeleted !== null) {
        res.status(200).json({ message: "Book deleted with success" });
      } else {
        next(new NotFound("Book Id not found"));
      }
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