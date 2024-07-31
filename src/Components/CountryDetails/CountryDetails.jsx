import { useParams } from "react-router-dom";
import useCountryList from "../../Hooks/useCountryList";

const CountryDetails = () => {
    const {name} = useParams()
    const [countries, error, loading] = useCountryList()

    if(loading){
        return <span className="loading loading-bars loading-lg"></span>
    }
    
    if(error){
        return <span className=" text-4xl text-sky-950"> Sorry, Something went wrong.</span>
    }

    const country = countries.find(country => country.name.common === name)
    console.log(country)

    return (
        <div>
            <h1>{country.name.official}</h1>
        </div>
    );
};

export default CountryDetails;