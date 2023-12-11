import { getAllData } from "../service/api.service";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Table from "../components/Table";

const Home = () => {
  const fetchDataTodo = async () => {
    return await getAllData();
  };
  const { data, isLoading, error, isError, isFetching } = new useQuery(
    "todo",
    fetchDataTodo,
    {
      cacheTime: 360000,
      staleTime: 0,
      // refetchInterval: 5000,
      // refetchOnWindowFocus: false,
    }
  );

  if (isError) {
    return <h1 className="text-3xl fw-bold">{error.message}</h1>;
  }
  if (isLoading || isFetching) {
    return (
      <>
        <h1 className="text-blue-500 text-3xl fw-bold">loading...</h1>
      </>
    );
  }

  return (
    <>
      <div className="mt-10 w-full flex flex-col">
        <div className="w-[90%] mx-auto">
          <Link to="/add" className="underline text-sky-800 font-bold text-3xl">
            Tambah Data Baru
          </Link>
        </div>
        <Table data={data} />
      </div>
    </>
  );
};

export default Home;
