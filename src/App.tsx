import RestaurantList from "./components/RestaurantList";
import FloatingButton from "./components/FloatingButton";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-4"
      >
        Best APK
      </motion.h1>

      <RestaurantList />
      <FloatingButton />
    </div>
  );
}

export default App;
