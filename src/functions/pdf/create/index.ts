import PdfPrinter from 'pdfmake';
import { TDocumentDefinitions } from 'pdfmake/interfaces';
import fs, { link } from 'fs';
import path from 'path';
import { Fonts } from './funtions/Fonts';
import { QRCode } from './funtions/qrcode';
import formatarDocumento from './funtions/cpf-pj';
import formatarIP from './funtions/ip';
import ConteudoPdf from './funtions/conteudo';

const dataAss = [
  {
    nome: 'Alexandre Nunes Robazza',
    cpf: '12345678900',
    dataAss: '2024-02-03T12:32:00.000Z',
    status:
      'Assinado eletronicamente, mediante senha de rede, pessoal e intransferível',
    IP: '189014286',
  },
  {
    nome: 'ARIEL CESAR TORINO',
    cpf: '12345678900',
    dataAss: '2024-02-03T22:32:00.000Z',
    status: ' Assinado Digitalmente',
    IP: '189014286',
  },
];

const dataTestemunhas = [
  {
    nome: 'Renata Benetton',
    cpf: '34845678900',
    dataAss: '2024-05-29T12:53:00.000Z',
    status:
      'Assinado eletronicamente, mediante senha de rede, pessoal e intransferível',
    IP: '131914286',
  },
];

export default async function CreatePdf() {
  const printer = new PdfPrinter(Fonts);
  const urlStrng = 'https://www.google.com';
  const qrCodeSting: any = QRCode(urlStrng);

  const conteudo = ConteudoPdf({
    dataAss: dataAss,
    dataTestemunhas: dataTestemunhas,
    filename: 'Assinatura',
    link: 'https://assinaturadigital.sebrae.com.br/verificadorassinaturas/#/search',
    uuid: '123456789',
  });
 
  const docDefinition: TDocumentDefinitions = {
    pageSize: 'A4',
    pageOrientation: 'portrait',
    pageMargins: [10, 30, 10, 10],
    content: [
      qrCodeSting,
      conteudo
    ],
    styles: {
      qrCode: {
        alignment: 'center',
      },
      icon: { font: 'Fontello' },
    },
    defaultStyle: {
      font: 'Roboto',
      fontSize: 12,
    },
  };

  const pdfDoc = printer.createPdfKitDocument(docDefinition);
  pdfDoc.pipe(fs.createWriteStream(path.resolve(__dirname, './qrCode.pdf')));
  pdfDoc.end();
  return null;
}
