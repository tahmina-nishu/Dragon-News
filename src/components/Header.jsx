import logo from "../assets/logo.png";

const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 py-2">
            <div className="logo">
                <img className="w-[300px]" src={logo} alt="not found" />
            </div>
            <h2 className=" text-gray-500">Journalism Without Fear or Favour</h2>
        </div>
    );
};

export default Header;