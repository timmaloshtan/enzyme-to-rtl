import React from "react";
import Collapse from "./Collapse";

const snacks = {
  title: "Favorite Snacks",
  contents: "Sunflower seeds are great"
};
const drinks = {
  title: "Favorite Drinks",
  contents: "Green tea rocks"
};

export default function App() {
  return (
    <div className="App">
      <h1>Enzyme -&gt; RTL</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Collapse items={[snacks, drinks]} />
    </div>
  );
}
