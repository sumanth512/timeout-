var app = angular.module("myApp")
app.controller("table", function ($scope, $http) {
    $http.get("jsonFile/json.json")
        .then(function (response) {
            $scope.students = response.data;
        })
        .catch(function (response) {

        })

});


app.controller('menu', function ($scope) {
    $scope.menus = [
        {"item": "MENU1"},
        {"item": "MENU2"},
        {"item": "MENU3"}
    ]

});
app.directive('user', function () {
    return {
        restrict: 'E',
        scope: {
// sumanth:"="
        },
        controller: (function ($scope) {
            $scope.details = [
                $scope.sumanth = {
                    fname: "sumanth",
                    lname: "reddy",
                    email: "sumanthreddy@gmail.com",
                    // image: "http://i164.photobucket.com/albums/u8/hemi1hemi/COLOR/COL9-6.jpg"
                },
                $scope.dileep = {
                    fname: "dileep",
                    lname: "reddy",
                    email: "dileep@gmail.com",
                    // image: "http://i164.photobucket.com/albums/u8/hemi1hemi/COLOR/COL9-6.jpg"
                },

                $scope.shankar = {
                    fname: "shankar",
                    lname: "reddy",
                    email: "shankar@gmail.com",
                    // image: "http://i164.photobucket.com/albums/u8/hemi1hemi/COLOR/COL9-6.jpg"
                },

                $scope.madhu = {
                    fname: "madhu",
                    lname: "reddy",
                    email: "madhu@gmail.com",
                    // image: "http://i164.photobucket.com/albums/u8/hemi1hemi/COLOR/COL9-6.jpg"
                }
            ]
        }),
        template: '<img src="{{sumanth.image}}"></br><label> fname: </label>{{sumanth.fname}}</br><label>lname:</label> {{sumanth.lname}}</br><label> email:</label>{{sumanth.email}}'
        + '<img src="{{madhu.image}}"></br><label> fname: </label>{{madhu.fname}}</br><label>lname:</label> {{madhu.lname}}</br><label> email:</label>{{madhu.email}}'
    };
});


app.controller('button', function ($scope) {
    $scope.buttons = [];
    var count = 1;
    $scope.button = function () {
        $scope.buttons.push({
            text: 'button' + count++
        })

    }
    $scope.removeButton = function (button) {
        var index = $scope.buttons.indexOf(button)
        $scope.buttons.splice(index, 1);
    }

});


app.directive('fadeIn', function () {
    return {
        restrict: "E",
        link: function (scope, element, attr) {
            var a = 0.1;
            var e = element
            var duration = 100;
            var bg;
            if (typeof attr.bg != "undefined") {
                bg = attr.bg;
            } else {
                bg = "black";
            }
            if (typeof attr.duration != "undefined") {
                duration = attr.duration;
            }
            function fade() {
                var b = setInterval(function () {
                    e.css("opacity", a);
                    a = a + 0.1;
                    if (a > 0.9) {
                        var d = 1
                        var c = setInterval(function () {
                            e.css("background-color", bg);
                            e.css("opacity", d);
                            d = d - 0.1;

                        }, duration)

                    }

                }, duration);
            }

            fade();
        }
    }
})

app.directive('zoom', function () {
    return {
        restrict: "E",
        link: function (scope, element, attr) {
            var wid = 100;
            var ht = 100;
            var a = wid
            var c = ht

            if (typeof attr.wid != "undefined") {
                wid = attr.wid
            }
            if (typeof attr.ht != "undefined") {
                ht = attr.ht
            }
            var b = setInterval(function () {
                element.css("width", a);
                element.css("background-color", "green");
                element.css("height", c);
                a = a + 10;
                c = c + 10;
                if (c > 500) {
                    var e = 500
                    var f = 500
                    var g = setInterval(function () {
                        element.css("width", e);
                        element.css("height", f);
                        e = e - 20;
                        f = f - 20;
                    }, 100);
                }

            }, 100);


        }
    }
})

app.directive('slide', function () {
    return {
        restrict: "E",
        link: function (scope, element, attr) {
            var a = 10;
            var duration = 10000;
            if (typeof attr.duration != "undefined") {
                duration = attr.duration;
            }
            // element.css({position: "relative", right: 100,});
            var b = setInterval(function () {
                element.css("left", a);
                a = a + 10;
                if (a > 500) {
                    var c = 500;
                    // element.css({position: "relative", right: 100,});
                    var d = setInterval(function () {
                        element.css("left", c);
                        c = c - 10;
                    }, duration);
                }
            }, duration);


        }
    }
})
    app.controller('cks',function ($scope,$cookies) {
    $scope.set = $cookies.get('cookie')
    $scope.hit=function(val){
       $cookies.put('cookie',val)

    }
})

