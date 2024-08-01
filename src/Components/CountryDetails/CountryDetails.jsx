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
            <h1 className="text-3xl font-semibold my-5">{country.name.official}</h1>
            <p>
            {country.name.common} is a country with a population of {country.population}. Its capital city is {country.capital[0]}, and it is located in {country.region} on the continent of {country.continents[0]}. The official currency is..., and the country’s independence status is {country.independent? "true" : "false"}. It is {country.landlocked} a country.
            </p>
        </div>
    );
};

export default CountryDetails;