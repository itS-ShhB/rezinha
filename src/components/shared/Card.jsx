function Card(props) {
  console.log(props);
  return (
    <div className="flex max-w-lg rounded-lg border-2 border-gray-500 bg-white  items-center justify-between flex-col bg-transparent shadow-lg my-3 mx-2 p-4">
      <img src={props.image} alt="Some Image" className="w-52 rounded-lg scale-75 hover:scale-100 transition ease-in-out duration-300" />
      <h3 className="text-lg text-black font-bold">{props.name}</h3>
      <p className="line-clamp-3 text-center">{props.description}</p>
    </div>
  );
}

export default Card;
