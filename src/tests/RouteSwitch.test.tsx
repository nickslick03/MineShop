import { RouteSwitch } from "../RouteSwitch";
import { test, expect } from "vitest"
import { render } from "@testing-library/react";

test('hi', () => {
    expect(2).toBe(2);
    const { getByText } = render(<RouteSwitch />);
    expect(getByText('MineShop')).toBeTruthy();
})