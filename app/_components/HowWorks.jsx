import { Button } from "@/components/ui/button";
import React from "react";

const HowWorks = () => {
  return (
    <section className="">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            How do I connect with an online psychiatrist ?
          </h2>

          <p className="mt-4 ">
            Our virtual clinic is designed to provide you with secure, trusted
            and easy access to the advice and care you need when you need it.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-4 hover:bg-[#0da6ff] hover:scale-105 rounded-md px-8 py-6  group cursor-pointer shadow-how transition ease-in-out">
            <h2 className="text-3xl mt-5 font-bold text-primary group-hover:text-white">
              Register
            </h2>

            <p className="text-md group-hover:text-gray-100">
              Book an appointment to visit a general doctor who if necessary,
              can provide you with a referral to see the psychiatrist. You can
              select which doctor you would like to see and whether you prefer a
              phone or video call. We have a variety of male and female doctors
              available to help you in a number of languages.
            </p>
            <div className="w-[40px] h-[40px] rounded-full bg-[#82bcff] relative z-40 ">
              <p className="absolute bottom-[-3px] right-[-3px] text-xl text-primary font-bold group-hover:text-white">
                01
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 hover:bg-[#0da6ff] hover:scale-105 rounded-md px-8 py-6  group cursor-pointer shadow-how transition ease-in-out">
            <h2 className="text-3xl mt-5 font-bold text-primary group-hover:text-white">
              Schedule Appointment
            </h2>

            <p className="text-md group-hover:text-gray-100">
              Book an appointment to visit a general doctor who if necessary,
              can provide you with a referral to see the psychiatrist. You can
              select which doctor you would like to see and whether you prefer a
              phone or video call. We have a variety of male and female doctors
              available to help you in a number of languages.
            </p>
            <div className="w-[40px] h-[40px] rounded-full bg-[#82bcff] relative z-40 ">
              <p className="absolute bottom-[-3px] right-[-3px] text-xl text-primary font-bold group-hover:text-white">
                02
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 hover:bg-[#0da6ff] hover:scale-105 rounded-md px-8 py-6  group cursor-pointer shadow-how transition ease-in-out">
            <h2 className="text-3xl mt-5 font-bold text-primary group-hover:text-white">
              Meet your doctor
            </h2>

            <p className="text-md group-hover:text-gray-100">
              Book an appointment to visit a general doctor who if necessary,
              can provide you with a referral to see the psychiatrist. You can
              select which doctor you would like to see and whether you prefer a
              phone or video call. We have a variety of male and female doctors
              available to help you in a number of languages.
            </p>
            <div className="w-[40px] h-[40px] rounded-full bg-[#82bcff] relative z-40 ">
              <p className="absolute bottom-[-3px] right-[-3px] text-xl text-primary font-bold group-hover:text-white">
                03
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button>Get Started</Button>
        </div>
      </div>
    </section>
  );
};

export default HowWorks;
