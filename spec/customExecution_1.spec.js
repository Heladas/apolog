'use strict';
// the next test are being performed by using the features from Apolog
var example = [
      './spec/features/customExecutionA.feature',
      './spec/features/customExecutionB.feature',
    ]

describe("Custom nested execution with no features", function() {
  var execution_map = {}, errors;
  loadFeature(example[0]);
  loadFeature(example[1]);

  errors = run();
  it("found two errors", function() {
    expect(errors[0].message).toBe('Feature not found "Custom Execution A"');
    expect(errors[1].message).toBe('Feature not found "Custom Execution B"');
  });
});

