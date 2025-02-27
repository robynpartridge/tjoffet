import { useState, useEffect } from "react";
import { getRestaurants } from "../api/getRestaurants";
import { calculateAlcoholPerSEK } from "../utils/helpers";
import { Restaurant } from "../types/Restaurant";
import { motion } from "framer-motion";

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  useEffect(() => {
    getRestaurants().then(setRestaurants);
  }, []);

  const sortedRestaurants = [...restaurants].sort((a, b) => {
    const valueA = calculateAlcoholPerSEK(a.alcoholPercentage, a.priceSEK);
    const valueB = calculateAlcoholPerSEK(b.alcoholPercentage, b.priceSEK);
    return sortOrder === "desc" ? valueB - valueA : valueA - valueB;
  });

  return (
    <div className="w-full max-w-md">
      <button
        onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md"
      >
        Sort by Alc/SEK ({sortOrder === "asc" ? "⬆️" : "⬇️"})
      </button>

      {sortedRestaurants.map((restaurant) => (
        <motion.div
          key={restaurant.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white shadow-md rounded-lg p-4 mb-2 flex justify-between"
        >
          <div>
            <p className="text-lg font-semibold">{restaurant.name}</p>
            <p className="text-sm text-gray-600">{restaurant.drink}</p>
          </div>
          <p className="text-lg font-bold">
            {calculateAlcoholPerSEK(restaurant.alcoholPercentage, restaurant.priceSEK).toFixed(2)} Alc/SEK
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default RestaurantList;
