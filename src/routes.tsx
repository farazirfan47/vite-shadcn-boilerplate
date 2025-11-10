import { RouteObject } from 'react-router-dom'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'

/**
 * Application routes configuration
 * 
 * To add a new route:
 * 1. Create a new page component in src/pages/
 * 2. Import it at the top of this file
 * 3. Add a new route object to the array below
 * 
 * Example:
 * {
 *   path: '/your-path',
 *   element: <YourPage />
 * }
 */
export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]

