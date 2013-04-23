var sharedExamples = {}

/*
 * Bind new shared example
 */
function sharedExampleFor(label, specFunction){
  sharedExamples[label] = specFunction;
}

function itBehavesLike(label){
  sharedExamples[label]()
}