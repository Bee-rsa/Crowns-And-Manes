import { useState } from "react";
import { motion } from "framer-motion";
import { Upload } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../redux/slices/productsSlice.js";

const categories = ["Print"];
const colorOptions = [
  "Red",
  "Blue",
  "Black",
  "Green",
  "Yellow",
  "Gray",
  "White",
  "Pink",
  "Beige",
  "Navy",
];

const PrintProductForm = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.products);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    sku: "",
    category: "",
    images: [],
    printOptions: {
      colors: [], // ✅ COLOR OPTIONS HERE
      isFeatured: false,
      isPublished: false,
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await dispatch(createProduct(newProduct)).unwrap();

      setNewProduct({
        name: "",
        description: "",
        price: "",
        sku: "",
        category: "",
        images: [],
        printOptions: {
          colors: [],
          isFeatured: false,
          isPublished: false,
        },
      });

      setImageLoaded(false);
    } catch (err) {
      console.error("Error creating product", err);
    }
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;

    const readers = files.map(
      (file) =>
        new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () =>
            resolve({
              url: reader.result,
              altText: file.name,
            });
          reader.readAsDataURL(file);
        })
    );

    Promise.all(readers).then((images) => {
      setNewProduct((prev) => ({
        ...prev,
        images: [...prev.images, ...images],
      }));
      setImageLoaded(true);
    });
  };

  return (
    <motion.div
      className="bg-gray-800 shadow-lg rounded-lg p-8 mb-8 max-w-xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold mb-6 text-crown-gold">
        Create New Product
      </h2>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Product Name */}
        <div>
          <label className="block text-crown-gold mb-1">Product Name</label>
          <input
            type="text"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
            className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-crown-gold mb-1">Description</label>
          <textarea
            rows="3"
            value={newProduct.description}
            onChange={(e) =>
              setNewProduct({ ...newProduct, description: e.target.value })
            }
            className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white"
            required
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-crown-gold mb-1">Price</label>
          <input
            type="number"
            step="0.01"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: Number(e.target.value) })
            }
            className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white"
            required
          />
        </div>

        {/* SKU */}
        <div>
          <label className="block text-crown-gold mb-1">SKU</label>
          <input
            type="text"
            value={newProduct.sku}
            onChange={(e) =>
              setNewProduct({ ...newProduct, sku: e.target.value })
            }
            className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-crown-gold mb-1">Category</label>
          <select
            value={newProduct.category}
            onChange={(e) =>
              setNewProduct({ ...newProduct, category: e.target.value })
            }
            className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white"
            required
          >
            <option value="">Select category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Image Upload */}
        <div className="flex flex-col gap-2">
          <input
            type="file"
            id="image"
            multiple
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />

          <label
            htmlFor="image"
            className="bg-crown-gold text-white px-4 py-2 rounded-md cursor-pointer w-fit"
          >
            <Upload className="inline mr-2" />
            Upload Product Image
          </label>

          {imageLoaded && (
            <p className="text-green-500 text-sm">
              Image loaded successfully
            </p>
          )}
        </div>

{/* Available Colors as Dropdown */}
<div className="mt-6 relative">
  <label className="block text-crown-gold font-semibold mb-2">Available Colors</label>

  <div
    className="bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white cursor-pointer"
    onClick={() => setDropdownOpen((prev) => !prev)}
  >
    {newProduct.printOptions.colors.length > 0
      ? newProduct.printOptions.colors.join(", ")
      : "Select colors"}
  </div>

  {dropdownOpen && (
    <div className="absolute z-10 mt-1 w-full bg-gray-700 border border-gray-600 rounded-md max-h-48 overflow-y-auto">
      {colorOptions.map((color) => {
        const selected = newProduct.printOptions.colors.includes(color);
        return (
          <label
            key={color}
            className={`flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-600 ${
              selected ? "bg-crown-gold text-black" : "text-white"
            }`}
          >
            <input
              type="checkbox"
              checked={selected}
              onChange={() =>
                setNewProduct((prev) => ({
                  ...prev,
                  printOptions: {
                    ...prev.printOptions,
                    colors: selected
                      ? prev.printOptions.colors.filter((c) => c !== color)
                      : [...prev.printOptions.colors, color],
                  },
                }))
              }
              className="accent-black"
            />
            {color}
          </label>
        );
      })}
    </div>
  )}
</div>


        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="bg-crown-gold text-white py-2 px-6 rounded-md w-full mt-6 disabled:opacity-50"
        >
          {loading ? "Creating..." : "Create Product"}
        </button>
      </form>
    </motion.div>
  );
};

export default PrintProductForm;
