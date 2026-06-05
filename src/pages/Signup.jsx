import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

export default function SignupForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .matches(/^[A-Za-z]+$/, "Name should contain only letters")
        .min(3, "Name must be at least 3 characters")
        .required("Name is required"),

      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),

      password: Yup.string()
        .matches(
          /^(?=.*[A-Z])(?=.*\d)/,
          "Must contain 1 uppercase and 1 number",
        )
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),

    onSubmit: async (values, { resetForm }) => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/auth/signup",
          values,
        );

        console.log("Server Response:", res.data);

        alert("User registered successfully!");

        resetForm();
      } catch (error) {
        console.log("FULL ERROR:", error);

        const message = error.response?.data?.message || "Something went wrong";

        alert(message);
      }
    },
  });

  const inputClass =
    "w-full px-4 py-2 border border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-gray-500 focus:border-gray-500 outline-none transition text-gray-900 caret-gray-900";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      {/* OUTER BORDER WRAPPER */}
      <div className="w-full max-w-md p-0.5 rounded-2xl bg-linear-to-r from-gray-800 via-gray-500 to-gray-800 shadow-xl">
        {/* INNER CARD */}
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white p-8 rounded-2xl"
        >
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Create Account
          </h2>

          {/* Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className={inputClass}
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={inputClass}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className={inputClass}
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.password}
              </p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-black hover:scale-[1.02] transition duration-200"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
