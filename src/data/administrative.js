// src/data/administrative.js

const servicosAdministrativos = [
  {
    id: 'alt-estrutura',
    tipo: 'ALTERAÇÃO',
    motivo: 'ESTRUTURA FÍSICA - AMPLIAÇÃO, REFORMA ou ADAPTAÇÃO',
    documentos: ['29', '40', '41', '42', '43', '52'],
    notas: ['NOTA 1: ESTRUTURA FÍSICA - Apresentar demais documentos solicitados no Anexo I para o respectivo CNAE (Art. 13 - § 1º).']
  },
  {
    id: 'alt-razao',
    tipo: 'ALTERAÇÃO',
    motivo: 'RAZÃO SOCIAL',
    documentos: ['23', '38', '39', '40'],
    notas: []
  },
  {
    id: 'alt-cisao',
    tipo: 'ALTERAÇÃO',
    motivo: 'CISÃO DE EMPRESA',
    documentos: ['23', '29', '38', '39', '40'],
    notas: []
  },
  {
    id: 'alt-fusao',
    tipo: 'ALTERAÇÃO',
    motivo: 'FUSÃO DE EMPRESA',
    documentos: ['23', '29', '38', '39', '40'],
    notas: []
  },
  {
    id: 'alt-incorporacao',
    tipo: 'ALTERAÇÃO',
    motivo: 'INCORPORAÇÃO DE EMPRESA',
    documentos: ['23', '29', '38', '39', '40'],
    notas: []
  },
  {
    id: 'alt-sucessao',
    tipo: 'ALTERAÇÃO',
    motivo: 'SUCESSÃO DE EMPRESA',
    documentos: ['23', '29', '38', '39', '40'],
    notas: []
  },
  {
    id: 'alt-resp-legal',
    tipo: 'ALTERAÇÃO',
    motivo: 'RESPONSABILIDADE LEGAL',
    documentos: ['21', '26', '27', '38', '39', '40'],
    notas: []
  },
  {
    id: 'alt-resp-tec-assuncao',
    tipo: 'ALTERAÇÃO',
    motivo: 'RESPONSABILIDADE TÉCNICA - ASSUNÇÃO',
    documentos: ['31', '32', '33', '40', '41', '42', '43', '45'],
    notas: []
  },
  {
    id: 'alt-resp-tec-baixa',
    tipo: 'ALTERAÇÃO',
    motivo: 'RESPONSABILIDADE TÉCNICA - BAIXA',
    documentos: ['40', '41', '42', '43', '57'],
    notas: []
  },
  {
    id: 'alt-leitos',
    tipo: 'ALTERAÇÃO',
    motivo: 'NÚMERO DE LEITOS – AMPLIAÇÃO OU REDUÇÃO',
    documentos: ['29', '40', '41'],
    notas: ['NOTA 4: QUALQUER ALTERAÇÃO QUE IMPLIQUE EM ADEQUAÇÃO DO AMBIENTE CONSTRUÍDO - Solicitar também a alteração de estrutura física.']
  },
  {
    id: 'alt-equip-amp',
    tipo: 'ALTERAÇÃO',
    motivo: 'EQUIPAMENTOS - AMPLIAÇÃO',
    documentos: ['28', '29', '40', '42'],
    notas: [
      'NOTA 2: AMPLIAÇÃO DE NÚMERO E OU TIPO DE EQUIPAMENTOS - Solicitar LS para cada equipamento.',
      'NOTA 4: QUALQUER ALTERAÇÃO QUE IMPLIQUE EM ADEQUAÇÃO DO AMBIENTE CONSTRUÍDO - Solicitar também a alteração de estrutura física.'
    ]
  },
  {
    id: 'alt-equip-red',
    tipo: 'ALTERAÇÃO',
    motivo: 'EQUIPAMENTOS - REDUÇÃO',
    documentos: ['40', '42'],
    notas: [
      'NOTA 3: REDUÇÃO DE NÚMERO E OU TIPO DE EQUIPAMENTOS - Solicitar cancelamento da LS vigente de cada equipamento.',
      'NOTA 4: QUALQUER ALTERAÇÃO QUE IMPLIQUE EM ADEQUAÇÃO DO AMBIENTE CONSTRUÍDO - Solicitar também a alteração de estrutura física.'
    ]
  },
  {
    id: 'alt-atividade-amp',
    tipo: 'ALTERAÇÃO',
    motivo: 'ATIVIDADE, CLASSE E OU CATEGORIA DE PRODUTOS - AMPLIAÇÃO',
    documentos: ['29', '40', '43'],
    notas: ['NOTA 4: QUALQUER ALTERAÇÃO QUE IMPLIQUE EM ADEQUAÇÃO DO AMBIENTE CONSTRUÍDO - Solicitar também a alteração de estrutura física.']
  },
  {
    id: 'alt-atividade-red',
    tipo: 'ALTERAÇÃO',
    motivo: 'ATIVIDADE, CLASSE E OU CATEGORIA DE PRODUTOS - REDUÇÃO',
    documentos: ['29', '40', '43'],
    notas: ['NOTA 4: QUALQUER ALTERAÇÃO QUE IMPLIQUE EM ADEQUAÇÃO DO AMBIENTE CONSTRUÍDO - Solicitar também a alteração de estrutura física.']
  },
  {
    id: 'renovacao',
    tipo: 'RENOVAÇÃO',
    motivo: 'RENOVAÇÃO DE LICENÇA SANITÁRIA',
    documentos: ['28', '29', '40', '41', '42', '43'],
    notas: []
  },
  {
    id: 'cancelamento',
    tipo: 'CANCELAMENTO',
    motivo: 'CANCELAMENTO DE LICENÇA SANITÁRIA',
    documentos: ['40', '42'],
    notas: []
  },
  {
    id: 'alt-endereco',
    tipo: 'ALTERAÇÃO',
    motivo: 'ALTERAÇÃO DE ENDEREÇO (Mesmo ou Outro Município)',
    documentos: [], 
    notas: ['NOTA 5: ALTERAÇÃO DE ENDEREÇO - Mesmo município: Observar §1º do art. 21. Outro município: Observar § 3º do art. 21.']
  }
];

export default servicosAdministrativos;