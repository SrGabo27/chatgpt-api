import { FC, useState } from "react";
import "./chatStyles.css"
import Button from "../../../../shared/components/Button";
import { IChatMessage } from "./interfaces/chatMessage";
import Bubble from "./components/Bubble/Bubble";

const Chat: FC = () => {
  const [chat,setChat] = useState<Array<IChatMessage>>([]);

  return (
    <div className="chat">
      <div className="chat__head card">
        <b className="chat__head__title">OdamaChat</b>

        <Button 
          text="Nueva Busqueda"
          iconImg="../../../../src/assets/icon-plus-circle.svg"  
        />
      </div>

      <div className="chat__screen">
         <Bubble />
      </div>
    </div>
  ); 
};

export default Chat;