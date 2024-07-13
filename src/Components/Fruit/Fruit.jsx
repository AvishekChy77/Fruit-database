

const Fruit = ({fruit}) => {
    return (
        <div className="card bg-zinc-200 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{fruit.name}</h2>
    <p>Price: {fruit.price}</p>
    <div className=" w-28">
      <button className="btn btn-sm btn-outline btn-accent">Buy {fruit.name}</button>
    </div>
  </div>
</div>
    );
};

export default Fruit;