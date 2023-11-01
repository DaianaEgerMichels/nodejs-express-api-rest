import express from 'express';

const app = express();

// Middleware
app.use(express.json());

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948
    },
    releaseYear: 1991
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892
    },
    releaseYear: 1954
  }
]

function getBook(id) {
  return books.findIndex(book => book.id === Number(id));
}

// CRUD with Express

app.get("/", (req, res) => {
  res.status(200).send("Node.js course");
});

app.get("/books", (req, res) => {
  res.status(200).json(books);
});

app.get("/books/:id", (req, res) => {
  const index = getBook(req.params.id);
  res.status(200).json(books[index]);
});

app.post("/books", (req, res) => {
  books.push(req.body);
  res.status(201).send("Book created");
});

app.put("/books/:id", (req, res) => {
  const index = getBook(req.params.id);
  books[index].name = req.body.name;
  res.status(200).json(books);
});

app.delete("/books/:id", (req, res) => {
  const index = getBook(req.params.id);
  books.splice(index, 1);
  res.status(200).send("Book deleted with success");
});

export default app;