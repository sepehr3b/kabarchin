angular.module('starter.controllers', [])

    .controller('FeedControllerEco', function($scope, $http) {
      // init a empty scope variable
      $scope.fars_posts = [];

      // set the feed url
      var url = "http://www.farsnews.com/RSS?srv=2";
      // set the url to google, to convert the cml feed to json
      var google_converter = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=20&callback=JSON_CALLBACK&q=";

      // start the request
      var request = $http.jsonp(google_converter + encodeURIComponent(url));
      // after the request is successful
      request.success(function (res) {
        // pass the requested entries to the view
        $scope.fars_posts = res.responseData.feed.entries;

      })


      $scope.mehr_posts = [];

      // set the feed url
      var url = "http://www.mehrnews.com/rss/tp/25";
      // set the url to google, to convert the cml feed to json
      var google_converter = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=20&callback=JSON_CALLBACK&q=";

      // start the request
      var request = $http.jsonp(google_converter + encodeURIComponent(url));
      // after the request is successful
      request.success(function (res) {
        // pass the requested entries to the view
        $scope.mehr_posts = res.responseData.feed.entries;

      });


      $scope.jyc_posts = [];

      // set the feed url
      var url = "http://www.yjc.ir/fa/rss/6";
      // set the url to google, to convert the cml feed to json
      var google_converter = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=20&callback=JSON_CALLBACK&q=";

      // start the request
      var request = $http.jsonp(google_converter + encodeURIComponent(url));
      // after the request is successful
      request.success(function (res) {
        // pass the requested entries to the view
        $scope.jyc_posts = res.responseData.feed.entries;

      });

      $scope.isna_posts = [];

      // set the feed url
      var url = "http://www.isna.ir/fa/Economy/feed";
      // set the url to google, to convert the cml feed to json
      var google_converter = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=20&callback=JSON_CALLBACK&q=";

      // start the request
      var request = $http.jsonp(google_converter + encodeURIComponent(url));
      // after the request is successful
      request.success(function (res) {
        // pass the requested entries to the view
        $scope.isna_posts = res.responseData.feed.entries;

      });



    })






//----------------------------------------------------------------------------------


    .controller('FeedControllerSol', function($scope, $http) {
      // init a empty scope variable
      $scope.fars_posts = [];

      // set the feed url
      var url = "http://www.farsnews.com/RSS?srv=3";
      // set the url to google, to convert the cml feed to json
      var google_converter = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=20&callback=JSON_CALLBACK&q=";

      // start the request
      var request = $http.jsonp(google_converter + encodeURIComponent(url));
      // after the request is successful
      request.success(function (res) {
        // pass the requested entries to the view
        $scope.fars_posts = res.responseData.feed.entries;

      })


      $scope.mehr_posts = [];

      // set the feed url
      var url = "http://www.mehrnews.com/rss/tp/6";
      // set the url to google, to convert the cml feed to json
      var google_converter = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=20&callback=JSON_CALLBACK&q=";

      // start the request
      var request = $http.jsonp(google_converter + encodeURIComponent(url));
      // after the request is successful
      request.success(function (res) {
        // pass the requested entries to the view
        $scope.mehr_posts = res.responseData.feed.entries;

      });


      $scope.jyc_posts = [];

      // set the feed url
      var url = "http://www.yjc.ir/fa/rss/6";
      // set the url to google, to convert the cml feed to json
      var google_converter = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=20&callback=JSON_CALLBACK&q=";

      // start the request
      var request = $http.jsonp(google_converter + encodeURIComponent(url));
      // after the request is successful
      request.success(function (res) {
        // pass the requested entries to the view
        $scope.jyc_posts = res.responseData.feed.entries;

      });

      $scope.isna_posts = [];

      // set the feed url
      var url = "http://www.isna.ir/fa/Social/feed";
      // set the url to google, to convert the cml feed to json
      var google_converter = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=20&callback=JSON_CALLBACK&q=";

      // start the request
      var request = $http.jsonp(google_converter + encodeURIComponent(url));
      // after the request is successful
      request.success(function (res) {
        // pass the requested entries to the view
        $scope.isna_posts = res.responseData.feed.entries;

      });



    })






