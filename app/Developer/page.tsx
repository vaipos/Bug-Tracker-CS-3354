import React from "react";
import Navbar from "../DeveloperHomePageComps/NavbarDev";
import ProjectsSect from "../DeveloperHomePageComps/ProjectSectDev";
import { Footer } from "../Footer";

const Developer = () => {
  return (
    <>
    <div className="bg-slate-950">
    <Navbar />
      <div className="justify-start  my-20">
        <div className="mockup-code mx-48 ml-14 my-10 mr-96 animate-fade-right">
          <pre data-prefix="$">
            <code className="text-3xl">Welcome</code>
          </pre>
          <pre data-prefix=">" className="text-warning">
            <code>Here are your assigned tasks below: </code>
          </pre>
          <pre data-prefix="$">
            <code>Click on issue to view details</code>
          </pre>
          <pre data-prefix=">" className="text-warning">

          <code>If you would like to let your Tester know that you have taken on the issue UPDATE the STATUS.</code>
          </pre>
         
          <pre data-prefix=">" className="text-success">
            <code>Done!</code>
          </pre>
        </div>
      </div>

      <ProjectsSect />
      <div className="py-16"></div>
    </div>

      <Footer />
    </>
  );
};

export default Developer;
