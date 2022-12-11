function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

extractAndConvert({ name: "dhaka" }, "name");
extractAndConvert({ age: 25 }, "age");
extractAndConvert({ phone: 8564641 }, "phone");
// extractAndConvert({ contact: 8564641 }, "phone"); -> error key did not match
