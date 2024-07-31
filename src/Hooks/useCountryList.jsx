import { useEffect, useState } from "react";


const useCountryList = () => {
    const [countries, setCountries] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(  ()=>{
        async function dataFetch () {
          try {
            const res = await fetch("https://restcountries.com/v3.1/all")
            if(!res.ok){
              throw new Error("Database not found!")
            }
            const data = await res.json()
            setCountries(data)
            console.log(data)
           }catch(error){
            console.error("Error:",error)
            setError(error)
           }
           finally{
              setLoading(false)
           }
        }
        dataFetch()
        }, [])

    return [countries, error, loading]
  
};

export default useCountryList;