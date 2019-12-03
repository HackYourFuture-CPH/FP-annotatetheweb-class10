import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SidebarMenuResp from "./SidebarMenuResp.component";

test("if button was clicked", () => {
    const onClick = jest.fn();
    const { getByText } = render(<SidebarMenuResp />)
})

fireEvent.click(getByText);
expect(onClick).toHaveBeenCalledTimes(1);
