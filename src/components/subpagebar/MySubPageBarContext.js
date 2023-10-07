import React, { useState, createContext, useContext } from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import SubPageBar from "./SubPageBar";

const SubPageBarContext = createContext({});

export const MySubPageSidebarProvider = ({ children, subPages }) => {
  const [sidebarRTL, setSidebarRTL] = useState(false);
  const [sidebarBackgroundColor, setSidebarBackgroundColor] =
    useState(undefined);
  const [sidebarImage, setSidebarImage] = useState(undefined);
  return (
    <ProSidebarProvider>
      <SubPageBarContext.Provider
        value={{
          sidebarBackgroundColor,
          setSidebarBackgroundColor,

          sidebarImage,
          setSidebarImage,

          sidebarRTL,
          setSidebarRTL,
        }}
      >
        <div>
          <SubPageBar subPages={subPages}/>
          {children}
        </div>
      </SubPageBarContext.Provider>
    </ProSidebarProvider>
  );
};

export const useSubPageBarContext = () => useContext(SubPageBarContext);
