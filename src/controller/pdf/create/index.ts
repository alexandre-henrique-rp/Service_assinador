import { Request, Response } from 'express';
import PdfService from '../../../services/pdf';
import PdfPrinter from 'pdfmake';
import { Fonts } from '../../../functions/pdf/create/functions/functions';
import { TDocumentDefinitions } from 'pdfmake/interfaces';

async function PdfCreate(req: Request, res: Response) {
  try {
    const data = req.body;

    // Gerando a definição do PDF a partir dos dados
    const pdfDefinition: TDocumentDefinitions = PdfService.CreatePdfAssinador(data);

    // Instanciando o gerador de PDF
    const printer = new PdfPrinter(Fonts);

    // Criando o documento PDF
    const pdfDoc = printer.createPdfKitDocument(pdfDefinition);

    // Configura os headers para o arquivo PDF
    res.setHeader('Content-Disposition', 'inline; filename="manifesto.pdf"');
    res.setHeader('Content-Type', 'application/pdf');

    // Envia o PDF diretamente para a resposta (streaming)
    pdfDoc.pipe(res);

    // Finaliza a criação do documento PDF
    pdfDoc.end();

  } catch (error) {
    // Tratamento de erro, com logging adicional se necessário
    console.error('Erro ao gerar o PDF:', error);
    res.status(500).json({ error: 'Falha ao gerar o PDF. Por favor, tente novamente.' });
  }
}

export default PdfCreate;
