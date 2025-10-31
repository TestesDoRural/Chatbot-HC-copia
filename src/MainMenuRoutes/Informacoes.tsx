import { Link } from "react-router-dom";


const Informacoes = () => {
    return (
    <main className="flex flex-col justify-center items-center mt-10 gap-10">
        <div className="flex flex-col justify-center items-center border-1 border-blue-300 bg-white p-5 rounded-2xl shadow-2xl text-2xl sm:w-2/3">
            <h1 className="text-blue-800 text-3xl text-center sm:mb-3">Informações Importantes</h1>
            <p className="text-center mt-2">Aqui você encontrará informações relevantes sobre nossos serviços.</p>
        </div>
        <article className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] md:grid-cols-3 sm:w-2/3">
            <div className="m-5 p-5 border-1 border-blue-300 bg-white rounded-2xl shadow-2xl flex flex-col items-center justify-center">
                <h2 className="text-blue-800 text-2xl mb-2 ">Horário de Atendimento</h2>
                <p>Segunda a Sexta: 8h às 18h</p>
            </div>
            <div className="m-5 p-5 border-1 border-blue-300 bg-white rounded-2xl shadow-2xl flex flex-col items-center justify-center">
                <h2 className="text-blue-800 text-2xl mb-2">Localização</h2>
                <p className="text-center">ℹ️ Informações Gerais e de Segurança</p>
                <ul className="text-left list-disc ml-5 space-y-2">
                    <li>Itens que se aplicam a todos que circulam pelo hospital.</li>
                    <li>Protocolos de Saúde Atuais:</li>
                    <li>Qualquer regra vigente sobre uso de máscaras, higienização das mãos ou restrições de entrada para pessoas com sintomas gripais.</li>
                </ul>
                <ul className="text-left list-disc ml-5 space-y-2">
                    <li>
                        <strong>Localização e Como Chegar:</strong>
                    </li>
                        <li>
                            <strong>Mapas do Complexo:</strong>
                            <ul className="list-decimal ml-5">
                                <li>Mapa/guia indicando onde fica cada especialidade/instituto.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Telefones Úteis:</strong>
                            <ul className="list-decimal ml-5">
                                <li>Central de Atendimento/Informações.</li>
                                <li>Ouvidoria (elogios, sugestões ou reclamações).</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Segurança:</strong>
                            <ul className="list-decimal ml-5">
                                <li>Regras básicas (ex.: "Não fume nas dependências do hospital", "Cuide dos seus pertences").</li>
                            </ul>
                        </li>
                    </ul>

                <p className="text-xl mt-5">Para ver as unidades</p>
                <div className="w-2/3 h-10 mt-4 bg-blue-600 flex justify-center items-center rounded-full shadow-2xl hover:transform hover:scale-105 transition-transform duration-300 cursor-pointer"><Link to="/Localizacao" className="text-white">Clique Aqui</Link></div>
            </div>
            <div className="m-5 p-5 border-1 border-blue-300 bg-white rounded-2xl shadow-2xl flex flex-col items-center justify-center ">
                <h2 className="text-blue-800 text-2xl mb-2">Horário de Atendimento</h2>
                <p>Segunda a Sexta: 8h às 18h</p>
            </div>
            <div className="m-5 p-5 border-1 border-blue-300 bg-white rounded-2xl shadow-2xl flex flex-col items-center justify-center">
                <h2 className="text-blue-800 text-2xl mb-2">Horário de Atendimento</h2>
                <p>Segunda a Sexta: 8h às 18h</p>
            </div>
        </article>
    </main>
    );
}

export default Informacoes; 