import PropTypes from "prop-types";
import ImageCard from "../ImageCard/ImageCard";
import css from "./Gallery.module.css";

const Gallery = ({ images, open }) => {
	return (
		<section className={css.gallery}>
			<h1 className="visually-hidden">Gallery</h1>
			<ul className={css.galleryList}>
				{images.map((image) => (
					<li key={image.id} className={css.galleryItem}>
						<ImageCard image={image} open={open} />
					</li>
				))}
			</ul>
		</section>
	);
};

Gallery.propTypes = {
	images: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
		})
	).isRequired,
	open: PropTypes.func.isRequired,
};

export default Gallery;
