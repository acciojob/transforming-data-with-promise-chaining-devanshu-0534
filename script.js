const input = document.getElementById("ip");
const button = document.getElementById("btn");
const output = document.getElementById("output");

button.onclick = function () {
  const value = Number(input.value);

  // First Promise (2 seconds)
  new Promise((resolve) => {
    setTimeout(() => {
      output.textContent = `Result: ${value}`;
      resolve(value);
    }, 2000);
  })

    // Second Promise (1 second)
    .then((num) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = num * 2;
          output.textContent = `Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })

    // Third Promise (1 second)
    .then((num) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = num - 3;
          output.textContent = `Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })

    // Fourth Promise (1 second)
    .then((num) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = num / 2;
          output.textContent = `Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })

    // Fifth Promise (1 second)
    .then((num) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = num + 10;
          output.textContent = `Final Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    });
};
