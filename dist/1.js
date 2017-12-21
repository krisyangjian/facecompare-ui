webpackJsonp([1],{

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./button/button.demo.md": 246,
	"./table/table.demo.md": 249,
	"./test/test.demo.md": 254
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 203;

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  data: function data() {
    return {
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
        tag: '家'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
        tag: '公司'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
        tag: '家'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
        tag: '公司'
      }],
      tableData2: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        $info: true
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        $positive: true
      }],
      tableData3: [{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        detailAddress: '金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        detailAddress: '金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        detailAddress: '金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        detailAddress: '金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-08',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        detailAddress: '金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-06',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        detailAddress: '金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-07',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        detailAddress: '金沙江路 1518 弄',
        zip: 200333
      }],
      tableData4: [{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-08',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-06',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-07',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }],
      tableData5: [{
        id: '12987122',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333'
      }, {
        id: '12987123',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333'
      }, {
        id: '12987125',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333'
      }, {
        id: '12987126',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333'
      }],
      tableData6: [{
        id: '12987122',
        name: '王小虎',
        amount1: '234',
        amount2: '3.2',
        amount3: 10
      }, {
        id: '12987123',
        name: '王小虎',
        amount1: '165',
        amount2: '4.43',
        amount3: 12
      }, {
        id: '12987124',
        name: '王小虎',
        amount1: '324',
        amount2: '1.9',
        amount3: 9
      }, {
        id: '12987125',
        name: '王小虎',
        amount1: '621',
        amount2: '2.2',
        amount3: 17
      }, {
        id: '12987126',
        name: '王小虎',
        amount1: '539',
        amount2: '4.1',
        amount3: 15
      }],
      currentRow: null,
      multipleSelection: []
    };
  },


  methods: {
    getSummaries: function getSummaries(param) {
      var columns = param.columns,
          data = param.data;

      var sums = [];
      columns.forEach(function (column, index) {
        if (index === 0) {
          sums[index] = '总价';
          return;
        }
        var values = data.map(function (item) {
          return Number(item[column.property]);
        });
        if (!values.every(function (value) {
          return isNaN(value);
        })) {
          sums[index] = values.reduce(function (prev, curr) {
            var value = Number(curr);
            if (!isNaN(value)) {
              return prev + curr;
            } else {
              return prev;
            }
          }, 0);
          sums[index] += ' 元';
        } else {
          sums[index] = 'N/A';
        }
      });

      return sums;
    },
    setCurrent: function setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row);
    },
    toggleSelection: function toggleSelection(rows) {
      var _this = this;

      if (rows) {
        rows.forEach(function (row) {
          _this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleClick: function handleClick(row) {
      console.log(row);
    },
    handleEdit: function handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete: function handleDelete(index, row) {
      console.log(index, row);
    },
    handleSelectionChange: function handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleCurrentChange: function handleCurrentChange(val) {
      this.currentRow = val;
    },
    formatter: function formatter(row, column) {
      return row.address;
    },
    filterTag: function filterTag(value, row) {
      return row.tag === value;
    },
    tableRowClassName: function tableRowClassName(_ref) {
      var row = _ref.row,
          rowIndex = _ref.rowIndex;

      if (rowIndex === 1) {
        return 'warning-row';
      } else if (rowIndex === 3) {
        return 'success-row';
      }
      return '';
    },
    deleteRow: function deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    arraySpanMethod: function arraySpanMethod(_ref2) {
      var row = _ref2.row,
          column = _ref2.column,
          rowIndex = _ref2.rowIndex,
          columnIndex = _ref2.columnIndex;

      if (rowIndex % 2 === 0) {
        if (columnIndex === 0) {
          return [1, 2];
        } else if (columnIndex === 1) {
          return [0, 0];
        }
      }
    },
    objectSpanMethod: function objectSpanMethod(_ref3) {
      var row = _ref3.row,
          column = _ref3.column,
          rowIndex = _ref3.rowIndex,
          columnIndex = _ref3.columnIndex;

      if (columnIndex === 0) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
            colspan: 1
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0
          };
        }
      }
    },
    indexMethod: function indexMethod(index) {
      return index * 2;
    }
  },

  watch: {
    multipleSelection: function multipleSelection(val) {
      console.log('selection: ', val);
    }
  }
};

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(247);

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_13_6_0_vue_loader_lib_template_compiler_index_id_data_v_133ea29a_hasScoped_false_buble_transforms_node_modules_vue_loader_13_6_0_vue_loader_lib_selector_type_template_index_0_bustCache_node_modules_vue_markdown_loader_2_3_0_vue_markdown_loader_lib_markdown_compiler_js_raw_button_demo_md__ = __webpack_require__(248);
var disposed = false
var normalizeComponent = __webpack_require__(6)
/* script */
var __vue_script__ = null
/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_13_6_0_vue_loader_lib_template_compiler_index_id_data_v_133ea29a_hasScoped_false_buble_transforms_node_modules_vue_loader_13_6_0_vue_loader_lib_selector_type_template_index_0_bustCache_node_modules_vue_markdown_loader_2_3_0_vue_markdown_loader_lib_markdown_compiler_js_raw_button_demo_md__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/modules/button/button.demo.md"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-133ea29a", Component.options)
  } else {
    hotAPI.reload("data-v-133ea29a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    [
      _vm._m(0),
      _vm._v(" "),
      _c("p", [_vm._v("常用的操作按钮。")]),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c("p", [_vm._v("基础的按钮用法。")]),
      _vm._v(" "),
      _c("demo-block", { staticClass: "demo-box" }, [
        _c(
          "div",
          { staticClass: "source", attrs: { slot: "source" }, slot: "source" },
          [
            _c(
              "div",
              [
                _c("el-button", [_vm._v("默认按钮")]),
                _vm._v(" "),
                _c("el-button", { attrs: { type: "primary" } }, [
                  _vm._v("主要按钮")
                ]),
                _vm._v(" "),
                _c("el-button", { attrs: { type: "success" } }, [
                  _vm._v("成功按钮")
                ]),
                _vm._v(" "),
                _c("el-button", { attrs: { type: "info" } }, [
                  _vm._v("信息按钮")
                ]),
                _vm._v(" "),
                _c("el-button", { attrs: { type: "warning" } }, [
                  _vm._v("警告按钮")
                ]),
                _vm._v(" "),
                _c("el-button", { attrs: { type: "danger" } }, [
                  _vm._v("危险按钮")
                ])
              ],
              1
            )
          ]
        ),
        _vm._v(" "),
        _c("p", [
          _vm._v("使用"),
          _c("code", [_vm._v("type")]),
          _vm._v("、"),
          _c("code", [_vm._v("plain")]),
          _vm._v("和"),
          _c("code", [_vm._v("round")]),
          _vm._v("属性来定义 Button 的样式。")
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "highlight",
            attrs: { slot: "highlight" },
            slot: "highlight"
          },
          [
            _c("pre", { pre: true }, [
              _c("code", { attrs: { class: "hljs language-html" } }, [
                _c("span", { attrs: { class: "hljs-tag" } }, [
                  _vm._v("<"),
                  _c("span", { attrs: { class: "hljs-name" } }, [
                    _vm._v("div")
                  ]),
                  _vm._v(">")
                ]),
                _vm._v("\n  "),
                _c("span", { attrs: { class: "hljs-tag" } }, [
                  _vm._v("<"),
                  _c("span", { attrs: { class: "hljs-name" } }, [
                    _vm._v("el-button")
                  ]),
                  _vm._v(">")
                ]),
                _vm._v("默认按钮"),
                _c("span", { attrs: { class: "hljs-tag" } }, [
                  _vm._v("</"),
                  _c("span", { attrs: { class: "hljs-name" } }, [
                    _vm._v("el-button")
                  ]),
                  _vm._v(">")
                ]),
                _vm._v("\n  "),
                _c("span", { attrs: { class: "hljs-tag" } }, [
                  _vm._v("<"),
                  _c("span", { attrs: { class: "hljs-name" } }, [
                    _vm._v("el-button")
                  ]),
                  _vm._v(" "),
                  _c("span", { attrs: { class: "hljs-attr" } }, [
                    _vm._v("type")
                  ]),
                  _vm._v("="),
                  _c("span", { attrs: { class: "hljs-string" } }, [
                    _vm._v('"primary"')
                  ]),
                  _vm._v(">")
                ]),
                _vm._v("主要按钮"),
                _c("span", { attrs: { class: "hljs-tag" } }, [
                  _vm._v("</"),
                  _c("span", { attrs: { class: "hljs-name" } }, [
                    _vm._v("el-button")
                  ]),
                  _vm._v(">")
                ]),
                _vm._v("\n  "),
                _c("span", { attrs: { class: "hljs-tag" } }, [
                  _vm._v("<"),
                  _c("span", { attrs: { class: "hljs-name" } }, [
                    _vm._v("el-button")
                  ]),
                  _vm._v(" "),
                  _c("span", { attrs: { class: "hljs-attr" } }, [
                    _vm._v("type")
                  ]),
                  _vm._v("="),
                  _c("span", { attrs: { class: "hljs-string" } }, [
                    _vm._v('"success"')
                  ]),
                  _vm._v(">")
                ]),
                _vm._v("成功按钮"),
                _c("span", { attrs: { class: "hljs-tag" } }, [
                  _vm._v("</"),
                  _c("span", { attrs: { class: "hljs-name" } }, [
                    _vm._v("el-button")
                  ]),
                  _vm._v(">")
                ]),
                _vm._v("\n  "),
                _c("span", { attrs: { class: "hljs-tag" } }, [
                  _vm._v("<"),
                  _c("span", { attrs: { class: "hljs-name" } }, [
                    _vm._v("el-button")
                  ]),
                  _vm._v(" "),
                  _c("span", { attrs: { class: "hljs-attr" } }, [
                    _vm._v("type")
                  ]),
                  _vm._v("="),
                  _c("span", { attrs: { class: "hljs-string" } }, [
                    _vm._v('"info"')
                  ]),
                  _vm._v(">")
                ]),
                _vm._v("信息按钮"),
                _c("span", { attrs: { class: "hljs-tag" } }, [
                  _vm._v("</"),
                  _c("span", { attrs: { class: "hljs-name" } }, [
                    _vm._v("el-button")
                  ]),
                  _vm._v(">")
                ]),
                _vm._v("\n  "),
                _c("span", { attrs: { class: "hljs-tag" } }, [
                  _vm._v("<"),
                  _c("span", { attrs: { class: "hljs-name" } }, [
                    _vm._v("el-button")
                  ]),
                  _vm._v(" "),
                  _c("span", { attrs: { class: "hljs-attr" } }, [
                    _vm._v("type")
                  ]),
                  _vm._v("="),
                  _c("span", { attrs: { class: "hljs-string" } }, [
                    _vm._v('"warning"')
                  ]),
                  _vm._v(">")
                ]),
                _vm._v("警告按钮"),
                _c("span", { attrs: { class: "hljs-tag" } }, [
                  _vm._v("</"),
                  _c("span", { attrs: { class: "hljs-name" } }, [
                    _vm._v("el-button")
                  ]),
                  _vm._v(">")
                ]),
                _vm._v("\n  "),
                _c("span", { attrs: { class: "hljs-tag" } }, [
                  _vm._v("<"),
                  _c("span", { attrs: { class: "hljs-name" } }, [
                    _vm._v("el-button")
                  ]),
                  _vm._v(" "),
                  _c("span", { attrs: { class: "hljs-attr" } }, [
                    _vm._v("type")
                  ]),
                  _vm._v("="),
                  _c("span", { attrs: { class: "hljs-string" } }, [
                    _vm._v('"danger"')
                  ]),
                  _vm._v(">")
                ]),
                _vm._v("危险按钮"),
                _c("span", { attrs: { class: "hljs-tag" } }, [
                  _vm._v("</"),
                  _c("span", { attrs: { class: "hljs-name" } }, [
                    _vm._v("el-button")
                  ]),
                  _vm._v(">")
                ]),
                _vm._v("\n"),
                _c("span", { attrs: { class: "hljs-tag" } }, [
                  _vm._v("</"),
                  _c("span", { attrs: { class: "hljs-name" } }, [
                    _vm._v("div")
                  ]),
                  _vm._v(">")
                ]),
                _vm._v("\n")
              ])
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _vm._m(2),
      _vm._v(" "),
      _vm._m(3)
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", { attrs: { id: "button-an-niu" } }, [
      _c(
        "a",
        {
          staticClass: "header-anchor",
          attrs: { href: "#button-an-niu", "aria-hidden": "true" }
        },
        [_vm._v("¶")]
      ),
      _vm._v(" Button 按钮")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { attrs: { id: "ji-chu-yong-fa" } }, [
      _c(
        "a",
        {
          staticClass: "header-anchor",
          attrs: { href: "#ji-chu-yong-fa", "aria-hidden": "true" }
        },
        [_vm._v("¶")]
      ),
      _vm._v(" 基础用法")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { attrs: { id: "attributes" } }, [
      _c(
        "a",
        {
          staticClass: "header-anchor",
          attrs: { href: "#attributes", "aria-hidden": "true" }
        },
        [_vm._v("¶")]
      ),
      _vm._v(" Attributes")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("table", { staticClass: "table" }, [
      _c("thead", [
        _c("tr", [
          _c("th", [_vm._v("参数")]),
          _vm._v(" "),
          _c("th", [_vm._v("说明")]),
          _vm._v(" "),
          _c("th", [_vm._v("类型")]),
          _vm._v(" "),
          _c("th", [_vm._v("可选值")]),
          _vm._v(" "),
          _c("th", [_vm._v("默认值")])
        ])
      ]),
      _vm._v(" "),
      _c("tbody", [
        _c("tr", [
          _c("td", [_vm._v("size")]),
          _vm._v(" "),
          _c("td", [_vm._v("尺寸")]),
          _vm._v(" "),
          _c("td", [_vm._v("string")]),
          _vm._v(" "),
          _c("td", [_vm._v("medium / small / mini")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("type")]),
          _vm._v(" "),
          _c("td", [_vm._v("类型")]),
          _vm._v(" "),
          _c("td", [_vm._v("string")]),
          _vm._v(" "),
          _c("td", [
            _vm._v("primary / success / warning / danger / info / text")
          ]),
          _vm._v(" "),
          _c("td", [_vm._v("—")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("plain")]),
          _vm._v(" "),
          _c("td", [_vm._v("是否朴素按钮")]),
          _vm._v(" "),
          _c("td", [_vm._v("boolean")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("false")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("round")]),
          _vm._v(" "),
          _c("td", [_vm._v("是否圆形按钮")]),
          _vm._v(" "),
          _c("td", [_vm._v("boolean")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("false")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("loading")]),
          _vm._v(" "),
          _c("td", [_vm._v("是否加载中状态")]),
          _vm._v(" "),
          _c("td", [_vm._v("boolean")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("false")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("disabled")]),
          _vm._v(" "),
          _c("td", [_vm._v("是否禁用状态")]),
          _vm._v(" "),
          _c("td", [_vm._v("boolean")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("false")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("icon")]),
          _vm._v(" "),
          _c("td", [_vm._v("图标类名")]),
          _vm._v(" "),
          _c("td", [_vm._v("string")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("autofocus")]),
          _vm._v(" "),
          _c("td", [_vm._v("是否默认聚焦")]),
          _vm._v(" "),
          _c("td", [_vm._v("boolean")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("false")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("native-type")]),
          _vm._v(" "),
          _c("td", [_vm._v("原生 type 属性")]),
          _vm._v(" "),
          _c("td", [_vm._v("string")]),
          _vm._v(" "),
          _c("td", [_vm._v("button / submit / reset")]),
          _vm._v(" "),
          _c("td", [_vm._v("button")])
        ])
      ])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-133ea29a", esExports)
  }
}

/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(250);

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_6_0_vue_loader_lib_selector_type_script_index_0_bustCache_node_modules_vue_markdown_loader_2_3_0_vue_markdown_loader_lib_markdown_compiler_js_raw_table_demo_md__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_6_0_vue_loader_lib_selector_type_script_index_0_bustCache_node_modules_vue_markdown_loader_2_3_0_vue_markdown_loader_lib_markdown_compiler_js_raw_table_demo_md___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_6_0_vue_loader_lib_selector_type_script_index_0_bustCache_node_modules_vue_markdown_loader_2_3_0_vue_markdown_loader_lib_markdown_compiler_js_raw_table_demo_md__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_6_0_vue_loader_lib_selector_type_script_index_0_bustCache_node_modules_vue_markdown_loader_2_3_0_vue_markdown_loader_lib_markdown_compiler_js_raw_table_demo_md__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_6_0_vue_loader_lib_selector_type_script_index_0_bustCache_node_modules_vue_markdown_loader_2_3_0_vue_markdown_loader_lib_markdown_compiler_js_raw_table_demo_md__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_6_0_vue_loader_lib_template_compiler_index_id_data_v_0a4df3f8_hasScoped_false_buble_transforms_node_modules_vue_loader_13_6_0_vue_loader_lib_selector_type_template_index_0_bustCache_node_modules_vue_markdown_loader_2_3_0_vue_markdown_loader_lib_markdown_compiler_js_raw_table_demo_md__ = __webpack_require__(253);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(251)
}
var normalizeComponent = __webpack_require__(6)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_6_0_vue_loader_lib_selector_type_script_index_0_bustCache_node_modules_vue_markdown_loader_2_3_0_vue_markdown_loader_lib_markdown_compiler_js_raw_table_demo_md___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_6_0_vue_loader_lib_template_compiler_index_id_data_v_0a4df3f8_hasScoped_false_buble_transforms_node_modules_vue_loader_13_6_0_vue_loader_lib_selector_type_template_index_0_bustCache_node_modules_vue_markdown_loader_2_3_0_vue_markdown_loader_lib_markdown_compiler_js_raw_table_demo_md__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/modules/table/table.demo.md"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0a4df3f8", Component.options)
  } else {
    hotAPI.reload("data-v-0a4df3f8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(252);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("2401d70c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/_css-loader@0.28.7@css-loader/index.js!../../../node_modules/_vue-loader@13.6.0@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0a4df3f8\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/_vue-loader@13.6.0@vue-loader/lib/selector.js?type=styles&index=0&bustCache!../../../node_modules/_vue-markdown-loader@2.3.0@vue-markdown-loader/lib/markdown-compiler.js?raw!./table.demo.md", function() {
     var newContent = require("!!../../../node_modules/_css-loader@0.28.7@css-loader/index.js!../../../node_modules/_vue-loader@13.6.0@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0a4df3f8\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/_vue-loader@13.6.0@vue-loader/lib/selector.js?type=styles&index=0&bustCache!../../../node_modules/_vue-markdown-loader@2.3.0@vue-markdown-loader/lib/markdown-compiler.js?raw!./table.demo.md");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "\n.el-table .warning-row {\n  background: oldlace;\n}\n.el-table .success-row {\n  background: #f0f9eb;\n}\n.demo-table .name-wrapper {\n  display: inline-block;\n}\n.demo-table .demo-table-expand {\nlabel {\n    width: 90px;\n    color: #99a9bf;\n}\n.el-form-item {\n    margin-right: 0;\n    margin-bottom: 0;\n    width: 50%;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    [
      _vm._m(0),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。"
        )
      ]),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c("p", [_vm._v("基础的表格展示用法。")]),
      _vm._v(" "),
      _c("demo-block", { staticClass: "demo-box" }, [
        _c(
          "div",
          { staticClass: "source", attrs: { slot: "source" }, slot: "source" },
          [
            [
              _c(
                "el-table",
                {
                  staticStyle: { width: "100%" },
                  attrs: { data: _vm.tableData }
                },
                [
                  _c("el-table-column", {
                    attrs: { prop: "date", label: "日期", width: "180" }
                  }),
                  _vm._v(" "),
                  _c("el-table-column", {
                    attrs: { prop: "name", label: "姓名", width: "180" }
                  }),
                  _vm._v(" "),
                  _c("el-table-column", {
                    attrs: { prop: "address", label: "地址" }
                  })
                ],
                1
              )
            ]
          ],
          2
        ),
        _vm._v(" "),
        _c("p", [
          _vm._v("当"),
          _c("code", [_vm._v("el-table")]),
          _vm._v("元素中注入"),
          _c("code", [_vm._v("data")]),
          _vm._v("对象数组后，在"),
          _c("code", [_vm._v("el-table-column")]),
          _vm._v("中用"),
          _c("code", [_vm._v("prop")]),
          _vm._v("属性来对应对象中的键名即可填入数据，用"),
          _c("code", [_vm._v("label")]),
          _vm._v("属性来定义表格的列名。可以使用"),
          _c("code", [_vm._v("width")]),
          _vm._v("属性来定义列宽。")
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "highlight",
            attrs: { slot: "highlight" },
            slot: "highlight"
          },
          [
            _c("pre", { pre: true }, [
              _c("code", { attrs: { class: "hljs language-html" } }, [
                _vm._v("  "),
                _c("span", { attrs: { class: "hljs-tag" } }, [
                  _vm._v("<"),
                  _c("span", { attrs: { class: "hljs-name" } }, [
                    _vm._v("template")
                  ]),
                  _vm._v(">")
                ]),
                _vm._v("\n    "),
                _c("span", { attrs: { class: "hljs-tag" } }, [
                  _vm._v("<"),
                  _c("span", { attrs: { class: "hljs-name" } }, [
                    _vm._v("el-table")
                  ]),
                  _vm._v("\n      "),
                  _c("span", { attrs: { class: "hljs-attr" } }, [
                    _vm._v(":data")
                  ]),
                  _vm._v("="),
                  _c("span", { attrs: { class: "hljs-string" } }, [
                    _vm._v('"tableData"')
                  ]),
                  _vm._v("\n      "),
                  _c("span", { attrs: { class: "hljs-attr" } }, [
                    _vm._v("style")
                  ]),
                  _vm._v("="),
                  _c("span", { attrs: { class: "hljs-string" } }, [
                    _vm._v('"width: 100%"')
                  ]),
                  _vm._v(">")
                ]),
                _vm._v("\n      "),
                _c("span", { attrs: { class: "hljs-tag" } }, [
                  _vm._v("<"),
                  _c("span", { attrs: { class: "hljs-name" } }, [
                    _vm._v("el-table-column")
                  ]),
                  _vm._v("\n        "),
                  _c("span", { attrs: { class: "hljs-attr" } }, [
                    _vm._v("prop")
                  ]),
                  _vm._v("="),
                  _c("span", { attrs: { class: "hljs-string" } }, [
                    _vm._v('"date"')
                  ]),
                  _vm._v("\n        "),
                  _c("span", { attrs: { class: "hljs-attr" } }, [
                    _vm._v("label")
                  ]),
                  _vm._v("="),
                  _c("span", { attrs: { class: "hljs-string" } }, [
                    _vm._v('"日期"')
                  ]),
                  _vm._v("\n        "),
                  _c("span", { attrs: { class: "hljs-attr" } }, [
                    _vm._v("width")
                  ]),
                  _vm._v("="),
                  _c("span", { attrs: { class: "hljs-string" } }, [
                    _vm._v('"180"')
                  ]),
                  _vm._v(">")
                ]),
                _vm._v("\n      "),
                _c("span", { attrs: { class: "hljs-tag" } }, [
                  _vm._v("</"),
                  _c("span", { attrs: { class: "hljs-name" } }, [
                    _vm._v("el-table-column")
                  ]),
                  _vm._v(">")
                ]),
                _vm._v("\n      "),
                _c("span", { attrs: { class: "hljs-tag" } }, [
                  _vm._v("<"),
                  _c("span", { attrs: { class: "hljs-name" } }, [
                    _vm._v("el-table-column")
                  ]),
                  _vm._v("\n        "),
                  _c("span", { attrs: { class: "hljs-attr" } }, [
                    _vm._v("prop")
                  ]),
                  _vm._v("="),
                  _c("span", { attrs: { class: "hljs-string" } }, [
                    _vm._v('"name"')
                  ]),
                  _vm._v("\n        "),
                  _c("span", { attrs: { class: "hljs-attr" } }, [
                    _vm._v("label")
                  ]),
                  _vm._v("="),
                  _c("span", { attrs: { class: "hljs-string" } }, [
                    _vm._v('"姓名"')
                  ]),
                  _vm._v("\n        "),
                  _c("span", { attrs: { class: "hljs-attr" } }, [
                    _vm._v("width")
                  ]),
                  _vm._v("="),
                  _c("span", { attrs: { class: "hljs-string" } }, [
                    _vm._v('"180"')
                  ]),
                  _vm._v(">")
                ]),
                _vm._v("\n      "),
                _c("span", { attrs: { class: "hljs-tag" } }, [
                  _vm._v("</"),
                  _c("span", { attrs: { class: "hljs-name" } }, [
                    _vm._v("el-table-column")
                  ]),
                  _vm._v(">")
                ]),
                _vm._v("\n      "),
                _c("span", { attrs: { class: "hljs-tag" } }, [
                  _vm._v("<"),
                  _c("span", { attrs: { class: "hljs-name" } }, [
                    _vm._v("el-table-column")
                  ]),
                  _vm._v("\n        "),
                  _c("span", { attrs: { class: "hljs-attr" } }, [
                    _vm._v("prop")
                  ]),
                  _vm._v("="),
                  _c("span", { attrs: { class: "hljs-string" } }, [
                    _vm._v('"address"')
                  ]),
                  _vm._v("\n        "),
                  _c("span", { attrs: { class: "hljs-attr" } }, [
                    _vm._v("label")
                  ]),
                  _vm._v("="),
                  _c("span", { attrs: { class: "hljs-string" } }, [
                    _vm._v('"地址"')
                  ]),
                  _vm._v(">")
                ]),
                _vm._v("\n      "),
                _c("span", { attrs: { class: "hljs-tag" } }, [
                  _vm._v("</"),
                  _c("span", { attrs: { class: "hljs-name" } }, [
                    _vm._v("el-table-column")
                  ]),
                  _vm._v(">")
                ]),
                _vm._v("\n    "),
                _c("span", { attrs: { class: "hljs-tag" } }, [
                  _vm._v("</"),
                  _c("span", { attrs: { class: "hljs-name" } }, [
                    _vm._v("el-table")
                  ]),
                  _vm._v(">")
                ]),
                _vm._v("\n  "),
                _c("span", { attrs: { class: "hljs-tag" } }, [
                  _vm._v("</"),
                  _c("span", { attrs: { class: "hljs-name" } }, [
                    _vm._v("template")
                  ]),
                  _vm._v(">")
                ]),
                _vm._v("\n\n  "),
                _c("span", { attrs: { class: "hljs-tag" } }, [
                  _vm._v("<"),
                  _c("span", { attrs: { class: "hljs-name" } }, [
                    _vm._v("script")
                  ]),
                  _vm._v(">")
                ]),
                _c("span", { attrs: { class: "javascript" } }, [
                  _vm._v("\n    "),
                  _c("span", { attrs: { class: "hljs-keyword" } }, [
                    _vm._v("export")
                  ]),
                  _vm._v(" "),
                  _c("span", { attrs: { class: "hljs-keyword" } }, [
                    _vm._v("default")
                  ]),
                  _vm._v(" {\n      data() {\n        "),
                  _c("span", { attrs: { class: "hljs-keyword" } }, [
                    _vm._v("return")
                  ]),
                  _vm._v(" {\n          "),
                  _c("span", { attrs: { class: "hljs-attr" } }, [
                    _vm._v("tableData")
                  ]),
                  _vm._v(": [{\n            "),
                  _c("span", { attrs: { class: "hljs-attr" } }, [
                    _vm._v("date")
                  ]),
                  _vm._v(": "),
                  _c("span", { attrs: { class: "hljs-string" } }, [
                    _vm._v("'2016-05-02'")
                  ]),
                  _vm._v(",\n            "),
                  _c("span", { attrs: { class: "hljs-attr" } }, [
                    _vm._v("name")
                  ]),
                  _vm._v(": "),
                  _c("span", { attrs: { class: "hljs-string" } }, [
                    _vm._v("'王小虎'")
                  ]),
                  _vm._v(",\n            "),
                  _c("span", { attrs: { class: "hljs-attr" } }, [
                    _vm._v("address")
                  ]),
                  _vm._v(": "),
                  _c("span", { attrs: { class: "hljs-string" } }, [
                    _vm._v("'上海市普陀区金沙江路 1518 弄'")
                  ]),
                  _vm._v("\n          }, {\n            "),
                  _c("span", { attrs: { class: "hljs-attr" } }, [
                    _vm._v("date")
                  ]),
                  _vm._v(": "),
                  _c("span", { attrs: { class: "hljs-string" } }, [
                    _vm._v("'2016-05-04'")
                  ]),
                  _vm._v(",\n            "),
                  _c("span", { attrs: { class: "hljs-attr" } }, [
                    _vm._v("name")
                  ]),
                  _vm._v(": "),
                  _c("span", { attrs: { class: "hljs-string" } }, [
                    _vm._v("'王小虎'")
                  ]),
                  _vm._v(",\n            "),
                  _c("span", { attrs: { class: "hljs-attr" } }, [
                    _vm._v("address")
                  ]),
                  _vm._v(": "),
                  _c("span", { attrs: { class: "hljs-string" } }, [
                    _vm._v("'上海市普陀区金沙江路 1517 弄'")
                  ]),
                  _vm._v("\n          }, {\n            "),
                  _c("span", { attrs: { class: "hljs-attr" } }, [
                    _vm._v("date")
                  ]),
                  _vm._v(": "),
                  _c("span", { attrs: { class: "hljs-string" } }, [
                    _vm._v("'2016-05-01'")
                  ]),
                  _vm._v(",\n            "),
                  _c("span", { attrs: { class: "hljs-attr" } }, [
                    _vm._v("name")
                  ]),
                  _vm._v(": "),
                  _c("span", { attrs: { class: "hljs-string" } }, [
                    _vm._v("'王小虎'")
                  ]),
                  _vm._v(",\n            "),
                  _c("span", { attrs: { class: "hljs-attr" } }, [
                    _vm._v("address")
                  ]),
                  _vm._v(": "),
                  _c("span", { attrs: { class: "hljs-string" } }, [
                    _vm._v("'上海市普陀区金沙江路 1519 弄'")
                  ]),
                  _vm._v("\n          }, {\n            "),
                  _c("span", { attrs: { class: "hljs-attr" } }, [
                    _vm._v("date")
                  ]),
                  _vm._v(": "),
                  _c("span", { attrs: { class: "hljs-string" } }, [
                    _vm._v("'2016-05-03'")
                  ]),
                  _vm._v(",\n            "),
                  _c("span", { attrs: { class: "hljs-attr" } }, [
                    _vm._v("name")
                  ]),
                  _vm._v(": "),
                  _c("span", { attrs: { class: "hljs-string" } }, [
                    _vm._v("'王小虎'")
                  ]),
                  _vm._v(",\n            "),
                  _c("span", { attrs: { class: "hljs-attr" } }, [
                    _vm._v("address")
                  ]),
                  _vm._v(": "),
                  _c("span", { attrs: { class: "hljs-string" } }, [
                    _vm._v("'上海市普陀区金沙江路 1516 弄'")
                  ]),
                  _vm._v("\n          }]\n        }\n      }\n    }\n  ")
                ]),
                _c("span", { attrs: { class: "hljs-tag" } }, [
                  _vm._v("</"),
                  _c("span", { attrs: { class: "hljs-name" } }, [
                    _vm._v("script")
                  ]),
                  _vm._v(">")
                ]),
                _vm._v("\n")
              ])
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _vm._m(2),
      _vm._v(" "),
      _vm._m(3),
      _vm._v(" "),
      _vm._m(4),
      _vm._v(" "),
      _vm._m(5),
      _vm._v(" "),
      _vm._m(6),
      _vm._v(" "),
      _vm._m(7),
      _vm._v(" "),
      _vm._m(8),
      _vm._v(" "),
      _vm._m(9),
      _vm._v(" "),
      _vm._m(10),
      _vm._v(" "),
      _vm._m(11)
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", { attrs: { id: "table-biao-ge" } }, [
      _c(
        "a",
        {
          staticClass: "header-anchor",
          attrs: { href: "#table-biao-ge", "aria-hidden": "true" }
        },
        [_vm._v("¶")]
      ),
      _vm._v(" Table 表格")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { attrs: { id: "ji-chu-biao-ge" } }, [
      _c(
        "a",
        {
          staticClass: "header-anchor",
          attrs: { href: "#ji-chu-biao-ge", "aria-hidden": "true" }
        },
        [_vm._v("¶")]
      ),
      _vm._v(" 基础表格")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { attrs: { id: "table-attributes" } }, [
      _c(
        "a",
        {
          staticClass: "header-anchor",
          attrs: { href: "#table-attributes", "aria-hidden": "true" }
        },
        [_vm._v("¶")]
      ),
      _vm._v(" Table Attributes")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("table", { staticClass: "table" }, [
      _c("thead", [
        _c("tr", [
          _c("th", [_vm._v("参数")]),
          _vm._v(" "),
          _c("th", [_vm._v("说明")]),
          _vm._v(" "),
          _c("th", [_vm._v("类型")]),
          _vm._v(" "),
          _c("th", [_vm._v("可选值")]),
          _vm._v(" "),
          _c("th", [_vm._v("默认值")])
        ])
      ]),
      _vm._v(" "),
      _c("tbody", [
        _c("tr", [
          _c("td", [_vm._v("data")]),
          _vm._v(" "),
          _c("td", [_vm._v("显示的数据")]),
          _vm._v(" "),
          _c("td", [_vm._v("array")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("height")]),
          _vm._v(" "),
          _c("td", [
            _vm._v(
              "Table 的高度，默认为自动高度。如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则 Table 的高度受控于外部样式。"
            )
          ]),
          _vm._v(" "),
          _c("td", [_vm._v("string/number")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("max-height")]),
          _vm._v(" "),
          _c("td", [_vm._v("Table 的最大高度")]),
          _vm._v(" "),
          _c("td", [_vm._v("string/number")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("stripe")]),
          _vm._v(" "),
          _c("td", [_vm._v("是否为斑马纹 table")]),
          _vm._v(" "),
          _c("td", [_vm._v("boolean")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("false")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("border")]),
          _vm._v(" "),
          _c("td", [_vm._v("是否带有纵向边框")]),
          _vm._v(" "),
          _c("td", [_vm._v("boolean")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("false")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("size")]),
          _vm._v(" "),
          _c("td", [_vm._v("Table 的尺寸")]),
          _vm._v(" "),
          _c("td", [_vm._v("string")]),
          _vm._v(" "),
          _c("td", [_vm._v("medium / small / mini")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("fit")]),
          _vm._v(" "),
          _c("td", [_vm._v("列的宽度是否自撑开")]),
          _vm._v(" "),
          _c("td", [_vm._v("boolean")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("true")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("show-header")]),
          _vm._v(" "),
          _c("td", [_vm._v("是否显示表头")]),
          _vm._v(" "),
          _c("td", [_vm._v("boolean")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("true")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("highlight-current-row")]),
          _vm._v(" "),
          _c("td", [_vm._v("是否要高亮当前行")]),
          _vm._v(" "),
          _c("td", [_vm._v("boolean")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("false")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("current-row-key")]),
          _vm._v(" "),
          _c("td", [_vm._v("当前行的 key，只写属性")]),
          _vm._v(" "),
          _c("td", [_vm._v("String,Number")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("row-class-name")]),
          _vm._v(" "),
          _c("td", [
            _vm._v(
              "行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。"
            )
          ]),
          _vm._v(" "),
          _c("td", [_vm._v("Function({row, rowIndex})/String")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("row-style")]),
          _vm._v(" "),
          _c("td", [
            _vm._v(
              "行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。"
            )
          ]),
          _vm._v(" "),
          _c("td", [_vm._v("Function({row, rowIndex})/Object")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("cell-class-name")]),
          _vm._v(" "),
          _c("td", [
            _vm._v(
              "单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className。"
            )
          ]),
          _vm._v(" "),
          _c("td", [
            _vm._v("Function({row, column, rowIndex, columnIndex})/String")
          ]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("cell-style")]),
          _vm._v(" "),
          _c("td", [
            _vm._v(
              "单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有单元格设置一样的 Style。"
            )
          ]),
          _vm._v(" "),
          _c("td", [
            _vm._v("Function({row, rowIndex, rowIndex, columnIndex})/Object")
          ]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("header-row-class-name")]),
          _vm._v(" "),
          _c("td", [
            _vm._v(
              "表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。"
            )
          ]),
          _vm._v(" "),
          _c("td", [_vm._v("Function({row, rowIndex})/String")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("header-row-style")]),
          _vm._v(" "),
          _c("td", [
            _vm._v(
              "表头行的 style 的回调方法，也可以使用一个固定的 Object 为所有表头行设置一样的 Style。"
            )
          ]),
          _vm._v(" "),
          _c("td", [_vm._v("Function({row, rowIndex})/Object")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("header-cell-class-name")]),
          _vm._v(" "),
          _c("td", [
            _vm._v(
              "表头单元格的 className 的回调方法，也可以使用字符串为所有表头单元格设置一个固定的 className。"
            )
          ]),
          _vm._v(" "),
          _c("td", [
            _vm._v("Function({row, column, rowIndex, columnIndex})/String")
          ]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("header-cell-style")]),
          _vm._v(" "),
          _c("td", [
            _vm._v(
              "表头单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有表头单元格设置一样的 Style。"
            )
          ]),
          _vm._v(" "),
          _c("td", [
            _vm._v("Function({row, rowIndex, rowIndex, columnIndex})/Object")
          ]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("row-key")]),
          _vm._v(" "),
          _c("td", [
            _vm._v(
              "行数据的 Key，用来优化 Table 的渲染；在使用 reserve-selection 功能的情况下，该属性是必填的。类型为 String 时，支持多层访问："
            ),
            _c("code", { pre: true }, [_vm._v("user.info.id")]),
            _vm._v("，但不支持 "),
            _c("code", { pre: true }, [_vm._v("user.info[0].id")]),
            _vm._v("，此种情况请使用 "),
            _c("code", { pre: true }, [_vm._v("Function")]),
            _vm._v("。")
          ]),
          _vm._v(" "),
          _c("td", [_vm._v("Function(row)/String")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("empty-text")]),
          _vm._v(" "),
          _c("td", [
            _vm._v("空数据时显示的文本内容，也可以通过 "),
            _c("code", { pre: true }, [_vm._v('slot="empty"')]),
            _vm._v(" 设置")
          ]),
          _vm._v(" "),
          _c("td", [_vm._v("String")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("暂无数据")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("default-expand-all")]),
          _vm._v(" "),
          _c("td", [
            _vm._v(
              '是否默认展开所有行，当 Table 中存在 type="expand" 的 Column 的时候有效'
            )
          ]),
          _vm._v(" "),
          _c("td", [_vm._v("Boolean")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("false")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("expand-row-keys")]),
          _vm._v(" "),
          _c("td", [
            _vm._v(
              "可以通过该属性设置 Table 目前的展开行，需要设置 row-key 属性才能使用，该属性为展开行的 keys 数组。"
            )
          ]),
          _vm._v(" "),
          _c("td", [_vm._v("Array")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td")
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("default-sort")]),
          _vm._v(" "),
          _c("td", [
            _vm._v("默认的排序列的prop和顺序。它的"),
            _c("code", { pre: true }, [_vm._v("prop")]),
            _vm._v("属性指定默认的排序的列，"),
            _c("code", { pre: true }, [_vm._v("order")]),
            _vm._v("指定默认排序的顺序")
          ]),
          _vm._v(" "),
          _c("td", [_vm._v("Object")]),
          _vm._v(" "),
          _c("td", [
            _c("code", { pre: true }, [_vm._v("order")]),
            _vm._v(": ascending, descending")
          ]),
          _vm._v(" "),
          _c("td", [
            _vm._v("如果只指定了"),
            _c("code", { pre: true }, [_vm._v("prop")]),
            _vm._v(", 没有指定"),
            _c("code", { pre: true }, [_vm._v("order")]),
            _vm._v(", 则默认顺序是ascending")
          ])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("tooltip-effect")]),
          _vm._v(" "),
          _c("td", [
            _vm._v("tooltip "),
            _c("code", { pre: true }, [_vm._v("effect")]),
            _vm._v(" 属性")
          ]),
          _vm._v(" "),
          _c("td", [_vm._v("String")]),
          _vm._v(" "),
          _c("td", [_vm._v("dark/light")]),
          _vm._v(" "),
          _c("td")
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("show-summary")]),
          _vm._v(" "),
          _c("td", [_vm._v("是否在表尾显示合计行")]),
          _vm._v(" "),
          _c("td", [_vm._v("Boolean")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("false")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("sum-text")]),
          _vm._v(" "),
          _c("td", [_vm._v("合计行第一列的文本")]),
          _vm._v(" "),
          _c("td", [_vm._v("String")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("合计")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("summary-method")]),
          _vm._v(" "),
          _c("td", [_vm._v("自定义的合计计算方法")]),
          _vm._v(" "),
          _c("td", [_vm._v("Function({ columns, data })")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("span-method")]),
          _vm._v(" "),
          _c("td", [_vm._v("合并行或列的计算方法")]),
          _vm._v(" "),
          _c("td", [
            _vm._v("Function({ row, column, rowIndex, columnIndex })")
          ]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { attrs: { id: "table-events" } }, [
      _c(
        "a",
        {
          staticClass: "header-anchor",
          attrs: { href: "#table-events", "aria-hidden": "true" }
        },
        [_vm._v("¶")]
      ),
      _vm._v(" Table Events")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("table", { staticClass: "table" }, [
      _c("thead", [
        _c("tr", [
          _c("th", [_vm._v("事件名")]),
          _vm._v(" "),
          _c("th", [_vm._v("说明")]),
          _vm._v(" "),
          _c("th", [_vm._v("参数")])
        ])
      ]),
      _vm._v(" "),
      _c("tbody", [
        _c("tr", [
          _c("td", [_vm._v("select")]),
          _vm._v(" "),
          _c("td", [_vm._v("当用户手动勾选数据行的 Checkbox 时触发的事件")]),
          _vm._v(" "),
          _c("td", [_vm._v("selection, row")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("select-all")]),
          _vm._v(" "),
          _c("td", [_vm._v("当用户手动勾选全选 Checkbox 时触发的事件")]),
          _vm._v(" "),
          _c("td", [_vm._v("selection")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("selection-change")]),
          _vm._v(" "),
          _c("td", [_vm._v("当选择项发生变化时会触发该事件")]),
          _vm._v(" "),
          _c("td", [_vm._v("selection")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("cell-mouse-enter")]),
          _vm._v(" "),
          _c("td", [_vm._v("当单元格 hover 进入时会触发该事件")]),
          _vm._v(" "),
          _c("td", [_vm._v("row, column, cell, event")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("cell-mouse-leave")]),
          _vm._v(" "),
          _c("td", [_vm._v("当单元格 hover 退出时会触发该事件")]),
          _vm._v(" "),
          _c("td", [_vm._v("row, column, cell, event")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("cell-click")]),
          _vm._v(" "),
          _c("td", [_vm._v("当某个单元格被点击时会触发该事件")]),
          _vm._v(" "),
          _c("td", [_vm._v("row, column, cell, event")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("cell-dblclick")]),
          _vm._v(" "),
          _c("td", [_vm._v("当某个单元格被双击击时会触发该事件")]),
          _vm._v(" "),
          _c("td", [_vm._v("row, column, cell, event")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("row-click")]),
          _vm._v(" "),
          _c("td", [_vm._v("当某一行被点击时会触发该事件")]),
          _vm._v(" "),
          _c("td", [_vm._v("row, event, column")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("row-contextmenu")]),
          _vm._v(" "),
          _c("td", [_vm._v("当某一行被鼠标右键点击时会触发该事件")]),
          _vm._v(" "),
          _c("td", [_vm._v("row, event")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("row-dblclick")]),
          _vm._v(" "),
          _c("td", [_vm._v("当某一行被双击时会触发该事件")]),
          _vm._v(" "),
          _c("td", [_vm._v("row, event")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("header-click")]),
          _vm._v(" "),
          _c("td", [_vm._v("当某一列的表头被点击时会触发该事件")]),
          _vm._v(" "),
          _c("td", [_vm._v("column, event")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("sort-change")]),
          _vm._v(" "),
          _c("td", [_vm._v("当表格的排序条件发生变化的时候会触发该事件")]),
          _vm._v(" "),
          _c("td", [_vm._v("{ column, prop, order }")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("filter-change")]),
          _vm._v(" "),
          _c("td", [
            _vm._v(
              "当表格的筛选条件发生变化的时候会触发该事件，参数的值是一个对象，对象的 key 是 column 的 columnKey，对应的 value 为用户选择的筛选条件的数组。"
            )
          ]),
          _vm._v(" "),
          _c("td", [_vm._v("filters")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("current-change")]),
          _vm._v(" "),
          _c("td", [
            _vm._v(
              "当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性"
            )
          ]),
          _vm._v(" "),
          _c("td", [_vm._v("currentRow, oldCurrentRow")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("header-dragend")]),
          _vm._v(" "),
          _c("td", [_vm._v("当拖动表头改变了列的宽度的时候会触发该事件")]),
          _vm._v(" "),
          _c("td", [_vm._v("newWidth, oldWidth, column, event")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("expand-change")]),
          _vm._v(" "),
          _c("td", [_vm._v("当用户对某一行展开或者关闭的时候会触发该事件")]),
          _vm._v(" "),
          _c("td", [_vm._v("row, expandedRows")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { attrs: { id: "table-methods" } }, [
      _c(
        "a",
        {
          staticClass: "header-anchor",
          attrs: { href: "#table-methods", "aria-hidden": "true" }
        },
        [_vm._v("¶")]
      ),
      _vm._v(" Table Methods")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("table", { staticClass: "table" }, [
      _c("thead", [
        _c("tr", [
          _c("th", [_vm._v("方法名")]),
          _vm._v(" "),
          _c("th", [_vm._v("说明")]),
          _vm._v(" "),
          _c("th", [_vm._v("参数")])
        ])
      ]),
      _vm._v(" "),
      _c("tbody", [
        _c("tr", [
          _c("td", [_vm._v("clearSelection")]),
          _vm._v(" "),
          _c("td", [
            _vm._v(
              "用于多选表格，清空用户的选择，当使用 reserve-selection 功能的时候，可能会需要使用此方法"
            )
          ]),
          _vm._v(" "),
          _c("td", [_vm._v("selection")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("toggleRowSelection")]),
          _vm._v(" "),
          _c("td", [
            _vm._v(
              "用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中）"
            )
          ]),
          _vm._v(" "),
          _c("td", [_vm._v("row, selected")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("toggleRowExpansion")]),
          _vm._v(" "),
          _c("td", [
            _vm._v(
              "用于可展开表格，切换某一行的展开状态，如果使用了第二个参数，则是设置这一行展开与否（expanded 为 true 则展开）"
            )
          ]),
          _vm._v(" "),
          _c("td", [_vm._v("row, expanded")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("setCurrentRow")]),
          _vm._v(" "),
          _c("td", [
            _vm._v(
              "用于单选表格，设定某一行为选中行，如果调用时不加参数，则会取消目前高亮行的选中状态。"
            )
          ]),
          _vm._v(" "),
          _c("td", [_vm._v("row")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("clearSort")]),
          _vm._v(" "),
          _c("td", [_vm._v("用于清空排序条件，数据会恢复成未排序的状态")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("clearFilter")]),
          _vm._v(" "),
          _c("td", [_vm._v("用于清空过滤条件，数据会恢复成未过滤的状态")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("doLayout")]),
          _vm._v(" "),
          _c("td", [
            _vm._v(
              "对 Table 进行重新布局。当 Table 或其祖先元素由隐藏切换为显示时，可能需要调用此方法"
            )
          ]),
          _vm._v(" "),
          _c("td", [_vm._v("—")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { attrs: { id: "table-slot" } }, [
      _c(
        "a",
        {
          staticClass: "header-anchor",
          attrs: { href: "#table-slot", "aria-hidden": "true" }
        },
        [_vm._v("¶")]
      ),
      _vm._v(" Table Slot")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("table", { staticClass: "table" }, [
      _c("thead", [
        _c("tr", [
          _c("th", [_vm._v("name")]),
          _vm._v(" "),
          _c("th", [_vm._v("说明")])
        ])
      ]),
      _vm._v(" "),
      _c("tbody", [
        _c("tr", [
          _c("td", [_vm._v("append")]),
          _vm._v(" "),
          _c("td", [
            _vm._v(
              "插入至表格最后一行之后的内容，如果需要对表格的内容进行无限滚动操作，可能需要用到这个 slot。若表格有合计行，该 slot 会位于合计行之上。"
            )
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { attrs: { id: "table-column-attributes" } }, [
      _c(
        "a",
        {
          staticClass: "header-anchor",
          attrs: { href: "#table-column-attributes", "aria-hidden": "true" }
        },
        [_vm._v("¶")]
      ),
      _vm._v(" Table-column Attributes")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("table", { staticClass: "table" }, [
      _c("thead", [
        _c("tr", [
          _c("th", [_vm._v("参数")]),
          _vm._v(" "),
          _c("th", [_vm._v("说明")]),
          _vm._v(" "),
          _c("th", [_vm._v("类型")]),
          _vm._v(" "),
          _c("th", [_vm._v("可选值")]),
          _vm._v(" "),
          _c("th", [_vm._v("默认值")])
        ])
      ]),
      _vm._v(" "),
      _c("tbody", [
        _c("tr", [
          _c("td", [_vm._v("type")]),
          _vm._v(" "),
          _c("td", [
            _vm._v("对应列的类型。如果设置了 "),
            _c("code", { pre: true }, [_vm._v("selection")]),
            _vm._v(" 则显示多选框；如果设置了 "),
            _c("code", { pre: true }, [_vm._v("index")]),
            _vm._v(" 则显示该行的索引（从 1 开始计算）；如果设置了 "),
            _c("code", { pre: true }, [_vm._v("expand")]),
            _vm._v(" 则显示为一个可展开的按钮")
          ]),
          _vm._v(" "),
          _c("td", [_vm._v("string")]),
          _vm._v(" "),
          _c("td", [_vm._v("selection/index/expand")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("index")]),
          _vm._v(" "),
          _c("td", [
            _vm._v("如果设置了 "),
            _c("code", { pre: true }, [_vm._v("type=index")]),
            _vm._v("，可以通过传递 "),
            _c("code", { pre: true }, [_vm._v("index")]),
            _vm._v(" 属性来自定义索引")
          ]),
          _vm._v(" "),
          _c("td", [_vm._v("string, Function(index)")]),
          _vm._v(" "),
          _c("td", [_vm._v("-")]),
          _vm._v(" "),
          _c("td", [_vm._v("-")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("column-key")]),
          _vm._v(" "),
          _c("td", [
            _vm._v(
              "column 的 key，如果需要使用 filter-change 事件，则需要此属性标识是哪个 column 的筛选条件"
            )
          ]),
          _vm._v(" "),
          _c("td", [_vm._v("string")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("label")]),
          _vm._v(" "),
          _c("td", [_vm._v("显示的标题")]),
          _vm._v(" "),
          _c("td", [_vm._v("string")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("prop")]),
          _vm._v(" "),
          _c("td", [_vm._v("对应列内容的字段名，也可以使用 property 属性")]),
          _vm._v(" "),
          _c("td", [_vm._v("string")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("width")]),
          _vm._v(" "),
          _c("td", [_vm._v("对应列的宽度")]),
          _vm._v(" "),
          _c("td", [_vm._v("string")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("min-width")]),
          _vm._v(" "),
          _c("td", [
            _vm._v(
              "对应列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列"
            )
          ]),
          _vm._v(" "),
          _c("td", [_vm._v("string")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("fixed")]),
          _vm._v(" "),
          _c("td", [_vm._v("列是否固定在左侧或者右侧，true 表示固定在左侧")]),
          _vm._v(" "),
          _c("td", [_vm._v("string, boolean")]),
          _vm._v(" "),
          _c("td", [_vm._v("true, left, right")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("render-header")]),
          _vm._v(" "),
          _c("td", [_vm._v("列标题 Label 区域渲染使用的 Function")]),
          _vm._v(" "),
          _c("td", [_vm._v("Function(h, { column, $index })")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("sortable")]),
          _vm._v(" "),
          _c("td", [
            _vm._v(
              "对应列是否可以排序，如果设置为 'custom'，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件"
            )
          ]),
          _vm._v(" "),
          _c("td", [_vm._v("boolean, string")]),
          _vm._v(" "),
          _c("td", [_vm._v("true, false, 'custom'")]),
          _vm._v(" "),
          _c("td", [_vm._v("false")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("sort-method")]),
          _vm._v(" "),
          _c("td", [
            _vm._v(
              "对数据进行排序的时候使用的方法，仅当 sortable 设置为 true 的时候有效，需返回一个数字，和 Array.sort 表现一致"
            )
          ]),
          _vm._v(" "),
          _c("td", [_vm._v("Function(a, b)")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("sort-by")]),
          _vm._v(" "),
          _c("td", [
            _vm._v(
              "指定数据按照哪个属性进行排序，仅当 sortable 设置为 true 且没有设置 sort-method 的时候有效。如果 sort-by 为数组，则先按照第 1 个属性排序，如果第 1 个相等，再按照第 2 个排序，以此类推。"
            )
          ]),
          _vm._v(" "),
          _c("td", [_vm._v("String/Array/Function(row, index)")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("resizable")]),
          _vm._v(" "),
          _c("td", [
            _vm._v(
              "对应列是否可以通过拖动改变宽度（需要在 el-table 上设置 border 属性为真）"
            )
          ]),
          _vm._v(" "),
          _c("td", [_vm._v("boolean")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("true")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("formatter")]),
          _vm._v(" "),
          _c("td", [_vm._v("用来格式化内容")]),
          _vm._v(" "),
          _c("td", [_vm._v("Function(row, column, cellValue)")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("show-overflow-tooltip")]),
          _vm._v(" "),
          _c("td", [_vm._v("当内容过长被隐藏时显示 tooltip")]),
          _vm._v(" "),
          _c("td", [_vm._v("Boolean")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("false")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("align")]),
          _vm._v(" "),
          _c("td", [_vm._v("对齐方式")]),
          _vm._v(" "),
          _c("td", [_vm._v("String")]),
          _vm._v(" "),
          _c("td", [_vm._v("left/center/right")]),
          _vm._v(" "),
          _c("td", [_vm._v("left")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("header-align")]),
          _vm._v(" "),
          _c("td", [
            _vm._v("表头对齐方式，若不设置该项，则使用表格的对齐方式")
          ]),
          _vm._v(" "),
          _c("td", [_vm._v("String")]),
          _vm._v(" "),
          _c("td", [_vm._v("left/center/right")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("class-name")]),
          _vm._v(" "),
          _c("td", [_vm._v("列的 className")]),
          _vm._v(" "),
          _c("td", [_vm._v("string")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("label-class-name")]),
          _vm._v(" "),
          _c("td", [_vm._v("当前列标题的自定义类名")]),
          _vm._v(" "),
          _c("td", [_vm._v("string")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("selectable")]),
          _vm._v(" "),
          _c("td", [
            _vm._v(
              "仅对 type=selection 的列有效，类型为 Function，Function 的返回值用来决定这一行的 CheckBox 是否可以勾选"
            )
          ]),
          _vm._v(" "),
          _c("td", [_vm._v("Function(row, index)")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("reserve-selection")]),
          _vm._v(" "),
          _c("td", [
            _vm._v(
              "仅对 type=selection 的列有效，类型为 Boolean，为 true 则代表会保留之前数据的选项，需要配合 Table 的 clearSelection 方法使用。"
            )
          ]),
          _vm._v(" "),
          _c("td", [_vm._v("Boolean")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("false")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("filters")]),
          _vm._v(" "),
          _c("td", [
            _vm._v(
              "数据过滤的选项，数组格式，数组中的元素需要有 text 和 value 属性。"
            )
          ]),
          _vm._v(" "),
          _c("td", [_vm._v("Array[{ text, value }]")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("filter-placement")]),
          _vm._v(" "),
          _c("td", [_vm._v("过滤弹出框的定位")]),
          _vm._v(" "),
          _c("td", [_vm._v("String")]),
          _vm._v(" "),
          _c("td", [
            _vm._v("与 Tooltip 的 "),
            _c("code", { pre: true }, [_vm._v("placement")]),
            _vm._v(" 属性相同")
          ]),
          _vm._v(" "),
          _c("td", [_vm._v("—")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("filter-multiple")]),
          _vm._v(" "),
          _c("td", [_vm._v("数据过滤的选项是否多选")]),
          _vm._v(" "),
          _c("td", [_vm._v("Boolean")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("true")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("filter-method")]),
          _vm._v(" "),
          _c("td", [
            _vm._v(
              "数据过滤使用的方法，如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示。"
            )
          ]),
          _vm._v(" "),
          _c("td", [_vm._v("Function(value, row)")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [_vm._v("filtered-value")]),
          _vm._v(" "),
          _c("td", [
            _vm._v(
              "选中的数据过滤项，如果需要自定义表头过滤的渲染方式，可能会需要此属性。"
            )
          ]),
          _vm._v(" "),
          _c("td", [_vm._v("Array")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")]),
          _vm._v(" "),
          _c("td", [_vm._v("—")])
        ])
      ])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-0a4df3f8", esExports)
  }
}

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(255);

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_13_6_0_vue_loader_lib_template_compiler_index_id_data_v_e5a5854c_hasScoped_false_buble_transforms_node_modules_vue_loader_13_6_0_vue_loader_lib_selector_type_template_index_0_bustCache_node_modules_vue_markdown_loader_2_3_0_vue_markdown_loader_lib_markdown_compiler_js_raw_test_demo_md__ = __webpack_require__(256);
var disposed = false
var normalizeComponent = __webpack_require__(6)
/* script */
var __vue_script__ = null
/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_13_6_0_vue_loader_lib_template_compiler_index_id_data_v_e5a5854c_hasScoped_false_buble_transforms_node_modules_vue_loader_13_6_0_vue_loader_lib_selector_type_template_index_0_bustCache_node_modules_vue_markdown_loader_2_3_0_vue_markdown_loader_lib_markdown_compiler_js_raw_test_demo_md__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/modules/test/test.demo.md"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e5a5854c", Component.options)
  } else {
    hotAPI.reload("data-v-e5a5854c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    [
      _vm._m(0),
      _vm._v(" "),
      _c("p", [_vm._v("简单的自定义组件测试")]),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c("p", [_vm._v("基础用法。")]),
      _vm._v(" "),
      _c("demo-block", { staticClass: "demo-box" }, [
        _c(
          "div",
          { staticClass: "source", attrs: { slot: "source" }, slot: "source" },
          [_c("div", [_c("is-test")], 1)]
        ),
        _vm._v(" "),
        _c("p", [_vm._v("使用")]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "highlight",
            attrs: { slot: "highlight" },
            slot: "highlight"
          },
          [
            _c("pre", { pre: true }, [
              _c("code", { attrs: { class: "hljs language-html" } }, [
                _c("span", { attrs: { class: "hljs-tag" } }, [
                  _vm._v("<"),
                  _c("span", { attrs: { class: "hljs-name" } }, [
                    _vm._v("div")
                  ]),
                  _vm._v(">")
                ]),
                _vm._v("\n  "),
                _c("span", { attrs: { class: "hljs-tag" } }, [
                  _vm._v("<"),
                  _c("span", { attrs: { class: "hljs-name" } }, [
                    _vm._v("is-test")
                  ]),
                  _vm._v(">")
                ]),
                _c("span", { attrs: { class: "hljs-tag" } }, [
                  _vm._v("</"),
                  _c("span", { attrs: { class: "hljs-name" } }, [
                    _vm._v("is-test")
                  ]),
                  _vm._v(">")
                ]),
                _vm._v("\n"),
                _c("span", { attrs: { class: "hljs-tag" } }, [
                  _vm._v("</"),
                  _c("span", { attrs: { class: "hljs-name" } }, [
                    _vm._v("div")
                  ]),
                  _vm._v(">")
                ]),
                _vm._v("\n")
              ])
            ])
          ]
        )
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", { attrs: { id: "test-zi-ding-yi-zu-jian-ce-shi" } }, [
      _c(
        "a",
        {
          staticClass: "header-anchor",
          attrs: {
            href: "#test-zi-ding-yi-zu-jian-ce-shi",
            "aria-hidden": "true"
          }
        },
        [_vm._v("¶")]
      ),
      _vm._v(" Test 自定义组件测试")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { attrs: { id: "ji-chu-yong-fa" } }, [
      _c(
        "a",
        {
          staticClass: "header-anchor",
          attrs: { href: "#ji-chu-yong-fa", "aria-hidden": "true" }
        },
        [_vm._v("¶")]
      ),
      _vm._v(" 基础用法")
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-e5a5854c", esExports)
  }
}

/***/ })

});