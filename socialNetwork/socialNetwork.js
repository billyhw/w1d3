var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

var listEveryLinks = function(data) {
  for (var key in data) {
    var followers = [];
    for (var other in data) {
      if (other !== key) {
        if (data[other].follows.indexOf(key) !== -1) {
          followers.push(other);
        }
      }
    }
    data[key].followers = followers;
  }
  for (var key in data) {
    process.stdout.write(data[key].name + " is following: ");
    data[key].follows.forEach(function(x) { process.stdout.write(data[x].name + ", ") ;});
    console.log();
    process.stdout.write(data[key].name + " is followed by: ");
    data[key].followers.forEach(function(x) { process.stdout.write(data[x].name + ", ") ;});
    console.log();
  }
}

listEveryLinks(data);

var findMostFollowing = function(data) {
  var numFollowing = 0;
  var mostFollowing = '';
  for (var key in data) {
    if (data[key].follows.length > numFollowing) {
      numFollowing = data[key].follows.length;
      mostFollowing = key;
     }
  }
  console.log("User with the most followings is: " + data[mostFollowing].name);
}

findMostFollowing(data);

var findMostFollowers = function(data) {

  for (var key in data) {
    var followers = [];
    for (var other in data) {
      if (other !== key) {
        if (data[other].follows.indexOf(key) !== -1) {
          followers.push(other);
        }
      }
    }
    data[key].followers = followers;
  }
  var numFollowers = 0;
  var mostFollowers = '';
  for (var key in data) {
    if (data[key].followers.length > numFollowers) {
      numFollowers = data[key].follows.length;
      mostFollowers = key;
     }
  }
  console.log("User with the most followers is: " + data[mostFollowers].name);

}

findMostFollowers(data);

var findMostFollowersOver30 = function(data) {

  for (var key in data) {
    var followers = [];
    for (var other in data) {
      if (other !== key) {
        if (data[other].follows.indexOf(key) !== -1) {
          followers.push(other);
        }
      }
    }
    data[key].followers = followers;
  }
  var numFollowers = 0;
  var mostFollowers = '';
  for (var key in data) {
    if (data[key].followers.length > numFollowers && data[key].age > 30) {
      numFollowers = data[key].follows.length;
      mostFollowers = key;
     }
  }
  console.log("User with the most followers and over 30 is: " + data[mostFollowers].name);

}

findMostFollowersOver30(data);

var findMostFollowingOver30 = function(data) {
  var numFollowing = 0;
  var mostFollowing = '';
  for (var key in data) {
    if (data[key].follows.length > numFollowing && data[key].age > 30) {
      numFollowing = data[key].follows.length;
      mostFollowing = key;
     }
  }
  console.log("User with the most followings and over 30 is: " + data[mostFollowing].name);
}

findMostFollowingOver30(data);

var findOnlyFollow = function() {
  for (var key in data) {
    var followers = [];
    for (var other in data) {
      if (other !== key) {
        if (data[other].follows.indexOf(key) !== -1) {
          followers.push(other);
        }
      }
    }
    data[key].followers = followers;
  }

  var noFollowBack = [];
  for (var key in data) {
    for (var id of data[key].follows) {
      if (data[key].followers.indexOf(id) === -1) {
        noFollowBack.push(data[key].name);
        break;
      }
    }
  }
  process.stdout.write("Users who follow someone who doesn't follow them back: ");
  noFollowBack.forEach(function(x) { process.stdout.write(x + ", "); });
  console.log("");
}

findOnlyFollow(data);

var listEveryReach = function() {
  // TBD
}
