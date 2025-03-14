import Logo from "@/assets/horizon-logo.svg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export default function Register() {
  return (
    <>
      <div className="w-full pb-10 md:w-[500px]">
        <div className="container mx-auto items-center justify-center px-4">
          <img className="mb-5" src={Logo} alt="horizon-logo" />

          <h1 className="text-heading mt-10 text-[36px] font-semibold">
            Sign Up
          </h1>
          <p className="text-body mb-5 text-[15px]">
            Please enter your details
          </p>

          <form id="">
            {/* names  */}
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="text-[15px]">
                  First Name
                </label>
                <input
                  className="focus:border-main h-11 w-full rounded-md border-2 p-1 px-3 focus:outline-0"
                  type="text"
                  name="firstName"
                  placeholder="ex: John"
                  id="firstName"
                />
              </div>{" "}
              <div>
                <label htmlFor="lastName" className="text-[15px]">
                  Last Name
                </label>
                <input
                  className="focus:border-main h-11 w-full rounded-md border-2 p-1 px-3 focus:outline-0"
                  type="text"
                  name="lastName"
                  placeholder="ex: Doe"
                  id="lastName"
                />
              </div>
            </div>
            {/* Address */}
            <div className="mb-4">
              <label htmlFor="address" className="text-[15px]">
                Address
              </label>
              <input
                className="focus:border-main h-11 w-full rounded-md border-2 p-1 px-3 focus:outline-0"
                type="text"
                name="address"
                placeholder="Enter your specific address"
                id="address"
              />
            </div>

            {/* state  */}
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="state" className="text-[15px]">
                  State
                </label>
                <input
                  className="focus:border-main h-11 w-full rounded-md border-2 p-1 px-3 focus:outline-0"
                  type="text"
                  name="state"
                  placeholder="ex: NY"
                  id="state"
                />
              </div>{" "}
              <div>
                <label htmlFor="postalCode" className="text-[15px]">
                  Postal Code
                </label>
                <input
                  className="focus:border-main h-11 w-full rounded-md border-2 p-1 px-3 focus:outline-0"
                  type="text"
                  name="postalCode"
                  placeholder="ex: 11101"
                  id="postalCode"
                />
              </div>
            </div>
            {/* date of birth */}
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="dateOfBirth" className="text-[15px]">
                  Date of Birth
                </label>
                <input
                  className="focus:border-main h-11 w-full rounded-md border-2 p-1 px-3 focus:outline-0"
                  type="date"
                  name="dateOfBirth"
                  placeholder="yyyy-mm-dd"
                  id="dateOfBirth"
                />
              </div>{" "}
              <div>
                <label htmlFor="SSN" className="text-[15px]">
                  SSN
                </label>
                <input
                  className="focus:border-main h-11 w-full rounded-md border-2 p-1 px-3 focus:outline-0"
                  type="number"
                  name="SSN"
                  placeholder="ex: 1234"
                  id="SSN"
                />
              </div>
            </div>
            {/* email */}
            <div>
              <label htmlFor="email" className="text-[15px]">
                Email
              </label>
              <input
                className="focus:border-main h-11 w-full rounded-md border-2 p-1 px-3 focus:outline-0"
                type="email"
                name="email"
                placeholder="Enter your email"
                id=""
              />
            </div>
            <div className="my-4">
              <label htmlFor="password" className="text-[15px]">
                Password
              </label>
              <input
                className="focus:border-main h-11 w-full rounded-md border-2 p-1 px-3 focus:outline-0"
                type="password"
                name="password"
                id=""
                placeholder="Enter your password"
              />
            </div>

            <Button className="from-main to-secondary my-4 h-11 w-full bg-gradient-to-r text-white">
              Sign Up
            </Button>
          </form>

          <p className="text-bodylight mt-8 text-center">
            Already have an account?{" "}
            <span>
              <Link
                className="from-main to-secondary bg-gradient-to-r bg-clip-text font-semibold text-transparent"
                to="/login"
              >
                {" "}
                Login
              </Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
