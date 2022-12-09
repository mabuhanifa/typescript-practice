const names: Array<string> = []; /* Array<string> === string[] */
names[0].split("."); /* All string methods will be available  */

const promise = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve("this is done");
  }, 200);
});
