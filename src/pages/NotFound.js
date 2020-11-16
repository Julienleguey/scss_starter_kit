import React from "react";
import notFound from "../images/not_found.svg";

const NotFound = () => {
  return (
    <div className="flex-1 d-flex ai-center">
      <div className="container px-3">
        <h1 className="text-center mb-4">Page Not Found</h1>
        <div className="w-100">
          <img src={notFound} alt="not found" className="w-100" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
