import { Suspense } from "react";
import Scene from "./components/Scene";
import "./App.css";
import Label from "./components/Label";

const App = () => {
  return (
    <>
      <div id={"bg_container"} className={"container"}>
        <div className={"wrapper"}>
          <Label />
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default App;
