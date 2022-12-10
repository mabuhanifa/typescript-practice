const names: Array<string> = []; /* Array<string> === string[] */
names[0].split("."); /* All string methods will be available  */

const promise = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve("this is done");
  }, 200);
});

promise.then((data) => {
  data.split(",");
  /* All string methods will be available as the promise was type of string .Others methods will not be available */
});
