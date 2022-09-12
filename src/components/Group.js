import Header from "./Header";
import Match from "./Match";

const Group = ({ group }) => {
  return (
    <>
      <div className="group">
        <Header group={group} />
        <div className="matches">
          <Match group={group} />
          <Match group={group} />
          <Match group={group} />
          <Match group={group} />
        </div>
      </div>
    </>
  );
};

export default Group;