//----------------------------------------------------------------------------------

    .controller('FeedControllerInt', function($scope, $http) {
      // init a empty scope variable
      $scope.fars_posts = [];

      // set the feed url
      var url = "http://www.farsnews.com/RSS?srv=6";
      // set the url to google, to convert the cml feed to json
      var google_converter = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=20&callback=JSON_CALLBACK&q=";

      // start the request
      var request = $http.jsonp(google_converter + encodeURIComponent(url));
      // after the request is successful
      request.success(function (res) {
        // pass the requested entries to the view
        $scope.fars_posts = res.responseData.feed.entries;

      })


      $scope.mehr_posts = [];

      // set the feed url
      var url = "http://www.mehrnews.com/rss/tp/8";
      // set the url to google, to convert the cml feed to json
      var google_converter = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=20&callback=JSON_CALLBACK&q=";

      // start the request
      var request = $http.jsonp(google_converter + encodeURIComponent(url));
      // after the request is successful
      request.success(function (res) {
        // pass the requested entries to the view
        $scope.mehr_posts = res.responseData.feed.entries;

      });


      $scope.jyc_posts = [];

      // set the feed url
      var url = "http://www.yjc.ir/fa/rss/9";
      // set the url to google, to convert the cml feed to json
      var google_converter = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=20&callback=JSON_CALLBACK&q=";

      // start the request
      var request = $http.jsonp(google_converter + encodeURIComponent(url));
      // after the request is successful
      request.success(function (res) {
        // pass the requested entries to the view
        $scope.jyc_posts = res.responseData.feed.entries;

      });

      $scope.isna_posts = [];

      // set the feed url
      var url = "http://www.isna.ir/fa/World/feed";
      // set the url to google, to convert the cml feed to json
      var google_converter = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=20&callback=JSON_CALLBACK&q=";

      // start the request
      var request = $http.jsonp(google_converter + encodeURIComponent(url));
      // after the request is successful
      request.success(function (res) {
        // pass the requested entries to the view
        $scope.isna_posts = res.responseData.feed.entries;

      });



    })



//--------------------------------------------------------------------------


    .controller('FeedControllerCul', function($scope, $http) {
      // init a empty scope variable
      $scope.fars_posts = [];

      // set the feed url
      var url = "http://www.farsnews.com/RSS?srv=7";
      // set the url to google, to convert the cml feed to json
      var google_converter = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=20&callback=JSON_CALLBACK&q=";

      // start the request
      var request = $http.jsonp(google_converter + encodeURIComponent(url));
      // after the request is successful
      request.success(function (res) {
        // pass the requested entries to the view
        $scope.fars_posts = res.responseData.feed.entries;

      })


      $scope.mehr_posts = [];

      // set the feed url
      var url = "http://www.mehrnews.com/rss/tp/2";
      // set the url to google, to convert the cml feed to json
      var google_converter = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=20&callback=JSON_CALLBACK&q=";

      // start the request
      var request = $http.jsonp(google_converter + encodeURIComponent(url));
      // after the request is successful
      request.success(function (res) {
        // pass the requested entries to the view
        $scope.mehr_posts = res.responseData.feed.entries;

      });


      $scope.jyc_posts = [];

      // set the feed url
      var url = "http://www.yjc.ir/fa/rss/4";
      // set the url to google, to convert the cml feed to json
      var google_converter = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=20&callback=JSON_CALLBACK&q=";

      // start the request
      var request = $http.jsonp(google_converter + encodeURIComponent(url));
      // after the request is successful
      request.success(function (res) {
        // pass the requested entries to the view
        $scope.jyc_posts = res.responseData.feed.entries;

      });

      $scope.isna_posts = [];

      // set the feed url
      var url = "http://www.isna.ir/fa/Culture%20and%20Art/feed";
      // set the url to google, to convert the cml feed to json
      var google_converter = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=20&callback=JSON_CALLBACK&q=";

      // start the request
      var request = $http.jsonp(google_converter + encodeURIComponent(url));
      // after the request is successful
      request.success(function (res) {
        // pass the requested entries to the view
        $scope.isna_posts = res.responseData.feed.entries;

      });



    })






