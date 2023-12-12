const Email = ({ name, value, setVal }) => {
  return (
    <div>
      <label htmlFor="email" className="block text-sm text-white">
        {name}
      </label>
      <input
        value={value}
        onChange={(e) => setVal(e.target.value)}
        type="email"
        placeholder="john@example.com"
        className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
      />
      {/* <p className="mt-3 text-xs text-gray-400 dark:text-gray-600"> */}
      {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. */}
      {/* </p> */}
    </div>
  );
};

export default Email;
