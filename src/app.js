import express from "express";
import connectInTheDataBase from "./config/dbConnect.js";
import routes from "../routes/index.js";

const connection = await connectInTheDataBase();

connection.on("error", (error) => {
  console.error("Error connecting to the database", error);
});

connection.once("open", () => {
  console.log("Connected to the database");
});

const app = express();
routes(app);

// Middleware
// app.use(express.json());

// CRUD with Express

// app.get("/", (req, res) => {
//   res.status(200).send("Node.js course");
// });

// app.get("/books", async (req, res) => {
//   const listBooks = await book.find({});
//   res.status(200).json(listBooks);
// });

// app.get("/books/:id", (req, res) => {
//   const index = getBook(req.params.id);
//   res.status(200).json(books[index]);
// });

// app.post("/books", (req, res) => {
//   books.push(req.body);
//   res.status(201).send("Book created");
// });

// app.put("/books/:id", (req, res) => {
//   const index = getBook(req.params.id);
//   books[index].name = req.body.name;
//   res.status(200).json(books);
// });

// app.delete("/books/:id", (req, res) => {
//   const index = getBook(req.params.id);
//   books.splice(index, 1);
//   res.status(200).send("Book deleted with success");
// });

export default app;