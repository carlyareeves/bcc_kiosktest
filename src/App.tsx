import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material";

import "./App.scss";
import { wireframeTheme } from "./styles/wireframeTheme";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Transport from "./pages/Transport";
import RootLayout from "./layouts/RootLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="events" element={<Events />} />
        <Route path="transport" element={<Transport />} />
      </Route>
    )
  );

  return (
    <ThemeProvider theme={wireframeTheme}>
      <CssBaseline enableColorScheme />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
