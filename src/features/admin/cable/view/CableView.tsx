import AdminNavbar from "@features/admin/components/AdminNavbar";
import React from "react";
import { CableContent } from "../components/CableContent";

export const CableView: React.FC = () => {
  return (
    <>
      <AdminNavbar page="Data Kabel" />
      <div className="page-content">
        <CableContent />
      </div>
    </>
  );
};
