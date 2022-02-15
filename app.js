var fs = require("fs");

async function parse(str) {
  let result = [];
  if (!str) return [];
  for (const line of str.trim().split("\n")) {
    result.push(JSON.parse(line));
  }
  return result;
}

function forAlaa(data) {
  try {
    var data = fs.readFileSync(data, "utf8");
    return parse(data);
  } catch (e) {
    console.log("Error:", e.stack);
  }
}

const result = forAlaa("data.txt");

result.then((array) => {
  let foo = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    foo.push(
      element.properties.value == 0
        ? "webhook sms phone"
        : element.properties.value
    );
  }
  console.log(foo);
});
