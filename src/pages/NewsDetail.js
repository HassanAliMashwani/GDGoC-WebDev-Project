import React from "react";
import { useParams } from "react-router-dom";

function NewsDetail() {
  let { id } = useParams();

  return (
    <div>
      <h1 className="text-center text-warning">News Details</h1>
      <p className="text-center">Details of the news with ID: {id}</p>
    </div>
  );
}

export default NewsDetail;
