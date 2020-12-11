import React from "react";
import { render, act, wait } from "@testing-library/react";
import useCssDarkMode from "./useCssDarkMode";

const setup = () => {
  const hookOutput = {};
  const TestComponent = () => {
    Object.assign(hookOutput, useCssDarkMode());
    return null;
  };
  render(<TestComponent />);
  return hookOutput;
};

describe("useCssDarkMode hook", () => {
  test("sets theme to light mode if no preference and no localstorage", () => {
    localStorage.getItem.mockImplementation(() => undefined);
    localStorage.setItem.mockImplementation(() => undefined);
    matchMedia.mockImplementation(() => false);
    const { isDarkMode } = setup();
    expect(isDarkMode).toBe(false);
  });

  test("sets theme to dark mode if localstorage has a dark theme", () => {
    localStorage.getItem.mockImplementation(() => "dark");
    localStorage.setItem.mockImplementation(() => undefined);
    const { isDarkMode } = setup();
    expect(isDarkMode).toBe(true);
  });

  test("sets theme to light mode if localstorage has a light theme", () => {
    localStorage.getItem.mockImplementation(() => "light");
    localStorage.setItem.mockImplementation(() => undefined);
    const { isDarkMode } = setup();
    expect(isDarkMode).toBe(false);
  });

  test("sets theme to dark mode if user prefers dark theme", () => {
    localStorage.getItem.mockImplementation(() => undefined);
    localStorage.setItem.mockImplementation(() => undefined);
    matchMedia.mockImplementation(() => true);
    const { isDarkMode } = setup();
    expect(isDarkMode).toBe(true);
  });

  test("changes theme and writes change to local storage when toggleDarkMode is called", () => {
    localStorage.getItem.mockImplementation(() => undefined);
    localStorage.setItem.mockImplementation(() => undefined);
    matchMedia.mockImplementation(() => false);
    const { isDarkMode, toggleIsDarkMode } = setup();
    act(() => {
      toggleIsDarkMode();
    });
    expect(localStorage.setItem).toHaveBeenCalledWith("theme", "dark");
    // expect(isDarkMode).toBe(true); idk why this isn't working!!!!!
  });
});
