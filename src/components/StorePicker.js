import React from 'react';
import PropTypes from "prop-types";
// import { getFunName } from "../helpers";

class StorePicker extends React.Component {
	myInput = React.createRef();

	static propTypes = {
		histori: PropTypes.object
	};

	goToStore = event => {
		//1 Stop the form from submitting
		event.preventDefault();
		//2 Get the text from the imput
		const storeName = this.myInput.value.value;
		//3 change the page to /store/blablabla
		this.props.history.push(`/store/${storeName}`);
	};

	render() {
		return (
			<form className="store-selector" onSubmit={this.goToStore}>
				<h2>CATCH OF THE DAY</h2>
				<input
					type="text"
					ref={this.myInput}
					required
					placeholder="Name"
				// defaultValue={getFunName()}
				/>
				<button type="submit">Enter Store</button>
			</form>
		)
	}
}

export default StorePicker;