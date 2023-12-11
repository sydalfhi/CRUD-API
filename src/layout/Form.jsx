import { useNavigate } from "react-router-dom";
import Email from "../components/Input/Email";
import Text from "../components/Input/Text";

const Form = () => {
  const navigate = useNavigate();
  function handleClick() {
    // success

    navigate("/");
  }

  return (
    <form
      onClick={handleClick}
      className=" blockflex flex-col space-y-3 p-10 rounded-md bg-slate-700 m-10"
    >
      <Text name="name" />
      <Text name="username" />
      <Email />
      <Text name="phone" />
      <div className="flex space-x-5 items-centers">
        <label className="flex space-x-3 items-center">
          <input type="radio" name="jk" id="" />
          <p className="text-white">laki laki</p>
        </label>
        <label className="flex space-x-3 items-center">
          <input type="radio" name="jk" id="" />
          <p className="text-white">perempuan </p>
        </label>
      </div>
      <button
        type="submit"
        className="bg-green-500 font-bold text-white rounded-md w-full block py-2"
      >
        kirim
      </button>
    </form>
  );
};

export default Form;
