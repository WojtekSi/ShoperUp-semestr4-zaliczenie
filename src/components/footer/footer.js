import { ListProductsContext } from  "./../contextListProducts/contextListProduct";
import { useContext } from "react";
import { useRef, useEffect  } from "react";

export const Footer = ()=>{

  const {currentlistProducts , AddListProducts, RemoveProductfromList,toggleAddingToCart} = useContext(ListProductsContext)
  const counterInBasket = useRef()

  useEffect(() => {
    const arrayProducInBasket =  currentlistProducts.filter(product => product.isAddToBAsket )
    const basketSize = arrayProducInBasket.length
    counterInBasket.current.innerHTML = basketSize;
  }, [currentlistProducts]);

    return (
      <div className="Footer ">
        <div className="Footer__counter alert alert-success text-right">
          <span>W koszyku jest: </span><span ref={counterInBasket}>0</span>
        </div>
      </div>
    );
  }
  