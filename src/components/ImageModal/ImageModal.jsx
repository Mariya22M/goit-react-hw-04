import PropTypes from "prop-types";
import ReactModal from "react-modal";
import css from "./ImageModal.module.css";

ReactModal.setAppElement("#root");

const ImageModal = ({ image, close }) => {
	return (
		<ReactModal
			isOpen={!!image} // Перевірка, чи існує image
			onRequestClose={close}
			overlayClassName={css.backdrop}
			className={css.modalImage}
			shouldCloseOnOverlayClick={true}
			shouldCloseOnEsc={true}
		>
			<img
				src={image?.urls.regular}
				alt={image?.alt_description || "Image"}
				onClick={(e) => e.stopPropagation()}
			/>
		</ReactModal>
	);
};

ImageModal.propTypes = {
	image: PropTypes.shape({
		urls: PropTypes.shape({
			regular: PropTypes.string.isRequired,
		}).isRequired,
		alt_description: PropTypes.string,
	}),
	close: PropTypes.func.isRequired,
};

export default ImageModal;