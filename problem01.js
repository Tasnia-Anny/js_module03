function printObjectProperties(obj) {
  if (Object.keys(obj).length === 0) {
    console.log("Object is empty");
    return;
  }

  for (const property in obj) {
    console.log(`${property}: ${obj[property]}`);
  }
}

// Test cases
const person = {
  name: "John",
  age: 30,
  profession: "Engineer"
};

const emptyObject = {};

printObjectProperties(person);

printObjectProperties(emptyObject);

