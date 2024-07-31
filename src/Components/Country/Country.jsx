import { NavLink } from "react-router-dom";


const Country = ({country, handleVisit}) => {

  const {name, flags, population} = country || {}
  console.log(country)
  return (
    <div className="card image-full bg-teal-50 h-72 w-96 shadow-xl group">
  <figure>
    <img
    className= "w-full h-full object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-55"
      src={flags.png}
      alt="" />
  </figure>
  <div className="card-body items-start text-white hidden group-hover:flex">
    <h2 className="card-title">{name.common}</h2>
    <p>Population: {population}</p>
    <div className="card-actions justify-end">
      <button onClick={()=> handleVisit(name.common)} className="btn btn-sm btn-accent btn-outline">Visit</button>
      <NavLink to={`/countryDetails/${name.common}`} className="btn btn-sm btn-accent btn-outline">See More</NavLink>
    </div>
  </div>
</div>
  );
};

export default Country;