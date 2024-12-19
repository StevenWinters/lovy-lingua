import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";
import LearnPage from "./pages/LearnPage";
import ContactPage from "./pages/ContactPage";
import FlavorsPage from "./pages/FlavorsPage";
import Test from "./components/Test";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "quiz",
        element: <QuizPage />,
      },
      {
        path: "test/:id",
        element: <Test />,
      },
      {
        path: "learn",
        element: <LearnPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "flavors",
        element: <FlavorsPage />,
      },
    ],
  },
]);

export default router;
