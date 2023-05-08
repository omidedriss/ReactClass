import React from "react";
import Students from "./students";
import Student from "./student";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });
const items = [
  {
    id: 0,
    name: "Mahdi",
    classNumber: 204,
    number: 123456,
    email: "test@gmail.com",
  },
  {
    id: 1,
    name: "Reza",
    classNumber: 214,
    number: 123456,
    email: "test@gmail.com",
  },
  {
    id: 2,
    name: "Morteza",
    classNumber: 224,
    number: 123456,
    email: "test@gmail.com",
  },
  {
    id: 3,
    name: "Alireza",
    classNumber: 234,
    number: 123456,
    email: "test@gmail.com",
  },
];
describe("<Students />", () => {
  it("renders number of student component", () => {
    const wrapper = shallow(
      <Students studentsList={items} deleted={{}} toggle={true} edited={{}} />
    );
    expect(wrapper.find(Student)).toHaveLength(items.length);
  });
});
