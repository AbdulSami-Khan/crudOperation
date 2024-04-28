import { EmployeeForm } from "@/components/EmployeeForm";
import { FormWrapper } from "@/components/FormWrapper";
import React from "react";

const EmployeeCreatePage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <FormWrapper title="Creating New Employee">
        <EmployeeForm/>
      </FormWrapper>
    </div>
  );
};

export default EmployeeCreatePage;
