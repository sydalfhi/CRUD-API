const Text = ({ name, value, setVal }) => {
  return (
    <div>
      <label htmlFor="username" className="block text-sm text-white">
        {name}
      </label>
      <input
        value={value}
        onChange={(e) => setVal(e.target.value)}
        type="text"
        placeholder="John Doe"
        className="block bg-gray-50  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
      />
    </div>
  );
};

export default Text;
