import { author } from "../models/Author.js";
import NotFound from "../errors/NotFound.js";

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
        next(new NotFound("Author not found"));
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
      const authorUpdated =await author.findByIdAndUpdate(id, {$set: req.body});
      if (authorUpdated !== null) {
        res.status(200).json({ message: "Author updated with success" });
      } else {
        next(new NotFound("Author Id not found"));
      }
    } catch (error) {
      next(error);
    }
  }
  
  static async deleteAuthor (req, res, next) {
    try {
      const id = req.params.id;
      const authorDeleted = await author.findByIdAndDelete(id);
      if (authorDeleted !== null) {
        res.status(200).json({ message: "Author deleted with success" });
      } else {
        next(new NotFound("Author Id not found"));
      }
    } catch (error) {
      next(error);
    }
  }
  
}

export default AuthorController;