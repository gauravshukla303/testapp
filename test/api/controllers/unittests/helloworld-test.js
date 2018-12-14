'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /helloworld', function() {
    describe('tests for get', function() {
        it('should respond 200 for "Success"', function() {
            var response = request('get', 'http://localhost:10010//helloworld', { 
                'qs': {"name":"dolore dolor tempor in"},
                'headers': {"Content-Type":"application/json","Accept":"application/json"},
                'time': true
            });

            expect(response).to.have.status(200)
            expect(response).to.have.schema({"required":["message"],"properties":{"message":{"type":"string"}}});
            return chakram.wait();
        });

        it('should respond default for "Error"', function() {
            var response = request('get', 'http://localhost:10010//helloworld', { 
                'qs': {"name":"culpa"},
                'headers': {"Content-Type":"application/json","Accept":"application/json"},
                'time': true
            });

            expect(response).to.have.schema({"required":["message"],"properties":{"message":{"type":"string"}}});
            return chakram.wait();
        });    
    });
});