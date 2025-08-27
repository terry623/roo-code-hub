export const downloadFile = (filename: string, folder: string = '') => {
  const url = folder ? `/${folder}/${filename}` : `/${filename}`;
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
};