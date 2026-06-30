import { useState } from "react";
import activities from "./data/activities";
import documentosLicencaSanitaria from "./data/documents";

import logoAndradina from "./assets/andradina.png";
import logoGithub from "./assets/github.png";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedActivity, setSelectedActivity] = useState(null);

  // Filtra as atividades por CNAE, Descrição ou itens do array 'compreende'
  const filteredActivities = activities.filter((activity) => {
    if (!searchTerm) return false;

    const term = searchTerm.toLowerCase();
    return (
      activity.cnae.toLowerCase().includes(term) ||
      activity.descricao.toLowerCase().includes(term) ||
      activity.compreende.some((desc) => desc.toLowerCase().includes(term))
    );
  });

  // Função para buscar os detalhes do documento
  const getDocumentsDetails = (docCodes) => {
    return docCodes
      .map((code) =>
        documentosLicencaSanitaria.find((doc) => doc.codigo === code),
      )
      .filter(Boolean);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-sans">
      {/* Cabeçalho Escuro */}
      <div className="bg-[#212529] text-white p-2 text-center">
        <h1 className="flex items-center justify-center text-2xl font-medium m-0">
          <img src={logoAndradina} alt="Logo" className="w-12.5 mr-3" />
          VISAM - Andradina/SP
        </h1>
      </div>

      {/* Container Principal (Card) */}
      <div className="bg-white border border-gray-200 rounded-md grow shadow-sm w-[80%] mx-auto mt-12.5 mb-12.5">
        {/* Cabeçalho do Card */}
        <div className="border-b border-gray-200 bg-gray-50/50 p-4 text-center mb-4 rounded-t-md">
          <h3 className="text-2xl font-medium text-gray-800 m-0">
            Documentos Exigidos - Licença Sanitária
          </h3>
          <p>
            <span>
              Conforme{" "}
              <a
                href="https://cvs.saude.sp.gov.br/"
                className="text-blue-500 hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                Portaria CVS 1 de 2024
              </a>
              , atualizada em 13/05/2026.
            </span>
          </p>
          <p className="text-gray-500 mt-1 mb-0">
            Busque por atividade, descrição ou CNAE
          </p>
        </div>

        <div className="p-4">
          {/* Campo de Busca (Estilo form-control do Bootstrap) */}
          <div className="flex mb-4">
            <input
              type="text"
              id="searchInput"
              placeholder="Digite a atividade..."
              className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#86b7fe] focus:outline-none focus:ring-4 focus:ring-[#0d6efd40] mx-2"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setSelectedActivity(null);
              }}
              autoComplete="off"
            />
          </div>

          {/* Lista de Resultados */}
          {searchTerm && !selectedActivity && (
            <div className="mx-2 mb-2 border border-gray-200 rounded-md">
              {filteredActivities.length > 0 ? (
                <ul className="divide-y divide-gray-200 max-h-96 overflow-y-auto m-0 p-0 list-none">
                  {filteredActivities.map((activity) => (
                    <li
                      key={activity.cnae}
                      className="p-3 hover:bg-gray-100 cursor-pointer transition-colors flex justify-between items-center"
                      onClick={() => setSelectedActivity(activity)}
                    >
                      <div>
                        <strong className="text-gray-900">
                          {activity.cnae}
                        </strong>{" "}
                        -{" "}
                        <span className="text-gray-700">
                          {activity.descricao}
                        </span>
                      </div>
                      <span
                        className={`px-2 py-1 rounded text-xs font-bold ${
                          activity.risco === "ALTO"
                            ? "bg-[#f8d7da] text-[#842029]"
                            : "bg-[#fff3cd] text-[#664d03]"
                        }`}
                      >
                        Risco: {activity.risco}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="p-4 text-center text-gray-500 font-medium">
                  Nenhuma atividade encontrada.
                </div>
              )}
            </div>
          )}

          {/* Visualização da Atividade e Tabela */}
          {selectedActivity && (
            <div className="mx-2 mt-4 animate-fade-in">
              <div className="flex justify-between items-center mb-3">
                <h4 className="text-xl font-semibold text-gray-800">
                  {selectedActivity.cnae} - {selectedActivity.descricao}
                </h4>
                <button
                  onClick={() => setSelectedActivity(null)}
                  className="px-3 py-1 border border-gray-800 text-gray-800 rounded hover:bg-gray-800 hover:text-white transition-colors text-sm"
                >
                  Voltar para busca
                </button>
              </div>

              <div className="mb-4">
                <strong className="text-gray-700">Compreende:</strong>
                <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
                  {selectedActivity.compreende.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Tabela estilo Bootstrap */}
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm whitespace-nowrap border border-gray-200">
                  <thead className="uppercase tracking-wider border-b border-gray-200 bg-gray-50 text-gray-700">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 border-r border-gray-200"
                      >
                        Cód
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 border-r border-gray-200"
                      >
                        Fase
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 border-r border-gray-200"
                      >
                        Documento
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Exigência
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Documentos Prévios */}
                    {selectedActivity.documentos.previos.length > 0 &&
                      getDocumentsDetails(
                        selectedActivity.documentos.previos,
                      ).map((doc, idx) => (
                        <tr
                          key={`prev-${doc.codigo}`}
                          className={`border-b border-gray-200 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                        >
                          <td className="px-6 py-3 border-r border-gray-200 font-medium">
                            {doc.codigo}
                          </td>
                          <td className="px-6 py-3 border-r border-gray-200 text-[#fd7e14] font-bold">
                            {doc.tipo}
                          </td>
                          <td className="px-6 py-3 border-r border-gray-200 whitespace-normal">
                            {doc.nome}
                          </td>
                          <td className="px-6 py-3 whitespace-normal text-gray-600">
                            {doc.exigencia}
                          </td>
                        </tr>
                      ))}

                    {/* Documentos Durante */}
                    {selectedActivity.documentos.durante.length > 0 &&
                      getDocumentsDetails(
                        selectedActivity.documentos.durante,
                      ).map((doc, idx) => (
                        <tr
                          key={`durante-${doc.codigo}`}
                          className={`border-b border-gray-200 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                        >
                          <td className="px-6 py-3 border-r border-gray-200 font-medium">
                            {doc.codigo}
                          </td>
                          <td className="px-6 py-3 border-r border-gray-200 text-[#0d6efd] font-bold">
                            {doc.tipo}
                          </td>
                          <td className="px-6 py-3 border-r border-gray-200 whitespace-normal">
                            {doc.nome}
                          </td>
                          <td className="px-6 py-3 whitespace-normal text-gray-600">
                            {doc.exigencia}
                          </td>
                        </tr>
                      ))}

                    {/* Vazio */}
                    {selectedActivity.documentos.previos.length === 0 &&
                      selectedActivity.documentos.durante.length === 0 && (
                        <tr>
                          <td
                            colSpan="4"
                            className="px-6 py-4 text-center text-gray-500"
                          >
                            Nenhum documento especificado na base de dados.
                          </td>
                        </tr>
                      )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Rodapé Escuro */}
      <div className="bg-[#212529] text-white text-center p-2 mt-auto">
        <p className="m-0 text-sm">
          <img src={logoGithub} alt="GitHub" className="inline w-4 h-4 mx-1" />
          Desenvolvido por{" "}
          <a
            href="https://github.com/simonntech"
            target="_blank"
            rel="noreferrer"
            className="text-white underline hover:text-gray-300"
          >
            SimonTech
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
