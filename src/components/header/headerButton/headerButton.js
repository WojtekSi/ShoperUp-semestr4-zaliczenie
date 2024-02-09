import { ListProductsContext } from  "./../../contextListProducts/contextListProduct";
import { useContext, useState } from "react";
import { PopUp } from "./popUp/popUp"

export const HeaderButton = () => {

  const {currentlistProducts , AddListProducts, RemoveProductfromList,toggleAddingToCart, clearAllList} = useContext(ListProductsContext)
  const [isShowPopUp, setIsShowPopUp] = useState(false)

  const toggleShowPopUp = ()=>{
    if(currentlistProducts.length > 0){
      setIsShowPopUp(!isShowPopUp) 
      console.log(isShowPopUp)
    }
  }


  return (
    <>
    <div className="header__buttons btn btn-danger" onClick={()=>toggleShowPopUp()}>Wyczyść</div>
    <PopUp isShow={isShowPopUp} toggleisShow={toggleShowPopUp}></PopUp>
    </>
  
  );
};
