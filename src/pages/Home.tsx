import { NavLink } from "react-router-dom";

export const Home = () => (
  <div className="container mx-auto items-center text-center">
    <h1 className="text-3xl font-bold text-center mt-8 mb-8">
      Stories Of Todo
    </h1>
    <div className="flex flex-col gap-4">
      <NavLink className="btn btn-outline btn-lg btn-accent" to="todos">
        Todos
      </NavLink>
      <NavLink className="btn btn-outline btn-lg btn-info" to="slideshow">
        Slideshow
      </NavLink>
      <NavLink className="btn btn-outline btn-lg btn-warning" to="admin">
        Admin
      </NavLink>
    </div>
  </div>
);
