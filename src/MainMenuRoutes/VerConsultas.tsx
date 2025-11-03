import type { Consulta } from '../App'; 
import BotaoVoltar from "../components/BotaoVoltar"


interface VerConsultasProps {
  consultas: Consulta[]; 
}

const VerConsultas = ({ consultas }: VerConsultasProps) => {
    return(
<main className="flex-grow p-4 sm:p-8">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto mt-10">
    
    {consultas.length === 0 && (
      <div className="md:col-span-2 text-center mt-30 sm:mt-50  text-gray-600">
        <p className="text-xl">Nenhuma consulta marcada ainda.</p>
        <p>Vá para a página "Marcar Consulta" para agendar a sua.</p>
      </div>
    )}

   
    {consultas.map((consulta) => (
      // Usamos o ID da consulta como 'key'
      <div 
        key={consulta.id} 
        className="bg-white rounded-xl shadow-md border border-blue-400 p-6"
      >
        <h3 className="text-lg font-bold text-blue-600 mb-4">Consulta Marcada</h3>
        <p><strong>Doutor:</strong> {consulta.doutor}</p>
        <p><strong>Horário da Consulta:</strong> {consulta.horario}</p>
        <p><strong>Especialidade:</strong> {consulta.especialidade}</p>
        
        {consulta.observacao && (
          <p className="text-sm text-gray-500 mt-2">
            {consulta.observacao}
          </p>
        )}
      </div>
    ))}

  </div>
  <div className="flex justify-center left-0 right-0">
    <BotaoVoltar />
  </div>
</main>
    );
}

export default VerConsultas;