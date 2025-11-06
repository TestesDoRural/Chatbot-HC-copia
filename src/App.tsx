import Header from "./components/header";
import Integrantes from "./OtherRoutes/Integrantes";
import ContatoComHC from "./OtherRoutes/ContatoComHC";
import MenuPrincipal from "./OtherRoutes/MenuPrincipal";
import Faq from "./MainMenuRoutes/faq";
import Footer from "./components/Footer";
import Sobre from "./OtherRoutes/SobreNos";
import PortalPaciente from "./MainMenuRoutes/PortalPaciente";
import MainHome from "./OtherRoutes/MainHome";
import VerConsultas from "./MainMenuRoutes/VerConsultas";
import MarcarConsulta from "./MainMenuRoutes/MarcarConsulta/MarcarConsulta";
import Localizacao from "./OtherRoutes/Localizacao";
import UnidadeDetalhe from "./OtherRoutes/unidadeDetalhes";
import SuporteSite from "./MainMenuRoutes/SuporteSite";
import { Routes, Route } from "react-router-dom";
import ScrollTopPage from "./components/ScrollTopPage"; 
import VLibras from "./components/VLibras";
import Informacoes from "./MainMenuRoutes/Informacoes";
import ExitPage from './OtherRoutes/ExitPage';

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <ScrollTopPage />
        <VLibras />
        <main className="flex-grow bg-gradient-to-b from-blue-50 to-white">
          <Routes>
            <Route path="/" element={<MainHome />} />
            <Route path="/MenuPrincipal" element={<MenuPrincipal />} />
            <Route path="/Integrantes" element={<Integrantes />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/ContatoComHC" element={<ContatoComHC />} />
            <Route path="/SobreNos" element={<Sobre />} />
            <Route path="/PortalPaciente" element={<PortalPaciente />} />
            <Route path="/VerConsultas" element={<VerConsultas />} /> 
            <Route path="/MarcarConsulta" element={<MarcarConsulta />} />
            <Route path="/Localizacao" element={<Localizacao />} />
            <Route path="/Unidades/:unidadeId" element={<UnidadeDetalhe />} />
            <Route path="/SuporteSite" element={<SuporteSite />} />
            <Route path="/Informacoes" element={<Informacoes />} />
            <Route path="/ExitPage" element={<ExitPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
