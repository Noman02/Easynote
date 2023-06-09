import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Router";

function App() {
  return <div className="width-100%">
    <RouterProvider router={router}></RouterProvider>
  </div>;
}

export default App;
