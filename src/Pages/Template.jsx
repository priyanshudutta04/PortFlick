import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Components/Footer";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Template() {
  const navigate = useNavigate();

  const goCustom = () => {
    navigate("/dashboard/template/custom");
  };

  return (
    <div className="flex flex-col gap-12 items-center justify-center bg-[#080808]">
      <div className="h-auto lg:h-screen bg-cover mt-12 mb-6 lg:mb-12 bg-center grid grid-cols-1 lg:grid-cols-2 gap-6 items-center justify-center text-center p-4 rounded-md w-full lg:w-[100%]">
        {/* Template 1 */}
        <Link to="/dashboard/template/prof" className="col-span-1 z-10">
          <div className="bg-white shadow-lg hover:shadow-2xl hover:scale-105 rounded-xl overflow-hidden transition duration-300 h-[350px] w-[80%] mx-auto flex flex-col">
            <div className="relative w-full h-[60%]">
              <img
                src="https://media.istockphoto.com/id/1440187828/vector/a-man-sending-an-email-with-a-smile.jpg?s=612x612&w=0&k=20&c=jQodZlwEkGzgNoEAMGkKn-F0G5mJnWIOpTmkfyFmSvA="
                alt="Template 1"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div>
            </div>
            <div className="p-6 flex flex-col justify-between flex-grow">
              <h2 className="text-xl md:text-2xl font-semibold text-primary">
                Professional Email Template
              </h2>
              <p className="text-gray-500 text-sm md:text-sm">
                Write a professional email template to your boss or colleagues
                to make your communication clear and efficient.
              </p>
            </div>
          </div>
        </Link>

        {/* Template 2 */}
        <Link to="/dashboard/template/personal" className="col-span-1 z-10">
          <div className="bg-white shadow-lg hover:shadow-2xl hover:scale-105 rounded-xl overflow-hidden transition duration-300 h-[350px] w-[80%] mx-auto flex flex-col">
            <div className="relative w-full h-[60%]">
              <img
                src="https://media.istockphoto.com/id/1160905368/vector/smiling-woman-sitting-at-computer-writing-messages-and-icons-envelopes-floating-in-speech.jpg?s=612x612&w=0&k=20&c=E0Ca2WGMA8we-fWsZH3Slzovoq5x3EjvQEgysOdKt6U="
                alt="Template 2"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div>
            </div>
            <div className="p-6 flex flex-col justify-between flex-grow">
              <h2 className="text-xl md:text-2xl font-semibold text-primary">
                Personal Email Template
              </h2>
              <p className="text-gray-500 text-sm md:text-sm">
                Write a thoughtful and concise personal email to nurture
                connections and convey your message clearly.
              </p>
            </div>
          </div>
        </Link>

        {/* Template 3 */}
        <Link to="/dashboard/template/mark" className="col-span-1 z-10">
          <div className="bg-white shadow-lg hover:shadow-2xl hover:scale-105 rounded-xl overflow-hidden transition duration-300 h-[350px] w-[80%] mx-auto flex flex-col">
            <div className="relative w-full h-[60%]">
              <img
                src="https://img.freepik.com/free-vector/businessman-with-e-mail-marketing-icons_24877-51328.jpg"
                alt="Template 3"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div>
            </div>
            <div className="p-6 flex flex-col justify-between flex-grow">
              <h2 className="text-xl md:text-2xl font-semibold text-primary">
                Marketing Email Template
              </h2>
              <p className="text-gray-500 text-sm md:text-sm">
                Write a compelling and targeted marketing email to grab
                attention and encourage customer engagement.
              </p>
            </div>
          </div>
        </Link>

        {/* Template 4 */}
        <Link to="/dashboard/template/followup" className="col-span-1 z-10">
          <div className="bg-white shadow-xl hover:shadow-2xl hover:scale-105 rounded-xl overflow-hidden transition duration-300 h-[350px] w-[80%] mx-auto flex flex-col">
            <div className="relative w-full h-[60%]">
              <img
                src="https://img.freepik.com/free-vector/woman-receiving-mail-reading-letter_74855-5964.jpg"
                alt="Template 4"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div>
            </div>
            <div className="p-6 flex flex-col justify-between flex-grow">
              <h2 className="text-xl md:text-2xl font-semibold text-primary">
                Follow-Up Email Template
              </h2>
              <p className="text-gray-500 text-sm md:text-sm">
                Write a polite and professional follow-up email to prompt
                responses and keep projects moving forward
              </p>
            </div>
          </div>
        </Link>
      </div>

      {/* Custom Button */}
      <div className="w-full lg:w-[88%] flex justify-center mt-8 lg:mt-0 z-10">
        <button
          className="w-[90%] lg:w-full py-4 bg-purple-500 text-white font-semibold rounded-xl shadow hover:bg-purple-700 focus:outline-none"
          onClick={goCustom}
        >
          Create your custom site
        </button>
      </div>

      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Canvas>
          <Stars radius={100} count={1000} factor={4} fade speed={3} />
        </Canvas>
      </div>

      <Footer />
    </div>
  );
}
