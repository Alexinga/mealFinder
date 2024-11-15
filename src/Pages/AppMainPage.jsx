import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export default function AppMainPage() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h2 style={{ backgroundColor: "red" }}>App Page Navbar</h2>
          </div>
          <div className="col-8">
            <Link to="/app">Home</Link>
            <Link to="/app/search">Search</Link>
            {/* <Link to="/app/details">Details</Link> */}
            <Link to="/app/save">Save</Link>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}
