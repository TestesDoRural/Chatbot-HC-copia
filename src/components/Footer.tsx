import SuporteSiteLogo from "../assets/icones-menu/icone-suporte.jpeg"
import Sobre from "../assets/icones-menu/icone-sobre.jpeg"
import ContatoHC from "../assets/icones-menu/icone-contato.jpeg"

const Footer = () => {
  return (
    <footer className="bg-[#222] text-white text-center p-5 -mt-1.5">
      <div className="max-w-6xl mx-auto">
        <p className="mb-2 text-sm md:text-base">
          &copy; 2025 Projeto Chatbot HC — Todos os direitos reservados.
        </p>
        <p className="mb-4 text-xs md:text-sm">
          Desenvolvido por Giovane Amato, Lucas Vieira e Matheus Roque.
        </p>

        <div className="flex flex-row items-center justify-center gap-6">
          <a
            href="/sobre"
            title="Sobre Nós"
            className="hover:underline text-sm md:text-base transition-transform duration-300 hover:scale-150 inline w-8 h-8"
          >
            <img src= {Sobre} alt="Sobre nós"/>
          </a>
          <a
            href="/contato"
            title="ContatoHC"
            className="hover:underline text-sm md:text-base transition-transform duration-300 hover:scale-150 inline w-8 h-8"
          >
            <img src= {ContatoHC} alt="ContatoHC"/>
          </a>
          <a
            href="/SuporteSite"
            title="Suporte do Site"
            className="hover:underline text-sm md:text-base transition-transform duration-300 hover:scale-150 inline w-8 h-8"
          >
            <img src= {SuporteSiteLogo} alt="SuporteSite"/>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;