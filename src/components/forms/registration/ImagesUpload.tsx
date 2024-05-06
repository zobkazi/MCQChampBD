"use client";
import { useState } from "react";
import axios from "axios";

const ImagesUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!file) {
      setErrorMessage("Please select an image file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:4007/auth/upload-img", {
        method: "POST",
        body: formData,
      });

      console.log("Upload successful:", response.status);
    } catch (error) {
      console.error("Error uploading image:", error);
      setErrorMessage("Error uploading image. Please try again.");
    }
  };

  return (
    <div className="container mx-auto px-4">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto"
        encType="multipart/form-data"
      >
        <div className="mb-4">
          <input
            type="file"
            accept=".jpg, .jpeg"
            name="file"
            id="file"
            onChange={handleFileChange}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Upload
          </button>
        </div>
        {errorMessage && (
          <p className="text-red-500 mt-2 text-sm">{errorMessage}</p>
        )}
      </form>
    </div>
  );
};

export default ImagesUpload;
