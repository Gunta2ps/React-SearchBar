import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import ProductList from "./assets/ProductList";

function App() {
  
  const [products,setProducts] = useState([])
  const [search,setSearch] = useState('')
  const [filterProduct,setFilterProduct] = useState([])

  const fetchData = async () => {
    const response = await fetch(`https://dummyjson.com/products/search?q=${search}`);
    const result = await response.json();
    setProducts(result.products)
  };

  useEffect(() => {
    fetchData();
  }, [products.length]);
  
  useEffect(()=>{
    const debounce = setTimeout(() => {
      const item = products.filter((i) => {
        return i.title.toLowerCase().includes(search.toLocaleLowerCase()) ||
        i.category.toLowerCase().includes(search.toLocaleLowerCase()) ||
        String(i.price).includes(search)
       })
       setFilterProduct(item)
    },1000)
    return () => clearTimeout(debounce)
  },[search,products])

  const onSearch = (e) =>{
    setSearch(e)
  }
  return (
    <>
      <div className="flex flex-col content-center max-lg:">
        <h1 className="text-4xl font-bold text-center ">Product Search</h1>
        <SearchBar onSearch = {onSearch} />
        <ProductList products = {filterProduct}/>
      </div>
    </>
  );
}

export default App;
