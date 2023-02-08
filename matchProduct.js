const products = [
    {name:'shanto',phone:"vivo",address:"mirpur",price: 12000},
    {name:'shupti',phone:"apple",address:"mirpur",price: 22000},
    {name:'nabil',phone:"xamio",address:"mirpur",price: 32000},
    {name:'amzad',phone:"walton",address:"mirpur",price: 52000},
    {name:'mosharof',phone:"luda",address:"mirpur",price: 42000}
];

function matchProduct(products, search){
    const matchProduct = [];
    for(const product of products){
        if(product.phone.toLowerCase().includes(search.toLowerCase())){
            matchProduct.push(product);
        }
    }
    return matchProduct;
}
const result = matchProduct(products,'apple');
console.log(result);
