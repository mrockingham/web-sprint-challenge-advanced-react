import React from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form checkout", () => {

    render(<CheckoutForm />)
});


test("form header renders", () => {
   const container = render(<CheckoutForm />)
   const header = container.getByText('Checkout Form')
    expect(header).toBeInTheDocument()
});
test("form shows success message on submit with form details", () => {

    const container2 =render (<CheckoutForm />)
    const submit = container2.getByText('Checkout')
    fireEvent.click(submit)
    expect(submit).toBeTruthy
});
