import book from "../models/Book.js";
import { author } from "../models/Author.js";

class BookController {

  //CRUD with mongoose

  static async getBooks (req, res) {
    try {
      const listBooks = await book.find({});
      res.status(200).json(listBooks);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - request failed` });
    }
  }

  static async getBookById (req, res) {
    try {
      const id = req.params.id;
      const getBook = await book.findById(id);
      res.status(200).json(getBook);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - request failed` });
    }
  }

  static async registerBook (req, res) {
    const newBook = req.body;
    try {
      const authorFind = await author.findById(newBook.author);
      const bookComplet = { ...newBook, author: {...authorFind._doc} };
      const bookCreated = await book.create(bookComplet);
      res.status(201).json({ message: "Book created with success", book: bookCreated });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - request failed` });
    }
  }

  static async updatedBook (req, res) {
    try {
      const id = req.params.id;
      await book.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Book updated with success" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - updated failed` });
    }
  }

  static async deleteBook (req, res) {
    try {
      const id = req.params.id;
      await book.findByIdAndDelete(id);
      res.status(200).json({ message: "Book deleted with success" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - delete failed` });
    }
  }

  static async getBooksByEditor (req, res) {
    const editor = req.query.editor;
    try {
      const getBooksByEditor = await book.find({ editor: editor });
      res.status(200).json(getBooksByEditor);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - request failed` });
    }
  }

}

export default BookController;