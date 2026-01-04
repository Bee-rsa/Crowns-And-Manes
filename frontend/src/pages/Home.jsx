import { useEffect } from "react";
import Hero from "../components/Layout/Hero";
import FeaturedCollection from "../components/Products/FeaturedCollection";
import FeaturesSection from "../components/Products/FeaturesSection";
import GenderCollectionSection from "../components/Products/GenderCollectionSection";
import NewArrivals from "../components/Products/NewArrivals";
import { useDispatch } from "react-redux";
import { fetchProductsByFilters } from "../redux/slices/productsSlice";


const Home = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    // Fetch products for a specific collection
    dispatch(
      fetchProductsByFilters({
        gender: "Women",
        category: "Bottom Wear",
        limit: 8,
      })
    );
    // Fetch best seller product
    const fetchBestSeller = async () => {
      
    };
    fetchBestSeller();
  }, [dispatch]);

  return (
    <div>
      <Hero />
      <FeaturesSection />
      <FeaturedCollection />
      <NewArrivals />
      <GenderCollectionSection />
      
      
    </div>
  );
};
export default Home;
