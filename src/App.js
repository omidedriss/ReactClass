import React, { Suspense } from "react";
import "./App.css";
import Toolbar from "./Component/header/Toolbar";
import { BrowserRouter, Route, Switch, Routes } from "react-router-dom";
import HomePage from "../src/Page/Homepage";
import EditStudent from "../src/Page/EditStudent";
import AddStudent from "../src/Page/AddStudent";
import Invoices from "./Component/invoices";
import Invoice from "./Component/invoice";
//nested router to router and add Outlet and import {Link,Outlet} from "react-router-dom";

// const AddStudent = React.lazy(() => import("../src/Page/AddStudent"));

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Toolbar />
        <div style={{ marginTop: "70px" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route
              path="/add-student"
              render={() => (
                <Suspense fallback={<p>...loading</p>}>
                  <AddStudent />
                </Suspense>
              )}
            /> */}
            <Route path="/add-student" element={<AddStudent />} />
            {/* <Route path="/student/:studentid" component={EditStudent} /> */}
            <Route path="/student/:studentid" element={<EditStudent />} />
            <Route path="/student/:studentid" element={<EditStudent />} />
            <Route path="invoices" element={<Invoices />}>
              <Route
                index
                element={
                  <main style={{ padding: "1rem" }}>
                    <p>Select an invoice</p>
                  </main>
                }
              />
              <Route path=":invoicId" element={<Invoice />} />
            </Route>
            {/* <Route render={() => <h1>not Found</h1>} /> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
