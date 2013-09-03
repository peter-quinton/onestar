/**
 *  @author Peter Quinton
 *
 *
 *
 *
 *
 */

// Setup namespace
var org = org || {};
org.woodhaven = org.woodhaven || {};


(function($) {
  "use strict";

  var ACTIVE_CLASS = "active",
    NEXT = "next",
    PREV = "prev";

  /**
   * Function to switch the "active" class between two elements
   *
   * @param curr @type Element
   * @param next @type Element
   */
  function toggleActiveClass(curr, next) {
    next.classList.add(NEXT);
    curr.classList.remove(ACTIVE_CLASS);
    next.classList.add(ACTIVE_CLASS);
    next.classList.remove(NEXT);
  }

  /**
   *
   * Find the active element and return it's index
   *
   * @param carouselEl @type Array<DomElement>
   */
  function findActiveElement(carouselEl) {
    for (var I = carouselEl.length; I--;) {
      if (carouselEl[I].classList.contains(ACTIVE_CLASS))
         return I;
    }
    return -1;
  }


  /**
   *
   * @module
   */
  org.woodhaven.Carousel = {

    init: function() {
      $(".carousel-control.left").click(this.slide);
      $(".carousel-control.right").click(this.slide);
    },


    slide: function(e) {
      var carouselItems = $(".carousel-item"),
        numItems = carouselItems.length,
        moveRight = e.target.classList.contains("right"),
        actIndex;
      // Get out, if only one element
      if (numItems  <= 1) {
        return;
      }

      actIndex = findActiveElement(carouselItems);
      if (actIndex === -1) return;

      // If moving to right, and active picture is at the end
      if (moveRight && actIndex === (numItems-1)) {
        toggleActiveClass(carouselItems[actIndex], carouselItems[0])
      // if moving to the left and at the beginning of the list
      } else if (!moveRight && actIndex === 0) {
        toggleActiveClass(carouselItems[0], carouselItems[numItems-1]);
      // otherwise, in the middle, move left or right as appropriate
      } else {
        moveRight ? toggleActiveClass(carouselItems[actIndex], carouselItems[++actIndex])
          : toggleActiveClass(carouselItems[actIndex], carouselItems[--actIndex]);
      }
    }
  };


  org.woodhaven.Carousel.init();


})(jQuery)