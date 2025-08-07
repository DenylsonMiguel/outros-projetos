// String

const mesage = `Olá, mundo!`;

console.log(mesage.length);

const firstName = `Felipe`;
const lastName = 'Rocha';

const names = "Felipe,João,Julia";

console.log(`Meu nome é ${firstName.toLowerCase()} ${lastName.toUpperCase()}`);

console.log(names.split(""));

// Transformar em String:
// .toString()

console.log(2 === 6);
console.log(4 === 4);

let surName;
console.log(typeof (surName));
surName = undefined;
console.log(typeof (surName));


const list = [1, 2, 3, 4, 5];
let felipe = {
  name: "Felipe",
  surName: "Rocha",
  prof: "Dev",
  age: 25
};

console.log(felipe);
console.log(felipe.surName);
console.log("Felipe's age's " + felipe.age);
felipe.age = 26;
console.log("Felipe's age's " + felipe.age);

let denylson = {
  name: "Denylson",
  surName: "Miguel",
  prof: "Student",
  age: "14"
};

console.log(denylson.prof);

const firstClasses = ["6a", "6b", "6c", "6d", "6e", "6f"];

const class6b = firstClasses[2];

firstClasses.push["6f"];
firstClasses.unshift("9b");

firstClasses.pop();

firstClasses[3] = "7b";
console.log(firstClasses);

console.log(firstClasses.indexOf("9b"));
console.log(firstClasses.indexOf("7b"));

const sortedClasses = firstClasses.sort()
console.log(sortedClasses.length);

const sortedClassesArray = Array.isArray(sortedClasses);
console.log(sortedClassesArray)

const namesArray = Array.isArray(names)
console.log(namesArray);


