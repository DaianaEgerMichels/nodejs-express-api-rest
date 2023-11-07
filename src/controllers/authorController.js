import { author } from "../models/Author.js";

class AuthorController {

  //CRUD with mongoose
  
  static async getAuthors (req, res) {
    try {
      const listAuthors = await author.find({});
      res.status(200).json(listAuthors);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - request failed` });
    }
  }
  
  static async getAuthorById (req, res) {
    try {
      const id = req.params.id;
      const getAuthor = await author.findById(id);
      res.status(200).json(getAuthor);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - request failed` });
    }
  }
  
  static async registerAuthor (req, res) {
    try {
      const newAuthor = await author.create(req.body);
      res.status(201).json({ message: "Author created with success", author: newAuthor });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - request failed` });
    }
  }
  
  static async updatedAuthor (req, res) {
    try {
      const id = req.params.id;
      await author.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Author updated with success" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - updated failed` });
    }
  }
  
  static async deleteAuthor (req, res) {
    try {
      const id = req.params.id;
      await author.findByIdAndDelete(id);
      res.status(200).json({ message: "Author deleted with success" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - delete failed` });
    }
  }
  
}

export default AuthorController;