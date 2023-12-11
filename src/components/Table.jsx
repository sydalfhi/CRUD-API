import Edit from "../assets/img/edit.svg";
import Delete from "../assets/img/delete.svg";
import { Link } from "react-router-dom";

const Table = ({ data }) => {
  return (
    <section className="container px-4 mx-auto">
      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
              <table className="text-center min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                {/* table head */}
                <thead className="text-center bg-gray-100 dark:bg-gray-800">
                  <tr>
                    <th className="px-12 py-3.5 text-sm font-normal  text-gray-500 dark:text-gray-400">
                      Name
                    </th>

                    <th className="px-4 py-3.5 text-sm font-normal  text-gray-500 dark:text-gray-400">
                      Username
                    </th>

                    <th className="px-4 py-3.5 text-sm font-normal  text-gray-500 dark:text-gray-400">
                      Email
                    </th>
                    <th className="px-4 py-3.5 text-sm font-normal  text-gray-500 dark:text-gray-400">
                      Phone
                    </th>
                    <th className="px-4 py-3.5 text-sm font-normal  text-gray-500 dark:text-gray-400">
                      Gendre
                    </th>
                    <th className="px-4 py-3.5 text-sm font-normal  text-gray-500 dark:text-gray-400">
                      Action
                    </th>
                  </tr>
                </thead>

                {/* end table head */}

                {/* table body */}
                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                  {data?.data.map((item, index) => (
                    <tr key={index}>
                      <td className="px-12 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                        {item.name}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        {item.username}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        {item.email}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        {item.phone}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        {item.gendre}
                      </td>
                      <td>
                        <div className="w-full flex space-x-3 items-center justify-center">
                          <Link to={{ pathname: `/edit/${item.id}` }}>
                            <img
                              src={Edit}
                              alt="edit"
                              className="  w-[30px] h-auto p-1 bg-sky-500 rounded-[4px]"
                            />
                          </Link>
                          <a href="">
                            <img
                              src={Delete}
                              alt="delete"
                              className="w-[30px] h-auto p-1 bg-rose-500 rounded-[4px]"
                            />
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>

                {/* end table body */}
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Table;
