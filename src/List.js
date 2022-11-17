const List = ({ people }) => {
  return people.map((person) => {
    const { id, name, age, image } = person;
    return (
      <article key={id} className="person">
        <img src={image} alt="person"></img>
        <div>
          <h3>{name}</h3>
          <h4>{age} years old</h4>
        </div>
      </article>
    );
  });
};

export default List;