//----------------------------------------------------------------------------------


    .controller('FeedControllerPol', function($scope, $http) {
      // init a empty scope variable
      $scope.fars_posts = [];

      // set the feed url
      var url = "http://www.farsnews.com/RSS?srv=1";
      // set the url to google, to convert the cml feed to json
      var google_converter = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=20&callback=JSON_CALLBACK&q=";

      // start the request
      var request = $http.jsonp(google_converter + encodeURIComponent(url));
      // after the request is successful
      request.success(function (res) {
        // pass the requested entries to the view
        $scope.fars_posts = res.responseData.feed.entries;

      })


      $scope.mehr_posts = [];

      // set the feed url
      var url = "http://www.mehrnews.com/rss/tp/7";
      // set the url to google, to convert the cml feed to json
      var google_converter = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=20&callback=JSON_CALLBACK&q=";

      // start the request
      var request = $http.jsonp(google_converter + encodeURIComponent(url));
      // after the request is successful
      request.success(function (res) {
        // pass the requested entries to the view
        $scope.mehr_posts = res.responseData.feed.entries;

      });


      $scope.jyc_posts = [];

      // set the feed url
      var url = "http://www.yjc.ir/fa/rss/3";
      // set the url to google, to convert the cml feed to json
      var google_converter = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=20&callback=JSON_CALLBACK&q=";

      // start the request
      var request = $http.jsonp(google_converter + encodeURIComponent(url));
      // after the request is successful
      request.success(function (res) {
        // pass the requested entries to the view
        $scope.jyc_posts = res.responseData.feed.entries;

      });

      $scope.isna_posts = [];

      // set the feed url
      var url = "http://www.isna.ir/fa/Politics/feed";
      // set the url to google, to convert the cml feed to json
      var google_converter = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=20&callback=JSON_CALLBACK&q=";

      // start the request
      var request = $http.jsonp(google_converter + encodeURIComponent(url));
      // after the request is successful
      request.success(function (res) {
        // pass the requested entries to the view
        $scope.isna_posts = res.responseData.feed.entries;

      });



    })






//----------------------------------------------------------------------------------



    .controller('FeedControllerSpt', function($scope, $http) {
      // init a empty scope variable
      $scope.fars_posts = [];

      // set the feed url
      var url = "http://www.farsnews.com/RSS?srv=4";
      // set the url to google, to convert the cml feed to json
      var google_converter = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=20&callback=JSON_CALLBACK&q=";

      // start the request
      var request = $http.jsonp(google_converter + encodeURIComponent(url));
      // after the request is successful
      request.success(function (res) {
        // pass the requested entries to the view
        $scope.fars_posts = res.responseData.feed.entries;

      })


      $scope.mehr_posts = [];

      // set the feed url
      var url = "http://www.mehrnews.com/rss/tp/9";
      // set the url to google, to convert the cml feed to json
      var google_converter = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=20&callback=JSON_CALLBACK&q=";

      // start the request
      var request = $http.jsonp(google_converter + encodeURIComponent(url));
      // after the request is successful
      request.success(function (res) {
        // pass the requested entries to the view
        $scope.mehr_posts = res.responseData.feed.entries;

      });


      $scope.jyc_posts = [];

      // set the feed url
      var url = "http://www.yjc.ir/fa/rss/3";
      // set the url to google, to convert the cml feed to json
      var google_converter = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=20&callback=JSON_CALLBACK&q=";

      // start the request
      var request = $http.jsonp(google_converter + encodeURIComponent(url));
      // after the request is successful
      request.success(function (res) {
        // pass the requested entries to the view
        $scope.jyc_posts = res.responseData.feed.entries;

      });

      $scope.isna_posts = [];

      // set the feed url
      var url = "http://www.isna.ir/fa/Sports/feed";
      // set the url to google, to convert the cml feed to json
      var google_converter = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=20&callback=JSON_CALLBACK&q=";

      // start the request
      var request = $http.jsonp(google_converter + encodeURIComponent(url));
      // after the request is successful
      request.success(function (res) {
        // pass the requested entries to the view
        $scope.isna_posts = res.responseData.feed.entries;

      });



    })





