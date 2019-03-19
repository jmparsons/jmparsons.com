const api = (path: string) => `https://kgcr07khx2.execute-api.us-east-1.amazonaws.com/prod/${path}`;

const cdn = (path: string) => `https://s3.amazonaws.com/jmparsons-dev-assets/${path}`;

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
