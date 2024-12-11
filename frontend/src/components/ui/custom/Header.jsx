import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import React from "react";
import { Button } from "../button";
import { Link } from "react-router-dom";

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="flex justify-between items-center shadow-md p-5  ">
      <img src="logo.svg" width={120} height={100} />

      <ul className=" hidden  text-gray-600  md:flex gap-16  font-mono ">
        <li className="font-md hover:scale-105 transition-all cursor-pointer hover:text-black">
          Home
        </li>
        <li className="font-md hover:scale-105 transition-all cursor-pointer hover:text-black">
          Search
        </li>
        <li className="font-md hover:scale-105 transition-all cursor-pointer hover:text-black">
          About Us
        </li>
        <li className="font-md hover:scale-105 transition-all cursor-pointer hover:text-black ">
          PreOwned
        </li>
      </ul>

      {!isSignedIn ? (
        <div className="mr-2" >
          <SignInButton mode="modal"  >
            <Button>Sign In</Button>
          </SignInButton>
        </div>
      ) : (
        <div  className="flex gap-4 font-mono "   >
          <Link to={'/profile'} >
          <Button  >Submit Listing</Button>
          </Link>
          <UserButton />
        </div>
      )}

     
    </div>
  );
}

export default Header;
