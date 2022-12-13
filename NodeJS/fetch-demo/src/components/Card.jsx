const Card = (props) => {
    console.log(props)
    return (
      <div    >
        <div className="overflow-hidden">
          <img
            className="w-full h-[350px] sm:h-[450px] object-cover hover:scale-110"
            src={props.imageUrl}
            alt="Shoes"
          />
        </div>
  
        <div className="pt-3 pb-1.5 flex flex-col gap-3">
          <h5>{props.title}</h5>
          <div className="flex justify-between items-center">
            <p>${props.price}</p>
            <p>6 Colors</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;