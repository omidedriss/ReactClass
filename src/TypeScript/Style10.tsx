import React, { useState } from "react";
type TProps = {
  styles: React.CSSProperties;
};

function Style({ styles }: TProps) {
  return <div style={styles}></div>;
}
export default Style;
