import CreatePdf from "../../functions/pdf/create";
import { TDocumentDefinitions } from 'pdfmake/interfaces';

const PdfService = {
  // Função responsável por criar uma definição de PDF contendo um QR code de uma URL e as informações de assinatura usando PDFMake
  CreatePdfAssinador(data: any): TDocumentDefinitions {
    try {
      // Chamando CreatePdf para gerar a definição do documento
      const pdfDefinition = CreatePdf(data);

      console.log('PDF criado com sucesso!');

      // Retorna a definição do PDF
      return pdfDefinition;

    } catch (error) {
      console.error('Erro ao criar PDF: ', error);
      throw error;
    }
  },
};

export default PdfService;
