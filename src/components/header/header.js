import { HeaderButton } from './headerButton/headerButton';
import { ReactComponent as Icon } from './card-checklist.svg';



export const Header = ()=>{


    return (
      <div className="header text-white navbar navbar-dark bg-dark p-2">
        <Icon/>
        <div className="header__title">Lista zakupów</div>
        <HeaderButton/>
      </div>
    );
  }
  