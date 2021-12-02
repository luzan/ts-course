// const person: {
//   name: string;
//   age: number;
// }
const person = {
  name: "Luzan",
  age: 28,
  hobbies: ["Sports", "Cooking"],
};

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
