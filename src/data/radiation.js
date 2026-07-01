// src/data/radiation.js

const fontesIonizantes = [
  {
    categoria: "1 - EQUIPAMENTOS GERADORES DE RADIAÇÃO IONIZANTE",
    itens: [
      { codigo: "215", tipo: "ACELERADOR LINEAR COM ELÉTRONS" },
      { codigo: "216", tipo: "ACELERADOR LINEAR SEM ELÉTRONS" },
      { codigo: "209", tipo: "RAIOS X DE ORTOVOLTAGEM" },
      { codigo: "201", tipo: "RAIOS X MÉDICO ATÉ 100 MA" },
      { codigo: "204", tipo: "RAIOS X MÉDICO COM FLUOROSCOPIA" },
      { codigo: "202", tipo: "RAIOS X MÉDICO DE 100 MA A 500 MA" },
      { codigo: "203", tipo: "RAIOS X MÉDICO DE MAIS DE 500 MA" },
      { codigo: "206", tipo: "RAIOS X MÉDICO MÓVEL" },
      { codigo: "218", tipo: "RAIOS X ODONTOLÓGICO EXTRA-ORAL" },
      { codigo: "207", tipo: "RAIOS X ODONTOLÓGICO INTRA-ORAL" },
      { codigo: "214", tipo: "RAIOS X PARA DENSITOMETRIA ÓSSEA" },
      { codigo: "205", tipo: "RAIOS X PARA HEMODINAMICA" },
      { codigo: "213", tipo: "RAIOS X PARA LITOTRIPTOR EXTRACORPÓREO" },
      { codigo: "210", tipo: "RAIOS X PARA MAMÓGRAFO COM ESTÉREOTAXIA" },
      { codigo: "211", tipo: "RAIOS X PARA MAMÓGRAFO SEM ESTÉREOTAXIA" },
      { codigo: "208", tipo: "RAIOS X PARA SIMULAÇÃO" },
      { codigo: "219", tipo: "RAIOS X PARA TOMÓGRAFO DO PET CT" },
      { codigo: "212", tipo: "RAIOS X PARA TOMÓGRAFO MÉDICO" },
      { codigo: "221", tipo: "RAIOS X PARA TOMÓGRAFO ODONTOLÓGICO" },
    ],
  },
  {
    categoria: "2 - EQUIPAMENTOS COM FONTES SELADAS",
    itens: [
      {
        codigo: "301",
        tipo: "UNIDADE DE BRAQUITERAPIA COM FONTES DE ALTA TAXA DE DOSE",
      },
      {
        codigo: "302",
        tipo: "UNIDADE DE BRAQUITERAPIA COM FONTES DE MÉDIA TAXA DE DOSE",
      },
      { codigo: "303", tipo: "UNIDADE DE TELETERAPIA" },
    ],
  },
  {
    categoria: "3 - EQUIPAMENTOS PARA USO VETERINÁRIOS COM RADIAÇÃO IONIZANTE",
    itens: [
      {
        codigo: "605",
        tipo: "ACELERADOR LINEAR COM ELÉTRONS (SOMENTE USO VETERINÁRIO)",
      },
      {
        codigo: "606",
        tipo: "ACELERADOR LINEAR SEM ELÉTRONS (SOMENTE USO VETERINÁRIO)",
      },
      { codigo: "602", tipo: "RAIOS X CONVENCIONAL" },
      { codigo: "601", tipo: "RAIOS X MÓVEL" },
      { codigo: "604", tipo: "RAIOS X PARA ODONTOLOGIA" },
      { codigo: "603", tipo: "RAIOS X PARA TOMOGRAFIA" },
    ],
  },
  {
    categoria: "4 - FONTES SELADAS",
    itens: [
      {
        codigo: "401",
        tipo: "CONJUNTO DE FONTES PARA BRAQUITERAPIA DE BAIXA TAXA DE DOSE",
      },
      {
        codigo: "403",
        tipo: "CONJUNTO DE FONTES PARA CALIBRAÇÃO EM MEDICINA NUCLEAR",
      },
      { codigo: "402", tipo: "CONJUNTO DE FONTES PARA TERAPIA DE CONTATO" },
      { codigo: "404", tipo: "FONTE DE REFERÊNCIA PARA RADIOTERAPIA" },
    ],
  },
  {
    categoria: "5 – IRRADIAÇÃO DE SANGUE",
    itens: [
      {
        codigo: "220",
        tipo: "IRRADIADOR DE BOLSA DE SANGUE HUMANO COM FONTE DE RADIAÇÃO IONIZANTE",
      },
    ],
  },
];

export default fontesIonizantes;
