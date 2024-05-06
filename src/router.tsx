import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Metric from "./pages/Metric/Metric";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Not found!</h1>,
  },
  {
    path: "/:metricName",
    element: <Metric />,
    errorElement: <h1>Not found!</h1>,
  },
]);

export default router;
