/*
const simulateAPICall = <T>(data: T, delay: number = 1000): Promise<T> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
};

export const apiCalls = {
  getLists: (): Promise<string[]> => simulateAPICall(['List1', 'List2', 'List3']),

  addList: (newListName: string): Promise<string[]> => simulateAPICall(['List1', 'List2', 'List3', newListName]),

  deleteList: (listName: string): Promise<void> => simulateAPICall(undefined),
  
};

*/


</void>const jokeDataList = useDataList({
  handlerMap: {
    load: handleLoad,
    loadNext: handleLoadNext,
    create: handleCreate,
  },
  itemHandlerMap: {
    update: handleUpdate,
    delete: handleDelete,
    getImage: handleGetImage,
  },
  pageSize: 3,
});

const imageUrlListRef = useRef([]);

function handleLoad(dtoIn) {
  return Calls.Joke.list(dtoIn);
}

function handleLoadNext(dtoIn) {
  return Calls.Joke.list(dtoIn);
}

function handleCreate(values) {
  return Calls.Joke.create(values);
}

async function handleUpdate() {
  throw new Error("Joke update is not implemented yet.");
}

function handleDelete(joke) {
  const dtoIn = { id: joke.id };
  return Calls.Joke.delete(dtoIn, props.baseUri);
}