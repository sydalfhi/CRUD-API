import { useParams } from "react-router-dom";
import Form from "../layout/Form";
import { getOneData } from "../service/api.service";
import { useShallow } from "zustand/react/shallow";
import { useTodoStore } from "../context/Todo";
import { useEffect } from "react";

const Edit = () => {
  const [setDataSementara] = useTodoStore(
    useShallow((state) => [state.setDataSementara])
  );

  const { id } = useParams();
  useEffect(() => {
    async function getOnePerson() {
      let data = await getOneData(id);
      setDataSementara(data.data);
    }
    getOnePerson();
  }, [id]);
  return <Form />;
};

export default Edit;