//------------------------------------------------------------------
    .controller('FeedControllerNw', function($scope, $http) {
      // init a empty scope variable
      $scope.fars_posts = [];

      // set the feed url
      var url = "http://www.farsnews.com/RSS";
      // set the url to google, to convert the cml feed to json
      var google_converter = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=20&callback=JSON_CALLBACK&q=";

      // start the request
      var request = $http.jsonp(google_converter + encodeURIComponent(url));
      // after the request is successful
      request.success(function (res) {
        // pass the requested entries to the view
        $scope.fars_posts = res.responseData.feed.entries;

      })


      $scope.mehr_posts = [];

      // set the feed url
      var url = "http://www.mehrnews.com/rss";
      // set the url to google, to convert the cml feed to json
      var google_converter = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=20&callback=JSON_CALLBACK&q=";

      // start the request
      var request = $http.jsonp(google_converter + encodeURIComponent(url));
      // after the request is successful
      request.success(function (res) {
        // pass the requested entries to the view
        $scope.mehr_posts = res.responseData.feed.entries;

      });


      $scope.jyc_posts = [];

      // set the feed url
      var url = "http://www.yjc.ir/fa/rss/allnews";
      // set the url to google, to convert the cml feed to json
      var google_converter = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=20&callback=JSON_CALLBACK&q=";

      // start the request
      var request = $http.jsonp(google_converter + encodeURIComponent(url));
      // after the request is successful
      request.success(function (res) {
        // pass the requested entries to the view
        $scope.jyc_posts = res.responseData.feed.entries;

      });

      $scope.isna_posts = [];

      // set the feed url
      var url = "http://www.isna.ir/fa/mainPage/feed";
      // set the url to google, to convert the cml feed to json
      var google_converter = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=20&callback=JSON_CALLBACK&q=";

      // start the request
      var request = $http.jsonp(google_converter + encodeURIComponent(url));
      // after the request is successful
      request.success(function (res) {
        // pass the requested entries to the view
        $scope.isna_posts = res.responseData.feed.entries;

      });



})


//------------------------------------------------------------------
    .controller('FeedControllerPaper', function($scope, $http) {
      // init a empty scope variable
      $scope.ham_posts = [];

      // set the feed url
      var url = "http://www.hamshahrionline.ir/rss";
      // set the url to google, to convert the cml feed to json
      var google_converter = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=20&callback=JSON_CALLBACK&q=";

      // start the request
      var request = $http.jsonp(google_converter + encodeURIComponent(url));
      // after the request is successful
      request.success(function (res) {
        // pass the requested entries to the view
        $scope.ham_posts = res.responseData.feed.entries;

      })


      $scope.jam_posts = [];

      // set the feed url
      var url = "http://www.jamejamonline.ir/rssfeed?code=01";
      // set the url to google, to convert the cml feed to json
      var google_converter = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=20&callback=JSON_CALLBACK&q=";

      // start the request
      var request = $http.jsonp(google_converter + encodeURIComponent(url));
      // after the request is successful
      request.success(function (res) {
        // pass the requested entries to the view
        $scope.jam_posts = res.responseData.feed.entries;

      });


      $scope.vv_posts = [];

      // set the feed url
      var url = "http://www.khabarsport.com/rss";
      // set the url to google, to convert the cml feed to json
      var google_converter = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=20&callback=JSON_CALLBACK&q=";

      // start the request
      var request = $http.jsonp(google_converter + encodeURIComponent(url));
      // after the request is successful
      request.success(function (res) {
        // pass the requested entries to the view
        $scope.vv_posts = res.responseData.feed.entries;

      });


    })


