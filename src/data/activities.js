const activities = [
  {
    cnae: "4645-1/01",
    descricao: "COMÉRCIO ATACADISTA DE INSTRUMENTOS E MATERIAIS PARA USO MÉDICO, CIRURGICO, HOSPITALAR E DE LABORATÓRIOS",
    risco: "ALTO",
    compreende: [
      "Estabelecimento comercial atacadista de instrumentos, utensílios, materiais, artigos, produtos, partes e acessórios de uso ou aplicação médica, hospitalar ou laboratorial destinados ao diagnóstico, prevenção, apoio, tratamento ou reabilitação de saúde.",
      "Estabelecimento comercial atacadista que contrata local de armazenamento para instrumentos, utensílios, materiais, artigos, produtos, partes e acessórios de uso ou aplicação médica, hospitalar ou laboratorial.",
      "Depósito fechado no qual se armazenam instrumentos, utensílios, materiais, artigos, produtos, partes e acessórios de uso ou aplicação médica, hospitalar ou laboratorial."
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 60]
    }
  },
  {
    cnae: "4645-1/02",
    descricao: "COMÉRCIO ATACADISTA DE PRÓTESES E ARTIGOS DE ORTOPEDIA",
    risco: "ALTO",
    compreende: [
      "Estabelecimento comercial atacadista de próteses industrializadas e ou artigos de ortopedia industrializados (muleta, cadeira de roda, etc.), inclusive implantes (pinos, placas, dentre outros).",
      "Estabelecimento comercial atacadista que contrata local de armazenamento para próteses industrializadas e ou artigos de ortopedia industrializados.",
      "Depósito fechado no qual se armazenam próteses industrializadas e ou artigos de ortopedia industrializados, inclusive implantes."
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 60]
    }
  },
  {
    cnae: "4645-1/03",
    descricao: "COMÉRCIO ATACADISTA DE PRODUTOS ODONTOLÓGICOS",
    risco: "ALTO",
    compreende: [
      "Estabelecimento comercial atacadista de material, artigo, instrumento odontológico para uso do cirurgião dentista, como: ceras, cimentos, compostos para restauração, implantes odontológicos, dentes artificiais, dentre outros.",
      "Estabelecimento comercial atacadista que contrata local de armazenamento para material, artigo, instrumento odontológico para uso do cirurgião dentista.",
      "Depósito fechado no qual se armazenam materiais, artigos, instrumentos odontológicos para uso do cirurgião dentista."
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 60]
    }
  },
  {
    cnae: "4664-8/00",
    descricao: "COMÉRCIO ATACADISTA DE MÁQUINAS, APARELHOS E EQUIPAMENTOS PARA USO ODONTOMÉDICO-HOSPITALAR, PARTE E PEÇAS",
    risco: "ALTO",
    compreende: [
      "Estabelecimento comercial atacadista de equipamentos, aparelhos, partes, acessórios e mobiliários, de uso ou aplicação médica, hospitalar, odontológica ou laboratorial.",
      "Estabelecimento comercial atacadista de equipamentos, aparelhos, partes, acessórios e mobiliários utilizados em atividades de educação física e ou fisioterapia.",
      "Estabelecimento comercial atacadista de equipamentos, aparelhos, partes, acessórios e mobiliários, de uso ou aplicação em tratamentos de embelezamento e ou de correção estética em humanos.",
      "Estabelecimento comercial atacadista que contrata local de armazenamento para equipamentos, aparelhos, partes, acessórios e mobiliários.",
      "Depósito fechado no qual se armazenam equipamentos, aparelhos, partes, acessórios e mobiliários."
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 60, 61]
    }
  },
  {
    cnae: "7739-0/02",
    descricao: "ALUGUEL DE EQUIPAMENTOS CIENTÍFICOS, MÉDICOS E HOSPITALARES, SEM OPERADOR",
    risco: "ALTO",
    compreende: [
      "Estabelecimento comercial atacadista que exerce activity de aluguel e leasing operacional de equipamentos científicos, médicos e hospitalares."
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 31, 32, 33, 38, 39, 40, 43, 45, 60]
    }
  },
  {
    cnae: "4646-0/01",
    descricao: "COMÉRCIO ATACADISTA DE COSMÉTICOS E PRODUTOS DE PERFUMARIA",
    risco: "ALTO",
    compreende: [
      "Estabelecimento comercial atacadista de cosméticos, perfumes, repelentes de uso tópico e odorizantes/aromatizantes de ambientes.",
      "Contratação de armazenamento ou depósito fechado de cosméticos e perfumes."
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 60]
    }
  },
  {
    cnae: "4646-0/02",
    descricao: "COMÉRCIO ATACADISTA DE PRODUTOS DE HIGIENE PESSOAL",
    risco: "ALTO",
    compreende: [
      "Estabelecimento comercial atacadista de artigos de higiene bucal, produtos de higiene pessoal, absorventes, fraldas, lenços umedecidos e hastes flexíveis.",
      "Armazenamento e depósito fechado dos referidos produtos."
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 60]
    }
  },
  {
    cnae: "4649-4/08",
    descricao: "COMÉRCIO ATACADISTA DE PRODUTOS DE HIGIENE, LIMPEZA E CONSERVAÇÃO DOMICILIAR",
    risco: "ALTO",
    compreende: [
      "Atacadista de saneantes, domissanitários, produtos com ação antimicrobiana, sabões, detergentes, desinfestantes (inseticidas, repelentes) e produtos para jardinagem amadora.",
      "Armazenamento e depósito fechado de saneantes e domissanitários."
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 60, 63]
    }
  },
  {
    cnae: "4644-3/01",
    descricao: "COMÉRCIO ATACADISTA DE MEDICAMENTOS E DROGAS DE USO HUMANO",
    risco: "ALTO",
    compreende: [
      "Atacadista de medicamentos de uso humano (sujeitos ou não a controle especial) e gases medicinais.",
      "Importação, armazenamento, fracionamento de insumos farmacêuticos ativos e não ativos.",
      "Laboratório de Controle de Qualidade próprio em endereço diverso."
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9], // Exigidos para armazenamento próprio, importação e controle de qualidade
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 52]
    }
  },
  {
    cnae: "5620-1/01",
    descricao: "FORNECIMENTO DE ALIMENTOS PREPARADOS PREPONDERANTEMENTE PARA EMPRESAS",
    risco: "ALTO",
    compreende: [
      "Cozinha industrial sob contrato para instituições públicas/privadas, hospitais, indústrias utilizando instalações do contratante.",
      "Preparação de refeições em cozinha central (catering) para empresas de transporte, cantinas e restaurantes privativos."
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 45, 46]
    }
  },
  {
    cnae: "4772-5/00",
    descricao: "COMÉRCIO VAREJISTA DE COSMÉTICOS, PRODUTOS DE PERFUMARIA E DE HIGIENE PESSOAL",
    risco: "ALTO",
    compreende: [
      "Comércio varejista com atividade de fracionamento e embalagem de produtos a granel (perfumes, sabonetes, xampus, etc.) com venda direta."
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 38, 39, 40, 52, 55, 67]
    }
  },
  {
    cnae: "4771-7/01",
    descricao: "COMÉRCIO VAREJISTA DE PRODUTOS FARMACÊUTICOS SEM MANIPULAÇÃO DE FÓRMULAS",
    risco: "ALTO",
    compreende: [
      "Drogaria convencional e drogaria com fracionamento de medicamentos."
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 31, 32, 33, 38, 39, 40, 43, 45]
    }
  },
  {
    cnae: "4771-7/02",
    descricao: "COMÉRCIO VAREJISTA DE PRODUTOS FARMACEUTICOS, COM MANIPULAÇÃO DE FÓRMULAS",
    risco: "ALTO",
    compreende: [
      "Farmácia de manipulação alopática (fórmulas oficiais e magistrais)."
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 33, 38, 39, 40, 43, 45, 52, 67]
    }
  },
  {
    cnae: "4771-7/03",
    descricao: "COMÉRCIO VAREJISTA DE PRODUTOS FARMACÊUTICOS HOMEOPÁTICOS",
    risco: "ALTO",
    compreende: [
      "Comércio varejista de produtos homeopáticos, fitoterápicos e flora medicinal sem manipulação.",
      "Ervanaria.",
      "Farmácia de manipulação homeopática."
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9], // Apenas se houver a manipulação homeopática
      durante: [23, 29, 31, 32, 33, 38, 39, 40, 43, 45, 49, 52]
    }
  },
  {
    cnae: "8292-0/00",
    descricao: "ENVASAMENTO E EMPACOTAMENTO SOB CONTRATO",
    risco: "ALTO",
    compreende: [
      "Envasamento, fracionamento, empacotamento e etiquetagem de produtos líquidos, sólidos, aerossóis ou farmacêuticos para terceiros sob contrato."
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 52]
    }
  },
  {
    cnae: "5211-7/01",
    descricao: "ARMAZÉNS GERAIS (EMISSÃO DE WARRANT)",
    risco: "ALTO",
    compreende: [
      "Armazenamento de produtos sólidos, líquidos e gasosos sujeitos à vigilância sanitária por conta de terceiros com emissão de warrant."
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 52, 63]
    }
  },
  {
    cnae: "5211-7/99",
    descricao: "DEPÓSITOS DE MERCADORIAS PARA TERCEIROS – EXCETO ARMAZÉNS GERAIS E GUARDA MÓVEIS",
    risco: "ALTO",
    compreende: [
      "Serviço de armazenamento de produtos regulados por conta de terceiros sem emissão de warrant."
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 52, 63]
    }
  },
  {
    cnae: "4930-2/01",
    descricao: "TRANSPORTE RODOVIÁRIO DE CARGAS – EXCETO PRODUTOS PERIGOSOS E MUDANÇAS, MUNICIPAL",
    risco: "ALTO_MÉDIO",
    compreende: [
      "Transporte municipal de produtos regulados, medicamentos, alimentos, água para trabalhadores em veículos adaptados, material biológico e hemocomponentes."
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9], // Aplicado especificamente ao transporte de alimentos/água em veículos adaptados
      durante: [23, 27, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 52, 69]
    }
  },
  {
    cnae: "4930-2/02",
    descricao: "TRANSPORTE RODOVIÁRIO DE CARGAS – EXCETO PRODUTOS PERIGOSOS E MUDANÇAS, INTERMUNICIPAL, INTERESTADUAL E INTERNACIONAL",
    risco: "ALTO_MÉDIO",
    compreende: [
      "Transporte de longa distância de produtos regulados, medicamentos, alimentos, material biológico humano e sangue."
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 69]
    }
  },
  {
    cnae: "8122-2/00",
    descricao: "IMUNIZAÇÃO E CONTROLE DE PRAGAS URBANAS",
    risco: "ALTO",
    compreende: [
      "Serviços de desinsetização, desratização e descupinização urbana."
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 52]
    }
  },
  {
    cnae: "8129-0/00",
    descricao: "ATIVIDADES DE LIMPEZA NÃO ESPECIFICADAS ANTERIORMENTE",
    risco: "ALTO",
    compreende: [
      "Processamento de produtos para a saúde e esterilização por radiação ionizante ou óxido de etileno (E.T.O.) como etapa de fabricação."
    ],
    documentos: {
      previos: [1, 2, 3, 4, 5, 6, 9], // Código 1 incluído para esterilização por radiação ionizante
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 43, 45, 46, 52]
    }
  },
  {
    cnae: "8610-1/01",
    descricao: "ATIVIDADES DE ATENDIMENTO HOSPITALAR – EXCETO PRONTO-SOCORRO E UNIDADES PARA ATENDIMENTO DE URGÊNCIAS",
    risco: "ALTO",
    compreende: [
      "Hospital Geral, Hospital-Dia, Maternidade, Centros de Parto, Hospitais Pediátricos/Psiquiátricos/Especializados, Navio-Hospital e almoxarifados integrados."
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 27, 29, 31, 32, 33, 36, 38, 39, 40, 41, 42, 46, 49, 52]
    }
  },
  {
    cnae: "8610-1/02",
    descricao: "ATIVIDADE DE ATENDIMENTO EM PRONTO-SOCORRO E UNIDADES HOSPITALARES PARA ATENDIMENTO A URGÊNCIAS",
    risco: "ALTO",
    compreende: [
      "Pronto-socorro geral ou especializado 24h com leitos de observação e Pronto Atendimento."
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 27, 29, 31, 32, 33, 36, 38, 39, 40, 41, 42, 46, 49, 52, 71]
    }
  },
  {
    cnae: "8621-6/01",
    descricao: "UTI MÓVEL",
    risco: "ALTO",
    compreende: [
      "Transporte de pacientes de alto risco (Suporte Avançado tipo D), Aeronave de transporte médico tipo E e embarcações tipo F."
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 31, 32, 38, 39, 40, 41, 46]
    }
  },
  {
    cnae: "8621-6/02",
    descricao: "SERVIÇOS MÓVEIS DE ATENDIMENTO A URGÊNCIAS – EXCETO POR UTI MÓVEL",
    risco: "ALTO",
    compreende: [
      "Ambulâncias de Suporte Básico tipo B, Ambulâncias de Resgate tipo C e embarcações médicas tipo F."
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 31, 32, 38, 39, 40, 41, 46]
    }
  },
  {
    cnae: "8630-5/01",
    descricao: "ATIVIDADE MÉDICA AMBULATORIAL COM RECURSOS PARA REALIZAÇÃO DE PROCEDIMENTOS CIRÚRGICOS",
    risco: "ALTO",
    compreende: [
      "Ambulatório cirúrgico tipo I, II, III, clínicas de estética tipo I, II, III e Unidades Básicas de Saúde (UBS)."
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9], // Exigido para tipos II, III e clínicas de estética avançadas
      durante: [21, 23, 27, 29, 31, 32, 33, 36, 38, 39, 40, 41, 42, 46, 49, 52, 60]
    }
  },
  {
    cnae: "8630-5/02",
    descricao: "ATIVIDADE MÉDICA AMBULATORIAL COM RECURSOS PARA REALIZAÇÃO DE EXAMES COMPLEMENTARES",
    risco: "ALTO",
    compreende: [
      "Assistência com unidades móveis, exames complementares em consultórios, clínicas com equipamentos de Raios-X, medicina do trabalho e UBS."
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [21, 23, 28, 29, 31, 32, 33, 36, 37, 38, 39, 40, 41, 42, 45, 46, 47, 48, 49, 52, 60]
    }
  },
  {
    cnae: "8630-5/04",
    descricao: "ATIVIDADE ODONTOLÓGICA",
    risco: "ALTO",
    compreende: [
      "Clínicas, consultórios e policlínicas odontológicas (com ou sem Raios X), unidades móveis odontológicas."
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9], // Exigidos para clínicas e policlínicas
      durante: [21, 23, 27, 28, 29, 31, 32, 33, 38, 39, 40, 41, 42, 45, 47, 48, 52]
    }
  },
  {
    cnae: "8630-5/06",
    descricao: "SERVIÇOS DE VACINAÇÃO E IMUNIZAÇÃO HUMANA",
    risco: "ALTO",
    compreende: [
      "Estabelecimentos de vacinação humana fixa, domiciliar ou extramuros."
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 41, 45, 46, 60]
    }
  },
  {
    cnae: "8630-5/07",
    descricao: "ATIVIDADE DE REPRODUÇÃO HUMANA ASSISTIDA",
    risco: "ALTO",
    compreende: [
      "Banco de sêmen, tecidos germinativos, criopreservação e centros de reprodução humana assistida (com ou sem laboratório)."
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 27, 29, 31, 32, 38, 39, 40, 41, 45, 49, 52]
    }
  },
  {
    cnae: "8640-2/01",
    descricao: "LABORATÓRIOS DE ANATOMIA PATOLÓGICA E CITOLÓGICA",
    risco: "ALTO",
    compreende: [
      "Laboratório de anatomia patológica e citológica tipo III."
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 41, 46, 52]
    }
  },
  {
    cnae: "8640-2/02",
    descricao: "LABORATÓRIOS CLÍNICOS",
    risco: "ALTO_MÉDIO",
    compreende: [
      "Laboratórios de análises clínicas, toxicológicas, postos de coleta tipo II, centrais de distribuição e exames itinerantes ou em farmácias.",
      "Serviço em consultório isolado (Risco Médio)."
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9], // Exceto para serviços itinerantes ou em comércios varejistas
      durante: [20, 21, 23, 25, 26, 27, 29, 30, 31, 32, 33, 36, 37, 38, 39, 40, 41, 45, 46, 47, 48, 49, 52, 59, 60]
    }
  },
  {
    cnae: "8640-2/03",
    descricao: "SERVIÇOS DE DIÁLISE E NEFROLOGIA",
    risco: "ALTO",
    compreende: [
      "Prestação de serviços de diálise, nefrologia e seus almoxarifados de uso próprio."
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 36, 38, 39, 40, 41, 42, 45, 46, 49, 52]
    }
  },
  {
    cnae: "8640-2/04",
    descricao: "SERVIÇOS DE TOMOGRAFIA",
    risco: "ALTO",
    compreende: [
      "Estabelecimentos dedicados exclusivamente a exames de tomografia."
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 28, 29, 30, 31, 32, 33, 36, 37, 38, 39, 40, 41, 42, 45, 46, 47, 48, 49, 52]
    }
  },
  {
    cnae: "8640-2/05",
    descricao: "SERVIÇOS DE DIAGNÓSTICO POR IMAGEM COM USO DE RADIAÇÃO IONIZANTE – EXCETO TOMOGRAFIA",
    risco: "ALTO",
    compreende: [
      "Radiologia odontológica, raios-X médico, litotripsia, mamografia, unidades móveis e medicina nuclear in vivo/in vitro."
    ],
    documentos: {
      previos: [1, 2, 3, 4, 5, 6, 9], // Código 1 exigido para medicina nuclear com PET/iodoterapia
      durante: [20, 23, 25, 28, 29, 31, 32, 33, 36, 37, 38, 39, 40, 41, 42, 45, 46, 47, 48, 49, 52]
    }
  },
  {
    cnae: "8640-2/06",
    descricao: "SERVIÇOS DE RESSONÂNCIA MAGNÉTICA",
    risco: "ALTO",
    compreende: [
      "Estabelecimento que presta serviço de ressonância magnética exclusivo."
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 28, 29, 31, 32, 36, 38, 39, 40, 41, 42, 46, 52]
    }
  },
  {
    cnae: "8640-2/07",
    descricao: "SERVIÇOS DE DIAGNÓSTICO POR IMAGEM, SEM USO DE RADIAÇÃO IONIZANTE – EXCETO RESONÂNCIA MAGNÉTICA",
    risco: "ALTO",
    compreende: [
      "Serviços de diagnóstico por imagem sem radiação ionizante com uso de ultrassom."
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 36, 38, 39, 40, 41, 46, 52]
    }
  },
  {
    cnae: "8640-2/09",
    descricao: "SERVIÇOS DE DIAGNÓSTICO POR MÉTODOS ÓPTICOS – ENDOSCOPIA E OUTROS EXAMES ANÁLOGOS",
    risco: "ALTO",
    compreende: [
      "Serviços diagnósticos por métodos ópticos (endoscopia e análogos)."
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 36, 38, 39, 40, 41, 46, 52]
    }
  },
  {
    cnae: "8640-2/10",
    descricao: "SERVIÇO DE QUIMIOTERAPIA",
    risco: "ALTO",
    compreende: [
      "Estabelecimentos prestadores de serviços de terapia antineoplásica."
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 27, 29, 31, 32, 33, 36, 38, 39, 40, 41, 42, 46, 49, 52]
    }
  },
  {
    cnae: "8640-2/11",
    descricao: "SERVIÇO DE RADIOTERAPIA",
    risco: "ALTO",
    compreende: [
      "Estabelecimentos que prestam serviços de radioterapia."
    ],
    documentos: {
      previos: [1, 2, 3, 4, 5, 6, 9],
      durante: [23, 25, 28, 29, 30, 31, 32, 33, 36, 37, 38, 39, 40, 41, 42, 45, 46, 47, 48, 49, 52]
    }
  },
  {
    cnae: "8640-2/12",
    descricao: "SERVIÇO DE HEMOTERAPIA",
    risco: "ALTO",
    compreende: [
      "Agências transfusionais, hemocentros (com ou sem irradiador), hemonúcleos, postos de coleta de sangue e centrais de triagem laboratorial."
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 25, 29, 31, 32, 36, 37, 38, 39, 40, 41, 42, 45, 46, 47, 52]
    }
  },
  {
    cnae: "8640-2/13",
    descricao: "SERVIÇO DE LITOTRIPSIA",
    risco: "ALTO",
    compreende: [
      "Serviço de litotripsia sem o uso de radiação ionizante."
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 36, 38, 39, 40, 41, 46, 52]
    }
  },
  {
    cnae: "8640-2/14",
    descricao: "SERVIÇOS DE BANCOS DE CÉLULAS E TECIDOS HUMANOS",
    risco: "ALTO",
    compreende: [
      "Bancos de tecidos (musculoesquelético, pele, valvas, olhos, multitecidos), bancos de sangue de cordão umbilical e centros de processamento celular (CPH)."
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 27, 29, 31, 32, 33, 38, 39, 40, 41, 45, 49, 52, 77]
    }
  },
  {
    cnae: "8640-2/99",
    descricao: "ATIVIDADES DE SERVIÇOS DE COMPLEMENTAÇÃO DIAGNÓSTICA E TERAPEUTICA – NÃO ESPECIFICADAS ANTERIORMENTE",
    risco: "ALTO",
    compreende: [
      "Serviços de medicina hiperbárica, centros de infusão, radiometria e testes de qualidade em radiodiagnóstico."
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9], // Exceto para radiometria/testes de qualidade
      durante: [21, 23, 29, 31, 32, 33, 36, 38, 39, 40, 41, 42, 45, 46, 49, 52, 61]
    }
  },
  {
    cnae: "8650-0/04",
    descricao: "ATIVIDADES DE FISIOTERAPIA",
    risco: "ALTO",
    compreende: [
      "Centro ou núcleo de reabilitação física."
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [21, 23, 26, 27, 29, 31, 32, 33, 38, 39, 40, 41, 45, 46, 52]
    }
  },
  {
    cnae: "8690-9/02",
    descricao: "ATIVIDADES DE BANCO DE LEITE HUMANO",
    risco: "ALTO",
    compreende: [
      "Banco de Leite Humano e Posto de Coleta de Leite Humano."
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 36, 38, 39, 40, 41, 46, 52]
    }
  },
  {
    cnae: "8711-5/01",
    descricao: "CLÍNICAS E RESIDÊNCIAS GERIÁTRICAS",
    risco: "ALTO",
    compreende: [
      "Casas de repouso para pessoas acima de 60 anos em regime de internato com foco em suporte médico e terapêutico."
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 41, 46, 52]
    }
  },
  {
    cnae: "8711-5/03",
    descricao: "ATIVIDADES DE ASSISTÊNCIA A DEFICIENTES FÍSICOS, IMUNODEPRIMIDOS E CONVALESCENTES",
    risco: "ALTO",
    compreende: [
      "Instituições de saúde com alojamento para convalescentes, deficientes, casas de apoio tipo II para HIV e atenção a transtornos de dependência química."
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 41, 45, 46, 52]
    }
  },
  {
    cnae: "8712-3/00",
    descricao: "ATIVIDADES DE FORNECIMENTO DE INFRAESTRUTURA DE APOIO E ASSISTÊNCIA A PACIENTES NO DOMICÍLIO",
    risco: "ALTO",
    compreende: [
      "Estabelecimentos de assistência à saúde domiciliar (Home Care)."
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 41, 46]
    }
  },
  {
    cnae: "8720-4/01",
    descricao: "ATIVIDADES DE CENTROS DE ASSISTÊNCIA PSICOSSOCIAL",
    risco: "ALTO",
    compreende: [
      "Estabelecimentos públicos de assistência médica/psicossocial com alojamento e alimentação para transtornos mentais ou decorrentes de drogas."
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 31, 32, 33, 36, 40, 41, 46, 60, 79]
    }
  },
  {
    cnae: "3600-6/01",
    descricao: "CAPTAÇÃO, TRATAMENTO E DISTRIBUIÇÃO DE ÁGUA",
    risco: "ALTO",
    compreende: [
      "Sistemas de abastecimento de água para consumo humano (SAA) englobando captação até distribuição."
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 31, 32, 33, 38, 39, 40, 53, 54]
    }
  },
  {
    cnae: "3600-6/02",
    descricao: "DISTRIBUIÇÃO DE ÁGUA POR CAMINHÕES",
    risco: "ALTO",
    compreende: [
      "Captação, tratamento e distribuição exclusiva ou reuso de água de E.T.E. por caminhão-pipa."
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 31, 32, 33, 38, 39, 40, 54, 56]
    }
  },
  {
    cnae: "3822-0/00",
    descricao: "TRATAMENTO E DISPOSIÇÃO DE RESÍDUOS PERIGOSOS",
    risco: "ALTO",
    compreende: [
      "Tratamento e disposição final de resíduos perigosos de serviços de saúde em qualquer estado físico."
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 8, 9],
      durante: [23, 29, 31, 32, 38, 39, 40, 52, 53]
    }
  },
  {
    cnae: "4729-6/01",
    descricao: "TABACARIA",
    risco: "ALTO",
    compreende: [
      "Estabelecimentos comerciais varejistas destinados especificamente ao consumo local de produtos fumígenos (cigarros, narguilés, etc.)."
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 26, 29, 38, 39, 40, 52]
    }
  },
  {
    cnae: "5590-6/99",
    descricao: "OUTROS TIPOS DE ALOJAMENTO NÃO ESPECIFICADOS ANTERIORMENTE",
    risco: "ALTO",
    compreende: [
      "Habitações coletivas para repouso de trabalhadores rurais ou urbanos disponibilizadas por empregadores."
    ],
    documentos: {
      previos: [],
      durante: [21, 23, 29, 35, 36, 38, 39, 40, 46]
    }
  },
  {
    cnae: "8511-2/00",
    descricao: "EDUCAÇÃO INFANTIL - CRECHES",
    risco: "ALTO",
    compreende: [
      "Creches para crianças de até 3 anos (estendendo-se até 5 anos) e abrigos assistenciais para crianças com necessidades especiais."
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [21, 23, 26, 29, 31, 32, 38, 39, 40, 45, 52]
    }
  },
  {
    cnae: "8730-1/99",
    descricao: "ATIVIDADES DE ASSISTÊNCIA SOCIAL PRESTADAS EM RESIDÊNCIAS COLETIVAS E PARTICULARES NÃO ESPECIFICADAS ANTERIORMENTE",
    risco: "ALTO",
    compreende: [
      "Residências Terapêuticas, Inclusivas, Casas de Apoio para crianças/adolescentes e internatos de readaptação social."
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 31, 32, 38, 39, 40]
    }
  },
  {
    cnae: "9311-5/00",
    descricao: "GESTÃO DE INSTALAÇÕES DE ESPORTE",
    risco: "ALTO_MÉDIO",
    compreende: [
      "Gestão de piscinas (Risco Médio) e estádios/instalações de competições com capacidade superior a 2.000 torcedores (Risco Alto)."
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9], // Para instalações acima de 2.000 pessoas
      durante: [21, 23, 26, 29, 31, 32, 38, 39, 40, 52]
    }
  },
  {
    cnae: "9603-3/01",
    descricao: "GESTÃO E MANUTENÇÃO DE CEMITÉRIOS",
    risco: "ALTO",
    compreende: [
      "Cemitérios horizontais ou verticais para cadáveres humanos."
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 8, 9],
      durante: [23, 29, 38, 39, 40, 52, 53]
    }
  },
  {
    cnae: "9603-3/02",
    descricao: "SERVIÇOS DE CREMAÇÃO",
    risco: "ALTO",
    compreende: [
      "Estabelecimentos dotados de fornos crematórios humanos ou animais."
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 38, 39, 40, 52, 53]
    }
  },
  {
    cnae: "9603-3/05",
    descricao: "SERVIÇOS DE SOMATOCONSERVAÇÃO",
    risco: "ALTO",
    compreende: [
      "Serviços de embalsamento, formolização e tanatopraxia em humanos."
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 7, 8, 9],
      durante: [23, 29, 31, 32, 38, 39, 40, 45, 52]
    }
  },
  {
    cnae: "7500-1/00",
    descricao: "ATIVIDADES VETERINÁRIAS",
    risco: "ALTO",
    compreende: [
      "Terapia e diagnóstico por radiação ionizante (fixa ou móvel), medicina nuclear veterinária e dispensário de medicamentos de uso humano em clínicas veterinárias."
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9], // Exceto para equipamentos móveis e dispensários
      durante: [21, 23, 25, 28, 29, 30, 31, 32, 33, 36, 37, 38, 39, 40, 41, 42, 45, 46, 47, 48, 49, 52]
    }
  },
  {
    cnae: "7120-1/00",
    descricao: "TESTES E ANÁLISES TÉCNICAS",
    risco: "ALTO",
    compreende: [
      "Laboratórios analíticos sob atuação da Vigilância Sanitária (alimentos, medicamentos, cosméticos) ou análise de água para consumo."
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 7, 8, 9],
      durante: [23, 29, 31, 32, 33, 38, 39, 40, 45, 52]
    }
  },
  {
    cnae: "8711-5/02",
    descricao: "INSTITUIÇÕES DE LONGA PERMANÊNCIA PARA IDOSOS",
    risco: "ALTO",
    compreende: [
      "Asilos e instituições de longa permanência onde o tratamento médico não é o centro do atendimento."
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 46, 52]
    }
  },
  {
    cnae: "8720-4/99",
    descricao: "ATIVIDADES DE ASSISTÊNCIA PSICOSSOCIAL E À SAÚDE À PORTADORES DE DISTÚRBIOS PSÍQUICOS, DEFICIÊNCIA MENTAL E DEPENDÊNCIA QUÍMICA E GRUPOS SIMILARES, NÃO ESPECIFICADAS ANTERIORMENTE",
    risco: "ALTO",
    compreende: [
      "Comunidades terapêuticas de interesse social, fornecendo assistência temporária com alojamento e alimentação."
    ],
    documentos: {
      previos: [],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 46]
    }
  },
  {
    cnae: "8800-6/00",
    descricao: "SERVIÇOS DE ASSISTÊNCIA SOCIAL SEM ALOJAMENTO",
    risco: "ALTO",
    compreende: [
      "Centro Dia para acolhimento de idosos."
    ],
    documentos: {
      previos: [2, 3, 4, 5, 6, 9],
      durante: [23, 29, 31, 32, 33, 36, 38, 39, 40, 46, 52]
    }
  },
  {
    cnae: "9602-5/02",
    descricao: "ATIVIDADES DE ESTÉTICA E OUTROS SERVIÇOS DE CUIDADOS COM A BELEZA",
    risco: "ALTO_MÉDIO",
    compreende: [
      "Serviços de beleza, depilação, massagens, SPAs isolados, bronzeamento artificial sem câmara, estética não médica invasiva/não cirúrgica e micropigmentação com agulhas."
    ],
    documentos: {
      previos: [],
      durante: [21, 23, 26, 27, 29, 31, 32, 38, 39, 40]
    }
  },
  {
    cnae: "9609-2/06",
    descricao: "SERVIÇOS DE TATUAGEM E COLOCAÇÃO DE PIERCING",
    risco: "ALTO",
    compreende: [
      "Estabelecimentos dedicados a tatuagens e colocação de piercings com agulhas/dispositivos perfurantes."
    ],
    documentos: {
      previos: [],
      durante: [21, 23, 26, 27, 29, 38, 39, 40]
    }
  }
];

export default activities;