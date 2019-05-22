describe("Background color is consistent", () => {
it("is consistent", () => {
    let bg = [];
    for (let i = 0; i < 1000; i++){
        bg.push(testBackground());
    }
    expect(bg.every( (el) => { return el === '#FF0000'} )).toBe(true);
});
});

describe("background color changes when localStorage is reset", () => {
it("is the correct color", () => {
    let bg = [];
    for (let i = 0; i < 1000; i++){
        clearStorage();
        bg.push(testBackground());
    }
    expect(bg.every( (el) => { return el === '#FF0000'} )).toBe(true);
});
});