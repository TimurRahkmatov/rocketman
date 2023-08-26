import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import "../../styles/Settings/SettingsDriver.css";
import SettingsLinks from "../../components/SettingsLinks";
import { api } from "../../API/api";
import { toast } from "react-toastify";
import { Radio } from "antd";

const SettingsDriver = () => {
  const [data, setData] = useState([]);
  const [driver, setDriver] = useState({});
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");
  const [value, setValue] = useState(false);

  // Create Refs
  const drivernameRef = useRef();
  const driverbirthdayRef = useRef();
  const driverphoneRef = useRef();
  const driverautonumRef = useRef();
  const drivertypeRef = useRef();
  const driverstatusOnRef = useRef();
  const driverstatusOfRef = useRef();
  // update Refs
  const editdrivernameRef = useRef();
  const editdriverbirthdayRef = useRef();
  const editdriverphoneRef = useRef();
  const editdriverautonumberRef = useRef();
  const editdrivertypeRef = useRef();

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const getDrivers = async () => {
    try {
      setLoading(true);
      const { data } = await api.getSettingDrivers();
      setData(data);
      // if (data.status === 200) {
      // 	dispatch(setCategory(data.data.data));
      // }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDrivers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCreateDriver = async (event) => {
    try {
      const driverCreate = {
        driver_full_name: drivernameRef.current.value,
        driver_birthday: driverbirthdayRef.current.value,
        driver_phone: driverphoneRef.current.value,
        car_number: driverautonumRef.current.value,
        type: drivertypeRef.current.value,
        status: value == "on" ? true : false,
      };
      const { data } = await api.createDriver(driverCreate);
      if (data?.status == 400 && data?.name == "ValidationError") {
        toast("Iltimos ma'lumotlarni to'g'ri va to'liq to'ldiring", {
          type: "warning",
        });
      }
      getDrivers();
      if (data.status == 201) {
        toast("Success created driver", { type: "success" });
      }
    } catch (error) {
      toast(error.response.data.message, { type: "error" });
    }
  };

  const getOneDriver = async (id) => {
    try {
      setId(id);
      const { data } = await api.getOneDriver(id);
      setDriver(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleUpdateDriver = async () => {
    try {
      const driverUpdate = {
        driver_full_name: editdrivernameRef.current.value,
        driver_birthday: editdriverbirthdayRef.current.value,
        driver_phone: editdriverphoneRef.current.value,
        car_number: editdriverautonumberRef.current.value,
        type: editdrivertypeRef.current.value,
        status: value === "on" ? true : false,
      };
      const { data } = await api.updateDriver(id, driverUpdate);
      if (data?.status == 400 && data?.name == "ValidationError") {
        toast("Iltimos ma'lumotlarni to'g'ri va to'liq to'ldiring", {
          type: "warning",
        });
      }
      if (data.status == 202) {
        toast("Success updated driver", { type: "success" });
      }
      getDrivers();
    } catch (error) {
      toast("Driver update qilishda xatolik mavjud", { type: "error" });
    }
  };

  return (
    <div>
      <Sidebar />
      <div className="ummumiy">
        <Header />
        <div
          className="modal fade "
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Qo'shish
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form action="" onSubmit={handleCreateDriver}>
                  <div className="d-flex  justify-content-between">
                    <div>
                      <label htmlFor="driver_name" className="my-2">
                        Driver name
                      </label>
                      <input
                        ref={drivernameRef}
                        type="text"
                        className="form-control"
                        placeholder="name"
                        id="driver_name"
                        name="driver_name"
                      />
                    </div>
                    <div>
                      <label htmlFor="date" className=" my-2">
                        D.O.B
                      </label>
                      <input
                        ref={driverbirthdayRef}
                        type="text"
                        className="form-control 100"
                        name="date"
                        id="date"
                        placeholder="masalan: 22/11/1999"
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div>
                      <label htmlFor="phone" className="my-2">
                        Telefon raqami
                      </label>
                      <input
                        ref={driverphoneRef}
                        type="text"
                        className="form-control"
                        placeholder="998 _ _ _ _ _ _ _ _ _"
                        id="phone"
                        name="phone"
                      />
                    </div>
                    <div>
                      <label htmlFor="auto_number" className=" my-2">
                        Autoraqam
                      </label>
                      <input
                        ref={driverautonumRef}
                        type="text"
                        className="form-control 100"
                        name="auto_number"
                        id="auto_number"
                        placeholder="masalan:20 C 777 BB"
                      />
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div>
                      <label htmlFor="type" className="my-2">
                        Turi
                      </label>
                      <input
                        ref={drivertypeRef}
                        type="text"
                        className="form-control"
                        placeholder="masalan: Tico"
                        id="type"
                        name="type"
                      />
                    </div>
                    <div className="input_cheks">
                      <label htmlFor="status" className="mt-4">
                        Holat
                      </label>
                      <div className="d-flex gap-4">
                        <Radio.Group onChange={onChange} value={value}>
                          <Radio value={"on"}>on</Radio>
                          <Radio value={"off"}>off</Radio>
                        </Radio.Group>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer d-flex justify-content-center align-items-center">
                <button
                  onClick={() => handleCreateDriver()}
                  type="submit"
                  className="btn_modal"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade "
          id="editmodal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Tahrirlash
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form action="">
                  <div className="d-flex  justify-content-between">
                    <div>
                      <label htmlFor="driver_name" className="my-2">
                        Driver name
                      </label>
                      <input
                        defaultValue={driver?.data?.driver_full_name}
                        ref={editdrivernameRef}
                        type="text"
                        className="form-control"
                        placeholder="name"
                        id="driver_name"
                        name="driver_name"
                      />
                    </div>
                    <div>
                      <label htmlFor="date" className=" my-2">
                        D.O.B
                      </label>
                      <input
                        defaultValue={driver?.data?.driver_birthday}
                        ref={editdriverbirthdayRef}
                        type="text"
                        className="form-control 100"
                        name="date"
                        id="date"
                        placeholder="masalan:22.11.1999"
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div>
                      <label htmlFor="phone" className="my-2">
                        Telefon raqami
                      </label>
                      <input
                        defaultValue={driver?.data?.driver_phone}
                        ref={editdriverphoneRef}
                        type="text"
                        className="form-control"
                        placeholder="+998 _ _ _ _ _ _ _ _ _"
                        id="phone"
                        name="phone"
                      />
                    </div>
                    <div>
                      <label htmlFor="auto_number" className=" my-2">
                        Autoraqam
                      </label>
                      <input
                        defaultValue={driver?.data?.car_number}
                        ref={editdriverautonumberRef}
                        type="text"
                        className="form-control 100"
                        name="auto_number"
                        id="auto_number"
                        placeholder="masalan:20 C 777 BB"
                      />
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div>
                      <label htmlFor="type" className="my-2">
                        Turi
                      </label>
                      <input
                        defaultValue={driver?.data?.type}
                        ref={editdrivertypeRef}
                        type="text"
                        className="form-control"
                        placeholder="masalan: Tico"
                        id="type"
                        name="type"
                      />
                    </div>
                    <div className="input_cheks">
                      <label htmlFor="status" className="mt-4">
                        Holat
                      </label>
                      <div className="d-flex gap-4">
                        <Radio.Group onChange={onChange} value={value}>
                          <Radio value={"on"}>on</Radio>
                          <Radio value={"off"}>off</Radio>
                        </Radio.Group>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer d-flex justify-content-center align-items-center">
                <button
                  onClick={() => handleUpdateDriver()}
                  className="btn_modal"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <section className="py-4">
          <div className="container px-4">
            <div className="d-flex justify-content-center">
              <SettingsLinks />
            </div>
            <div className="d-flex justify-content-end">
              <button
                type="button"
                className="btn-add mt-3 d-flex gap-2 justify-content-center align-items-center"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Qo'shish
                <div className="added_border">
                  <i className="fa-solid fa-plus plus_icon"></i>
                </div>
              </button>
            </div>

            {loading ? (
              <h3 className="py-1">Loading...</h3>
            ) : (
              <h3 className="py-1">All drivers</h3>
            )}
            <div className="orab mt-4">
              <table className="mytable">
                <thead className="thread">
                  <tr>
                    <th className="jg text-center" scope="col">
                      ID
                    </th>
                    <th className="jg text-center" scope="col">
                      FAMILIYA ISMI
                    </th>
                    <th className="jg text-center" scope="col">
                      D.O.B
                    </th>
                    <th className="jg text-center" scope="col">
                      TELEFON RAQAM
                    </th>
                    <th className="jg text-center" scope="col">
                      AUTORAQAM
                    </th>
                    <th className="jg text-center" scope="col">
                      TURI
                    </th>
                    <th className="jg text-center" scope="col">
                      HOLAT
                    </th>
                    <th className="jg text-center" scope="col">
                      TAHRIRLASH
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.data?.map((item, index) => (
                    <tr className="tr" key={item._id}>
                      <th className="jg text-center" cope="row">
                        {index + 1}
                      </th>
                      <td className="jg text-center">
                        {item.driver_full_name}
                      </td>
                      <td className="jg text-center">{item.driver_birthday}</td>
                      <td className="jg text-center">+{item.driver_phone}</td>
                      <td className="jg text-center">{item.car_number}</td>
                      <td className="jg text-center">{item.type}</td>
                      <td className="jg text-success">
                        {item.status == true ? (
                          <div className="d-flex justify-content-center align-items-center">
                            <div className="enabled d-flex align-items-center justify-content-center">
                              enabled
                            </div>
                          </div>
                        ) : (
                          <div className="d-flex justify-content-center align-items-center ">
                            <div className="disabled text-danger justify-content-center align-items-center d-flex">
                              disabled
                            </div>
                          </div>
                        )}
                      </td>
                      <td
                        onClick={() => getOneDriver(item._id)}
                        data-bs-toggle="modal"
                        data-bs-target="#editmodal"
                        className="jg d-flex align-items-center justify-content-center py-3"
                      >
                        <div className="setting_icon_edit">
                          <i className="fa-solid fa-marker text-white"></i>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="d-flex next">
                <div className="bor">
                  <i className="fa-solid fa-angle-left"></i>
                </div>
                <div className="bor">
                  <i className="fa-solid fa-angle-right "></i>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SettingsDriver;
