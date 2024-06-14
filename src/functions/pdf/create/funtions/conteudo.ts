import formatarDocumento from './cpf-pj';
import formatarIP from './ip';

export default function ConteudoPdf(data: any) {
  const dataAss = data.dataAss;
  const dataTestemunhas = data.dataTestemunhas;

  const nomeArquivo = data.filename;
  const Software = process.env.SOFTWARE_NAME;

  const Titlo = {
    margin: [0, 20, 0, 0],
    text: 'PROTOCOLO DE ASSINATURA(S)',
    fontSize: 20,
    bold: true,
  };
  const SubTitlo = {
    margin: [0, 20, 0, 0],
    text: nomeArquivo,
    fontSize: 15,
    bold: true,
  };
  const text = {
    margin: [0, 20, 0, 0],
    text: [
      'O documento acima foi proposto para assinatura digital através da plataforma de assinaturas ',
      { text: Software, bold: true },
      ' . Para verificar a autenticidade das assinaturas clique neste link',
    ],
    fontSize: 12,
    bold: false,
  };
  const Link = {
    margin: [0, 10, 0, 0],
    text: `${data.link}/${data.uuid}`,
    fontSize: 12,
    link: `${data.link}/${data.uuid}`,
    bold: true,
  };
  const text2 = {
    margin: [0, 10, 0, 0],
    text: `Ou acesse o site ${data.link} e digite o código abaixo:`,
  };
  const code = {
    margin: [0, 12, 0, 0],
    text: [
      'CODIGO: ',
      {
        text: data.uuid,

        bold: false,
      },
    ],

    bold: true,
  };

  const texto3 = {
    margin: [0, 13, 0, 0],
    text: 'O(s) nome(s) indicado(s) para assinatura, bem como seu(s) status é(são):',
  };

  const mapAssinantes = dataAss.map(
    (assinante: {
      dataAss: string | Date;
      nome: string;
      cpf: string;
      status: string;
      IP: string;
    }) => {
      const DateServer = new Date(assinante.dataAss);
      const nome = {
        margin: [0, 25, 0, 0],
        text: [
          { text: 'c', style: 'icon' },
          ' ',
          assinante.nome,
          ' - ',
          formatarDocumento(assinante.cpf),
          ' - ',
          { text: DateServer.toLocaleString(), bold: false },
        ],

        bold: true,
      };

      const status = {
        text: [{ text: 'Status: ', bold: true }, assinante.status],

        bold: false,
      };

      const ip = {
        text: [{ text: 'IP :', bold: true }, formatarIP(assinante.IP)],

        bold: false,
      };
      return [nome, status, ip];
    },
  );

  const subtitulo2 = {
    margin: [0, 35, 0, 0],
    text: 'PROTOCOLO DE TESTEMUNHA(S)',
    fontSize: 15,
    bold: true,
  };

  const mapTestemunhas = dataTestemunhas.map(
    (assinante: {
      dataAss: string | Date;
      nome: string;
      cpf: string;
      status: string;
      IP: string;
    }) => {
      const DateServer = new Date(assinante.dataAss);
      const nome = {
        margin: [0, 25, 0, 0],
        text: [
          { text: 'c', style: 'icon' },
          ' ',
          assinante.nome,
          ' - ',
          formatarDocumento(assinante.cpf),
          ' - ',
          { text: DateServer.toLocaleString(), bold: false },
        ],

        bold: true,
      };

      const status = {
        text: [{ text: 'Status: ', bold: true }, assinante.status],

        bold: false,
      };

      const ip = {
        text: [{ text: 'IP :', bold: true }, formatarIP(assinante.IP)],

        bold: false,
      };
      return [nome, status, ip];
    },
  );

  return [
    Titlo,
    SubTitlo,
    text,
    Link,
    text2,
    code,
    texto3,
    mapAssinantes,
    subtitulo2,
    mapTestemunhas,
  ];
}
