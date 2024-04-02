"use client";

import { User } from "@prisma/client";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useState } from "react";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/hooks/useRegisterModel";
import useLoginModal from "@/hooks/useLoginModal";
import { signOut } from "next-auth/react";

interface UserMenuProps {
  currentUser?: User | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-natural-100 transition cursor-pointer">
          Airbnb your home
        </div>
        <div
          className="p-4 md:py-1 m:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
          onClick={handleToggle}
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[48px] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem onClick={() => {}} label="My trips" />
                <MenuItem onClick={() => {}} label="My favorites" />
                <MenuItem onClick={() => {}} label="My properties" />
                <MenuItem onClick={() => {}} label="Airbnb my home" />
                <hr />
                <MenuItem onClick={() => signOut()} label="Logout" />
              </>
            ) : (
              <>
                <MenuItem onClick={loginModal.onOpen} label="login" />
                <MenuItem onClick={registerModal.onOpen} label="signup" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
