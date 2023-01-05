import axios from 'axios';
import { useQuery, QueryClient } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import './App.css';

const queryClient = new QueryClient();

const persister = createSyncStoragePersister({
  storage: window.localStorage,
});

type Question = {
  id: number;
  title: string;
  body: string;
};

function useQuestions() {
  return useQuery({
    queryKey: ['questions'],
    queryFn: async (): Promise<Array<Question>> => {
      const { data } = await axios.get<Array<Question>>(
        'http://127.0.0.1:8001/questions'
      );
      return data;
    },
  });
}

function Questions() {
  const { data, isLoading } = useQuestions();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data?.map((question) => (
        <div key={question.id}>
          <h3>{question.title}</h3>
          <p>{question.body}</p>
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
    >
      <div className="App">
        <h1>Getting Started</h1>

        <Questions />
      </div>
      <ReactQueryDevtools />
    </PersistQueryClientProvider>
  );
}

export default App;
