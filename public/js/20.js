(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ \"./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js\");\n\nfunction _objectWithoutProperties(source, excluded) {\n  if (source == null) return {};\n  var target = objectWithoutPropertiesLoose(source, excluded);\n  var key, i;\n\n  if (Object.getOwnPropertySymbols) {\n    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n\n    for (i = 0; i < sourceSymbolKeys.length; i++) {\n      key = sourceSymbolKeys[i];\n      if (excluded.indexOf(key) >= 0) continue;\n      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n      target[key] = source[key];\n    }\n  }\n\n  return target;\n}\n\nmodule.exports = _objectWithoutProperties;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/objectWithoutProperties.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _objectWithoutPropertiesLoose(source, excluded) {\n  if (source == null) return {};\n  var target = {};\n  var sourceKeys = Object.keys(source);\n  var key, i;\n\n  for (i = 0; i < sourceKeys.length; i++) {\n    key = sourceKeys[i];\n    if (excluded.indexOf(key) >= 0) continue;\n    target[key] = source[key];\n  }\n\n  return target;\n}\n\nmodule.exports = _objectWithoutPropertiesLoose;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js?");

/***/ }),

/***/ "./resources/js/forms/components/CheckBoxField.tsx":
/*!*********************************************************!*\
  !*** ./resources/js/forms/components/CheckBoxField.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CheckboxField; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction CheckboxField(_ref) {\n  var name = _ref.name,\n      label = _ref.label,\n      value = _ref.value,\n      className = _ref.className,\n      onChange = _ref.onChange;\n\n  function handleChange(event) {\n    onChange(event.target.checked);\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    className: \"flex items-center justify-start text-gray-600 \".concat(className),\n    tabIndex: 0\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    className: \"form-checkbox text-green-300 mr-2\",\n    type: \"checkbox\",\n    id: name,\n    name: name,\n    checked: value,\n    onChange: handleChange,\n    tabIndex: -1\n  }), !!label && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"flex-1\"\n  }, label));\n}\n\n//# sourceURL=webpack:///./resources/js/forms/components/CheckBoxField.tsx?");

/***/ }),

/***/ "./resources/js/forms/components/CheckBoxesField.tsx":
/*!***********************************************************!*\
  !*** ./resources/js/forms/components/CheckBoxesField.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CheckboxesField; });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! forms */ \"./resources/js/forms/index.tsx\");\n\n\n\n\nfunction CheckboxesField(_ref) {\n  var name = _ref.name,\n      _ref$options = _ref.options,\n      options = _ref$options === void 0 ? [] : _ref$options,\n      value = _ref.value,\n      onChange = _ref.onChange;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(value || []),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),\n      checkBoxValues = _useState2[0],\n      setCheckboxValues = _useState2[1];\n\n  function handleInput(checked, value) {\n    var updatedCheckBoxValues = checked ? [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(checkBoxValues), [value]) : checkBoxValues.filter(function (o) {\n      return o !== value;\n    });\n    setCheckboxValues(updatedCheckBoxValues);\n    onChange(updatedCheckBoxValues);\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"checkbox-group\"\n  }, options.map(function (option) {\n    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(forms__WEBPACK_IMPORTED_MODULE_3__[\"CheckboxField\"], {\n      key: option.value,\n      name: \"\".concat(name, \"[]\"),\n      value: checkBoxValues.includes(option.value),\n      onChange: function onChange(checked) {\n        return handleInput(checked, option.value);\n      },\n      label: option.label\n    });\n  }), !checkBoxValues.length && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"input\", {\n    type: \"hidden\",\n    name: \"\".concat(name, \"[]\"),\n    value: \"\"\n  }));\n}\n\n//# sourceURL=webpack:///./resources/js/forms/components/CheckBoxesField.tsx?");

/***/ }),

