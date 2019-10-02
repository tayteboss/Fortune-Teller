
// var output = document.querySelector('h1')

// var children = Math.floor(Math.random() * 4);
// var partner = 'the Queen';
// var locations = 'Melbourne';
// var job = 'Digital Designer';

// output.innerHTML = "You will be a " + job + " in " + locations + ", and married to " + partner + " with " + children + "kids."



var output = document.querySelector('h1')

var partnerArray = ['👩the Queen', '👩Kylie Minogue', '👨James Bond', '👨David Attenborough']
var locationsArray = ['🌍Melbourne', '🌍Singapore', '🌍Berlin', '🌍Fiji']
var jobArray = ['🖊️Digital Designer', '✖️Developer', '🏤Postman', '🌭Professional Eater']

var randNum = Math.floor(Math.random() * 4)

var children = Math.floor(Math.random() * 6);
var partner = partnerArray[randNum];
var locations = locationsArray[randNum];
var job = jobArray[randNum];

output.innerHTML = "You will be a <span>" + job + "</span> in <span>" + locations + "</span>, and married to <span>" + partner + "</span> with <span>" + children + "</span> 👶kids."
