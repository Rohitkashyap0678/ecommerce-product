import React from "react";
import HomePage from "./HomePage";

const Account = ({ openDashboardPage }) => {
  const saveAdminPanelTypeInLocalstorage = (panelType) => {
    localStorage.setItem("panelType", panelType);
    openDashboardPage();
  };
  return (
    <div>
      <HomePage
        saveAdminPanelTypeInLocalstorage={saveAdminPanelTypeInLocalstorage}
        openDashboardPage={openDashboardPage}
      />
    </div>
  );
};

export default Account;
