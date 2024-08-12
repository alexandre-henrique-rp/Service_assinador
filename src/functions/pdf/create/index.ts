import { QRCode } from './functions/qrcode';
import ConteudoPdf from './functions/conteudo';
import { TDocumentDefinitions } from 'pdfmake/interfaces';


export default function CreatePdf(dados: any): TDocumentDefinitions {
 
  const urlString = dados.urlConsulta;
  const qrCodeSting: any = QRCode(urlString);

  const conteudo = ConteudoPdf({
    dataAss: dados.assinaturas.assinantes,
    dataTestemunhas: dados.assinaturas.testemunhas,
    filename: dados.filename,
    link: dados.baseUrl,
    uuid: dados.uuid,
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

  return docDefinition
  
}
