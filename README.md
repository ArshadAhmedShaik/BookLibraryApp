# 📚 Book Library App

A simple **Express.js + EJS** project that displays a list of books, their details, and allows filtering by genre.

Built as a practice project while learning **Node.js, Express, EJS templating, and static file serving**.

---

## 🚀 Features

- `/books` → Displays all available books
- `/books/:id` → Shows detailed information about a selected book
- `/books?genre=fiction` → Filter books by genre
- Uses **EJS loops and conditionals**
- Serves images from the `/public/images` folder
- Optional: Displays "Top Rated" books (rating ≥ 4.7)

---

## 🗂️ Project Structure
```
book-library/
│
├── app.js
├── books.json
├── package.json
├── README.md
│
├── views/
│   ├── books.ejs
│   ├── bookDetails.ejs
│   └── partials/
│       ├── header.ejs
│       └── footer.ejs
│
└── public/
    └── images/
        ├── gatsby.jpg
        ├── 1984.jpg
        ├── hobbit.jpg
        └── ...
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repo
```bash
git clone https://github.com//book-library.git
cd book-library
```

### 2️⃣ Install dependencies
```bash
npm install express ejs
```

### 3️⃣ Run the app
```bash
node app.js
```

or (for auto-reload)
```bash
npx nodemon app.js
```

### 4️⃣ Visit
```
http://localhost:3000/books
```

---

## 🧠 Tech Stack

- **Node.js**
- **Express.js**
- **EJS** (Embedded JavaScript Templates)
- **HTML & CSS**
- **Bootstrap** (optional for styling)

---

## 🌟 Learning Highlights

- Routing with Express
- Using URL parameters (`/books/:id`)
- Query filtering (`/books?genre=`)
- EJS templating with loops and conditionals
- Serving static files and JSON data

---

## 🧾 License

This project is open-source and free to use for learning purposes.
