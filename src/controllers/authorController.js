import mongoose from "mongoose";
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

      if (getAuthor !== null) {
        res.status(200).json(getAuthor);
      } else {
        res.status(404).json({ message: "Author not found" });
      }
      
    } catch (error) {
      if (error instanceof mongoose.Error.CastError) {
        res.status(400).json({ message: "Invalid id format" });
      }

      res
        .status(500)
        .json({ message: `${error.message} - Internal Server Error` });
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