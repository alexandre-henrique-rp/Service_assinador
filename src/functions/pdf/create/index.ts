import { QRCode } from './funtions/qrcode';
import ConteudoPdf from './funtions/conteudo';


export default function CreatePdf(dados: any) {
 
  const urlStrng = dados.urlConsulta;
  const qrCodeSting: any = QRCode(urlStrng);

  const conteudo = ConteudoPdf({
    dataAss: dados.assinaturas.assinantes,
    dataTestemunhas: dados.assinaturas.testemunhas,
    filename: dados.filename,
    link: dados.baseUrl,
    uuid: dados.uuid,
  });
 
  const docDefinition = {
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

 //  const  pdfDoc  =  printer.createPdfKitDocument(docDefinition);

  // pdfDoc.pipe(fs.createWriteStream(path.resolve(__dirname, './qrCode.pdf')));
  // pdfDoc.end();

  // retornar o pdfDoc para o controller
  return docDefinition
  
}
