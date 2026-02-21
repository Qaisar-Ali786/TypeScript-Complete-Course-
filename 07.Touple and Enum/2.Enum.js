"use strict";
// enum is a way to define a set of name constant.
// enum allow you to define a collection of related values that can be used interchangably in your
// code
Object.defineProperty(exports, "__esModule", { value: true });
var weatherCondition;
(function (weatherCondition) {
    weatherCondition[weatherCondition["sunny"] = 0] = "sunny";
    weatherCondition[weatherCondition["cloudy"] = 1] = "cloudy";
    weatherCondition[weatherCondition["raining"] = 2] = "raining";
    weatherCondition[weatherCondition["snowy"] = 3] = "snowy";
})(weatherCondition || (weatherCondition = {}));
console.log(weatherCondition.snowy);
//# sourceMappingURL=2.Enum.js.map