//------------------------------------------------------------------
    .controller('FeedControllerV3', function($scope, $http) {
      // init a empty scope variable
      $scope.fars_posts = [];

      // set the feed url
      var url = "http://www.varzesh3.com/rss/all";
      // set the url to google, to convert the cml feed to json
      var google_converter = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=20&callback=JSON_CALLBACK&q=";

      // start the request
      var request = $http.jsonp(google_converter + encodeURIComponent(url));
      // after the request is successful
      request.success(function (res) {
        // pass the requested entries to the view
        $scope.fars_posts = res.responseData.feed.entries;

      })


      $scope.mehr_posts = [];

      // set the feed url
      var url = "http://www.varzesh3.com/rss/domesticFootball";
      // set the url to google, to convert the cml feed to json
      var google_converter = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=20&callback=JSON_CALLBACK&q=";

      // start the request
      var request = $http.jsonp(google_converter + encodeURIComponent(url));
      // after the request is successful
      request.success(function (res) {
        // pass the requested entries to the view
        $scope.mehr_posts = res.responseData.feed.entries;

      });


      $scope.jyc_posts = [];

      // set the feed url
      var url = "http://www.varzesh3.com/rss/otherSports";
      // set the url to google, to convert the cml feed to json
      var google_converter = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=20&callback=JSON_CALLBACK&q=";

      // start the request
      var request = $http.jsonp(google_converter + encodeURIComponent(url));
      // after the request is successful
      request.success(function (res) {
        // pass the requested entries to the view
        $scope.jyc_posts = res.responseData.feed.entries;

      });

      $scope.isna_posts = [];

      // set the feed url
      var url = "http://www.varzesh3.com/rss/foreignFootball";
      // set the url to google, to convert the cml feed to json
      var google_converter = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=20&callback=JSON_CALLBACK&q=";

      // start the request
      var request = $http.jsonp(google_converter + encodeURIComponent(url));
      // after the request is successful
      request.success(function (res) {
        // pass the requested entries to the view
        $scope.isna_posts = res.responseData.feed.entries;

      });



    })



//----------------------------------------------------------------------------------

    .controller('AppCtrl', function($scope, $ionicModal, $timeout) {
})

;

angular.module('alert',[])
    .controller('PopupCtrl',function($scope, $ionicPopup) {

      $scope.showAlert = function() {
        var alertPopup = $ionicPopup.alert({
          title: '!راهنما',
          templateUrl: 'templates/Pop.html',
          buttons:[{
            text:'بازگشت',
            type: 'button-calm'

          }]
        });
      }});

//--------------------------------------------------------------

angular.module('ionicApp', ['ionic'])


    .controller('HomeCtrl', function($scope) {

      $scope.showMap = true;
      $scope.showList = false;
    })
.controller('HomeCtrl2', function($scope) {

  $scope.showMap2 = true;
  $scope.showList2 = false;
})

.controller('HomeCtrl3', function($scope) {

  $scope.showMap3 = true;
  $scope.showList3 = false;
})

.controller('HomeCtrl4', function($scope) {

  $scope.showMap4 = true;
  $scope.showList4 = false;
})



angular.module('Up',[])
    .controller('UpCtrl',function($scope, $ionicScrollDelegate) {

      $scope.scrollTop = function() {
        $ionicScrollDelegate.scrollTop();
      };
      $scope.scrollBo = function() {
        $ionicScrollDelegate.scrollBottom();
      };
    })