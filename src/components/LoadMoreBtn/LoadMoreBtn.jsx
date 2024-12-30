import PropTypes from "prop-types";
import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ loadImages }) => {
	return (
		<button
			onClick={loadImages}
			className={css.button}
			aria-label="Load more button"
		>
			Load more
		</button>
	);
};

LoadMoreBtn.propTypes = {
	loadImages: PropTypes.func.isRequired, 
};

export default LoadMoreBtn;
