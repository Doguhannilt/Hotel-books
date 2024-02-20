import { Link } from 'react-router-dom';
//import { useSelector } from 'react-redux'; 

const Header = () => {
  // const isLogged = useSelector(state => state.logger);
  return (
    
    <div className="bg-sky-500/90 py-6">

      <div className=" container mx-auto flex justify-between ">
       <span className="text-3xl text-white font-bold tracking-tight">
        <Link to="/" >
          LunaHolidays.com
        </Link>

       </span>

        <span className = "flex space-x-2">


          </span>
      </div>
    </div>
  );
};

export default Header;
