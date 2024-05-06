import ImagesUpload from "@/components/forms/registration/ImagesUpload";
import React from "react";

function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline m-0 after:text-3xl">
        Welcome to Job Board
      </h1>
      <ImagesUpload />
    </div>
  );
}

export default Home;
