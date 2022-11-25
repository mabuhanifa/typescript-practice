enum RType {
  SUCCESS,
  FAILURE,
  UNAUTHENTICATED,
  FORBIDDEN,
}

interface APIResponse<T> {
  status: number;
  type: RType;
  data: T;
}

const responseSample: APIResponse<object> = {
  status: 200,
  type: RType.FAILURE,
  data: {
    name: "Test",
    data: 300,
  },
};

export {};
