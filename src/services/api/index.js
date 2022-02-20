const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoints = {
  auth: {
    login: `${API}/${VERSION}/auth/login`,
    profile: `${API}/${VERSION}/auth/profile`,
  },
  products: {
    getProduct: (id) => `${API}/${VERSION}/products/${id}/`,
    allProducts: `${API}/${VERSION}/products/`,
    getProducts: (limit, offset) => `${API}/${VERSION}/products?limit=${limit}&offset=${offset}`,
    addProducts: `${API}/${VERSION}/products`,
    updateProducts: (id) => `${API}/${VERSION}/products/${id}/`,
    deleteProduct: (id) => `${API}/${VERSION}/products/${id}/`,
  },
  categories: {
    getCategoriesList: `${API}/${VERSION}/categories/`,
    addCategory: `${API}/${VERSION}/categories/`,
    getCategoryItems: (id) => `${API}/${VERSION}/categories/${id}/products/`,
    updateCategory: (id) => `${API}/${VERSION}/categories/${id}/`,
  },
  files: {
    addImage: `${API}/${VERSION}/files/upload/`,
  },
};

export default endPoints;
