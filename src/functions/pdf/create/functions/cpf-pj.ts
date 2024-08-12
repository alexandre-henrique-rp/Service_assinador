export default function formatarDocumento(documento: string): string {
  documento = documento.replace(/\D/g, ''); // Remove todos os caracteres não numéricos

  if (documento.length === 11) {
      // É um CPF
      return documento.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.***.***-$4');
  } else if (documento.length === 14) {
      // É um CNPJ
      return documento.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.***.***/****-$5');
  } else {
      return 'Documento inválido';
  }
}
