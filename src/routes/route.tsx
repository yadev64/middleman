import { MainLayout } from "@/layouts/mainLayout";
import { HomePage } from "@/pages/homePage";
import { Pnp } from "@/pages/pnp";
import { TestPage } from "@/pages/testPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export function RouteManager() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<TestPage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="*" element={<Pnp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
