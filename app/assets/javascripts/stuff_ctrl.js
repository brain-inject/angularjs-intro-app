(function(){
  "use strict";

  angular.module("app").controller("stuffCtrl", function($scope){

    $scope.reviews = [
     {
        text: "This is fun",
        rating: 5,
        reviewer: "Bill"
     },
     {
        text: "React has nothing on angular",
        rating: 8,
        reviewer: "Matt Jones"
     },
     {
        text: "Who's buying later tonight?",
        rating: 4,
        reviewer: "Bob the builder"
     }];

    $scope.isPositive = function(review){
      return review.indexOf('stupid') === -1;
    };

    $scope.addReview = function(reviewText, reviewRating, reviewReviewer){
      if (reviewText !== ''){
        var reviewObject = {
          text: reviewText,
          rating: reviewRating,
          reviewer: reviewReviewer
        };
        $scope.reviews.push(reviewObject);
        $scope.newReviewText = '';
        $scope.newReviewRating = '';
        $scope.newReviewReviewer = '';
      }
    };

    $scope.deleteReview = function(index){
      $scope.reviews.splice(index, 1);
    };

    window.scope = $scope;
  });
}());