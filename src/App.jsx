
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import Home from './pages/Home'
import './App.css'
import Category from './pages/Category'
import Search from './pages/Search'
import GifPage from './pages/GifPage'
import Favourites from './pages/Favourites'

const router = createBrowserRouter([
    {
      element: <AppLayout />,

      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/:category",
          element: <Category />
        },
        {
          path: "/search/:query",
          element: <Search />
        },
        {
          path: "/:type/:slug",
          element: <GifPage />
        },
        {
          path: "/favourites",
          element: <Favourites />
        },
      ]
    }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
