import React from "react";

const AIcard = ({ data, index }) => {
  const { name, heading, pera, button } = data;

  return (
    <div className="bg-[#F1F4F7] w-[120vh] rounded-3xl p-8 flex flex-col justify-center items-center gap-6 shadow-lg">
      <h1 className="text-sm font-bold mb-3 text-gray-600">
         {name}
      </h1>

      <h1
        className="text-center text-4xl font-semibold text-gray-900"
        dangerouslySetInnerHTML={{ __html: heading }}
      ></h1>

      <p
        className="text-center text-gray-700 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: pera }}
      ></p>

      <button className="hover:bg-blue-800 cursor-pointer px-6 py-3 rounded-full bg-blue-500 text-white transition-colors duration-300">
        {button}
      </button>
    </div>
  );
};

export default AIcard;
