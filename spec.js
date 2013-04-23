var specFun = jasmine.createSpy()
sharedExampleFor("foo", specFun)

describe("jasmineSharedExamples", function(){
  describe("sharedExampleFor", function(){
    it("sharedExampleFor registers the function to the right label", function(){
      expect(sharedExamples["foo"]).toBe(specFun);
    });
  });    

  describe("itBehavesLike", function(){
      
    describe("no arguments", function(){
      itBehavesLike("foo");
      it("calls the example", function(){
        expect(specFun).toHaveBeenCalled();
      });
    });

    describe("with arguments", function(){
      itBehavesLike("foo", 1,2,3,4,5);
      it("calls the example with arguments", function(){
        expect(specFun).toHaveBeenCalledWith(1,2,3,4,5);
      });        
    });
  });
});
