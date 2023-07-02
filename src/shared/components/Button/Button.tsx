import { FC, useState, useRef } from "react" 
import { IButtonProps } from "./interfaces/buttonProps";
import "./buttonStyles.css"

const Button: FC<IButtonProps> = ({
    color = 'var(--orange)', 
    text, 
    iconImg,
    hoverColor = 'var(--blue)'
}) => {
    const [backgroundColor, setBackgroundColor] = useState(color);
    const buttonRef = useRef<HTMLButtonElement>(null);
  
    const mouseEnter = () => {
        if(hoverColor) setBackgroundColor(hoverColor)
    }

    const mouseLeave = () => {
        if(hoverColor) setBackgroundColor(color)
    }

    return <button className="custom-button" 
                   style={{
                    backgroundColor: backgroundColor
                   }}
                   ref={buttonRef}
                   onMouseLeave={mouseLeave}
                   onMouseEnter={mouseEnter}
            >
             <img src={iconImg} alt="button icon" />
             {text}
           </button>
}

export default Button;