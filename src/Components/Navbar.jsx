import { Link} from 'react-scroll';


function Navbar() {
  return (
    <div id="home" >
    <div   className=" container mx-auto px-10 pt-5 pb-5 shadow-md ">
       <div  className=" flex  justify-between items-center flex-wrap w-full  h-auto">
        <Link to="home" spy={true}  smooth={true}   offset={0}  duration={500}  className="logo text-main-color font-bold text-2xl h-16 flex items-center   cursor-pointer">
          AMMAR
        </Link>

        <ul className="hidden lg:flex">
        <li className=" hover:bg-sky-900  rounded-sm transition duration-400 cursor-pointer overflow-hidden relative before:content-[''] before:absolute before:w-full before:h-[4px] before:bg-white before:top-0 before:-left-[100%] before:transition-all before:duration-500  hover:before:left-0">
        <Link to="home" spy={true}  smooth={true}   offset={0}  duration={500}  className="nav-link block p-5">Home </Link>
          </li>

          <li className=" hover:bg-sky-900  rounded-sm transition duration-400 cursor-pointer overflow-hidden relative before:content-[''] before:absolute before:w-full before:h-[4px] before:bg-white before:top-0 before:-left-[100%] before:transition-all before:duration-500  hover:before:left-0">
            <Link to="about" spy={true}  smooth={true}   offset={-100}  duration={500}  className="nav-link block p-5">About </Link>
          </li>

          <li className=" hover:bg-sky-900 rounded-sm transition duration-400 cursor-pointer overflow-hidden relative before:content-[''] before:absolute before:w-full before:h-[4px] before:bg-white before:top-0 before:-left-[100%] before:transition-all before:duration-500  hover:before:left-0">
            <Link to="Technologies" spy={true}  smooth={true}  offset={-100}  duration={500}  className="nav-link  block p-5">Technologies</Link>
          </li>

          <li className=" hover:bg-sky-900  rounded-sm transition duration-400 cursor-pointer overflow-hidden relative before:content-[''] before:absolute before:w-full before:h-[4px] before:bg-white before:top-0 before:-left-[100%] before:transition-all before:duration-500  hover:before:left-0">
            <Link to="Experience" spy={true}  smooth={true}  offset={-100}  duration={500}   className="nav-link  block p-5">Experience</Link>
          </li >

          <li className=" hover:bg-sky-900  rounded-sm transition duration-400 cursor-pointer overflow-hidden relative before:content-[''] before:absolute before:w-full before:h-[4px] before:bg-white before:top-0 before:-left-[100%] before:transition-all before:duration-500  hover:before:left-0">
            <Link to="Project" spy={true}  smooth={true}   offset={-100}  duration={500}  className="nav-link  block p-5 ">Project</Link>
          </li>

          <li className=" hover:bg-sky-900 rounded-sm transition duration-400 cursor-pointer overflow-hidden relative before:content-[''] before:absolute before:w-full before:h-[4px] before:bg-white before:top-0 before:-left-[100%] before:transition-all before:duration-500  hover:before:left-0">
            <Link to="content" spy={true}  smooth={true}   offset={-100} duration={500}   className="nav-link  block p-5">Content </Link>
          </li>
        </ul>

        <div className="navbar-center  text-white  lg:hidden">
          <div className="dropdown ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow right-0 text-black"
              >

          <li className=" hover:bg-sky-900  rounded-sm transition duration-400 cursor-pointer overflow-hidden relative before:content-[''] before:absolute before:w-full before:h-[4px] before:bg-white before:top-0 before:-left-[100%] before:transition-all before:duration-500  hover:before:left-0">
        <Link to="home" spy={true}  smooth={true}   offset={0}  duration={500}  className="nav-link block p-5">Home </Link>
          </li>

          <li className=" hover:bg-sky-900  rounded-sm transition duration-400 cursor-pointer overflow-hidden relative before:content-[''] before:absolute before:w-full before:h-[4px] before:bg-white before:top-0 before:-left-[100%] before:transition-all before:duration-500  hover:before:left-0">
            <Link to="about" spy={true}  smooth={true}   offset={-100}  duration={500}  className="nav-link block p-5">About </Link>
          </li>

          <li className=" hover:bg-sky-900 rounded-sm transition duration-400 cursor-pointer overflow-hidden relative before:content-[''] before:absolute before:w-full before:h-[4px] before:bg-white before:top-0 before:-left-[100%] before:transition-all before:duration-500  hover:before:left-0">
            <Link to="Technologies" spy={true}  smooth={true}  offset={-100}  duration={500}  className="nav-link  block p-5">Technologies</Link>
          </li>

          <li className=" hover:bg-sky-900  rounded-sm transition duration-400 cursor-pointer overflow-hidden relative before:content-[''] before:absolute before:w-full before:h-[4px] before:bg-white before:top-0 before:-left-[100%] before:transition-all before:duration-500  hover:before:left-0">
            <Link to="Experience" spy={true}  smooth={true}  offset={-100}  duration={500}   className="nav-link  block p-5">Experience</Link>
          </li >

          <li className=" hover:bg-sky-900  rounded-sm transition duration-400 cursor-pointer overflow-hidden relative before:content-[''] before:absolute before:w-full before:h-[4px] before:bg-white before:top-0 before:-left-[100%] before:transition-all before:duration-500  hover:before:left-0">
            <Link to="Project" spy={true}  smooth={true}   offset={-100}  duration={500}  className="nav-link  block p-5 ">Project</Link>
          </li>

          <li className=" hover:bg-sky-900 rounded-sm transition duration-400 cursor-pointer overflow-hidden relative before:content-[''] before:absolute before:w-full before:h-[4px] before:bg-white before:top-0 before:-left-[100%] before:transition-all before:duration-500  hover:before:left-0">
            <Link to="content" spy={true}  smooth={true}   offset={-100} duration={500}   className="nav-link  block p-5">Content </Link>
          </li>

              </ul>
            </div>
          </div>

      </div>
    </div>
     
    

    </div>

  )
}

export default Navbar


