import { FC } from "react";
import "./systemPromptStyles.css";
import Input from "../../../../shared/components/Input";

const SystemPrompt: FC = () => {
	return (
		<div className="system-prompt card">
			<h1 className="card__title">Sistema</h1>

			<p className="card__text">
				Para conseguir una respuesta adecuada a tus <br /> necesidades, escribe
				un prompt para el sistema
			</p>

			<div className="system__prompt__input">
				<Input />
			</div>
		</div>
	);
};

export default SystemPrompt;
