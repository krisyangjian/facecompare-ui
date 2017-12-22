webpackJsonp([0],{

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./en": 190,
	"./en.js": 190,
	"./zh-CN": 76,
	"./zh-CN.js": 76
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
webpackContext.id = 187;

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af-ZA": 191,
	"./af-ZA.js": 191,
	"./ar": 192,
	"./ar.js": 192,
	"./bg": 193,
	"./bg.js": 193,
	"./ca": 194,
	"./ca.js": 194,
	"./cz": 195,
	"./cz.js": 195,
	"./da": 196,
	"./da.js": 196,
	"./de": 197,
	"./de.js": 197,
	"./ee": 198,
	"./ee.js": 198,
	"./el": 199,
	"./el.js": 199,
	"./en": 200,
	"./en.js": 200,
	"./es": 201,
	"./es.js": 201,
	"./fa": 202,
	"./fa.js": 202,
	"./fi": 203,
	"./fi.js": 203,
	"./fr": 204,
	"./fr.js": 204,
	"./he": 205,
	"./he.js": 205,
	"./hu": 206,
	"./hu.js": 206,
	"./id": 207,
	"./id.js": 207,
	"./it": 208,
	"./it.js": 208,
	"./ja": 209,
	"./ja.js": 209,
	"./ko": 210,
	"./ko.js": 210,
	"./kz": 211,
	"./kz.js": 211,
	"./lt": 212,
	"./lt.js": 212,
	"./lv": 213,
	"./lv.js": 213,
	"./mn": 214,
	"./mn.js": 214,
	"./nb-NO": 215,
	"./nb-NO.js": 215,
	"./nl": 216,
	"./nl.js": 216,
	"./pl": 217,
	"./pl.js": 217,
	"./pt": 218,
	"./pt-br": 219,
	"./pt-br.js": 219,
	"./pt.js": 218,
	"./ru-RU": 220,
	"./ru-RU.js": 220,
	"./sk": 221,
	"./sk.js": 221,
	"./sl": 222,
	"./sl.js": 222,
	"./sv-SE": 223,
	"./sv-SE.js": 223,
	"./ta": 224,
	"./ta.js": 224,
	"./th": 225,
	"./th.js": 225,
	"./tk": 226,
	"./tk.js": 226,
	"./tr-TR": 227,
	"./tr-TR.js": 227,
	"./ua": 228,
	"./ua.js": 228,
	"./vi": 229,
	"./vi.js": 229,
	"./zh-CN": 44,
	"./zh-CN.js": 44,
	"./zh-TW": 230,
	"./zh-TW.js": 230
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
webpackContext.id = 188;

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  is: {
    test: {
      text: 'component test'
    }
  }
};

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  el: {
    colorpicker: {
      confirm: 'Bevestig',
      clear: 'Maak skoon'
    },
    datepicker: {
      now: 'Nou',
      today: 'Vandag',
      cancel: 'Kanselleer',
      clear: 'Maak skoon',
      confirm: 'Bevestig',
      selectDate: 'Kies datum',
      selectTime: 'Kies tyd',
      startDate: 'Begindatum',
      startTime: 'Begintyd',
      endDate: 'Einddatum',
      endTime: 'Eindtyd',
      prevYear: 'Previous Year', // to be translated
      nextYear: 'Next Year', // to be translated
      prevMonth: 'Previous Month', // to be translated
      nextMonth: 'Next Month', // to be translated
      year: 'Jaar',
      month1: 'Jan',
      month2: 'Feb',
      month3: 'Mrt',
      month4: 'Apr',
      month5: 'Mei',
      month6: 'Jun',
      month7: 'Jul',
      month8: 'Aug',
      month9: 'Sep',
      month10: 'Okt',
      month11: 'Nov',
      month12: 'Des',
      // week: 'week',
      weeks: {
        sun: 'So',
        mon: 'Ma',
        tue: 'Di',
        wed: 'Wo',
        thu: 'Do',
        fri: 'Vr',
        sat: 'Sa'
      },
      months: {
        jan: 'Jan',
        feb: 'Feb',
        mar: 'Mrt',
        apr: 'Apr',
        may: 'Mei',
        jun: 'Jun',
        jul: 'Jul',
        aug: 'Aug',
        sep: 'Sep',
        oct: 'Okt',
        nov: 'Nov',
        dec: 'Des'
      }
    },
    select: {
      loading: 'Laai',
      noMatch: 'Geen toepaslike data',
      noData: 'Geen data',
      placeholder: 'Kies'
    },
    cascader: {
      noMatch: 'Geen toepaslike data',
      loading: 'Laai',
      placeholder: 'Kies'
    },
    pagination: {
      goto: 'Gaan na',
      pagesize: '/page',
      total: 'Totaal {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: 'Boodskap',
      confirm: 'Bevestig',
      cancel: 'Kanselleer',
      error: 'Ongeldige invoer'
    },
    upload: {
      deleteTip: 'press delete to remove', // to be translated
      delete: 'Verwyder',
      preview: 'Voorskou',
      continue: 'Gaan voort'
    },
    table: {
      emptyText: 'Geen Data',
      confirmFilter: 'Bevestig',
      resetFilter: 'Herstel',
      clearFilter: 'Alles',
      sumText: 'Som'
    },
    tree: {
      emptyText: 'Geen Data'
    },
    transfer: {
      noMatch: 'Geen toepaslike data',
      noData: 'Geen data',
      titles: ['Lys 1', 'Lys 2'],
      filterPlaceholder: 'Voer sleutelwoord in',
      noCheckedFormat: '{total} items',
      hasCheckedFormat: '{checked}/{total} gekies'
    }
  }
};

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  el: {
    colorpicker: {
      confirm: 'موافق',
      clear: 'إزالة'
    },
    datepicker: {
      now: 'الآن',
      today: 'اليوم',
      cancel: 'إلغاء',
      clear: 'إزالة',
      confirm: 'موافق',
      selectDate: 'أختر التاريخ',
      selectTime: 'أختر الوقت',
      startDate: 'تاريخ البدء',
      startTime: 'وقت البدء',
      endDate: 'تاريخ الانتهاء',
      endTime: 'وقت الانتهاء',
      prevYear: 'Previous Year', // to be translated
      nextYear: 'Next Year', // to be translated
      prevMonth: 'Previous Month', // to be translated
      nextMonth: 'Next Month', // to be translated
      year: '',
      month1: 'يناير',
      month2: 'فبراير',
      month3: 'مارس',
      month4: 'ابريل',
      month5: 'مايو',
      month6: 'يونيو',
      month7: 'يوليو',
      month8: 'أغسطس',
      month9: 'سبتمبر',
      month10: 'أكتوبر',
      month11: 'نوفمبر',
      month12: 'ديسمبر',
      week: 'أسبوع',
      weeks: {
        sun: 'الأحد',
        mon: 'الأثنين',
        tue: 'الثلاثاء',
        wed: 'الأربعاء',
        thu: 'الخميس',
        fri: 'الجمعة',
        sat: 'السبت'
      },
      months: {
        jan: 'يناير',
        feb: 'فبراير',
        mar: 'مارس',
        apr: 'أبريل',
        may: 'مايو',
        jun: 'يونيو',
        jul: 'يوليو',
        aug: 'أغسطس',
        sep: 'سبتمبر',
        oct: 'أكتوبر',
        nov: 'نوفمبر',
        dec: 'ديسمبر'
      }
    },
    select: {
      loading: 'جار التحميل',
      noMatch: 'لايوجد بيانات مطابقة',
      noData: 'لايوجد بيانات',
      placeholder: 'أختر'
    },
    cascader: {
      noMatch: 'لايوجد بيانات مطابقة',
      loading: 'جار التحميل',
      placeholder: 'أختر'
    },
    pagination: {
      goto: 'أذهب إلى',
      pagesize: '/صفحة',
      total: 'الكل {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: 'الرسالة',
      confirm: 'موافق',
      cancel: 'إلغاء',
      error: 'مدخل غير صحيح'
    },
    upload: {
      delete: 'حذف',
      preview: 'عرض',
      continue: 'إستمرار'
    },
    table: {
      emptyText: 'لايوجد بيانات',
      confirmFilter: 'تأكيد',
      resetFilter: 'حذف',
      clearFilter: 'الكل',
      sumText: 'المجموع'
    },
    tree: {
      emptyText: 'لايوجد بيانات'
    },
    transfer: {
      noMatch: 'لايوجد بيانات مطابقة',
      noData: 'لايوجد بيانات',
      titles: ['قائمة 1', 'قائمة 2'],
      filterPlaceholder: 'ادخل كلمة',
      noCheckedFormat: '{total} عناصر',
      hasCheckedFormat: '{checked}/{total} مختار'
    }
  }
};

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  el: {
    colorpicker: {
      confirm: 'OK',
      clear: 'Изчисти'
    },
    datepicker: {
      now: 'Сега',
      today: 'Днес',
      cancel: 'Откажи',
      clear: 'Изчисти',
      confirm: 'ОК',
      selectDate: 'Избери дата',
      selectTime: 'Избери час',
      startDate: 'Начална дата',
      startTime: 'Начален час',
      endDate: 'Крайна дата',
      endTime: 'Краен час',
      prevYear: 'Previous Year', // to be translated
      nextYear: 'Next Year', // to be translated
      prevMonth: 'Previous Month', // to be translated
      nextMonth: 'Next Month', // to be translated
      year: '',
      month1: 'Януари',
      month2: 'Февруари',
      month3: 'Март',
      month4: 'Април',
      month5: 'Май',
      month6: 'Юни',
      month7: 'Юли',
      month8: 'Август',
      month9: 'Септември',
      month10: 'Октомври',
      month11: 'Ноември',
      month12: 'Декември',
      // week: 'Седмица',
      weeks: {
        sun: 'Нед',
        mon: 'Пон',
        tue: 'Вто',
        wed: 'Сря',
        thu: 'Чет',
        fri: 'Пет',
        sat: 'Съб'
      },
      months: {
        jan: 'Яну',
        feb: 'Фев',
        mar: 'Мар',
        apr: 'Апр',
        may: 'Май',
        jun: 'Юни',
        jul: 'Юли',
        aug: 'Авг',
        sep: 'Сеп',
        oct: 'Окт',
        nov: 'Ное',
        dec: 'Дек'
      }
    },
    select: {
      loading: 'Зареждане',
      noMatch: 'Няма намерени',
      noData: 'Няма данни',
      placeholder: 'Избери'
    },
    cascader: {
      noMatch: 'Няма намерени',
      loading: 'Зареждане',
      placeholder: 'Избери'
    },
    pagination: {
      goto: 'Иди на',
      pagesize: '/страница',
      total: 'Общо {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: 'Съобщение',
      confirm: 'ОК',
      cancel: 'Откажи',
      error: 'Невалидни данни'
    },
    upload: {
      deleteTip: 'press delete to remove', // to be translated
      delete: 'Изтрий',
      preview: 'Прегледай',
      continue: 'Продължи'
    },
    table: {
      emptyText: 'Няма данни',
      confirmFilter: 'Потвърди',
      resetFilter: 'Изчисти',
      clearFilter: 'Всички',
      sumText: 'Sum' // to be translated
    },
    tree: {
      emptyText: 'Няма данни'
    },
    transfer: {
      noMatch: 'Няма намерени',
      noData: 'Няма данни',
      titles: ['List 1', 'List 2'], // to be translated
      filterPlaceholder: 'Enter keyword', // to be translated
      noCheckedFormat: '{total} items', // to be translated
      hasCheckedFormat: '{checked}/{total} checked' // to be translated
    }
  }
};

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  el: {
    colorpicker: {
      confirm: 'Confirmar',
      clear: 'Netejar'
    },
    datepicker: {
      now: 'Ara',
      today: 'Avui',
      cancel: 'Cancel·lar',
      clear: 'Netejar',
      confirm: 'Confirmar',
      selectDate: 'Seleccionar data',
      selectTime: 'Seleccionar hora',
      startDate: 'Data Inici',
      startTime: 'Hora Inici',
      endDate: 'Data Final',
      endTime: 'Hora Final',
      prevYear: 'Previous Year', // to be translated
      nextYear: 'Next Year', // to be translated
      prevMonth: 'Previous Month', // to be translated
      nextMonth: 'Next Month', // to be translated
      year: 'Any',
      month1: 'Gener',
      month2: 'Febrer',
      month3: 'Març',
      month4: 'Abril',
      month5: 'Maig',
      month6: 'Juny',
      month7: 'Juliol',
      month8: 'Agost',
      month9: 'Setembre',
      month10: 'Octubre',
      month11: 'Novembre',
      month12: 'Desembre',
      // week: 'setmana',
      weeks: {
        sun: 'Dg',
        mon: 'Dl',
        tue: 'Dt',
        wed: 'Dc',
        thu: 'Dj',
        fri: 'Dv',
        sat: 'Ds'
      },
      months: {
        jan: 'Gen',
        feb: 'Febr',
        mar: 'Març',
        apr: 'Abr',
        may: 'Maig',
        jun: 'Juny',
        jul: 'Jul',
        aug: 'Ag',
        sep: 'Set',
        oct: 'Oct',
        nov: 'Nov',
        dec: 'Des'
      }
    },
    select: {
      loading: 'Carregant',
      noMatch: 'No hi ha dades que coincideixin',
      noData: 'Sense Dades',
      placeholder: 'Seleccionar'
    },
    cascader: {
      noMatch: 'No hi ha dades que coincideixin',
      loading: 'Carregant',
      placeholder: 'Seleccionar'
    },
    pagination: {
      goto: 'Anar a',
      pagesize: '/pagina',
      total: 'Total {total}',
      pageClassifier: ''
    },
    messagebox: {
      confirm: 'Acceptar',
      cancel: 'Cancel·lar',
      error: 'Entrada invàlida'
    },
    upload: {
      deleteTip: 'press delete to remove', // to be translated
      delete: 'Eliminar',
      preview: 'Vista Prèvia',
      continue: 'Continuar'
    },
    table: {
      emptyText: 'Sense Dades',
      confirmFilter: 'Confirmar',
      resetFilter: 'Netejar',
      clearFilter: 'Tot',
      sumText: 'Tot'
    },
    tree: {
      emptyText: 'Sense Dades'
    },
    transfer: {
      noMatch: 'No hi ha dades que coincideixin',
      noData: 'Sense Dades',
      titles: ['Llista 1', 'Llista 2'],
      filterPlaceholder: 'Introdueix la paraula clau',
      noCheckedFormat: '{total} ítems',
      hasCheckedFormat: '{checked}/{total} seleccionats'
    }
  }
};

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  el: {
    colorpicker: {
      confirm: 'OK',
      clear: 'Vymazat'
    },
    datepicker: {
      now: 'Teď',
      today: 'Dnes',
      cancel: 'Zrušit',
      clear: 'Vymazat',
      confirm: 'OK',
      selectDate: 'Vybrat datum',
      selectTime: 'Vybrat čas',
      startDate: 'Datum Začátku',
      startTime: 'Čas Začátku',
      endDate: 'Datum Konce',
      endTime: 'Čas Konce',
      prevYear: 'Previous Year', // to be translated
      nextYear: 'Next Year', // to be translated
      prevMonth: 'Previous Month', // to be translated
      nextMonth: 'Next Month', // to be translated
      day: 'Den',
      week: 'Týden',
      month: 'Měsíc',
      year: 'Rok',
      month1: 'Leden',
      month2: 'Únor',
      month3: 'Březen',
      month4: 'Duben',
      month5: 'Květen',
      month6: 'Červen',
      month7: 'Červenec',
      month8: 'Srpen',
      month9: 'Září',
      month10: 'Říjen',
      month11: 'Listopad',
      month12: 'Prosinec',
      weeks: {
        sun: 'Ne',
        mon: 'Po',
        tue: 'Út',
        wed: 'St',
        thu: 'Čt',
        fri: 'Pá',
        sat: 'So'
      },
      months: {
        jan: 'Led',
        feb: 'Úno',
        mar: 'Bře',
        apr: 'Dub',
        may: 'Kvě',
        jun: 'Čer',
        jul: 'Čvc',
        aug: 'Srp',
        sep: 'Zář',
        oct: 'Říj',
        nov: 'Lis',
        dec: 'Pro'
      }
    },
    select: {
      loading: 'Načítání',
      noMatch: 'Žádná shoda',
      noData: 'Žádná data',
      placeholder: 'Vybrat'
    },
    cascader: {
      noMatch: 'Žádná shoda',
      loading: 'Načítání',
      placeholder: 'Vybrat'
    },
    pagination: {
      goto: 'Jít na',
      pagesize: 'na stranu',
      total: 'Vše {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: 'Zpráva',
      confirm: 'OK',
      cancel: 'Zrušit',
      error: 'Neplatný vstup'
    },
    upload: {
      deleteTip: 'press delete to remove', // to be translated
      delete: 'Vymazat',
      preview: 'Náhled',
      continue: 'Pokračovat'
    },
    table: {
      emptyText: 'Žádná data',
      confirmFilter: 'Potvrdit',
      resetFilter: 'Resetovat',
      clearFilter: 'Vše',
      sumText: 'Sum' // to be translated
    },
    tree: {
      emptyText: 'Žádná data'
    },
    transfer: {
      noMatch: 'Žádná shoda',
      noData: 'Žádná data',
      titles: ['List 1', 'List 2'], // to be translated
      filterPlaceholder: 'Enter keyword', // to be translated
      noCheckedFormat: '{total} items', // to be translated
      hasCheckedFormat: '{checked}/{total} checked' // to be translated
    }
  }
};

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  el: {
    colorpicker: {
      confirm: 'OK',
      clear: 'Ryd'
    },
    datepicker: {
      now: 'Nu',
      today: 'I dag',
      cancel: 'Annuller',
      clear: 'Ryd',
      confirm: 'OK',
      selectDate: 'Vælg dato',
      selectTime: 'Vælg tidspunkt',
      startDate: 'Startdato',
      startTime: 'Starttidspunkt',
      endDate: 'Slutdato',
      endTime: 'Sluttidspunkt',
      prevYear: 'Previous Year', // to be translated
      nextYear: 'Next Year', // to be translated
      prevMonth: 'Previous Month', // to be translated
      nextMonth: 'Next Month', // to be translated
      year: 'År',
      month1: 'Januar',
      month2: 'Februar',
      month3: 'Marts',
      month4: 'April',
      month5: 'Maj',
      month6: 'Juni',
      month7: 'Juli',
      month8: 'August',
      month9: 'September',
      month10: 'Oktober',
      month11: 'November',
      month12: 'December',
      week: 'uge',
      weeks: {
        sun: 'Søn',
        mon: 'Man',
        tue: 'Tir',
        wed: 'Ons',
        thu: 'Tor',
        fri: 'Fre',
        sat: 'Lør'
      },
      months: {
        jan: 'Jan',
        feb: 'Feb',
        mar: 'Mar',
        apr: 'Apr',
        may: 'Maj',
        jun: 'Jun',
        jul: 'Jul',
        aug: 'Aug',
        sep: 'Sep',
        oct: 'Okt',
        nov: 'Nov',
        dec: 'Dec'
      }
    },
    select: {
      loading: 'Henter',
      noMatch: 'Ingen matchende data',
      noData: 'Ingen data',
      placeholder: 'Vælg'
    },
    cascader: {
      noMatch: 'Ingen matchende data',
      loading: 'Henter',
      placeholder: 'Vælg'
    },
    pagination: {
      goto: 'Gå til',
      pagesize: '/side',
      total: 'Total {total}',
      pageClassifier: ''
    },
    messagebox: {
      confirm: 'OK',
      cancel: 'Annuller',
      error: 'Ugyldig input'
    },
    upload: {
      deleteTip: 'press delete to remove', // to be translated
      delete: 'Slet',
      preview: 'Forhåndsvisning',
      continue: 'Fortsæt'
    },
    table: {
      emptyText: 'Ingen data',
      confirmFilter: 'Bekræft',
      resetFilter: 'Nulstil',
      clearFilter: 'Alle',
      sumText: 'Sum' // to be translated
    },
    tree: {
      emptyText: 'Ingen data'
    },
    transfer: {
      noMatch: 'Ingen matchende data',
      noData: 'Ingen data',
      titles: ['List 1', 'List 2'], // to be translated
      filterPlaceholder: 'Enter keyword', // to be translated
      noCheckedFormat: '{total} items', // to be translated
      hasCheckedFormat: '{checked}/{total} checked' // to be translated
    }
  }
};

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  el: {
    colorpicker: {
      confirm: 'OK',
      clear: 'Leeren'
    },
    datepicker: {
      now: 'Jetzt',
      today: 'Heute',
      cancel: 'Abbrechen',
      clear: 'Leeren',
      confirm: 'OK',
      selectDate: 'Datum wählen',
      selectTime: 'Uhrzeit wählen',
      startDate: 'Startdatum',
      startTime: 'Startzeit',
      endDate: 'Enddatum',
      endTime: 'Endzeit',
      prevYear: 'Previous Year', // to be translated
      nextYear: 'Next Year', // to be translated
      prevMonth: 'Previous Month', // to be translated
      nextMonth: 'Next Month', // to be translated
      day: 'Tag',
      week: 'Woche',
      month: 'Monat',
      year: '',
      month1: 'Januar',
      month2: 'Februar',
      month3: 'März',
      month4: 'April',
      month5: 'Mai',
      month6: 'Juni',
      month7: 'Juli',
      month8: 'August',
      month9: 'September',
      month10: 'Oktober',
      month11: 'November',
      month12: 'Dezember',
      weeks: {
        sun: 'So',
        mon: 'Mo',
        tue: 'Di',
        wed: 'Mi',
        thu: 'Do',
        fri: 'Fr',
        sat: 'Sa'
      },
      months: {
        jan: 'Jan',
        feb: 'Feb',
        mar: 'Mär',
        apr: 'Apr',
        may: 'Mai',
        jun: 'Jun',
        jul: 'Jul',
        aug: 'Aug',
        sep: 'Sep',
        oct: 'Okt',
        nov: 'Nov',
        dec: 'Dez'
      }
    },
    select: {
      loading: 'Lädt.',
      noMatch: 'Nichts gefunden.',
      noData: 'Keine Daten',
      placeholder: 'Daten wählen'
    },
    cascader: {
      noMatch: 'Nichts gefunden.',
      loading: 'Lädt.',
      placeholder: 'Daten wählen'
    },
    pagination: {
      goto: 'Gehe zu',
      pagesize: 'pro Seite',
      total: 'Gesamt {total}',
      pageClassifier: ''
    },
    messagebox: {
      confirm: 'OK',
      cancel: 'Abbrechen',
      error: 'Fehler'
    },
    upload: {
      deleteTip: 'press delete to remove', // to be translated
      delete: 'Löschen',
      preview: 'Vorschau',
      continue: 'Fortsetzen'
    },
    table: {
      emptyText: 'Keine Daten',
      confirmFilter: 'Anwenden',
      resetFilter: 'Zurücksetzen',
      clearFilter: 'Alles ',
      sumText: 'Summe'
    },
    tree: {
      emptyText: 'Keine Einträge'
    },
    transfer: {
      noMatch: 'Nichts gefunden.',
      noData: 'Keine Einträge',
      titles: ['Liste 1', 'Liste 2'],
      filterPlaceholder: 'Einträge filtern',
      noCheckedFormat: '{total} Einträge',
      hasCheckedFormat: '{checked}/{total} ausgewählt'
    }
  }
};

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  el: {
    colorpicker: {
      confirm: 'OK',
      clear: 'Tühjenda'
    },
    datepicker: {
      now: 'Praegu',
      today: 'Täna',
      cancel: 'Tühista',
      clear: 'Tühjenda',
      confirm: 'OK',
      selectDate: 'Vali kuupäev',
      selectTime: 'Vali kellaaeg',
      startDate: 'Alguskuupäev',
      startTime: 'Algusaeg',
      endDate: 'Lõpukuupäev',
      endTime: 'Lõpuaeg',
      prevYear: 'Previous Year', // to be translated
      nextYear: 'Next Year', // to be translated
      prevMonth: 'Previous Month', // to be translated
      nextMonth: 'Next Month', // to be translated
      year: '',
      month1: 'Jaanuar',
      month2: 'Veebruar',
      month3: 'Märts',
      month4: 'Aprill',
      month5: 'Mai',
      month6: 'Juuni',
      month7: 'Juuli',
      month8: 'August',
      month9: 'September',
      month10: 'Oktoober',
      month11: 'November',
      month12: 'Detsember',
      // week: 'nädal',
      weeks: {
        sun: 'P',
        mon: 'E',
        tue: 'T',
        wed: 'K',
        thu: 'N',
        fri: 'R',
        sat: 'L'
      },
      months: {
        jan: 'Jaan',
        feb: 'Veeb',
        mar: 'Mär',
        apr: 'Apr',
        may: 'Mai',
        jun: 'Juun',
        jul: 'Juul',
        aug: 'Aug',
        sep: 'Sept',
        oct: 'Okt',
        nov: 'Nov',
        dec: 'Dets'
      }
    },
    select: {
      loading: 'Laadimine',
      noMatch: 'Sobivad andmed puuduvad',
      noData: 'Andmed puuduvad',
      placeholder: 'Vali'
    },
    cascader: {
      noMatch: 'Sobivad andmed puuduvad',
      loading: 'Laadimine',
      placeholder: 'Vali'
    },
    pagination: {
      goto: 'Mine lehele',
      pagesize: '/page',
      total: 'Kokku {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: 'Teade',
      confirm: 'OK',
      cancel: 'Tühista',
      error: 'Vigane sisend'
    },
    upload: {
      deleteTip: 'press delete to remove', // to be translated
      delete: 'Kustuta',
      preview: 'Eelvaate',
      continue: 'Jätka'
    },
    table: {
      emptyText: 'Andmed puuduvad',
      confirmFilter: 'Kinnita',
      resetFilter: 'Taasta',
      clearFilter: 'Kõik',
      sumText: 'Summa'
    },
    tree: {
      emptyText: 'Andmed puuduvad'
    },
    transfer: {
      noMatch: 'Sobivad andmed puuduvad',
      noData: 'Andmed puuduvad',
      titles: ['Loend 1', 'Loend 2'],
      filterPlaceholder: 'Sisesta märksõna',
      noCheckedFormat: '{total} objekti',
      hasCheckedFormat: '{checked}/{total} valitud'
    }
  }
};

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  el: {
    colorpicker: {
      confirm: 'OK',
      clear: 'Καθαρισμός'
    },
    datepicker: {
      now: 'Τώρα',
      today: 'Σήμερα',
      cancel: 'Ακύρωση',
      clear: 'Καθαρισμός',
      confirm: 'OK',
      selectDate: 'Επιλέξτε ημέρα',
      selectTime: 'Επιλέξτε ώρα',
      startDate: 'Ημερομηνία Έναρξης',
      startTime: 'Ωρα Έναρξης',
      endDate: 'Ημερομηνία Λήξης',
      endTime: 'Ωρα Λήξης',
      prevYear: 'Previous Year', // to be translated
      nextYear: 'Next Year', // to be translated
      prevMonth: 'Previous Month', // to be translated
      nextMonth: 'Next Month', // to be translated
      year: 'Έτος',
      month1: 'Ιανουάριος',
      month2: 'Φεβρουάριος',
      month3: 'Μάρτιος',
      month4: 'Απρίλιος',
      month5: 'Μάιος',
      month6: 'Ιούνιος',
      month7: 'Ιούλιος',
      month8: 'Αύγουστος',
      month9: 'Σεπτέμβριος',
      month10: 'Οκτώβριος',
      month11: 'Νοέμβριος',
      month12: 'Δεκέμβριος',
      // week: 'εβδομάδα',
      weeks: {
        sun: 'Κυρ',
        mon: 'Δευ',
        tue: 'Τρι',
        wed: 'Τετ',
        thu: 'Πεμ',
        fri: 'Παρ',
        sat: 'Σαβ'
      },
      months: {
        jan: 'Ιαν',
        feb: 'Φεβ',
        mar: 'Μαρ',
        apr: 'Απρ',
        may: 'Μαϊ',
        jun: 'Ιουν',
        jul: 'Ιουλ',
        aug: 'Αυγ',
        sep: 'Σεπ',
        oct: 'Οκτ',
        nov: 'Νοε',
        dec: 'Δεκ'
      }
    },
    select: {
      loading: 'Φόρτωση',
      noMatch: 'Δεν βρέθηκαν αποτελέσματα',
      noData: 'Χωρίς δεδομένα',
      placeholder: 'Επιλογή'
    },
    cascader: {
      noMatch: 'Δεν βρέθηκαν αποτελέσματα',
      loading: 'Φόρτωση',
      placeholder: 'Επιλογή'
    },
    pagination: {
      goto: 'Μετάβαση σε',
      pagesize: '/σελίδα',
      total: 'Σύνολο {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: 'Μήνυμα',
      confirm: 'OK',
      cancel: 'Ακύρωση',
      error: 'Άκυρη εισαγωγή'
    },
    upload: {
      deleteTip: 'press delete to remove', // to be translated
      delete: 'Διαγραφή',
      preview: 'Προεπισκόπηση',
      continue: 'Συνέχεια'
    },
    table: {
      emptyText: 'Χωρίς Δεδομένα',
      confirmFilter: 'Επιβεβαίωση',
      resetFilter: 'Επαναφορά',
      clearFilter: 'Όλα',
      sumText: 'Sum' // to be translated
    },
    tree: {
      emptyText: 'Χωρίς Δεδομένα'
    },
    transfer: {
      noMatch: 'Δεν βρέθηκαν αποτελέσματα',
      noData: 'Χωρίς δεδομένα',
      titles: ['List 1', 'List 2'], // to be translated
      filterPlaceholder: 'Enter keyword', // to be translated
      noCheckedFormat: '{total} items', // to be translated
      hasCheckedFormat: '{checked}/{total} checked' // to be translated
    }
  }
};

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  el: {
    colorpicker: {
      confirm: 'OK',
      clear: 'Clear'
    },
    datepicker: {
      now: 'Now',
      today: 'Today',
      cancel: 'Cancel',
      clear: 'Clear',
      confirm: 'OK',
      selectDate: 'Select date',
      selectTime: 'Select time',
      startDate: 'Start Date',
      startTime: 'Start Time',
      endDate: 'End Date',
      endTime: 'End Time',
      prevYear: 'Previous Year',
      nextYear: 'Next Year',
      prevMonth: 'Previous Month',
      nextMonth: 'Next Month',
      year: '',
      month1: 'January',
      month2: 'February',
      month3: 'March',
      month4: 'April',
      month5: 'May',
      month6: 'June',
      month7: 'July',
      month8: 'August',
      month9: 'September',
      month10: 'October',
      month11: 'November',
      month12: 'December',
      // week: 'week',
      weeks: {
        sun: 'Sun',
        mon: 'Mon',
        tue: 'Tue',
        wed: 'Wed',
        thu: 'Thu',
        fri: 'Fri',
        sat: 'Sat'
      },
      months: {
        jan: 'Jan',
        feb: 'Feb',
        mar: 'Mar',
        apr: 'Apr',
        may: 'May',
        jun: 'Jun',
        jul: 'Jul',
        aug: 'Aug',
        sep: 'Sep',
        oct: 'Oct',
        nov: 'Nov',
        dec: 'Dec'
      }
    },
    select: {
      loading: 'Loading',
      noMatch: 'No matching data',
      noData: 'No data',
      placeholder: 'Select'
    },
    cascader: {
      noMatch: 'No matching data',
      loading: 'Loading',
      placeholder: 'Select'
    },
    pagination: {
      goto: 'Go to',
      pagesize: '/page',
      total: 'Total {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: 'Message',
      confirm: 'OK',
      cancel: 'Cancel',
      error: 'Illegal input'
    },
    upload: {
      deleteTip: 'press delete to remove',
      delete: 'Delete',
      preview: 'Preview',
      continue: 'Continue'
    },
    table: {
      emptyText: 'No Data',
      confirmFilter: 'Confirm',
      resetFilter: 'Reset',
      clearFilter: 'All',
      sumText: 'Sum'
    },
    tree: {
      emptyText: 'No Data'
    },
    transfer: {
      noMatch: 'No matching data',
      noData: 'No data',
      titles: ['List 1', 'List 2'], // to be translated
      filterPlaceholder: 'Enter keyword', // to be translated
      noCheckedFormat: '{total} items', // to be translated
      hasCheckedFormat: '{checked}/{total} checked' // to be translated
    }
  }
};

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  el: {
    colorpicker: {
      confirm: 'Confirmar',
      clear: 'Despejar'
    },
    datepicker: {
      now: 'Ahora',
      today: 'Hoy',
      cancel: 'Cancelar',
      clear: 'Despejar',
      confirm: 'Confirmar',
      selectDate: 'Seleccionar fecha',
      selectTime: 'Seleccionar hora',
      startDate: 'Fecha Incial',
      startTime: 'Hora Inicial',
      endDate: 'Fecha Final',
      endTime: 'Hora Final',
      prevYear: 'Año Anterior',
      nextYear: 'Próximo Año',
      prevMonth: 'Mes Anterior',
      nextMonth: 'Próximo Mes',
      year: 'Año',
      month1: 'enero',
      month2: 'febrero',
      month3: 'marzo',
      month4: 'abril',
      month5: 'mayo',
      month6: 'junio',
      month7: 'julio',
      month8: 'agosto',
      month9: 'septiembre',
      month10: 'octubre',
      month11: 'noviembre',
      month12: 'diciembre',
      // week: 'semana',
      weeks: {
        sun: 'dom',
        mon: 'lun',
        tue: 'mar',
        wed: 'mié',
        thu: 'jue',
        fri: 'vie',
        sat: 'sáb'
      },
      months: {
        jan: 'ene',
        feb: 'feb',
        mar: 'mar',
        apr: 'abr',
        may: 'may',
        jun: 'jun',
        jul: 'jul',
        aug: 'ago',
        sep: 'sep',
        oct: 'oct',
        nov: 'nov',
        dec: 'dic'
      }
    },
    select: {
      loading: 'Cargando',
      noMatch: 'No hay datos que coincidan',
      noData: 'Sin datos',
      placeholder: 'Seleccionar'
    },
    cascader: {
      noMatch: 'No hay datos que coincidan',
      loading: 'Cargando',
      placeholder: 'Seleccionar'
    },
    pagination: {
      goto: 'Ir a',
      pagesize: '/página',
      total: 'Total {total}',
      pageClassifier: ''
    },
    messagebox: {
      confirm: 'Aceptar',
      cancel: 'Cancelar',
      error: 'Entrada inválida'
    },
    upload: {
      deleteTip: 'press delete to remove', // to be translated
      delete: 'Eliminar',
      preview: 'Vista Previa',
      continue: 'Continuar'
    },
    table: {
      emptyText: 'Sin Datos',
      confirmFilter: 'Confirmar',
      resetFilter: 'Reiniciar',
      clearFilter: 'Despejar',
      sumText: 'Suma'
    },
    tree: {
      emptyText: 'Sin Datos'
    },
    transfer: {
      noMatch: 'No hay datos que coincidan',
      noData: 'Sin datos',
      titles: ['Lista 1', 'Lista 2'],
      filterPlaceholder: 'Ingresar palabra clave',
      noCheckedFormat: '{total} artículos',
      hasCheckedFormat: '{checked}/{total} revisados'
    }
  }
};

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  el: {
    colorpicker: {
      confirm: 'باشد',
      clear: 'حذف'
    },
    datepicker: {
      now: 'اکنون',
      today: 'امروز',
      cancel: 'لغو',
      clear: 'حذف',
      confirm: 'باشه',
      selectDate: 'انتخاب تاریخ',
      selectTime: 'انتخاب زمان',
      startDate: 'تاریخ شروع',
      startTime: 'زمان شروع',
      endDate: 'تاریخ پایان',
      endTime: 'زمان پایان',
      prevYear: 'سال قبل',
      nextYear: 'سال بعد',
      prevMonth: 'ماه قبل',
      nextMonth: 'ماه بعد',
      year: 'سال',
      month1: 'ژانویه',
      month2: 'فوریه',
      month3: 'مارس',
      month4: 'آوریل',
      month5: 'مه',
      month6: 'ژوئن',
      month7: 'جولای',
      month8: 'اوت',
      month9: 'سپتامبر',
      month10: 'اکتبر',
      month11: 'نوامبر',
      month12: 'دسامبر',
      // week: 'week',
      weeks: {
        sun: 'یکشنبه',
        mon: 'دوشنبه',
        tue: 'سه​شنبه',
        wed: 'چهارشنبه',
        thu: 'پنج​شنبه',
        fri: 'جمعه',
        sat: 'شنبه'
      },
      months: {
        jan: 'ژانویه',
        feb: 'فوریه',
        mar: 'مارس',
        apr: 'آوریل',
        may: 'مه',
        jun: 'ژوئن',
        jul: 'جولای',
        aug: 'اوت',
        sep: 'سپتامبر',
        oct: 'اکتبر',
        nov: 'نوامبر',
        dec: 'دسامبر'
      }
    },
    select: {
      loading: 'بارگیری',
      noMatch: 'هیچ داده‌ای پیدا نشد',
      noData: 'اطلاعاتی وجود ندارد',
      placeholder: 'انتخاب کنید'
    },
    cascader: {
      noMatch: 'هیچ داده‌ای پیدا نشد',
      loading: 'بارگیری',
      placeholder: 'انتخاب کنید'
    },
    pagination: {
      goto: 'برو به',
      pagesize: '/صفحه',
      total: 'مجموع {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: 'پیام',
      confirm: 'باشه',
      cancel: 'لغو',
      error: 'ورودی غیر مجاز'
    },
    upload: {
      deleteTip: 'press delete to remove', // to be translated
      delete: 'حذف',
      preview: 'پیش‌نمایش',
      continue: 'ادامه'
    },
    table: {
      emptyText: 'اطلاعاتی وجود ندارد',
      confirmFilter: 'تایید',
      resetFilter: 'حذف',
      clearFilter: 'همه',
      sumText: 'Sum' // to be translated
    },
    tree: {
      emptyText: 'اطلاعاتی وجود ندارد'
    },
    transfer: {
      noMatch: 'هیچ داده‌ای پیدا نشد',
      noData: 'اطلاعاتی وجود ندارد',
      titles: ['List 1', 'List 2'], // to be translated
      filterPlaceholder: 'کلید واژه هارو وارد کن',
      noCheckedFormat: '{total} items', // to be translated
      hasCheckedFormat: '{checked}/{total} checked' // to be translated
    }
  }
};

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  el: {
    colorpicker: {
      confirm: 'OK',
      clear: 'Tyhjennä'
    },
    datepicker: {
      now: 'Nyt',
      today: 'Tänään',
      cancel: 'Peruuta',
      clear: 'Tyhjennä',
      confirm: 'OK',
      selectDate: 'Valitse päivä',
      selectTime: 'Valitse aika',
      startDate: 'Aloituspäivä',
      startTime: 'Aloitusaika',
      endDate: 'Lopetuspäivä',
      endTime: 'Lopetusaika',
      prevYear: 'Previous Year', // to be translated
      nextYear: 'Next Year', // to be translated
      prevMonth: 'Previous Month', // to be translated
      nextMonth: 'Next Month', // to be translated
      year: '',
      month1: 'tammikuu',
      month2: 'helmikuu',
      month3: 'maaliskuu',
      month4: 'huhtikuu',
      month5: 'toukokuu',
      month6: 'kesäkuu',
      month7: 'heinäkuu',
      month8: 'elokuu',
      month9: 'syyskuu',
      month10: 'lokakuu',
      month11: 'marraskuu',
      month12: 'joulukuu',
      // week: 'week',
      weeks: {
        sun: 'su',
        mon: 'ma',
        tue: 'ti',
        wed: 'ke',
        thu: 'to',
        fri: 'pe',
        sat: 'la'
      },
      months: {
        jan: 'tam',
        feb: 'hel',
        mar: 'maa',
        apr: 'huh',
        may: 'tou',
        jun: 'kes',
        jul: 'hei',
        aug: 'elo',
        sep: 'syy',
        oct: 'lok',
        nov: 'mar',
        dec: 'jou'
      }
    },
    select: {
      loading: 'Lataa',
      noMatch: 'Ei vastaavia tietoja',
      noData: 'Ei tietoja',
      placeholder: 'Valitse'
    },
    cascader: {
      noMatch: 'Ei vastaavia tietoja',
      loading: 'Lataa',
      placeholder: 'Valitse'
    },
    pagination: {
      goto: 'Mene',
      pagesize: '/sivu',
      total: 'Yhteensä {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: 'Viesti',
      confirm: 'OK',
      cancel: 'Peruuta',
      error: 'Virheellinen syöte'
    },
    upload: {
      deleteTip: 'press delete to remove', // to be translated
      delete: 'Poista',
      preview: 'Esikatsele',
      continue: 'Jatka'
    },
    table: {
      emptyText: 'Ei tietoja',
      confirmFilter: 'Vahvista',
      resetFilter: 'Tyhjennä',
      clearFilter: 'Kaikki',
      sumText: 'Sum' // to be translated
    },
    tree: {
      emptyText: 'Ei tietoja'
    },
    transfer: {
      noMatch: 'Ei vastaavia tietoja',
      noData: 'Ei tietoja',
      titles: ['List 1', 'List 2'], // to be translated
      filterPlaceholder: 'Enter keyword', // to be translated
      noCheckedFormat: '{total} items', // to be translated
      hasCheckedFormat: '{checked}/{total} checked' // to be translated
    }
  }
};

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  el: {
    colorpicker: {
      confirm: 'OK',
      clear: 'Effacer'
    },
    datepicker: {
      now: 'Maintenant',
      today: 'Auj.',
      cancel: 'Annuler',
      clear: 'Effacer',
      confirm: 'OK',
      selectDate: 'Choisir date',
      selectTime: 'Choisir horaire',
      startDate: 'Date début',
      startTime: 'Horaire début',
      endDate: 'Date fin',
      endTime: 'Horaire fin',
      prevYear: 'Année précédente',
      nextYear: 'Année suivante',
      prevMonth: 'Mois précédent',
      nextMonth: 'Mois suivant',
      year: 'Année',
      month1: 'Janvier',
      month2: 'Février',
      month3: 'Mars',
      month4: 'Avril',
      month5: 'Mai',
      month6: 'Juin',
      month7: 'Juillet',
      month8: 'Août',
      month9: 'Septembre',
      month10: 'Octobre',
      month11: 'Novembre',
      month12: 'Décembre',
      // week: 'Semaine',
      weeks: {
        sun: 'Dim',
        mon: 'Lun',
        tue: 'Mar',
        wed: 'Mer',
        thu: 'Jeu',
        fri: 'Ven',
        sat: 'Sam'
      },
      months: {
        jan: 'Jan',
        feb: 'Fév',
        mar: 'Mar',
        apr: 'Avr',
        may: 'Mai',
        jun: 'Jun',
        jul: 'Jul',
        aug: 'Aoû',
        sep: 'Sep',
        oct: 'Oct',
        nov: 'Nov',
        dec: 'Déc'
      }
    },
    select: {
      loading: 'Chargement',
      noMatch: 'Aucune correspondance',
      noData: 'Aucune donnée',
      placeholder: 'Choisir'
    },
    cascader: {
      noMatch: 'Aucune correspondance',
      loading: 'Chargement',
      placeholder: 'Choisir'
    },
    pagination: {
      goto: 'Aller à',
      pagesize: '/page',
      total: 'Total {total}',
      pageClassifier: ''
    },
    messagebox: {
      confirm: 'Confirmer',
      cancel: 'Annuler',
      error: 'Erreur'
    },
    upload: {
      deleteTip: 'Cliquer sur supprimer pour retirer le fichier',
      delete: 'Supprimer',
      preview: 'Aperçu',
      continue: 'Continuer'
    },
    table: {
      emptyText: 'Aucune donnée',
      confirmFilter: 'Confirmer',
      resetFilter: 'Réinitialiser',
      clearFilter: 'Tous',
      sumText: 'Somme'
    },
    tree: {
      emptyText: 'Aucune donnée'
    },
    transfer: {
      noMatch: 'Aucune correspondance',
      noData: 'Aucune donnée',
      titles: ['Liste 1', 'Liste 2'],
      filterPlaceholder: 'Entrer un mot clef',
      noCheckedFormat: '{total} elements',
      hasCheckedFormat: '{checked}/{total} coché(s)'
    }
  }
};

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  el: {
    colorpicker: {
      confirm: 'אישור',
      clear: 'נקה'
    },
    datepicker: {
      now: 'כעת',
      today: 'היום',
      cancel: 'בטל',
      clear: 'נקה',
      confirm: 'אישור',
      selectDate: 'בחר תאריך',
      selectTime: 'בחר זמן',
      startDate: 'תאריך התחלה',
      startTime: 'זמן התחלה',
      endDate: 'תאריך סיום',
      endTime: 'זמן סיום',
      prevYear: 'Previous Year', // to be translated
      nextYear: 'Next Year', // to be translated
      prevMonth: 'Previous Month', // to be translated
      nextMonth: 'Next Month', // to be translated
      year: '',
      month1: 'ינואר',
      month2: 'פברואר',
      month3: 'מרץ',
      month4: 'אפריל',
      month5: 'מאי',
      month6: 'יוני',
      month7: 'יולי',
      month8: 'אוגוסט',
      month9: 'ספטמבר',
      month10: 'אוקטובר',
      month11: 'נובמבר',
      month12: 'דצמבר',
      // week: 'week',
      weeks: {
        sun: 'א׳',
        mon: 'ב׳',
        tue: 'ג׳',
        wed: 'ד׳',
        thu: 'ה׳',
        fri: 'ו׳',
        sat: 'שבת'
      },
      months: {
        jan: 'ינואר',
        feb: 'פברואר',
        mar: 'מרץ',
        apr: 'אפריל',
        may: 'מאי',
        jun: 'יוני',
        jul: 'יולי',
        aug: 'אוגוסט',
        sep: 'ספטמבר',
        oct: 'אוקטובר',
        nov: 'נובמבר',
        dec: 'דצמבר'
      }
    },
    select: {
      loading: 'טוען',
      noMatch: 'לא נמצאו נתונים',
      noData: 'ללא נתונים',
      placeholder: 'בחר'
    },
    cascader: {
      noMatch: 'ללא נתונים מתאימים',
      loading: 'טוען',
      placeholder: 'בחר'
    },
    pagination: {
      goto: 'עבור ל',
      pagesize: '/page',
      total: 'כולל {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: 'הודעה',
      confirm: 'אישור',
      cancel: 'בטל',
      error: 'קלט לא תקין'
    },
    upload: {
      deleteTip: 'press delete to remove', // to be translated
      delete: 'מחק',
      preview: 'תצוגה מקדימה',
      continue: 'המשך'
    },
    table: {
      emptyText: 'אין נתונים',
      confirmFilter: 'אישור',
      resetFilter: 'נקה',
      clearFilter: 'הכל',
      sumText: 'סך'
    },
    tree: {
      emptyText: 'אין נתונים'
    },
    transfer: {
      noMatch: 'אין נתונים מתאימים',
      noData: 'ללא נתונים',
      titles: ['רשימה 1', 'רשימה 2'],
      filterPlaceholder: 'הקלד',
      noCheckedFormat: 'פריטים {total}',
      hasCheckedFormat: ' אישור {checked}/{total}'
    }
  }
};

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  el: {
    colorpicker: {
      confirm: 'OK',
      clear: 'Törlés'
    },
    datepicker: {
      now: 'Most',
      today: 'Ma',
      cancel: 'Mégse',
      clear: 'Törlés',
      confirm: 'OK',
      selectDate: 'Dátum',
      selectTime: 'Időpont',
      startDate: 'Dátum-tól',
      startTime: 'Időpont-tól',
      endDate: 'Dátum-ig',
      endTime: 'Időpont-ig',
      prevYear: 'Előző év',
      nextYear: 'Következő év',
      prevMonth: 'Előző hónap',
      nextMonth: 'Következő hónap',
      year: '',
      month1: 'Január',
      month2: 'Február',
      month3: 'Március',
      month4: 'Április',
      month5: 'Május',
      month6: 'Június',
      month7: 'Július',
      month8: 'Augusztus',
      month9: 'Szeptember',
      month10: 'Október',
      month11: 'November',
      month12: 'December',
      weeks: {
        sun: 'Vas',
        mon: 'Hét',
        tue: 'Ked',
        wed: 'Sze',
        thu: 'Csü',
        fri: 'Pén',
        sat: 'Szo'
      },
      months: {
        jan: 'Jan',
        feb: 'Feb',
        mar: 'Már',
        apr: 'Ápr',
        may: 'Máj',
        jun: 'Jún',
        jul: 'Júl',
        aug: 'Aug',
        sep: 'Szep',
        oct: 'Okt',
        nov: 'Nov',
        dec: 'Dec'
      }
    },
    select: {
      loading: 'Betöltés',
      noMatch: 'Nincs találat',
      noData: 'Nincs adat',
      placeholder: 'Válassz'
    },
    cascader: {
      noMatch: 'Nincs találat',
      loading: 'Betöltés',
      placeholder: 'Válassz'
    },
    pagination: {
      goto: 'Ugrás',
      pagesize: '/page',
      total: 'Össz {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: 'Üzenet',
      confirm: 'OK',
      cancel: 'Mégse',
      error: 'Hibás adat'
    },
    upload: {
      deleteTip: 'kattints a törléshez',
      delete: 'Törlés',
      preview: 'Előnézet',
      continue: 'Tovább'
    },
    table: {
      emptyText: 'Nincs adat',
      confirmFilter: 'Megerősít',
      resetFilter: 'Alaphelyet',
      clearFilter: 'Mind',
      sumText: 'Összeg'
    },
    tree: {
      emptyText: 'Nincs adat'
    },
    transfer: {
      noMatch: 'Nincs találat',
      noData: 'Nincs adat',
      titles: ['Lista 1', 'Lista 2'],
      filterPlaceholder: 'Kulcsszó',
      noCheckedFormat: '{total} elem',
      hasCheckedFormat: '{checked}/{total} kiválasztva'
    }
  }
};

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  el: {
    colorpicker: {
      confirm: 'Pilih',
      clear: 'Kosongkan'
    },
    datepicker: {
      now: 'Sekarang',
      today: 'Hari ini',
      cancel: 'Batal',
      clear: 'Kosongkan',
      confirm: 'Ya',
      selectDate: 'Pilih tanggal',
      selectTime: 'Pilih waktu',
      startDate: 'Tanggal Mulai',
      startTime: 'Waktu Mulai',
      endDate: 'Tanggal Selesai',
      endTime: 'Waktu Selesai',
      prevYear: 'Previous Year', // to be translated
      nextYear: 'Next Year', // to be translated
      prevMonth: 'Previous Month', // to be translated
      nextMonth: 'Next Month', // to be translated
      year: 'Tahun',
      month1: 'Januari',
      month2: 'Februari',
      month3: 'Maret',
      month4: 'April',
      month5: 'Mei',
      month6: 'Juni',
      month7: 'Juli',
      month8: 'Agustus',
      month9: 'September',
      month10: 'Oktober',
      month11: 'November',
      month12: 'Desember',
      // week: 'minggu',
      weeks: {
        sun: 'Min',
        mon: 'Sen',
        tue: 'Sel',
        wed: 'Rab',
        thu: 'Kam',
        fri: 'Jum',
        sat: 'Sab'
      },
      months: {
        jan: 'Jan',
        feb: 'Feb',
        mar: 'Mar',
        apr: 'Apr',
        may: 'Mei',
        jun: 'Jun',
        jul: 'Jul',
        aug: 'Agu',
        sep: 'Sep',
        oct: 'Okt',
        nov: 'Nov',
        dec: 'Des'
      }
    },
    select: {
      loading: 'Memuat',
      noMatch: 'Tidak ada data yg cocok',
      noData: 'Tidak ada data',
      placeholder: 'Pilih'
    },
    cascader: {
      noMatch: 'Tidak ada data yg cocok',
      loading: 'Memuat',
      placeholder: 'Pilih'
    },
    pagination: {
      goto: 'Pergi ke',
      pagesize: '/laman',
      total: 'Total {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: 'Pesan',
      confirm: 'Ya',
      cancel: 'Batal',
      error: 'Masukan ilegal'
    },
    upload: {
      deleteTip: 'press delete to remove', // to be translated
      delete: 'Hapus',
      preview: 'Pratinjau',
      continue: 'Lanjutkan'
    },
    table: {
      emptyText: 'Tidak ada data',
      confirmFilter: 'Konfirmasi',
      resetFilter: 'Atur ulang',
      clearFilter: 'Semua',
      sumText: 'Jml'
    },
    tree: {
      emptyText: 'Tidak ada data'
    },
    transfer: {
      noMatch: 'Tidak ada data yg cocok',
      noData: 'Tidak ada data',
      titles: ['Senarai 1', 'Senarai 2'],
      filterPlaceholder: 'Masukan kata kunci',
      noCheckedFormat: '{total} butir',
      hasCheckedFormat: '{checked}/{total} terpilih'
    }
  }
};

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  el: {
    colorpicker: {
      confirm: 'OK',
      clear: 'Pulisci'
    },
    datepicker: {
      now: 'Ora',
      today: 'Oggi',
      cancel: 'Cancella',
      clear: 'Pulisci',
      confirm: 'OK',
      selectDate: 'Seleziona data',
      selectTime: 'Seleziona ora',
      startDate: 'Data inizio',
      startTime: 'Ora inizio',
      endDate: 'Data fine',
      endTime: 'Ora fine',
      prevYear: 'Previous Year', // to be translated
      nextYear: 'Next Year', // to be translated
      prevMonth: 'Previous Month', // to be translated
      nextMonth: 'Next Month', // to be translated
      year: 'Anno',
      month1: 'Gennaio',
      month2: 'Febbraio',
      month3: 'Marzo',
      month4: 'Aprile',
      month5: 'Maggio',
      month6: 'Giugno',
      month7: 'Luglio',
      month8: 'Agosto',
      month9: 'Settembre',
      month10: 'Ottobre',
      month11: 'Novembre',
      month12: 'Dicembre',
      // week: 'settimana',
      weeks: {
        sun: 'Dom',
        mon: 'Lun',
        tue: 'Mar',
        wed: 'Mer',
        thu: 'Gio',
        fri: 'Ven',
        sat: 'Sab'
      },
      months: {
        jan: 'Gen',
        feb: 'Feb',
        mar: 'Mar',
        apr: 'Apr',
        may: 'Mag',
        jun: 'Giu',
        jul: 'Lug',
        aug: 'Ago',
        sep: 'Set',
        oct: 'Ott',
        nov: 'Nov',
        dec: 'Dic'
      }
    },
    select: {
      loading: 'Caricamento',
      noMatch: 'Nessuna corrispondenza',
      noData: 'Nessun dato',
      placeholder: 'Seleziona'
    },
    cascader: {
      noMatch: 'Nessuna corrispondenza',
      loading: 'Caricamento',
      placeholder: 'Seleziona'
    },
    pagination: {
      goto: 'Vai a',
      pagesize: '/page',
      total: 'Totale {total}',
      pageClassifier: ''
    },
    messagebox: {
      confirm: 'OK',
      cancel: 'Cancella',
      error: 'Input non valido'
    },
    upload: {
      deleteTip: 'press delete to remove', // to be translated
      delete: 'Cancella',
      preview: 'Anteprima',
      continue: 'Continua'
    },
    table: {
      emptyText: 'Nessun dato',
      confirmFilter: 'Conferma',
      resetFilter: 'Reset',
      clearFilter: 'Tutti',
      sumText: 'Sum' // to be translated
    },
    tree: {
      emptyText: 'Nessun dato'
    },
    transfer: {
      noMatch: 'Nessuna corrispondenza',
      noData: 'Nessun dato',
      titles: ['List 1', 'List 2'], // to be translated
      filterPlaceholder: 'Enter keyword', // to be translated
      noCheckedFormat: '{total} items', // to be translated
      hasCheckedFormat: '{checked}/{total} checked' // to be translated
    }
  }
};

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  el: {
    colorpicker: {
      confirm: 'OK',
      clear: 'クリア'
    },
    datepicker: {
      now: '現在',
      today: '今日',
      cancel: 'キャンセル',
      clear: 'クリア',
      confirm: 'はい',
      selectDate: '日付を選択',
      selectTime: '時間を選択',
      startDate: '開始日',
      startTime: '開始時間',
      endDate: '終了日',
      endTime: '終了時間',
      prevYear: 'Previous Year', // to be translated
      nextYear: 'Next Year', // to be translated
      prevMonth: 'Previous Month', // to be translated
      nextMonth: 'Next Month', // to be translated
      year: '年',
      month1: '1月',
      month2: '2月',
      month3: '3月',
      month4: '4月',
      month5: '5月',
      month6: '6月',
      month7: '7月',
      month8: '8月',
      month9: '9月',
      month10: '10月',
      month11: '11月',
      month12: '12月',
      // week: '週次',
      weeks: {
        sun: '日',
        mon: '月',
        tue: '火',
        wed: '水',
        thu: '木',
        fri: '金',
        sat: '土'
      },
      months: {
        jan: '1月',
        feb: '2月',
        mar: '3月',
        apr: '4月',
        may: '5月',
        jun: '6月',
        jul: '7月',
        aug: '8月',
        sep: '9月',
        oct: '10月',
        nov: '11月',
        dec: '12月'
      }
    },
    select: {
      loading: 'ロード中',
      noMatch: 'データなし',
      noData: 'データなし',
      placeholder: '選択してください'
    },
    cascader: {
      noMatch: 'データなし',
      loading: 'ロード中',
      placeholder: '選択してください'
    },
    pagination: {
      goto: '',
      pagesize: '件/ページ',
      total: '総計 {total} 件',
      pageClassifier: 'ページ目へ'
    },
    messagebox: {
      title: 'メッセージ',
      confirm: 'はい',
      cancel: 'キャンセル',
      error: '正しくない入力'
    },
    upload: {
      deleteTip: 'press delete to remove', // to be translated
      delete: '削除する',
      preview: 'プレビュー',
      continue: '続行する'
    },
    table: {
      emptyText: 'データなし',
      confirmFilter: '確認',
      resetFilter: '初期化',
      clearFilter: 'すべて',
      sumText: 'Sum' // to be translated
    },
    tree: {
      emptyText: 'データなし'
    },
    transfer: {
      noMatch: 'データなし',
      noData: 'データなし',
      titles: ['List 1', 'List 2'], // to be translated
      filterPlaceholder: 'Enter keyword', // to be translated
      noCheckedFormat: '{total} items', // to be translated
      hasCheckedFormat: '{checked}/{total} checked' // to be translated
    }
  }
};

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  el: {
    colorpicker: {
      confirm: '확인',
      clear: '초기화'
    },
    datepicker: {
      now: '지금',
      today: '오늘',
      cancel: '취소',
      clear: '초기화',
      confirm: '확인',
      selectDate: '날짜 선택',
      selectTime: '시간 선택',
      startDate: '시작 날짜',
      startTime: '시작 시간',
      endDate: '종료 날짜',
      endTime: '종료 시간',
      prevYear: '지난해',
      nextYear: '다음해',
      prevMonth: '지난달',
      nextMonth: '다음달',
      year: '년',
      month1: '1월',
      month2: '2월',
      month3: '3월',
      month4: '4월',
      month5: '5월',
      month6: '6월',
      month7: '7월',
      month8: '8월',
      month9: '9월',
      month10: '10월',
      month11: '11월',
      month12: '12월',
      // week: 'week',
      weeks: {
        sun: '일',
        mon: '월',
        tue: '화',
        wed: '수',
        thu: '목',
        fri: '금',
        sat: '토'
      },
      months: {
        jan: '1월',
        feb: '2월',
        mar: '3월',
        apr: '4월',
        may: '5월',
        jun: '6월',
        jul: '7월',
        aug: '8월',
        sep: '9월',
        oct: '10월',
        nov: '11월',
        dec: '12월'
      }
    },
    select: {
      loading: '불러오는 중',
      noMatch: '맞는 데이터가 없습니다',
      noData: '데이터 없음',
      placeholder: '선택'
    },
    cascader: {
      noMatch: '맞는 데이터가 없습니다',
      loading: '불러오는 중',
      placeholder: '선택'
    },
    pagination: {
      goto: '이동',
      pagesize: '/page',
      total: '총 {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: '메시지',
      confirm: '확인',
      cancel: '취소',
      error: '올바르지 않은 입력'
    },
    upload: {
      deleteTip: '클릭시 삭제됩니다',
      delete: '삭제',
      preview: '미리보기',
      continue: '계속하기'
    },
    table: {
      emptyText: '데이터 없음',
      confirmFilter: '확인',
      resetFilter: '초기화',
      clearFilter: '전체',
      sumText: '합'
    },
    tree: {
      emptyText: '데이터 없음'
    },
    transfer: {
      noMatch: '맞는 데이터가 없습니다',
      noData: '데이터 없음',
      titles: ['리스트 1', '리스트 2'],
      filterPlaceholder: ' 입력하세요',
      noCheckedFormat: '{total} 항목',
      hasCheckedFormat: '{checked}/{total} 선택됨'
    }
  }
};

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  el: {
    colorpicker: {
      confirm: 'Қабылдау',
      clear: 'Тазалау'
    },
    datepicker: {
      now: 'Қазір',
      today: 'Бүгін',
      cancel: 'Болдырмау',
      clear: 'Тазалау',
      confirm: 'Қабылдау',
      selectDate: 'Күнді таңдаңыз',
      selectTime: 'Сағатты таңдаңыз',
      startDate: 'Басталу күні',
      startTime: 'Басталу сағаты',
      endDate: 'Аяқталу күні',
      endTime: 'Аяқталу сағаты',
      prevYear: 'Алдыңғы жыл',
      nextYear: 'Келесі жыл',
      prevMonth: 'Алдыңғы ай',
      nextMonth: 'Келесі ай',
      year: 'Жыл',
      month1: 'Қаңтар',
      month2: 'Ақпан',
      month3: 'Наурыз',
      month4: 'Сәуір',
      month5: 'Мамыр',
      month6: 'Маусым',
      month7: 'Шілде',
      month8: 'Тамыз',
      month9: 'Қыркүйек',
      month10: 'Қазан',
      month11: 'Қараша',
      month12: 'Желтоқсан',
      week: 'Апта',
      weeks: {
        sun: 'Жек',
        mon: 'Дүй',
        tue: 'Сей',
        wed: 'Сәр',
        thu: 'Бей',
        fri: 'Жұм',
        sat: 'Сен'
      },
      months: {
        jan: 'Қаң',
        feb: 'Ақп',
        mar: 'Нау',
        apr: 'Сәу',
        may: 'Мам',
        jun: 'Мау',
        jul: 'Шіл',
        aug: 'Там',
        sep: 'Қыр',
        oct: 'Қаз',
        nov: 'Қар',
        dec: 'Жел'
      }
    },
    select: {
      loading: 'Жүктелуде',
      noMatch: 'Сәйкес деректер жоқ',
      noData: 'Деректер жоқ',
      placeholder: 'Таңдаңыз'
    },
    cascader: {
      noMatch: 'Сәйкес деректер жоқ',
      loading: 'Жүктелуде',
      placeholder: 'Таңдаңыз'
    },
    pagination: {
      goto: 'Бару',
      pagesize: '/page',
      total: 'Барлығы {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: 'Хабар',
      confirm: 'Қабылдау',
      cancel: 'Болдырмау',
      error: 'Жарамсыз енгізулер'
    },
    upload: {
      deleteTip: 'Өшіруді басып өшіріңіз',
      delete: 'Өшіру',
      preview: 'Алдын ала қарау',
      continue: 'Жалғастыру'
    },
    table: {
      emptyText: 'Деректер жоқ',
      confirmFilter: 'Қабылдау',
      resetFilter: 'Қалпына келтіру',
      clearFilter: 'Барлығы',
      sumText: 'Сомасы'
    },
    tree: {
      emptyText: 'Деректер жоқ'
    },
    transfer: {
      noMatch: 'Сәйкес деректер жоқ',
      noData: 'Деректер жоқ',
      titles: ['List 1', 'List 2'],
      filterPlaceholder: 'Кілт сөзді енгізіңіз',
      noCheckedFormat: '{total} элэмэнт',
      hasCheckedFormat: '{checked}/{total} құсбелгісі қойылды'
    }
  }
};

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  el: {
    colorpicker: {
      confirm: 'OK',
      clear: 'Valyti'
    },
    datepicker: {
      now: 'Dabar',
      today: 'Šiandien',
      cancel: 'Atšaukti',
      clear: 'Vakyti',
      confirm: 'OK',
      selectDate: 'Pasirink datą',
      selectTime: 'Pasirink laiką',
      startDate: 'Data nuo',
      startTime: 'Laikas nuo',
      endDate: 'Data iki',
      endTime: 'Laikas iki',
      prevYear: 'Metai atgal',
      nextYear: 'Metai į priekį',
      prevMonth: 'Mėn. atgal',
      nextMonth: 'Mėn. į priekį',
      year: '',
      month1: 'Sausis',
      month2: 'Vasaris',
      month3: 'Kovas',
      month4: 'Balandis',
      month5: 'Gegužė',
      month6: 'Birželis',
      month7: 'Liepa',
      month8: 'Rugpjūtis',
      month9: 'Rugsėjis',
      month10: 'Spalis',
      month11: 'Lapkritis',
      month12: 'Gruodis',
      // week: 'savaitė',
      weeks: {
        sun: 'S.',
        mon: 'Pr.',
        tue: 'A.',
        wed: 'T.',
        thu: 'K.',
        fri: 'Pn.',
        sat: 'Š.'
      },
      months: {
        jan: 'Sau',
        feb: 'Vas',
        mar: 'Kov',
        apr: 'Bal',
        may: 'Geg',
        jun: 'Bir',
        jul: 'Lie',
        aug: 'Rugp',
        sep: 'Rugs',
        oct: 'Spa',
        nov: 'Lap',
        dec: 'Gruo'
      }
    },
    select: {
      loading: 'Kraunasi',
      noMatch: 'Duomenų nerasta',
      noData: 'Nėra duomenų',
      placeholder: 'Pasirink'
    },
    cascader: {
      noMatch: 'Duomenų nerasta',
      loading: 'Kraunasi',
      placeholder: 'Pasirink'
    },
    pagination: {
      goto: 'Eiti į',
      pagesize: '/p',
      total: 'Viso {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: 'Žinutė',
      confirm: 'OK',
      cancel: 'Atšaukti',
      error: 'Klaida įvestuose duomenyse'
    },
    upload: {
      deleteTip: 'spauskite "Trinti" norėdami pašalinti',
      delete: 'Trinti',
      preview: 'Peržiūrėti',
      continue: 'Toliau'
    },
    table: {
      emptyText: 'Duomenų nerasta',
      confirmFilter: 'Patvirtinti',
      resetFilter: 'Atstatyti',
      clearFilter: 'Išvalyti',
      sumText: 'Suma'
    },
    tree: {
      emptyText: 'Nėra duomenų'
    },
    transfer: {
      noMatch: 'Duomenų nerasta',
      noData: 'Nėra duomenų',
      titles: ['Sąrašas 1', 'Sąrašas 2'],
      filterPlaceholder: 'Įvesk raktažodį',
      noCheckedFormat: 'Viso: {total}',
      hasCheckedFormat: 'Pažymėta {checked} iš {total}'
    }
  }
};

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  el: {
    colorpicker: {
      confirm: 'Labi',
      clear: 'Notīrīt'
    },
    datepicker: {
      now: 'Tagad',
      today: 'Šodien',
      cancel: 'Atcelt',
      clear: 'Notīrīt',
      confirm: 'Labi',
      selectDate: 'Izvēlēties datumu',
      selectTime: 'Izvēlēties laiku',
      startDate: 'Sākuma datums',
      startTime: 'Sākuma laiks',
      endDate: 'Beigu datums',
      endTime: 'Beigu laiks',
      prevYear: 'Previous Year', // to be translated
      nextYear: 'Next Year', // to be translated
      prevMonth: 'Previous Month', // to be translated
      nextMonth: 'Next Month', // to be translated
      year: '',
      month1: 'Janvāris',
      month2: 'Februāris',
      month3: 'Marts',
      month4: 'Aprīlis',
      month5: 'Maijs',
      month6: 'Jūnijs',
      month7: 'Jūlijs',
      month8: 'Augusts',
      month9: 'Septembris',
      month10: 'Oktobris',
      month11: 'Novembris',
      month12: 'Decembris',
      // week: 'nedēļa',
      weeks: {
        sun: 'Sv',
        mon: 'Pr',
        tue: 'Ot',
        wed: 'Tr',
        thu: 'Ce',
        fri: 'Pk',
        sat: 'Se'
      },
      months: {
        jan: 'Jan',
        feb: 'Feb',
        mar: 'Mar',
        apr: 'Apr',
        may: 'Mai',
        jun: 'Jūn',
        jul: 'Jūl',
        aug: 'Aug',
        sep: 'Sep',
        oct: 'Okt',
        nov: 'Nov',
        dec: 'Dec'
      }
    },
    select: {
      loading: 'Ielādē',
      noMatch: 'Nav atbilstošu datu',
      noData: 'Nav datu',
      placeholder: 'Izvēlēties'
    },
    cascader: {
      noMatch: 'Nav atbilstošu datu',
      loading: 'Ielādē',
      placeholder: 'Izvēlēties'
    },
    pagination: {
      goto: 'Iet uz',
      pagesize: '/page',
      total: 'Kopā {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: 'Paziņojums',
      confirm: 'Labi',
      cancel: 'Atcelt',
      error: 'Nederīga ievade'
    },
    upload: {
      deleteTip: 'press delete to remove', // to be translated
      delete: 'Dzēst',
      preview: 'Priekšskatīt',
      continue: 'Turpināt'
    },
    table: {
      emptyText: 'Nav datu',
      confirmFilter: 'Apstiprināt',
      resetFilter: 'Reset',
      clearFilter: 'Visi',
      sumText: 'Summa'
    },
    tree: {
      emptyText: 'Nav datu'
    },
    transfer: {
      noMatch: 'Nav atbilstošu datu',
      noData: 'Nav datu',
      titles: ['Saraksts 1', 'Saraksts 2'],
      filterPlaceholder: 'Ievadīt atslēgvārdu',
      noCheckedFormat: '{total} vienības',
      hasCheckedFormat: '{checked}/{total} atzīmēti'
    }
  }
};

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  el: {
    colorpicker: {
      confirm: 'Тийм',
      clear: 'Цэвэрлэх'
    },
    datepicker: {
      now: 'Одоо',
      today: 'Өнөөдөр',
      cancel: 'Болих',
      clear: 'Цэвэрлэх',
      confirm: 'Тийм',
      selectDate: 'Огноог сонго',
      selectTime: 'Цагийг сонго',
      startDate: 'Эхлэх огноо',
      startTime: 'Эхлэх цаг',
      endDate: 'Дуусах огноо',
      endTime: 'Дуусах цаг',
      prevYear: 'Өмнөх жил',
      nextYear: 'Дараа жил',
      prevMonth: 'Өмнөх сар',
      nextMonth: 'Дараа сар',
      year: 'он',
      month1: '1 сар',
      month2: '2 сар',
      month3: '3 сар',
      month4: '4 сар',
      month5: '5 сар',
      month6: '6 сар',
      month7: '7 сар',
      month8: '8 сар',
      month9: '9 сар',
      month10: '10 сар',
      month11: '11 сар',
      month12: '12 сар',
      week: 'Долоо хоног',
      weeks: {
        sun: 'Ням',
        mon: 'Дав',
        tue: 'Мяг',
        wed: 'Лха',
        thu: 'Пүр',
        fri: 'Баа',
        sat: 'Бям'
      },
      months: {
        jan: '1 сар',
        feb: '2 сар',
        mar: '3 сар',
        apr: '4 сар',
        may: '5 сар',
        jun: '6 сар',
        jul: '7 сар',
        aug: '8 сар',
        sep: '9 сар',
        oct: '10 сар',
        nov: '11 сар',
        dec: '12 сар'
      }
    },
    select: {
      loading: 'Ачаалж байна',
      noMatch: 'Тохирох өгөгдөл байхгүй',
      noData: 'Өгөгдөл байхгүй',
      placeholder: 'Сонгох'
    },
    cascader: {
      noMatch: 'Тохирох өгөгдөл байхгүй',
      loading: 'Ачаалж байна',
      placeholder: 'Сонгох'
    },
    pagination: {
      goto: 'Очих',
      pagesize: '/хуудас',
      total: 'Нийт {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: 'Зурвас',
      confirm: 'Тийм',
      cancel: 'Болих',
      error: 'Буруу утга'
    },
    upload: {
      deleteTip: 'Устгахын дарж арилга',
      delete: 'Устгах',
      preview: 'Өмнөх',
      continue: 'Үргэлжлүүлэх'
    },
    table: {
      emptyText: 'Өгөгдөл байхгүй',
      confirmFilter: 'Зөвшөөрөх',
      resetFilter: 'Цэвэрлэх',
      clearFilter: 'Бүгд',
      sumText: 'Нийт'
    },
    tree: {
      emptyText: 'Өгөгдөл байхгүй'
    },
    transfer: {
      noMatch: 'Тохирох өгөгдөл байхгүй',
      noData: 'Өгөгдөл байхгүй',
      titles: ['Жагсаалт 1', 'Жагсаалт 2'],
      filterPlaceholder: 'Утга оруул',
      noCheckedFormat: '{total} өгөгдөл',
      hasCheckedFormat: '{checked}/{total} сонгосон'
    }
  }
};

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  el: {
    colorpicker: {
      confirm: 'OK',
      clear: 'Tøm'
    },
    datepicker: {
      now: 'Nå',
      today: 'I dag',
      cancel: 'Avbryt',
      clear: 'Tøm',
      confirm: 'OK',
      selectDate: 'Velg dato',
      selectTime: 'Velg tidspunkt',
      startDate: 'Start Dato',
      startTime: 'Start Tidspunkt',
      endDate: 'Sluttdato',
      endTime: 'Sluttidspunkt',
      prevYear: 'Previous Year', // to be translated
      nextYear: 'Next Year', // to be translated
      prevMonth: 'Previous Month', // to be translated
      nextMonth: 'Next Month', // to be translated
      year: '',
      month1: 'Januar',
      month2: 'Februar',
      month3: 'Mars',
      month4: 'April',
      month5: 'Mai',
      month6: 'Juni',
      month7: 'Juli',
      month8: 'August',
      month9: 'September',
      month10: 'Oktober',
      month11: 'November',
      month12: 'Desember',
      // week: 'week',
      weeks: {
        sun: 'Søn',
        mon: 'Man',
        tue: 'Tir',
        wed: 'Ons',
        thu: 'Tor',
        fri: 'Fre',
        sat: 'Lør'
      },
      months: {
        jan: 'Jan',
        feb: 'Feb',
        mar: 'Mar',
        apr: 'Apr',
        may: 'Mai',
        jun: 'Jun',
        jul: 'Jul',
        aug: 'Aug',
        sep: 'Sep',
        oct: 'Okt',
        nov: 'Nov',
        dec: 'Des'
      }
    },
    select: {
      loading: 'Laster',
      noMatch: 'Ingen samsvarende data',
      noData: 'Ingen data',
      placeholder: 'Velg'
    },
    cascader: {
      noMatch: 'Ingen samsvarende data',
      loading: 'Laster',
      placeholder: 'Velg'
    },
    pagination: {
      goto: 'Gå til',
      pagesize: '/side',
      total: 'Total {total}',
      pageClassifier: ''
    },
    messagebox: {
      confirm: 'OK',
      cancel: 'Avbryt',
      error: 'Ugyldig input'
    },
    upload: {
      deleteTip: 'press delete to remove', // to be translated
      delete: 'Slett',
      preview: 'Forhåndsvisning',
      continue: 'Fortsett'
    },
    table: {
      emptyText: 'Ingen Data',
      confirmFilter: 'Bekreft',
      resetFilter: 'Tilbakestill',
      clearFilter: 'Alle',
      sumText: 'Sum' // to be translated
    },
    tree: {
      emptyText: 'Ingen Data'
    },
    transfer: {
      noMatch: 'Ingen samsvarende data',
      noData: 'Ingen data',
      titles: ['List 1', 'List 2'], // to be translated
      filterPlaceholder: 'Enter keyword', // to be translated
      noCheckedFormat: '{total} items', // to be translated
      hasCheckedFormat: '{checked}/{total} checked' // to be translated
    }
  }
};

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  el: {
    colorpicker: {
      confirm: 'Bevestig',
      clear: 'Wissen'
    },
    datepicker: {
      now: 'Nu',
      today: 'Vandaag',
      cancel: 'Annuleren',
      clear: 'Legen',
      confirm: 'Bevestig',
      selectDate: 'Selecteer datum',
      selectTime: 'Selecteer tijd',
      startDate: 'Startdatum',
      startTime: 'Starttijd',
      endDate: 'Einddatum',
      endTime: 'Eindtijd',
      prevYear: 'Vorig jaar',
      nextYear: 'Volgend jaar',
      prevMonth: 'Vorige maand',
      nextMonth: 'Volgende maand',
      year: '',
      month1: 'januari',
      month2: 'februari',
      month3: 'maart',
      month4: 'april',
      month5: 'mei',
      month6: 'juni',
      month7: 'juli',
      month8: 'augustus',
      month9: 'september',
      month10: 'oktober',
      month11: 'november',
      month12: 'december',
      // week: 'week',
      weeks: {
        sun: 'Zo',
        mon: 'Ma',
        tue: 'Di',
        wed: 'Wo',
        thu: 'Do',
        fri: 'Vr',
        sat: 'Za'
      },
      months: {
        jan: 'jan',
        feb: 'feb',
        mar: 'maa',
        apr: 'apr',
        may: 'mei',
        jun: 'jun',
        jul: 'jul',
        aug: 'aug',
        sep: 'sep',
        oct: 'okt',
        nov: 'nov',
        dec: 'dec'
      }
    },
    select: {
      loading: 'Laden',
      noMatch: 'Geen overeenkomende resultaten',
      noData: 'Geen data',
      placeholder: 'Selecteer'
    },
    cascader: {
      noMatch: 'Geen overeenkomende resultaten',
      loading: 'Laden',
      placeholder: 'Selecteer'
    },
    pagination: {
      goto: 'Ga naar',
      pagesize: '/pagina',
      total: 'Totaal {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: 'Bericht',
      confirm: 'Bevestig',
      cancel: 'Annuleren',
      error: 'Ongeldige invoer'
    },
    upload: {
      deleteTip: 'Kies verwijder om te wissen',
      delete: 'Verwijder',
      preview: 'Voorbeeld',
      continue: 'Doorgaan'
    },
    table: {
      emptyText: 'Geen data',
      confirmFilter: 'Bevestigen',
      resetFilter: 'Reset',
      clearFilter: 'Alles',
      sumText: 'Som'
    },
    tree: {
      emptyText: 'Geen data'
    },
    transfer: {
      noMatch: 'Geen overeenkomende resultaten',
      noData: 'Geen data',
      titles: ['Lijst 1', 'Lijst 2'],
      filterPlaceholder: 'Geef zoekwoerd',
      noCheckedFormat: '{total} items',
      hasCheckedFormat: '{checked}/{total} geselecteerd'
    }
  }
};

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  el: {
    colorpicker: {
      confirm: 'OK',
      clear: 'Wyczyść'
    },
    datepicker: {
      now: 'Teraz',
      today: 'Dzisiaj',
      cancel: 'Anuluj',
      clear: 'Wyczyść',
      confirm: 'OK',
      selectDate: 'Wybierz datę',
      selectTime: 'Wybierz godzinę',
      startDate: 'Data początkowa',
      startTime: 'Godzina początkowa',
      endDate: 'Data końcowa',
      endTime: 'Czas końcowa',
      prevYear: 'Previous Year', // to be translated
      nextYear: 'Next Year', // to be translated
      prevMonth: 'Previous Month', // to be translated
      nextMonth: 'Next Month', // to be translated
      year: 'rok',
      month1: 'styczeń',
      month2: 'luty',
      month3: 'marzec',
      month4: 'kwiecień',
      month5: 'maj',
      month6: 'czerwiec',
      month7: 'lipiec',
      month8: 'sierpień',
      month9: 'wrzesień',
      month10: 'październik',
      month11: 'listopad',
      month12: 'grudzień',
      week: 'tydzień',
      weeks: {
        sun: 'niedz.',
        mon: 'pon.',
        tue: 'wt.',
        wed: 'śr.',
        thu: 'czw.',
        fri: 'pt.',
        sat: 'sob.'
      },
      months: {
        jan: 'STY',
        feb: 'LUT',
        mar: 'MAR',
        apr: 'KWI',
        may: 'MAJ',
        jun: 'CZE',
        jul: 'LIP',
        aug: 'SIE',
        sep: 'WRZ',
        oct: 'PAŹ',
        nov: 'LIS',
        dec: 'GRU'
      }
    },
    select: {
      loading: 'Ładowanie',
      noMatch: 'Brak dopasowań',
      noData: 'Brak danych',
      placeholder: 'Wybierz'
    },
    cascader: {
      noMatch: 'Brak dopasowań',
      loading: 'Ładowanie',
      placeholder: 'Wybierz'
    },
    pagination: {
      goto: 'Idź do',
      pagesize: '/strona',
      total: 'Wszystkich {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: 'Wiadomość',
      confirm: 'OK',
      cancel: 'Anuluj',
      error: 'Wiadomość zawiera niedozwolone znaki'
    },
    upload: {
      deleteTip: 'press delete to remove', // to be translated
      delete: 'Kasuj',
      preview: 'Podgląd',
      continue: 'Kontynuuj'
    },
    table: {
      emptyText: 'Brak danych',
      confirmFilter: 'Potwierdź',
      resetFilter: 'Resetuj',
      clearFilter: 'Wszystko',
      sumText: 'Sum' // to be translated
    },
    tree: {
      emptyText: 'Brak danych'
    },
    transfer: {
      noMatch: 'Brak dopasowań',
      noData: 'Brak danych',
      titles: ['List 1', 'List 2'], // to be translated
      filterPlaceholder: 'Enter keyword', // to be translated
      noCheckedFormat: '{total} items', // to be translated
      hasCheckedFormat: '{checked}/{total} checked' // to be translated
    }
  }
};

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  el: {
    colorpicker: {
      confirm: 'Confirmar',
      clear: 'Limpar'
    },
    datepicker: {
      now: 'Agora',
      today: 'Hoje',
      cancel: 'Cancelar',
      clear: 'Limpar',
      confirm: 'Confirmar',
      selectDate: 'Selecione a data',
      selectTime: 'Selecione a hora',
      startDate: 'Data de inicio',
      startTime: 'Hora de inicio',
      endDate: 'Data de fim',
      endTime: 'Hora de fim',
      prevYear: 'Previous Year', // to be translated
      nextYear: 'Next Year', // to be translated
      prevMonth: 'Previous Month', // to be translated
      nextMonth: 'Next Month', // to be translated
      year: '',
      month1: 'Janeiro',
      month2: 'Fevereiro',
      month3: 'Março',
      month4: 'Abril',
      month5: 'Maio',
      month6: 'Junho',
      month7: 'Julho',
      month8: 'Agosto',
      month9: 'Setembro',
      month10: 'Outubro',
      month11: 'Novembro',
      month12: 'Dezembro',
      // week: 'semana',
      weeks: {
        sun: 'Dom',
        mon: 'Seg',
        tue: 'Ter',
        wed: 'Qua',
        thu: 'Qui',
        fri: 'Sex',
        sat: 'Sab'
      },
      months: {
        jan: 'Jan',
        feb: 'Fev',
        mar: 'Mar',
        apr: 'Abr',
        may: 'Mai',
        jun: 'Jun',
        jul: 'Jul',
        aug: 'Ago',
        sep: 'Set',
        oct: 'Out',
        nov: 'Nov',
        dec: 'Dez'
      }
    },
    select: {
      loading: 'A carregar',
      noMatch: 'Sem correspondência',
      noData: 'Sem dados',
      placeholder: 'Selecione'
    },
    cascader: {
      noMatch: 'Sem correspondência',
      loading: 'A carregar',
      placeholder: 'Selecione'
    },
    pagination: {
      goto: 'Ir para',
      pagesize: '/pagina',
      total: 'Total {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: 'Mensagem',
      confirm: 'Confirmar',
      cancel: 'Cancelar',
      error: 'Erro!'
    },
    upload: {
      deleteTip: 'press delete to remove', // to be translated
      delete: 'Apagar',
      preview: 'Previsualizar',
      continue: 'Continuar'
    },
    table: {
      emptyText: 'Sem dados',
      confirmFilter: 'Confirmar',
      resetFilter: 'Limpar',
      clearFilter: 'Todos',
      sumText: 'Sum' // to be translated
    },
    tree: {
      emptyText: 'Sem dados'
    },
    transfer: {
      noMatch: 'Sem correspondência',
      noData: 'Sem dados',
      titles: ['List 1', 'List 2'], // to be translated
      filterPlaceholder: 'Enter keyword', // to be translated
      noCheckedFormat: '{total} items', // to be translated
      hasCheckedFormat: '{checked}/{total} checked' // to be translated
    }
  }
};

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  el: {
    colorpicker: {
      confirm: 'Confirmar',
      clear: 'Limpar'
    },
    datepicker: {
      now: 'Agora',
      today: 'Hoje',
      cancel: 'Cancelar',
      clear: 'Limpar',
      confirm: 'Confirmar',
      selectDate: 'Selecione a data',
      selectTime: 'Selecione a hora',
      startDate: 'Data inicial',
      startTime: 'Hora inicial',
      endDate: 'Data final',
      endTime: 'Hora final',
      prevYear: 'Previous Year', // to be translated
      nextYear: 'Next Year', // to be translated
      prevMonth: 'Previous Month', // to be translated
      nextMonth: 'Next Month', // to be translated
      year: '',
      month1: 'Janeiro',
      month2: 'Fevereiro',
      month3: 'Março',
      month4: 'Abril',
      month5: 'Maio',
      month6: 'Junho',
      month7: 'Julho',
      month8: 'Agosto',
      month9: 'Setembro',
      month10: 'Outubro',
      month11: 'Novembro',
      month12: 'Dezembro',
      // week: 'semana',
      weeks: {
        sun: 'Dom',
        mon: 'Seg',
        tue: 'Ter',
        wed: 'Qua',
        thu: 'Qui',
        fri: 'Sex',
        sat: 'Sab'
      },
      months: {
        jan: 'Jan',
        feb: 'Fev',
        mar: 'Mar',
        apr: 'Abr',
        may: 'Mai',
        jun: 'Jun',
        jul: 'Jul',
        aug: 'Ago',
        sep: 'Set',
        oct: 'Out',
        nov: 'Nov',
        dec: 'Dez'
      }
    },
    select: {
      loading: 'Carregando',
      noMatch: 'Sem resultados',
      noData: 'Sem dados',
      placeholder: 'Selecione'
    },
    cascader: {
      noMatch: 'Sem resultados',
      loading: 'Carregando',
      placeholder: 'Selecione'
    },
    pagination: {
      goto: 'Ir para',
      pagesize: '/página',
      total: 'Total {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: 'Mensagem',
      confirm: 'Confirmar',
      cancel: 'Cancelar',
      error: 'Erro!'
    },
    upload: {
      deleteTip: 'press delete to remove', // to be translated
      delete: 'Apagar',
      preview: 'Pré-visualizar',
      continue: 'Continuar'
    },
    table: {
      emptyText: 'Sem dados',
      confirmFilter: 'Confirmar',
      resetFilter: 'Limpar',
      clearFilter: 'Todos',
      sumText: 'Total'
    },
    tree: {
      emptyText: 'Sem dados'
    },
    transfer: {
      noMatch: 'Sem resultados',
      noData: 'Sem dados',
      titles: ['Lista 1', 'Lista 2'],
      filterPlaceholder: 'Digite uma palavra-chave',
      noCheckedFormat: '{total} itens',
      hasCheckedFormat: '{checked}/{total} selecionados'
    }
  }
};

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  el: {
    colorpicker: {
      confirm: 'OK',
      clear: 'Очистить'
    },
    datepicker: {
      now: 'Сейчас',
      today: 'Сегодня',
      cancel: 'Отмена',
      clear: 'Очистить',
      confirm: 'OK',
      selectDate: 'Выбрать дату',
      selectTime: 'Выбрать время',
      startDate: 'Дата начала',
      startTime: 'Время начала',
      endDate: 'Дата окончания',
      endTime: 'Время окончания',
      prevYear: 'Предыдущий год',
      nextYear: 'Следующий год',
      prevMonth: 'Предыдущий месяц',
      nextMonth: 'Следующий месяц',
      year: '',
      month1: 'Январь',
      month2: 'Февраль',
      month3: 'Март',
      month4: 'Апрель',
      month5: 'Май',
      month6: 'Июнь',
      month7: 'Июль',
      month8: 'Август',
      month9: 'Сентябрь',
      month10: 'Октябрь',
      month11: 'Ноябрь',
      month12: 'Декабрь',
      // week: 'week',
      weeks: {
        sun: 'Вс',
        mon: 'Пн',
        tue: 'Вт',
        wed: 'Ср',
        thu: 'Чт',
        fri: 'Пт',
        sat: 'Сб'
      },
      months: {
        jan: 'Янв',
        feb: 'Фев',
        mar: 'Мар',
        apr: 'Апр',
        may: 'Май',
        jun: 'Июн',
        jul: 'Июл',
        aug: 'Авг',
        sep: 'Сен',
        oct: 'Окт',
        nov: 'Ноя',
        dec: 'Дек'
      }
    },
    select: {
      loading: 'Загрузка',
      noMatch: 'Совпадений не найдено',
      noData: 'Нет данных',
      placeholder: 'Выбрать'
    },
    cascader: {
      noMatch: 'Совпадений не найдено',
      loading: 'Загрузка',
      placeholder: 'Выбрать'
    },
    pagination: {
      goto: 'Перейти',
      pagesize: 'на странице',
      total: 'Всего {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: 'Сообщение',
      confirm: 'OK',
      cancel: 'Отмена',
      error: 'Недопустимый ввод данных'
    },
    upload: {
      deleteTip: 'Нажмите [Удалить] для удаления',
      delete: 'Удалить',
      preview: 'Превью',
      continue: 'Продолжить'
    },
    table: {
      emptyText: 'Нет данных',
      confirmFilter: 'Подтвердить',
      resetFilter: 'Сбросить',
      clearFilter: 'Все',
      sumText: 'Сумма'
    },
    tree: {
      emptyText: 'Нет данных'
    },
    transfer: {
      noMatch: 'Совпадений не найдено',
      noData: 'Нет данных',
      titles: ['Список 1', 'Список 2'],
      filterPlaceholder: 'Введите ключевое слово',
      noCheckedFormat: '{total} пунктов',
      hasCheckedFormat: '{checked}/{total} выбрано'
    }
  }
};

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  el: {
    colorpicker: {
      confirm: 'OK',
      clear: 'Zmazať'
    },
    datepicker: {
      now: 'Teraz',
      today: 'Dnes',
      cancel: 'Zrušiť',
      clear: 'Zmazať',
      confirm: 'OK',
      selectDate: 'Vybrať dátum',
      selectTime: 'Vybrať čas',
      startDate: 'Dátum začiatku',
      startTime: 'Čas začiatku',
      endDate: 'Dátum konca',
      endTime: 'Čas konca',
      prevYear: 'Previous Year', // to be translated
      nextYear: 'Next Year', // to be translated
      prevMonth: 'Previous Month', // to be translated
      nextMonth: 'Next Month', // to be translated
      day: 'Deň',
      week: 'Týždeň',
      month: 'Mesiac',
      year: 'Rok',
      month1: 'Január',
      month2: 'Február',
      month3: 'Marec',
      month4: 'Apríl',
      month5: 'Máj',
      month6: 'Jún',
      month7: 'Júl',
      month8: 'August',
      month9: 'September',
      month10: 'Október',
      month11: 'November',
      month12: 'December',
      weeks: {
        sun: 'Ne',
        mon: 'Po',
        tue: 'Ut',
        wed: 'St',
        thu: 'Št',
        fri: 'Pi',
        sat: 'So'
      },
      months: {
        jan: 'Jan',
        feb: 'Feb',
        mar: 'Mar',
        apr: 'Apr',
        may: 'Máj',
        jun: 'Jún',
        jul: 'Júl',
        aug: 'Aug',
        sep: 'Sep',
        oct: 'Okt',
        nov: 'Nov',
        dec: 'Dec'
      }
    },
    select: {
      loading: 'Načítavanie',
      noMatch: 'Žiadna zhoda',
      noData: 'Žiadne dáta',
      placeholder: 'Vybrať'
    },
    cascader: {
      noMatch: 'Žiadna zhoda',
      loading: 'Načítavanie',
      placeholder: 'Vybrať'
    },
    pagination: {
      goto: 'Choď na',
      pagesize: 'na stranu',
      total: 'Všetko {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: 'Správa',
      confirm: 'OK',
      cancel: 'Zrušiť',
      error: 'Neplatný vstup'
    },
    upload: {
      deleteTip: 'press delete to remove', // to be translated
      delete: 'Vymazať',
      preview: 'Prehliadať',
      continue: 'Pokračovať'
    },
    table: {
      emptyText: 'Žiadne dáta',
      confirmFilter: 'Potvrdiť',
      resetFilter: 'Zresetovať',
      clearFilter: 'Všetko',
      sumText: 'Spolu'
    },
    tree: {
      emptyText: 'Žiadne dáta'
    },
    transfer: {
      noMatch: 'Žiadna zhoda',
      noData: 'Žiadne dáta',
      titles: ['Zoznam 1', 'Zoznam 2'],
      filterPlaceholder: 'Filtrovať podľa',
      noCheckedFormat: '{total} položiek',
      hasCheckedFormat: '{checked}/{total} označených'
    }
  }
};

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  el: {
    colorpicker: {
      confirm: 'V redu',
      clear: 'Počisti'
    },
    datepicker: {
      now: 'Zdaj',
      today: 'Danes',
      cancel: 'Prekliči',
      clear: 'Počisti',
      confirm: 'Potrdi',
      selectDate: 'Izberi datum',
      selectTime: 'Izberi čas',
      startDate: 'Začetni datum',
      startTime: 'Začetni čas',
      endDate: 'Končni datum',
      endTime: 'Končni čas',
      prevYear: 'Previous Year', // to be translated
      nextYear: 'Next Year', // to be translated
      prevMonth: 'Previous Month', // to be translated
      nextMonth: 'Next Month', // to be translated
      year: 'Leto',
      month1: 'Jan',
      month2: 'Feb',
      month3: 'Mar',
      month4: 'Apr',
      month5: 'Maj',
      month6: 'Jun',
      month7: 'Jul',
      month8: 'Avg',
      month9: 'Sep',
      month10: 'Okt',
      month11: 'Nov',
      month12: 'Dec',
      week: 'teden',
      weeks: {
        sun: 'Ned',
        mon: 'Pon',
        tue: 'Tor',
        wed: 'Sre',
        thu: 'Čet',
        fri: 'Pet',
        sat: 'Sob'
      },
      months: {
        jan: 'Jan',
        feb: 'Feb',
        mar: 'Mar',
        apr: 'Apr',
        may: 'Maj',
        jun: 'Jun',
        jul: 'Jul',
        aug: 'Avg',
        sep: 'Sep',
        oct: 'Okt',
        nov: 'Nov',
        dec: 'Dec'
      }
    },
    select: {
      loading: 'Nalaganje',
      noMatch: 'Ni ustreznih podatkov',
      noData: 'Ni podatkov',
      placeholder: 'Izberi'
    },
    cascader: {
      noMatch: 'Ni ustreznih podatkov',
      loading: 'Nalaganje',
      placeholder: 'Izberi'
    },
    pagination: {
      goto: 'Pojdi na',
      pagesize: '/page',
      total: 'Skupno {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: 'Sporočilo',
      confirm: 'V redu',
      cancel: 'Prekliči',
      error: 'Nedovoljen vnos'
    },
    upload: {
      deleteTip: 'press delete to remove', // to be translated
      delete: 'Izbriši',
      preview: 'Predogled',
      continue: 'Nadaljuj'
    },
    table: {
      emptyText: 'Ni podatkov',
      confirmFilter: 'Potrdi',
      resetFilter: 'Ponastavi',
      clearFilter: 'Vse',
      sumText: 'Skupno'
    },
    tree: {
      emptyText: 'Ni podatkov'
    },
    transfer: {
      noMatch: 'Ni ustreznih podatkov',
      noData: 'Ni podatkov',
      titles: ['Seznam 1', 'Seznam 2'],
      filterPlaceholder: 'Vnesi ključno besedo',
      noCheckedFormat: '{total} elementov',
      hasCheckedFormat: '{checked}/{total} izbranih'
    }
  }
};

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  el: {
    colorpicker: {
      confirm: 'OK',
      clear: 'Töm'
    },
    datepicker: {
      now: 'Nu',
      today: 'Idag',
      cancel: 'Avbryt',
      clear: 'Töm',
      confirm: 'OK',
      selectDate: 'Välj datum',
      selectTime: 'Välj tid',
      startDate: 'Startdatum',
      startTime: 'Starttid',
      endDate: 'Slutdatum',
      endTime: 'Sluttid',
      prevYear: 'Previous Year', // to be translated
      nextYear: 'Next Year', // to be translated
      prevMonth: 'Previous Month', // to be translated
      nextMonth: 'Next Month', // to be translated
      year: 'År',
      month1: 'Januari',
      month2: 'Februari',
      month3: 'Mars',
      month4: 'April',
      month5: 'Maj',
      month6: 'Juni',
      month7: 'Juli',
      month8: 'Augusti',
      month9: 'September',
      month10: 'Oktober',
      month11: 'November',
      month12: 'December',
      // week: 'week',
      weeks: {
        sun: 'Sön',
        mon: 'Mån',
        tue: 'Tis',
        wed: 'Ons',
        thu: 'Tor',
        fri: 'Fre',
        sat: 'Lör'
      },
      months: {
        jan: 'Jan',
        feb: 'Feb',
        mar: 'Mar',
        apr: 'Apr',
        may: 'Maj',
        jun: 'Jun',
        jul: 'Jul',
        aug: 'Aug',
        sep: 'Sep',
        oct: 'Okt',
        nov: 'Nov',
        dec: 'Dec'
      }
    },
    select: {
      loading: 'Laddar',
      noMatch: 'Hittade inget',
      noData: 'Ingen data',
      placeholder: 'Välj'
    },
    cascader: {
      noMatch: 'Hittade inget',
      loading: 'Laddar',
      placeholder: 'Välj'
    },
    pagination: {
      goto: 'Gå till',
      pagesize: '/sida',
      total: 'Total {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: 'Meddelande',
      confirm: 'OK',
      cancel: 'Avbryt',
      error: 'Felaktig inmatning'
    },
    upload: {
      deleteTip: 'press delete to remove', // to be translated
      delete: 'Radera',
      preview: 'Förhandsvisa',
      continue: 'Fortsätt'
    },
    table: {
      emptyText: 'Inga Data',
      confirmFilter: 'Bekräfta',
      resetFilter: 'Återställ',
      clearFilter: 'Alla',
      sumText: 'Sum' // to be translated
    },
    tree: {
      emptyText: 'Inga Data'
    },
    transfer: {
      noMatch: 'Hittade inget',
      noData: 'Ingen data',
      titles: ['List 1', 'List 2'], // to be translated
      filterPlaceholder: 'Enter keyword', // to be translated
      noCheckedFormat: '{total} items', // to be translated
      hasCheckedFormat: '{checked}/{total} checked' // to be translated
    }
  }
};

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  el: {
    colorpicker: {
      confirm: 'உறுதி செய்',
      clear: 'தெளிவாக்கு'
    },
    datepicker: {
      now: 'தற்போது',
      today: 'இன்று',
      cancel: 'ரத்து செய்',
      clear: 'சரி',
      confirm: 'உறுதி செய்',
      selectDate: 'தேதியை தேர்வு செய்',
      selectTime: 'நேரத்தை தேர்வு செய்',
      startDate: 'தொடங்கும் நாள்',
      startTime: 'தொடங்கும் நேரம்',
      endDate: 'முடியும் தேதி',
      endTime: 'முடியும் நேரம்',
      prevYear: 'Previous Year', // to be translated
      nextYear: 'Next Year', // to be translated
      prevMonth: 'Previous Month', // to be translated
      nextMonth: 'Next Month', // to be translated
      year: 'வருடம்',
      month1: 'ஜனவரி',
      month2: 'பிப்ரவரி',
      month3: 'மார்ச்',
      month4: 'ஏப்ரல்',
      month5: 'மே',
      month6: 'ஜூன்',
      month7: 'ஜூலை',
      month8: 'ஆகஸ்ட்',
      month9: 'செப்டம்பர்',
      month10: 'அக்டோபர்',
      month11: 'நவம்பர்',
      month12: 'டிசம்பர்',
      weeks: {
        sun: 'ஞாயிறு',
        mon: 'திங்கள்',
        tue: 'செவ்வாய்',
        wed: 'புதன்',
        thu: 'வியாழன்',
        fri: 'வெள்ளி',
        sat: 'சனி'
      },
      months: {
        jan: 'ஜனவரி',
        feb: 'பிப்ரவரி',
        mar: 'மார்ச்',
        apr: 'ஏப்ரல்',
        may: 'மே',
        jun: 'ஜூன்',
        jul: 'ஜூலை',
        aug: 'ஆகஸ்ட்',
        sep: 'செப்டம்பர்',
        oct: 'அக்டோபர்',
        nov: 'நவம்பர்',
        dec: 'டிசம்பர்'
      }
    },
    select: {
      loading: 'தயாராகிக்கொண்டிருக்கிறது',
      noMatch: 'பொருத்தமான தரவு கிடைக்கவில்லை',
      noData: 'தரவு இல்லை',
      placeholder: 'தேர்வு செய்'
    },
    cascader: {
      noMatch: 'பொருத்தமான தரவு கிடைக்கவில்லை',
      loading: 'தயாராகிக்கொண்டிருக்கிறது',
      placeholder: 'தேர்வு செய்'
    },
    pagination: {
      goto: 'தேவையான் பகுதிக்கு செல்',
      pagesize: '/page',
      total: 'மொத்தம் {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: 'செய்தி',
      confirm: 'உறுதி செய்',
      cancel: 'ரத்து செய்',
      error: 'பொருத்தாமில்லாத உள்ளீடு'
    },
    upload: {
      deleteTip: 'press delete to remove', // to be translated
      delete: 'நீக்கு',
      preview: 'முன்னோட்டம் பார்',
      continue: 'தொடரு'
    },
    table: {
      emptyText: 'தரவு இல்லை',
      confirmFilter: 'உறுதி செய்',
      resetFilter: 'புதுமாற்றம் செய்',
      clearFilter: 'அனைத்தும்',
      sumText: 'கூட்டு'
    },
    tree: {
      emptyText: 'தரவு இல்லை'
    },
    transfer: {
      noMatch: 'பொருத்தமான தரவு கிடைக்கவில்லை',
      noData: 'தரவு இல்லை',
      titles: ['பட்டியல் 1', 'பட்டியல் 2'],
      filterPlaceholder: 'சொல்லை உள்ளீடு செய்',
      noCheckedFormat: '{total} items', // to be translated
      hasCheckedFormat: '{checked}/{total} தேர்வு செய்யப்பட்டவைகள்'
    }
  }
};

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  el: {
    colorpicker: {
      confirm: 'ตกลง',
      clear: 'ล้างข้อมูล'
    },
    datepicker: {
      now: 'ตอนนี้',
      today: 'วันนี้',
      cancel: 'ยกเลิก',
      clear: 'ล้างข้อมูล',
      confirm: 'ตกลง',
      selectDate: 'เลือกวันที่',
      selectTime: 'เลือกเวลา',
      startDate: 'วันที่เริ่มต้น',
      startTime: 'เวลาเริ่มต้น',
      endDate: 'วันที่สิ้นสุด',
      endTime: 'เวลาสิ้นสุด',
      prevYear: 'Previous Year', // to be translated
      nextYear: 'Next Year', // to be translated
      prevMonth: 'Previous Month', // to be translated
      nextMonth: 'Next Month', // to be translated
      year: 'ปี',
      month1: 'มกราคม',
      month2: 'กุมภาพันธ์',
      month3: 'มีนาคม',
      month4: 'เมษายน',
      month5: 'พฤษภาคม',
      month6: 'มิถุนายน',
      month7: 'กรกฎาคม',
      month8: 'สิงหาคม',
      month9: 'กันยายน',
      month10: 'ตุลาคม',
      month11: 'พฤศจิกายน',
      month12: 'ธันวาคม',
      // week: 'week',
      weeks: {
        sun: 'อา',
        mon: 'จ',
        tue: 'อ',
        wed: 'พ',
        thu: 'พฤ',
        fri: 'ศ',
        sat: 'ส'
      },
      months: {
        jan: 'มกรา',
        feb: 'กุมภา',
        mar: 'มีนา',
        apr: 'เมษา',
        may: 'พฤษภา',
        jun: 'มิถุนา',
        jul: 'กรกฎา',
        aug: 'สิงหา',
        sep: 'กันยา',
        oct: 'ตุลา',
        nov: 'พฤศจิกา',
        dec: 'ธันวา'
      }
    },
    select: {
      loading: 'กำลังโหลด',
      noMatch: 'ไม่พบข้อมูลที่ตรงกัน',
      noData: 'ไม่พบข้อมูล',
      placeholder: 'เลือก'
    },
    cascader: {
      noMatch: 'ไม่พบข้อมูลที่ตรงกัน',
      loading: 'กำลังโหลด',
      placeholder: 'เลือก'
    },
    pagination: {
      goto: 'ไปที่',
      pagesize: '/หน้า',
      total: 'ทั้งหมด {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: 'ข้อความ',
      confirm: 'ตกลง',
      cancel: 'ยกเลิก',
      error: 'คุณป้อนข้อมูลไม่ถูกต้อง'
    },
    upload: {
      deleteTip: 'press delete to remove', // to be translated
      delete: 'ลบ',
      preview: 'ตัวอย่าง',
      continue: 'ทำต่อ'
    },
    table: {
      emptyText: 'ไม่พบข้อมูล',
      confirmFilter: 'ยืนยัน',
      resetFilter: 'รีเซ็ต',
      clearFilter: 'ทั้งหมด',
      sumText: 'Sum' // to be translated
    },
    tree: {
      emptyText: 'ไม่พบข้อมูล'
    },
    transfer: {
      noMatch: 'ไม่พบข้อมูลที่ตรงกัน',
      noData: 'ไม่พบข้อมูล',
      titles: ['List 1', 'List 2'], // to be translated
      filterPlaceholder: 'Enter keyword', // to be translated
      noCheckedFormat: '{total} items', // to be translated
      hasCheckedFormat: '{checked}/{total} checked' // to be translated
    }
  }
};

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  el: {
    colorpicker: {
      confirm: 'OK',
      clear: 'Arassala'
    },
    datepicker: {
      now: 'Şuwagt',
      today: 'Şügün',
      cancel: 'Bes et',
      clear: 'Arassala',
      confirm: 'OK',
      selectDate: 'Güni saýlaň',
      selectTime: 'Wagty saýlaň',
      startDate: 'Başlaýan güni',
      startTime: 'Başlaýan wagty',
      endDate: 'Gutarýan güni',
      endTime: 'Gutarýan wagty',
      prevYear: 'Previous Year', // to be translated
      nextYear: 'Next Year', // to be translated
      prevMonth: 'Previous Month', // to be translated
      nextMonth: 'Next Month', // to be translated
      year: '',
      month1: 'Ýan',
      month2: 'Few',
      month3: 'Mar',
      month4: 'Apr',
      month5: 'Maý',
      month6: 'Iýn',
      month7: 'Iýl',
      month8: 'Awg',
      month9: 'Sen',
      month10: 'Okt',
      month11: 'Noý',
      month12: 'Dek',
      // week: 'week',
      weeks: {
        sun: 'Ýek',
        mon: 'Duş',
        tue: 'Siş',
        wed: 'Çar',
        thu: 'Pen',
        fri: 'Ann',
        sat: 'Şen'
      },
      months: {
        jan: 'Ýan',
        feb: 'Few',
        mar: 'Mar',
        apr: 'Apr',
        may: 'Maý',
        jun: 'Iýn',
        jul: 'Iýl',
        aug: 'Awg',
        sep: 'Sep',
        oct: 'Okt',
        nov: 'Noý',
        dec: 'Dek'
      }
    },
    select: {
      loading: 'Indirilýär',
      noMatch: 'Hiçzat tapylmady',
      noData: 'Hiçzat ýok',
      placeholder: 'Saýla'
    },
    cascader: {
      noMatch: 'Hiçzat tapylmady',
      loading: 'Indirilýär',
      placeholder: 'Saýlaň'
    },
    pagination: {
      goto: 'Git',
      pagesize: '/sahypa',
      total: 'Umumy {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: 'Hat',
      confirm: 'OK',
      cancel: 'Bes et',
      error: 'Ýalňyş girizme'
    },
    upload: {
      deleteTip: 'Pozmak üçin "poz" düwmä basyň',
      delete: 'Poz',
      preview: 'Gör',
      continue: 'Dowam et'
    },
    table: {
      emptyText: 'Maglumat ýok',
      confirmFilter: 'Tassykla',
      resetFilter: 'Arassala',
      clearFilter: 'Hemmesi',
      sumText: 'Jemi'
    },
    tree: {
      emptyText: 'Maglumat ýok'
    },
    transfer: {
      noMatch: 'Hiçzat tapylmady',
      noData: 'Hiçzat ýok',
      titles: ['Sanaw 1', 'Sanaw 2'],
      filterPlaceholder: 'Gözleg sözlerini giriziň',
      noCheckedFormat: '{total} sany',
      hasCheckedFormat: '{checked}/{total} saýlanan'
    }
  }
};

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  el: {
    colorpicker: {
      confirm: 'Onayla',
      clear: 'Temizle'
    },
    datepicker: {
      now: 'Şimdi',
      today: 'Bugün',
      cancel: 'İptal',
      clear: 'Temizle',
      confirm: 'Onayla',
      selectDate: 'Tarih seç',
      selectTime: 'Saat seç',
      startDate: 'Başlangıç Tarihi',
      startTime: 'Başlangıç Saati',
      endDate: 'Bitiş Tarihi',
      endTime: 'Bitiş Saati',
      prevYear: 'Previous Year', // to be translated
      nextYear: 'Next Year', // to be translated
      prevMonth: 'Previous Month', // to be translated
      nextMonth: 'Next Month', // to be translated
      year: '',
      month1: 'Ocak',
      month2: 'Şubat',
      month3: 'Mart',
      month4: 'Nisan',
      month5: 'Mayıs',
      month6: 'Haziran',
      month7: 'Temmuz',
      month8: 'Ağustos',
      month9: 'Eylül',
      month10: 'Ekim',
      month11: 'Kasım',
      month12: 'Aralık',
      // week: 'week',
      weeks: {
        sun: 'Paz',
        mon: 'Pzt',
        tue: 'Sal',
        wed: 'Çar',
        thu: 'Per',
        fri: 'Cum',
        sat: 'Cmt'
      },
      months: {
        jan: 'Oca',
        feb: 'Şub',
        mar: 'Mar',
        apr: 'Nis',
        may: 'May',
        jun: 'Haz',
        jul: 'Tem',
        aug: 'Ağu',
        sep: 'Eyl',
        oct: 'Eki',
        nov: 'Kas',
        dec: 'Ara'
      }
    },
    select: {
      loading: 'Yükleniyor',
      noMatch: 'Eşleşen veri bulunamadı',
      noData: 'Veri yok',
      placeholder: 'Seç'
    },
    cascader: {
      noMatch: 'Eşleşen veri bulunamadı',
      loading: 'Yükleniyor',
      placeholder: 'Seç'
    },
    pagination: {
      goto: 'Git',
      pagesize: '/page',
      total: 'Toplam {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: 'Mesaj',
      confirm: 'Onayla',
      cancel: 'İptal',
      error: 'İllegal giriş'
    },
    upload: {
      deleteTip: 'press delete to remove', // to be translated
      delete: 'Sil',
      preview: 'Görüntüle',
      continue: 'Devam'
    },
    table: {
      emptyText: 'Veri yok',
      confirmFilter: 'Onayla',
      resetFilter: 'Sıfırla',
      clearFilter: 'Hepsi',
      sumText: 'Sum'
    },
    tree: {
      emptyText: 'Veri yok'
    },
    transfer: {
      noMatch: 'Eşleşen veri bulunamadı',
      noData: 'Veri yok',
      titles: ['Liste 1', 'Liste 2'],
      filterPlaceholder: 'Anahtar kelimeleri gir',
      noCheckedFormat: '{total} adet',
      hasCheckedFormat: '{checked}/{total} seçildi'
    }
  }
};

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  el: {
    colorpicker: {
      confirm: 'OK',
      clear: 'Очистити'
    },
    datepicker: {
      now: 'Зараз',
      today: 'Сьогодні',
      cancel: 'Відміна',
      clear: 'Очистити',
      confirm: 'OK',
      selectDate: 'Вибрати дату',
      selectTime: 'Вибрати час',
      startDate: 'Дата початку',
      startTime: 'Час початку',
      endDate: 'Дата завершення',
      endTime: 'Час завершення',
      prevYear: 'Previous Year', // to be translated
      nextYear: 'Next Year', // to be translated
      prevMonth: 'Previous Month', // to be translated
      nextMonth: 'Next Month', // to be translated
      year: '',
      month1: 'Січень',
      month2: 'Лютий',
      month3: 'Березень',
      month4: 'Квітень',
      month5: 'Травень',
      month6: 'Червень',
      month7: 'Липень',
      month8: 'Серпень',
      month9: 'Вересень',
      month10: 'Жовтень',
      month11: 'Листопад',
      month12: 'Грудень',
      // week: 'week',
      weeks: {
        sun: 'Нд',
        mon: 'Пн',
        tue: 'Вт',
        wed: 'Ср',
        thu: 'Чт',
        fri: 'Пт',
        sat: 'Сб'
      },
      months: {
        jan: 'Січ',
        feb: 'Лют',
        mar: 'Бер',
        apr: 'Кві',
        may: 'Тра',
        jun: 'Чер',
        jul: 'Лип',
        aug: 'Сер',
        sep: 'Вер',
        oct: 'Жов',
        nov: 'Лис',
        dec: 'Гру'
      }
    },
    select: {
      loading: 'Завантаження',
      noMatch: 'Співпадінь не знайдено',
      noData: 'Немає даних',
      placeholder: 'Обрати'
    },
    cascader: {
      noMatch: 'Співпадінь не знайдено',
      loading: 'Завантаження',
      placeholder: 'Обрати'
    },
    pagination: {
      goto: 'Перейти',
      pagesize: 'на сторінці',
      total: 'Всього {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: 'Повідомлення',
      confirm: 'OK',
      cancel: 'Відміна',
      error: 'Неприпустимий ввід даних'
    },
    upload: {
      deleteTip: 'press delete to remove', // to be translated
      delete: 'Видалити',
      preview: 'Перегляд',
      continue: 'Продовжити'
    },
    table: {
      emptyText: 'Немає даних',
      confirmFilter: 'Підтвердити',
      resetFilter: 'Скинути',
      clearFilter: 'Все',
      sumText: 'Сума'
    },
    tree: {
      emptyText: 'Немає даних'
    },
    transfer: {
      noMatch: 'Співпадінь не знайдено',
      noData: 'Обрати',
      titles: ['Список 1', 'Список 2'],
      filterPlaceholder: 'Введіть ключове слово',
      noCheckedFormat: '{total} пунктів',
      hasCheckedFormat: '{checked}/{total} вибрано'
    }
  }
};

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  el: {
    colorpicker: {
      confirm: 'OK',
      clear: 'Xóa'
    },
    datepicker: {
      now: 'Hiện tại',
      today: 'Hôm nay',
      cancel: 'Hủy',
      clear: 'Xóa',
      confirm: 'OK',
      selectDate: 'Chọn ngày',
      selectTime: 'Chọn giờ',
      startDate: 'Ngày bắt đầu',
      startTime: 'Thời gian bắt đầu',
      endDate: 'Ngày kết thúc',
      endTime: 'Thời gian kết thúc',
      prevYear: 'Previous Year', // to be translated
      nextYear: 'Next Year', // to be translated
      prevMonth: 'Previous Month', // to be translated
      nextMonth: 'Next Month', // to be translated
      year: 'Năm',
      month1: 'Tháng 1',
      month2: 'Tháng 2',
      month3: 'Tháng 3',
      month4: 'Tháng 4',
      month5: 'Tháng 5',
      month6: 'Tháng 6',
      month7: 'Tháng 7',
      month8: 'Tháng 8',
      month9: 'Tháng 9',
      month10: 'Tháng 10',
      month11: 'Tháng 11',
      month12: 'Tháng 12',
      // week: 'week',
      weeks: {
        sun: 'CN',
        mon: 'T2',
        tue: 'T3',
        wed: 'T4',
        thu: 'T5',
        fri: 'T6',
        sat: 'T7'
      },
      months: {
        jan: 'Th.1',
        feb: 'Th.2',
        mar: 'Th.3',
        apr: 'Th.4',
        may: 'Th.5',
        jun: 'Th.6',
        jul: 'Th.7',
        aug: 'Th.8',
        sep: 'Th.9',
        oct: 'Th.10',
        nov: 'Th.11',
        dec: 'Th.12'
      }
    },
    select: {
      loading: 'Đang tải',
      noMatch: 'Dữ liệu không phù hợp',
      noData: 'Không tìm thấy dữ liệu',
      placeholder: 'Chọn'
    },
    cascader: {
      noMatch: 'Dữ liệu không phù hợp',
      loading: 'Đang tải',
      placeholder: 'Chọn'
    },
    pagination: {
      goto: 'Nhảy tới',
      pagesize: '/trang',
      total: 'Tổng {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: 'Thông báo',
      confirm: 'OK',
      cancel: 'Hủy',
      error: 'Dữ liệu không hợp lệ'
    },
    upload: {
      deleteTip: 'press delete to remove', // to be translated
      delete: 'Xóa',
      preview: 'Xem trước',
      continue: 'Tiếp tục'
    },
    table: {
      emptyText: 'Không có dữ liệu',
      confirmFilter: 'Xác nhận',
      resetFilter: 'Làm mới',
      clearFilter: 'Xóa hết',
      sumText: 'Tổng'
    },
    tree: {
      emptyText: 'Không có dữ liệu'
    },
    transfer: {
      noMatch: 'Dữ liệu không phù hợp',
      noData: 'Không tìm thấy dữ liệu',
      titles: ['Danh sách 1', 'Danh sách 2'],
      filterPlaceholder: 'Nhập từ khóa',
      noCheckedFormat: '{total} mục',
      hasCheckedFormat: '{checked}/{total} đã chọn '
    }
  }
};

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  el: {
    colorpicker: {
      confirm: '確認',
      clear: '清空'
    },
    datepicker: {
      now: '現在',
      today: '今天',
      cancel: '取消',
      clear: '清空',
      confirm: '確認',
      selectDate: '選擇日期',
      selectTime: '選擇時間',
      startDate: '開始日期',
      startTime: '開始時間',
      endDate: '結束日期',
      endTime: '結束時間',
      prevYear: '前一年',
      nextYear: '後一年',
      prevMonth: '上個月',
      nextMonth: '下個月',
      year: '年',
      month1: '1 月',
      month2: '2 月',
      month3: '3 月',
      month4: '4 月',
      month5: '5 月',
      month6: '6 月',
      month7: '7 月',
      month8: '8 月',
      month9: '9 月',
      month10: '10 月',
      month11: '11 月',
      month12: '12 月',
      // week: '周次',
      weeks: {
        sun: '日',
        mon: '一',
        tue: '二',
        wed: '三',
        thu: '四',
        fri: '五',
        sat: '六'
      },
      months: {
        jan: '一月',
        feb: '二月',
        mar: '三月',
        apr: '四月',
        may: '五月',
        jun: '六月',
        jul: '七月',
        aug: '八月',
        sep: '九月',
        oct: '十月',
        nov: '十一月',
        dec: '十二月'
      }
    },
    select: {
      loading: '加載中',
      noMatch: '無匹配資料',
      noData: '無資料',
      placeholder: '請選擇'
    },
    cascader: {
      noMatch: '無匹配資料',
      loading: '加載中',
      placeholder: '請選擇'
    },
    pagination: {
      goto: '前往',
      pagesize: '項/頁',
      total: '共 {total} 項',
      pageClassifier: '頁'
    },
    messagebox: {
      title: '提示',
      confirm: '確定',
      cancel: '取消',
      error: '輸入的資料不符規定!'
    },
    upload: {
      deleteTip: '按 delete 鍵可刪除',
      delete: '刪除',
      preview: '查看圖片',
      continue: '繼續上傳'
    },
    table: {
      emptyText: '暫無資料',
      confirmFilter: '篩選',
      resetFilter: '重置',
      clearFilter: '全部',
      sumText: 'Sum' // to be translated
    },
    tree: {
      emptyText: '暫無資料'
    },
    transfer: {
      noMatch: '無匹配資料',
      noData: '無資料',
      titles: ['List 1', 'List 2'], // to be translated
      filterPlaceholder: 'Enter keyword', // to be translated
      noCheckedFormat: '{total} items', // to be translated
      hasCheckedFormat: '{checked}/{total} checked' // to be translated
    }
  }
};

/***/ })

});