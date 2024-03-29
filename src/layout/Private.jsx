import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Home from "../pages/Home/Home";
import Takliflar from "../pages/Takliflar/Takliflar";
import Mijozlar from "../pages/Clients/Mijozlar";
import MijozlarById from "../pages/Clients/MijozlarById";
import MijozInfo from "../pages/Clients/MijozInfo";
import Payment from "../pages/Settings/Payment";
import SettingChange from "../pages/Settings/SettingChange";
import SettingsUsers from "../pages/Settings/SettingsUsers";
import SettingsDriver from "../pages/Settings/SettingsDriver";
import { Category } from "../pages/Category";
import { FastFood } from "../pages/FastFood";
import { SinglePage } from "../pages/SinglePage";
import { Food } from "../pages/Food";
import { NotFound } from "../pages/NotFound";

const Private = () => {
  const token = localStorage.getItem("token");

  return <><Routes>
  <Route path="/" element={<Home />} />
  <Route path="/takliflar" element={<Takliflar />} />
  <Route path="/mijozlar" element={<Mijozlar />} />
  <Route path="/mijozlar/:id" element={<MijozlarById />} />
  <Route path="/mijozlar/info/:id" element={<MijozInfo />} />
  <Route path="/settings/payment" element={<Payment />} />
  <Route path="/settings/change" element={<SettingChange />} />
  <Route path="/settings/users" element={<SettingsUsers />} />
  <Route path="/settings/drivers" element={<SettingsDriver />} />
  <Route path="/category" element={<Category />} />
  <Route path="/category/:id" element={<FastFood />} />
  <Route path="/category/:id/:id" element={<SinglePage />} />
  <Route path="/category/:id/:id/:id" element={<Food />} />
  <Route path="*" element={<NotFound />} />
</Routes></>
};

export default Private;
