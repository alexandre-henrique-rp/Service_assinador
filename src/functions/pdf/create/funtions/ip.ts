export default function formatarIP(ip: string): string {
  // Verifica se o IP contém 12 dígitos
  if (ip.length !== 9 ) {
      return 'IP inválido';
  }
  // Formata o IP conforme solicitado
  return ip.replace(/(\d{3})(\d{1})(\d{3})(\d{1})(\d{1})/, '$1.***.***.**$5');
}