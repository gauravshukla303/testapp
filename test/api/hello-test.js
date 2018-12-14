'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /hello', function() {
    describe('tests for get', function() {
        it('should respond 200 for "Success"', function() {
            var response = request('get', 'http://localhost:10010//hello', { 
                'qs': {"name":"con"},
                'headers': {"Content-Type":"application/json","Accept":"application/json"},
                'time': true
            });

        
            expect(response).to.have.schema({"required":["message"],"properties":{"message":{"type":"string"}}});
            return chakram.wait();
        });

        it('should respond default for "Error"', function() {
            var response = request('get', 'http://localhost:10010//hello', { 
                'qs': {"name":"occaecat Ut fugiat consectetur"},
                'headers': {"Content-Type":"application/json","Accept":"application/json"},
                'time': true
            });

            expect(response).to.have.schema({"required":["message"],"properties":{"message":{"type":"string"}}});
            return chakram.wait();
        });    
    });
});