import { RouterProvider, createBrowserRouter } from 'react-router';

import { ROUTES } from '@/shared/model';

import { AppLayout } from './app-layout';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: ROUTES.posts,
        lazy: () => import('@/pages/posts')
      },
      {
        path: ROUTES.postDetails,
        lazy: () => import('@/pages/post-details')
      }
    ]
  }
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
