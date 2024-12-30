import PropTypes from "prop-types";
import css from "./ImageCard.module.css";

const ImageCard = ({ image, open }) => {
	return (
		<>
			<img
				src={image.urls.small}
				alt={image.alt_description || "Image"}
				className={css.image}
				onClick={() => open(image)}
			/>
		</>
	);
};

ImageCard.propTypes = {
	image: PropTypes.shape({
		urls: PropTypes.shape({
			small: PropTypes.string.isRequired,
		}).isRequired,
		alt_description: PropTypes.string,
	}).isRequired,
	open: PropTypes.func.isRequired,
};

export default ImageCard;
