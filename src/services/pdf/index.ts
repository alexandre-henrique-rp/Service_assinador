import CreatePdf from '../../functions/pdf/create';

const PdfService = {
  // Função responsável por criar uma página de PDF contendo um QR code de uma URL e as informações de assinatura usando PDFMake
  async CreatePdfAssinator(): Promise<void> {
    try {
      await CreatePdf();
      // Adicionando log para verificar onde o código está atingindo
      console.log('PDF criado com sucesso!');
    } catch (error) {
      console.error('Erro ao criar PDF: ', error);
      throw error;
    }
  },
};

export default PdfService;
