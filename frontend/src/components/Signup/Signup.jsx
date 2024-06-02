import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [avatar, setAvatar] = useState(null);

  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-10 lg:px-2">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-gray-50 py-8 px-4 shadow-md sm:rounded-lg sm:px-10">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <div className="flex justify-center items-center nike-unite-swoosh">
              <img
                src="https://i.imgur.com/4mZ3iem.png"
                alt="logo"
                className="w-30 h-10 "
              />
            </div>
            <h2 className="font-oswald mt-5 text-center text-2xl font-bold text-gray-700">
              CREATE YOUR ACCOUNT FOR <br /> GRAPHIC TSHIRT&apos;S
            </h2>
          </div>
          <form className="font-roboto space-y-6 mt-6">
            {/* onSubmit={handleSubmit} */}
            <div>
              <div className="">
                <input
                  placeholder="Full Name"
                  type="name"
                  name="name"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="appearance-none block px-3 border border-gray-300 rounded-md shadow-sm text-sm text-gray-400 w-full py-4 mt-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <div className="">
                <input
                  placeholder="Address"
                  type="address"
                  name="address"
                  autoComplete="address"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="appearance-none block px-3 border border-gray-300 rounded-md shadow-sm text-sm text-gray-400 w-full py-4 mt-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <div className="">
                <input
                  placeholder="Email address"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block px-3 border border-gray-300 rounded-md shadow-sm text-sm text-gray-400 w-full py-4 mt-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 sm:text-sm"
                />
              </div>
            </div>
            <div className="mt-1 relative">
              <input
                placeholder="Password"
                type={visible ? "text" : "password"}
                name="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none block px-3 border border-gray-300 rounded-md shadow-sm text-sm text-gray-400 w-full py-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 sm:text-sm"
              />
              {visible ? (
                <AiOutlineEye
                  className="absolute right-4 top-4 cursor-pointer"
                  size={20}
                  onClick={() => setVisible(false)}
                />
              ) : (
                <AiOutlineEyeInvisible
                  className="absolute right-4 top-4 cursor-pointer"
                  size={20}
                  onClick={() => setVisible(true)}
                />
              )}
            </div>

            <div>
              <label
                htmlFor="avatar"
                className="block text-sm font-medium text-gray-700"
              ></label>
              <div className="mt-2 flex items-center">
                <label
                  htmlFor="file-input"
                  className="flex items-center justify-center px-2 py-2 border border-gray-300 shadow-sm text-sm font-medium text-gray-500 rounded-md bg-white hover:bg-gray-50"
                >
                  <span className="inline-block h-8 w-8 rounded-full overflow-hidden mr-2">
                    {avatar ? (
                      <img
                        src={avatar}
                        alt="avatar"
                        className="h-full w-full object-cover rounded-full"
                      />
                    ) : (
                      <CgProfile className="h-8 w-8" />
                    )}
                  </span>
                  <span>Upload Profile Photo</span>
                  <input
                    type="file"
                    name="avatar"
                    id="file-input"
                    accept=".jpg,.jpeg,.png"
                    className="sr-only"
                  />
                </label>
              </div>
            </div>

            <div>
              <div>
                <h2 className="font-oswald text-[14px] text-center text-black pb-3 pt-0 mt-8">
                  By signing up, you agree to Shirt&apos;s{" "}
                  <span className="underline cursor-pointer">
                    Privacy Policy
                  </span>{" "}
                  and{" "}
                  <span className="underline cursor-pointer">Terms of Use</span>
                  .
                </h2>
              </div>

              <button
                type="submit"
                className="font-oswald group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent rounded-md text-white bg-black font-semibold text-base hover:bg-gray-950"
              >
                SIGN UP
              </button>
              <div className="flex font-oswald mt-2">
                <h4 className="text-gray-700 hover:no-underline">
                  Already a Member?
                </h4>
                <Link
                  to="/login"
                  className="text-gray-700 pl-2 underline hover:no-underline"
                >
                  Login.
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
