import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { handleError } from "@/utils/handleError";
import { useLogoutMutation } from "@/redux/slices/api";
import { updateCurrentUser, updateIsLoggedIn } from "@/redux/slices/appSlice";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { updateIsOwner } from "@/redux/slices/compilerSlice";
import { useState } from "react";

export default function Header() {
  const [logout, { isLoading }] = useLogoutMutation();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(
    (state: RootState) => state.appSlice.isLoggedIn
  );
  const currentUser = useSelector(
    (state: RootState) => state.appSlice.currentUser
  );

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  async function handleLogout() {
    try {
      await logout().unwrap();
      dispatch(updateIsLoggedIn(false));
      dispatch(updateCurrentUser({}));
      dispatch(updateIsOwner(false));
    } catch (error) {
      handleError(error);
    }
  }

  return (
    <nav className="w-full h-[70px] p-3 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-opacity-50 backdrop-blur-md shadow-lg flex justify-between items-center text-white rounded-lg">
      {/* Logo */}
      <Link to="/" className="font-bold text-xl tracking-wider select-none">
        Code.Compiler
      </Link>

      {/* Navigation Items */}
      <div className="md:hidden">
        <button className="text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </button>
      </div>
      <ul
        className={`md:flex items-center gap-6 ${
          isMenuOpen ? "block" : "hidden"
        } absolute md:static top-[70px] md:top-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-opacity-50 backdrop-blur-md w-full md:w-auto rounded-lg shadow-md md:shadow-none`}
      >
        <li>
          <Link to="/">
            <Button variant="link">Home</Button>
          </Link>
        </li>
        <li>
          <Link to="/features">
            <Button variant="link">Features</Button>
          </Link>
        </li>
        <li>
          <Link to="/compiler">
            <Button variant="link">Editor | Compiler</Button>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <Button variant="link">About Us</Button>
          </Link>
        </li>
        {isLoggedIn ? (
          <>
            <li>
              <Link to="/all-codes">
                <Button variant="blue">All Codes</Button>
              </Link>
            </li>
            <li>
              <Button
                loading={isLoading}
                onClick={handleLogout}
                variant="destructive"
              >
                Logout
              </Button>
            </li>
            <li>
              <Avatar>
                <AvatarImage
                  className="h-[40px] w-[40px] rounded-full"
                  src={currentUser.picture || "https://github.com/shadcn.png"}
                />
                <AvatarFallback className="capitalize">
                  {currentUser.username?.slice(0, 2)}
                </AvatarFallback>
              </Avatar>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">
                <Button variant="blue">Login</Button>
              </Link>
            </li>
            <li>
              <Link to="/signup">
                <Button variant="blue">Signup</Button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
