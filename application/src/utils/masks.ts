export const maskDate = (text: string) => {
  let v = text.replace(/\D/g, '');
  if (v.length > 8) v = v.slice(0, 8);
  v = v.replace(/^(\d{2})(\d)/, '$1/$2');
  v = v.replace(/^(\d{2})\/(\d{2})(\d)/, '$1/$2/$3');
  return v;
};

export const maskPhone = (text: string) => {
  let v = text.replace(/\D/g, '');
  if (v.length > 11) v = v.slice(0, 11);
  v = v.replace(/^(\d{2})(\d)/g, '($1) $2');
  v = v.replace(/(\d)(\d{4})$/, '$1-$2');
  return v;
};