export const productValidation = ({ name, description, price }) => {
  if (!name || !description || !price)
    throw new Error('Invalid product, put some information on product data.');
};
