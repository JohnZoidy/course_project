import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
  console.log(routeConfig);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routeConfig).map((page) => (
          <Route
            key={page.path}
            path={page.path}
            element={<div className="page-wrapper">{page.element}</div>}
          />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
