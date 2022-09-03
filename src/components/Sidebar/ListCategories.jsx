const ListCategories = ({ elem, category, setCategory }) => {
  const { icon, name } = elem;

  const handleSelect = () => {
    setCategory(name);
  };

  return (
    <button
      className="category-btn"
      style={{
        background: name === category && "#FC1503",
        color: "white",
      }}
      onClick={handleSelect}
    >
      <span
        style={{
          color: name === category ? "white" : "red",
          marginRight: "15px",
        }}
      >
        {icon}
      </span>
      <span
        style={{
          opacity: name === category ? "1" : "0.8",
        }}
      >
        {name}
      </span>
    </button>
  );
};
export default ListCategories;
