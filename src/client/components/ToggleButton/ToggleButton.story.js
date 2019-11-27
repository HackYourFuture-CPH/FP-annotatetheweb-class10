import React from 'react';
import { storiesOf } from "@storybook/react"
import ToggleButton from "./ToggleButton";

storiesOf("ToggleButton", module).add("Toggle button", () => {
    return <ToggleButton/>
});