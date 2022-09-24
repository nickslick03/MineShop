import { RouteSwitch } from "../RouteSwitch";
import { test, expect } from "vitest"
import { render } from "@testing-library/react";

test('hi', () => {
    const { getByText } = render(<RouteSwitch />);
    expect(getByText('MineShop')).toBeTruthy();
})