/***/ "./resources/js/forms/components/DateField.tsx":
/*!*****************************************************!*\
  !*** ./resources/js/forms/components/DateField.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DateField; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-datepicker */ \"./node_modules/react-datepicker/dist/react-datepicker.min.js\");\n/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/locale */ \"./node_modules/date-fns/esm/locale/index.js\");\n/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Field */ \"./resources/js/forms/components/Field.tsx\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/index.js\");\n\n\n\n\n\n\nObject(react_datepicker__WEBPACK_IMPORTED_MODULE_2__[\"registerLocale\"])('en-GB', date_fns_locale__WEBPACK_IMPORTED_MODULE_3__[\"enGB\"]);\nfunction DateField(_ref) {\n  var name = _ref.name,\n      label = _ref.label,\n      error = _ref.error,\n      value = _ref.value,\n      onChange = _ref.onChange,\n      required = _ref.required;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(value ? new Date(value) : null),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      date = _useState2[0],\n      setDate = _useState2[1];\n\n  var datePickerRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useLayoutEffect\"])(function () {\n    setDate(value ? new Date(value) : null);\n  }, [value]);\n\n  function handleChange(newDate) {\n    onChange(newDate ? Object(date_fns__WEBPACK_IMPORTED_MODULE_5__[\"format\"])(newDate, 'yyyy-MM-dd HH:mm:00') : null);\n    setDate(newDate);\n  }\n\n  function stopEnterKeyPropagation(event) {\n    if (event.key === 'Enter') {\n      event.preventDefault();\n\n      if (datePickerRef.current) {\n        datePickerRef.current.setOpen(false);\n      }\n    }\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Field__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    label: label,\n    name: name,\n    required: required,\n    error: error,\n    onKeyUp: stopEnterKeyPropagation,\n    onKeyPress: stopEnterKeyPropagation\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    ref: datePickerRef,\n    locale: \"en-GB\",\n    selected: date,\n    onChange: handleChange,\n    inline: true,\n    showTimeSelect: true,\n    timeFormat: \"HH:mm\",\n    timeIntervals: 10,\n    timeCaption: \"time\",\n    isClearable: true\n  }));\n}\n\n//# sourceURL=webpack:///./resources/js/forms/components/DateField.tsx?");

/***/ }),

/***/ "./resources/js/forms/components/Field.tsx":
/*!*************************************************!*\
  !*** ./resources/js/forms/components/Field.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Field; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Field(_ref) {\n  var name = _ref.name,\n      label = _ref.label,\n      required = _ref.required,\n      children = _ref.children,\n      error = _ref.error,\n      _ref$className = _ref.className,\n      className = _ref$className === void 0 ? '' : _ref$className;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"\".concat(className)\n  }, !!label && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    className: \"text-gray-600\",\n    htmlFor: name\n  }, label, \" \", required === false ? '' : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"text-gray-400\"\n  }, \"*\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, children, !!error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"mt-2 text-sm text-red-400\"\n  }, error)));\n}\n\n//# sourceURL=webpack:///./resources/js/forms/components/Field.tsx?");

/***/ }),

/***/ "./resources/js/forms/components/SelectField.tsx":
/*!*******************************************************!*\
  !*** ./resources/js/forms/components/SelectField.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SelectField; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field */ \"./resources/js/forms/components/Field.tsx\");\n\n\nfunction SelectField(_ref) {\n  var options = _ref.options,\n      name = _ref.name,\n      label = _ref.label,\n      error = _ref.error,\n      value = _ref.value,\n      required = _ref.required,\n      _ref$className = _ref.className,\n      className = _ref$className === void 0 ? '' : _ref$className,\n      onChange = _ref.onChange;\n\n  function handleChange(event) {\n    onChange(event.target.value);\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Field__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    label: label,\n    name: name,\n    error: error,\n    required: required,\n    className: \"grid gap-1 \".concat(className)\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"select\", {\n    className: \"form-select form-input w-full max-w-2xl\",\n    id: name,\n    name: name,\n    required: required,\n    value: value || '',\n    onChange: handleChange\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n    value: \"\",\n    disabled: true\n  }, \"Select an option\"), options.map(function (_ref2, index) {\n    var label = _ref2.label,\n        value = _ref2.value;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n      key: index,\n      value: value\n    }, label);\n  })));\n}\n\n//# sourceURL=webpack:///./resources/js/forms/components/SelectField.tsx?");

/***/ }),

/***/ "./resources/js/forms/components/TextField.tsx":
/*!*****************************************************!*\
  !*** ./resources/js/forms/components/TextField.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TextField; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field */ \"./resources/js/forms/components/Field.tsx\");\n\n\nfunction TextField(_ref) {\n  var _ref$type = _ref.type,\n      type = _ref$type === void 0 ? 'text' : _ref$type,\n      name = _ref.name,\n      label = _ref.label,\n      error = _ref.error,\n      value = _ref.value,\n      required = _ref.required,\n      placeholder = _ref.placeholder,\n      _ref$className = _ref.className,\n      className = _ref$className === void 0 ? '' : _ref$className,\n      onChange = _ref.onChange;\n\n  function handleChange(event) {\n    onChange(event.target.value);\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Field__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    label: label,\n    name: name,\n    error: error,\n    required: required,\n    className: \"grid gap-1 \".concat(className)\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    className: \"form-input w-full max-w-2xl\",\n    type: type,\n    id: name,\n    name: name,\n    required: required,\n    placeholder: placeholder,\n    value: value || '',\n    autoComplete: \"off\",\n    onChange: handleChange\n  }));\n}\n\n//# sourceURL=webpack:///./resources/js/forms/components/TextField.tsx?");

