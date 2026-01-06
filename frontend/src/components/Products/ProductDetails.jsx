import { useEffect, useState, useCallback } from "react";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductDetails,
  fetchSimilarProducts,
} from "../../redux/slices/productsSlice";
import { addToCart } from "../../redux/slices/cartSlice";
import PropTypes from "prop-types";

const ProductDetails = ({ productId }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedProduct, loading, error, similarProducts } = useSelector(
    (state) => state.products
  );
  const { user, guestId } = useSelector((state) => state.auth);

  const [mainImage, setMainImage] = useState("");
  const [quantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [printOptions, setPrintOptions] = useState({});
  const [dynamicPrice, setDynamicPrice] = useState(0);

  const productFetchId = productId || id;

  // Fetch product details and similar products
  useEffect(() => {
    if (productFetchId) {
      dispatch(fetchProductDetails(productFetchId));
      dispatch(fetchSimilarProducts({ id: productFetchId }));
    }
  }, [dispatch, productFetchId]);

  // Initialize main image and default print options & dynamic price
  useEffect(() => {
    if (!selectedProduct) return;

    // Set main image
    if (selectedProduct.images?.length > 0) {
      setMainImage(selectedProduct.images[0].url);
    }

    // Set default print options (pre-select lowest price size)
    const newOptions = { ...printOptions };

    if (selectedProduct?.printPrice?.standardSizesPrices) {
      const prices = Object.entries(selectedProduct.printPrice.standardSizesPrices).filter(
        ([, price]) => typeof price === "number"
      );
      if (prices.length > 0) {
        const [lowestSize] = prices.reduce(
          (minEntry, [size, price]) => (price < minEntry[1] ? [size, price] : minEntry),
          ["", Infinity]
        );
        if (lowestSize) newOptions.standardSizes = lowestSize;
        setDynamicPrice(selectedProduct.printPrice.standardSizesPrices[lowestSize]);
      }
    } else if (selectedProduct.price) {
      setDynamicPrice(selectedProduct.price);
    }

    setPrintOptions(newOptions);
  }, [selectedProduct]);

  // Calculate dynamic price based on selected options
  const calculateDynamicPrice = useCallback(
    (selectedOptions) => {
      if (!selectedProduct) return 0;

      let totalPrice = selectedProduct.price || 0;

      Object.entries(selectedOptions).forEach(([optionType, selectedOption]) => {
        if (!selectedOption) return;

        // Handle printPrice
        if (selectedProduct.printPrice?.[`${optionType}Prices`]?.[selectedOption]) {
          totalPrice += selectedProduct.printPrice[`${optionType}Prices`][selectedOption];
        }

        // Handle brandingPrice
        if (selectedProduct.brandingPrice?.[`${optionType}Price`]?.[selectedOption]) {
          totalPrice += selectedProduct.brandingPrice[`${optionType}Price`][selectedOption];
        }

        // Handle signsPrice
        if (selectedProduct.signsPrice?.[`${optionType}Prices`]?.[selectedOption]) {
          totalPrice += selectedProduct.signsPrice[`${optionType}Prices`][selectedOption];
        }
      });

      return totalPrice;
    },
    [selectedProduct]
  );

  // Update dynamic price when options or quantity change
  useEffect(() => {
    if (!selectedProduct) return;
    const newPrice = calculateDynamicPrice(printOptions);
    setDynamicPrice(newPrice * quantity);
  }, [printOptions, quantity, calculateDynamicPrice, selectedProduct]);

  // Handle adding to cart
  const handleAddToCart = () => {
    if (!selectedProduct) return;

    if (Object.values(printOptions).some((option) => !option)) {
      toast.error("Please select all options before adding to cart.", { duration: 1000 });
      return;
    }

    setIsButtonDisabled(true);

    const totalPrice = calculateDynamicPrice(printOptions) * quantity;

    dispatch(
      addToCart({
        productId: productFetchId,
        quantity,
        printOptions,
        guestId,
        userId: user?._id,
        price: totalPrice,
        printPrice: selectedProduct.printPrice,
        brandingPrice: selectedProduct.brandingPrice,
        signsPrice: selectedProduct.signsPrice,
        dimensions: selectedProduct.dimensions,
        weight: selectedProduct.weight,
      })
    )
      .then(() => {
        toast.success("Product added to cart!", { duration: 1000 });
      })
      .finally(() => setIsButtonDisabled(false));
  };

  // Handle option selection
  const handleOptionSelect = (optionType, value) => {
    setPrintOptions((prevOptions) => ({ ...prevOptions, [optionType]: value }));
  };

  // Render option buttons
  const renderOptionButtons = (optionType, options) => {
    let sortedOptions = options;

    // Sort standardSizes numerically
    if (optionType === "standardSizes") {
      sortedOptions = [...options].sort((a, b) => parseFloat(a) - parseFloat(b));
    }

    return (
      <div className="flex flex-wrap gap-2 mt-2">
        {sortedOptions.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionSelect(optionType, option)}
            className={`px-4 py-2 rounded border ${
              printOptions[optionType] === option
                ? "bg-white text-black"
                : "text-white border-gray-600"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    );
  };

  // Render print options with UI labels
  const renderPrintOptions = (optionType) => {
    if (!selectedProduct?.printOptions) return null;

    const printOptionsArray = Array.isArray(selectedProduct.printOptions[optionType])
      ? selectedProduct.printOptions[optionType]
      : [];

    if (printOptionsArray.length === 0) return null;

    const optionTypeLabels = {
      standardSizes: "Inches",
      sides: "Sides",
      paperFinish: "Paper Finish",
      paperWeight: "Paper Weight",
      lamination: "Lamination",
      cornerType: "Corner Type",
      layout: "Layout",
      colors: "Colors",
    };

    if (optionType === "colors") {
      return (
        <div className="mb-4">
          <p className="text-gray-300">{optionTypeLabels[optionType] || optionType}:</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {printOptionsArray.map((color) => (
              <button
                key={color}
                onClick={() => handleOptionSelect(optionType, color)}
                className={`w-8 h-8 rounded-full border ${
                  printOptions[optionType] === color ? "border-4 border-black" : "border-gray-300"
                }`}
                style={{
                  backgroundColor: color.toLowerCase(),
                  filter: "brightness(0.5)",
                }}
              ></button>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="mb-4">
        <p className="text-gray-300">{optionTypeLabels[optionType] || optionType}:</p>
        {renderOptionButtons(optionType, printOptionsArray)}
      </div>
    );
  };

  return (
    <div className="p-4 sm:p-6 -mt-1 bg-black">
      {selectedProduct && (
        <div className="max-w-6xl mx-auto bg-black p-4 sm:p-8 rounded-lg">
          <div className="flex flex-col md:flex-row">
            {/* Left Thumbnails */}
            <div className="hidden md:flex flex-col space-y-4 mr-6">
              {selectedProduct.images.map((image, index) => (
                <img
                  key={index}
                  src={image.url}
                  alt={image.altText || `Thumbnail ${index}`}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                    mainImage === image.url ? "border-white" : "border-gray-600"
                  }`}
                  onClick={() => setMainImage(image.url)}
                />
              ))}
            </div>

            {/* Main Image */}
            <div className="w-full md:w-1/2">
              <div className="mb-4">
                <img
                  src={mainImage}
                  alt="Main Product"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Right Side */}
            <div className="w-full md:w-1/2 md:ml-10">
              <h1 className="text-2xl md:text-3xl font-semibold mb-2 text-white">
                {selectedProduct.name}
              </h1>
              <p className="text-sm md:text-base -mt-2 mb-2 text-gray-300">
                SKU: {selectedProduct.sku}
              </p>

              <p className="text-lg text-crown-gold mb-1 line-through">
                {selectedProduct.originalPrice && `R ${selectedProduct.originalPrice}`}
              </p>
              <p className="text-xl text-crown-gold mb-2">R {dynamicPrice.toFixed(2)}</p>

              <p className="text-gray-300 mb-4">{selectedProduct.description}</p>

              {/* Dynamically Display Print Options */}
              {selectedProduct.printOptions &&
                Object.keys(selectedProduct.printOptions).map((optionType) =>
                  renderPrintOptions(optionType)
                )}

              <h1 className="text-2xl md:text-3xl text-white font-bold text-left mb-4">Job Summary</h1>
              <h2 className="text-sm md:text-base text-white text-left mb-4">
                See the total pricing including VAT and courier at checkout
              </h2>

              <p className="text-xl text-crown-gold mb-2">
                R {dynamicPrice > 0 ? dynamicPrice.toFixed(2) : selectedProduct.price.toFixed(2)}
              </p>

              <button
                onClick={handleAddToCart}
                disabled={isButtonDisabled}
                className={`bg-crown-gold text-white py-2 px-6 rounded w-full mb-4 ${
                  isButtonDisabled ? "cursor-not-allowed opacity-50" : "hover:bg-blue-400"
                }`}
              >
                {isButtonDisabled ? "Adding..." : "ADD TO CART"}
              </button>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-2xl text-center font-medium mb-4 text-white">You May Also Like</h2>
            <ProductGrid products={similarProducts} loading={loading} error={error} />
          </div>
        </div>
      )}
    </div>
  );
};

ProductDetails.propTypes = {
  productId: PropTypes.string,
};

ProductDetails.defaultProps = {
  productId: null,
};

export default ProductDetails;
