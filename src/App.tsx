import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material";
import { wireframeTheme } from "./styles/wireframeTheme";
import "./App.scss";

import RootLayout from "./layouts/RootLayout";
import FullScreen from "./layouts/FullScreen";

import Home from "./pages/Home";
import Events from "./pages/Events";
import Transport from "./pages/Transport";
import Facilities from "./pages/Facilities";
import Guides from "./pages/Guides";
import PromoMap from "./pages/PromoMap";
import DormantFrames from "./pages/DormantFrames";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="events" element={<Events />} />
          <Route path="transport" element={<Transport />} />
          <Route path="facilities" element={<Facilities />} />
          <Route path="guides" element={<Guides />} />
        </Route>
        <Route element={<FullScreen />}>
          <Route path="/map" element={<PromoMap />} />
          <Route path="/dormant" element={<DormantFrames />} />
        </Route>
      </>
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
