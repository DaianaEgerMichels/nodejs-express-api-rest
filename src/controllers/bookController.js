import book from '../models/Book.js';

class BookController {

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

  static async registerBook (req, res) {
    try {
      const newBook = await book.create(req.body);
      res.status(201).json({ message: 'Book created with success', book: newBook });
    } catch (error) {
      res
      .status(500)
      .json({ message: `${error.message} - request failed` });
    }
  }

};

export default BookController;