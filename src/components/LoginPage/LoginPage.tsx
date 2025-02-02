"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const LoginForm: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errorStatus, setErrorStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      toast.error("Oops! Please Enter Details");
      return;
    }

    try {
      const response = await fetch("/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.data === "failed") {
        toast.error("Oops! Wrong Credentials");
        setErrorStatus("Your username or password is wrong!");
      } else {
        setErrorStatus("");
        router.push("/home");
      }
    } catch (error) {
      toast.error("Oops! An error occurred");
      setErrorStatus("An error occurred. Please try again.");
    }
  };

  return (
    <div className="h-screen py-8 px-4 flex justify-center items-center dark:bg-dark_nav_color">
      <div className="w-1/3 rounded-2xl shadow-xl border dark:bg-dark_input_color dark:border-dark_input_color">
        <div className="md:p-12">
          <h4 className="text-2xl font-semibold text-center mb-6">PAKADARPANALYA</h4>
          <form onSubmit={handleOnSubmit}>
            <p className="mb-4">Please login to your account</p>

            <div className="mb-4 mt-4">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-3 py-1.5 text-base rounded-2xl border focus:outline-none focus:border-blue-600 dark:border-dark_nav_color dark:bg-dark_input_color dark:text-white"
              />
            </div>

            <div className="mb-4">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-1.5 text-base rounded-2xl border focus:outline-none focus:border-blue-600 dark:border-dark_nav_color dark:bg-dark_input_color dark:text-white"
              />
            </div>

            {errorStatus && <p className="mb-4 text-rose-700">{errorStatus}</p>}

            <button
              type="submit"
              className="w-full mb-3 px-6 py-2.5 text-white font-medium text-xs rounded-2xl shadow-md bg-black hover:bg-blue-700 transition duration-150 dark:bg-dark_button_color dark:hover:bg-dark_hover_button_color"
            >
              Log in
            </button>

            <div className="text-center mb-4">
              <a className="text-gray-500" href="#!">Forgot password?</a>
            </div>

            <div className="flex justify-between">
              <p>Don't have an account?</p>
              <button
                type="button"
                onClick={() => router.push("/signup")}
                className="px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs rounded-xl hover:bg-black hover:bg-opacity-5 transition duration-150 dark:bg-dark_input_color dark:text-white dark:border-dark_nav_color dark:hover:bg-dark_button_color"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;