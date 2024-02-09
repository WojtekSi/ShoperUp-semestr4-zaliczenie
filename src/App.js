import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import  { Header } from './components/header/header';
import { Main } from'./components/main/main';
import { Footer } from'./components/footer/footer';


function App() {
  return (
    <div>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;

