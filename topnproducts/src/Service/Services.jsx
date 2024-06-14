import api from "./axios";

class Services {
  getProducts() {

    return api.get(`companies/AMZ/categories/Laptop/products`, {
      params: {
        top: 10,
        minPrice: 1000,
        maxPrice: 10000,
      },
    });
  }
}


export default new Services();