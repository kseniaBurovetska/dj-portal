import angular from 'angular';
import FormMetadata from "./form-metadata.js";
import FanButton from "./form-fan-button.js";
import FormIO from "./form-io.js";
import UserUtils from "./form-users.js";
import AnswerUtils from "./form-answer.js";

angular
.module("formUtility", [])

.factory("formMetadata",[() => scope => new FormMetadata(scope)])
.factory("formFanButton",[() => scope => new FanButton(scope)])
.factory("formAnswerUtils",[() => scope => new AnswerUtils(scope)])
.factory("formIO",[() => (scope,transport) => new FormIO(scope, transport)])
.factory("formUserUtils",[() => (scope,userList) => new UserUtils(scope,userList)])

.factory("objectsIsEqual",[() => (oldValue, newValue) => {
	return _.matches(oldValue)(newValue) && _.matches(newValue)(oldValue)
}])

.factory("truncString", [() => (value, length) => {
    length = length || 20;
    return ( value.toString().length <= length )
      ? value.toString()
      : ( (value.toString().length - length) > 10 )
        ? value.toString().substring(0,length)+'...'
        : value.toString()
  }
])


.factory("testMessage",[() => (scope) => 

	`
==============================================================        

    Form.config:

==============================================================        

${scope.$filter("json")(scope.widget.form)}



==============================================================        

    Answer:

==============================================================        

${scope.$filter("json")(scope.answer)}



==============================================================        
`
])