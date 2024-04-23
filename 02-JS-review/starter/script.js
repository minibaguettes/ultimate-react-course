const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/* ----------------------------------------
/* DESTRUCTURING - get data out of array */

const book = getBook(3);
book;
// const title = book.title;
// const author = book.author;

// get multiple data from object rather than one by one
// - property name (title, author, ...) must be exact same name as in object
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

/* ----------------------------------------
/* DESTRUCTURING ARRAYS - instead of relying on property name, relies on order of elements */

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

// - first variable defined takes first element of array
// - second variable defined takes second element of array
/* ----------------------------------------
/* REST OPERATOR (...variableName) => creates array with all other genres, can only be placed at end */
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;

console.log(primaryGenre, secondaryGenre, otherGenres);

/* ----------------------------------------
/* SPREAD OPERATOR (...variableName) => take all values out of array and place them one by one otherwise will have [[1, 2, 3], [item2add]] instead of [1, 2, 3, item2add] */
const newGenres = [...genres, "epic fantasty"];
newGenres;

const updatedBook = {
  // spread original properties
  ...book,
  // add new property
  moviePublicationDate: "2001-12-19",
  // overwrite existing property
  pages: 1210,
};
updatedBook;

/* ----------------------------------------
/* ARROW FUNCTIONS */

// function declaration
// function getYear(str) {
//   return str.split("-")[0];
// }

// function expression
const getYear = (str) => str.split("-")[0];

/* ----------------------------------------
/* TEMPLATE LITERALS */

const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${getYear(
  publicationDate
)}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie`;
summary;

/* ----------------------------------------
/* OPTIONAL CHAINING / NULLISH COALESCING */

function getTotalReviewCount(book) {
  // optional chaining:   a?.b => if a IS defined, then continue to b; if NOT, then stop
  // nullish coalescing:  c ?? d => returns d ONLY IF c is NULL or UNDEFINED; NOT when it is 0 or NaN
  const goodreads = book.reviews?.goodreads?.reviewsCount ?? 0;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}
console.log(getTotalReviewCount(book));
