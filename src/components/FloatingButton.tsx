import { PlusIcon } from "@heroicons/react/24/outline";

const FloatingButton = () => (
  <button className="fixed bottom-6 right-6 bg-blue-500 p-4 rounded-full shadow-lg">
    <PlusIcon className="h-6 w-6 text-white" />
  </button>
);

export default FloatingButton;
