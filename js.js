const URL = `http://localhost:8181/new`;
const setting = {
  method: "POST",
  body: {
    title: "learn angular",
    description: "reading books",
    completed: false,
  },
};

fetch(URL, setting).then((result) => console.log(result));
