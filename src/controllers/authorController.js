import { author } from "../models/Author.js";

class AuthorController {

  //CRUD with mongoose
  
  static async getAuthors (req, res, next) {
    try {
      const listAuthors = await author.find({});
      res.status(200).json(listAuthors);
    } catch (error) {
      next(error);
    }
  }
  
  static async getAuthorById (req, res, next) {
    try {
      const id = req.params.id;
      const getAuthor = await author.findById(id);

      if (getAuthor !== null) {
        res.status(200).json(getAuthor);
      } else {
        res.status(404).json({ message: "Author not found" });
      }
      
    } catch (error) {
      next(error);
    }
  }
  
  static async registerAuthor (req, res, next) {
    try {
      const newAuthor = await author.create(req.body);
      res.status(201).json({ message: "Author created with success", author: newAuthor });
    } catch (error) {
      next(error);
    }
  }
  
  static async updatedAuthor (req, res, next) {
    try {
      const id = req.params.id;
      await author.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Author updated with success" });
    } catch (error) {
      next(error);
    }
  }
  
  static async deleteAuthor (req, res, next) {
    try {
      const id = req.params.id;
      await author.findByIdAndDelete(id);
      res.status(200).json({ message: "Author deleted with success" });
    } catch (error) {
      next(error);
    }
  }
  
}

export default AuthorController;