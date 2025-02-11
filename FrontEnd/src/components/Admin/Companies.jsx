import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import CompaniesTable from "./CompaniesTable";
import { useNavigate } from "react-router-dom";

const Companies = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="max-w-6xl mx-auto my-10">
        <div className="flex gap-3 items-center justify-between my-8">
          <Input className="w-fit" placeholder="filter by name" />
          <Button onClick={() => navigate('/admin/companies/register')}>New Company</Button>
        </div>
        <CompaniesTable />
      </div>
    </div>
  );
};

export default Companies;
