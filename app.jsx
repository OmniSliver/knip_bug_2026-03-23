import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router'

import Index from './index.jsx'

const lazyAdmin = async () => {
  const { default: Admin } = await import(
    /* webpackChunkName: "admin" */ './admin.jsx'
  )
  return {
    element: <Admin />,
  }
}

const routes = createRoutesFromElements(
  <Route>
    <Route element={<Index />} index />
    <Route lazy={lazyAdmin} path='/admin' />
  </Route>,
)

const router = createBrowserRouter(routes)

const App = () => {
  return <RouterProvider router={router} />
}

export default App
