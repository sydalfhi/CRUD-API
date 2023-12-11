import { useParams } from "react-router-dom";
import Form from "../layout/Form";
import { getOneData } from "../service/api.service";
import { useShallow } from "zustand/react/shallow";
import { useEffect } from "react";

const Edit = () => {
  const [dataSementara, setDataSementara] = useTodoStore(
    useShallow((state) => [state.dataSementara, state.setDataSementara])
  );

  const { id } = useParams();
  useEffect(() => {
    async function getOnePerson() {
      let data = await getOneData(id);
      console.info(data);
    }
    getOnePerson();
  }, []);
  return <Form />;
};

export default Edit;
