import '../Components/IconStyles.css';
import Icon from "./Icon.js"
import RImg from "./assets/RImg.png";
import JavascriptImg from "./assets/JavascriptImg.png";
import BootstrapImg from "./assets/BootstrapImg.png";
import HTMLImg from "./assets/HTMLImg.png";
import CSSImg from "./assets/CSSImg.png";
import FigmaImg from "./assets/FigmaImg.png";

function Icons() {
    const list1Items = ['Item 1', 'Item 2', 'Item 3'];
    const list2Items = ['Item A', 'Item B', 'Item C'];
  
    return (
    <div className="container">
        <div className="title">Languages</div>
            <div className="image-list">
                    <Icon image={RImg} listItems={list1Items} />
                    <Icon image={JavascriptImg} listItems={list2Items} />
                    <Icon image={BootstrapImg} listItems={list2Items} />
                    <Icon image={HTMLImg} listItems={list2Items} />
                    <Icon image={FigmaImg} listItems={list2Items} />
                    <Icon image={CSSImg} listItems={list2Items} />
            </div>
    </div>
        
    );
  }
  export default Icons;