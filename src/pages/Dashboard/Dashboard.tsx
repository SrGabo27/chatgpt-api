import { FC, useState } from "react";
import SystemPrompt from "./components/SystemPrompt";
import "./dashboardStyles.css";
import Chat from "./components/Chat";

const Dashboard: FC = () => {
  const [systemPrompt, setSystemPrompt] = useState();

  return (
    <div className="dashboard">
      <div className="aside">
        <SystemPrompt />
      </div>

      <Chat />
    </div>
  );
};

export default Dashboard;
