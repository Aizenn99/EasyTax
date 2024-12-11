import React from "react";
import Header from "./components/ui/custom/Header";
import { Button } from "./components/ui/button";
import { Link } from "react-router-dom";
import AddListing from "./Add-listing";

function Profile() {
  return (
    <div>
      <Header />
      <div className="px-10 md:px-20 my-10 ">
        <div className="flex justify-between items-center" >
          <h2 className="font-bond text-4xl font-mono">My Listing</h2>
           <Link to={'/Add-listing'} >
          <Button>+ Add New Listing</Button></Link>
        </div>
      </div>
    </div>
  );
}

export default Profile;
