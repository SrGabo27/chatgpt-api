import { FC } from "react";
import "./bubbleStyles.css";

const Bubble: FC = () => {
    return (
        <div className="bubble card"> 
            <div className="bubble__header">
                <h2>Ana Clara</h2>
            
                <span>05:00 pm</span>
            </div>

            <div className="separator"> </div>

            hola
        </div>
    )
}

export default Bubble;