import "jasmine";
import hello from "../src/helloworld";

describe('Hello world',  () => {
    it('says hello', () => {
        expect(hello()).toEqual("Hello, World");
    });
});