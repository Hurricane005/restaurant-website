import React from "react";

const Modal = ({ showModal, closeModal, children }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
      <div className="flex flex-col items-center justify-center w-11/12 p-8 mx-auto bg-white shadow-lg rounded-xl md:max-w-md">
        {children}
      </div>
    </div>
  );
};

export default Modal;
