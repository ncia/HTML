const x = 3;

function add5(xxxd) {
	function add(xsdfe, y3) {
		return x + y3;
	}
	return add(x, 8);
}

console.log(add5(x))


const five = 5;
function add6(xx) {
	function add(yy) {
		return xx + yy;
	}
	return add(five);
}

console.log(add6(9));


function add5(xewr) {
	const five = 55;
	function add(xdfs) {
		return five + xewr;
	}
	return add(xewr);
}
console.log(add5(80));

findUserAndCallBack(1, function(user) {
	console.log("user:", user);
});

function findUserAndCallBack(id, cb) {
	setTimeout(function() {
		console.log("waited 1 sec.");
		const user = {
			id: id,
			name: "User" + id,
			email: id + "@test.com",
		};
		cb(user);
	}, 1000);
}

findUser(1).then(function (user) {
	console.log("user:", user);
});

function findUser(id) {
	return new Promise(function (resolve) {
		setTimeout(function() {
			console.log("waited 1 sec.");
			const user = {
				id: id,
				name: "User" + id,
				email: id + "@test.com",
			};
			resolve(user);
		}, 1000);
	});
}

function devide(numA, numB) {
  return new Promise((resolve, reject) => {
    if (numB === 0) reject(new Error("Unable to devide by 0."));
    else resolve(numA / numB);
  });
}

// devide(8, 2)
// .then((result) => console.log("성공:", result))
// .catch((error) => console.log("실패:", error));
devide(8, 0)
  .then((result) => console.log("성공:", result))
  .catch((error) => console.log("실패:", error));

fetch("https://jsonplaceholder.typicode.com/posts/1")
.then((response) => console.log("response:", response))
.catch((error) => console.log("error:", error));

// fetch()
// .then((response) => console.log("response:", response))
// .catch((error) => console.log("error:", error));

fetch("https://jsonplaceholder.typicode.com/posts/1")
.then((response) => response.json())
.then((post) => console.log("post:", post))
.catch((error) => console.log("error:", error));


fetch("https://jsonplaceholder.typicode.com/posts/1")
.then((response) => response.json())
.then((post) => post.userId)
.then((userId) => "https://jsonplaceholder.typicode.com/users/" + userId)
.then((url) => fetch(url))
.then((response) => response.json())
.then((user) =>console.log("user:", user))
.catch((error) => console.log("error:", error));

function fetchAuthorName(postId) {
	return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
	.then((response) => response.json())
	.then((post) => post.userId)
	.then((userId) => {
		return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
		.then((response) => response.json())
		.then((user) => user.name);
	});
}

fetchAuthorName(1).then((name) => console.log("name:", name));