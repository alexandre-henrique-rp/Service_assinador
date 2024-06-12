import { Request, Response } from 'express';
import PdfService from '../../../services/pdf';

async function PdfCreate(req: Request, resp: Response) {
  try {
    await PdfService.CreatePdfAssinator();
    return resp.json({ message: 'pedf criado' });
  } catch (error) {
    return resp.status(500).json({ error: error.message });
  }
}

export default PdfCreate;
