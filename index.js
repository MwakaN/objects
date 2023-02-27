function InstagramPost (handleOfAuthor, content,imageLinkPostedByAuthor, numberOfLikes,numberOfViews){
    this.handleOfAuthor=handleOfAuthor;
    this.content=content;
    this.imageLinkPostedByAuthor=imageLinkPostedByAuthor;
    this.numberOfLikes=numberOfLikes;
    this.numberOfViews=numberOfViews;
}

let Post1 = new InstagramPost('Mwaka','Life is beautiful','https://www.techexplorist.com/wp-content/uploads/2019/12/happiness.jpg',1029,3000)
console.log(Post1);
let Post2 = new InstagramPost('National Geographic', 'African wildlife', 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSpU5h6hjPVJAV7GUxnCE1h_XAl09dlDS-pQSUTtSFKAUo_h_muWVy0NRKbmwx9-wqVRS9GALE0CbwEm9Y', 10000, 6000)
console.log(Post2);

/* InstagramPost {
  handleOfAuthor: 'Mwaka',
  content: 'Life is beautiful',
  imageLinkPostedByAuthor: 'https://www.techexplorist.com/wp-content/uploads/2019/12/happiness.jpg',
  numberOfLikes: 1029,
  numberOfViews: 3000
}
InstagramPost {
  handleOfAuthor: 'National Geographic',
  content: 'African wildlife',
  imageLinkPostedByAuthor: 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSpU5h6hjPVJAV7GUxnCE1h_XAl09dlDS-pQSUTtSFKAUo_h_muWVy0NRKbmwx9-wqVRS9GALE0CbwEm9Y',
  numberOfLikes: 10000,
  numberOfViews: 6000

  */
  function createPerson(name, age, location) {
    return {
      name: name,
      age: age,
      location: location,
    }
} 

let Person = createPerson('Musa Dawodu', 19, 'Lagos State');
console.log(Person);

//{ name: 'Musa Dawodu', age: 19, location: 'Lagos State' } 

function createJambScores(eng, govt, lit, crk) {
    return {
      eng: eng,
      govt: govt,
      lit: lit,
      crk: crk,
    }
} 

let Score = createJambScores(70, 85, 82, 94 );
console.log(Score);

//{ eng: 70, govt: 85, lit: 82, crk: 94 }
