// Main.tsx
import { useState } from "react";
import Card from "../components/MenuCard";


const Main = () => {
  const [openChatbot, setOpenChatbot] = useState(false);

  const opcoes = [
    {
      img: "/imagens/chatbot.png",
      texto: "Chatbot",
      path: "#", // ou vazio
      onClick: () => setOpenChatbot(true),
    },
  ];

  return (
    <main className="relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {opcoes.map((op, idx) => (
          <div
            key={idx}
            onClick={op.onClick}
            className="cursor-pointer"
          >
            <Card img={op.img} texto={op.texto} path={op.path} />
          </div>
        ))}
      </div>

      {openChatbot && (
        <div className="fixed bottom-4 right-4 w-96 h-96 bg-white shadow-lg rounded-xl">
        </div>
      )}
    </main>
  );
};

export default Main;
