import React from "react";
import Clickers from "./clickers";
import { render, cleanup, waitForElement, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FetchComponent from "./fetch";
import axiosMock from "axios";
afterEach(cleanup);
it("renders data", async () => {
  axiosMock.get.mockResolvedValue({ data: "hello" });
  const url = "/orbitsoftco.com";
  const { getByTestId } = render(<FetchComponent url={url} />);
  expect(getByTestId("loading")).toHaveTextContent("...loading");
  const resolvedSpan = await waitForElement(() => getByTestId("resolved"));
  expect(resolvedSpan).toHaveTextContent("hello");
  expect(axiosMock.get).toHaveBeenCalledTimes(1);
  expect(axiosMock.get).toHaveBeenCalledWith(url);
});
