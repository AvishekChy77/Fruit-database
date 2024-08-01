import { useState } from "react";
import Country from "../../Components/Country/Country";
import useCountryList from "../../Hooks/useCountryList";


const Home = () => {
    const [countries, error, loading] = useCountryList()
    const [visited, setVisited] = useState([])
      
        if(loading){
          return <span className="loading loading-bars loading-lg"></span>
        }
      
        if(error){
          return <span className=" text-4xl text-sky-950"> Sorry, Something went wrong.</span>
        }
      
        const handleVisit = (c)=>{
          const arr = [...visited]
          if(!arr.includes(c)){
            arr.push(c)
            setVisited(arr)
          }
      
        }
    return (
        <div>
      <p className=' font-medium my-5'>No of Countries: {countries.length}</p>
      <div className='my-5'>
        <h2>Countries I've visited: {visited.length}</h2>
      </div>
      <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 justify-between'>
        {
          countries.map(country=> <Country key={country} country={country}  handleVisit ={handleVisit}/>)
        }
      </div>
        </div>
    );
};

export default Home;