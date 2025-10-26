import Header from "./components/header";
import Integrantes from "./routes/Integrantes";
import ContatoComHC from "./routes/ContatoComHC";
import MenuPrincipal from "./routes/MenuPrincipal";
import Faq from "./MainMenuRoutes/faq";
import Footer from "./components/Footer";
import Sobre from "./routes/sobre";
import PortalPaciente from "./MainMenuRoutes/PortalPaciente";
import MainHome from "./components/MainHome";
import VerConsultas from "./MainMenuRoutes/VerConsultas";
import MarcarConsulta from "./MainMenuRoutes/MarcarConsulta";
import Localizacao from "./routes/Localizacao";
import UnidadeDetalhe from "./routes/unidadeDetalhes";
import SuporteSite from "./MainMenuRoutes/SuporteSite";
import AtivarAcessiblidade from "./MainMenuRoutes/AtivarAcessiblidade";
import { Routes, Route } from "react-router-dom";
import ScrollTopPage from "./components/ScrollTopPage"; 

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <Header />
        <ScrollTopPage />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<MainHome />} />
            <Route path="/MenuPrincipal" element={<MenuPrincipal />} />
            <Route path="/integrantes" element={<Integrantes />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/ContatoComHC" element={<ContatoComHC />} />
            <Route path="/Sobre" element={<Sobre />} />
            <Route path="/PortalPaciente" element={<PortalPaciente />} />
            <Route path="/VerConsultas" element={<VerConsultas />} />
            <Route path="/MarcarConsulta" element={<MarcarConsulta />} />
            <Route path="/Localizacao" element={<Localizacao />} />
            <Route path="/Unidades/:unidadeId" element={<UnidadeDetalhe />} />
            <Route path="/SuporteSite" element={<SuporteSite />} />
            <Route path="/AtivarAcessiblidade" element={<AtivarAcessiblidade />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}
export default App;