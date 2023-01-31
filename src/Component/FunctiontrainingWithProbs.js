function Learn1(props) {
  return <div>Learn Test 1 {props.name}</div>;
}

const Learn2 = (props) => {
  return <div>Learn Test 2 {props.FunctionTest}</div>;
};

const Learn3 = (props) => {
  return <div>{props.children}</div>;
};

const Learn4 = (props) => {
  return (
    <div>
      <div>
        <Learn3>
          <h2>test Children</h2>
        </Learn3>
        <Learn2 />
        <p>test learn 4 {props.name}</p>
      </div>
    </div>
  );
};

export default Learn4;
