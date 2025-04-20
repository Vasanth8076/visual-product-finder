import React from "react";
import AppRoutes from "./app/providers/router/AppRoutes.tsx";
import { TopBar } from "./widgets/Topbar/Topbar.tsx";

function App() {
  return (
    <>
      {/* <TopBar /> */}
      <AppRoutes />
    </>
  );
}

export default App;
