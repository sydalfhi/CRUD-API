import { useNavigate } from "react-router-dom";
import Email from "../components/Input/Email";
import Text from "../components/Input/Text";
import { useState } from "react";
import { createData, updateData } from "../service/api.service";
import { useShallow } from "zustand/react/shallow";
import { useTodoStore } from "../context/Todo";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [jenisKemain, setJenisKelamin] = useState("");
  const [phone, setPhone] = useState("");

  const [dataSementara] = useTodoStore(
    useShallow((state) => [state.dataSementara])
  );

  const lokasi = useLocation();

  useEffect(() => {
    if (dataSementara) {
      setName(dataSementara.name);
      setUsername(dataSementara.username);
      setEmail(dataSementara.email);
      setJenisKelamin(dataSementara.gendre);
      setPhone(dataSementara.phone);
    }
  }, [dataSementara]);

  function handelSubmit(e) {
    e.preventDefault();

    // validasi success

    let newDate = new Date().getTime();

    if (lokasi.pathname.includes("/add")) {
      let newData = {
        id: newDate,
        name,
        username,
        email,
        phone,
        gendre: jenisKemain,
      };
      createData(newData);
    } else if (lokasi.pathname.includes("/edit")) {
      let newData = {
        id: dataSementara.id,
        name,
        username,
        email,
        phone,
        gendre: jenisKemain,
      };
      updateData(dataSementara.id, newData);
    } else {
      console.info("salah bang");
    }
    // try {
    //   if (dataSementara) {
    //
    //   } else {
    //
    //   }
    navigate("/");
    // } catch (error) {
    //   console.info("error karena : " + error);
    // }
  }

  return (
    <form
      onSubmit={handelSubmit}
      className=" blockflex flex-col space-y-3 p-10 rounded-md bg-slate-700 m-10"
    >
      <Text name="name" value={name ?? ""} setVal={setName} />
      <Text name="username" value={username ?? ""} setVal={setUsername} />
      <Email name="email" value={email ?? ""} setVal={setEmail} />
      <Text name="phone" value={phone ?? ""} setVal={setPhone} />
      <div className="flex space-x-5 items-centers">
        <label className="flex space-x-3 items-center">
          <input
            type="radio"
            onChange={() => setJenisKelamin("male")}
            checked={jenisKemain == "male"}
          />
          <p className="text-white">laki laki</p>
        </label>
        <label className="flex space-x-3 items-center">
          <input
            checked={jenisKemain == "female"}
            type="radio"
            name="jk"
            onChange={() => setJenisKelamin("female")}
          />
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
