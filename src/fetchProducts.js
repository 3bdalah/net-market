import { allProductsUrl } from './utils.js';

const fetchProducts = async () => {
    const response = await fetch(allProductsUrl).catch((err) => {
        console.log(err);
    });
    if(response){
        return response.json();
    }
    console.log(response);
    return response;
};

export default fetchProducts;
