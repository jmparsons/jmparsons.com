const api = (path: string) => `//api.jmparsons.com/${path}`;

const cdn = (type: string, path: string) => `//s.jmp-cdn.com/assets/${type}/${path}`;

const webp = (path: string) => path.replace('.jpg', '.webp');

const checkWebp = async () => {
  if (!self.createImageBitmap) return false;
  const data = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
  const result = await fetch(data);
  const blob = await result.blob();
  const bitmap = await createImageBitmap(blob);
  return !!bitmap;
};

export { api, cdn, webp, checkWebp };
