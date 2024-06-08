import { jsx as _jsx } from "react/jsx-runtime";
import './App.css';
import Listing from './components/Listing';
import etsy from '../src/data/etsy.json';
const items = etsy;
const App = () => {
    return (_jsx("div", { className: "container", children: _jsx(Listing, { items: items }) }));
};
export default App;
