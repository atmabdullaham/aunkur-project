import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { router } from "./routes/Routes.jsx";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AuthProver from "./providers/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProver>
      <RouterProvider router={router}></RouterProvider>
      <Toaster position="top-right" reverseOrder={false} />
    </AuthProver>
  </StrictMode>
);
