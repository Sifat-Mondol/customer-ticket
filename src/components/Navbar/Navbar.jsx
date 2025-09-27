import React from 'react';
import { MdOutlineMenu } from 'react-icons/md';
import Container from '../Others/Container';


const navMenu = ['Home', 'FAQ', 'Changelog', 'Blog', 'Download', 'Contact'];

const Navbar = () => {
  return (
    <div className=" bg-white shadow border-b-[0.5px] border-gray-300">
      <Container>
        <nav className=" py-4 flex justify-between items-center mx-2 md:mx-0">
          <h1 className=" text-2xl font-bold">CS — Ticket System</h1>
          <div className="md:flex hidden items-center gap-6">
            {navMenu.map((menu, i) => {
              return (
                <a href="" key={i} className="text-gray-800 hover:underline">
                  {menu}
                </a>
              );
            })}
            <button className="btn text-white bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] hover:cursor-pointer">
              + New Ticket
            </button>
          </div>
          <div className="block md:hidden px-5">
            <MdOutlineMenu />
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
