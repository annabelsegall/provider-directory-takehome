
import App from './App';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import ProviderSingle from './components/provider-single/provider-single';
import {ProviderPage} from './components/provider-page/provider-page'

export function AppRouter() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/providers/:lang/:region/" element={<ProviderPage />}/>
        <Route path="/providers/:lang/:region/:providerId" element={<ProviderSingle />} />
        <Route path="/providers/:providerId" element={<ProviderSingle />} />
    </Routes>
  </BrowserRouter>
);
}

export default AppRouter;
