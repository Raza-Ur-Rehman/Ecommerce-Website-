import React from "react";
import Index from "./Router/Index";
import { Route, Routes } from "react-router";


const App = () => {
  const routes = Index();
  return (
    <div>
      <Routes>
        {routes.map(({ path, element }, key) => (
          <Route key={key} path={path} element={element} />
        ))}
      </Routes>
    </div>
  )
}

export default App
