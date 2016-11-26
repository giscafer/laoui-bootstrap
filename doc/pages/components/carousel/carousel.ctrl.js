require('../../../images/carousel1.jpg');
require('../../../images/carousel2.jpg');
require('../../../images/carousel3.jpg');
require('../../../images/carousel4.jpg');
require('../../../images/carousel5.jpg');
export default class CarouselDemoCtrl {
    constructor($scope) {
        this._$scope = $scope;
       
        this.myInterval = 5000;
        this.noWrapSlides = false;
        this.active = 0;
        this.slides = [];
        this.currIndex = 0;
        this.randomize = function() {
            let indexes = this.generateIndexesArray();
            this.assignNewIndexesToSlides(indexes);
        };
        this.addSlide = function(i) {
            let newWidth = 600 + this.slides.length + 1;
            this.slides.push({
            // image: '//unsplash.it/' + newWidth + '/300',
            image: '../../../images/carousel'+i+'.jpg',
            text: ['Nice image','Awesome photograph','That is so cool','I love that'][this.slides.length % 4],
            id: this.currIndex++
            });
        };

        for (let i = 1; i < 6; i++) {
            this.addSlide(i);
        }
        

       
    }
 

  // Randomize logic below

  assignNewIndexesToSlides(indexes) {
    for (let i = 0, l = this.slides.length; i < l; i++) {
      this.slides[i].id = indexes.pop();
    }
  }

  generateIndexesArray() {
    let indexes = [];
    for (let i = 0; i < this.currIndex; ++i) {
      indexes[i] = i;
    }
    return this.shuffle(indexes);
  }

  // http://stackoverflow.com/questions/962802#962890
  shuffle(array) {
    let tmp, current, top = array.length;

    if (top) {
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
    }

    return array;
  }
}
