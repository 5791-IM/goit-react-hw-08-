import { useDispatch, useSelector } from "react-redux";

import { lazy, Suspense, useEffect } from "react";
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from "../../redux/auth/selectors.js";
import { refreshUser } from "../../redux/auth/operations.js";

import Layout from "../Layout/Layout.jsx";
import { Route, Routes } from "react-router-dom";
import RestrictedRoute from "../RestrictedRoute.jsx";
import PrivateRoute from "../PrivateRoute.jsx";
import { fetchContacts } from "../../redux/contacts/operations.js";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
const RegistrationPage = lazy(() => import("../../pages/RegistrationPage.jsx"));
const LoginPage = lazy(() => import("../../pages/LoginPage.jsx"));
const ContactsPage = lazy(() => import("../../pages/ContactsPage.jsx"));

export default function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    if (!isRefreshing && isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn, isRefreshing]);

  return isRefreshing ? (
    <div>Refreshing user...</div>
  ) : (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<RegistrationPage />}
                redirectTo="/"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                component={<LoginPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
            }
          />
        </Routes>
      </Suspense>
    </Layout>
  );
}
