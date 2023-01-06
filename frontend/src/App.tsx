import { lazy } from 'react';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import {
  Outlet,
  RouterProvider,
  createReactRouter,
  createRouteConfig,
} from '@tanstack/react-router'

import { Home } from './pages/Home';
import { CreateQuestion } from './pages/CreateQuestion';
import { PageLayout } from './layouts/PageLayout';

const queryClient = new QueryClient();

const persister = createSyncStoragePersister({
  storage: window.localStorage,
});

const rootRoute = createRouteConfig({
  component: () => (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
    >
      <PageLayout>
        <Outlet />
      </PageLayout>
      <ReactQueryDevtools />
    </PersistQueryClientProvider>
  )
})

const homeRoute = rootRoute.createRoute({
  path: '/',
  component: Home,
})

const createQuestionRoute = rootRoute.createRoute({
  path: '/questions/create',
  component: CreateQuestion,
})

const routeConfig = rootRoute.addChildren([homeRoute, createQuestionRoute])

const router = createReactRouter({ routeConfig })

const App = () => (
  <>
    <RouterProvider router={router} />
  </>

);

declare module '@tanstack/react-router' {
  interface RegisterRouter {
    router: typeof router
  }
}

export default App;
