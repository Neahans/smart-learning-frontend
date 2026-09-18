import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./pages/Courses";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";
import CourseDetails from "./pages/CourseDetails";
import "./App.css";
import ModuleDetails from "./pages/ModuleDetails";
import UnlockRequests from "./pages/UnlockRequests";


function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={
          <Navigate
            to="/login"
            replace
          />
        }
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/dashboard"
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />

      <Route
        path="*"
        element={
          <Navigate
            to="/dashboard"
            replace
          />
        }
      />

      <Route
        path="/courses"
        element={
          <Layout>
            <Courses />
          </Layout>
        }
      />

      <Route
        path="/courses/:id"
        element={
          <Layout>
            <CourseDetails />
          </Layout>
        }
      />

      <Route
        path="/modules/:id"
        element={
          <Layout>
            <ModuleDetails />
          </Layout>
        }
      />


      <Route
        path="/unlock-requests"
        element={
          <Layout>
            <UnlockRequests/>
          </Layout>
        }
      />
      
    </Routes>

    
  );
}

export default App;