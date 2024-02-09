import { useContext } from "react";
import { ListProductsContext } from  "./../../contextListProducts/contextListProduct";
import { useRef } from "react";


export const AddProduct = ()=>{

  const inpoutElement = useRef()

  const {list, AddProductToList, RemoveProductfromList, toggleAddingToCart}=useContext(ListProductsContext)


  
  const handlerOnClick = () =>{
    if(inpoutElement.current.value != ""){
      AddProductToList(inpoutElement.current.value)
      inpoutElement.current.value = ""
    }

  }
  

    return (
      <div className="addProduct d-flex justify-content-between">
        <div className="addProduct__Input">
         <input class="form-control" type="text" ref={inpoutElement} placeholder="Wpisz nazwę produktu"/>
        </div>
        <div className="addProduct__Btn btn btn-primary" onClick={()=>handlerOnClick()}>Dodaj</div>
      </div>
    );
  }