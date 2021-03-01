// Test Suite for REST API

var sinon           = require('sinon');
var expect          = require('chai').use(require('sinon-chai')).expect;
var firebasemock    = require('firebase-mock');
var mockauth        = new firebasemock.MockFirebase();
var mockfirestore   = new firebasemock.MockFirestore();
var mocksdk         = firebasemock.MockFirebaseSdk(null, function() {
  return mockauth;
}, function() {
  return mockfirestore;
});

var mockapp = mocksdk.initializeApp();

describe('Firestore Function',() => {
  beforeEach(function() {
    mockfirestore = new firebasemock.MockFirestore();
    mockfirestore.autoFlush();
    mockauth = new firebasemock.MockFirebase();
    mockauth.autoFlush();
  });

  
  var uid = '123';

  it('create', () => {
    var event = {
      data: new firebasemock.DeltaDocumentSnapshot(mockapp, null, {
        "firstName": "Krishna",
        "lastName": "Pandian",
        "email": "kpandian@ucsc.edu",
        "age":20,
        "school": "UC Santa Cruz",
        "gender": "Male",
        "major": "Computer Engineering",
        "whyCruzHacks": "Accept Me",
        "anythingElse": ""
    }, '/' + uid),
      params: {
        uid: uid
      }
    };

    expect(event.data.get('firstName')).to.equal('Krishna');
    expect(event.data.get('lastName')).to.equal('Pandian');
    expect(event.params.uid).to.equal(uid);

  });
});

