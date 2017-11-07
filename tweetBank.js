const _ = require('lodash');


let data = [];

function add (name, content) {
    data.push({ name: name, content: content });
  }

  function list () {
    return _.cloneDeep(data);
  }

  function find (properties) {
    return _.cloneDeep(_.filter(data, properties));
  }

  module.exports = { add: add, list: list, find: find };







  const randArrayEl = function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  const getFakeName = function() {
    const fakeFirsts = ['Nimit', 'David', 'Shanna', 'Emily', 'Scott', 'Karen', 'Ben', 'Dan', 'Ashi', 'Kate', 'Omri', 'Gabriel', 'Joe', 'Geoff'];
    const fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
    return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
  };

  const getFakeTweet = function() {
    const awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing', 'impressive'];
    return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
  };

  for (let i = 0; i < 10; i++) {
    module.exports.add( getFakeName(), getFakeTweet() );
  }

//   module.exports.add( "1", "11" );
//   module.exports.add( "2", "21" );
//   module.exports.add( "3", "31" );
//   data.push({type: "go", goose: "nope"})
//   console.log(module.exports.list());
//   var modFind  = module.exports.find("name")
//   console.log("\n testing find: ", modFind.filter(function(obj){
//       return obj["name"] === "1"
//   }))


//   console.log(data)
