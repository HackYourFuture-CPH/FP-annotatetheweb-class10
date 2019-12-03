import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button.component";
import "@testing-library/jest-dom/extend-expect";
import {
    faSearch,
    faCog,
  } from '@fortawesome/free-solid-svg-icons';

 
test ('if component have right classNames', () => {
   const {container } = render(<Button iconName={faCog} buttonClasses="sidebar-menu-button-resp" fontClasses="sidebar-menu-invert-color" />);
   expect(container.firstChild.firstChild).toHaveClass('sidebar-menu-invert-color');
   expect(container.firstChild).toHaveClass('sidebar-menu-button-resp');
})

// 
test('button is clicked and onClick is called', () => {
    const iconName = faSearch;
    const onClick = jest.fn();
    const { getByText } = render (<Button iconName={iconName} onClick={onClick} buttonClasses="test" fontClasses="testing" />);

    fireEvent.click(getByText(iconName));
    expect(onClick).toHaveBeenCalled();
})



