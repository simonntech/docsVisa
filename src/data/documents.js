const documentosLicencaSanitaria = [
  // DOCUMENTOS PRÉVIOS À SOLICITAÇÃO INICIAL DE LICENÇA SANITÁRIA
  {
    codigo: 1,
    tipo: "Prévio",
    nome: "Autorização de Construção, emitida pela Comissão Nacional de Energia Nuclear (CNEN)",
    exigencia: "Cópia"
  },
  {
    codigo: 2,
    tipo: "Prévio",
    nome: "Comprovante de recolhimento (DARE ou equivalente municipal) da taxa de Laudo Técnico de Avaliação de Projeto de Edificação",
    exigencia: "Original"
  },
  {
    codigo: 3,
    tipo: "Prévio",
    nome: "Comprovante de Responsabilidade Técnica - ART (Anotação de Responsabilidade Técnica) ou RRT (Registro de Responsabilidade Técnica)",
    exigencia: "Cópia"
  },
  {
    codigo: 4,
    tipo: "Prévio",
    nome: "Memorial descritivo de fluxos e de atividades",
    exigencia: "Cópia"
  },
  {
    codigo: 5,
    tipo: "Prévio",
    nome: "Memorial descritivo do projeto arquitetônico da edificação",
    exigencia: "Cópia"
  },
  {
    codigo: 6,
    tipo: "Prévio",
    nome: "Projeto arquitetônico da edificação (jogos de plantas, completo)",
    exigencia: "Cópia"
  },
  {
    codigo: 7,
    tipo: "Prévio",
    nome: "Projeto do tratamento, destinação final ou afastamento dos efluentes gerados pelo empreendimento (Resolução 430/11 - CONAMA)",
    exigencia: "Cópia"
  },
  {
    codigo: 8,
    tipo: "Prévio",
    nome: "Projeto do tratamento, destinação final ou afastamento dos resíduos gerados pelo empreendimento (Lei 12305/2010 - Política Nacional de Resíduos Sólidos - PNRS)",
    exigencia: "Cópia"
  },
  {
    codigo: 9,
    tipo: "Prévio",
    nome: "Formulário de solicitação de avaliação físico funcional de projeto de edificação de estabelecimento de interesse da saúde (LTA) - Anexo 2 da Portaria CVS 10/2017",
    exigencia: "Formulário"
  },

  // DOCUMENTOS PARA SOLICITAÇÃO INICIAL DE LICENÇA SANITÁRIA (QUADRO 10)
  {
    codigo: 20,
    tipo: "Inicial",
    nome: "Autorização para preparo e uso de fontes radioativas não seladas, emitida pela Comissão Nacional de Energia Nuclear (CNEN)",
    exigencia: "Cópia com apresentação do original"
  },
  {
    codigo: 21,
    tipo: "Inicial",
    nome: "Cadastro de Pessoa Física (CPF)",
    exigencia: "Cópia, com apresentação do original ou com autenticação digital"
  },
  {
    codigo: 22,
    tipo: "Inicial",
    nome: "Documento da empresa que declara a destituição da responsabilidade legal",
    exigencia: "Original"
  },
  {
    codigo: 23,
    tipo: "Inicial",
    nome: "Cadastro Nacional de Pessoa Jurídica (CNPJ)",
    exigencia: "Cópia, com apresentação do original ou com autenticação digital"
  },
  {
    codigo: 25,
    tipo: "Inicial",
    nome: "Autorização para operação emitida pela Comissão de Energia Nuclear (CNEN)",
    exigencia: "Cópia"
  },
  {
    codigo: 26,
    tipo: "Inicial",
    nome: "Comprovante de endereço do empreendimento, quando a atividade for exercida por pessoa física",
    exigencia: "Cópia"
  },
  {
    codigo: 27,
    tipo: "Inicial",
    nome: "Comprovante de identidade do representante legal – Documento oficial de identidade de pessoa física, com foto (RG, CNH ou Carteira Funcional válida por lei federal)",
    exigencia: "Cópia, com apresentação do original ou com autenticação digital"
  },
  {
    codigo: 28,
    tipo: "Inicial",
    nome: "Comprovante de recolhimento (DARE ou equivalente municipal) da taxa de equipamentos de saúde ou comprovante de isenção de taxa",
    exigencia: "Original"
  },
  {
    codigo: 29,
    tipo: "Inicial",
    nome: "Comprovante de recolhimento (DARE ou equivalente municipal) da taxa de inspeção sanitária ou comprovante de isenção de taxa",
    exigencia: "Original"
  },
  {
    codigo: 30,
    tipo: "Inicial",
    nome: "Comprovante de recolhimento (DARE ou equivalente municipal) da taxa de rubrica de livros ou comprovante de isenção de taxa",
    exigencia: "Original"
  },
  {
    codigo: 31,
    tipo: "Inicial",
    nome: "Comprovante de recolhimento (DARE ou equivalente municipal) da taxa de termo de responsabilidade técnica ou comprovante de isenção de taxa",
    exigencia: "Original"
  },
  {
    codigo: 32,
    tipo: "Inicial",
    nome: "Comprovante de responsabilidade técnica, quando emitida pelo conselho profissional competente",
    exigencia: "Cópia com apresentação do original ou com autenticação digital"
  },
  {
    codigo: 33,
    tipo: "Inicial",
    nome: "Comprovante de vínculo empregatício ou comprovante de prestação de serviço registrado em cartório quando caracterizar prestação de serviço",
    exigencia: "Cópia"
  },
  {
    codigo: 34,
    tipo: "Inicial",
    nome: "Concessão de lavra para água mineral emitida pelo Departamento Nacional de Produção Mineral (DNPM)",
    exigencia: "Cópia da página do Diário Oficial da União com a publicação"
  },
  {
    codigo: 35,
    tipo: "Inicial",
    nome: "Contrato de aluguel",
    exigencia: "Cópia"
  },
  {
    codigo: 36,
    tipo: "Inicial",
    nome: "Contrato de atividade terceirizada",
    exigencia: "Cópia"
  },
  {
    codigo: 37,
    tipo: "Inicial",
    nome: "Contrato de dosimetria",
    exigencia: "Cópia com apresentação do original ou com autenticação digital"
  },
  {
    codigo: 38,
    tipo: "Inicial",
    nome: "Contrato social registrado em Cartório de Registro Civil de Pessoas Jurídicas quando se tratar de sociedade simples, associações e fundações",
    exigencia: "Cópia, com apresentação do original ou com autenticação digital"
  },
  {
    codigo: 39,
    tipo: "Inicial",
    nome: "Contrato social registrado na Jucesp – ME, EPP, entre outros",
    exigencia: "Cópia, com apresentação do original ou com autenticação digital"
  },
  {
    codigo: 40,
    tipo: "Inicial",
    nome: "Formulário de solicitação de atos de vigilância sanitária – Anexo III desta portaria",
    exigencia: "Formulário"
  },
  {
    codigo: 41,
    tipo: "Inicial",
    nome: "Formulário de atividade relacionada à prestação de serviço de interesse da saúde – Subanexo III.1 desta portaria",
    exigencia: "Formulário"
  },
  {
    codigo: 42,
    tipo: "Inicial",
    nome: "Formulário de equipamentos de interesse da saúde – Subanexo III.2 desta portaria",
    exigencia: "Formulário"
  },
  {
    codigo: 43,
    tipo: "Inicial",
    nome: "Formulário de atividade relacionada aos produtos de interesse da saúde – Subanexo III.3 desta portaria",
    exigencia: "Formulário"
  },
  {
    codigo: 44,
    tipo: "Inicial",
    nome: "Parecer da Associação Brasileira de Ortopedia Técnica (ABOTEC) que enquadra o responsável técnico como protesista-ortesista, protesista, ortesista ou sapateiro ortopédico",
    exigencia: "Parecer"
  },
  {
    codigo: 45,
    tipo: "Inicial",
    nome: "Habilitação profissional emitida pelo conselho de classe competente (ou na inexistência deste: diploma, certificados de especialização ou cédula profissional)",
    exigencia: "Cópia simples / Cópia frente e verso"
  },
  {
    codigo: 46,
    tipo: "Inicial",
    nome: "Licença sanitária das atividades contratadas (terceirizadas)",
    exigencia: "Cópia"
  },
  {
    codigo: 47,
    tipo: "Inicial",
    nome: "Plano de radioproteção",
    exigencia: "Cópia com apresentação do original ou com autenticação digital"
  },
  {
    codigo: 48,
    tipo: "Inicial",
    nome: "Programa de garantia de qualidade",
    exigencia: "Cópia com apresentação do original ou com autenticação digital"
  },
  {
    codigo: 49,
    tipo: "Inicial",
    nome: "Registro de especialização correspondente à atividade exercida, emitida pelo órgão competente",
    exigencia: "Cópia"
  },
  {
    codigo: 51,
    tipo: "Inicial",
    nome: "Formulário para credenciamento de unidades públicas dispensadoras (Anexo I da Resolução MS 11/2011 ou a que vier a substituí-la)",
    exigencia: "Cópia"
  },
  {
    codigo: 52,
    tipo: "Inicial",
    nome: "LTA – Laudo Técnico de Avaliação de projeto de edificação",
    exigencia: "Cópia da página do Diário Oficial do Estado de São Paulo ou do Município ou outro meio oficial"
  },
  {
    codigo: 53,
    tipo: "Inicial",
    nome: "Licença de Instalação ou de Operação emitida pela CETESB ou comprovante de requisição de regularização",
    exigencia: "Cópia"
  },
  {
    codigo: 54,
    tipo: "Inicial",
    nome: "Outorga DAEE",
    exigencia: "Cópia da publicação em DOE ou documento expedido pelo órgão competente"
  },
  {
    codigo: 55,
    tipo: "Inicial",
    nome: "Contrato firmado entre a empresa fabricante ou importadora e a empresa fracionadora de produtos e de forma física",
    exigencia: "Cópia"
  },
  {
    codigo: 56,
    tipo: "Inicial",
    nome: "Laudo laboratorial que atenda aos padrões microbiológico, turbidez, potabilidade para substâncias químicas, radioatividade e organolético de potabilidade da água para consumo humano",
    exigencia: "Cópia com apresentação do original ou com autenticação digital"
  },
  {
    codigo: 57,
    tipo: "Inicial",
    nome: "Documento da empresa que declara a destituição da responsabilidade técnica",
    exigencia: "Original"
  },
  {
    codigo: 58,
    tipo: "Inicial",
    nome: "Certificado de capacitação em Boas Práticas de Fabricação",
    exigencia: "Certificado"
  },
  {
    codigo: 59,
    tipo: "Inicial",
    nome: "Autodeclaração de conformidade físico funcional (Comunicado CVS-Ditep/Sersa 15/2023)",
    exigencia: "Declaração"
  },
  {
    codigo: 60,
    tipo: "Inicial",
    nome: "Projeto Arquitetônico Simplificado (PAS) composto por ART/RRT, memorial descritivo e conjunto de peças gráficas do ambiente",
    exigencia: "Projeto"
  },
  {
    codigo: 61,
    tipo: "Inicial",
    nome: "Certificado de calibração de instrumentos utilizados para medição de radiometria e testes de qualidade",
    exigencia: "Certificado"
  },
  {
    codigo: 99,
    tipo: "Inicial",
    nome: "Definidos em legislação municipal",
    exigencia: "Variável"
  }
];