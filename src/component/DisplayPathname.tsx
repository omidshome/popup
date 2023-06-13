import { useState, useEffect } from "react";

import style from "./DisplayPathname.module.css";

export default function DisplayPathname() {
  const [path, setpath] = useState<string>("");

  useEffect(() => {
    const pathFinder = () => {
      setpath(window.location.pathname);
    };
    pathFinder();
  }, [window.location.pathname]);

  return (
    <div className={style.container}>
      <h2>:آدرس </h2>
      <h2>{path}</h2>
    </div>
  );
}
