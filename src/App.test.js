import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

import { fetchShow } from "./api/fetchShow";

test('Renders without errors', () => {
    render(<App />)
})
