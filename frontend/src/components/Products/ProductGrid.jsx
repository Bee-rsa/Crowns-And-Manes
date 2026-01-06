import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProductGrid = ({ products, loading, error }) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product._id}
          className="bg-black text-white w-full flex flex-col overflow-hidden border border-gray-700 shadow-lg p-4 rounded-lg"
        >
          {/* Image container wrapped in Link */}
          <Link to={`/product/${product._id}`} className="relative mx-3 flex h-64 sm:h-72 md:h-72 lg:h-72 overflow-hidden rounded-xl">
            <img
              src={product?.images?.[0]?.url || "/placeholder.jpg"}
              alt={product?.images?.[0]?.altText || product.name || "Product image"}
              className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Content */}
          <div className="flex-grow flex flex-col justify-between mt-4">
            <div>
              <h3 className="text-lg mb-2 line-clamp-1">{product.name}</h3>
              <p className="text-sm -mt-2 mb-2 text-gray-300">SKU: {product.sku}</p>
              <div className="flex items-center space-x-2">
                <p className="text-crown-gold text-l text-base tracking-tighter">
                  R {product.price}
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-4 line-clamp-4">
              {product.description}
            </p>

            {/* Button to product details */}
            <Link
              to={`/product/${product._id}`}
              className="mt-auto bg-crown-gold text-black py-2 px-4 rounded-md text-center hover:bg-blue-400 transition"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

ProductGrid.propTypes = {
  products: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default ProductGrid;
