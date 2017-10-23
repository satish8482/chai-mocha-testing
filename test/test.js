
var expect = require('chai').expect;
var should= require('chai').should();

describe('Basic test', function (){

  it('should return when true is passed' , function(){

  	 expect(true).to.be.true;
  });

});




// testing functions

describe('Math', function() {  
    describe('#abs()', function() {
        it('should return positive value of given negative number', function() {
            expect(Math.abs(-5)).to.be.equal(5);
        });
    });
});



//testing obj and its properties
describe('object testing' , function(){

  it('should deal with objects' , function(){

   var obj={name :'Jon' , gender:'male'};
   var objB=obj;
   obj.should.equal(objB);
   obj.should.have.property('name').equal('Jon');



  });

  //testing null objects
  it ('should allow testing nulls' , function(){

    var iAmNull=null;
      should.not.exist(iAmNull);

  });
});