import Card from "./componets/Card";
import Header from "./componets/header";
import './App.css'
import Hooks from "./componets/hooks";
import UseEffectbox from "./componets/useeffectbox";
import ColorPicker from "./componets/Color";
import ControlStatment from "./componets/Controlstatment";
import Loop from "./componets/loop";
import ProductList from "./example/productlist";
function App() {
  return (
    <>
    <ProductList/>
    {/* <Loop/> */}
    {/* <Hooks/> */}
    {/* <UseEffectbox/> */}
    {/* <ColorPicker/> */}
    {/* <ControlStatment/> */}
      {/* <Card title={'Ajmer'} tag={<Card/>}>
        <h1>More Than
          Just Objects</h1>
        <p>At Shree Craft Studio, we bring the soul of Rajasthan into your home. Each piece is a story — carved by skilled hands, inspired by heritage, and made to be cherished for generations.</p>
      </Card>
      <Card title={'Ajmer'}>
        <h1>More Than
          Just Objects</h1>
        <p>At Shree Craft Studio, we bring the soul of Rajasthan into your home. Each piece is a story — carved by skilled hands, inspired by heritage, and made to be cherished for generations.</p>
      </Card>
      <Header/> */}
    </>
  )
}

export default App
