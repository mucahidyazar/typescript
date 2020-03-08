"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
var charactersCollection = new CharactersCollection_1.CharactersCollection("Mucahid");
var sorter1 = new Sorter_1.Sorter(numbersCollection);
var sorter2 = new Sorter_1.Sorter(charactersCollection);
sorter1.sort();
sorter2.sort();
console.log(numbersCollection.data);
console.log(charactersCollection.data);