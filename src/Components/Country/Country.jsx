

const Country = ({country, handleVisit}) => {
  console.log(country)
  return (
    <div className="card image-full bg-teal-50 h-72 w-96 shadow-xl group">
  <figure>
    <img
    className= "w-full h-full object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-55"
      src={country.flags.png}
      alt="" />
  </figure>
  <div className="card-body items-start text-white hidden group-hover:flex">
    <h2 className="card-title">{country.name.common}</h2>
    <p>Population: {country.population}</p>
    <div className="card-actions justify-end">
      <button onClick={()=> handleVisit(country.name.common)} className="btn btn-sm btn-accent btn-outline">Visit</button>
    </div>
  </div>
</div>
  );
};

export default Country;