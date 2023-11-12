import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "components/navbar";
import Sidebar from "components/sidebar/user-sidebar";
import Footer from "components/footer/Footer";
import SidebarRoutes from "components/sidebar/user-sidebar-routes";
import routes from "app-routes.js";
import Auth from "layouts/auth";
import jwt from "jwt-decode";

export default function User(props) {
  const { ...rest } = props;
  const location = useLocation();
  const [open, setOpen] = React.useState(true);
  const [currentRoute, setCurrentRoute] = React.useState("Main Dashboard");
  const userLogin = jwt(window.localStorage.getItem("token"));
  console.log(userLogin.roles)

  React.useEffect(() => {
    window.addEventListener("resize", () =>
      window.innerWidth < 1200 ? setOpen(false) : setOpen(true)
    );
  }, []);
  React.useEffect(() => {
    getActiveRoute(SidebarRoutes);
  }, [location.pathname]);

  const getActiveRoute = (SidebarRoutes) => {
    let activeRoute = "Main Dashboard";
    for (let i = 0; i < SidebarRoutes.length; i++) {
      if (
        window.location.href.indexOf(
          SidebarRoutes[i].layout + "/" + SidebarRoutes[i].path
        ) !== -1
      ) {
        setCurrentRoute(SidebarRoutes[i].name);
      }
    }
    return activeRoute;
  };
  const getActiveNavbar = (SidebarRoutes) => {
    let activeNavbar = false;
    for (let i = 0; i < SidebarRoutes.length; i++) {
      if (
        window.location.href.indexOf(SidebarRoutes[i].layout + SidebarRoutes[i].path) !== -1
      ) {
        return SidebarRoutes[i].secondary;
      }
    }
    return activeNavbar;
  };
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/user") {
        return (
          <Route path={`/${prop.path}`} element={prop.component} key={key} />
        );
      } else {
        return null;
      }
    });
  };

  document.documentElement.dir = "ltr";
  if(userLogin.roles === "User")
    return (
      <div className="flex h-full w-full">
        <Sidebar open={open} onClose={() => setOpen(false)} />
        <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900">
          <main className={`mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]`}>
            <div className="h-full">
              
              <Navbar
                onOpenSidenav={() => setOpen(true)}
                logoText={"Horizon UI Tailwind React"}
                brandText={currentRoute}
                secondary={getActiveNavbar(SidebarRoutes)}
                {...rest}
              />

              <div className="pt-5s mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2">
                <Routes>
                  {getRoutes(routes)}
                  <Route path="/" element={<Navigate to="/user/home" replace />}/>
                </Routes>
              </div>

              <div className="p-3">
                <Footer />
              </div>

            </div>
          </main>
        </div>
      </div>
    );
  else return (
    <Auth />
  );
}