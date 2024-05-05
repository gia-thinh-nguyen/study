"use client";

import axios from "axios";
import React, { useState } from "react";

const Upload = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [file, setFile] = useState(null);

  const [isUploadSuccess, setIsUploadSuccess] = useState<boolean | null>(null);

  const handleFileChange = (e: any) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("uploaded_file", file);

    const requestUrl = `${apiUrl}flashcards/flashcards/`;
    console.log("requestUrl", requestUrl);

    try {
      const response = await axios.post(requestUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
        },
      });
      if (response.status === 201) {
        console.log("File uploaded successfully!");
        setIsUploadSuccess(true);
      } else {
        console.error("Failed to upload file");
        setIsUploadSuccess(false);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      setIsUploadSuccess(false);
    }
  };

  return (
    <div className="container mx-auto py-8 bg-slate-200 mt-10 px-5 rounded-md">
      <div>
        <h1 className="text-3xl font-semibold mb-4">Generate Flashcards</h1>
        <button
          onClick={() => (window.location.href = "/flashcards")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          View Generated Flashcards
        </button>
      </div>
      <input type="file" onChange={handleFileChange} />
      <button
        onClick={handleUpload}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Upload
      </button>

      {isUploadSuccess !== null && (
        <div className="mt-4">
          {isUploadSuccess ? (
            <div className="bg-slate-100 w-fit px-5 py-2 rounded-md">
              <p>File Uploaded Successfully</p>
              <p>Generating Flashcards...</p>
              {/* Button to redict to flashcards page */}
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                onClick={() => (window.location.href = "/flashcards")}
              >
                View Flashcards
              </button>
            </div>
          ) : (
            <div className="text-red-500">Failed to upload file</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Upload;
