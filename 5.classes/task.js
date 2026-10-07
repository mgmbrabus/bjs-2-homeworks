class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state *= 1.5;
  }

  set state(newState) {
    if (newState < 0) {
      this._state = 0;
    } else if (newState > 100) {
      this._state = 100;
    } else {
      this._state = newState;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    const foundBook = this.books.find((book) => book[type] === value);
    return foundBook !== undefined ? foundBook : null;
  }

  giveBookByName(bookName) {
    const bookIndex = this.books.findIndex((book) => book.name === bookName);
    if (bookIndex !== -1) {
      return this.books.splice(bookIndex, 1)[0];
    }
    return null;
  }
}

const cityLibrary = new Library("Городская библиотека");
cityLibrary.addBook(
  new NovelBook("Лев Толстой", "Война и мир", 1869, 1225)
);
cityLibrary.addBook(
  new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168)
);
cityLibrary.addBook(
  new DetectiveBook("Артур Конан Дойл", "Собака Баскервилей", 1902, 256)
);
cityLibrary.addBook(
  new Magazine("Вокруг света", 2020, 96)
);

console.log("Книг в библиотеке изначально:", cityLibrary.books.length); // 4

let book1919 = cityLibrary.findBookBy("releaseDate", 1919);

if (!book1919) {
  console.log("Книга 1919 года не найдена. Создаём и добавляем...");
  book1919 = new NovelBook(
    "Сомерсет Моэм",
    "Луна и грош",
    1919,
    312
  );
  cityLibrary.addBook(book1919);
}

console.log("Найдена/создана книга 1919 года:", book1919.name);
console.log("Книг в библиотеке теперь:", cityLibrary.books.length); // 5

const issuedBook = cityLibrary.giveBookByName("Пикник на обочине");
console.log("Выдана книга:", issuedBook.name);
console.log("Книг в библиотеке после выдачи:", cityLibrary.books.length); // 4

issuedBook.state = 25;
console.log("Состояние выданной книги после повреждения:", issuedBook.state); // 25

issuedBook.fix();
console.log("Состояние выданной книги после восстановления:", issuedBook.state); // 37.5

cityLibrary.addBook(issuedBook);
console.log(
  "Книг в библиотеке после возврата:",
  cityLibrary.books.length // 5 (так как state 37.5 > 30, книга успешно принята)
);
