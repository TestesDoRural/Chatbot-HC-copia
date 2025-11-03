import BotaoVoltar from "../components/BotaoVoltar"

const PortalPaciente = () => {
  return (
    <main>
      <div>
        <h1>Portal do Paciente</h1>
        <p>Bem-vindo ao portal do paciente. Aqui você pode gerenciar suas consultas e acessar informações importantes.</p>
    
      </div>
    <div className='flex justify-center'>
      <BotaoVoltar />
    </div>
    </main>
    
  );
};

export default PortalPaciente;