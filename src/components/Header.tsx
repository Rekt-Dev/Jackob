import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 py-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-semibold">Jackob</div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="/pants" className="hover:text-gray-300">
                Pants
              </a>
            </li>
            {/* Add more navigation links as needed */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
