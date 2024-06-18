import Link from 'next/link';
import Logout from "@/components/logout";
import AuthContext from "@/components/authContext";
import { useContext } from "react";

export default function NavBar() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    isAuthenticated ? (
      <nav className="nav navbar navbar-expand navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="navbar-nav mr-auto">
            <Link href="/" passHref>
              <a className="navbar-brand px-3">
                <span className="navbar-text">React CRUD</span>
              </a>
            </Link>
            <li className="nav-item">
              <Link href="/registrar" passHref>
                <a className="nav-link">Registrar</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/listar" passHref>
                <a className="nav-link">Listar</a>
              </Link>
            </li>
          </div>
          <div className="navbar-nav ml-auto px-3">
            <li className="nav-item">
              <Logout />
            </li>
          </div>
        </div>
      </nav>
    ) : null
  );
}
