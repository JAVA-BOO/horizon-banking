import Logo from "@/assets/horizon-logo.svg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export default function Login() {
  return (
    <div className="w-full md:w-[500px]">
      <div className="container mx-auto items-center justify-center px-4">
        <img className="mb-5" src={Logo} alt="horizon-logo" />

        <h1 className="text-heading mt-10 text-[36px] font-semibold">Log in</h1>
        <p className="text-body mb-5 text-[15px]">
          Welcome back! Please enter your details
        </p>

        <form id="">
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
            Log in
          </Button>
        </form>

        <p className="text-bodylight mt-8 text-center">
          Dont have an account?{" "}
          <span>
            <Link
              className="from-main to-secondary bg-gradient-to-r bg-clip-text font-semibold text-transparent"
              to="/register"
            >
              {" "}
              Sign Up
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
}
