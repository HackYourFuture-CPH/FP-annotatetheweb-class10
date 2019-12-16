import React from "react";
import { storiesOf } from "@storybook/react";
import {LoginPage} from "./LoginPage.component";
import Header from "../Header/Header.Component";
import Image from "../LoginPageImage/LoginPageImage.component";

storiesOf("LoginPage", module)
.add("LoginPage", () => <Header  title="Annotate the web" classHeader='loginPage-header'></Header>)
 .add('LoginPage',() => <Image/>)


