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
import Walks from "./pages/Walks";
import Art from "./pages/PublicArt";
import Parks from "./pages/Parks";
import PromoMap from "./pages/PromoMap";
import PromoBapp from "./pages/PromoBapp";
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
          <Route path="parks" element={<Parks />} />
          <Route path="walks" element={<Walks />} />
          <Route path="art" element={<Art />} />
          <Route path="bapp" element={<PromoBapp />} />
        </Route>
        <Route element={<FullScreen />}>
          <Route path="/map" element={<PromoMap />} />
          <Route path="/dormant" element={<DormantFrames />} />
        </Route>
      </>,
    ),
  );

  return (
    <ThemeProvider theme={wireframeTheme}>
      <CssBaseline enableColorScheme />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
