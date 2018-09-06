"use strict"
let arrayLike = [{
    name: 123,
    value: 123
  },
  {
    name: 456,
    value: 456
  },
]

var Days;
(function (Days) {
  Days[Days["Sun"] = 0] = "Sun";
  Days[Days["Mon"] = 1] = "Mon";
  Days[Days["Tue"] = 2] = "Tue";
  Days[Days["Wed"] = 3] = "Wed";
  Days[Days["Thu"] = 4] = "Thu";
  Days[Days["Fri"] = 5] = "Fri";
  Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));

// for (let v in Days) {
//   console.log(v)
// }

console.log(Days)