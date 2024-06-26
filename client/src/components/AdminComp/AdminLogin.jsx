import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "./AdminLoginStyles.css";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../../redux/admin/adminSlice";
import { useDispatch, useSelector } from "react-redux";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

export default function AdminLogin() {
  const [formData, setformData] = useState({});
  const { loading, error } = useSelector((state) => state.admin);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setformData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("http://localhost:3000/admin/authadmin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/admin/dashboard");
    } catch (error) {
      dispatch(signInFailure(error));
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1300,
      easing: "ease-in-out-back",
    });
  }, []);
  return (
    <div className="adminlogin-main-sec">
      <div>
        <h1 className="adminlogin-self-heading" data-aos="fade-right">
          PharmaEnclave
        </h1>
        <p className="adminlogin-self-para" data-aos="fade-left">
          Admin Authentication
        </p>
      </div>

      <form onSubmit={handleSubmit} className="form-self">
        <label className="email-label-self" data-aos="slide-right">
          Email
        </label>
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="signin-email-pacleholder"
          onChange={handleChange}
          data-aos="slide-left"
        />
        <label className="password-label-self" data-aos="slide-right">
          Password
        </label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="signin-password-placeholder"
          onChange={handleChange}
          data-aos="slide-left"
        />
        <Button
          variant="secondary"
          disabled={loading}
          className="button-self"
          type="submit"
          data-aos="slide-up"
        >
          {loading ? "Loading..." : "Sign In"}
        </Button>
      </form>
      <p className="adminlogin-error-handler">
        {error ? error.message || "Somthing went wrong" : ""}
      </p>
    </div>
  );
}
