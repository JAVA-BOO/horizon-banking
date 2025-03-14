import Logo from "@/assets/horizon-logo.svg";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

export default function Homepage() {
  const navigate = useNavigate();
  return (
    <section className="h-screen bg-zinc-100">
      <div className="container flex justify-center h-full items-center mx-auto px-4">
        <div className="flex flex-col items-center max-w-2xl">
          <img className="w-[200px] mb-4" src={Logo} alt="Horizon-Logo" />
          <div>
            <h1 className=" text-center text-transparent bg-gradient-to-b bg-clip-text from-main to-secondary text-4xl font-bold">
              Welcome to Horizon Banking Platform
            </h1>
            <p className=" text-center text-body leading-normal mt-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae accusantium distinctio officiis ratione eum ea ipsum
              quidem, iusto illo optio corrupti ad eaque sunt doloremque
              voluptatem deleniti. Eos, hic unde?
            </p>
            <div className=" mt-6 flex justify-center items-center gap-3">
              <Button
                onClick={() => navigate("/login")}
                className=""
                variant={"outline"}
              >
                Login
              </Button>
              <Button onClick={() => navigate("/register")} className="">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
