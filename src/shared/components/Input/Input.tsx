import { FC } from "react";
import "./inputStyles.css";
import { ReactComponent as SendIcon } from "../../../assets/send.svg";

const Input: FC = () => {
	return (
		<div className="input-wrapper">
			<input className="custom-input" type="text" placeholder="custom input" />

			<div className="icon">
				<SendIcon />
			</div>
		</div>
	);
};

export default Input;
