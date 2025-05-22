import React, { useState, useRef, useEffect, useMemo } from "react";
import useModal from "../../utils/context/use-modal";
import {
  CloseIcon,
  CloudUploadIcon,
  DeleteIcon,
  UploadIcon,
} from "../../assets/icons";
import { CSVImage } from "../../assets/images";

export default function CSVUploadModal() {
  const [file, setFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { setIsModalOpen, setIsCSVUploadModalOpen } = useModal();

  const fileSizeMB = useMemo(() => {
    if (file) {
      const sizeInMB = (file.size / (1024 * 1024)).toFixed(3);
      return sizeInMB;
    }
    return "0.0";
  }, [file]);

  const handleClose = () => {
    setIsModalOpen(false);
    setIsCSVUploadModalOpen(false);
  };

  const handleFile = (selectedFile: File) => {
    if (
      !selectedFile.name.endsWith(".csv") &&
      !selectedFile.name.endsWith(".xlsx")
    ) {
      alert("Please upload a .csv or .xlsx file.");
      return;
    }
    const MAX_FILE_SIZE_MB = 10;
    if (selectedFile.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      alert(`File size exceeds the limit of ${MAX_FILE_SIZE_MB}MB.`);
      return;
    }

    setFile(selectedFile);
    setUploadProgress(0);
  };

  useEffect(() => {
    if (file && uploadProgress === 0) {
      simulateUpload();
    }
  }, [file, uploadProgress]);

  const simulateUpload = () => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        console.log("Upload simulation complete!");
      }
    }, 100);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFile(e.target.files[0]);
    }
  };

  const handleDelete = () => {
    setFile(null);
    setUploadProgress(0);
    if (inputRef.current) inputRef.current.value = "";
  };

  const handleSubmit = () => {
    if (file) console.log(`File name: ${file.name}, Size: ${file.size} bytes`);
    handleClose();
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
        <div className="flex items-start gap-4">
          <div className="border border-[#EAECF0] p-5 rounded-2xl bg-white">
            <UploadIcon />
          </div>
          <div className="flex-1 flex flex-col gap-1">
            <h2 className="text-lg font-bold text-[#101828] ">
              Upload CSV File
            </h2>
            <p className="text-sm text-[#475467]">
              CSV file should contain the following columns
            </p>
            <ul className="list-disc list-inside text-sm text-[#475467] my-4">
              <li>Name</li>
              <li>Code</li>
              <li>Address</li>
              <li>Zone</li>
              <li>Area</li>
            </ul>
          </div>
          <div className="cursor-pointer" onClick={handleClose}>
            <CloseIcon />
          </div>
        </div>

        <div
          className="border-2 border-[#014DAF] rounded-xl p-5 text-center cursor-pointer hover:bg-blue-50"
          onClick={handleClick}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          <input
            ref={inputRef}
            type="file"
            accept=".csv, .xlsx"
            className="hidden"
            onChange={handleFileChange}
          />
          <div className="flex items-center justify-center">
            <CloudUploadIcon />
          </div>
          <p className="text-[#014DAF] text-sm font-semibold">
            Click to upload{" "}
            <span className="text-[#475467] text-sm font-normal">
              or drag and drop
            </span>
          </p>
          <p className="text-xs mt-2 text-[#475467]">CSV, XSLX (max. 10mb)</p>
        </div>

        {file && (
          <div className="mt-4 flex flex-col items-center gap-3 border border-[#EAECF0] p-3 rounded-md bg-gray-50">
            <div className="grid grid-cols-[10%_1fr] gap-2">
              <div className="">
                <img src={CSVImage} alt="" className="" />
              </div>
              <div className="flex items-start gap-2">
                <div>
                  <p className="text-sm font-medium text-[#344054] truncate flex-1">
                    {file.name}
                  </p>
                  <p className="text-sm text-[#475467]">{fileSizeMB} MB</p>
                </div>
                <div className="cursor-pointer" onClick={handleDelete}>
                  <DeleteIcon />
                </div>
              </div>
              <div className="">&nbsp;</div>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden border border-[#014DAF]">
                  <div
                    className="h-full rounded-full bg-[#014DAF] transition-all duration-200"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-[#344054]">
                  {uploadProgress === 100 ? "Completed" : `${uploadProgress}%`}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="mt-6 w-full flex items-center gap-4 text-base font-bold">
          <button
            onClick={handleClose}
            className="px-4 py-2 rounded-md bg-white text-[#344054] border border-gray-300 hover:bg-gray-200 w-1/2 "
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 rounded-md bg-[#014DAF] text-white hover:bg-blue-700 w-1/2 "
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
