import PdfPrinter from 'pdfmake';
import { TDocumentDefinitions } from 'pdfmake/interfaces';
import fs from 'fs';
import path from 'path';

const PdfService = {
  // Função responsável por criar uma página de PDF contendo um QR code de uma URL e as informações de assinatura usando PDFMake
  async CreatePdfAssinator(): Promise<void> {
    try {
      const Fonts = {
        Courier: {
          normal: 'Courier',
          bold: 'Courier-Bold',
          italics: 'Courier-Oblique',
          bolditalics: 'Courier-BoldOblique',
        },
      };

      const printer = new PdfPrinter(Fonts);
      const urlStrng = 'https://www.google.com';

      const docDefinition: TDocumentDefinitions = {
        pageMargins: [10, 10, 10, 10],
        content: [
          {
            qr: urlStrng,
            foreground: '#00713c',
            fit: 150,
            eccLevel: 'H',
            mask: 3,
          },
        ],
      };

      const pdfDoc = printer.createPdfKitDocument(docDefinition);
      pdfDoc.pipe(
        fs.createWriteStream(path.resolve(__dirname, './qrCode.pdf')),
      );
      pdfDoc.end();

      // Adicionando log para verificar onde o código está atingindo
      console.log('PDF criado com sucesso!');
    } catch (error) {
      console.error('Erro ao criar PDF: ', error);
      throw error;
    }
  },
};

export default PdfService;
