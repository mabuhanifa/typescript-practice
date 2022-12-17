/*  / -- read-only-property -- /  */
const reallyConst = [1, 2, 3] as const;

// reallyConst[0] = 50; -> Cannot assign to '0' because it is a read-only property.
