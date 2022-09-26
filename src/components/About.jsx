import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-green to-black text-black"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        I have the ability to work with Microsoft technology like C# , ASP.NET CORE MCV ,Entity Framework,Microsoft Sql Server.
And front -end technology
like React js , React Nativ ,Html ,css ,tailwind.

        </p>

        <br />

        <p className="text-xl">
        Proficitent with developing various web services like ASP.NET CORE API’s using Rest architecture.
        </p>
      </div>
    </div>
  );
};

export default About;
