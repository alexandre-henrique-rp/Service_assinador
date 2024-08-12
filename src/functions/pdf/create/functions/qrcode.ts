export const QRCode = (urlStrng: string) => {
  const qrCode = {
    qr: `${urlStrng}`,
    foreground: '#00713c',
    fit: 150,
    version: 5,
    eccLevel: 'H',
    mask: 6,
    style: 'qrCode',
  };

  return qrCode;
};
