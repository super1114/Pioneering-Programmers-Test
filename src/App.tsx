
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Dashboard from "./Pages/Dashboard";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Header from "./Pages/Header";
import Sidebar from "./Pages/Sidebar";

import * as css from './App.css';

import ThemeProvider from "./providers/themeProvider";

const router = createBrowserRouter([
  {
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: '/page1',
        element: <Page1 />,
      },
      {
        path: '/page2',
        element: <Page2 />,
      }
    ],
  },
]);

function App() {
  return (
    <ThemeProvider>
      <div className={css.layout}>
        <Header />
        <div className={css.content}>
          <Sidebar />
          <RouterProvider router={router} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
