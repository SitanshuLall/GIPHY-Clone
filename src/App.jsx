//homepage
//categories
//search
//singlegif
//favorites
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import Search from "./pages/Search";
import SingleGif from "./pages/SingleGif";
import Favorite from "./pages/Favorite";
import Category from "./pages/Category";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import GifProvider from "./context/GifContext";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:type/:slug",
        element: <SingleGif />,
      },
      {
        path: "/:category",
        element: <Category />,
      },
      {
        path: "/search/:query",
        element: <Search />,
      },
      {
        path: "/favorites",
        element: <Favorite />,
      },
    ],
  },
]);
function App() {
  return (
    <GifProvider>
      <div>
        <Toaster
          position="top-right"
          toastOptions={{
            success: {
              theme: {
                primary: "#4aed88",
              },
            },
          }}
        ></Toaster>
      </div>
      <RouterProvider router={router} />
    </GifProvider>
  );
}

export default App;
