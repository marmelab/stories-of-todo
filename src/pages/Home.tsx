import { NavLink } from "react-router-dom";

export const Home = () => (
  <div className="items-center justify-center h-lvh flex">
    <div>
      <h1 className="text-4xl font-bold mt-8 mb-8">Stories Of Todo</h1>
      <div className="flex flex-col gap-4">
        <NavLink className="btn btn-outline btn-lg btn-info" to="slideshow">
          Slideshow
        </NavLink>
        <NavLink
          className="btn btn-outline btn-lg btn-error"
          to="http://localhost:6006"
          target="_blank"
        >
          Storybook
        </NavLink>
        <NavLink
          className="btn btn-outline btn-lg btn-success"
          to="https://localhost"
          target="_blank"
        >
          API
        </NavLink>
        <NavLink className="btn btn-outline btn-lg btn-accent" to="todos">
          Todos
        </NavLink>
        <NavLink className="btn btn-outline btn-lg btn-warning" to="admin">
          Admin
        </NavLink>
      </div>
    </div>
  </div>
);
