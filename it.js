let person = {
  name: "jack",
  mark: 700,
};
console.log(person);
person.mark = 800;
person["name"] = "rose";
console.log(person);
console.log(Object.keys(person));
console.log(Object.entries(person));
let colors = [];
