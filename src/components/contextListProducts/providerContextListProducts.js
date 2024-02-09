import { useState } from 'react';
import { ListProductsContext } from './contextListProduct';

export function ProviderListProducts ({children}){
    const[currentlistProducts, setCurrentListProducts]=useState(
        [
            {
              name: "mleko",
              isAddToBAsket: false
            },
            {
              name: "chleb",
              isAddToBAsket: false
            },
            {
              name: "piwerko",
              isAddToBAsket: true
            },
            {
              name: "masło",
              isAddToBAsket: false
            }
        
          ]
        );



    const AddProductToList = (nameNewProduct)=>{
      
      const isThisProductInLisnt = currentlistProducts.some( (product) =>product.name == nameNewProduct )

      if(!isThisProductInLisnt){
        setCurrentListProducts(
          [...currentlistProducts, {name: nameNewProduct, isAddToBAsket: false}]
      )
      }else{
        console.log("produkt nie został dodany, już znajduje się na liście")
      }
    }

    const RemoveProductfromList = (index)=>{
      setCurrentListProducts(
        [...currentlistProducts.slice(0, index), ...currentlistProducts.slice(index + 1 )]
        
        )

    }

    const toggleAddingToCart = (indexToChange)=>{
      setCurrentListProducts(
        currentlistProducts.map((element, index) => {
          if (index === indexToChange) {
            let tempElement = element;
            tempElement.isAddToBAsket= !tempElement.isAddToBAsket

            return tempElement;
          } else {
            return element;
          }}
          )
        )
    }

    const clearAllList = () =>{
      setCurrentListProducts([])
    }


    return(
        <ListProductsContext.Provider value={{currentlistProducts , AddProductToList, RemoveProductfromList, toggleAddingToCart, clearAllList}}>
            {children}
        </ListProductsContext.Provider>
    )
}