import { framing } from "./framing";

test.each([
    [148, 16],
    [48, 16],
    [52, 16],
    [12 * 24, 16],
    [12 * 8, 16],
    [12 * 8, 24],
])("given width %j and offset %j, it returns framing info", (width, offset) => {
    // arrange - set up stuff u need 4 ur code

    // act - run your code
    const result = framing(width, offset);

    // assert - say what u expect 2 b true or false
    expect(result).toMatchSnapshot();
});
