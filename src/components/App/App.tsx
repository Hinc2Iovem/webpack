import { Outlet, Link } from "react-router-dom";
import React, { useState } from "react";
import styles from "./App.module.scss";
import avatarPng from "@/assets/avatar.png";
import avatarJng from "@/assets/avatar.jpg";
import Image from "@/assets/app-image.svg";

function TODO() {
  TODO2();
}
function TODO2() {
  throw new Error();
}

export default function App() {
  const [count, setCount] = useState(0);
  const inc = () => {
    TODO();
  };
  const dec = () => setCount((prev) => prev - 1);

  // if (__PLATFORM__ === "desktop") {
  //   return <div>ISDESKTO</div>;
  // }
  // TODO(2434);
  // if (__PLATFORM__ === "mobile") {
  //   return <div>ISMOBILE</div>;
  // }

  return (
    <div data-testid={"App"}>
      <h1 data-testid={"Platform"}>Platform={__PLATFORM__}</h1>
      <div>
        <img style={{ width: 150, height: 150 }} src={avatarPng} alt="" />
        <img style={{ width: 150, height: 150 }} src={avatarJng} alt="" />
      </div>
      <div>
        <Image color="red" width={50} height={50} />
      </div>
      <ul style={{ display: "flex", gap: 10 }}>
        <Link to="/about">Aboutt</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/">Home</Link>
      </ul>
      <br />
      <button className={styles.button} onClick={inc}>
        <span>+</span>
      </button>
      <h1 className={styles.value}>{count}</h1>
      <button onClick={dec}>
        <span>-</span>
      </button>
      <Outlet />
    </div>
  );
}
