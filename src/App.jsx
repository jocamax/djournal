import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import { MantineProvider, Text } from "@mantine/core"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import GetStarted from "./pages/getStarted/GetStarted"
import AddDream from "./pages/addDream/AddDream"
import SingleDream from "./pages/singleDream/SingleDream"
import Register from "./pages/register/Register"
import Login from "./pages/login/Login"
import NavbarMobile from "./components/navbarMobile/NavbarMobile"
import PublicDreams from "./pages/publicDreams/PublicDreams"
import Account from "./pages/account/Account"

function App() {
  const Layout = () => {
    return (
      <div className='app'>
        <MantineProvider theme={{ colorScheme: "dark" }}>
          <Navbar />
          <Outlet />
          <NavbarMobile />
        </MantineProvider>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "/dream/:id",
          element: <SingleDream />,
        },
        {
          path: "/explore",
          element: <PublicDreams />,
        },
        {
          path: "/account",
          element: <Account />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/getStarted",
      element: <GetStarted />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/add",
      element: <AddDream />,
    },
  ])

  return <RouterProvider router={router} />
}

export default App
