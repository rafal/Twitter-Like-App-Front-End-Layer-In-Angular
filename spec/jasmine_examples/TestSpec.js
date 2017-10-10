describe("Test", function() {
  var App = require('../../lib/tests/App');
  var app;
  var oneDayInMilis = 1000 * 60 * 60 * 24;
  var today = new Date();

  beforeEach(function() {
    app = new App();
  });

  it("should equal today", function() {
    expect(app.showDateDiff(today)).toEqual("Today");
  });
  it("should equal yesterday", function() {
    expect(app.showDateDiff(today-oneDayInMilis)).toEqual("1d");
  });
  it("should equal last month", function() {
    expect(app.showDateDiff(today-30*oneDayInMilis)).toEqual("1m");
  });
  it("should equal last year", function() {
    expect(app.showDateDiff(today-365*oneDayInMilis)).toEqual("1y");
  });

});
