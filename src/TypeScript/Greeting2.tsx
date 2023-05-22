import React from "react";
type GProps = {
  name: string;
  messageCount: number;
  isLogging: boolean;
};
function Greeting(props: GProps) {
  const { name, messageCount, isLogging } = props;
  return (
    <div>
      {isLogging ? `Wellcom ${name} you Have ${messageCount}` : `Wellcom`}
    </div>
  );
}
export default Greeting;
