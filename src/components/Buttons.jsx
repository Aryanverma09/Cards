const Buttons = ({ setIndex, activeIndex }) => {
  const buttonLabels = [
    "AI",
    "Metaverse and Wearables",
    "Software Engineering",
    "Infrastructure",
    "Research and Data",
    "Creative",
    "Product and Program Management",
    "Security",
  ];

  return (
    <div className="h-[20vh] w-full flex items-center gap-4 justify-center flex-wrap">
      {buttonLabels.map((label, index) => (
        <button
          key={index}
          onClick={() => setIndex(index)}
          className={`px-8 py-2 text-base rounded-2xl cursor-pointer transition-colors duration-300 ${
            activeIndex === index
              ? "bg-blue-500 text-white"
              : "bg-gray-300 hover:bg-blue-500 hover:text-white"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
export default Buttons