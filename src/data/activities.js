const activities = [
  {
    cnae: "4645-1/01",
    descricao:
      "COMÉRCIO ATACADISTA DE INSTRUMENTOS E MATERIAIS PARA USO MÉDICO, CIRURGICO, HOSPITALAR E DE LABORATÓRIOS",
    risco: "ALTO",
    compreende: [
      "Estabelecimento comercial atacadista de instrumentos, utensílios, materiais, artigos, produtos, partes e acessórios de uso ou aplicação médica, hospitalar ou laboratorial destinados ao diagnóstico, prevenção, apoio, tratamento ou reabilitação de saúde.",
      "Estabelecimento comercial atacadista que contrata local de armazenamento para instrumentos, utensílios, materiais, artigos, produtos, partes e acessórios de uso ou aplicação médica, hospitalar ou laboratorial.",
      "Depósito fechado no qual se armazenam instrumentos, utensílios, materiais, artigos, produtos, partes e acessórios de uso ou aplicação médica, hospitalar ou laboratorial.",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 60],
    },
  },
  {
    cnae: "4645-1/02",
    descricao: "COMÉRCIO ATACADISTA DE PRÓTESES E ARTIGOS DE ORTOPEDIA",
    risco: "ALTO",
    compreende: [
      "Estabelecimento comercial atacadista de próteses industrializadas e ou artigos de ortopedia industrializados (muleta, cadeira de roda, etc.), inclusive implantes (pinos, placas, dentre outros).",
      "Estabelecimento comercial atacadista que contrata local de armazenamento para próteses industrializadas e ou artigos de ortopedia industrializados.",
      "Depósito fechado no qual se armazenam próteses industrializadas e ou artigos de ortopedia industrializados, inclusive implantes.",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 60],
    },
  },
  {
    cnae: "4645-1/03",
    descricao: "COMÉRCIO ATACADISTA DE PRODUTOS ODONTOLÓGICOS",
    risco: "ALTO",
    compreende: [
      "Estabelecimento comercial atacadista de material, artigo, instrumento odontológico para uso do cirurgião dentista, como: ceras, cimentos, compostos para restauração, implantes odontológicos, dentes artificiais, dentre outros.",
      "Estabelecimento comercial atacadista que contrata local de armazenamento para material, artigo, instrumento odontológico para uso do cirurgião dentista.",
      "Depósito fechado no qual se armazenam materiais, artigos, instrumentos odontológicos para uso do cirurgião dentista.",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 60],
    },
  },
  {
    cnae: "4664-8/00",
    descricao:
      "COMÉRCIO ATACADISTA DE MÁQUINAS, APARELHOS E EQUIPAMENTOS PARA USO ODONTOMÉDICO-HOSPITALAR, PARTE E PEÇAS",
    risco: "ALTO",
    compreende: [
      "Estabelecimento comercial atacadista de equipamentos, aparelhos, partes, acessórios e mobiliários, de uso ou aplicação médica, hospitalar, odontológica ou laboratorial.",
      "Estabelecimento comercial atacadista de equipamentos, aparelhos, partes, acessórios e mobiliários utilizados em atividades de educação física e ou fisioterapia.",
      "Estabelecimento comercial atacadista de equipamentos, aparelhos, partes, acessórios e mobiliários, de uso ou aplicação em tratamentos de embelezamento e ou de correção estética em humanos.",
      "Estabelecimento comercial atacadista que contrata local de armazenamento para equipamentos, aparelhos, partes, acessórios e mobiliários.",
      "Depósito fechado no qual se armazenam equipamentos, aparelhos, partes, acessórios e mobiliários.",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 60, 61],
    },
  },
  {
    cnae: "7739-0/02",
    descricao:
      "ALUGUEL DE EQUIPAMENTOS CIENTÍFICOS, MÉDICOS E HOSPITALARES, SEM OPERADOR",
    risco: "ALTO",
    compreende: [
      "Estabelecimento comercial atacadista que exerce activity de aluguel e leasing operacional de equipamentos científicos, médicos e hospitalares.",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 31, 32, 33, 38, 39, 40, 43, 45, 60],
    },
  },
  {
    cnae: "4646-0/01",
    descricao: "COMÉRCIO ATACADISTA DE COSMÉTICOS E PRODUTOS DE PERFUMARIA",
    risco: "ALTO",
    compreende: [
      "Estabelecimento comercial atacadista de cosméticos, perfumes, repelentes de uso tópico e odorizantes/aromatizantes de ambientes.",
      "Contratação de armazenamento ou depósito fechado de cosméticos e perfumes.",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 60],
    },
  },
  {
    cnae: "4646-0/02",
    descricao: "COMÉRCIO ATACADISTA DE PRODUTOS DE HIGIENE PESSOAL",
    risco: "ALTO",
    compreende: [
      "Estabelecimento comercial atacadista de artigos de higiene bucal, produtos de higiene pessoal, absorventes, fraldas, lenços umedecidos e hastes flexíveis.",
      "Armazenamento e depósito fechado dos referidos produtos.",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 60],
    },
  },
  {
    cnae: "4649-4/08",
    descricao:
      "COMÉRCIO ATACADISTA DE PRODUTOS DE HIGIENE, LIMPEZA E CONSERVAÇÃO DOMICILIAR",
    risco: "ALTO",
    compreende: [
      "Atacadista de saneantes, domissanitários, produtos com ação antimicrobiana, sabões, detergentes, desinfestantes (inseticidas, repelentes) e produtos para jardinagem amadora.",
      "Armazenamento e depósito fechado de saneantes e domissanitários.",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 60, 63],
    },
  },
  {
    cnae: "4644-3/01",
    descricao: "COMÉRCIO ATACADISTA DE MEDICAMENTOS E DROGAS DE USO HUMANO",
    risco: "ALTO",
    compreende: [
      "Atacadista de medicamentos de uso humano (sujeitos ou não a controle especial) e gases medicinais.",
      "Importação, armazenamento, fracionamento de insumos farmacêuticos ativos e não ativos.",
      "Laboratório de Controle de Qualidade próprio em endereço diverso.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9], // Exigidos para armazenamento próprio, importação e controle de qualidade
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "5620-1/01",
    descricao:
      "FORNECIMENTO DE ALIMENTOS PREPARADOS PREPONDERANTEMENTE PARA EMPRESAS",
    risco: "ALTO",
    compreende: [
      "Cozinha industrial sob contrato para instituições públicas/privadas, hospitais, indústrias utilizando instalações do contratante.",
      "Preparação de refeições em cozinha central (catering) para empresas de transporte, cantinas e restaurantes privativos.",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 45, 46],
    },
  },
  {
    cnae: "4772-5/00",
    descricao:
      "COMÉRCIO VAREJISTA DE COSMÉTICOS, PRODUTOS DE PERFUMARIA E DE HIGIENE PESSOAL",
    risco: "ALTO",
    compreende: [
      "Comércio varejista com atividade de fracionamento e embalagem de produtos a granel (perfumes, sabonetes, xampus, etc.) com venda direta.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 38, 39, 40, 52, 55, 67],
    },
  },
  {
    cnae: "4771-7/01",
    descricao:
      "COMÉRCIO VAREJISTA DE PRODUTOS FARMACÊUTICOS SEM MANIPULAÇÃO DE FÓRMULAS",
    risco: "ALTO",
    compreende: [
      "Drogaria convencional e drogaria com fracionamento de medicamentos.",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 31, 32, 33, 38, 39, 40, 43, 45],
    },
  },
  {
    cnae: "4771-7/02",
    descricao:
      "COMÉRCIO VAREJISTA DE PRODUTOS FARMACEUTICOS, COM MANIPULAÇÃO DE FÓRMULAS",
    risco: "ALTO",
    compreende: [
      "Farmácia de manipulação alopática (fórmulas oficiais e magistrais).",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 33, 38, 39, 40, 43, 45, 52, 67],
    },
  },
  {
    cnae: "4771-7/03",
    descricao: "COMÉRCIO VAREJISTA DE PRODUTOS FARMACÊUTICOS HOMEOPÁTICOS",
    risco: "ALTO",
    compreende: [
      "Comércio varejista de produtos homeopáticos, fitoterápicos e flora medicinal sem manipulação.",
      "Ervanaria.",
      "Farmácia de manipulação homeopática.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9], // Apenas se houver a manipulação homeopática
      durante: [23, 29, 31, 32, 33, 38, 39, 40, 43, 45, 49, 52],
    },
  },
  {
    cnae: "8292-0/00",
    descricao: "ENVASAMENTO E EMPACOTAMENTO SOB CONTRATO",
    risco: "ALTO",
    compreende: [
      "Envasamento, fracionamento, empacotamento e etiquetagem de produtos líquidos, sólidos, aerossóis ou farmacêuticos para terceiros sob contrato.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "5211-7/01",
    descricao: "ARMAZÉNS GERAIS (EMISSÃO DE WARRANT)",
    risco: "ALTO",
    compreende: [
      "Armazenamento de produtos sólidos, líquidos e gasosos sujeitos à vigilância sanitária por conta de terceiros com emissão de warrant.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 52, 63],
    },
  },
  {
    cnae: "5211-7/99",
    descricao:
      "DEPÓSITOS DE MERCADORIAS PARA TERCEIROS – EXCETO ARMAZÉNS GERAIS E GUARDA MÓVEIS",
    risco: "ALTO",
    compreende: [
      "Serviço de armazenamento de produtos regulados por conta de terceiros sem emissão de warrant.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 52, 63],
    },
  },
  {
    cnae: "4930-2/01",
    descricao:
      "TRANSPORTE RODOVIÁRIO DE CARGAS – EXCETO PRODUTOS PERIGOSOS E MUDANÇAS, MUNICIPAL",
    risco: "ALTO_MÉDIO",
    compreende: [
      "Transporte municipal de produtos regulados, medicamentos, alimentos, água para trabalhadores em veículos adaptados, material biológico e hemocomponentes.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9], // Aplicado especificamente ao transporte de alimentos/água em veículos adaptados
      durante: [23, 27, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 52, 69],
    },
  },
  {
    cnae: "4930-2/02",
    descricao:
      "TRANSPORTE RODOVIÁRIO DE CARGAS – EXCETO PRODUTOS PERIGOSOS E MUDANÇAS, INTERMUNICIPAL, INTERESTADUAL E INTERNACIONAL",
    risco: "ALTO_MÉDIO",
    compreende: [
      "Transporte de longa distância de produtos regulados, medicamentos, alimentos, material biológico humano e sangue.",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 69],
    },
  },
  {
    cnae: "8122-2/00",
    descricao: "IMUNIZAÇÃO E CONTROLE DE PRAGAS URBANAS",
    risco: "ALTO",
    compreende: [
      "Serviços de desinsetização, desratização e descupinização urbana.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "8129-0/00",
    descricao: "ATIVIDADES DE LIMPEZA NÃO ESPECIFICADAS ANTERIORMENTE",
    risco: "ALTO",
    compreende: [
      "Processamento de produtos para a saúde e esterilização por radiação ionizante ou óxido de etileno (E.T.O.) como etapa de fabricação.",
    ],
    documentos: {
      previos: [1, 2, 3, 4, 5, 6, 9], // Código 1 incluído para esterilização por radiação ionizante
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "8630-5/03",
    descricao: "ATIVIDADE MÉDICA AMBULATORIAL RESTRITA A CONSULTAS",
    risco: "MÉDIO",
    compreende: [
      "Consultório no qual se presta assistência a pacientes externos, inclusive extra estabelecimento, com uso de unidades móveis.",
      "Posto de assistência médica no qual se presta assistência a pacientes externos, inclusive extra estabelecimento, com uso de unidades móveis.",
      "Unidade de saúde para prestação de atendimento ambulatorial em várias especialidades, incluindo ou não as especialidades básicas, podendo ainda ofertar outras especialidades não médicas, como Policlínica.",
      "Clínica, serviço ou empresa especializada em medicina do trabalho, inclusive extra estabelecimento, com uso de unidades móveis.",
      "Unidade móvel fluvial, equipada apenas com consultório médico e sem leitos de internação.",
    ],
    documentos: {
      previos: [], // Consta como "N.A."
      durante: [21, 23, 26, 27, 29, 31, 32, 38, 39, 40, 41, 46],
    },
  },
  {
    cnae: "8610-1/01",
    descricao:
      "ATIVIDADES DE ATENDIMENTO HOSPITALAR – EXCETO PRONTO-SOCORRO E UNIDADES PARA ATENDIMENTO DE URGÊNCIAS",
    risco: "ALTO",
    compreende: [
      "Hospital Geral, Hospital-Dia, Maternidade, Centros de Parto, Hospitais Pediátricos/Psiquiátricos/Especializados, Navio-Hospital e almoxarifados integrados.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 27, 29, 31, 32, 33, 36, 38, 39, 40, 41, 42, 46, 49, 52],
    },
  },
  {
    cnae: "8610-1/02",
    descricao:
      "ATIVIDADE DE ATENDIMENTO EM PRONTO-SOCORRO E UNIDADES HOSPITALARES PARA ATENDIMENTO A URGÊNCIAS",
    risco: "ALTO",
    compreende: [
      "Pronto-socorro geral ou especializado 24h com leitos de observação e Pronto Atendimento.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 27, 29, 31, 32, 33, 36, 38, 39, 40, 41, 42, 46, 49, 52, 71],
    },
  },
  {
    cnae: "8621-6/01",
    descricao: "UTI MÓVEL",
    risco: "ALTO",
    compreende: [
      "Transporte de pacientes de alto risco (Suporte Avançado tipo D), Aeronave de transporte médico tipo E e embarcações tipo F.",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 31, 32, 38, 39, 40, 41, 46],
    },
  },
  {
    cnae: "8621-6/02",
    descricao:
      "SERVIÇOS MÓVEIS DE ATENDIMENTO A URGÊNCIAS – EXCETO POR UTI MÓVEL",
    risco: "ALTO",
    compreende: [
      "Ambulâncias de Suporte Básico tipo B, Ambulâncias de Resgate tipo C e embarcações médicas tipo F.",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 31, 32, 38, 39, 40, 41, 46],
    },
  },
  {
    cnae: "8630-5/01",
    descricao:
      "ATIVIDADE MÉDICA AMBULATORIAL COM RECURSOS PARA REALIZAÇÃO DE PROCEDIMENTOS CIRÚRGICOS",
    risco: "ALTO",
    compreende: [
      "Ambulatório cirúrgico tipo I, II, III, clínicas de estética tipo I, II, III e Unidades Básicas de Saúde (UBS).",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9], // Exigido para tipos II, III e clínicas de estética avançadas
      durante: [
        21, 23, 27, 29, 31, 32, 33, 36, 38, 39, 40, 41, 42, 46, 49, 52, 60,
      ],
    },
  },
  {
    cnae: "8630-5/02",
    descricao:
      "ATIVIDADE MÉDICA AMBULATORIAL COM RECURSOS PARA REALIZAÇÃO DE EXAMES COMPLEMENTARES",
    risco: "ALTO",
    compreende: [
      "Assistência com unidades móveis, exames complementares em consultórios, clínicas com equipamentos de Raios-X, medicina do trabalho e UBS.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [
        21, 23, 28, 29, 31, 32, 33, 36, 37, 38, 39, 40, 41, 42, 45, 46, 47, 48,
        49, 52, 60,
      ],
    },
  },
  {
    cnae: "8630-5/04",
    descricao: "ATIVIDADE ODONTOLÓGICA",
    risco: "ALTO",
    compreende: [
      "Clínicas, consultórios e policlínicas odontológicas (com ou sem Raios X), unidades móveis odontológicas.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9], // Exigidos para clínicas e policlínicas
      durante: [
        21, 23, 27, 28, 29, 31, 32, 33, 38, 39, 40, 41, 42, 45, 47, 48, 52,
      ],
    },
  },
  {
    cnae: "8630-5/06",
    descricao: "SERVIÇOS DE VACINAÇÃO E IMUNIZAÇÃO HUMANA",
    risco: "ALTO",
    compreende: [
      "Estabelecimentos de vacinação humana fixa, domiciliar ou extramuros.",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 41, 45, 46, 60],
    },
  },
  {
    cnae: "8630-5/07",
    descricao: "ATIVIDADE DE REPRODUÇÃO HUMANA ASSISTIDA",
    risco: "ALTO",
    compreende: [
      "Banco de sêmen, tecidos germinativos, criopreservação e centros de reprodução humana assistida (com ou sem laboratório).",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 27, 29, 31, 32, 38, 39, 40, 41, 45, 49, 52],
    },
  },
  {
    cnae: "8640-2/01",
    descricao: "LABORATÓRIOS DE ANATOMIA PATOLÓGICA E CITOLÓGICA",
    risco: "ALTO",
    compreende: ["Laboratório de anatomia patológica e citológica tipo III."],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 41, 46, 52],
    },
  },
  {
    cnae: "8640-2/02",
    descricao: "LABORATÓRIOS CLÍNICOS",
    risco: "ALTO_MÉDIO",
    compreende: [
      "Laboratórios de análises clínicas, toxicológicas, postos de coleta tipo II, centrais de distribuição e exames itinerantes ou em farmácias.",
      "Serviço em consultório isolado (Risco Médio).",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9], // Exceto para serviços itinerantes ou em comércios varejistas
      durante: [
        20, 21, 23, 25, 26, 27, 29, 30, 31, 32, 33, 36, 37, 38, 39, 40, 41, 45,
        46, 47, 48, 49, 52, 59, 60,
      ],
    },
  },
  {
    cnae: "8640-2/03",
    descricao: "SERVIÇOS DE DIÁLISE E NEFROLOGIA",
    risco: "ALTO",
    compreende: [
      "Prestação de serviços de diálise, nefrologia e seus almoxarifados de uso próprio.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 36, 38, 39, 40, 41, 42, 45, 46, 49, 52],
    },
  },
  {
    cnae: "8640-2/04",
    descricao: "SERVIÇOS DE TOMOGRAFIA",
    risco: "ALTO",
    compreende: [
      "Estabelecimentos dedicados exclusivamente a exames de tomografia.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [
        23, 28, 29, 30, 31, 32, 33, 36, 37, 38, 39, 40, 41, 42, 45, 46, 47, 48,
        49, 52,
      ],
    },
  },
  {
    cnae: "8640-2/05",
    descricao:
      "SERVIÇOS DE DIAGNÓSTICO POR IMAGEM COM USO DE RADIAÇÃO IONIZANTE – EXCETO TOMOGRAFIA",
    risco: "ALTO",
    compreende: [
      "Radiologia odontológica, raios-X médico, litotripsia, mamografia, unidades móveis e medicina nuclear in vivo/in vitro.",
    ],
    documentos: {
      previos: [1, 2, 3, 4, 5, 6, 9], // Código 1 exigido para medicina nuclear com PET/iodoterapia
      durante: [
        20, 23, 25, 28, 29, 31, 32, 33, 36, 37, 38, 39, 40, 41, 42, 45, 46, 47,
        48, 49, 52,
      ],
    },
  },
  {
    cnae: "8640-2/06",
    descricao: "SERVIÇOS DE RESSONÂNCIA MAGNÉTICA",
    risco: "ALTO",
    compreende: [
      "Estabelecimento que presta serviço de ressonância magnética exclusivo.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 28, 29, 31, 32, 36, 38, 39, 40, 41, 42, 46, 52],
    },
  },
  {
    cnae: "8640-2/07",
    descricao:
      "SERVIÇOS DE DIAGNÓSTICO POR IMAGEM, SEM USO DE RADIAÇÃO IONIZANTE – EXCETO RESONÂNCIA MAGNÉTICA",
    risco: "ALTO",
    compreende: [
      "Serviços de diagnóstico por imagem sem radiação ionizante com uso de ultrassom.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 36, 38, 39, 40, 41, 46, 52],
    },
  },
  {
    cnae: "8640-2/09",
    descricao:
      "SERVIÇOS DE DIAGNÓSTICO POR MÉTODOS ÓPTICOS – ENDOSCOPIA E OUTROS EXAMES ANÁLOGOS",
    risco: "ALTO",
    compreende: [
      "Serviços diagnósticos por métodos ópticos (endoscopia e análogos).",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 36, 38, 39, 40, 41, 46, 52],
    },
  },
  {
    cnae: "8640-2/10",
    descricao: "SERVIÇO DE QUIMIOTERAPIA",
    risco: "ALTO",
    compreende: [
      "Estabelecimentos prestadores de serviços de terapia antineoplásica.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 27, 29, 31, 32, 33, 36, 38, 39, 40, 41, 42, 46, 49, 52],
    },
  },
  {
    cnae: "8640-2/11",
    descricao: "SERVIÇO DE RADIOTERAPIA",
    risco: "ALTO",
    compreende: ["Estabelecimentos que prestam serviços de radioterapia."],
    documentos: {
      previos: [1, 2, 3, 4, 5, 6, 9],
      durante: [
        23, 25, 28, 29, 30, 31, 32, 33, 36, 37, 38, 39, 40, 41, 42, 45, 46, 47,
        48, 49, 52,
      ],
    },
  },
  {
    cnae: "8640-2/12",
    descricao: "SERVIÇO DE HEMOTERAPIA",
    risco: "ALTO",
    compreende: [
      "Agências transfusionais, hemocentros (com ou sem irradiador), hemonúcleos, postos de coleta de sangue e centrais de triagem laboratorial.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 25, 29, 31, 32, 36, 37, 38, 39, 40, 41, 42, 45, 46, 47, 52],
    },
  },
  {
    cnae: "8640-2/13",
    descricao: "SERVIÇO DE LITOTRIPSIA",
    risco: "ALTO",
    compreende: ["Serviço de litotripsia sem o uso de radiação ionizante."],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 36, 38, 39, 40, 41, 46, 52],
    },
  },
  {
    cnae: "8640-2/14",
    descricao: "SERVIÇOS DE BANCOS DE CÉLULAS E TECIDOS HUMANOS",
    risco: "ALTO",
    compreende: [
      "Bancos de tecidos (musculoesquelético, pele, valvas, olhos, multitecidos), bancos de sangue de cordão umbilical e centros de processamento celular (CPH).",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 27, 29, 31, 32, 33, 38, 39, 40, 41, 45, 49, 52, 77],
    },
  },
  {
    cnae: "8640-2/99",
    descricao:
      "ATIVIDADES DE SERVIÇOS DE COMPLEMENTAÇÃO DIAGNÓSTICA E TERAPEUTICA – NÃO ESPECIFICADAS ANTERIORMENTE",
    risco: "ALTO",
    compreende: [
      "Serviços de medicina hiperbárica, centros de infusão, radiometria e testes de qualidade em radiodiagnóstico.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9], // Exceto para radiometria/testes de qualidade
      durante: [
        21, 23, 29, 31, 32, 33, 36, 38, 39, 40, 41, 42, 45, 46, 49, 52, 61,
      ],
    },
  },
  {
    cnae: "8650-0/04",
    descricao: "ATIVIDADES DE FISIOTERAPIA",
    risco: "ALTO",
    compreende: ["Centro ou núcleo de reabilitação física."],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [21, 23, 26, 27, 29, 31, 32, 33, 38, 39, 40, 41, 45, 46, 52],
    },
  },
  {
    cnae: "8690-9/02",
    descricao: "ATIVIDADES DE BANCO DE LEITE HUMANO",
    risco: "ALTO",
    compreende: ["Banco de Leite Humano e Posto de Coleta de Leite Humano."],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 36, 38, 39, 40, 41, 46, 52],
    },
  },
  {
    cnae: "8711-5/01",
    descricao: "CLÍNICAS E RESIDÊNCIAS GERIÁTRICAS",
    risco: "ALTO",
    compreende: [
      "Casas de repouso para pessoas acima de 60 anos em regime de internato com foco em suporte médico e terapêutico.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 41, 46, 52],
    },
  },
  {
    cnae: "8711-5/03",
    descricao:
      "ATIVIDADES DE ASSISTÊNCIA A DEFICIENTES FÍSICOS, IMUNODEPRIMIDOS E CONVALESCENTES",
    risco: "ALTO",
    compreende: [
      "Instituições de saúde com alojamento para convalescentes, deficientes, casas de apoio tipo II para HIV e atenção a transtornos de dependência química.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 41, 45, 46, 52],
    },
  },
  {
    cnae: "8712-3/00",
    descricao:
      "ATIVIDADES DE FORNECIMENTO DE INFRAESTRUTURA DE APOIO E ASSISTÊNCIA A PACIENTES NO DOMICÍLIO",
    risco: "ALTO",
    compreende: [
      "Estabelecimentos de assistência à saúde domiciliar (Home Care).",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 41, 46],
    },
  },
  {
    cnae: "8720-4/01",
    descricao: "ATIVIDADES DE CENTROS DE ASSISTÊNCIA PSICOSSOCIAL",
    risco: "ALTO",
    compreende: [
      "Estabelecimentos públicos de assistência médica/psicossocial com alojamento e alimentação para transtornos mentais ou decorrentes de drogas.",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 31, 32, 33, 36, 40, 41, 46, 60, 79],
    },
  },
  {
    cnae: "3600-6/01",
    descricao: "CAPTAÇÃO, TRATAMENTO E DISTRIBUIÇÃO DE ÁGUA",
    risco: "ALTO",
    compreende: [
      "Sistemas de abastecimento de água para consumo humano (SAA) englobando captação até distribuição.",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 31, 32, 33, 38, 39, 40, 53, 54],
    },
  },
  {
    cnae: "3600-6/02",
    descricao: "DISTRIBUIÇÃO DE ÁGUA POR CAMINHÕES",
    risco: "ALTO",
    compreende: [
      "Captação, tratamento e distribuição exclusiva ou reuso de água de E.T.E. por caminhão-pipa.",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 31, 32, 33, 38, 39, 40, 54, 56],
    },
  },
  {
    cnae: "3822-0/00",
    descricao: "TRATAMENTO E DISPOSIÇÃO DE RESÍDUOS PERIGOSOS",
    risco: "ALTO",
    compreende: [
      "Tratamento e disposição final de resíduos perigosos de serviços de saúde em qualquer estado físico.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 8, 9],
      durante: [23, 29, 31, 32, 38, 39, 40, 52, 53],
    },
  },
  {
    cnae: "4729-6/01",
    descricao: "TABACARIA",
    risco: "ALTO",
    compreende: [
      "Estabelecimentos comerciais varejistas destinados especificamente ao consumo local de produtos fumígenos (cigarros, narguilés, etc.).",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 26, 29, 38, 39, 40, 52],
    },
  },
  {
    cnae: "5590-6/99",
    descricao: "OUTROS TIPOS DE ALOJAMENTO NÃO ESPECIFICADOS ANTERIORMENTE",
    risco: "ALTO",
    compreende: [
      "Habitações coletivas para repouso de trabalhadores rurais ou urbanos disponibilizadas por empregadores.",
    ],
    documentos: {
      previos: [],
      durante: [21, 23, 29, 35, 36, 38, 39, 40, 46],
    },
  },
  {
    cnae: "8511-2/00",
    descricao: "EDUCAÇÃO INFANTIL - CRECHES",
    risco: "ALTO",
    compreende: [
      "Creches para crianças de até 3 anos (estendendo-se até 5 anos) e abrigos assistenciais para crianças com necessidades especiais.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [21, 23, 26, 29, 31, 32, 38, 39, 40, 45, 52],
    },
  },
  {
    cnae: "8730-1/99",
    descricao:
      "ATIVIDADES DE ASSISTÊNCIA SOCIAL PRESTADAS EM RESIDÊNCIAS COLETIVAS E PARTICULARES NÃO ESPECIFICADAS ANTERIORMENTE",
    risco: "ALTO",
    compreende: [
      "Residências Terapêuticas, Inclusivas, Casas de Apoio para crianças/adolescentes e internatos de readaptação social.",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 31, 32, 38, 39, 40],
    },
  },
  {
    cnae: "9311-5/00",
    descricao: "GESTÃO DE INSTALAÇÕES DE ESPORTE",
    risco: "ALTO_MÉDIO",
    compreende: [
      "Gestão de piscinas (Risco Médio) e estádios/instalações de competições com capacidade superior a 2.000 torcedores (Risco Alto).",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9], // Para instalações acima de 2.000 pessoas
      durante: [21, 23, 26, 29, 31, 32, 38, 39, 40, 52],
    },
  },
  {
    cnae: "9603-3/01",
    descricao: "GESTÃO E MANUTENÇÃO DE CEMITÉRIOS",
    risco: "ALTO",
    compreende: ["Cemitérios horizontais ou verticais para cadáveres humanos."],
    documentos: {
      previos: [2, 3, 4, 5, 6, 8, 9],
      durante: [23, 29, 38, 39, 40, 52, 53],
    },
  },
  {
    cnae: "9603-3/02",
    descricao: "SERVIÇOS DE CREMAÇÃO",
    risco: "ALTO",
    compreende: [
      "Estabelecimentos dotados de fornos crematórios humanos ou animais.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 38, 39, 40, 52, 53],
    },
  },
  {
    cnae: "9603-3/05",
    descricao: "SERVIÇOS DE SOMATOCONSERVAÇÃO",
    risco: "ALTO",
    compreende: [
      "Serviços de embalsamento, formolização e tanatopraxia em humanos.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 7, 8, 9],
      durante: [23, 29, 31, 32, 38, 39, 40, 45, 52],
    },
  },
  {
    cnae: "7500-1/00",
    descricao: "ATIVIDADES VETERINÁRIAS",
    risco: "ALTO",
    compreende: [
      "Terapia e diagnóstico por radiação ionizante (fixa ou móvel), medicina nuclear veterinária e dispensário de medicamentos de uso humano em clínicas veterinárias.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9], // Exceto para equipamentos móveis e dispensários
      durante: [
        21, 23, 25, 28, 29, 30, 31, 32, 33, 36, 37, 38, 39, 40, 41, 42, 45, 46,
        47, 48, 49, 52,
      ],
    },
  },
  {
    cnae: "7120-1/00",
    descricao: "TESTES E ANÁLISES TÉCNICAS",
    risco: "ALTO",
    compreende: [
      "Laboratórios analíticos sob atuação da Vigilância Sanitária (alimentos, medicamentos, cosméticos) ou análise de água para consumo.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 7, 8, 9],
      durante: [23, 29, 31, 32, 33, 38, 39, 40, 45, 52],
    },
  },
  {
    cnae: "8711-5/02",
    descricao: "INSTITUIÇÕES DE LONGA PERMANÊNCIA PARA IDOSOS",
    risco: "ALTO",
    compreende: [
      "Asilos e instituições de longa permanência onde o tratamento médico não é o centro do atendimento.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 46, 52],
    },
  },
  {
    cnae: "8720-4/99",
    descricao:
      "ATIVIDADES DE ASSISTÊNCIA PSICOSSOCIAL E À SAÚDE À PORTADORES DE DISTÚRBIOS PSÍQUICOS, DEFICIÊNCIA MENTAL E DEPENDÊNCIA QUÍMICA E GRUPOS SIMILARES, NÃO ESPECIFICADAS ANTERIORMENTE",
    risco: "ALTO",
    compreende: [
      "Comunidades terapêuticas de interesse social, fornecendo assistência temporária com alojamento e alimentação.",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 46],
    },
  },
  {
    cnae: "8800-6/00",
    descricao: "SERVIÇOS DE ASSISTÊNCIA SOCIAL SEM ALOJAMENTO",
    risco: "ALTO",
    compreende: ["Centro Dia para acolhimento de idosos."],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 46, 52],
    },
  },
  {
    cnae: "9602-5/02",
    descricao:
      "ATIVIDADES DE ESTÉTICA E OUTROS SERVIÇOS DE CUIDADOS COM A BELEZA",
    risco: "ALTO_MÉDIO",
    compreende: [
      "Serviços de beleza, depilação, massagens, SPAs isolados, bronzeamento artificial sem câmara, estética não médica invasiva/não cirúrgica e micropigmentação com agulhas.",
    ],
    documentos: {
      previos: [],
      durante: [21, 23, 26, 27, 29, 31, 32, 38, 39, 40],
    },
  },
  {
    cnae: "9609-2/06",
    descricao: "SERVIÇOS DE TATUAGEM E COLOCAÇÃO DE PIERCING",
    risco: "ALTO",
    compreende: [
      "Estabelecimentos dedicados a tatuagens e colocação de piercings com agulhas/dispositivos perfurantes.",
    ],
    documentos: {
      previos: [],
      durante: [21, 23, 26, 27, 29, 38, 39, 40],
    },
  },
  {
    cnae: "0892-4/03",
    descricao: "REFINO E OUTROS TRATAMENTOS DO SAL",
    risco: "ALTO",
    compreende: [
      "Moagem, purificação, refino e outros tratamentos do sal associados à extração.",
      "Depósito fechado para armazenamento de sal moído, purificado, refinado ou tratado associado à extração.",
      "Laboratório de Controle de Qualidade próprio instalado em endereço diverso do estabelecimento fabril.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "1031-7/00",
    descricao: "FABRICAÇÃO DE CONSERVAS DE FRUTAS",
    risco: "ALTO",
    compreende: [
      "Fabricação de frutas em calda (compotas), doces em massa, pastas, geleias, concentrados de tomate (extratos, purês, polpas) e leite de coco.",
      "Conservas de frutas (em álcool, secas, desidratadas, purês e semelhantes).",
      "Beneficiamento, torrefação e produção de sementes oleaginosas (castanha de caju, castanha-do-pará, amendoim, soja, etc.).",
      "Depósitos fechados de conservas de frutas, doces em massa, concentrados de tomate ou leite de coco industrial.",
      "Laboratório de Controle de Qualidade próprio instalado em endereço diverso do estabelecimento fabril.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "1032-5/01",
    descricao: "FABRICAÇÃO DE CONSERVAS DE PALMITO",
    risco: "ALTO",
    compreende: [
      "Fabricação de conservas de palmito e seus depósitos fechados correspondentes.",
      "Laboratório de Controle de Qualidade próprio instalado em endereço diverso.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "1032-5/99",
    descricao:
      "FABRICAÇÃO DE CONSERVAS DE LEGUMES E OUTROS VEGETAIS, EXCETO PALMITO",
    risco: "ALTO",
    compreende: [
      "Fabricação de vegetais desidratados, liofilizados, farinha/sêmola de batata, batata frita e aperitivos à base de batata.",
      "Fabricação de conservas de legumes, outros vegetais e cogumelos comestíveis (mediante congelamento, cozimento ou imersão).",
      "Depósitos fechados e Laboratório de Controle de Qualidade em endereço diverso.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 52, 58],
    },
  },
  {
    cnae: "1041-4/00",
    descricao: "FABRICAÇÃO DE ÓLEOS VEGETAIS EM BRUTO, EXCETO ÓLEO DE MILHO",
    risco: "ALTO",
    compreende: [
      "Fabricação de óleos vegetais em bruto comestíveis (soja, algodão, oliva, girassol, etc.).",
      "Obtenção de tortas, farinhas, farelos de sementes oleaginosas e subprodutos residuais para fins alimentícios.",
      "Depósitos fechados e Laboratório de Controle de Qualidade integrado.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "1042-2/00",
    descricao: "FABRICAÇÃO DE ÓLEOS VEGETAIS REFINADOS, EXCETO ÓLEO DE MILHO",
    risco: "ALTO",
    compreende: [
      "Fabricação de óleos vegetais refinados comestíveis e ceras de origem vegetal para fins alimentícios.",
      "Beneficiamentos processados em óleos vegetais (sopragem, oxidação, polimerização, hidrogenação, etc.) para fins alimentícios.",
      "Depósitos fechados de armazenamento e Laboratório de Controle de Qualidade em endereço diverso.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "1043-1/00",
    descricao:
      "FABRICAÇÃO DE MARGARINA E OUTRAS GORDURAS VEGETAIS E DE ÓLEOS NÃO COMESTÍVEIS DE ANIMAIS",
    risco: "ALTO",
    compreende: [
      "Fabricação de gorduras vegetais comestíveis e preparações à base de creme vegetal para fins alimentícios.",
      "Depósitos fechados e Laboratório de Controle de Qualidade em endereço diverso.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "1053-8/00",
    descricao: "FABRICAÇÃO DE SORVETES E OUTROS GELADOS COMESTÍVEIS",
    risco: "ALTO",
    compreende: [
      "Fabricação de gelados comestíveis (sorvetes, picolés, bolos e tortas geladas), produtos à base de açaí e bases líquidas/pastosas para sorvetes.",
      "Depósitos fechados e Laboratório de Controle de Qualidade em endereço diverso.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 52],
    },
  },
  {
    cnae: "1061-9/01",
    descricao: "BENEFICIAMENTO DE ARROZ",
    risco: "ALTO",
    compreende: [
      "Beneficiamento do arroz (descascado, moído, branqueado, polido, parboilizado e convertido).",
      "Depósitos fechados e Laboratório de Controle de Qualidade em endereço diverso.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 33, 36, 38, 39, 40, 43, 45, 52],
    },
  },
  {
    cnae: "1061-9/02",
    descricao: "FABRICAÇÃO DE PRODUTOS DO ARROZ",
    risco: "ALTO",
    compreende: [
      "Fabricação de farinhas, flocos e outros produtos de arroz.",
      "Depósitos fechados e Laboratório de Controle de Qualidade em endereço diverso.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 38, 39, 40, 43, 52],
    },
  },
  {
    cnae: "1062-7/00",
    descricao: "MOAGEM DE TRIGO E FABRICAÇÃO DE DERIVADOS",
    risco: "ALTO",
    compreende: [
      "Fabricação de farinha de trigo (inclusive integral), sêmolas, farelo e outros derivados.",
      "Fabricação de farinhas e massas em pó mescladas ou preparadas para indústrias de pães, bolos e biscoitos.",
      "Depósitos fechados de estocagem e Laboratório de Controle de Qualidade.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "1063-5/00",
    descricao: "PRODUÇÃO DE FARINHA DE MANDIOCA E DERIVADOS",
    risco: "ALTO",
    compreende: [
      "Fabricação de farinha de mandioca e outros derivados (raspa, farinha de raspa, etc.).",
      "Depósitos fechados e Laboratório de Controle de Qualidade em endereço diverso.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "1064-3/00",
    descricao:
      "FABRICAÇÃO DE FARINHA DE MILHO E DERIVADOS EXCETO ÓLEO DE MILHO",
    risco: "ALTO",
    compreende: [
      "Fabricação de farinhas de milho (fubá, creme, gritz), canjica, farelo e alimentos termicamente tratados à base de milho (pós, flocos).",
      "Atividades de preparação de milho para pipoca.",
      "Depósitos fechados e Laboratório de Controle de Qualidade integrado.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "1065-1/01",
    descricao: "FABRICAÇÃO DE AMIDOS E FÉCULAS DE VEGETAIS",
    risco: "ALTO",
    compreende: [
      "Fabricação de amidos e féculas de vegetais (milho, arroz, trigo, mandioca), dextrose (açúcar de milho) e derivados (glicose, maltase, inulina, glúten, tapioca).",
      "Depósitos fechados de estocagem industrial e Laboratório de Controle de Qualidade.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "1065-1/02",
    descricao: "FABRICAÇÃO DE ÓLEO DE MILHO EM BRUTO",
    risco: "ALTO",
    compreende: [
      "Fabricação e armazenamento de óleo de milho em bruto de fabricação industrial.",
      "Laboratório de Controle de Qualidade próprio instalado em endereço diverso.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "1065-1/03",
    descricao: "FABRICAÇÃO DE ÓLEO DE MILHO REFINADO",
    risco: "ALTO",
    compreende: [
      "Fabricação e armazenamento de óleos de milho refinado de fabricação industrial.",
      "Laboratório de Controle de Qualidade próprio instalado em endereço diverso.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "1069-4/00",
    descricao:
      "MOAGEM DE FABRICAÇÃO DE PRODUTOS DE ORIGEM VEGETAL, NÃO ESPECIFICADOS ANTERIORMENTE",
    risco: "ALTO",
    compreende: [
      "Fabricação de farinhas de araruta, centeio, cevada, aveia, legumes secos e farinhas compostas.",
      "Fabricação de germens de cereais, aperitivos e alimentos à base destes produtos.",
      "Depósitos fechados e Laboratório de Controle de Qualidade próprio.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "1071-6/00",
    descricao: "FABRICAÇÃO DE AÇUCAR EM BRUTO",
    risco: "ALTO",
    compreende: [
      "Fabricação de açúcar cristal, demerara, mascavo e subprodutos (rapadura, melado, melaço).",
      "Depósitos fechados de açúcar bruto e Laboratório de Controle de Qualidade em endereço diverso.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "1072-4/01",
    descricao: "FABRICAÇÃO DE AÇUCAR DE CANA REFINADO",
    risco: "ALTO",
    compreende: [
      "Fabricação de açúcar moído, triturado, refinado, líquido, glicose de cana e açúcar invertido.",
      "Depósitos fechados e Laboratório de Controle de Qualidade correspondente.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "1072-4/02",
    descricao: "FABRICAÇÃO DE AÇUCAR DE CEREAIS (DEXTROSE) E DE BETERRABA",
    risco: "ALTO",
    compreende: [
      "Fabricação de açúcar de cereais (dextrose) e de beterraba moído, triturado, refinado e líquido.",
      "Depósitos fechados de estocagem e Laboratório de Controle de Qualidade em endereço diverso.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "1081-3/02",
    descricao: "TORREFAÇÃO E MOAGEM DE CAFÉ",
    risco: "ALTO",
    compreende: [
      "Fabricação de café torrado em grãos, torrado e moído ou café descafeinado.",
      "Depósitos fechados e Laboratório de Controle de Qualidade integrado.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "1082-1/00",
    descricao: "FABRICAÇÃO DE PRODUTOS A BASE DE CAFÉ",
    risco: "ALTO",
    compreende: [
      "Fabricação de café solúvel, extratos, concentrados e outras preparações à base de café.",
      "Depósitos fechados e Laboratório de Controle de Qualidade próprio.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "1091-1/01",
    descricao: "FABRICAÇÃO DE PRODUTOS DE PANIFICAÇÃO INDUSTRIAL",
    risco: "ALTO",
    compreende: [
      "Fabricação industrial de pães, roscas, bolos, tortas, farinha de rosca e panificação congelada.",
      "Depósitos fechados de panificação e Laboratório de Controle de Qualidade.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "1091-1/02",
    descricao:
      "FABRICAÇÃO DE PRODUTOS DE PADARIA E CONFEITARIA COM PREDOMINÂNCIA DE PRODUÇÃO PRÓPRIA",
    risco: "MÉDIO",
    compreende: [
      "Padaria tradicional e similares com venda predominante de fabricação própria (pães, doces e produtos de confeitaria).",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 36, 38, 39, 40, 43, 46],
    },
  },
  {
    cnae: "1092-9/00",
    descricao: "FABRICAÇÃO DE BISCOITOS E BOLACHAS",
    risco: "ALTO",
    compreende: [
      "Fabricação de biscoitos, bolachas, casquinhas para sorvetes e formas para recheios de doces.",
      "Depósitos fechados industriais e Laboratório de Controle de Qualidade próprio.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "1093-7/01",
    descricao: "FABRICAÇÃO DE PRODUTOS DERIVADOS DO CACAU E DE CHOCOLATES",
    risco: "ALTO",
    compreende: [
      "Fabricação de pasta de cacau, derivados (cacau em pó, manteiga de cacau), bombons, chocolates e farinhas à base de chocolate.",
      "Depósitos fechados e Laboratório de Controle de Qualidade instalado em endereço diverso.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "1093-7/02",
    descricao: "PRODUÇÃO DE FRUTAS CRISTALIZADAS, BALAS E SEMELHANTES",
    risco: "ALTO",
    compreende: [
      "Fabricação de balas, confeitos, gomas de mascar e frutas cristalizadas.",
      "Depósitos fechados de doces industriais e Laboratório de Controle de Qualidade.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "1094-5/00",
    descricao: "FABRICAÇÃO DE MASSAS ALIMENTÍCIAS",
    risco: "ALTO",
    compreende: [
      "Fabricação de massas secas (talharim, espaguete), ou preparadas frescas, congeladas e resfriadas (lasanha, canelone) com ou sem recheio.",
      "Depósitos fechados e Laboratório de Controle de Qualidade próprio.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "1095-3/00",
    descricao: "FABRICAÇÃO DE ESPECIARIAS, MOLHOS, TEMPEROS E CONDIMENTOS",
    risco: "ALTO",
    compreende: [
      "Preparação de especiarias/condimentos, molhos de tomate preparados, molhos em conserva, maionese, bases para molhos e temperos diversos desidratados/liofilizados.",
      "Depósitos fechados industriais e Laboratório de Controle de Qualidade.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "1096-1/00",
    descricao: "FABRICAÇÃO DE ALIMENTOS E PRATOS PRONTOS",
    risco: "ALTO",
    compreende: [
      "Fabricação de pratos prontos/refeições refrigeradas ou congeladas à base de vegetais.",
      "Doces de matéria-prima diferente de leite e frutas, sopas líquidas, sobremesas prontas e salgadinhos (empada, coxinha, esfirra, etc.).",
      "Depósitos fechados e Laboratório de Controle de Qualidade em endereço diverso.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "1099-6/02",
    descricao: "FABRICAÇÃO DE PÓS ALIMENTÍCIOS",
    risco: "ALTO",
    compreende: [
      "Fabricação, depósito fechado e Laboratório de Controle de Qualidade de pós para pudins, gelatinas e similares.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 36, 38, 39, 40, 43, 45, 52],
    },
  },
  {
    cnae: "1099-6/04",
    descricao: "FABRICAÇÃO DE GELO COMUM",
    risco: "ALTO",
    compreende: [
      "Fabricação, depósito e controle laboratorial de gelo para consumo humano ou que entre em contato com alimentos.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "1099-6/05",
    descricao: "FABRICAÇÃO DE PRODUTOS PARA INFUSÃO",
    risco: "ALTO",
    compreende: [
      "Beneficiamento de chá, mate ou outras ervas para infusão, depósitos fechados e Laboratório de Controle de Qualidade próprio.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "1099-6/06",
    descricao: "FABRICAÇÃO DE ADOÇANTES NATURAIS E ARTIFICIAIS",
    risco: "ALTO",
    compreende: [
      "Fabricação de açúcar de stévia, adoçantes naturais e artificiais.",
      "Depósitos fechados de adoçantes e Laboratório de Controle de Qualidade.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "1099-6/07",
    descricao: "FABRICAÇÃO DE ALIMENTOS DIETÉTICOS E COMPLEMENTOS ALIMENTARES",
    risco: "ALTO",
    compreende: [
      "Alimentos para dietas controladas de açúcares, restrição de nutrientes ou controle de peso.",
      "Fabricação de sal hipossódico/sucedâneos do sal, suplementos alimentares comuns, enzimáticos ou probióticos.",
      "Depósitos fechados industriais e Laboratório de Controle de Qualidade.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "1099-6/99",
    descricao:
      "FABRICAÇÃO DE OUTROS PRODUTOS ALIMENTÍCIOS NÃO ESPECIFICADOS ANTERIORMENTE",
    risco: "ALTO",
    compreende: [
      "Elaboração de sal de cozinha iodado, alimentos infantis, para idosos, nutrição enteral, novos alimentos e ingredientes funcionais.",
      "Substitutos vegetais do leite (soja, arroz, queijo de soja), cogumelos processados, proteínas vegetais e sopas em pó/tabletes.",
      "Guaraná em pó/bastão, aperitivos salgados, alimentos pré-preparados para restaurantes e vegetais minimamente processados.",
      "Depósitos fechados segmentados de alimentos e Laboratório de Controle de Qualidade.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "1122-4/04",
    descricao: "FABRICAÇÃO DE BEBIDAS ISOTÔNICAS",
    risco: "ALTO",
    compreende: [
      "Fabricação, depósitos fechados e Laboratório de Controle de Qualidade de bebidas isotônicas de fabricação industrial.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "1121-6/00",
    descricao: "FABRICAÇÃO DE ÁGUAS ENVASADAS",
    risco: "ALTO",
    compreende: [
      "Engarrafamento na fonte de águas (mineral e natural).",
      "Fabricação de águas adicionadas de sais.",
      "Depósito fechado dos produtos citados e Laboratório de Controle de Qualidade próprio instalado em endereço diverso.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 33, 34, 36, 38, 39, 40, 43, 45, 52],
    },
  },
  {
    cnae: "1731-1/00",
    descricao: "FABRICAÇÃO DE EMBALAGENS DE PAPEL",
    risco: "ALTO",
    compreende: [
      "Fabricação de embalagens de papel (impressas ou não, simples, plastificadas ou de acabamento especial) que entram em contato com alimento.",
      "Depósito fechado e Laboratório de Controle de Qualidade próprio em endereço diverso.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "1732-0/00",
    descricao: "FABRICAÇÃO DE EMBALAGENS DE CARTOLINA E PAPEL CARTÃO",
    risco: "ALTO",
    compreende: [
      "Fabricação de embalagens de cartolina e papel cartão (mesmo laminadas entre si) que entram em contato com alimento.",
      "Depósito fechado e Laboratório de Controle de Qualidade próprio em endereço diverso.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "1733-8/00",
    descricao: "FABRICAÇÃO DE CHAPAS DE EMBALAGENS DE PAPELÃO ONDULADO",
    risco: "ALTO",
    compreende: [
      "Fabricação de embalagens e acessórios de papelão ondulado que entram em contato com alimento.",
      "Depósito fechado e Laboratório de Controle de Qualidade correspondente.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "2222-6/00",
    descricao: "FABRICAÇÃO DE EMBALAGEM DE MATERIAL PLÁSTICO",
    risco: "ALTO",
    compreende: [
      "Fabricação de embalagens de material plástico que entram em contato com alimento.",
      "Depósito fechado e Laboratório de Controle de Qualidade próprio em endereço diverso.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "2312-5/00",
    descricao: "FABRICAÇÃO DE EMBALAGENS DE VIDRO",
    risco: "ALTO",
    compreende: [
      "Fabricação de embalagens de vidro que entram em contato com alimento.",
      "Depósito fechado e Laboratório de Controle de Qualidade correspondente.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "2341-9/00",
    descricao: "FABRICAÇÃO DE PRODUTOS CERÂMICOS REFRATÁRIOS",
    risco: "ALTO",
    compreende: [
      "Fabricação de produtos refratários utilizados como embalagem que entram em contato com alimentos.",
      "Depósito fechado e Laboratório de Controle de Qualidade próprio em endereço diverso.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "2349-4/99",
    descricao:
      "FABRICAÇÃO DE PRODUTOS CERÂMICOS NÃO REFRATÁRIOS, NÃO ESPECIFICADOS ANTERIORMENTE",
    risco: "ALTO",
    compreende: [
      "Fabricação de produtos cerâmicos não refratários utilizados como embalagem que entram em contato com alimentos.",
      "Depósito fechado e Laboratório de Controle de Qualidade correspondente.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "2591-8/00",
    descricao: "FABRICAÇÃO DE EMBALAGENS METÁLICAS",
    risco: "ALTO",
    compreende: [
      "Fabricação de embalagens metálicas que entram em contato com alimentos e bebidas (latas, tubos, bisnagas, tonéis, tampas, etc.).",
      "Depósito fechado e Laboratório de Controle de Qualidade próprio em endereço diverso.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "2219-6/00",
    descricao:
      "FABRICAÇÃO DE ARTEFATOS DE BORRACHA NÃO ESPECIFICADOS ANTERIORMENTE",
    risco: "ALTO",
    compreende: [
      "Fabricação, depósito fechado e Laboratório de Controle de Qualidade de preservativos.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "2660-4/00",
    descricao:
      "FABRICAÇÃO DE APARELHOS ELETROMÉDICOS E ELETRO-TERAPEUTICOS E EQUIPAMENTOS DE IRRADIAÇÃO",
    risco: "ALTO",
    compreende: [
      "Fabricação de aparelhos, equipamentos, partes e acessórios de uso médico, hospitalar, odontológico ou laboratorial destinados ao diagnóstico, prevenção, tratamento ou reabilitação.",
      "Fabricação de válvulas cardíacas, marca-passos e aparelhos auditivos.",
      "Depósito fechado das referidas mercadorias e Laboratório de Controle de Qualidade integrado.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "2829-1/99",
    descricao:
      "FABRICAÇÃO DE OUTRAS MÁQUINAS E EQUIPAMENTOS DE USO GERAL, NÃO ESPECIFICADOS ANTERIORMENTE, PEÇAS E ACESSÓRIOS",
    risco: "ALTO",
    compreende: [
      "Fabricação de hemodialisadores e câmaras de bronzeamento artificial.",
      "Depósito fechado e Laboratório de Controle de Qualidade próprio instalado em endereço diverso.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 52],
    },
  },
  {
    cnae: "3092-0/00",
    descricao:
      "FABRICAÇÃO DE BICICLETAS E TRICICLOS NÃO MOTORIZADOS, PEÇAS E ACESSÓRIOS",
    risco: "ALTO",
    compreende: [
      "Fabricação, depósito fechado e Laboratório de Controle de Qualidade de cadeiras de rodas (com ou sem motor).",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "3250-7/01",
    descricao:
      "FABRICAÇÃO DE INSTRUMENTOS NÃO ELETRÔNICOS E UTENSÍLIOS PARA USO MÉDICO, CIRÚRGICO, ODONTOLÓGICO E DE LABORATÓRIO",
    risco: "ALTO",
    compreende: [
      "Fabricação de instrumentos não eletrônicos e utensílios (termômetros clínicos, bisturis, seringas, agulhas, cateteres, etc.).",
      "Fabricação de esterilizadores para uso médico, hospitalar ou laboratorial.",
      "Unidade de esterilização por óxido de etileno vinculada à fabricação industrial.",
      "Depósito fechado e Laboratório de Controle de Qualidade correspondente.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "3250-7/02",
    descricao:
      "FABRICAÇÃO DE MOBILIÁRIO PARA USO MÉDICO, CIRÚRGICO, ODONTOLÓGICO E DE LABORATÓRIO",
    risco: "ALTO",
    compreende: [
      "Fabricação de mobiliário de uso médico, hospitalar ou odontológico voltados à saúde.",
      "Fabricação de equipamentos e aparelhos aplicados à educação física ou estética não eletrônicos.",
      "Depósito fechado e Laboratório de Controle de Qualidade próprio em endereço diverso.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "3250-7/04",
    descricao:
      "FABRICAÇÃO DE APARELHOS E UTENSÍLIOS PARA CORREÇÃO DE DEFEITOS FÍSICOS E APARELHOS ORTOPÉDICOS EM GERAL, EXCETO SOB ENCOMENDA",
    risco: "ALTO",
    compreende: [
      "Fabricação industrial de artigos/aparelhos para correção de defeitos físicos, membros artificiais e aparelhos ortopédicos gerais.",
      "Depósito fechado e Laboratório de Controle de Qualidade correspondente.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "3250-7/05",
    descricao: "FABRICAÇÃO DE MATERIAIS PARA MEDICINA E ODONTOLOGIA",
    risco: "ALTO",
    compreende: [
      "Fabricação de materiais descartáveis, implantáveis, semissólidos, bolsas de sangue, DIUs ou diagnósticos in vitro.",
      "Unidade de esterilização por radiação ionizante ou por óxido de etileno integrada à fabricação.",
      "Depósito fechado de estocagem e Laboratório de Controle de Qualidade em endereço diverso.",
    ],
    documentos: {
      previos: [1, 2, 3, 4, 5, 6, 9], // Código 1 incluído devido à esterilização por radiação ionizante
      durante: [23, 25, 29, 31, 32, 33, 37, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "3250-7/07",
    descricao: "FABRICAÇÃO DE ARTIGOS ÓPTICOS",
    risco: "ALTO",
    compreende: [
      "Fabricação de lentes de contato e lentes intraoculares.",
      "Unidade de esterilização integrada por radiação ionizante ou óxido de etileno.",
      "Depósito fechado de estocagem e Laboratório de Controle de Qualidade próprio.",
    ],
    documentos: {
      previos: [1, 2, 3, 4, 5, 6, 9],
      durante: [23, 25, 29, 31, 32, 33, 37, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "3292-2/02",
    descricao:
      "FABRICAÇÃO DE EQUIPAMENTOS E ACESSÓRIOS PARA SEGURANÇA PESSOAL E PROFISSIONAL",
    risco: "ALTO",
    compreende: [
      "Fabricação de artefatos de tecido não tecido (gorros, máscaras, aventais, lençóis) e luvas cirúrgicas ou de procedimento.",
      "Unidade de esterilização integrada por radiação ou óxido de etileno.",
      "Depósito fechado e Laboratório de Controle de Qualidade correspondente.",
    ],
    documentos: {
      previos: [1, 2, 3, 4, 5, 6, 9],
      durante: [23, 25, 29, 31, 32, 33, 37, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "6203-1/00",
    descricao:
      "DESENVOLVIMENTO E LICENCIAMENTO DE PROGRAMAS DE COMPUTADOR NÃO CUSTOMIZÁVEIS",
    risco: "ALTO",
    compreende: [
      "Desenvolvimento de softwares reconhecidos como produto para saúde (SaMD) voltados ao processamento de dados médicos para diagnóstico, monitoramento, modelagem cirúrgica ou dosimetria automatizada.",
    ],
    documentos: {
      previos: [], // Classificado como N.A. no texto enviado
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46],
    },
  },
  {
    cnae: "1742-7/01",
    descricao: "FABRICAÇÃO DE FRALDAS DESCARTÁVEIS",
    risco: "ALTO",
    compreende: [
      "Estabelecimento fabril de fraldas descartáveis.",
      "Depósito fechado de armazenamento de fraldas descartáveis.",
      "Laboratório de Controle de Qualidade próprio instalado em endereço diverso do estabelecimento fabril.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "1742-7/02",
    descricao: "FABRICAÇÃO DE ABSORVENTES HIGIÊNICOS",
    risco: "ALTO",
    compreende: [
      "Estabelecimento fabril de absorventes e tampões higiênicos.",
      "Depósito fechado de armazenamento e Laboratório de Controle de Qualidade em endereço diverso.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "2063-1/00",
    descricao:
      "FABRICAÇÃO DE COSMÉTICOS, PRODUTOS DE PERFUMARIA E DE HIGIENE PESSOAL",
    risco: "ALTO",
    compreende: [
      "Fabricação de cosméticos, produtos de higiene, perfumes, repelentes de uso tópico, fios/fitas dentais e hastes flexíveis com algodão.",
      "Fabricação de lenços umedecidos para higiene, lenços de papel especial, discos demaquilantes e odorizantes de ambientes.",
      "Depósitos fechados de estocagem e Laboratório de Controle de Qualidade próprio em endereço diverso.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "3291-4/00",
    descricao: "FABRICAÇÃO DE ESCOVAS, PINCÉIS E VASSOURAS",
    risco: "ALTO",
    compreende: [
      "Fabricação, depósito fechado e laboratório analítico de escovas dentais para uso humano.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "2052-5/00",
    descricao: "FABRICAÇÃO DE DESINFESTANTES DOMISSANITÁRIOS",
    risco: "ALTO",
    compreende: [
      "Fabricação de inseticidas, moluscicidas, rodenticidas e repelentes químicos contra animais sinantrópicos indesejáveis.",
      "Fabricação de produtos para jardinagem amadora, depósitos e Laboratório de Controle de Qualidade.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "2061-4/00",
    descricao: "FABRICAÇÃO DE SABÕES E DETERGENTES SINTÉTICOS",
    risco: "ALTO",
    compreende: [
      "Fabricação de sabões e detergentes para uso doméstico, institucional e profissional.",
      "Fabricação de amaciantes ou suavizantes de tecidos, depósitos fechados e laboratório próprio.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "2062-2/00",
    descricao: "FABRICAÇÃO DE PRODUTOS DE LIMPEZA E POLIMENTO",
    risco: "ALTO",
    compreende: [
      "Fabricação de alvejantes, branqueadores, desincrustrantes, saponáceos, ceras, lustradores e removedores.",
      "Fabricação de neutralizadores, eliminadores ou odorizantes de odores ambientais.",
      "Fabricação de domissanitários com ação antimicrobiana (hipoclorito de sódio, desinfetantes, algicidas, potabilizadores) e produtos biológicos.",
      "Depósitos fechados de estocagem e Laboratório de Controle de Qualidade integrado.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "2014-2/00",
    descricao: "FABRICAÇÃO DE GASES INDUSTRIAIS",
    risco: "ALTO",
    compreende: [
      "Fabricação de gases medicinais (líquidos e comprimidos) para fins terapêuticos e misturas medicinais.",
      "Fabricação de gases elementares (oxigênio e nitrogênio) e óxido de etileno para esterilização.",
      "Depósitos fechados e Laboratório de Controle de Qualidade próprio em endereço diverso.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "2121-1/01",
    descricao: "FABRICAÇÃO DE MEDICAMENTOS ALOPÁTICOS PARA USO HUMANO",
    risco: "ALTO",
    compreende: [
      "Fabricação de especialidades farmacêuticas alopáticas sistêmicas, anti-infecciosas, dermatológicas, oftálmicas e sob controle especial.",
      "Fabricação de medicamentos opoterápicos, soros, vacinas, derivados do sangue e substâncias radioativas terapêuticas/diagnósticas.",
      "Soluções parenterais de grande volume (SPGV) e pequeno volume (SPPV); antissépticos, bactericidas e germicidas profiláticos.",
      "Fabricação de curativos, bandagens, gazes e hastes impregnadas com substâncias terapêuticas.",
      "Depósitos fechados e Laboratório de Controle de Qualidade próprio em endereço diverso.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 52],
    },
  },
  {
    cnae: "2121-1/02",
    descricao: "FABRICAÇÃO DE MEDICAMENTOS HOMEOPÁTICOS PARA USO HUMANO",
    risco: "ALTO",
    compreende: [
      "Fabricação e depósitos fechados de especialidades farmacêuticas homeopáticas para uso humano.",
      "Laboratório de Controle de Qualidade próprio instalado em endereço diverso do estabelecimento fabril.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 49, 52],
    },
  },
  {
    cnae: "2121-1/03",
    descricao: "FABRICAÇÃO DE MEDICAMENTOS FITOTERÁPICOS PARA USO HUMANO",
    risco: "ALTO",
    compreende: [
      "Fabricação e depósitos fechados de especialidades farmacêuticas fitoterápicas para uso humano.",
      "Laboratório de Controle de Qualidade próprio instalado em endereço diverso do estabelecimento fabril.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "2123-8/00",
    descricao: "FABRICAÇÃO DE PREPARAÇÕES FARMACÊUTICAS",
    risco: "ALTO",
    compreende: [
      "Fabricação de medicamentos farmacopeicos ou oficinais (água oxigenada 10 vols., tintura de iodo, etc.) e antissépticos cirúrgicos.",
      "Depósitos fechados de estocagem e Laboratório de Controle de Qualidade correspondente.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "2110-6/00",
    descricao: "FABRICAÇÃO DE PRODUTOS FARMOQUÍMICOS",
    risco: "ALTO",
    compreende: [
      "Fabricação de insumos farmacêuticos ativos (IFAs) por síntese química, extração vegetal/animal ou via biotecnológica.",
      "Fabricação de excipientes, adjuvantes, essências/aromas e insumos sob controle especial ou precursores.",
      "Depósitos fechados de insumos e Laboratório de Controle de Qualidade próprio.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "1099-6/03",
    descricao: "FABRICAÇÃO DE FERMENTOS E LEVEDURAS",
    risco: "ALTO",
    compreende: [
      "Fabricação, depósito fechado e laboratório de monitoramento analítico de fermentos e leveduras.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "2093-2/00",
    descricao: "FABRICAÇÃO DE ADITIVOS DE USO INDUSTRIAL",
    risco: "ALTO",
    compreende: [
      "Fabricação de aditivos alimentares e coadjuvantes de tecnologia (corantes, pigmentos, ácidos graxos, conservadores, espessantes) utilizando ou não precursores.",
      "Fabricação de extratos aromáticos naturais, resinoides, óleos essenciais e misturas odoríferas para cosméticos e saneantes que utilizam precursores.",
      "Depósitos fechados de insumos/aditivos e Laboratório de Controle de Qualidade integrado.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 52],
    },
  },
  {
    cnae: "4621-4/00",
    descricao: "COMÉRCIO ATACADISTA DE CAFÉ EM GRÃO",
    risco: "MÉDIO",
    compreende: [
      "Estabelecimento comercial atacadista que armazena café em grão, em coco, ou verde.",
      "Estabelecimento comercial atacadista que contrata local de armazenamento para café em grão, em coco, ou verde.",
      "Depósito fechado no qual se armazenam cafés em grão, em coco e ou verde.",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 36, 38, 39, 40, 43, 46],
    },
  },
  {
    cnae: "4622-2/00",
    descricao: "COMÉRCIO ATACADISTA DE SOJA",
    risco: "MÉDIO",
    compreende: [
      "Estabelecimento comercial atacadista que armazena soja.",
      "Estabelecimento comercial atacadista que contrata local de armazenamento para soja.",
      "Depósito fechado no qual se armazena soja.",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 36, 38, 39, 40, 43, 46],
    },
  },
  {
    cnae: "4623-1/05",
    descricao: "COMÉRCIO ATACADISTA DE CACAU",
    risco: "MÉDIO",
    compreende: [
      "Estabelecimento comercial atacadista que armazena cacau (em bagas ou em amêndoas).",
      "Estabelecimento comercial atacadista que contrata local de armazenamento para cacau (em bagas ou em amêndoas).",
      "Depósito fechado no qual se armazena cacau (em bagas ou em amêndoas).",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 36, 38, 39, 40, 43, 46],
    },
  },
  {
    cnae: "4631-1/00",
    descricao: "COMÉRCIO ATACADISTA DE LEITE E LATICÍNIOS",
    risco: "MÉDIO",
    compreende: [
      "Estabelecimento comercial atacadista que armazena leite resfriado, pasteurizado, aromatizado e em pó.",
      "Estabelecimento comercial atacadista que armazena derivados do leite, tais como: manteigas, iogurtes, queijos, requeijões e similares.",
      "Estabelecimento comercial atacadista que armazena margarinas.",
      "Estabelecimento comercial atacadista que contrata local de armazenamento ou possui depósito fechado para leites, laticínios e margarina.",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 36, 38, 39, 40, 43, 46],
    },
  },
  {
    cnae: "4632-0/01",
    descricao: "COMÉRCIO ATACADISTA DE CEREAIS E LEGUMINOSAS - BENEFICIADOS",
    risco: "MÉDIO",
    compreende: [
      "Estabelecimento comercial atacadista de leguminosas e cereais beneficiados (arroz, feijão, milho, trigo, centeio, etc.).",
      "Estabelecimento comercial atacadista que contrata local de armazenamento ou possui depósito fechado de cereais beneficiados.",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 36, 38, 39, 40, 43, 46],
    },
  },
  {
    cnae: "4632-0/02",
    descricao: "COMÉRCIO ATACADISTA DE FARINHAS, AMIDOS E FÉCULAS",
    risco: "MÉDIO",
    compreende: [
      "Estabelecimento comercial atacadista, contratação de local de armazenamento e depósito fechado para farinhas, amidos e féculas.",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 36, 38, 39, 40, 43, 46],
    },
  },
  {
    cnae: "4632-0/03",
    descricao:
      "COMÉRCIO ATACADISTA DE CEREAIS E LEGUMINOSAS BENEFICIADOS, FARINHAS, AMIDOS E FÉCULAS COM ATIVIDADE DE FRACIONAMENTO E ACONDICIONAMENTO ASSOCIADA",
    risco: "ALTO",
    compreende: [
      "Estabelecimento comercial atacadista de leguminosas com atividades de fracionamento e acondicionamento associadas.",
      "Estabelecimento comercial atacadista de leguminosas com serviço de empacotamento por conta própria.",
      "Depósito fechado no qual se armazenam as leguminosas fracionadas.",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 38, 39, 40, 43],
    },
  },
  {
    cnae: "4633-8/01",
    descricao:
      "COMÉRCIO ATACADISTA DE FRUTAS, VERDURAS, RAÍZES, TUBÉRCULOS, HORTALIÇAS E LEGUMES FRESCOS",
    risco: "MÉDIO",
    compreende: [
      "Estabelecimento comercial atacadista de produtos hortifrutigranjeiros.",
      "Produtos frescos submetidos a processos iniciais como descascamento, desconchamento e ou remoção das partes não comestíveis.",
      "Contratação de local de armazenamento e depósito fechado de hortifrutis minimamente processados.",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 36, 38, 39, 40, 43, 46],
    },
  },
  {
    cnae: "4633-8/02",
    descricao: "COMÉRCIO ATACADISTA DE AVES VIVAS E OVOS",
    risco: "MÉDIO",
    compreende: [
      "Estabelecimento comercial atacadista de ovos, contratação de local de armazenamento terceirizado e depósitos fechados de ovos.",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 36, 38, 39, 40, 43, 46],
    },
  },
  {
    cnae: "4634-6/01",
    descricao: "COMÉRCIO ATACADISTA DE CARNES BOVINAS, SUINAS E DERIVADOS",
    risco: "MÉDIO",
    compreende: [
      "Comércio atacadista e armazenamento de carne de bovinos e suínos fresca, frigorificada ou congelada.",
      "Carne preparada de bovinos e suínos, seca, salgada e produtos de salsicharia.",
      "Contratação de local de armazenamento e depósito fechado das carnes e embutidos citados.",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 36, 38, 39, 40, 43, 46],
    },
  },
  {
    cnae: "4634-6/02",
    descricao: "COMÉRCIO ATACADISTA DE AVES ABATIDAS E DERIVADOS",
    risco: "MÉDIO",
    compreende: [
      "Estabelecimento comercial atacadista, contratação de local de armazenamento ou depósito fechado de aves abatidas frescas, frigorificadas, congeladas e seus derivados.",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 36, 38, 39, 40, 43, 46],
    },
  },
  {
    cnae: "4634-6/03",
    descricao: "COMÉRCIO ATACADISTA DE PESCADO E FRUTOS DO MAR",
    risco: "MÉDIO",
    compreende: [
      "Estabelecimento comercial atacadista, contratação de local de armazenamento ou depósito fechado de peixes e outros frutos do mar frescos, frigorificados ou congelados.",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 36, 38, 39, 40, 43, 46],
    },
  },
  {
    cnae: "4634-6/99",
    descricao: "COMÉRCIO ATACADISTA DE CARNES E DERIVADOS DE OUTROS ANIMAIS",
    risco: "MÉDIO",
    compreende: [
      "Atacadista, contratação de armazenamento ou depósito fechado de carnes e derivados de caprinos, ovinos, equídeos e outros animais.",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 36, 38, 39, 40, 43, 46],
    },
  },
  {
    cnae: "4635-4/01",
    descricao: "COMÉRCIO ATACADISTA DE ÁGUA MINERAL",
    risco: "MÉDIO",
    compreende: [
      "Atacadista distribuidor, contratação de local de armazenamento e depósitos fechados de água mineral envasada.",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 36, 38, 39, 40, 43, 46],
    },
  },
  {
    cnae: "4635-4/02",
    descricao: "COMÉRCIO ATACADISTA DE CERVEJA, CHOPE E REFRIGERANTE",
    risco: "MÉDIO",
    compreende: [
      "Estabelecimento comercial atacadista, contratação de local de armazenamento e depósito fechado de cervejas, chopes e refrigerantes.",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 36, 38, 39, 40, 43, 46],
    },
  },
  {
    cnae: "4635-4/99",
    descricao: "COMÉRCIO ATACADISTA DE BEBIDAS NÃO ESPECIFICADAS ANTERIORMENTE",
    risco: "MÉDIO",
    compreende: [
      "Atacadista de outras bebidas alcoólicas (vinho, cachaça, destilados) e não alcoólicas (sucos, chás), incluindo contratação de armazenagem e depósitos fechados.",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 36, 38, 39, 40, 43, 46],
    },
  },
  {
    cnae: "4637-1/01",
    descricao: "COMÉRCIO ATACADISTA DE CAFÉ TORRADO, MOÍDO E SOLÚVEL",
    risco: "MÉDIO",
    compreende: [
      "Atacadista, contratação de local de armazenamento e depósitos fechados de café torrado, moído e solúvel.",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 36, 38, 39, 40, 43, 46],
    },
  },
  {
    cnae: "4637-1/02",
    descricao: "COMÉRCIO ATACADISTA DE AÇÚCAR",
    risco: "MÉDIO",
    compreende: [
      "Atacadista, contratação de local de armazenamento e depósitos fechados de açúcares industriais.",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 36, 38, 39, 40, 43, 46],
    },
  },
  {
    cnae: "4637-1/03",
    descricao: "COMÉRCIO ATACADISTA DE ÓLEOS E GORDURAS",
    risco: "MÉDIO",
    compreende: [
      "Atacadista de óleos refinados e gorduras de origem animal ou vegetal, incluindo contratação de estocagem e depósitos fechados.",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 36, 38, 39, 40, 43, 46],
    },
  },
  {
    cnae: "4637-1/04",
    descricao: "COMÉRCIO ATACADISTA DE PÃES, BOLOS, BISCOITOS E SIMILARES",
    risco: "MÉDIO",
    compreende: [
      "Atacadista, contratação de local de armazenamento e depósitos fechados de pães, bolos, biscoitos e produtos similares de panificação.",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 36, 38, 39, 40, 43, 46],
    },
  },
  {
    cnae: "4637-1/05",
    descricao: "COMÉRCIO ATACADISTA DE MASSAS ALIMENTÍCIAS",
    risco: "MÉDIO",
    compreende: [
      "Atacadista, contratação de local de armazenamento e depósitos fechados de massas alimentícias em geral.",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 36, 38, 39, 40, 43, 46],
    },
  },
  {
    cnae: "4637-1/06",
    descricao: "COMÉRCIO ATACADISTA DE SORVETES",
    risco: "MÉDIO",
    compreende: [
      "Atacadista, contratação de armazenamento ou depósito de sorvetes, picolés, tortas geladas e similares.",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 36, 38, 39, 40, 43, 46],
    },
  },
  {
    cnae: "4637-1/07",
    descricao:
      "COMÉRCIO ATACADISTA DE CHOCOLATES, CONFEITOS, BALAS, BOMBONS E SEMELHANTES",
    risco: "MÉDIO",
    compreende: [
      "Atacadista, contratação de armazenamento ou depósito de chocolates, confeitos, balas, bombons e doces semelhantes.",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 36, 38, 39, 40, 43, 46],
    },
  },
  {
    cnae: "4637-1/99",
    descricao:
      "COMÉRCIO ATACADISTA ESPECIALIZADO EM OUTROS PRODUTOS ALIMENTÍCIOS NÃO ESPECIFICADOS ANTERIORMENTE",
    risco: "ALTO_MÉDIO",
    compreende: [
      "Atacadista de chás, mel, sucos, condimentos, vinagres, adoçantes e conservas hortifrutis (Risco Médio).",
      "Alimentos preparados em fritura e congelados para micro-ondas (Risco Médio).",
      "Importação e comércio atacadista de suplementos alimentares, aditivos alimentares e alimentos com alegação de propriedade funcional ou fins especiais (Risco Alto).",
      "Contratação de armazenamento e depósitos fechados específicos para produtos de Risco Alto ou Risco Médio.",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46],
    },
  },
  {
    cnae: "4639-7/01",
    descricao: "COMÉRCIO ATACADISTA DE PRODUTOS ALIMENTÍCIOS EM GERAL",
    risco: "MÉDIO",
    compreende: [
      "Estabelecimento comercial atacadista, contratação de local de armazenamento terceirizado e depósito fechado de produtos alimentícios em geral.",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 36, 38, 39, 40, 43, 46],
    },
  },
  {
    cnae: "4686-9/02",
    descricao: "COMÉRCIO ATACADISTA DE EMBALAGENS",
    risco: "MÉDIO",
    compreende: [
      "Importação, comercialização, contratação de armazenamento e depósito fechado de embalagens destinadas a entrar em contato com alimentos.",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 31, 32, 33, 38, 39, 40, 43, 45],
    },
  },
  {
    cnae: "4691-5/00",
    descricao:
      "COMÉRCIO ATACADISTA DE MERCADORIAS EM GERAL, COM PREDOMINÂNCIA DE PRODUTOS ALIMENTÍCIOS",
    risco: "MÉDIO",
    compreende: [
      "Atacadista de mercadorias gerais com predominância de alimentos, incluindo contratação de armazenamento e depósitos fechados.",
      "Montagem de cestas básicas com produtos alimentícios não perecíveis, industrializados e previamente embalados.",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 38, 39, 40, 43],
    },
  },
  {
    cnae: "4649-4/08",
    descricao:
      "COMÉRCIO ATACADISTA DE PRODUCTS DE HIGIENE, LIMPEZA E CONSERVAÇÃO DOMICILIAR",
    risco: "ALTO",
    compreende: [
      "Estabelecimento comercial atacadista de produtos saneantes e domissanitários para limpeza geral e afins (alvejantes, branqueadores, desincrustrantes, saponáceos, amaciantes, ceras, limpadores, removedores, sabões e detergentes).",
      "Estabelecimento comercial atacadista de produtos saneantes e domissanitários com ação antimicrobiana, água sanitária, potabilizadores de água, desinfetantes, desodorizantes e algicidas.",
      "Estabelecimento comercial atacadista de produtos saneantes domissanitários neutralizadores, eliminadores, odorizantes ou aromatizantes de ambientes.",
      "Estabelecimento comercial atacadista de produtos saneantes domissanitários biológicos para uso profissional.",
      "Estabelecimento comercial atacadista de desinfestantes domissanitários (inseticidas, repelentes, rodenticidas) e de produtos para jardinagem amadora.",
      "Estabelecimento comercial atacadista que contrata local de armazenamento ou possui depósito fechado para qualquer um dos produtos saneantes e domissanitários citados.",
    ],
    documentos: {
      previos: [], // Consta estritamente como N.A. em todos os blocos da atividade
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 60],
    },
  },
  {
    cnae: "4711-3/01",
    descricao:
      "COMÉRCIO VAREJISTA DE MERCADORIAS EM GERAL, COM PREDOMINANCIA DE PRODUTOS ALIMENTÍCIOS - HIPERMERCADOS",
    risco: "MÉDIO",
    compreende: [
      "Estabelecimento comercial com venda predominante de produtos alimentícios variados e outras mercadorias gerais com área de venda superior a 5.000 metros quadrados.",
      "Depósito fechado no qual se armazenam predominantemente os produtos alimentícios variados e mercadorias correlatas do hipermercado.",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 38, 39, 40, 43],
    },
  },
  {
    cnae: "4711-3/02",
    descricao:
      "COMÉRCIO VAREJISTA DE MERCADORIAS EM GERAL, COM PREDOMINANCIA DE PRODUTOS ALIMENTÍCIOS - SUPERMERCADOS",
    risco: "MÉDIO",
    compreende: [
      "Estabelecimento comercial com venda predominante de produtos alimentícios variados e outras mercadorias gerais com área de venda entre 300 a 5.000 metros quadrados.",
      "Depósito fechado no qual se armazenam predominantemente os produtos alimentícios variados e mercadorias correlatas do supermercado.",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 38, 39, 40, 43],
    },
  },
  {
    cnae: "4712-1/00",
    descricao:
      "COMÉRCIO VAREJISTA DE MERCADORIAS EM GERAL, COM PREDOMINANCIA DE PRODUTOS ALIMENTÍCIOS – MINIMERCADOS, MERCEARIAS E ARMAZÉNS",
    risco: "MÉDIO",
    compreende: [
      "Minimercados, mercearias, armazéns, empórios e secos e molhados com área de venda inferior a 300 metros quadrados, que possuem açougue e/ou peixaria e/ou padaria com manipulação no local.",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 38, 39, 40],
    },
  },
  {
    cnae: "4721-1/02",
    descricao: "PADARIA E CONFEITARIA COM PREDOMINANCIA DE REVENDA",
    risco: "MÉDIO",
    compreende: [
      "Estabelecimento comercial varejista de pães, roscas, bolos, tortas e outros produtos de padaria quando a revenda de itens de terceiros é predominante.",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 38, 39, 40],
    },
  },
  {
    cnae: "4721-1/03",
    descricao: "COMÉRCIO VAREJISTA DE LATICÍNIOS E FRIOS",
    risco: "MÉDIO",
    compreende: [
      "Estabelecimento comercial varejista de leite, derivados (manteiga, creme de leite, iogurte, coalhada) e frios / carnes conservadas.",
      "Estabelecimento comercial varejista de conservas de frutas, legumes, verduras e produtos similares.",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 38, 39, 40],
    },
  },
  {
    cnae: "4722-9/01",
    descricao: "COMÉRCIO VAREJISTA DE CARNES - AÇOUGUE",
    risco: "MÉDIO",
    compreende: [
      "Estabelecimento comercial varejista de carnes de bovino, suíno, caprino, ovino e equídeo frescas, frigorificadas e ou congeladas.",
      "Estabelecimento comercial varejista de aves e pequenos animais abatidos (coelhos, patos, perus, galinhas) frescos ou congelados.",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 38, 39, 40],
    },
  },
  {
    cnae: "4722-9/02",
    descricao: "PEIXARIA",
    risco: "MÉDIO",
    compreende: [
      "Estabelecimento comercial varejista de pescados, crustáceos e moluscos frescos, congelados, conservados ou frigorificados.",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 38, 39, 40],
    },
  },
  {
    cnae: "5510-8/01",
    descricao: "HOTÉIS",
    risco: "MÉDIO",
    compreende: [
      "Atividade de hotéis e pousadas combinadas com o serviço de alimentação que seja aberto ao público externo.",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 38, 39, 40],
    },
  },
  {
    cnae: "5611-2/01",
    descricao: "RESTAURANTES E SIMILARES",
    risco: "MÉDIO",
    compreende: [
      "Manipular, preparar, armazenar, vender e servir comida com ou sem bebida ao público (pizzarias, churrascarias, self-service ou comida a quilo).",
      "Restaurante e ou bar operando em embarcações exploradas por terceiros.",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 38, 39, 40],
    },
  },
  {
    cnae: "5611-2/03",
    descricao: "LANCHONETE, CASAS DE CHÁ, DE SUCOS E SIMILARES",
    risco: "MÉDIO",
    compreende: [
      "Serviço de alimentação para consumo no local, englobando lanchonetes, cafeterias, casas de caldo de cana, chá, doces, salgados e sucos.",
      "Fast-food, pastelarias, pizzarias tipo fast-food e sorveterias com consumo no local (de fabricação própria ou não).",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 38, 39, 40],
    },
  },
  {
    cnae: "5620-1/01",
    descricao:
      "FORNECIMENTO DE ALIMENTOS PREPARADOS PREPONDERANTEMENTE PARA EMPRESAS",
    risco: "ALTO", // Cozinha industrial e Catering sob contrato é classificado como Risco III (Alto)
    compreende: [
      "Cozinha industrial que fornece alimentos sob contrato para instituições públicas/privadas, hospitais e indústrias, utilizando as instalações do contratante.",
      "Preparação de refeições em cozinha central (catering) para empresas de linhas aéreas, transporte, cantinas e serviços privativos de alimentação.",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 45, 46],
    },
  },
  {
    cnae: "5620-1/02",
    descricao: "SERVIÇOS DE ALIMENTAÇÃO PARA EVENTOS E RECEPÇÕES - BUFÊ",
    risco: "MÉDIO",
    compreende: [
      "Serviço de Bufê com fornecimento de alimentação para banquetes, coquetéis e recepções com preparo em instalação própria.",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 38, 39, 40],
    },
  },
  {
    cnae: "5620-1/03",
    descricao: "CANTINAS - SERVIÇOS DE ALIMENTAÇÃO PRIVATIVOS",
    risco: "MÉDIO",
    compreende: [
      "Serviço de alimentação varejista em caráter privativo (terceirizado ou próprio) para grupos restritos em fábricas, universidades, colégios, associações ou órgãos públicos.",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 38, 39, 40],
    },
  },
  {
    cnae: "5620-1/04",
    descricao:
      "FORNECIMENTO DE ALIMENTOS PREPARADOS PREPONDERANTEMENTE PARA CONSUMO DOMICILIAR",
    risco: "MÉDIO",
    compreende: [
      "Preparação de refeições ou pratos cozidos/congelados entregues ou servidos em domicílio (marmitarias).",
      "Pizzarias sem consumo local operando exclusivamente em sistema de delivery.",
      "Rotisseria (loja especializada em refeições, antepastos, frios, saladas, molhos e sobremesas para consumo domiciliar).",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 38, 39, 40],
    },
  },
  {
    cnae: "8622-4/00",
    descricao:
      "SERVIÇOS DE REMOÇÃO DE PACIENTES, EXCETO OS SERVIÇOS MÓVEIS DE ATENDIMENTO A URGÊNCIAS",
    risco: "MÉDIO",
    compreende: [
      "Estabelecimento prestador de serviço exclusivo de transporte e remoção de pacientes, de caráter eletivo, em unidade móvel classificada como Ambulância tipo A.",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 31, 32, 38, 39, 40, 41, 46],
    },
  },
  {
    cnae: "8640-2/08",
    descricao:
      "SERVIÇOS DE DIAGNÓSTICO POR REGISTRO GRÁFICO, ECG, EEG E OUTROS EXAMES ANÁLOGOS",
    risco: "MÉDIO",
    compreende: [
      "Estabelecimento no qual se presta serviço de diagnóstico por registro gráfico (ECG, EEG e outros exames análogos).",
    ],
    documentos: {
      previos: [],
      durante: [21, 23, 29, 31, 32, 36, 38, 39, 40, 41, 46],
    },
  },
  {
    cnae: "8650-0/01",
    descricao: "ATIVIDADES DE ENFERMAGEM",
    risco: "MÉDIO",
    compreende: [
      "Estabelecimento ou consultório no qual enfermeiro presta assistência de enfermagem.",
    ],
    documentos: {
      previos: [],
      durante: [21, 23, 26, 27, 29, 31, 32, 33, 38, 39, 40, 41, 45, 46],
    },
  },
  {
    cnae: "8650-0/99",
    descricao:
      "ATIVIDADES DE PROFISSIONAIS DA ÁREA DE SAÚDE NÃO ESPECIFICADAS ANTERIORMENTE",
    risco: "MÉDIO",
    compreende: [
      "Estabelecimento ou consultório isolado no qual se presta assistência por optometrista de nível superior.",
    ],
    documentos: {
      previos: [],
      durante: [21, 23, 26, 27, 29, 38, 39, 40, 41, 45, 46],
    },
  },
  {
    cnae: "8690-9/03",
    descricao: "ATIVIDADES DE ACUPUNTURA",
    risco: "MÉDIO",
    compreende: [
      "Estabelecimento ou consultório isolado no qual se exercem atividades de acupuntura por profissionais habilitados.",
    ],
    documentos: {
      previos: [],
      durante: [21, 23, 26, 27, 29, 38, 39, 40, 41, 46],
    },
  },
  {
    cnae: "8690-9/04",
    descricao: "ATIVIDADES DE PODOLOGIA",
    risco: "MÉDIO",
    compreende: [
      "Estabelecimento ou consultório isolado no qual se presta serviço de podologia.",
    ],
    documentos: {
      previos: [],
      durante: [21, 23, 26, 27, 29, 38, 39, 40, 41, 46],
    },
  },
  {
    cnae: "3812-2/00",
    descricao: "COLETA DE RESÍDUOS PERIGOSOS",
    risco: "MÉDIO",
    compreende: [
      "Estabelecimento no qual se prestam serviços de coleta, transporte e transbordo de resíduos de serviços de saúde perigosos, de quaisquer tipos, em qualquer estado físico.",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 31, 32, 36, 38, 39, 40, 46],
    },
  },
  {
    cnae: "8591-1/00",
    descricao: "ENSINO DE ESPORTES",
    risco: "MÉDIO",
    compreende: [
      "Estabelecimento de ensino de esportes praticados em piscinas.",
    ],
    documentos: {
      previos: [],
      durante: [21, 23, 26, 29, 31, 32, 38, 39, 40],
    },
  },
  {
    cnae: "8730-1/01",
    descricao: "ORFANATOS",
    risco: "MÉDIO",
    compreende: [
      "Estabelecimento de assistência social às crianças em regime de internato, quando o tratamento médico não constitui o elemento central deste atendimento.",
    ],
    documentos: {
      previos: [],
      durante: [21, 23, 26, 29, 38, 39, 40],
    },
  },
  {
    cnae: "8730-1/02",
    descricao: "ALBERGUES ASSISTENCIAIS",
    risco: "MÉDIO",
    compreende: [
      "Estabelecimento no qual se exercem atividades de assistência social à adultos desabrigados temporariamente e às outras categorias.",
      "Asilo para desabrigados, Casa de Apoio (tipo I para HIV/AIDS), Casa de solidariedade, Casa de triagem e Casa transitória.",
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 38, 39, 40],
    },
  },
  {
    cnae: "9312-3/00",
    descricao: "CLUBES SOCIAIS, DESPORTIVOS E SIMILARES",
    risco: "MÉDIO",
    compreende: [
      "Clube social que possibilita a prática de atividades e esportes em piscinas, como recreação, natação, hidroginástica, polo-aquático, entre outros.",
    ],
    documentos: {
      previos: [],
      durante: [21, 23, 26, 29, 31, 32, 38, 39, 40],
    },
  },
  {
    cnae: "9321-2/00",
    descricao: "PARQUES DE DIVERSÕES E PARQUES TEMÁTICOS",
    risco: "MÉDIO",
    compreende: ["Parque aquático."],
    documentos: {
      previos: [],
      durante: [23, 29, 31, 32, 38, 39, 40],
    },
  },
  {
    cnae: "9603-3/99",
    descricao:
      "ATIVIDADES FUNERÁRIAS E SERVIÇOS RELACIONADOS NÃO ESPECIFICADOS ANTERIORMENTE",
    risco: "ALTO_MÉDIO",
    compreende: [
      "Estabelecimentos que prestam atividades de remoção de cadáveres humanos e serviço de higienização/maquiagem (Risco Médio).",
      "Estabelecimento que presta atividades de necropsia de humanos como, Serviço de Verificação de Óbito (SVO) e Instituto Médico Legal (IML) (Risco Alto).",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 7, 8, 9], // Aplicáveis ao Serviço de Necropsia/IML
      durante: [23, 29, 38, 39, 40, 52],
    },
  },
  {
    cnae: "3250-7/03",
    descricao:
      "FABRICAÇÃO DE APARELHOS E UTENSÍLIOS PARA CORREÇÃO DE DEFEITOS FÍSICOS E APARELHOS ORTOPÉDICOS EM GERAL, SOB ENCOMENDA",
    risco: "ALTO",
    compreende: [
      "Estabelecimento fabricante de aparelhos e instrumentos para correção de defeitos físicos, membros artificiais e aparelhos ortopédicos em geral, sob encomenda.",
      "Estabelecimento fabricante de calçados ortopédicos de qualquer material, sob encomenda.",
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [21, 23, 27, 29, 33, 38, 39, 40, 44, 52],
    },
  },
  {
    cnae: "3250-7/06",
    descricao: "SERVIÇOS DE PRÓTESE DENTÁRIA",
    risco: "MÉDIO",
    compreende: ["Laboratório de prótese dentária."],
    documentos: {
      previos: [],
      durante: [21, 23, 27, 29, 31, 32, 38, 39, 40, 45],
    },
  },
  {
    cnae: "4774-1/00",
    descricao: "COMÉRCIO VAREJISTA DE ARTIGOS DE ÓTICA",
    risco: "MÉDIO",
    compreende: [
      "Ótica com montagem de lentes oftálmicas com grau sob prescrição.",
      "Estabelecimento comercial varejista de artigos ópticos, inclusive os de lentes de contato descartáveis.",
    ],
    documentos: {
      previos: [],
      durante: [21, 23, 26, 27, 29, 38, 39, 40],
    },
  },
  {
    cnae: "9313-1/00",
    descricao: "ATIVIDADES DE CONDICIONAMENTO FÍSICO",
    risco: "MÉDIO",
    compreende: ["Academia com atividades de hidroginástica."],
    documentos: {
      previos: [],
      durante: [21, 23, 26, 27, 29, 31, 32, 38, 39, 40, 45],
    },
  },
  {
    cnae: "9601-7/03",
    descricao: "TOALHEIROS",
    risco: "ALTO",
    compreende: [
      "Lavanderias que processam roupas hospitalares autônomas e independentes de outro estabelecimento.",
    ],
    documentos: {
      previos: [],
      durante: [23, 27, 29, 38, 39, 40],
    },
  },
  {
    cnae: "9602-5/01",
    descricao: "CABELEIREIROS, MANICURE, PEDICURE E BARBEARIA",
    risco: "MÉDIO",
    compreende: [
      "Estabelecimento que presta atividades de lavagem, corte, penteado, tingimento e outros tratamentos de cabelo.",
      "Estabelecimento que presta serviços de manicure, pedicure e barbearia.",
    ],
    documentos: {
      previos: [],
      durante: [21, 23, 26, 27, 29, 38, 39, 40],
    },
  },
  {
    cnae: "8412-4/00",
    descricao:
      "REGULAÇÃO DAS ATIVIDADES DE SAÚDE, EDUCAÇÃO, SERVIÇOS CULTURAIS E OUTROS SERVIÇOS SOCIAIS",
    risco: "ALTO_MÉDIO",
    compreende: [
      "Estabelecimento público de armazenamento e expedição (almoxarifado) de produtos regulados pela Vigilância Sanitária para o SUS (Risco Alto).",
      "Estabelecimento público de dispensação de medicamentos (Assistência Farmacêutica e Talidomida) e determinações judiciais (Risco Alto).",
      "Estabelecimento integrante de programas de erradicação da fome (Banco de Alimentos) (Risco Médio).",
    ],
    documentos: {
      previos: [],
      durante: [23, 40, 43, 51],
    },
  },
];

export default activities;