/***/ }),

/***/ "./resources/js/forms/hooks/useForm.tsx":
/*!**********************************************!*\
  !*** ./resources/js/forms/hooks/useForm.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return useForm; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia */ \"./node_modules/@inertiajs/inertia/dist/index.js\");\n/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @inertiajs/inertia-react */ \"./node_modules/@inertiajs/inertia-react/dist/index.js\");\n/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction useForm(initialValues) {\n  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n  var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'POST';\n\n  var _usePage = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__[\"usePage\"])(),\n      errors = _usePage.errors;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(initialValues),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      values = _useState2[0],\n      setValues = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),\n      hasChanged = _useState4[0],\n      setHasChanged = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    window.addEventListener('beforeunload', function (e) {\n      if (!hasChanged) {\n        return undefined;\n      }\n\n      var confirmationMessage = 'Your changes will be lost';\n      (e || window.event).returnValue = confirmationMessage;\n      return confirmationMessage;\n    });\n    return function () {\n      window.onbeforeunload = null;\n    };\n  }, []);\n\n  function submit(event) {\n    if (event) {\n      event.preventDefault();\n    }\n\n    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__[\"Inertia\"].visit(action, {\n      method: method,\n      data: values,\n      preserveState: true\n    });\n  }\n\n  function reset() {\n    var newValues = Object(lodash__WEBPACK_IMPORTED_MODULE_2__[\"cloneDeep\"])(values);\n\n    for (var _i = 0, _Object$entries = Object.entries(newValues); _i < _Object$entries.length; _i++) {\n      var _Object$entries$_i = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_Object$entries[_i], 1),\n          fieldName = _Object$entries$_i[0];\n\n      Object(lodash__WEBPACK_IMPORTED_MODULE_2__[\"set\"])(newValues, fieldName, '');\n    }\n\n    setValues(newValues);\n  }\n\n  function getInputProps(fieldName) {\n    function handleChange(value) {\n      var newValues = Object(lodash__WEBPACK_IMPORTED_MODULE_2__[\"cloneDeep\"])(values);\n      Object(lodash__WEBPACK_IMPORTED_MODULE_2__[\"set\"])(newValues, fieldName, value);\n      setValues(newValues);\n      setHasChanged(true);\n    }\n\n    var value = Object(lodash__WEBPACK_IMPORTED_MODULE_2__[\"get\"])(values, fieldName);\n\n    if (value === undefined) {\n      console.error(\"The form value for [\".concat(fieldName, \"] was undefined.\"));\n    }\n\n    return {\n      name: fieldName,\n      value: value,\n      error: Object(lodash__WEBPACK_IMPORTED_MODULE_2__[\"get\"])(errors, [fieldName, 0], ''),\n      onChange: handleChange\n    };\n  }\n\n  return {\n    values: values,\n    setValues: setValues,\n    reset: reset,\n    submit: submit,\n    getInputProps: getInputProps\n  };\n}\n\n//# sourceURL=webpack:///./resources/js/forms/hooks/useForm.tsx?");

/***/ }),

/***/ "./resources/js/forms/index.tsx":
/*!**************************************!*\
  !*** ./resources/js/forms/index.tsx ***!
  \**************************************/
/*! exports provided: CheckboxField, CheckboxesField, DateField, SelectField, TextAreaField, TextField, useForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_CheckBoxField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/CheckBoxField */ \"./resources/js/forms/components/CheckBoxField.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"CheckboxField\", function() { return _components_CheckBoxField__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _components_CheckBoxesField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/CheckBoxesField */ \"./resources/js/forms/components/CheckBoxesField.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"CheckboxesField\", function() { return _components_CheckBoxesField__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _components_DateField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/DateField */ \"./resources/js/forms/components/DateField.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"DateField\", function() { return _components_DateField__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _components_SelectField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/SelectField */ \"./resources/js/forms/components/SelectField.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"SelectField\", function() { return _components_SelectField__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _components_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/TextField */ \"./resources/js/forms/components/TextField.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"TextAreaField\", function() { return _components_TextField__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"TextField\", function() { return _components_TextField__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _hooks_useForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks/useForm */ \"./resources/js/forms/hooks/useForm.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"useForm\", function() { return _hooks_useForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./resources/js/forms/index.tsx?");

/***/ }),

