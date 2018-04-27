let fs = require("fs");
var count = require('../js/main');

describe('main()', () => {
    var count = 0;

    it("blank",()=>{
       count = blank(count);
        expect(count).toEqual(20);
    });

    it('should pass', () => {
      expect(fs.statSync("index.html").isFile()).toBe(true);
    });

});
