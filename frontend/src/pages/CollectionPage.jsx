import { useEffect } from "react";
import SortOptions from "../components/Products/SortOptions";
import ProductGrid from "../components/Products/ProductGrid";
import { useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByFilters } from "../redux/slices/productsSlice";

const CollectionPage = () => {
  const { collection } = useParams();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const queryParams = Object.fromEntries([...searchParams]);


  useEffect(() => {
    console.log("Fetching products with:", { collection, ...queryParams });
    dispatch(fetchProductsByFilters({ collection, ...queryParams }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, collection, searchParams]);

  useEffect(() => {
    console.log("Redux State - Products:", products);
  }, [products]);


  return (
    <div className="flex flex-col -mt-1 bg-black lg:flex-row">



      
      <div className="flex-grow p-4">

        {/* Sort Options */}
        <SortOptions />

        {/* Product Grid */}
        <ProductGrid products={products} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default CollectionPage;