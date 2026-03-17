import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// 👇 THIS is your App
import App from "./src/AppII";

describe("App", () => {
  it("renders heading", () => {
    render(<App />);
    expect(screen.getByText("Hello Manish")).toBeInTheDocument();
  });
});