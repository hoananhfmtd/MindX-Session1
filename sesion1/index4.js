// let person = ['Nam', 19, 'Hanoi', 25, false];
// console.log(person);

// let person = {};
// console.log(person);

// let person = {
//     name: 'Nam'
// };

// console.log(person);

// let person = {
//     name: 'Nam',
//     age: 19,
// };

// console.log(person);


// let person = {
//     name: 'Nam',
//     age: 18,
// };

// console.log(person);
// console.log(person.age);   

// let prop = 'name';
// // console.log(person.prop);
// console.log(person['name']);

//
let movie = {
    title: 'batman',
    year: 2012,
    rate: 8.7,
};

// //cach 1
// console.log(movie.title);
// console.log(movie.year);
// console.log(movie.rate);
// //cach 2 dung object ['prop']
// console.log(movie['title']);
// console.log(movie['year']);
// console.log(movie['rate']);
// //dung [] khi ten bien dac biet hoac bien do nguoi dung nhap

//cho nguoi dung nhap ten thuoc tinh, in ra gia tri
// let prop = prompt('nhap ten thuoc tinh');
// console.log(movie[prop]);
// alert (movie[prop]);

//update

// movie.title = 'god father'
// console.log(movie);



// movie['title'] = 'god father';
// console.log(movie);

//them thuoc tinh
// movie.location = 'Hanoi';
// console.log(movie);

// movie['location'] = 'Hanoi';
// console.log(movie);

//delete
// console.log(movie); 
// delete movie.title;
// console.log(movie);


// console.log(movie);
// delete movie['title'];
// console.log(movie);


//baitap

// movie['rate'] = 8.7 ;
// console.log(movie);

// movie['rate'] = movie['rate'] - 0.5;
// console.log(movie);

let input = prompt('Nhap ten TT');
let value = prompt('Nhap gia tri');

movie[input] = value;
console.log(movie);













