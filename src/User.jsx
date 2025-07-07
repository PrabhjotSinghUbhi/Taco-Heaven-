import React from "react";
import { useParams } from "react-router";

function User() {

  const {userID} = useParams()

  return (
    <div className="text-4xl p-3 bg-blue-950 text-cyan-300 text-center">
      User: {userID}
    </div>
  );
}

export default User;
