const Header = ({group}) => {

  return (
    <>
    <div className="header">
    <h2>{group.nameGroup}</h2>
      <div>
        {group.countries.map((country) => {
          return <img
          src= {`https://flagcdn.com/60x45/${country}.png`}
          width="60"
          height="45"
          alt={country}
        />
        })}
      </div>
    </div>
    </>
  );
};

export default Header;
