//Question 142: Create a Promise that resolves with "Hello, World!" after 2 seconds.

let helloPromise = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Hello, World!");
    }, 2000);
  });
  
  helloPromise.then((message) => console.log(message));