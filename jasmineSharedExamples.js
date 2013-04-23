var sharedExamples = {}

/*
 * Bind new shared example
 */
function sharedExampleFor(exampleName, specFunction){
  sharedExamples[exampleName] = specFunction;
}

/*
 * Calls the exampleName passed with the arguments sent
 */
function itBehavesLike(exampleName){
  var args = [];
  if(arguments.length > 1){
    var args = Array.prototype.slice.call(arguments, 1);
  }
  
  //call the example with the exampleName and passed arguments
  describe("It behaves like "+exampleName, function(){
    sharedExamples[exampleName].apply(this, args)
  });
}