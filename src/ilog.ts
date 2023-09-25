export const ilog = (object: any, text?: string) => {
  text ? console.log(text + ":\n", JSON.stringify(object, null, 2)) : console.log(JSON.stringify(object, null, 2));
  return object;
};
