const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "Enter up to three characters for the text of your logo.",
      name: "text",
      validate: function (value) {
        const valid = /^[a-zA-Z0-9]{1,3}$/.test(value);
        return valid
          ? true
          : "Please enter up to three alphanumeric characters.";
      },
    },
    {
      type: "input",
      message: "Enter a color keyword for the text color of your logo.",
      name: "textColor",
    },
    {
      type: "list",
      choices: ["Circle", "Triangle", "Square"],
      message: "Select a shape for your logo.",
      name: "shape",
    },
    {
      type: "input",
      message: "Enter a color keyword for the shape color of your logo.",
      name: "shapeColor",
    },
  ])
  .then((answers) => {
    console.log(answers);
  })
  .catch((error) => {
    console.log(error);
  });
