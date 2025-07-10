import AppBar from "../AppBar/AppBar.jsx";
import css from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={css.container}>
      <AppBar />
      {children}
    </div>
  );
}
