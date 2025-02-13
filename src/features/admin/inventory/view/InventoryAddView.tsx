import React from "react";
import AdminNavbar from "@features/admin/components/AdminNavbar";
import { InventoryFormAdd } from "../components/InventoryFormAdd";

const InventoryAddView: React.FC = () => {
  return (
    <>
      <AdminNavbar page="Tambah Inventaris" />
      <div className="page-content">
        <InventoryFormAdd />
      </div>
    </>
  );
};

export default InventoryAddView;