/***/ "./resources/js/views/subscribers/Import.tsx":
/*!***************************************************!*\
  !*** ./resources/js/views/subscribers/Import.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Import; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @inertiajs/inertia-react */ \"./node_modules/@inertiajs/inertia-react/dist/index.js\");\n/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var views_layouts_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! views/layouts/Layout */ \"./resources/js/views/layouts/Layout.tsx\");\n/* harmony import */ var forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! forms */ \"./resources/js/forms/index.tsx\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/index.js\");\n/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../util/index */ \"./resources/js/util/index.ts\");\n/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @inertiajs/inertia */ \"./node_modules/@inertiajs/inertia/dist/index.js\");\n/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\nfunction Import(_ref) {\n  var subscriber_imports = _ref.subscriber_imports,\n      email_list_options = _ref.email_list_options,\n      links = _ref.links;\n  var form = Object(forms__WEBPACK_IMPORTED_MODULE_6__[\"useForm\"])({\n    email_list_id: ''\n  }, links.subscribers[\"import\"], 'PUT');\n\n  function handleDelete(_x) {\n    return _handleDelete.apply(this, arguments);\n  }\n\n  function _handleDelete() {\n    _handleDelete = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(\n    /*#__PURE__*/\n    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(subscriberImport) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              Object(_util_index__WEBPACK_IMPORTED_MODULE_8__[\"confirm\"])({\n                action: 'Delete',\n                buttonClassName: 'button-delete',\n                text: \"Are you sure you want to delete this import\",\n                onConfirm: function onConfirm() {\n                  return _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_9__[\"Inertia\"][\"delete\"](subscriberImport.links[\"delete\"]);\n                }\n              });\n\n            case 1:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _handleDelete.apply(this, arguments);\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(views_layouts_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    title: \"Import subscribers\"\n  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"main\", {\n    className: \"layout-main\"\n  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"section\", {\n    className: \"card card-grid\"\n  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"nav\", {\n    className: \"breadcrumbs\"\n  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"ul\", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__[\"InertiaLink\"], {\n    href: links.subscribers.index\n  }, \"Subscribers\")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"li\", null, \"Import subscribers\"))), subscriber_imports.length > 0 && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"h2\", null, \"Imports\"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"table\", {\n    className: \"table\"\n  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"thead\", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"tr\", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"th\", null, \"Status\"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"th\", null, \"Started at\"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"th\", null, \"Email list\"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"th\", {\n    className: \"th-numeric\"\n  }, \"Imported subscribers\"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"th\", {\n    className: \"th-numeric\"\n  }, \"Errors\"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"th\", null))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"tbody\", null, subscriber_imports.map(function (subscriber_import) {\n    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"tr\", {\n      key: subscriber_import.id\n    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"td\", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(SubscriberImportIcon, {\n      status: subscriber_import.status\n    })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"td\", {\n      className: \"td-numeric\"\n    }, Object(date_fns__WEBPACK_IMPORTED_MODULE_7__[\"format\"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_7__[\"parseISO\"])(subscriber_import.created_at), 'yyyy-MM-dd')), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"td\", null, subscriber_import.email_list.name), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"td\", {\n      className: \"td-numeric\"\n    }, subscriber_import.imported_subscribers_count), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"td\", {\n      className: \"td-numeric\"\n    }, subscriber_import.error_count), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"td\", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"a\", {\n      href: subscriber_import.imported_subscribers_report_url\n    }, \"Import report\"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"a\", {\n      href: subscriber_import.error_report_url\n    }, \"Error report\"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"a\", {\n      href: subscriber_import.import_file_url\n    }, \"Uploaded file\"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"button\", {\n      type: \"button\",\n      className: \"link-delete\",\n      onClick: function onClick() {\n        return handleDelete(subscriber_import);\n      }\n    }, \"Delete\")));\n  })))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"form\", {\n    className: \"card-grid\",\n    onSubmit: form.submit\n  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(forms__WEBPACK_IMPORTED_MODULE_6__[\"SelectField\"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({\n    label: \"Subscribe to email list\"\n  }, form.getInputProps('email_list_id'), {\n    options: email_list_options\n  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"input\", {\n    type: \"upload\",\n    name: \"file\"\n  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"div\", {\n    className: \"buttons\"\n  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"button\", {\n    type: \"submit\",\n    className: \"button\"\n  }, \"Import\"))))));\n}\n\nfunction SubscriberImportIcon(_ref2) {\n  var status = _ref2.status;\n\n  switch (status) {\n    case 'pending':\n      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"i\", {\n        title: \"Scheduled\",\n        className: \"far fa-clock text-yellow-500\"\n      });\n\n    case 'importing':\n      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"i\", {\n        title: \"Sending\",\n        className: \"fas fa-sync fa-spin text-blue-500\"\n      });\n\n    case 'completed':\n      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"i\", {\n        title: \"Sent\",\n        className: \"fas fa-check text-green-500\"\n      });\n\n    default:\n      return null;\n  }\n}\n\n//# sourceURL=webpack:///./resources/js/views/subscribers/Import.tsx?");

/***/ })

}]);