import { useState } from "react";
import { motion } from "framer-motion";
import { Upload, ChevronDown, ChevronUp } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../redux/slices/productsSlice.js";
import PropTypes from "prop-types";

const categories = ["Print"];
const StandardSizes = [8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30];

// Collapsible header component
const CollapsibleHeader = ({ title, isOpen, toggleOpen }) => (
  <div className="flex items-center justify-between cursor-pointer" onClick={toggleOpen}>
    <label className="block text-m font-medium text-pink-500 mb-2">{title}</label>
    {isOpen ? <ChevronUp className="text-pink-500" /> : <ChevronDown className="text-pink-500" />}
  </div>
);

CollapsibleHeader.propTypes = {
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired,
};

const PrintProductForm = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.products);

  // Form state
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: 0,
    sku: "",
    dimensions: { length: "", width: "", height: "" }, // Moved out of printOptions
    weight: "", // Moved out of printOptions
    category: "",
    images: [],
    printPrice: {
      sidesPrices: {},
      paperFinishPrices: {},
      paperWeightPrices: {},
      standardSizesPrices: {},
      laminationPrices: {},
      cornerTypePrices: {},
      layoutPrices: {},
    },
    printOptions: {
      sides: [],
      paperFinish: [],
      paperWeight: [],
      standardSizes: [],
      lamination: [],
      cornerType: [],
      layout: [],
      isFeatured: false,
      isPublished: false,
    },
  });

  // Collapsible sections state for all print option groups
  const [openStandardSizes, setOpenStandardSizes] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    // Convert dimensions and weight to numbers (defaulting empty strings to 0)
    const dimensions = {
      length: Number(newProduct.dimensions.length) || 0,
      width: Number(newProduct.dimensions.width) || 0,
      height: Number(newProduct.dimensions.height) || 0,
    };
    const productToSubmit = {
      ...newProduct,
      dimensions,
      weight: Number(newProduct.weight) || 0,
    };
    try {
      await dispatch(createProduct(productToSubmit)).unwrap();
      // Reset form after submission
      setNewProduct({
        name: "",
        description: "",
        price: 0,
        sku: "",
        dimensions: { length: "", width: "", height: "" },
        weight: "",
        category: "",
        images: [],
        printPrice: {
          sidesPrices: {},
          paperFinishPrices: {},
          paperWeightPrices: {},
          standardSizesPrices: {},
          laminationPrices: {},
          cornerTypePrices: {},
          layoutPrices: {},
        },
        printOptions: {
          sides: [],
          paperFinish: [],
          paperWeight: [],
          standardSizes: [],
          lamination: [],
          cornerType: [],
          layout: [],
          isFeatured: false,
          isPublished: false,
        },
      });
    } catch (err) {
      console.error("Error creating product", err);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProduct((prev) => ({
          ...prev,
          images: [...prev.images, { url: reader.result, altText: "" }],
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Helper for updating nested printOptions state
  const updatePrintOption = (field, value) => {
    setNewProduct((prev) => ({
      ...prev,
      printOptions: {
        ...prev.printOptions,
        [field]: value,
      },
    }));
  };

  // Toggle multi-select options
  const toggleOption = (field, option) => {
    const currentOptions = newProduct.printOptions[field];
    if (currentOptions.includes(option)) {
      updatePrintOption(field, currentOptions.filter((item) => item !== option));
    } else {
      updatePrintOption(field, [...currentOptions, option]);
    }
  };

  // Handle Standard Sizes Prices Change
  const handleStandardSizesPriceChange = (size, value) => {
    const parsedValue = value === "" ? "" : parseFloat(value);
    setNewProduct((prev) => ({
      ...prev,
      printPrice: {
        ...prev.printPrice,
        standardSizesPrices: {
          ...prev.printPrice.standardSizesPrices,
          [size]: parsedValue, // Update price for specific size
        },
      },
    }));
  };



  return (
    <motion.div
      className="bg-gray-800 shadow-lg rounded-lg p-8 mb-8 max-w-xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-2xl font-bold mb-6 text-crown-gold">Create New Print Product</h2>
      {error && <p className="text-crown-gold mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Basic Product Info */}
        <div>
          <label htmlFor="name" className="block text-m font-medium text-crown-gold">
            Product Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-m font-medium text-crown-gold">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={newProduct.description}
            onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
            rows="3"
            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white"
            required
          />
        </div>
        <div>
          <label htmlFor="price" className="block text-m font-medium text-crown-gold">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={newProduct.price || ""}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })
            }
            step="0.01"
            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white"
            required
          />
        </div>
        <div>
          <label htmlFor="sku" className="block text-m font-medium text-crown-gold">
            SKU
          </label>
          <input
            type="text"
            id="sku"
            name="sku"
            value={newProduct.sku}
            onChange={(e) => setNewProduct({ ...newProduct, sku: e.target.value })}
            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white"
            required
          />
        </div>
        <div>
          <label htmlFor="category" className="block text-m font-medium text-crown-gold">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={newProduct.category}
            onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
            className="mt-1 block w-full bg-gray-800 border border-gray-600 rounded-lg shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-crown-gold-700 focus:border-crown-gold transition-all duration-200"
            required
          >
            <option value="" className="bg-gray-700 text-white">
              Select a category
            </option>
            {categories.map((cat) => (
              <option key={cat} value={cat} className="bg-gray-700 text-white">
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-1 flex items-center">
          <input
            type="file"
            id="image"
            name="image"
            className="hidden"
            accept="image/*"
            onChange={handleImageChange}
          />
          <label htmlFor="image" className="bg-crown-gold text-white py-2 px-4 rounded-md cursor-pointer">
            <Upload className="inline mr-2" />
            Upload Product Image
          </label>
        </div>

        <hr className="my-4 border-gray-600" />

        <h2 className="text-2xl font-bold text-white">Wig Length Options</h2>


        {/* Standard Sizes Section */}
        <div className="mb-6 text-crown-gold">
          <CollapsibleHeader title="Inches" isOpen={openStandardSizes} toggleOpen={() => setOpenStandardSizes(!openStandardSizes)} />
          {openStandardSizes && (
            <div className="space-y-2">
              {StandardSizes.map((size) => (
                <div
                  key={size}
                  className={`flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                    newProduct.printOptions.standardSizes.includes(size)
                      ? "bg-crown-gold border-crown-gold"
                      : "bg-gray-800 border-gray-700 hover:bg-gray-700"
                  } border cursor-pointer`}
                  onClick={() => toggleOption("standardSizes", size)}
                >
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      value={newProduct.printPrice?.standardSizes?.[size] ?? ""}
                      checked={newProduct.printOptions.standardSizes.includes(size)}
                      onChange={() => {}}
                      className="hidden"
                    />
                    <span className="ml-2 text-white">{size}</span>
                  </label>
                  <input
                    type="number"
                    value={newProduct.printPrice.standardSizesPrices[size] ?? ""}
                    onChange={(e) => handleStandardSizesPriceChange(size, e.target.value)}
                    step="0.01"
                    className="w-20 bg-gray-700 border border-gray-600 rounded-md text-white px-2 py-1"
                    placeholder="Price"
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              ))}
            </div>
          )}
        </div>



        <button
          type="submit"
          className="mt-4 bg-crown-gold text-white py-2 px-6 rounded-md w-full disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Creating..." : "Create Product"}
        </button>
      </form>
    </motion.div>
  );
};

export default PrintProductForm;