const flatten = (arr, parentKey = 1, result = []) => {
  Object.keys(arr).forEach((key) => {
    const propertyName = parentKey ? parentKey + "_" + key : key;
    if (typeof arr[key] === "object") {
      flatten(arr[key], propertyName, result);
    } else {
      result[propertyName] = arr[key];
    }
  });
  return result;
};

const array = [
  {
    person: {
      firstName: "John",
      lastName: "Doe",
      role: "Admin",
    },
    permissions: ["read", "write", "special"],
    age: 42,
    competencies: [
      { skill: "JavaScript", level: "junior" },
      { skill: "css", level: "junior" },
    ],
  },
  "sunny day",
  5,
];

console.log(flatten(array));
