const projects = [
  {
    value: "jquery",
    label: "jQuery",
    desc: "the write less, do more, JavaScript library",
    icon: "jquery_32x32.png",
  },
  {
    value: "jquery-ui",
    label: "jQuery UI",
    desc: "the official user interface library for jQuery",
    icon: "jqueryui_32x32.png",
  },
  {
    value: "sizzlejs",
    label: "Sizzle JS",
    desc: "a pure-JavaScript CSS selector engine",
    icon: "sizzlejs_32x32.png",
  },
];

const newProjects = projects.map((p) =>
  p.value === "jquery-ui" ? { ...p, desc: "new description" } : p
);
//console.log(newProjects);

const state = [
  {
    id: 100,
    title: "delectus aut autem",
    completed: false,
  },
  {
    id: 101,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    id: 102,
    title: "fugiat veniam minus",
    completed: false,
  },
];

const newState = state.map((obj) =>
  obj.id === 101 ? { ...obj, completed: true } : obj
);
//console.log(newState);

let myArray = [
  { id: 0, name: "Jhon" },
  { id: 1, name: "Sara" },
  { id: 2, name: "Domnic" },
  { id: 3, name: "Bravo" },
];

const newArray = myArray.map((data) =>
  data.id === 2 ? { ...data, name: "lala" } : data
);
console.log(newArray);

// const index = myArray.findIndex((obj) => obj.id === 2);
// myArray[index].name = "Lala";
// console.log(myArray);
// [
//   { id: 0, name: 'Jhon' },
//   { id: 1, name: 'Sara' },
//   { id: 2, name: 'Lala' },
//   { id: 3, name: 'Bravo' }
// ]
