import { RouterProvider } from "react-router-dom";
import router from "./routes/app-routes";
import { Toaster } from "sonner";
import { AuthProvider } from "./context/AuthProvider";


function App() {
  return (
    <AuthProvider>
      <Toaster position="top-right"  />
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
