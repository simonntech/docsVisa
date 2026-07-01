import { useState } from "react";
import activities from "./data/activities";
import documentosLicencaSanitaria from "./data/documents";
import servicosAdministrativos from "./data/administrative";
import fontesIonizantes from "./data/radiation"; // Nova importação

import logoAndradina from "./assets/andradina.png";
import logoGithub from "./assets/github.png";

function App() {
  const [activeTab, setActiveTab] = useState("cnae"); // 'cnae', 'servicos', ou 'radiacao'
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [selectedServico, setSelectedServico] = useState(null);

  // Filtro de CNAE
  const filteredActivities = activities.filter((activity) => {
    if (!searchTerm) return false;
    const term = searchTerm.toLowerCase();
    return (
      activity.cnae.toLowerCase().includes(term) ||
      activity.descricao.toLowerCase().includes(term) ||
      activity.compreende.some((desc) => desc.toLowerCase().includes(term))
    );
  });

  const getDocumentsDetails = (docCodes) => {
    return docCodes
      .map((code) =>
        documentosLicencaSanitaria.find((doc) => doc.codigo == code),
      )
      .filter(Boolean);
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col font-sans">
      {/* Header */}
      <div className="bg-[#212529] text-[#f8f9fa]">
        <div className="text-center p-2">
          <h1 className="text-[2rem] font-medium m-0 flex items-center justify-center gap-2">
            <img
              src={logoAndradina}
              alt="Logo Andradina"
              className="w-12.5"
            />
            VISAM - Andradina/SP
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="grow w-[80%] mx-auto mt-12.5 mb-8">
        <div className="bg-white border border-[rgba(0,0,0,.125)] rounded-md flex flex-col min-w-0 wrap-break-word shadow-sm">
          <div className="py-3 px-4 bg-[rgba(0,0,0,.03)] border-b border-[rgba(0,0,0,.125)] text-center">
            <h3 className="text-[1.75rem] font-medium leading-tight m-0">
              Docs VISA - Licença Sanitária
            </h3>
            <p className="text-[#6c757d] text-center m-0 mt-2">
              Busca de Documentos Exigidos para Licenciamento
            </p>
            <p>
              <span>
                Conforme{" "}
                <a
                  href="https://cvs.saude.sp.gov.br/"
                  class="text-blue-500 hover:text-blue-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Portaria CVS 1 de 2024
                </a>
                , atualizada em 13/05/2026.
              </span>
            </p>
          </div>

          <div className="p-4 flex-auto">
            {/* Abas de Navegação */}
            <div className="flex flex-wrap justify-center border-b border-[#dee2e6] mb-6 gap-2">
              <button
                className={`px-4 py-3 font-medium text-[1.1rem] border-b-[3px] transition-colors ${activeTab === "cnae" ? "border-[#0d6efd] text-[#0d6efd]" : "border-transparent text-[#6c757d] hover:border-[#dee2e6]"}`}
                onClick={() => {
                  setActiveTab("cnae");
                  setSelectedActivity(null);
                }}
              >
                Por Atividade (CNAE)
              </button>
              <button
                className={`px-4 py-3 font-medium text-[1.1rem] border-b-[3px] transition-colors ${activeTab === "servicos" ? "border-[#0d6efd] text-[#0d6efd]" : "border-transparent text-[#6c757d] hover:border-[#dee2e6]"}`}
                onClick={() => {
                  setActiveTab("servicos");
                  setSelectedServico(null);
                }}
              >
                Alteração / Renovação
              </button>
              <button
                className={`px-4 py-3 font-medium text-[1.1rem] border-b-[3px] transition-colors ${activeTab === "radiacao" ? "border-[#0d6efd] text-[#0d6efd]" : "border-transparent text-[#6c757d] hover:border-[#dee2e6]"}`}
                onClick={() => {
                  setActiveTab("radiacao");
                }}
              >
                Fontes Ionizantes
              </button>
            </div>

            {/* ABA 1: CNAE (Mantida exatamente como antes) */}
            {activeTab === "cnae" && (
              <>
                <div className="flex w-full mb-4 px-2">
                  <input
                    type="text"
                    placeholder="Digite a atividade (CNAE, nome ou descrição)"
                    className="block w-full px-3 py-1.5 text-base font-normal text-[#212529] bg-white border border-[#ced4da] rounded-md transition ease-in-out focus:text-[#212529] focus:bg-white focus:border-[#86b7fe] focus:outline-none focus:ring-4 focus:ring-[rgba(13,110,253,.25)]"
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setSelectedActivity(null);
                    }}
                    autoComplete="off"
                  />
                </div>

                {searchTerm && !selectedActivity && (
                  <div className="d-grid gap-2 my-2 px-2">
                    {filteredActivities.length > 0 ? (
                      <ul className="border border-[#ced4da] rounded-md6 overflow-y-auto m-0 p-0 list-none">
                        {filteredActivities.map((activity) => (
                          <li
                            key={activity.cnae}
                            className="p-3 border-b border-[#ced4da] last:border-0 hover:bg-[#f8f9fa] cursor-pointer"
                            onClick={() => setSelectedActivity(activity)}
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <span className="font-bold text-[#0d6efd]">
                                  {activity.cnae}
                                </span>
                                <h6 className="text-[#212529] font-medium m-0 mt-1">
                                  {activity.descricao}
                                </h6>
                              </div>
                              <span
                                className={`px-2 py-1 rounded-md text-sm font-bold ${
                                  activity.risco === "ALTO"
                                    ? "bg-[#f8d7da] text-[#842029]"
                                    : "bg-[#fff3cd] text-[#664d03]"
                                }`}
                              >
                                {activity.risco}
                              </span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <h6 className="text-center text-[#6c757d] mt-3">
                        Nenhuma atividade encontrada.
                      </h6>
                    )}
                  </div>
                )}

                {selectedActivity && (
                  <div className="px-2 mt-4">
                    <div className="flex justify-between items-start mb-4 border-b pb-3">
                      <div>
                        <h4 className="text-[1.5rem] font-medium text-[#212529] m-0">
                          {selectedActivity.cnae}
                        </h4>
                        <h5 className="text-[1.25rem] text-[#6c757d] m-0 mt-1">
                          {selectedActivity.descricao}
                        </h5>
                      </div>
                      <button
                        onClick={() => setSelectedActivity(null)}
                        className="inline-block px-3 py-1.5 font-normal text-center text-[#212529] bg-transparent border border-[#212529] rounded-mdext-white hover:bg-[#212529] transition-colors"
                      >
                        Voltar
                      </button>
                    </div>

                    <div className="mb-4 p-3 bg-[#e7f1ff] text-[#052c65] border border-[#b6d4fe] rounded-md">
                      <h6 className="font-bold mb-2">Compreende:</h6>
                      <ul className="list-disc list-inside text-sm m-0">
                        {selectedActivity.compreende.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <h5 className="text-center mb-3 font-medium">
                      Documentos Exigidos
                    </h5>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse border border-[#dee2e6] mb-4">
                        <thead>
                          <tr className="bg-[rgba(0,0,0,.05)]">
                            <th className="p-2 border border-[#dee2e6] font-bold">
                              Cód
                            </th>
                            <th className="p-2 border border-[#dee2e6] font-bold">
                              Fase
                            </th>
                            <th className="p-2 border border-[#dee2e6] font-bold">
                              Documento
                            </th>
                            <th className="p-2 border border-[#dee2e6] font-bold">
                              Exigência
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {getDocumentsDetails(
                            selectedActivity.documentos.previos,
                          ).map((doc) => (
                            <tr
                              key={`prev-${doc.codigo}`}
                              className="bg-[#fff3cd]"
                            >
                              <td className="p-2 border border-[#dee2e6] font-medium">
                                {doc.codigo}
                              </td>
                              <td className="p-2 border border-[#dee2e6] text-[#664d03] font-bold">
                                {doc.tipo}
                              </td>
                              <td className="p-2 border border-[#dee2e6]">
                                {doc.nome}
                              </td>
                              <td className="p-2 border border-[#dee2e6] text-sm">
                                {doc.exigencia}
                              </td>
                            </tr>
                          ))}
                          {getDocumentsDetails(
                            selectedActivity.documentos.durante,
                          ).map((doc) => (
                            <tr key={`durante-${doc.codigo}`}>
                              <td className="p-2 border border-[#dee2e6] font-medium">
                                {doc.codigo}
                              </td>
                              <td className="p-2 border border-[#dee2e6] text-[#084298] font-bold">
                                {doc.tipo}
                              </td>
                              <td className="p-2 border border-[#dee2e6]">
                                {doc.nome}
                              </td>
                              <td className="p-2 border border-[#dee2e6] text-sm">
                                {doc.exigencia}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </>
            )}

            {/* ABA 2: SERVIÇOS ADMINISTRATIVOS */}
            {activeTab === "servicos" && (
              <>
                {!selectedServico ? (
                  <div className="d-grid gap-2 my-2 px-2">
                    <ul className="border border-[#ced4da] rounded-md list-none">
                      {servicosAdministrativos.map((servico) => (
                        <li
                          key={servico.id}
                          className="p-3 border-b border-[#ced4da] last:border-0 hover:bg-[#f8f9fa] cursor-pointer"
                          onClick={() => setSelectedServico(servico)}
                        >
                          <div className="flex items-center justify-between">
                            <h6 className="text-[#212529] font-medium m-0">
                              {servico.motivo}
                            </h6>
                            <span
                              className={`px-2 py-1 rounded-md text-sm font-bold ${
                                servico.tipo === "ALTERAÇÃO"
                                  ? "bg-[#cff4fc] text-[#055160]"
                                  : servico.tipo === "RENOVAÇÃO"
                                    ? "bg-[#d1e7dd] text-[#0f5132]"
                                    : "bg-[#f8d7da] text-[#842029]"
                              }`}
                            >
                              {servico.tipo}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="px-2 mt-4">
                    <div className="flex justify-between items-start mb-4 border-b pb-3">
                      <div>
                        <span className="inline-block px-2 py-1 mb-2 rounded-md text-sm font-bold bg-[#e9ecef] text-[#495057]">
                          {selectedServico.tipo}
                        </span>
                        <h4 className="text-[1.5rem] font-medium text-[#212529] m-0">
                          {selectedServico.motivo}
                        </h4>
                      </div>
                      <button
                        onClick={() => setSelectedServico(null)}
                        className="inline-block px-3 py-1.5 font-normal text-center text-[#212529] bg-transparent border border-[#212529] rounded-md hover:text-white hover:bg-[#212529] transition-colors"
                      >
                        Voltar
                      </button>
                    </div>

                    {selectedServico.notas.length > 0 && (
                      <div className="mb-4 p-4 bg-[#fff3cd] text-[#664d03] border border-[#ffecb5] rounded-md">
                        <h6 className="font-bold mb-2">
                          Observações Importantes:
                        </h6>
                        <ul className="list-disc list-inside text-[0.95rem] m-0 space-y-1">
                          {selectedServico.notas.map((nota, i) => (
                            <li key={i}>{nota}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <h5 className="text-center mb-3 font-medium">
                      Documentos Exigidos
                    </h5>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse border border-[#dee2e6] mb-4">
                        <thead>
                          <tr className="bg-[rgba(0,0,0,.05)]">
                            <th className="p-2 border border-[#dee2e6] font-bold">
                              Cód
                            </th>
                            <th className="p-2 border border-[#dee2e6] font-bold">
                              Fase
                            </th>
                            <th className="p-2 border border-[#dee2e6] font-bold">
                              Documento
                            </th>
                            <th className="p-2 border border-[#dee2e6] font-bold">
                              Exigência
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {selectedServico.documentos.length > 0 ? (
                            getDocumentsDetails(selectedServico.documentos).map(
                              (doc) => (
                                <tr
                                  key={`doc-${doc.codigo}`}
                                  className="hover:bg-[#f8f9fa]"
                                >
                                  <td className="p-2 border border-[#dee2e6] font-medium">
                                    {doc.codigo}
                                  </td>
                                  <td className="p-2 border border-[#dee2e6] text-[#495057] font-semibold">
                                    {doc.tipo}
                                  </td>
                                  <td className="p-2 border border-[#dee2e6]">
                                    {doc.nome}
                                  </td>
                                  <td className="p-2 border border-[#dee2e6] text-sm">
                                    {doc.exigencia}
                                  </td>
                                </tr>
                              ),
                            )
                          ) : (
                            <tr>
                              <td
                                colSpan="4"
                                className="p-4 text-center text-[#6c757d]"
                              >
                                Documentos específicos não listados diretamente.
                                Consulte as observações acima.
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </>
            )}

            {/* ABA 3: FONTES DE RADIAÇÃO IONIZANTE */}
            {activeTab === "radiacao" && (
              <div className="px-2 mt-4">
                <h5 className="text-center mb-6 font-medium text-[1.25rem] text-[#212529]">
                  Fontes de Radiação Ionizante Sujeitas a Licença Sanitária
                </h5>

                {fontesIonizantes.map((grupo, idx) => (
                  <div
                    key={idx}
                    className="mb-8 shadow-sm rounded-md overflow-hidden border border-[#dee2e6]"
                  >
                    <div className="bg-[#e9ecef] py-3 px-4 border-b border-[#dee2e6]">
                      <h6 className="font-bold text-[#495057] m-0">
                        {grupo.categoria}
                      </h6>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse bg-white">
                        <thead>
                          <tr>
                            <th className="p-3 border-b border-[#dee2e6] font-bold w-24 text-center text-[#212529]">
                              Cód
                            </th>
                            <th className="p-3 border-b border-[#dee2e6] font-bold text-[#212529]">
                              Tipo do Equipamento / Fonte
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {grupo.itens.map((item, itemIdx) => (
                            <tr
                              key={item.codigo}
                              className={
                                itemIdx % 2 === 0 ? "bg-white" : "bg-[#f8f9fa]"
                              }
                            >
                              <td className="p-3 border-b border-[#dee2e6] font-bold text-center text-[#0d6efd]">
                                {item.codigo}
                              </td>
                              <td className="p-3 border-b border-[#dee2e6] text-[#212529]">
                                {item.tipo}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#212529] text-[#f8f9fa] text-center p-2 mt-auto">
        <p className="m-0">
          Desenvolvido por{" "}
          <a
            href="https://github.com/simonntech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#0dcaf0] text-decoration-none"
          >
            <img
              src={logoGithub}
              alt="GitHub"
              className="inline w-4 h-4 mr-1 pb-1"
            />
            SimonTech
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
