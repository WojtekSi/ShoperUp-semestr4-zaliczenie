import { ListProductsContext } from "./../../../contextListProducts/contextListProduct";
import { useContext } from "react";

export const PopUp = (props) => {
  let classPopUp = props.isShow ? "modal d-block" : "modal";
  const {
    currentlistProducts,
    AddListProducts,
    RemoveProductfromList,
    toggleAddingToCart,
    clearAllList,
  } = useContext(ListProductsContext);

  const handlerBtnClose = () => {
    props.toggleisShow();
  };

  const handlerBtnClear = () => {
    clearAllList();
    props.toggleisShow();
  };

  return (
    <>
      <div class={classPopUp} tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title text-dark">Wyczyść</h5>
              <button
                type="button"
                class="close"
                onClick={() => handlerBtnClose()}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body text-dark">
              <p>Na pewno chcesz wyczyścić listę?</p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => handlerBtnClear()}
              >
                TAK
              </button>
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
                onClick={() => handlerBtnClose()}
              >
                NIE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
