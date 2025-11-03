import React, { useState } from 'react';
import type { Consulta } from '../App';
import BotaoVoltar from "../components/BotaoVoltar"

interface MarcarConsultaProps {
  onMarcarConsulta: (novaConsulta: Omit<Consulta, 'id'>) => void;
}

const MarcarConsulta = ({ onMarcarConsulta }: MarcarConsultaProps) => {
  const [doutor, setDoutor] = useState('');
  const [horario, setHorario] = useState('');
  const [especialidade, setEspecialidade] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Impede o recarregamento da página

    if (!doutor || !horario || !especialidade) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    onMarcarConsulta({
      doutor,
      horario,
      especialidade,
      observacao: 'Chegar com 15 minutos de antecedência.'
    });

    setDoutor('');
    setHorario('');
    setEspecialidade('');
    alert('Consulta marcada com sucesso!');
  };

  return (
    <main className="flex flex-col justify-center items-center mt-10">
      <div className="flex flex-col justify-center items-center p-10 border border-blue-300 rounded-lg shadow-lg bg-white w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6">Marcar Consulta</h1>
        
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <div>
            <label htmlFor="doutor" className="block text-sm font-medium text-gray-700">
              Nome do Doutor
            </label>
            <input
              type="text"
              id="doutor"
              value={doutor}
              onChange={(e) => setDoutor(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
              placeholder="Ex: Dr. Giovane Amato"
            />
          </div>
          
          <div>
            <label htmlFor="especialidade" className="block text-sm font-medium text-gray-700">
              Especialidade
            </label>
            <input
              type="text"
              id="especialidade"
              value={especialidade}
              onChange={(e) => setEspecialidade(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
              placeholder="Ex: Cardiologista"
            />
          </div>

          <div>
            <label htmlFor="horario" className="block text-sm font-medium text-gray-700">
              Horário da Consulta
            </label>
            <input
              type="time"
              id="horario"
              value={horario}
              onChange={(e) => setHorario(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors mt-4"
          >
            Marcar
          </button>
        </form>
      </div>
      <div className='flex justify-center'>
        <BotaoVoltar />
      </div>
    </main>
  );
};

export default MarcarConsulta;