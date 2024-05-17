import React from "react";
import { render, screen } from "@testing-library/react";
import { Login } from "../Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import userEvent from '@testing-library/user-event';

describe("Login component", () => {
  it("should render Login component correctly", () => {
    render(
    <BrowserRouter>
        <Routes>
        <Route path="*" element= {<Login />}/>
        </Routes>
    </BrowserRouter>
    );
    const element = screen.getByRole("textbox");
    expect(element).toBeInTheDocument();
  });

  it("should show error message when all the fields are not entered", async () => {
    render(
        <BrowserRouter>
            <Routes>
                <Route path="*" element= {<Login />}/>
            </Routes>
        </BrowserRouter>
    );
    const buttonElement = screen.getByRole("button");
    await userEvent.click(buttonElement);
    // screen.debug();
   });

   //negative test
   it("should not show any error message when the component is loaded", () => {
        render(<BrowserRouter>
            <Routes>
                <Route path="*" element= {<Login />}/>
            </Routes>
        </BrowserRouter>);
        const alertElement = screen.queryByRole("alert");
        expect(alertElement).not.toBeInTheDocument();
    });

    it("should render Login component correctly", () => {
        render(
            <BrowserRouter>
            <Routes>
                <Route path="*" element= {<Login />}/>
            </Routes>
        </BrowserRouter>);
        const element = screen.getByTestId("Login-target-btn");
        expect(element).toBeInTheDocument();
    });

    it("should test for presence of subheading in the component", () => {
        render(
            <BrowserRouter>
            <Routes>
                <Route path="*" element= {<Login />}/>
            </Routes>
        </BrowserRouter>);
        const element = screen.getByRole("heading");
        expect(element).toBeInTheDocument();
     });

});