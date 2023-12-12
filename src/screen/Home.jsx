import { getAllData } from "../service/api.service";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Table from "../components/Table";
import { useShallow } from "zustand/react/shallow";
import { useTodoStore } from "../context/Todo";
import { useEffect } from "react";

const Home = () => {
  const [hapusDataSementara] = useTodoStore(
    useShallow((state) => [state.hapusDataSementara])
  );

  useEffect(() => {
    hapusDataSementara();
  });

  const onError = (error) => {
    console.info(error);
  };
  const onSuccess = () => {
    console.info("berhasil guys");
  };

  const fetchDataTodo = async () => {
    return await getAllData();
  };
  const { data, isLoading, error, isError } = new useQuery(
    "todo",
    fetchDataTodo,
    {
      cacheTime: 2000,
      staleTime: 0,
      refetchOnWindowFocus: true,
      onSuccess,
      onError,
      refetchOnMount: true,
      refetchIntervalInBackground: true,
    }
  );

  if (isError) {
    return <h1 className="text-3xl fw-bold">{error.message}</h1>;
  }
  if (isLoading) {
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
