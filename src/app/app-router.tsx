import { RouterProvider, createBrowserRouter } from 'react-router';

import { ROUTES } from '@/shared/model';

import { AppLayout } from './app-layout';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: ROUTES.POSTS,
        lazy: () => import('@/pages/posts')
      },
      {
        path: ROUTES.POST_DETAILS,
        lazy: () => import('@/pages/post-details')
      },
      {
        path: ROUTES.NOT_FOUND,
        lazy: () => import('@/pages/not-found')
      }
    ]
  }
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
