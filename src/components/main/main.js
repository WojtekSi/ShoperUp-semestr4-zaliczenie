import './main.css';

import { AddProduct } from './addProducts/addProducts';
import { ListProducts } from './listProducts/listProducts';

export const Main = ()=>{
    return (
      <div className="main">
        <AddProduct/>
        <ListProducts/>
      </div>
    );
  }