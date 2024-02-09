import { useState } from "react";
import { ReactComponent as IconTrash } from "./trash.svg";
import { ReactComponent as IconPlus } from "./plus-circle-fill.svg";
import { ReactComponent as IconCheck } from "./check-circle-fill.svg";
import { useContext } from "react";
import { ListProductsContext } from  "./../../../contextListProducts/contextListProduct";

export const Product = (props) => {
  const {currentlistProducts , AddListProducts, RemoveProductfromList,toggleAddingToCart} = useContext(ListProductsContext)


 let stateBtn = {value: "Do koszyka", className: "btn btn-outline-success", icon: <IconPlus></IconPlus>}
  if(props.stateProduct.isAddToBAsket){
        stateBtn = {value: "Dodane", className: " btn btn-success", icon: <IconCheck></IconCheck>}
  }
  const indexProduct = currentlistProducts.findIndex( product => product.name == props.stateProduct.name);

  const handleIconTrash= ()=>{

     RemoveProductfromList(indexProduct)
  }

  const handlerChangeAddingToCart = ()=>{
    console.log(indexProduct)
    toggleAddingToCart(indexProduct)
  }



  return (
    <li className="d-flex justify-content-between p-1">
      <div className="">
        <span>{props.stateProduct.name}</span>
      </div>
      <div className="d-flex justify-content-between">
        <div className={stateBtn.className} onClick={()=> handlerChangeAddingToCart()}><span>{stateBtn.value}</span>{stateBtn.icon}</div>
        <div className="btn btn-danger" onClick={()=>handleIconTrash()}>
          <IconTrash ></IconTrash>
        </div>
      </div>
    </li>
  );
};
