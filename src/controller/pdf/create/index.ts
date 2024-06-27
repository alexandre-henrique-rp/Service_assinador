import { Request, Response } from 'express';
import PdfService from '../../../services/pdf';
import PdfPrinter from 'pdfmake';
import { Fonts } from '../../../functions/pdf/create/funtions/Fonts';
import { TDocumentDefinitions } from 'pdfmake/interfaces';

async function PdfCreate(req: Request, resp: Response) {
  try {
    const Data = req.body;
    const Pdfstring: any = PdfService.CreatePdfAssinator(Data);
    const printer = new PdfPrinter(Fonts);

    const pdfDoc = printer.createPdfKitDocument(Pdfstring);

    const chunks: any[] = [];

    pdfDoc.on('data', (chunk: any) => {
      chunks.push(chunk);
    });

    const filename = 'manifesto.pdf';
    pdfDoc.on('end', () => {
      const pdf = Buffer.concat(chunks);
      resp.setHeader('Content-Disposition', `inline; filename="${filename}"`);
      resp.setHeader('Content-Type', 'application/pdf');
      resp.end(pdf);
    });
    pdfDoc.end();
  } catch (error) {
    return resp.status(500).json({ error: error.message });
  }
}

export default PdfCreate;
