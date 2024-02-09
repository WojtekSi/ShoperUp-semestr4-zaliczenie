import "./listProducts.css";
import { useContext } from "react";
import { ListProductsContext } from  "./../../contextListProducts/contextListProduct";
import { Product } from "./product/product";

export const ListProducts = ()=>{

  const {currentlistProducts , AddListProducts, RemoveProductfromList} = useContext(ListProductsContext)


    return (
      <div className="listProducts">

        {currentlistProducts.map((value) => (
          <Product stateProduct={value}> </Product>
        ))}

    </div>
    );
  }