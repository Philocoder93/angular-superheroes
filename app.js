let superheroData = [
  {name: 'Rorschach', phone: 2025550101, img_url: 'https://i.ytimg.com/vi/6Za1a3gVf3g/maxresdefault.jpg', affiliation: 'DC'},
  {name: 'Silk Spectre', phone: 2025550138, img_url: 'http://insidepulse.com/wp-content/uploads/2016/05/Before-Watchmen-Dr-Manhattan-4-spoilers-DC-Comics-Rebirth-A.jpg', affiliation: 'DC'},
  {name: 'Dr. Manhattan', phone: 2025550198, img_url: 'http://media.comicbook.com/wp-content/uploads/2012/08/DRMAN_Variant_PaulPope.jpg', affiliation: 'DC'},
  {name: 'Ozymandias', phone: 2025550173, img_url: 'https://s-media-cache-ak0.pinimg.com/originals/04/b7/63/04b763b83064dbd07b77712e1dcc9e77.jpg', affiliation: 'DC'},
  {name: 'Nite Owl', phone: 2025550178, img_url: 'http://www.geeksofdoom.com/GoD/img/2012/02/2012-02-01-nite_owl_by_joe_and_andy_kubert.jpg', affiliation: 'DC'},
  {name: 'The Comedian', phone: 2025550167, img_url: 'https://s-media-cache-ak0.pinimg.com/originals/c9/30/07/c93007e3ae8a06619d5146f9dcacde5a.jpg', affiliation: 'DC'}
]

angular
  .module("superheroApp", [])
  .controller("superheroCtrl", [ superheroController ])

function superheroController () {
  this.display = -1
  this.superheroes = superheroData
  this.click = function (input) {
    this.display = input
  }
}
