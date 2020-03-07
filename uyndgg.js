 var KJE = {
     lang: "EN",
     initFired: false,
     InReport: false,
     reportTest: false,
     CalcDelay: 0,
     CalcDelayVML: 0,
     CalculatorWidthMax: 850,
     CalculatorWidthMin: 285,
     ShowDefinitions: false,
     ShowCalculateButton: true,
     ShowPrintButton: true,
     IncludeDefinitions: true,
     PopupDefinitions: true,
     SliderWidthAdjust: 0,
     bNativeSlider: false,
     ErrorBackground: "#FF7777",
     IncompleteBackground: "#FFFF77",
     CalculatorName: "Calculator Title",
     bUseInputForm: false,
     CommandButtons: "<div id='KJECommandButtons'><input type=button class=KJECommandButton  name=KJECalculate id=KJECalculate value='**LBL_CALCULATE**' /><input **VIEWREPORT** class=KJECommandButton  id=KJEViewReport name=KJEViewReport value='**LBL_VIEWREPORT**' /></div>",
     ReportButtons: "<div align=center><div id='KJEReportButtons'><input type=button class=KJECommandButton  name=KJEPrint id=KJEPrintReport value=\"**LBL_PRINTREPORT**\" /><input type=button  class=KJECommandButton  id=KJEHideReport name=KJEHideReport value='**LBL_HIDEREPORT**' /></div></div>",
     CommandButtonsFixed: true,
     CommandButtonsTop: true,
     CommandButtonOffset: 20,
     CommandButtonHeader: 0,
     Scroll: true,
     ScrollMinimum: 23,
     ReportHeader: "<div class='KJEReportTitleHeader'>**REPORT_TITLE**</div>",
     ReportStyleDefault: "<style>  BODY, TABLE, TD, TH, UL, OL, DD, DL, P, BR { font-family: arial, sans-serif; font-size: 10pt; } H1 { font-family: arial, sans-serif; font-size: 13pt; font-weight: bold; }DT { font-family: arial, sans-serif; font-size: 10pt; font-weight: bold;  }P.footer { font-family: arial, sans-serif; font-size: 9pt; } DIV.large { font-family: arial, sans-serif; font-size: 13pt; font-weight: bold; }</style>",
     iDecimal: 2,
     ReportShowGraphs: true,
     ReportFooter: "<div class=KJECenter><p></p>We cannot and do not guarantee their applicability or accuracy in regards to your individual circumstances. All examples are hypothetical and are for illustrative purposes.  We encourage you to seek personalized advice from qualified professionals regarding all personal finance issues.</p></div>",
     ReportExtraFooter: "",
     ReportStyleSheet: null,
     ReportStyleSheet2: null,
     KJEReportBodyClass: "class=KJEReportBody",
     ReportDocumentEnd: "**FOOTER** <script>setTimeout(function() {window.print(), window.close();}, 1000)<\/script></body></html>\n",
     CalculatorTitleTemplate: null,
     CalclatorTitle: null,
     CalculatorTitleClass: "KJETitle KJEFontHeading KJETitleExtra",
     CalculatorTitleErrorClass: "KJETitle KJEError",
     CalculatorTitleMissingClass: "KJETitle KJEMissing",
     CalculatorTableClass: "KJECalculatorTable",
     CalculatorTableReportClass: "KJECalculatorReportTable",
     CalcTitlePadding: 20,
     CalcTitlePaddingMenu: 10,
     ClearColor: "#FFFFFF",
     colorList: ["#E8EFB2", "#AEC69C", "#DDDDDD", "#BE4262", "#FABB50", "#DDCCDD", "#CCCCCC", "#CCCCDD", "#CCDDCC", "#CCDDDD", "#CCCCDD"],
     colorRGBackground: "#FFFFFF",
     DefinitionsH1: "<h2 class='KJEDefinitionsHeader KJEFontHeading'>**LBL_DEFINITIONS**</h2>",
     LBL_DEFINITIONS: "Definitions",
     Colon: ":",
     CalculatorTitleEntry: "Please enter or select a value in all fields:",
     CalculatorTitleCalc: "Press 'Calculate' to view your results.",
     ButtonCalculate: "Calculate",
     ButtonViewReport: "View Report",
     ButtonHideReport: "Hide Report",
     ButtonPrintReport: "Print",
     sCurrency: "Dollars",
     MSG_YEARS_LBL: "years",
     MSG_YEAR_LBL: "year",
     MSG_MONTHS_LBL: "months",
     MSG_MONTH_LBL: "month",
     MSG_AND_LBL: "and",
     MSG_YES: "Yes",
     MSG_NO: "No",
     YES: "yes",
     NO: "no",
     MSG_EXCEEDS_LIMIT_OF_RANGE: "KJE1 is limited to KJE2",
     MSG_UNDER_LIMIT_OF_RANGE: "KJE1 can't be less than KJE2",
     MSG_INVALID_DATE: "Please enter a valid date for KJE1",
     MSG_MISSING_ITEM: "Please enter a value for KJE1",
     MSG_GRAPH: "**GRAPH**",
     SplashContent: " ",
     SplashContentFooter: " ",
     Default: {
         RORMarket: 7,
         RORRetire: 4,
         RORSave: 0.25,
         RateCard: 16,
         RatePersonal: 7.5,
         RateFix15: 4,
         RateFix30: 4.5,
         RateAdj: 4,
         RateAuto: 7,
         RateAutoLow: 1.9,
         MortgageAmt: 200000,
         HomePrice: 220000,
         StateTaxRate: 8,
         InflationRate: 2.9,
         MortgageMin: 0,
         MortgageMax: 100000000,
         MortgageRateMin: 0,
         MortgageRateMax: 25,
         MortgageTerm: 30,
         MortgageTermMin: 1,
         MortgageTermMax: 40,
         MortgageTermIncrement: 5,
         MortgageShowAll: true,
         MortgageShowAllMax: 25,
         InvestRateMin: 0,
         InvestRateMax: 20,
         InvestSliderRateMax: 12,
         InflationRateMin: 0,
         InflationRateMax: 20,
         InflationSliderRateMax: 12
     },
     InTask: false,
     calcCleared: false,
     CalculatorDiv: "KJECalculatorDiv",
     AllContent: "KJEAllContent",
     CalcTimeout: 0,
     CalcTitleHeight: 0,
     Error: false,
     InComplete: false,
     bValidateIncomplete: true,
     Calculating: false,
     gGraphs: new Array(0),
     gReportGraphs: new Array(0),
     iOldWidth: -1,
     bSizeInitialized: false,
     ResizeTimeOut: null,
     iUrekau: [1709986223, 1332498680, 0, 1505998205, 380075612],
     InputScreenText: false,
     DefinitionText: false,
     ReportText: false,
     MSG_ADA_TABLE: "role='presentation'",
     TypedArray: (typeof Float64Array != "undefined"),
     showInputsFirst: false,
     replace: function(c, b, a) {
         return (a ? a.split(c).join(b) : "")
     },
     getKJEReplaced: function(a) {
         if (a || a == "") {
             for (var b = 1; b < arguments.length; b++) {
                 a = a.replace("KJE" + (b), arguments[b])
             }
         } else {
             a = "";
             for (b = 0; b < arguments.length; b++) {
                 a += arguments[b] + (b == arguments.length - 1 ? "" : ", ")
             }
         }
         return a
     },
     dateFormat: function(c) {
         var a = "/",
             b = c.getMonth() + 1;
         return (c == null ? "" : b + a + c.getDate() + a + c.getFullYear())
     },
     chjilap: function(d) {
         var b = 0;
         var e = "";
         if (d.length == 0) {} else {
             for (var a = 0; a < d.length; a++) {
                 e = d.charCodeAt(a);
                 b = ((b << 5) - b) + e;
                 b = b & b
             }
         }
         return b
     },
     getTermLabel: function(f, c) {
         var n = KJE;
         var j = Math.floor(f / 12),
             b = (f % 12),
             d = n.MSG_AND_LBL,
             g = n.MSG_MONTH_LBL,
             l = n.MSG_MONTHS_LBL,
             e = n.MSG_YEAR_LBL,
             k = n.MSG_YEARS_LBL,
             h = " ",
             a = "";
         return (c || j > 0 ? j + h + (j == 1 ? e : k) : a) + (c || (j > 0 && b > 0) ? h + d + h : a) + (c || b > 0 ? b + h + (b == 1 ? g : l) : a)
     },
     setOrientation: function() {
         var a = KJE;
         switch (window.orientation) {
             case -90:
             case 90:
                 a.resize(true);
                 break;
             default:
                 a.resize(true);
                 break
         }
     },
     resize: function(b) {
         var a = KJE;
         if (!a.device.iphone || b) {
             if (a.iOldWidth != window.innerWidth && a.bSizeInitialized) {
                 if (a.ResizeTimeOut != null) {
                     clearTimeout(a.ResizeTimeOut)
                 }
                 a.ResizeTimeOut = setTimeout(a.calcResize, 0);
                 if (a.MenuResize) {
                     a.MenuResize()
                 }
             }
             a.bSizeInitialized = true
         }
     },
     InputSetup: function(a, l) {
         var n = KJE;
         var h = n.bUseInputForm && !n.IE7and8;
         var f = "**COMMAND_BUTTONS**";
         var j = (n.IE7and8 || n.deviceMobile || n.CommandButtonsFixed) && n.CommandButtonsTop;
         var g = a.indexOf(f);
         var k = "<div id='KJETitle' aria-live='polite' class='" + n.CalculatorTitleClass + "'>" + "Best Retirement Calculator – Calculate Retirement Savings</div>";
         var d = "**TITLE_BAR**";
         var e = a.indexOf(d);
         for (var c = 1; c < 10; c++) {
             a = n.replace("**GRAPH" + c + "**", n.replace(n.MSG_GRAPH, "<div id=KJE-C-GRAPH" + c + " style='width:100%;'><canvas id=KJE-G-GRAPH" + c + "></canvas></div>", n.VML ? " " + n.MSG_GRAPH + " " : n.MSG_ADA_GRAPH), a)
         }
         var m = "<!--KJEMAIN--><div id='KJEGuiDataPoint' style='top: 0; left: 0;'></div>";
         if (n.ExtraHeader) {
             m += n.ExtraHeader
         }
         if (h) {
             m += "<form name=KJECalcForm id=KJECalcForm onsubmit='return false;'>"
         }
         m += "<div id=KJECalculatorScreenSize align=center style='position:relative; width:100%'>";
         m += (g < 0 && j ? f : "");
         m += "<div id='KJEWait' class=KJEWait></div>";
         m += "<div id='KJEMenu' class=KJEMenu></div>";
         m += "<div id='KJEMenuWindow'></div>";
         m += "<div id=KJECalculatorTable>";
         m += "<div id=KJECalculatorTableCell class='KJECalculator KJEEase' align=center style='width:100%'>";
         m += "<span id=KJESplash class=KJEBold style='color:#333333'> </span>";
         m += "<div id='KJEMain' class=KJEMain >";
         m += (e < 0 ? k : "");
         m += "<div id='KJEInputs' class='KJEInputs'>" + a + "</div>";
         m += "</div>";
         m += "</div>";
         m += "</div>";
         m += (g < 0 && !j ? f : "");
         m += "</div>";
         if (h) {
             m += "</form>"
         }
         m += "<!--KJEMAINEND-->";
         m += "<div id=KJEReport class=KJEReport width=100%>";
         m += (g >= 0 ? "**REPORT_BUTTONS**" : "");
         m += "<div id=KJEReportTop></div>";
         for (c = 0; c < n.ReportGraphCount; c++) {
             m += "<div align=center><div id=KJE-C-REPORTGRAPH" + c + ' style="page-break-inside: avoid; margin-top:15px; height:' + n.gHeight + 'px;"><!--GRAPH' + c + "--><canvas id=KJE-G-REPORTGRAPH" + c + "></canvas><!--GRAPHEND--></div></div>";
             m += "<div id=KJEReportMiddle" + c + "></div>"
         }
         if (n.ExtraFooter) {
             m += n.ExtraFooter(l)
         }
         m += "</div>";
         if (n.IncludeDefinitions) {
             m += n.formatDefinitions(l)
         }
         m = m.replace("**REPORT_BUTTONS**", n.ReportButtons.replace("**LBL_HIDEREPORT**", n.ButtonHideReport).replace("**LBL_PRINTREPORT**", n.ButtonPrintReport));
         m = m.replace(d, k);
         return m.replace(f, n.CommandButtons.replace("**LBL_VIEWREPORT**", n.ButtonViewReport).replace("**LBL_CALCULATE**", n.ButtonCalculate).replace("**VIEWREPORT**", (h ? "type=submit" : "type=button")))
     },
     formatDefinitions: function(c) {
         var a = KJE;
         var b = "<!--KJEDEFINITIONS--><div width=100% align=center >";
         b += "<div id=KJEDefinitions class=KJEDefinitions width=100%>" + a.DefinitionsH1.replace("**LBL_DEFINITIONS**", a.LBL_DEFINITIONS);
         b += "<dl>" + c + "</dl>";
         b += "</div>";
         b += "</div><!--KJEDEFINITIONSEND-->";
         return b
     },
     inCommandTask: function(f) {
         var a = KJE;
         var b = "px";
         var c = a.Wait.style;
         var e = "none";
         var h = "none";
         var b = "px";
         var c = a.Wait.style;
         var g = a.CalculatorTable.offsetTop + 23 + "px";
         var d = a.CalculatorTable.offsetLeft + 10 + "px";
         if (a.InTask && f) {
             return true
         }
         c.top = g;
         c.right = d;
         c.display = (f ? e : h);
         if (a.displayMenu) {
             a.displayMenu(f)
         }
         a.InTask = f;
         return false
     },
     setTitle: function(d, h) {
         var b = KJE;
         var a = b.subheader;
         var e = b.kujiae;
         var g = b.CalcTitle;
         var f = b.kujaleip;
         var c = b.UKuejna;
         if (!b.CalcTitleWidth) {
             b.CalcTitleWidth = g.offsetWidth - b.CalcTitlePadding * 2 - (KJE.menuInit ? b.CalcTitlePaddingMenu : 0)
         }
         if (f) {
             //  g.innerHTML = c + e + a;
             //  g.className = b.CalculatorTitleErrorClass
         } else {
             KJE.TrialReplace1 = 1;
             g.innerHTML = d + a;
             if (h) {
                 g.className = h
             } else {
                 g.className = b.CalculatorTitleClass
             }
         }
         b.Calculator.style.height = b.Main.offsetHeight + "px"
     },
     setTitleTemplate: function() {
         var a = KJE;
         var c = "";
         if (a.CalculatorTitleTemplate) {
             c = a.CalculatorTitleTemplate;
             for (var b = 0; b < arguments.length; b++) {
                 c = c.replace("KJE" + (b + 1), arguments[b])
             }
             a.CalculatorTitleShow = c
         } else {
             a.CalculatorTitleShow = a.CalculatorTitle
         }
     },
     results: function(f, h) {
         var k = KJE;
         k.calcCleared = false;
         if (k.IE7and8) {
             k.Wait.style.display = "none"
         }
         if (k.CalcTimeout) {
             clearTimeout(k.CalcTimeout)
         }
         if (f) {
             if (k.inCommandTask(true)) {
                 return
             }
             k.showInputs()
         }
         try {
             k.Error = false;
             k.InComplete = false;
             k.DataPointHide();
             var a = k.CalcControl;
             a.clear();
             k.GuiControl.setValues(a);
             if (k.setValuesAdditional) {
                 k.setValuesAdditional(a)
             }
             var j = 0;
             var g = k.inputs.items;
             for (var e in g) {
                 if (!g[e].validate()) {
                     j++;
                     k.InComplete = true;
                     var d = k.getKJEReplaced(k.MSG_MISSING_ITEM, g[e]._sLabel)
                 }
             }
             if (!k.InComplete) {
                 if (h && a.initReport) {
                     a.initReport()
                 }
                 a.calculate(h ? true : false);
                 if (KJE.calculateAdditional) {
                     KJE.calculateAdditional(a, h ? true : false)
                 }
                 k.GuiControl.refresh(a);
                 if (KJE.refreshAdditional) {
                     KJE.refreshAdditional(k.GuiControl, a)
                 }
                 for (var e in k.droppers.items) {
                     k.droppers.items[e].setText()
                 }
                 k.setTitle(k.CalculatorTitleShow)
             }
             if (k.InComplete && k.bValidateIncomplete) {
                 k.calcClear(j > 1 ? k.CalculatorTitleEntry : d, k.CalculatorTitleMissingClass)
             }
         } catch (b) {
             k.Error = true;
             var c = b + " ";
             if (c.indexOf("NS_ERROR_FAILURE") < 1) {
                 k.calcClear(c, k.CalculatorTitleErrorClass)
             }
         }
         if (k.IE7and8) {
             k.Wait.style.display = "none"
         }
         if (f) {
             setTimeout(function() {
                 k.inCommandTask(false)
             }, 0)
         }
         if (KJE.StorageSet) {
             KJE.StorageSet()
         }
     },
     calcClear: function(c, f) {
         var a = KJE;
         var d = a.gGraphs;
         if (!c) {
             c = a.CalculatorTitleEntry
         }
         if (!f) {
             f = null
         }
         for (var e = 0; e < d.length; e++) {
             if (d[e]) {
                 d[e].blank()
             }
         }
         for (var b in a.inputs.items) {
             if (a.inputs.items[b]._inputType == a.TypeLabel) {
                 a.inputs.items[b].setText("")
             }
         }
         if (a.GuiControl.clear) {
             a.GuiControl.clear()
         }
         a.setTitle(c, f)
     },
     calcResize: function() {
         var a = KJE;
         if (a.setWidth()) {
             var c = a.gGraphs;
             for (var b in a.inputs.items) {
                 a.inputs.items[b].newWidth()
             }
             for (var d = 0; d < c.length; d++) {
                 if (c[d]) {
                     c[d].setWidth(true)
                 }
             }
         }
         if (a.reportViewable) {
             var c = a.gReportGraphs;
             for (var d = 0; d < c.length; d++) {
                 if (c[d]) {
                     c[d].setWidth(true, KJE.gWidthMax)
                 }
             }
         }
         if (a.resizeMenu) {
             a.resizeMenu()
         }
     },
     dataChanged: function(b) {
         var a = KJE;
         if (a.CalcTimeout) {
             clearTimeout(a.CalcTimeout)
         }
         if (a.VML) {
             if (!a.calcCleared && b) {
                 a.calcClear(a.CalculatorTitleCalc);
                 a.calcCleared = true
             }
             a.CalcTimeout = setTimeout(a.results, (b ? a.CalcDelayVML : a.CalcDelay))
         } else {
             a.CalcTimeout = setTimeout(a.results, a.CalcDelay)
         }
     },
     completeFade: function() {
         var a = KJE;
         if (a.fade < 1) {
             a.fade += (a.device.iphone ? 100 : 100);
             a.Buttons.style.opacity = (a.fade / 100);
             a.Main.style.opacity = (a.fade / 100)
         } else {
             clearInterval(a.pace);
             if (KJE.reportTest) {
                 a.showReport()
             }
         }
     },
     Startfade: function() {
         var a = KJE;
         if (a.fade < 1) {
             a.fade += 100;
             a.Splash.style.opacity = 0
         } else {
             clearInterval(a.pace);
             a.Splash.style.display = "none";
             a.fade = 0;
             a.pace = setInterval(a.completeFade, 0)
         }
     },
     showCalculator: function() {
         var a = KJE;
         a.results(true);
         a.ms = (a.Main.style.opacity != 0 || a.Main.style.opacity == "");
         if (a.ms) {
             setTimeout(function() {
                 a.Buttons.style.visibility = "visible";
                 a.Main.style.visibility = "visible";
                 a.Splash.style.display = "none"
             }, 0)
         } else {
             a.Buttons.style.opacity = 0;
             a.Main.style.opacity = 0;
             a.Splash.style.opacity = 1
         }
         a.fade = 0;
         a.pace = setInterval(a.Startfade, 0)
     },
     getOffset: function(c) {
         var b = 0;
         var a = 0;
         while (c && !isNaN(c.offsetLeft) && !isNaN(c.offsetTop)) {
             b += c.offsetLeft - c.scrollLeft;
             a += c.offsetTop - c.scrollTop;
             c = c.offsetParent
         }
         return {
             top: a,
             left: b
         }
     },
     setWidth: function(b) {
         var a = KJE;
         var c = a.ScreenSize.clientWidth;
         c -= (c <= 400 ? 0 : 5);
         c = (a.CalculatorWidthMax < c ? a.CalculatorWidthMax : c);
         c = (c < a.CalculatorWidthMin ? a.CalculatorWidthMin : c);
         if (a.oldClientWidth != c) {
             a.oldClientWidth = c;
             a.CalculatorTable.style.width = c + "px";
             a.Calculator.style.height = a.Main.offsetHeight + "px";
             a.DataPoint.style.maxWidth = c - 37 + "px";
             a.CalculatorWidth = c - 10;
             if (b) {
                 a.Splash.style.width = c;
                 a.oldClientWidth = 0
             }
             return true
         }
         return false
     },
     FloatArray: function(d) {
         var a = KJE;
         if (a.TypedArray) {
             return new Float64Array(d)
         }
         var b = new Array(d);
         for (var c = 0; c < d; c++) {
             b[c] = 0
         }
         return b
     },
     IntArray: function(b) {
         var a = KJE;
         if (a.TypedArray) {
             return new Int16Array(b)
         }
         return new Array(b)
     },
     init: function() {
         var U = KJE;
         if (U.initFired) {
             return
         }
         U.InputClass = "KJEInput" + (KJE.InputModern ? " KJEInputModern" : "");
         U.initFired = true;
         var E = navigator.userAgent;
         U.device = {
             iphone: E.match(/(iPhone|iPod|iPad)/),
             android: E.match(/Android/)
         };
         U.deviceUseNumberType = U.deviceMobile = E.match(/(iPhone|iPod|iPad|Silk|Android)/);
         U.deviceInputPad = (U.deviceUseNumberType ? KJE.parameters.get("DEVICE_INPUT_PAD", 10) : 0);
         U.deviceNoTransition = E.match(/(iPhone|iPod|iPad|BlackBerry|Silk|Android)/);
         U.bUseStorage = false;
         if (U.bStorageInit) {
             //   U.bUseStorage = U.bStorageInit()
         }
         var I = U.ReportStyleSheet,
             R = U.ReportStyleSheet2,
             j = "KJE.css",
             g = "KJESiteSpecific.css",
             A = document.getElementsByTagName("link");
         for (var D = 0; D < A.length; ++D) {
             var L = A[D].href;
             if (L.indexOf(j) >= 0 && I == null) {
                 I = L;
                 U.hRefPath = L.substring(0, L.lastIndexOf("/") + 1)
             }
             if (L.indexOf(g) >= 0 && R == null) {
                 R = L
             }
         }
         if (I == null) {
             I = j
         }
         if (R == null) {
             R = g
         }
         U.ReportStyleSheet = I;
         U.ReportStyleSheet2 = R;
         var M = U.iUrekau;
         var W = M.length,
             r = location.hostname,
             K = U.kujiae = r.replace(/^www\./i, ""),
             b = U.parameters,
             e = document;
         var Q = U.chjilap(K);
         U.kujaleip = true;
         for (var P = W - 1; P >= 0; P--) {
             if (Q == M[P]) {
                 //   U.kujaleip = false
             }
         }
         KJE.TrialReplace1 = 2;
         U.CalculatorTitleShow = U.CalculatorTitle = (b.get("TITLE_TEMPLATE", U.CalculatorTitle ? U.CalculatorTitle : document.title));
         U.AllContent = e.getElementById(U.AllContent);
         var n = e.getElementById("KJEReportText");
         if (n) {
             //   U.ReportText = n.innerHTML;
             //  n.innerHTML = ""
         }
         var x = U.definitions.items;
         var t = U.DefinitionText;
         for (var N in x) {
             t = U.replace(N, x[N], t)
         }
         if (U.parseDefinitions) {
             t = U.parseDefinitions(t)
         }
         U.DefinitionText = t;
         var J = U.ReportText;
         if (U.ReportProcess) {
             J = U.ReportProcess(J)
         }
         U.ReportGraphCount = 0;
         if (!U.ReportShowGraphs) {
             J = U.replace(U.MSG_GRAPH, "", J)
         } else {
             if (J) {
                 J = U.replace("KJE_CURRENTDATE", U.dateFormat(new Date()), J);
                 var c = 0;
                 while (true) {
                     c = J.indexOf(U.MSG_GRAPH, c);
                     if (c >= 0) {
                         U.ReportGraphCount++;
                         c += U.MSG_GRAPH.length
                     } else {
                         break
                     }
                 }
             }
         }
         U.ReportText = J;
         if (U.parseInputs) {
             U.InputScreenText = U.parseInputs(U.InputScreenText)
         }
         U.AllContent.innerHTML = U.InputSetup(U.InputScreenText, t);
         U.Splash = e.getElementById("KJESplash");
         U.inputsViewable = true;
         U.Wait = e.getElementById("KJEWait");
         U.Report = e.getElementById("KJEReport");
         U.ReportTop = e.getElementById("KJEReportTop");
         var p = U.ReportMiddle = new Array();
         for (P = 0; P < U.ReportGraphCount; P++) {
             p[P] = e.getElementById("KJEReportMiddle" + P)
         }
         var z = U.Buttons = e.getElementById("KJECommandButtons");
         var G = U.Calculate = e.getElementById("KJECalculate");
         var C = U.PrintReport = e.getElementById("KJEPrintReport");
         var l = U.ViewReport = e.getElementById("KJEViewReport");
         var f = U.HideReport = e.getElementById("KJEHideReport");
         var S = U.Inputs = e.getElementById("KJEInputs");
         var s = U.DataPoint = e.getElementById("KJEGuiDataPoint");
         var H = U.Calculator = e.getElementById("KJECalculatorTableCell");
         U.ScreenSize = e.getElementById("KJECalculatorScreenSize");
         var O = U.CalcTitle = e.getElementById("KJETitle");
         O.style.padding = U.CalcTitlePadding + "px";
         if (KJE.menuInit) {
             O.style.paddingRight = U.CalcTitlePadding + U.CalcTitlePaddingMenu + "px"
         }
         var T = U.Main = e.getElementById("KJEMain");
         var o = U.Definitions = e.getElementById("KJEDefinitions");
         if (o && o.lastChild) {
             var u = o.lastChild.childNodes;
             var V = u.length;
             for (P = 0; P < V; P++) {
                 var d = u[P];
                 if (d.id && d.id.substr(0, 6) == "KJE-D-") {
                     var q = d.id.substr(6).trim();
                     var B = b.get("DFN_" + q, null);
                     if (B == "REMOVE") {
                         d.innerHTML = "";
                         d.style.visibility = "hidden";
                         d.style.display = "none";
                         d.id = null
                     } else {
                         if (B) {
                             if (d.lastChild) {
                                 d.lastChild.innerHTML = B
                             }
                         }
                         var B = b.get("DFN_NAME_" + q, b.get("MSG_" + q, null));
                         if (B) {
                             if (d.firstChild) {
                                 d.firstChild.innerHTML = B
                             }
                         }
                     }
                 }
             }
         }
         S.style.display = "block";
         U.CalculatorTable = e.getElementById("KJECalculatorTable");
         if (U.menuInit) {
             U.menuInit()
         }
         if (s.addEventListener) {
             var F = "click";
             G.addEventListener(F, U.calculateButtonAction, false);
             l.addEventListener(F, U.showReport, false);
             s.addEventListener(F, U.DataPointHide, false);
             if (C) {
                 C.addEventListener(F, U.printTheReport, false)
             }
             if (f) {
                 f.addEventListener(F, U.showReport, false)
             }
         } else {
             var F = "onclick";
             G.attachEvent(F, U.calculateButtonAction);
             l.attachEvent(F, U.showReport);
             if (U.DataPointHide) {
                 s.attachEvent(F, U.DataPointHide)
             }
             if (C) {
                 C.attachEvent(F, U.printTheReport)
             }
             if (f) {
                 f.attachEvent(F, U.showReport)
             }
         }
         H.style.height = H.offsetHeight + "px";
         if (U.IE7and8) {
             z.style.visibility = "hidden";
             T.style.visibility = "hidden";
             U.Splash.style.visibility = "visible"
         } else {
             z.style.opacity = 0;
             T.style.opacity = 0;
             U.Splash.style.opacity = 1
         }
         if (U.IE7and8 || U.CommandButtonsFixed) {
             z.style.position = "relative";
             z.style.top = U.CommandButtonOffset + "px"
         } else {
             z.style.position = "absolute";
             z.style.top = H.offsetTop - U.CommandButtonOffset + "px"
         }
         if (window.addEventListener) {
             window.addEventListener("scroll", U.scrolled, false);
             window.addEventListener("resize", U.resize, false);
             window.addEventListener("orientationchange", U.setOrientation, false)
         }
         U.oldClientWidth = 0;
         U.setWidth(true);
         U.CalculatorTitleTemplate = b.get("TITLE_TEMPLATE", U.CalculatorTitleTemplate);
         var a = U.HeaderTitle = b.get("CALC_HEADER_TITLE", "");
         var w = U.HeaderDesc = b.get("CALC_HEADER_DESC", "");
         U.initialize();
         var y = e.getElementById("KJEHeaderContent");
         if (y) {
             var m = b.get("CALC_HEADER_DIV", "<div id=KJECalculatorTitle><h1>CALC_HEADER_TITLE</h1></div><div id=KJECalculatorDescription>CALC_HEADER_DESC</div>");
             y.innerHTML = m.replace("CALC_HEADER_TITLE", a).replace("CALC_HEADER_DESC", w)
         }
         if (U.customInit) {
             U.customInit(this)
         }
         U.showTimer()
     },
     showTimer: function() {
         var a = KJE;
         setTimeout(a.showCalculator, 0)
     },
     scrolled: function() {
         var a = KJE;
         if (!a.CommandButtonsFixed) {
             if (a.ScrollTimeOut != null) {
                 clearTimeout(a.ScrollTimeOut)
             }
             a.ScrollTimeOut = setTimeout(a.buttonPosition, 200)
         }
     },
     buttonPosition: function() {
         var b = KJE;
         var d = b.util.findPosRelativeToViewport(b.Calculator)[1];
         var c = "px",
             h = b.Calculator.offsetTop,
             a = b.AllContent.offsetHeight,
             f = b.CommandButtonHeader,
             e = b.CommandButtonOffset;
         var g = (h - e) + c;
         if ((d + h + a) < 0) {
             g = (h + a) + c
         } else {
             if (d - f < 0) {
                 g = (h - d + 5 + f) + c
             }
         }
         b.Buttons.style.top = g
     },
     goScroll: function() {
         var a = KJE;
         if (a.Scroll) {
             var b = a.util.findPos(a.Calculator);
             window.scrollTo(b[0], b[1] - a.ScrollMinimum)
         }
     },
     showInputs: function() {
         var a = KJE;
         if (a.CalcControl.initInputs) {
             a.CalcControl.initInputs()
         }
         var b = a.Report.style.display = "none";
         var c = "inline-block";
         var e = "block";
         a.CalculatorTable.className = a.CalculatorTableClass;
         a.Calculate.value = a.ButtonCalculate;
         a.ViewReport.value = a.ButtonViewReport;
         a.Calculate.style.display = a.ShowCalculateButton ? c : b;
         var d = a.Definitions;
         if (d) {
             d.style.display = a.ShowDefinitions ? e : b
         }
         a.Main.style.display = e;
         a.Calculator.style.height = a.Main.offsetHeight + "px";
         a.reportViewable = false;
         if (a.showInputsFirst) {
             a.goScroll()
         } else {
             a.showInputsFirst = true
         }
         a.calcResize()
     },
     calculateButtonAction: function() {
         var a = KJE;
         if (KJE.MenuWindowHide) {
             KJE.MenuWindowHide()
         }
         a.goScroll();
         if (a.reportViewable) {
             a.printTheReport()
         } else {
             if (!a.Error && !a.InComplete) {
                 a.CalcTimeout = setTimeout(a.results, 10)
             }
         }
     },
     printOpenReport: function(j) {
         var q = KJE;
         var h = document.getElementById("KJEAllContent");
         var e = q.replace;
         var a = q.gReportGraphs;
         var b = h.innerHTML;
         var p = q.ReportDocumentStart + b + q.ReportDocumentEnd;
         var o = p.indexOf("<!--KJEDEFINITIONS-->");
         var n = p.indexOf("<!--KJEDEFINITIONSEND-->", o);
         p = p.substring(0, o) + p.substring(n);
         o = p.indexOf("<!--KJEMAIN-->");
         n = p.indexOf("<!--KJEMAINEND-->", o);
         p = p.substring(0, o) + p.substring(n);
         p = e("<!--KJEDEFINITIONSEND-->", "", p);
         p = e("<!--REPORT_DEFINED_END-->", "", p);
         p = e("<!--KJEMAINEND-->", "", p);
         p = e("**REPORT_STYLE_SHEET**", q.ReportStyleSheet, p);
         p = e("**REPORT_STYLE_SHEET2**", q.ReportStyleSheet2, p);
         p = e("**REPORT_DEFAULT_STYLE**", q.ReportStyleDefault, p);
         q.ReportHeader = q.replace("", "", q.ReportHeader);
         p = e("**HEADER**", q.ReportHeader, e("**REPORT_TITLE**", document.title, p));
         p = e("**FOOTER**", e("<!--EXTRA_FOOTER-->", q.ReportExtraFooter, q.ReportFooter), p);
         p = e("**REPORT_TITLE**", q.CalcName ? q.CalcName : q.CalculatorTitleShow, p);
         p = e("**TITLE**", q.CalcName ? q.CalcName : "Financial Calculator", p);
         p = e("Calculator Calculator", "Calculator", p);
         var d = "<!--GRAPHEND-->";
         for (var k = 0; k < q.ReportGraphCount; k++) {
             var f = "";
             if (q.reportViewable) {
                 var m = q.gReportGraphs;
                 for (var l = 0; l < m.length; l++) {
                     if (m[l]) {
                         m[l].setWidth(true, KJE.gWidthReport)
                     }
                 }
             }
             if (!q.VML) {
                 f = '<img src="' + a[k].wCanvas.toDataURL() + '" height=' + a[k].wCanvas.offsetHeight + " width=" + a[k].wCanvas.offsetWidth + ">"
             }
             var c = "<div class='KJEGraphTitle'>" + e('"', "&quote", a[k]._titleGraph.s) + "</div>";
             o = p.indexOf("<!--GRAPH" + k + "-->");
             n = p.indexOf(d, o);
             p = p.substring(0, o) + c + f + p.substring(n + d.length)
         }
         j.document.write(p);
         j.document.close();
         j.focus()
     },
     printTheReport: function() {
         var a = KJE;
         if (a.IE7and8 || a.VML) {
             window.print();
             return
         }
         var c = 0;
         if (screen) {
             c = screen.width / 2 - 480
         }
         var b = window.open("", "_blank", "toolbar=yes,menubar=yes,location=no,directories=no,status=no,scrollbars=yes,resizable=yes,copyhistory=no,width=960,height=" + (screen.height - 170) + ",left=" + c + ",top=5");
         if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
             setTimeout(function() {
                 a.printOpenReport(b)
             }, 100)
         } else {
             a.printOpenReport(b)
         }
     },
     showReport: function() {
         var a = KJE;
         a.InTask = false;
         if (a.Error || a.InComplete) {
             return
         }
         if (a.inCommandTask(true)) {
             return
         }
         setTimeout(a.showReportFinal, 200)
     },
     showReportFinal: function() {
         var a = KJE;
         a.DataPointHide();
         if (KJE.MenuWindowHide) {
             KJE.MenuWindowHide()
         }
         if (!a.reportViewable) {
             a.CalculatorTable.className = a.CalculatorTableReportClass;
             a.results(false, true);
             if (a.Error || a.InComplete) {
                 a.inCommandTask(false);
                 return
             }
             a.reportViewable = true;
             a.Calculate.value = a.ButtonPrintReport;
             a.Calculate.style.display = (a.ShowPrintButton ? "inline-block" : "none");
             a.Calculator.style.height = "0px";
             a.Main.style.display = "none";
             if (a.Definitions) {
                 a.Definitions.style.display = "none"
             }
             a.Report.style.display = "block";
             a.ViewReport.value = a.ButtonHideReport;
             if (a.reportPreprocess) {
                 a.sReport = a.reportPreprocess(a.CalcControl, a.ReportText)
             } else {
                 a.sReport = a.ReportText
             }
             a.sReport = a.CalcControl.formatReport(a.sReport);
             setTimeout(a.fireReport, 50)
         } else {
             a.showInputs();
             setTimeout(function() {
                 a.inCommandTask(false)
             }, 400)
         }
     },
     fireReport: function() {
         var b = KJE;
         var d = b.sReport.split(b.MSG_GRAPH);
         b.sReport = "";
         if (d[0]) {
             b.ReportTop.innerHTML = d[0]
         }
         for (var e = 0; e < b.ReportGraphCount; e++) {
             if (d[e + 1]) {
                 b.ReportMiddle[e].innerHTML = d[e + 1]
             }
         }
         if (b.gReportGraphs.length != d.length - 1) {
             for (var f = 0; f < b.ReportGraphCount; f++) {
                 var a = b.gNewGraph(b.gGraphs[f]._gtGraphType._iGraphType, "REPORTGRAPH" + (f), true, false, false, b.sgv(b.gGraphs[f]._titleGraph.getProperty(), ""), true);
                 if (a) {
                     b.gReportGraphs[f] = a
                 }
             }
         }
         var c = null;
         for (f = 0; f < b.gReportGraphs.length; f++) {
             c = b.gReportGraphs[f];
             c.setProperty(b.gGraphs[f].getProperty());
             c._legend.setProperty(b.gGraphs[f]._legend.getProperty());
             c._grid.setProperty(b.gGraphs[f]._grid.getProperty());
             c._axisY.setProperty(b.gGraphs[f]._axisY.getProperty());
             c._axisX.setProperty(b.gGraphs[f]._axisX.getProperty());
             c.setTitle(b.sgv(b.gGraphs[f]._titleGraph.getProperty(), ""));
             c._titleXAxis.setProperty(b.gGraphs[f]._titleXAxis.getProperty());
             c._titleYAxis.setProperty(b.gGraphs[f]._titleYAxis.getProperty());
             c.add(b.gGraphs[f].getDataProperties());
             c.setBackground(b.parameters.get("PAGEBACKGROUND_COLOR", b.colorRGBackground));
             c.setWidth(true)
         }
         var h = b.CalcControl;
         if (h.formatGraph) {
             h.formatGraph(h, b.gReportGraphs)
         }
         if (h.reportComplete) {
             h.reportComplete(b.GuiControl)
         }
         if (b.reportComplete) {
             b.reportComplete(b.CalcControl, b.ReportText)
         }
         b.ViewReport.focus();
         b.goScroll();
         setTimeout(function() {
             b.inCommandTask(false)
         }, 400)
     }
 };
 KJE.util = {
     findPos: function(a) {
         var b = curtop = 0;
         if (a.offsetParent) {
             do {
                 b += a.offsetLeft;
                 curtop += a.offsetTop
             } while (a = a.offsetParent)
         }
         return [b, curtop]
     },
     getPageScroll: function() {
         var b, a;
         if (self.pageYOffset) {
             a = self.pageYOffset;
             b = self.pageXOffset
         } else {
             if (document.documentElement && document.documentElement.scrollTop) {
                 a = document.documentElement.scrollTop;
                 b = document.documentElement.scrollLeft
             } else {
                 if (document.body) {
                     a = document.body.scrollTop;
                     b = document.body.scrollLeft
                 }
             }
         }
         return [b, a]
     },
     findPosRelativeToViewport: function(c) {
         var b = this.findPos(c);
         var a = this.getPageScroll();
         return [b[0] - a[0], b[1] - a[1]]
     }
 };
 KJE.InputModern = (navigator.userAgent.match(/(iPhone|iPod)/) ? false : true);
 KJE.IE = ((window.ActiveXObject || "ActiveXObject" in window) ? true : false);
 KJE.IE7 = (navigator.appVersion.indexOf("MSIE 7.") != -1);
 KJE.IE8 = (navigator.appVersion.indexOf("MSIE 8.") != -1);
 KJE.IE7and8 = (KJE.IE7 || KJE.IE8) && (!window.addEventListener);
 if (!KJE.IE7and8) {
     KJE.IE7 = false
 }
 KJE.VML = (KJE.IE7and8 || (typeof G_vmlCanvasManager != "undefined"));
 KJE.List = function() {
     this.length = 0;
     this.items = {};
     this.bLock = {}
 };
 KJE.List.prototype.getSet = function(b, a) {
     if (this.exists(b)) {
         return this.items[b]
     }
     return this.set(b, a)
 };
 KJE.List.prototype.get = function(b, a) {
     if (typeof(this.items[b]) == "undefined") {
         return a
     } else {
         return this.items[b]
     }
 };
 KJE.List.prototype.exists = function(a) {
     return !(typeof(this.items[a]) == "undefined")
 };
 KJE.List.prototype.locked = function(a) {
     return !(typeof(this.bLock[a]) == "undefined")
 };
 KJE.List.prototype.set = function(b, c, a) {
     if (typeof(c) != "undefined") {
         if (typeof(this.items[b]) == "undefined") {
             this.length++
         }
         if (this.locked(b)) {
             return this.items[b]
         } else {
             if (a) {
                 this.bLock[b] = true
             }
             this.items[b] = c
         }
     }
     return c
 };
 KJE.CalculatorWidth = KJE.CalculatorWidthMax;
 KJE.ReportDocumentStart = '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head><title>**REPORT_TITLE**</title><meta name="viewport" content="height=device-height,width=device-width,initial-scale=1">**REPORT_DEFAULT_STYLE**<link type="text/css" rel="StyleSheet" href="**REPORT_STYLE_SHEET**" /><link type="text/css" rel="StyleSheet" href="**REPORT_STYLE_SHEET2**" /></head><body ' + KJE.KJEReportBodyClass + ">**HEADER**", KJE.MSG_ADA_GRAPH = "<figure zindex='1' style='margin:0; padding:0;'><figcaption class=KJEAccessible>Please view the report to see detailed results in tabular form.</figcaption>" + KJE.MSG_GRAPH + "</figure>";
 KJE.parameters = new KJE.List();
 KJE.inputs = new KJE.List();
 KJE.droppers = new KJE.List();
 KJE.definitions = new KJE.List();
 KJE.definitions.set("**INFLATION_DEFINITION**", "This is what you expect the average rate of inflation to be in the long-term. In New Zealand, Stats NZ publishes the Consumer Price Index (CPI). Using a calculator from the Reserve Bank, between 1990 and 2018 the CPI had a long-term compounded average of 2.1% annually. However inflation varies each year. For example in In 2008 and 2011, the Reserve Bank’s data shows that inflation was around 5% per year.");
 KJE.definitions.set("**ROR_DEFINITION**", "");
 KJE.definitions.set("**ROR_SHORT_DEFINITION**", "It is important to remember that these scenarios are hypothetical and that future interest rates can't be predicted with certainty.");
 KJE.UKuejna = "";
 KJE.subheader = "";
 KJE.iStorageTime = 0;
 KJE.STORAGE_NONE = 0;
 KJE.STORAGE_AUTO = 1;
 KJE.bStorageNonsupportWarning = false;
 KJE.bStorageOK = function() {
     if (typeof(Storage) !== "undefined" && typeof(localStorage) != "undefined") {
         try {
             localStorage.setItem("localStorage", 1);
             localStorage.removeItem("localStorage")
         } catch (a) {
             KJE.bUseStorage = KJE.STORAGE_NONE;
             if (KJE.bStorageNonsupportWarning && !KJE.deviceMobile) {
                 alert('Your web browser does not support storing settings locally. The most common cause of this is using "Private Browsing Mode". The Auto Save functions will be disabled, all other aspects of the calculator will work correctly.')
             }
             return false
         }
         return true
     }
     return false
 };
 KJE.bStorageInit = function() {
     KJE.oStorageItems = null;
     KJE.bUseStorage = KJE.parameters.get("LOCAL_STORAGE", KJE.STORAGE_AUTO);
     KJE.sStorageKey = (typeof KJE.CalcType != "undefined" ? KJE.CalcType : "TEMP");
     if (KJE.bStorageOK()) {
         try {
             var b = localStorage.getItem(KJE.sStorageKey);
             if (KJE.LZString) {
                 b = KJE.LZString.decompressFromEncodedURIComponent(b)
             }
             KJE.oStorageItems = JSON.parse(b)
         } catch (c) {
             KJE.oStorageItems = {}
         }
         if (KJE.oStorageItems == null) {
             KJE.oStorageItems = {}
         }
         localStorage.setItem(KJE.sStorageKey + "_href", KJE.formatHref());
         localStorage.setItem(KJE.sStorageKey + "_title", document.title)
     } else {
         KJE.bUseStorage = KJE.STORAGE_NONE
     }
     if (KJE.getURLValueParam) {
         var a = KJE.getURLValueParam();
         if (a) {
             KJE.oStorageItems = a
         }
     }
     return KJE.bUseStorage
 };
 KJE.StorageSet = function() {
     if (KJE.bUseStorage) {
         if (KJE.bStorageTimeout) {
             clearTimeout(KJE.bStorageTimeout)
         }
         KJE.bStorageTimeout = setTimeout(KJE.bStorageSet, KJE.iStorageTime)
     }
 };
 KJE.getJSONFromInputs = function() {
     var b = KJE.inputs.items;
     var a = {};
     for (var c in b) {
         if (b.hasOwnProperty(c)) {
             if (b[c]._inputType != KJE.TypeLabel && b[c]._inputType != KJE.TypeNone) {
                 a[c] = b[c]._value
             }
             if (b[c]._inputTypeAdditional == KJE.TypeDropBox) {
                 a[b[c]._Additional.name] = b[c]._Additional.value
             }
         }
     }
     var d = JSON.stringify(a);
     return d
 };
 KJE.bStorageSet = function(c, b) {
     var a = KJE.getJSONFromInputs();
     if (KJE.LZString) {
         a = KJE.LZString.compressToEncodedURIComponent(a)
     }
     if (KJE.bUseStorage) {
         localStorage.setItem(KJE.sStorageKey + (c ? "#" + c : ""), a);
         if (b) {
             localStorage.setItem(KJE.sStorageKey + "#" + c + "_name", b)
         }
     }
     return a
 };
 KJE.bStoragePopulate = function(c) {
     var b = KJE.inputs.items;
     for (var d in b) {
         var a = false;
         if (c.hasOwnProperty(d)) {
             a = c[d]
         } else {
             if (b.hasOwnProperty(d)) {
                 a = b[d].vDefault
             }
         }
         var e = null;
         if (b[d]._inputTypeAdditional != KJE.TypeNone) {
             if (c.hasOwnProperty(b[d]._Additional.name)) {
                 e = c[b[d]._Additional.name]
             } else {
                 e = b[d].vDefault2
             }
         }
         KJE.InputItem.InputSetValues(b[d], a, e, false)
     }
     KJE.results(true)
 };
 KJE.StorageGet = function(b, a) {
     var d = KJE.parameters.get(b, a);
     if (KJE.oStorageItems && KJE.bUseStorage) {
         var c = KJE.oStorageItems[b];
         if (c != null) {
             d = c
         }
     }
     return d
 };
 KJE.bHrefTrimURL = true;
 KJE.formatHref = function() {
     var a = document.location.href;
     if (KJE.bHrefTrimURL) {
         var b = a.indexOf("?");
         if (b > 0) {
             a = a.substr(0, b)
         }
     }
     return a
 };
 if (document.addEventListener) {
     document.addEventListener("DOMContentLoaded", KJE.init, false)
 }
 KJE.bHT = false;
 KJE.ROR_MONTH = function(a) {
     return Math.pow(1 + (a), 1 / 12) - 1
 };
 KJE.ROR_PERIOD = function(a, b) {
     return Math.pow(1 + (a), 1 / b) - 1
 };
 KJE.APY_MONTH = function(a) {
     return KJE.FV_AMT(a, 12, 1) - 1
 };
 KJE.NPV_AMT = function(b, c, a) {
     if (b == -1) {
         return 0
     }
     return (a / Math.pow((1 + b), c))
 };
 KJE.FV_AMT = function(b, c, a) {
     if (b == 0) {
         return a
     }
     return (a / Math.pow((1 + b), ((-1) * c)))
 };
 KJE.FV_BEGIN = function(a, c, b) {
     if (a == 0) {
         return c * b
     }
     return (b / a) * (Math.pow((1 + a), c + 1) - 1) - b
 };
 KJE.FV = function(a, c, b) {
     if (a == 0) {
         return c * b
     }
     return (b / a) * (Math.pow((1 + a), c) - 1)
 };
 KJE.PV = function(a, c, b) {
     return KJE.NPV_AMT(a, c, KJE.FV(a, c, b))
 };
 KJE.PV_BEGIN = function(a, c, b) {
     return KJE.NPV_AMT(a, c, KJE.FV_BEGIN(a, c, b))
 };
 KJE.RATE = function(h, c, b) {
     var a = 0;
     var g = 1;
     var e = c;
     var d = KJE.PMT;
     for (var f = 1; f < 50; f++) {
         e = d(a, h, b);
         if (e == c) {
             return a
         } else {
             if (e < c) {
                 a += g
             } else {
                 a -= g
             }
         }
         g = g / 2
     }
     return a
 };
 KJE.PERIODS = function(b, c, a) {
     if (b == 0 && c != 0) {
         return a / c
     }
     var f = 3120;
     var h = 1560;
     var e = c;
     var d = KJE.PMT;
     for (var g = 1; g < 50; g++) {
         e = d(b, f, a);
         if (e == c) {
             return f
         } else {
             if (e < c) {
                 f -= h
             } else {
                 f += h
             }
         }
         h = h / 2
     }
     return f
 };
 KJE.PERIODS_FV = function(h, i, a) {
     var f = 720;
     var g = 360;
     var e = i;
     var d = KJE.PMT;
     var c = KJE.NPV_AMT;
     for (var b = 1; b < 50; b++) {
         e = d(h, f, c(h, f, a));
         if (e == i) {
             return f
         } else {
             if (e < i) {
                 f -= g
             } else {
                 f += g
             }
         }
         g = g / 2
     }
     return f
 };
 KJE.APR = function(f, c, b, a, e) {
     var d = KJE.PMT(b, f, a + e);
     return KJE.RATE(f, d, a)
 };
 KJE.PMT = function(a, c, b) {
     if (c <= 0) {
         return b
     }
     if (c <= 1) {
         return b * (1 + a)
     }
     if (a == 0) {
         return b / c
     }
     return (b * a) / (1 - Math.pow((1 + a), (c * (-1))))
 };
 KJE.PMT_BEGIN = function(a, h, e) {
     var c = KJE.PMT;
     if (h <= 1) {
         return e
     }
     var b = c(a, h, e);
     var g = b / 2;
     var d = 0;
     for (var f = 1; f < 50; f++) {
         d = c(a, h - 1, e - b);
         if (d == b) {
             return b
         } else {
             if (d < b) {
                 b -= g
             } else {
                 b += g
             }
         }
         g = g / 2
     }
     return b
 };
 KJE.ScheduleTableTitle = "Periodic Schedule";
 KJE._sTableHeader = "<div class='KJEScheduleDiv'><table class='KJEScheduleTable KJEReportTableShrink' summary='**TITLE_TAG**'>";
 KJE._sTableHeaderSmall = "<table class='KJEScheduleTable KJEReportTableShrink' summary='**TITLE_TAG**'>";
 KJE._sTableFooter = "</table></div>";
 KJE._sTableFooterSmall = "</table>";
 KJE._sTopRow = "<tr class='KJEScheduleHeaderRow' >";
 KJE._sEvenRow = "<tr class='KJEScheduleEvenRow' >";
 KJE._sOddRow = "<tr class='KJEScheduleOddRow' >";
 KJE._sRowFooter = "</tr>";
 KJE._sHeading = "<th class='KJEScheduleHeading' >";
 KJE._sHeadingUnderline = "<th class='KJEScheduleHeadingUnderline' >";
 KJE._sHeadingFooter = "</th>";
 KJE._sCell = "<td class='KJEViewReportKJEScheduleCell' >";
 KJE._sCellStrong = "<td class='KJEScheduleCellStrong' >";
 KJE._sCellSpecial = "<td class='KJEScheduleCellSpecial' >";
 KJE._sCellFooter = "</td>";
 KJE._sCellBorderClass = "KJECellBorder";
 KJE.Repeating = function(a) {
     a = (!a ? "MSG_REPORT_COL" : a);
     this.sRepeating = "";
     this.nRepeatingCount = 0;
     this.sReportCols = new Array(15);
     this.bReportRequired = new Array(15);
     for (var b = 0; b < 15; b++) {
         this.sReportCols[b] = KJE.parameters.get(a + (b + 1), "");
         this.bReportRequired[b] = KJE.parameters.get("MSG_REPORT_REQ" + (b + 1), true)
     }
 };
 KJE.Repeating.prototype.sReportCol = function(a, b) {
     var c = "";
     if (b < 1 || b > this.sReportCols.length) {
         c = a
     } else {
         if (!this.sReportCols[b - 1] || this.sReportCols[b - 1] == "") {
             c = a
         } else {
             c = this.sReportCols[b - 1]
         }
     }
     return c
 };
 KJE.Repeating.prototype.getRepeat = function(d) {
     var a = KJE;
     var c = a._sTableHeader;
     var b = a._sTableFooter;
     if (a.CalculatorWidth < 640) {
         c = a._sTableHeaderSmall;
         b = a._sTableFooterSmall
     }
     return c.replace("**TITLE_TAG**", d ? d.replace("'", "&#39;") : a.parameters.get("MSG_REPEAT_TITLE", a.ScheduleTableTitle)) + this.sRepeating + b
 };
 KJE.Repeating.prototype.clearRepeat = function() {
     this.sRepeating = "";
     this.nRepeatingCount = 0
 };
 KJE.Repeating.prototype.add = function(o, n, c, b, k, m, d, l) {
     var p = "";
     if (arguments.length == 0) {
         return p
     }
     var f = this.bReportRequired;
     var a = "";
     var j = "";
     for (var h = m.length; h > 1; h--) {
         if (m[h - 1] != null) {
             break
         }
     }
     var g = 0;
     d = (d ? true : false);
     for (var e = 0; e < h; e++) {
         if (m[e] != null) {
             if (m[e] != "" && f[e]) {
                 if (m[e].sContent) {
                     j = m[e].sContent;
                     a = (m[e].sCell ? m[e].sCell : o);
                     if (m[e].sFormat) {
                         a = a.replace(">", " " + m[e].sFormat + ">")
                     }
                     d = false
                 } else {
                     a = o;
                     if (d) {
                         a = a.replace("' >", "' scope='col' >")
                     }
                     j = m[e]
                 }
                 if (e < h - 1) {
                     a = a.replace("class='", "class='" + k + " ")
                 }
                 g++;
                 p += a + j + n
             }
         }
     }
     if (g > 0 && d) {
         p = KJE.replace("' >", "' width=" + KJE.number(Math.floor(100 / g), 0) + "% >", p)
     }
     this.sRepeating += c + (!l ? p.replace("<td", "<td scope='row' ") : p) + b
 };
 KJE.Repeating.prototype.addHeader = function() {
     var a = KJE;
     this.add(a._sHeading, a._sHeadingFooter, a._sTopRow, a._sRowFooter, a._sCellBorderClass, arguments, true, true)
 };
 KJE.Repeating.prototype.addFooter = function() {
     var a = KJE;
     this.add(a._sCellStrong, a._sCellFooter, a._sTopRow, a._sRowFooter, a._sCellBorderClass, arguments, true, true)
 };
 KJE.Repeating.prototype.addRepeat = function() {
     var a = KJE;
     this.add(a._sCell, a._sCellFooter, (this.nRepeatingCount % 2 == 0 ? a._sOddRow : a._sEvenRow), a._sRowFooter, a._sCellBorderClass, arguments, false, false);
     this.nRepeatingCount++
 };
 KJE.getScreenCoord = function(g, a, b) {
     var f = 0;
     var e = 0;
     do {
         f += b.offsetLeft;
         e += b.offsetTop
     } while (b = b.offsetParent);
     var d = f + g;
     var c = e + a;
     return {
         x: d,
         y: c
     }
 };
 KJE.getMouseCoord = function(a, j, c) {
     var n = 0;
     var m = 0;
     do {
         n += j.offsetLeft;
         m += j.offsetTop
     } while (j = j.offsetParent);
     var h = 0;
     var e = 0;
     var g = a.pageX;
     if (g == null) {
         var b = document.documentElement;
         var l = (b && b.scrollLeft != null) ? b : document.body;
         h = a.clientX + l.scrollLeft;
         e = a.clientY + l.scrollTop
     } else {
         if (c) {
             var k = a.touches[0];
             h = k.pageX;
             e = k.pageY
         } else {
             h = g;
             e = a.pageY
         }
     }
     var i = h - n;
     var f = e - m;
     return {
         x: i,
         y: f
     }
 };
 KJE.sIncomplete = "?";
 KJE.DropperColors = false;
 KJE.iDropperCount = 0;
 KJE.sToggleTitle = "<table **EXPANDED** class='KJEToggleTable' " + KJE.MSG_ADA_TABLE + "><tr><td width=99% class=**TITLE_CLASS** valign='top'>**TITLE_TEXT**<span class='KJEAccessibleInLine' aria-live='true'><br>**IMG_TEXT**</span></td><td class='KJEToggleIcon **IMG**' aria-hidden='true'>**ICON**</td></tr></table>";
 KJE.sToggleTitle1 = "<table **EXPANDED** class='KJEToggleTable' style='margin-left: 8px; margin-bottom: 8px;' " + KJE.MSG_ADA_TABLE + "><tr><td width=100% class=**TITLE_CLASS** valign='top'>**TITLE_TEXT**<span class='KJEAccessibleInLine' aria-live='true'><br>**IMG_TEXT**</span></td></tr></table>";
 KJE.sToggleTitle2 = "<table **EXPANDED** class='KJEToggleTable' " + KJE.MSG_ADA_TABLE + "><tr><td width=49% class=**TITLE_CLASS** valign='top'>**TITLE_TEXT**<span class='KJEAccessibleInLine' aria-live='true'><br>**IMG_TEXT**</span></td><td width=49% class=**TITLE_CLASS**  valign='top'>**TITLE_TEXT2**</td><td class='KJEToggleIcon **IMG**' aria-hidden='true'>**ICON**</td></tr></table>";
 KJE.MSG_DEFINE_PREFIX = "Define: ";
 KJE.MSG_DEFINE_HELPICON = "?";
 KJE.MSG_DEFN_CLOSE_LABEL = "Close definition";
 KJE.sToggleAltTextClose = "Press spacebar to show inputs";
 KJE.sToggleAltTextOpen = "Press spacebar to hide inputs";
 KJE.sToggleTitleClass = "KJEToggleTitle";
 KJE.sInputDescTextClass = "KJESubTitle";
 KJE.sInputDescAlignDefault = "KJERight";
 KJE.sToggleIcon = "KJEInputIcon";
 KJE.sToggleOpen = "[+]";
 KJE.sToggleClose = "[-]";
 KJE.sExpand = "aria-expanded";
 KJE.sExpanded = "";
 KJE.sCollapse = "";
 KJE.FMT_NUMBER = 0;
 KJE.FMT_DOLLARS = 1;
 KJE.FMT_PERCENT = 2;
 KJE.FMT_INPUT = 3;
 KJE.FMT_YESNO = 4;
 KJE.FMT_STRING = 5;
 KJE.sCP = "$";
 KJE.sCS = "";
 KJE.sPP = "";
 KJE.sPS = "%";
 KJE.sNP = "";
 KJE.sNS = "";
 KJE.sPC = ",";
 KJE.sPD = ".";
 KJE.sCC = ",";
 KJE.sCD = ".";
 KJE.bEuropeDecimals = false;
 KJE.ACCOUNTING_NEGATIVE = false;
 KJE.format = new Array();
 KJE.iDPRowHeight = 30;
 KJE.iDPItemHeight = 28;
 KJE.iDPDropHeight = KJE.iDPItemHeight;
 KJE.iDPInputHeight = 22;
 KJE.iDPInputTop = 2;
 KJE.iDPInputPad = 5;
 KJE.iDPSliderPad = 0;
 KJE.iDPDropBoxPad = 4;
 KJE.iDPDropBoxModernPad = 20;
 KJE.iDPDroppeeForceSize = false;
 KJE.DataPointX = 0;
 KJE.DataPointY = 0;
 KJE.bNoLabel = false;
 KJE.bPlusMinus = false;
 KJE.subText = function(a, c, b) {
     c = KJE.sInputDescTextClass + " " + (c ? c : KJE.sInputDescAlignDefault);
     b = (b ? b : "div");
     return "<" + b + " class='" + c + "'>" + a + "</" + b + ">"
 };
 KJE.nbr = function(p, e, b, m, c, q, o) {
     var s = KJE;
     if (!p) {
         p = 0
     }
     q = q || false;
     c = c || false;
     b = b || "";
     m = m || "";
     e = e || 0;
     if (e > 10) {
         e = 10
     }
     var f = s.round(p, e);
     var j = (f < 0);
     if (j) {
         f *= -1
     }
     var h = (f + "").split(".");
     var g = "";
     if (e > 0) {
         if (!h[1]) {
             if (!c) {
                 g = ("0000000000").substr(0, e)
             }
         } else {
             if (h[1].length == e) {
                 g = h[1]
             } else {
                 g = h[1] + (c ? "" : ("0000000000").substr(0, e - h[1].length))
             }
         }
         if (g.length > 0) {
             g = s.sPD + g
         }
     }
     var a = "";
     if (!q && (f > 999)) {
         var k = h[0].length;
         if (k % 3 > 0) {
             a = h[0].substr(0, k % 3) + s.sPC
         }
         for (var d = k % 3; d < k; d += 3) {
             a += h[0].substr(d, 3) + (d + 3 < k ? s.sPC : "")
         }
     } else {
         a = h[0]
     }
     if (a == "") {
         a = "0"
     }
     if (o && o > a.length) {
         a = ("0000000000" + a);
         a = a.substring(a.length - o)
     }
     return (j ? (s.ACCOUNTING_NEGATIVE ? "(" : "-") : "") + b + a + g + m + (s.ACCOUNTING_NEGATIVE && j ? ")" : "")
 };
 KJE.format[KJE.FMT_NUMBER] = function(a, b) {
     return KJE.nbr(a, b, "", "", true, false)
 };
 KJE.number = KJE.format[KJE.FMT_NUMBER];
 KJE.format[KJE.FMT_DOLLARS] = function(a, b) {
     return KJE.nbr(a, b, KJE.sCP, KJE.sCS, false, false)
 };
 KJE.dollars = KJE.format[KJE.FMT_DOLLARS];
 KJE.format[KJE.FMT_PERCENT] = function(a, b) {
     return KJE.nbr(a * 100, b, KJE.sPP, KJE.sPS, true, false)
 };
 KJE.percent = KJE.format[KJE.FMT_PERCENT];
 KJE.format[KJE.FMT_INPUT] = function(a, b, c) {
     return KJE.nbr(a, b, "", "", true, true, c)
 };
 KJE.input = KJE.format[KJE.FMT_INPUT];
 KJE.format[KJE.FMT_YESNO] = function(a) {
     return (a ? KJE.YES : KJE.NO)
 };
 KJE.yesno = KJE.format[KJE.FMT_YESNO];
 KJE.round = function(b, a) {
     return (a ? (Math.round(b * (Math.pow(10, a)))) / (Math.pow(10, a)) : Math.round(b))
 };
 KJE.setLabelWrap = function(f, c, e, a, b, d) {
     if (e) {
         a = "**MESSAGE**"
     } else {
         if (!a) {
             a = "<label " + (d ? 'class="' + d.trim() + '"' : "") + ' for="' + c + '">**MESSAGE**</label>'
         }
     }
     f._sLabel = a;
     if (b) {
         KJE.setLabelText(f, b)
     }
 };
 KJE.setLabelText = function(b, a) {
     b.innerHTML = b._sLabel.replace("**MESSAGE**", a)
 };
 KJE.SliderKnobExtraClass = false;
 KJE.SliderKnobSize = 12;
 KJE.SliderKnobVertAdj = -3;
 KJE.SliderLabelVertAdj = 0;
 KJE.LabelLength = 190;
 KJE.InputLength = 80;
 KJE.RightPad = 10;
 KJE.LabelLeftMargin = 0;
 KJE.InputTotalLength = KJE.LabelLeftMargin + KJE.LabelLength + KJE.InputLength + KJE.RightPad;
 KJE.SliderMinLength = 130;
 KJE.TypeNone = 0;
 KJE.TypeNumber = 1;
 KJE.TypeString = 2;
 KJE.TypeDate = 3;
 KJE.TypeRadio = 4;
 KJE.TypeCheckbox = 5;
 KJE.TypeDropBox = 6;
 KJE.TypeLabel = 7;
 KJE.SliderScale = new Object();
 KJE.s_scale = new Array(10);
 KJE.s_scale[0] = [0, 1000, 5000, 10000, 10, 50, 100];
 KJE.s_scale[1] = [0, 1000, 5000, 20000, 10, 50, 200];
 KJE.s_scale[2] = [0, 1000, 10000, 100000, 50, 100, 1000];
 KJE.s_scale[3] = [0, 10000, 100000, 500000, 250, 1000, 5000];
 KJE.s_scale[4] = [0, 100000, 500000, 1000000, 250, 1000, 10000];
 KJE.s_scale[5] = [0, 100000, 500000, 1000000, 500, 10000, 100000];
 KJE.s_scale[6] = [0, 500, 2500, 5000, 10, 50, 100];
 KJE.s_scale[7] = [0, 100, 500, 1000, 5, 25, 50];
 KJE.s_scale[8] = [0, 24, 48, 72, 6, 6, 6];
 KJE.s_scale[9] = [0, 100, 200, 300, 10, 10, 10];
 KJE.s_label = new Array(10);
 KJE.k = "k";
 KJE.m = "m";
 KJE.s_label[0] = ["$0", "$1k", "$5k", "$10k"];
 KJE.s_label[1] = ["$0", "$1k", "$5k", "$20k"];
 KJE.s_label[2] = ["$0", "$1k", "$10k", "$100k"];
 KJE.s_label[3] = ["$0", "$10k", "$100k", "$500k"];
 KJE.s_label[4] = ["$0", "$100k", "$500k", "$1m"];
 KJE.s_label[5] = ["$0", "$100k", "$500k", "$1m"];
 KJE.s_label[6] = ["$0", "$500", "$2.5k", "$5k"];
 KJE.s_label[7] = ["$0", "$100", "$500", "$1k"];
 KJE.s_label[8] = ["0", "24", "48", "72"];
 KJE.s_label[9] = ["$0", "$100", "$200", "$300"];
 KJE.MakeScale = function(a, e, c, f, h, g, d) {
     var b = this;
     b._Min = a;
     b._Mid1 = e;
     b._Mid2 = c;
     b._Max = f;
     b._stepMin = h;
     b._stepMid = g;
     b._stepMax = d;
     b._range = 100
 };
 KJE.useScale = function(b) {
     var a = KJE;
     var c = a.s_scale[b];
     return new a.MakeScale(c[0], c[1], c[2], c[3], c[4], c[5], c[6])
 };
 KJE.s_Translate = function(a, b, h, g, f, c, j, i) {
     var e = 0;
     if (a > 66.66) {
         e = Math.round(((g + ((a - 66.66) / 33.33) * (f - g)) / i)) * i
     } else {
         if (a > 33.33) {
             e = Math.round(((h + ((a - 33.33) / 33.33) * (g - h)) / j)) * j
         } else {
             if (a > 0) {
                 e = Math.round(((a / 33.33) * (h - b) / c)) * c + b
             } else {
                 e = b
             }
         }
     }
     return (e > f ? f : e)
 };
 KJE.s_Untranslate = function(b, a, e, c, f) {
     var g = 0;
     if (b > f) {
         return 100
     } else {
         if (b > c) {
             g = 66.66 + ((b - c) * 33.33) / (f - c)
         } else {
             if (b > e) {
                 g = 33.33 + ((b - e) * 33.33) / (c - e)
             } else {
                 g = ((b - a) * 33.33) / (e - a)
             }
         }
     }
     return (g < 0 ? 0 : g)
 };
 KJE.Slider = function(g, h, f, c, e, j, a, i, b, d) {
     return new KJE.InputItem(d, KJE.TypeNumber, g, h, true, "KJE-" + g, f, c, 0, e, j, a, i, b)
 };
 KJE.MortgageAmtSlider = function(e, d, b, c) {
     var a = KJE;
     return a.Slider(e, d, a.Default.MortgageMin, a.Default.MortgageMax, c ? c : 0, a.FMT_DOLLARS, 0, [a.dollars(a.Default.MortgageMin / 1000) + a.k, a.dollars(200) + a.k, a.dollars(500) + a.k, a.dollars(1) + a.m], new a.MakeScale(0, 200000, 500000, 1000000, 5000, 10000, 20000), b)
 };
 KJE.LoanAmtSlider = function(d, c, b) {
     var a = KJE;
     return a.Slider(d, c, a.Default.MortgageMin, a.Default.MortgageMax, 0, a.FMT_DOLLARS, 0, [a.dollars(a.Default.MortgageMin / 1000) + a.k, a.dollars(5) + a.k, a.dollars(25) + a.k, a.dollars(100) + a.k], new a.MakeScale(0, 5000, 25000, 100000, 100, 500, 1000), b)
 };
 KJE.MortgageTermSlider = function(e, c, d, b) {
     var a = KJE;
     return a.Slider(e, c, a.Default.MortgageTermMin, a.Default.MortgageTermMax, 0, a.FMT_NUMBER, (d ? d : a.Default.MortgageTermIncrement), [a.Default.MortgageTermMin, a.number(Math.floor((a.Default.MortgageTermMax - a.Default.MortgageTermMin) * 0.334 + a.Default.MortgageTermMin)), a.number(Math.floor((a.Default.MortgageTermMax - a.Default.MortgageTermMin) * 0.667 + a.Default.MortgageTermMin)), a.number(a.Default.MortgageTermMax)], null, b)
 };
 KJE.MortgageTermDropBoxSlider = function(e, d, c) {
     var a = KJE;
     var b = a.getMortgageTermList().v;
     return a.DropBoxSlider(e, d, b)
 };
 KJE.NumberSlider = function(h, f, d, a, e, g, c) {
     var b = KJE;
     return b.Slider(h, f, d, a, (e ? e : 0), b.FMT_NUMBER, (g ? g : 1), [d, b.number(Math.floor((a - d) * 0.334 + d)), b.number(Math.floor((a - d) * 0.667 + d)), b.number(a)], null, c)
 };
 KJE.InputSlider = function(f, i, b, e, c, h, a, d) {
     var j = KJE;
     var g = j.Slider(f, i, b, e, c ? c : 0, j.FMT_INPUT, (a ? a : 1), [b, j.input(Math.floor((e - b) * 0.334 + b)), j.input(Math.floor((e - b) * 0.667 + b)), j.input(e)], null, d, h);
     g._iPadding = h;
     g.setValue(g.getValue(), true);
     return g
 };
 KJE.DollarSlider = function(h, j, b, f, c, a, e, d) {
     e = (e >= 0 && e <= 9 ? e : -1);
     var k = KJE;
     if (e == -1) {
         for (var g = 0; g <= 7; g++) {
             if (k.s_scale[g][3] == f) {
                 e = g;
                 break
             }
         }
     }
     if (e != -1) {
         return k.Slider(h, j, b, f, (c ? c : 0), k.FMT_DOLLARS, 1, k.s_label[e], k.useScale(e), d)
     }
     return k.Slider(h, j, b, f, (!c && c != 0 ? 2 : c), k.FMT_DOLLARS, (a ? a : 10), [k.dollars(b), k.dollars(Math.floor((f - b) * 0.334 + b)), k.dollars(Math.floor((f - b) * 0.667 + b)), k.dollars(f)], null, d)
 };
 KJE.ZipcodeInput = function(e, d, b) {
     var a = KJE;
     var c = new KJE.InputItem(b, KJE.TypeNumber, e, d, true, "KJE-" + e, 0, 99999, 0, 0, a.FMT_INPUT, 0, false);
     c._iPadding = 5;
     c.setValue(c.getValue(), true);
     return c
 };
 KJE.DollarInput = function(g, f, d, a, e, c) {
     var b = KJE;
     return new KJE.InputItem(c, KJE.TypeNumber, g, f, true, "KJE-" + g, d, a, 0, (!e && e != 0 ? 2 : e), b.FMT_DOLLARS, 0, false)
 };
 KJE.PercentInput = function(g, f, d, a, e, c) {
     var b = KJE;
     return new KJE.InputItem(c, KJE.TypeNumber, g, f, true, "KJE-" + g, d, a, 0, (!e && e != 0 ? 2 : e), b.FMT_PERCENT, 0, false)
 };
 KJE.PercentSlider = function(h, f, d, a, e, g, c) {
     var b = KJE;
     return b.Slider(h, f, d, a, (!e && e != 0 ? 2 : e), b.FMT_PERCENT, (g ? g : 0.1), [b.percent(d / 100), b.percent(Math.floor((a - d) * 0.334 + d) / 100), b.percent(Math.floor((a - d) * 0.667 + d) / 100), b.percent(a / 100)], null, c)
 };
 KJE.MortgageRateSlider = function(d, c, b) {
     var a = KJE;
     return a.RateSlider(d, c, a.Default.MortgageRateMin, a.Default.MortgageRateMax, a.Default.MortgageRateMax, null, b)
 };
 KJE.InvestRateSlider = function(d, c, b) {
     var a = KJE;
     return a.RateSlider(d, c, a.Default.InvestRateMin, a.Default.InvestRateMax, a.Default.InvestSliderRateMax, null, b)
 };
 KJE.InflationRateSlider = function(d, c, b) {
     var a = KJE;
     return a.RateSlider(d, c, a.Default.InflationRateMin, a.Default.InflationRateMax, a.Default.InflationSliderRateMax, null, b)
 };
 KJE.preKJE = function(a) {
     return (a ? "KJE-" + a : null)
 };
 KJE.suffix = function(b, a) {
     return (a ? b + a : null)
 };
 KJE.RateSlider = function(f, m, i, d, h, a, c) {
     a = a ? a : 0.5;
     i = i ? i : 0;
     d = d ? d : 25;
     h = h ? h : 12;
     var n = KJE;
     var j = n.percent;
     var g = h - i;
     var l = Math.floor(g * 0.337 + i);
     var k = Math.floor(g * 0.667 + i);
     var e = [j(i / 100), j(l / 100), j(k / 100), j(h / 100)];
     var b = new n.MakeScale(i, l, k, h, a, a, a);
     return n.Slider(f, m, i, d, 3, n.FMT_PERCENT, 0, e, b, c)
 };
 KJE.Nbr = function(f, g, e, a, b, h, d, c) {
     var i = KJE;
     return new i.InputItem(c, i.TypeNumber, f, g, true, "KJE-" + f, e, a, 0, b, h, 0, false, false, i.suffix(f, "_TRAIL"), i.suffix(i.preKJE(f), "_TRAIL"), d, null, null, i.TypeLabel)
 };
 KJE.NbrDropBox = function(e, g, d, a, c, i, f, h, b) {
     var j = KJE;
     return new j.InputItem(b, j.TypeNumber, e, g, true, "KJE-" + e, d, a, 0, c, i, 0, false, false, f, j.preKJE(f), (h ? h : g))
 };
 KJE.Checkbox = function(e, d, f, b, c) {
     var a = KJE;
     return new a.InputItem(c, a.TypeCheckbox, e, d, (b ? false : true), "KJE-" + e, 0, 0, f, 0, 0, 0, false, false, null, null, b)
 };
 KJE.DropBoxString = function(f, d, e, b, c) {
     var a = KJE;
     return new a.InputItem(c, a.TypeDropBox, f, d, true, "KJE-" + f, 0, 0, 0, 0, a.FMT_STRING, 0, false, false, e, a.preKJE(e), b)
 };
 KJE.DropBox = function(f, d, e, b, c) {
     var a = KJE;
     return new a.InputItem(c, a.TypeDropBox, f, d, true, "KJE-" + f, 0, 0, a.parameters.get(f, 0), 0, 0, 0, false, false, e, a.preKJE(e), b)
 };
 KJE.DropBoxSlider = function(d, c, e, b) {
     var a = KJE;
     var f = [e[0], e[Math.floor(e.length * 0.333)], e[Math.floor(e.length * 0.666)], e[e.length - 1]];
     return new a.InputItem(b, a.TypeDropBox, d, c, true, "KJE-" + d, 0, e.length - 1, 0, 0, 0, 1, f, null)
 };
 KJE.Label = function(f, d, e, b, c) {
     var a = KJE;
     return new a.InputItem(c, a.TypeLabel, f, d, false, "KJE-" + f, 0, 0, 0, 0, 0, 0, false, false, e, a.preKJE(e), b)
 };
 KJE.StringInput = function(f, d, e, b, c) {
     var a = KJE;
     return new a.InputItem(c, a.TypeString, f, d, true, "KJE-" + f, 0, 0, 0, 0, 0, 0, false, false, e, a.preKJE(e), b)
 };
 KJE.Date = function(f, d, e, b, c) {
     var a = KJE;
     return new a.InputItem(c, a.TypeDate, f, d, true, "KJE-" + f, 0, 0, "TODAY", 0, 0, 0, false, false, e, a.preKJE(e), b)
 };
 KJE.Radiobox = function(f, e, d, g, b, c) {
     var a = KJE;
     return new a.InputItem(c, a.TypeRadio, e, d, false, "KJE-" + e, 0, 0, g, 0, 0, 0, false, false, null, null, b, null, f)
 };
 KJE.Radioboxes = function(f, e, g, c, b, d) {
     var a = KJE;
     return new a.InputItem(d, a.TypeRadio, f, e, false, "KJE-" + f + "1", 0, 0, g, 0, 0, 0, false, false, f, a.suffix(a.preKJE(f), "2"), c, b)
 };
 KJE.InputItem = function(ap, k, g, j, a, aq, ai, aa, o, C, Q, H, aC, n, B, I, al, K, ar) {
     var G = this;
     var aw = KJE;
     var av = aw.setLabelWrap;
     var ao = aw.parameters;
     G._inputType = k;
     G._name = g;
     G._inputTypeAdditional = aw.TypeNone;
     G._increment = Math.abs(H);
     G._decimals = C;
     G._iPadding = 0;
     G._format = Q;
     G._minimum = ai;
     G._maximum = aa;
     G._range = aa - ai;
     G.bValidate = true;
     G.bIncompleteCheck = true;
     G.bNoLabel = KJE.bNoLabel;
     G.vDefault = ao.get(G._name, o);
     G.oAdditional = I;
     var V = ao.get("MSG_" + g + "1", al);
     var Y = ao.get("MSG_" + g + "2", K);
     var an = typeof document.createElement != "undefined" && typeof document.documentElement != "undefined" && typeof document.documentElement.offsetWidth == "number";
     if (!an) {
         return
     }
     G._sError = "";
     G._bError = false;
     G._InComplete = false;
     G._mouseDown = false;
     aw.inputs.set(g, this);
     var au = G._container = document.getElementById("KJE-C-" + G._name);
     if (!au) {
         G._inputType = aw.TypeNone;
         G.setValue(G.vDefault, true);
         return
     }
     au.className = "KJEInputContainer";
     var f = au.style;
     au.backgroundColor = f.backgroundColor;
     var z = au.offsetWidth;
     G.bSlider = (aC != false);
     if (aw.bNativeSlider === undefined) {
         var L = document.createElement("input");
         L.setAttribute("type", "range");
         aw.bNativeSlider = L.type !== "text"
     }
     if (n) {
         G._oScale = n
     }
     var d = aw.iDPInputPad;
     var N = G._inputField = document.getElementById(aq);
     var Z = G._iInputFieldDiv = document.getElementById(aq + "Div");
     var ag = N.style;
     N.name = (ar ? ar : G._name);
     N.className = aw.InputClass;
     ag.height = aw.iDPInputHeight - KJE.iDPInputTop + "px";
     ag.top = aw.iDPInputTop + "px";
     ag.position = "absolute";
     N.resize = false;
     if (G._inputType != aw.TypeLabel) {
         N.setAttribute("aria-required", "true")
     }
     G._sLabel = ao.get("MSG_" + G._name, j);
     var af = G._fieldset = document.getElementById("KJE-FS-" + G._name);
     if (af) {
         af.className = "KJEAccessibleFieldSet";
         var F = document.createElement("legend");
         F.className = "KJEAccessibleFieldSetLegend";
         F.innerText = G._sLabel;
         af.insertBefore(F, af.firstChild)
     }
     var E = 0;
     if (j != null && aw.LabelLength != 0) {
         ap = (ap ? " " + ap : "");
         var W = document.getElementById("KJE-D-" + (aw.InputItem.AltHelpName ? aw.InputItem.AltHelpName : G._name));
         var aA = G._label = document.createElement("div");
         var p = aA.style;
         p.position = "absolute";
         p.width = aw.LabelLength + "px";
         p.left = KJE.LabelLeftMargin + "px";
         p.top = (aw.iDPInputHeight / 4) + aw.iDPInputTop + "px";
         G.className = (W && KJE.PopupDefinitions ? "KJEHelp " : "KJELabel ") + ap;
         av(aA, aq, aw.deviceMobile || !a, null, G.bNoLabel ? "" : G._sLabel + (G._sLabel != "" ? aw.Colon : ""), G.className);
         aA.className = G.className;
         try {
             au.insertBefore(aA, af ? af : (Z ? Z : N))
         } catch (P) {}
         if (W && KJE.PopupDefinitions) {
             G.AddDefinitionEvents(aA, W, G._sLabel, G._name);
             // console.log(W);
         }
         E = aA.offsetWidth;
         if (!E) {
             E = aw.LabelLength
         }
         var U = aA.offsetHeight;
         if (U + 6 > aw.iDPRowHeight) {
             f.height = U + 6 + "px";
             p.top = "0px"
         }
     }
     var r = E;
     var ah = 0;
     N.indent = (aw.deviceInputPad ? aw.deviceInputPad : d) + E;
     if (G.bNoLabel) {
         N.indent = 0;
         E = 0
     }
     if (G._inputType == aw.TypeCheckbox || G._inputType == aw.TypeRadio) {
         G._sTrailingText = V;
         G._sTrailingText2 = Y;
         ag.left = E + "px";
         if (V) {
             var x = document.createElement("div");
             var am = x.style;
             av(x, aq, false, null, G._sTrailingText);
             x.className = "KJETrailingLabel";
             am.position = "absolute";
             E = E + d * 1.5 + (N.offsetWidth ? N.offsetWidth : 15);
             am.left = E + "px";
             au.appendChild(x);
             am.top = (aw.iDPInputHeight / 4) + aw.iDPInputTop + "px";
             var U = x.offsetHeight;
             if (U + 6 > aw.iDPRowHeight) {
                 f.height = U + 6 + "px";
                 am.top = "0px"
             }
             E += x.offsetWidth;
             x = x
         }
     } else {
         if (G._inputType != aw.TypeDropBox) {
             if (G._inputType == aw.TypeLabel) {
                 N.className = "KJEOutputLabel " + ap;
                 ag.top = (aw.iDPInputHeight / 4) + aw.iDPInputTop + "px";
                 ag.left = (E + d) + "px";
                 N.indent += aw.deviceInputPad;
                 if (V) {
                     ag.width = aw.InputLength + d + "px"
                 } else {
                     N.resize = true
                 }
                 ag.height = aw.iDPItemHeight - 2 + "px"
             } else {
                 if (G._inputType == aw.TypeString || G._inputType == aw.TypeDate) {
                     ag.left = ((aw.deviceInputPad ? aw.deviceInputPad : d) + E) + "px";
                     if (V || G.bSlider || G._inputType == aw.TypeDate) {
                         ag.width = aw.InputLength + "px"
                     } else {
                         N.indent = ((aw.deviceInputPad ? aw.deviceInputPad : d) + E) + d;
                         N.resize = true
                     }
                 } else {
                     ag.width = aw.InputLength + "px";
                     if (aw.deviceUseNumberType) {
                         var t = document.createElement("div");
                         var aD = t.style;
                         t.className = "KJELabelBold";
                         aD.position = "absolute";
                         aD.width = aw.deviceInputPad + "px";
                         aD.left = E + "px";
                         aD.top = (aw.iDPInputHeight / 4) + aw.iDPInputTop + "px";
                         if (Q == aw.FMT_DOLLARS) {
                             t.innerHTML = aw.sCP + aw.sCS
                         } else {
                             if (Q == aw.FMT_PERCENT) {
                                 t.innerHTML = aw.sPP + aw.sPS
                             } else {
                                 t.innerHTML = ""
                             }
                         }
                         aD.height = aw.iDPInputHeight + "px";
                         au.appendChild(t);
                         d = t.offsetWidth + 1
                     }
                     if (aw.deviceUseNumberType && (G._decimals == 0 && G._maximum < 1000)) {
                         N.type = "number"
                     }
                     ag.left = (E + d) + "px"
                 }
             }
         } else {
             N.className = "KJEDropBox";
             var at = ((aw.deviceInputPad ? aw.deviceInputPad : d) + E);
             var R = aw.iDPDropHeight - aw.iDPInputTop;
             var s = aw.InputLength + KJE.iDPDropBoxPad;
             if (Z) {
                 var D = Z.style;
                 Z.className = "KJEDropBoxDivModern";
                 N.className = "KJEDropBox KJEDropBoxModern";
                 D.height = aw.iDPInputHeight - KJE.iDPInputTop - 2 + "px";
                 D.top = aw.iDPInputTop - 1 + "px";
                 D.position = "absolute";
                 D.left = at + "px";
                 ag.left = 4 + "px";
                 D.height = R + "px";
                 D.width = s + "px";
                 ag.width = s + KJE.iDPDropBoxModernPad + "px";
                 ag.top = (aw.IE7and8 ? -7 : 0) + aw.iDPInputTop + "px"
             } else {
                 ag.width = s + "px";
                 ag.left = at + "px";
                 ag.top = aw.iDPInputTop + "px"
             }
             ag.height = R + "px";
             if (!V && !G.bSlider) {
                 N.indent = ((aw.deviceInputPad ? aw.deviceInputPad : KJE.iDPDropBoxPad) + E) + d;
                 N.resize = true
             }
         }
     }
     if (I) {
         var l = G._Additional = document.getElementById(I);
         if (G._Additional) {
             var az = l.style;
             az.position = "absolute";
             az.top = aw.iDPInputTop + "px";
             l.setAttribute("aria-required", "true");
             var z = aw.CalculatorWidth - aw.iDPInputPad * 2;
             if (aw.TypeRadio == G._inputType) {
                 G._inputTypeAdditional = aw.TypeRadio;
                 l.indent = E + d * 2;
                 az.left = l.indent + "px";
                 l.name = (ar ? ar : G._name);
                 l.className = KJE.InputClass;
                 az.height = aw.iDPInputHeight - aw.iDPInputTop + "px";
                 if (Y) {
                     var u = G._label3 = document.createElement("div");
                     var ay = u.style;
                     av(u, I, false, null, G._sTrailingText2);
                     u.className = "KJETrailingLabel";
                     ay.position = "absolute";
                     var ad = l.offsetWidth;
                     ad = (ad ? ad : 20);
                     ay.height = aw.iDPInputHeight + "px";
                     ay.top = (aw.iDPInputHeight / 4) + aw.iDPInputTop + "px";
                     if (!au.offsetWidth) {
                         var c = aw.LabelLength + aw.InputLength + d * 7 + ad;
                         ay.left = c + ad + "px";
                         az.left = c + "px"
                     } else {
                         if ((z - l.indent) < aw.SliderMinLength) {
                             az.top = aw.iDPInputHeight + "px";
                             az.left = r + "px";
                             ay.top = aw.iDPInputHeight + (aw.iDPInputHeight / 4) + "px";
                             ay.left = r + d * 1.5 + N.offsetWidth + "px";
                             f.height = (aw.iDPRowHeight * 1.6) + "px"
                         } else {
                             ay.left = E + d * 3.5 + ad + "px"
                         }
                     }
                     au.appendChild(u)
                 }
             } else {
                 G._inputTypeAdditional = aw.TypeDropBox;
                 var O = G._AdditionalDiv = document.getElementById(I + "Div");
                 l.name = B;
                 l.className = "KJEDropBox";
                 l.setAttribute("aria-label", V);
                 var m = aw.iDPDropHeight - aw.iDPInputTop;
                 var ac = E + (aw.offsetWidth ? aw.offsetWidth(N) : N.offsetWidth) + 5 + d * 2;
                 var q = ac - d;
                 var ab = z - ac;
                 if (O) {
                     var X = O.style;
                     O.className = "KJEDropBoxDivModern";
                     l.className = "KJEDropBox KJEDropBoxModern";
                     X.position = "absolute";
                     X.top = aw.iDPInputTop - 1 + "px";
                     X.height = m + "px";
                     X.left = q + "px";
                     X.width = ab + "px";
                     az.left = 0 + "px";
                     az.top = (aw.IE7and8 ? -7 : 0) + aw.iDPInputTop + "px"
                 } else {
                     az.left = q + "px"
                 }
                 az.width = ab + "px";
                 az.height = m + "px";
                 l.indent = ac;
                 if (ab < aw.SliderMinLength && au.offsetWidth) {
                     az.top = aw.iDPRowHeight + "px";
                     f.height = (aw.iDPRowHeight * 2) + "px"
                 }
             }
             if (l.addEventListener) {
                 l.addEventListener("change", aw.dataChanged, false)
             } else {
                 l.attachEvent("onchange", aw.dataChanged)
             }
         } else {
             if (V) {
                 G._inputTypeAdditional = aw.TypeLabel;
                 G._sTrailingText = V;
                 var x = document.createElement("div");
                 var am = x.style;
                 av(x, I, false, null, G._sTrailingText);
                 x.className = "KJETrailingLabel";
                 am.position = "absolute";
                 am.left = ((E + (aw.deviceInputPad ? aw.deviceInputPad : d) + d) + aw.InputLength + 5) + "px";
                 am.top = (aw.iDPInputHeight / 4) + aw.iDPInputTop + "px";
                 am.height = aw.iDPInputHeight + "px";
                 G._Additional = x;
                 l = G._Additional = x;
                 G._label2 = x;
                 au.appendChild(x)
             }
         }
     } else {
         if (G.bSlider) {
             var ah = ((E + (aw.deviceInputPad ? aw.deviceInputPad : d) + d) + aw.InputLength + aw.iDPSliderPad);
             var R = aw.iDPItemHeight;
             var A = G._slider = document.createElement("div");
             var J = A.style;
             A.setAttribute("aria-hidden", "true");
             if (!KJE.bPlusMinus) {
                 A.labels = G.setLabelSlider(R, R * 0.1, ah + aw.SliderKnobSize / 2, aC);
                 A.labels.indent = ah;
                 J.position = "absolute";
                 J.left = ah + "px";
                 A.className = "KJESlider"
             } else {
                 A.className = "KJEIncrementer"
             }
             A.indent = ah;
             A.unselectable = "on";
             J.height = R + "px";
             A.bMO = true;
             au.appendChild(G._slider);
             if (KJE.bPlusMinus) {
                 var b = G._plus = document.createElement("div");
                 var aB = G._minus = document.createElement("div");
                 var aj = b.style;
                 var y = aB.style;
                 aB.className = "KJEIncrementControl KJEIncrementMinus";
                 b.className = "KJEIncrementControl KJEIncrementPlus";
                 y.bMouseoutignore = aj.bMouseoutignore = true;
                 y.unselectable = aj.unselectable = "on";
                 y.position = aj.position = "relative";
                 y.cursor = aj.cursor = "pointer";
                 A.appendChild(G._minus);
                 A.appendChild(G._plus);
                 G.AddPlusMinusEvents(b, aB)
             } else {
                 if (aw.bNativeSlider) {
                     var w = G._line = document.createElement("input");
                     w.setAttribute("type", "range");
                     w.setAttribute("min", "0");
                     w.setAttribute("max", "100");
                     w.setAttribute("step", ".01");
                     w.tabIndex = "-1";
                     w.style.height = (aw.iDPRowHeight / 2 + 2) + "px";
                     w.style.outline = "none"
                 } else {
                     var w = G._line = document.createElement("div");
                     w.style.height = (aw.iDPRowHeight / 2 + 2) + "px"
                 }
                 w.className = "KJELine";
                 var S = w.style;
                 w.bMouseoutignore = true;
                 w.unselectable = "on";
                 S.position = "relative";
                 S.cursor = "pointer";
                 A.appendChild(G._line);
                 var T = aw.SliderKnobSize;
                 if (!aw.bNativeSlider) {
                     var ax = G._knob = document.createElement("div");
                     var ak = ax.style;
                     ax.sClassNormal = (aw.IE7and8 ? "KJEArrowIE8" : "KJEArrow") + (aw.SliderKnobExtraClass ? " " + aw.SliderKnobExtraClass : "");
                     ax.sClassActive = (aw.IE7and8 ? "KJEArrowIE8" : "KJEArrow active") + (aw.SliderKnobExtraClass ? " " + aw.SliderKnobExtraClass : "");
                     ax.className = ax.sClassNormal;
                     ax.unselectable = "on";
                     ax.bMouseoutignore = true;
                     ak.position = "absolute";
                     ak.cursor = "pointer";
                     A.appendChild(G._knob);
                     T = ax.offsetWidth * 0.66;
                     var M = A.offsetHeight;
                     var ae = ax.offsetHeight;
                     if (T == 0) {
                         T = aw.SliderKnobSize
                     }
                     if (ae == 0) {
                         ae = aw.SliderKnobSize
                     }
                     if (A.offsetHeight) {
                         ak.top = (M - ae + aw.SliderKnobVertAdj) + "px"
                     } else {
                         ak.top = (aw.iDPRowHeight - aw.SliderKnobSize + aw.SliderKnobVertAdj) + "px"
                     }
                     G.AddSliderEvents(A)
                 } else {
                     G.bSetRange = true;
                     G.AddNativeEvents(w)
                 }
                 S.left = T + "px";
                 G._posAdjust = T
             }
         }
     }
     G.vDefault2 = (G._inputTypeAdditional != aw.TypeNone ? G._Additional.value : null);
     aw.InputItem.InputSetValues(G, G.vDefault, G.vDefault2, true);
     G.AddInputEvents(N);
     if (ao.get(g + "_HIDE", false)) {
         G.bValidate = false;
         G.hide()
     }
     if (ao.get(g + "_DISABLE", false)) {
         G.disable()
     }
 };
 KJE.InputItem.InputSetValues = function(e, d, f, a) {
     var c = KJE;
     var g = d;
     if (a) {
         g = KJE.StorageGet(e._name, e.vDefault)
     }
     switch (e._inputType) {
         case c.TypeRadio:
             e._inputField.checked = g;
             if (e.oAdditional) {
                 e._Additional.checked = !e._inputField.checked
             }
             break;
         case c.TypeCheckbox:
             e._inputField.checked = g;
             break;
         case c.TypeDropBox:
             var b = c.setDropBox(e._inputField, g);
             e._InComplete = false;
             if (b == 0 && KJE.bFirstNotValid) {
                 e._InComplete = true
             }
             break;
         case c.TypeLabel:
             e._inputField.innerHTML = g;
             break;
         case c.TypeDate:
             e._inputField.value = g;
             e.setTypedDate(true);
             break;
         case c.TypeString:
             e._inputField.value = g;
             e.setTypedString(true);
             break;
         case c.TypeNumber:
             e._inputField.value = g;
             e.setTypedValue(true)
     }
     if (e._inputTypeAdditional != c.TypeNone) {
         var g = f;
         if (a) {
             g = c.StorageGet(e._Additional.name, e.vDefault)
         }
         switch (e._inputTypeAdditional) {
             case c.TypeDropBox:
                 var b = c.setDropBox(e._Additional, g);
                 e._InComplete = false;
                 if (b == 0 && KJE.bFirstNotValid) {
                     e._InComplete = true
                 }
                 break;
             case c.TypeDate:
                 e._Additional.value = g;
                 break;
             case c.TypeString:
                 e._Additional.value = g;
                 break;
             case c.TypeNumber:
                 e._Additional.value = g;
                 e.setTypedValue(true)
         }
     }
 };
 KJE.InputItem.AltHelpName = false;
 //  G.AddDefinitionEvents(aA, W, G._sLabel, G._name);
 KJE.InputItem.prototype.AddDefinitionEvents = function(h, f, e, b) {
     var d = 50;
     var c = KJE.iDPInputHeight - 5;
     var g = document.createElement("div");
     g.className = "KJEGuiDefnPopup";
     g.id = "KJE-PODEFN-" + b;
     var a = document.createElement("button");
     a.id = "KJE-PO-" + b;
     a.setAttribute("aria-label", KJE.MSG_DEFINE_PREFIX + e);
     a.className = "KJEDefinitionIcon";
     a.innerHTML = "i";
     a.tabIndex = "0";
     a.setAttribute("type", "button");
     a.setAttribute("onmouseout", 'KJE.DefnPointHide(\'' + b + '\')');
     g.innerHTML = '<button id="KJE-POCLOSE-' + b + '" class="KJECloseButton" onclick="KJE.DefnPointHide(\'' + b + '\')" type="button" aria-aria-label="' + KJE.MSG_DEFN_CLOSE_LABEL + " " + e + '" tabindex="0">X</button><dl class=KJEDefinitionPopup>' + f.innerHTML + "</dl>";
     g.innerHTML = '<dl class=KJEDefinitionPopup>' + f.innerHTML + "</dl>";
     h.insertBefore(a, h.firstChild);
     h.parentNode.appendChild(g);
     g.setAttribute("aria-hidden", "true");
     g.setAttribute("role", "dialog");
     g.setAttribute("aria-label", KJE.MSG_DEFINE_PREFIX + e);
     if (h.addEventListener) {
         h.addEventListener("click", function(i) {
             if (KJE.DefnPointTimeOut > 0 && KJE.DefnPoint == g) {
                 KJE.DefnPointHide()
             } else {
                 KJE.DefnPointShow(g, d, c, h, 60000, b)
             }
             i.preventDefault()
         }, false)

     } else {
         h.attachEvent("onclick", function(i) {
             if (KJE.DefnPointTimeOut > 0 && KJE.DefnPoint == g) {
                 KJE.DefnPointHide()
             } else {
                 KJE.DefnPointShow(g, d, c, h, 60000, b)
             }
             i.preventDefault()
         })
     }
 };
 KJE.InputItem.prototype.AddPlusMinusEvents = function(c, a) {
     var b = this;
     if (c.addEventListener) {
         c.addEventListener("click", function(d) {
             b.doIncrement(true)
         }, false);
         a.addEventListener("click", function(d) {
             b.doIncrement(false)
         }, false)
     } else {
         c.attachEvent("onclick", function(d) {
             b.doIncrement(true)
         });
         a.attachEvent("onclick", function(d) {
             b.doIncrement(false)
         })
     }
 };
 KJE.InputItem.prototype.AddNativeEvents = function(b) {
     var a = this;
     b.addEventListener("input", function(c) {
         if (a.bSetRange) {
             a.setRangeValue(c)
         }
         a.bSetRange = true
     }, false)
 };
 KJE.InputItem.prototype.AddSliderEvents = function(c) {
     var b = this;
     if (c.addEventListener) {
         try {
             document.createEvent("TouchEvent");
             c.addEventListener("touchstart", function(d) {
                 d.preventDefault();
                 b.doMouseDown(d, true)
             }, false);
             c.addEventListener("touchmove", function(d) {
                 d.preventDefault();
                 b.doMouseMove(d, true)
             }, false);
             c.addEventListener("touchend", function(d) {
                 d.preventDefault();
                 b.doMouseUp(d, true)
             }, false);
             c.addEventListener("touchcancel", function(d) {
                 d.preventDefault();
                 b.doMouseOut(d, true)
             }, false)
         } catch (a) {}
         c.addEventListener("mousemove", function(d) {
             b.doMouseMove(d)
         }, false);
         c.addEventListener("mousedown", function(d) {
             b.doMouseDown(d)
         }, false);
         c.addEventListener("mouseup", function(d) {
             b.doMouseUp(d)
         }, false);
         c.addEventListener("mouseout", function(d) {
             b.doMouseOut(d)
         }, false)
     } else {
         c.attachEvent("onmousemove", function(d) {
             b.doMouseMove(d)
         });
         c.attachEvent("onmousedown", function(d) {
             b.doMouseDown(d)
         });
         c.attachEvent("onmouseup", function(d) {
             b.doMouseUp(d)
         });
         c.attachEvent("onmouseout", function(d) {
             b.doMouseOut(d)
         })
     }
 };
 KJE.InputItem.prototype.AddInputEvents = function(b) {
     var a = this;
     if (b.addEventListener) {
         b.addEventListener("change", function(c) {
             a.doBlur(c)
         }, false);
         b.addEventListener("focus", function(c) {
             a.doFocus(c)
         }, false);
         b.addEventListener("keypress", function(c) {
             if (c.keyCode == 13) {
                 a.doBlur();
                 return KJE.Dropper.stopBubble(c)
             }
         }, false)
     } else {
         b.attachEvent("onchange", function(c) {
             a.doBlur(c)
         });
         b.attachEvent("onfocus", function(c) {
             a.doFocus(c)
         });
         b.attachEvent("onkeypress", function(c) {
             if (c.keyCode == 13) {
                 a.doBlur();
                 return KJE.Dropper.stopBubble(c)
             }
         })
     }
 };
 KJE.InputItem.prototype.doFocus = function() {
     var a = KJE;
     switch (this._inputType) {
         case a.TypeRadio:
         case a.TypeCheckbox:
         case a.TypeDropBox:
         case a.TypeLabel:
             break;
         case a.TypeDate:
         case a.TypeString:
         case a.TypeNumber:
             this._inputField.select();
             if (this._inputField.value == this.getName()) {
                 this._inputField.value = ""
             }
     }
 };
 KJE.InputItem.prototype.doBlur = function() {
     var b = KJE;
     var c = this;
     switch (c._inputType) {
         case b.TypeRadio:
         case b.TypeCheckbox:
             b.dataChanged();
             break;
         case b.TypeDropBox:
             c._InComplete = false;
             var a = c._inputField.selectedIndex;
             if (a == 0 && c.bFirstNotValid) {
                 c._InComplete = true
             }
             c.setSliderPosition(c._inputField.selectedIndex);
             b.dataChanged();
             break;
         case b.TypeDate:
             c.setTypedDate();
             break;
         case b.TypeString:
             c.setTypedString();
             break;
         case b.TypeNumber:
             c.setTypedValue()
     }
 };
 KJE.InputItem.prototype.doClick = function(b, a) {
     this.setMouseValue(b, a)
 };
 KJE.InputItem.prototype.doMouseUp = function(c, a) {
     var b = this;
     b._line.className = "KJELine";
     b._knob.className = b._knob.sClassNormal;
     b._mouseDown = false
 };
 KJE.InputItem.prototype.doMouseOut = function(g, f) {
     var b = this;
     var c = window.event;
     if (b._inputField.disabled) {
         return
     }
     if (b._mouseDown) {
         if (!g) {
             var g = c
         }
         var d = c ? g.srcElement : g.target;
         if (d.bMouseoutignore) {
             return
         }
         var a = (g.relatedTarget) ? g.relatedTarget : g.toElement;
         while (a != d && a.nodeName != "BODY") {
             a = a.parentNode
         }
         if (d != a) {
             b.doMouseUp()
         }
     }
 };
 KJE.InputItem.prototype.doMouseDown = function(c, b) {
     var a = this;
     if (a._inputField.disabled) {
         return
     }
     a._line.className = "KJELine active";
     if (!KJE.IE7and8) {
         a._knob.className = a._knob.sClassActive
     }
     a._mouseDown = true;
     if (c) {
         a.setMouseValue(c, b)
     }
 };
 KJE.InputItem.prototype.doMouseMove = function(c, b) {
     var a = this;
     if (a._mouseDown) {
         a.setMouseValue(c, b)
     }
 };
 KJE.InputItem.prototype.setRangeValue = function(a) {
     v = this._line.value;
     this.setChangeValue(v / 100)
 };
 KJE.InputItem.prototype.setMouseValue = function(h, g) {
     var d = this;
     var a = KJE.getMouseCoord(h, d._slider, g);
     if (a.x >= 0) {
         var c = d._posAdjust;
         var f = d._slider.offsetWidth;
         var b = (a.x - c) / (f - c);
         this.setChangeValue(b)
     }
 };
 KJE.InputItem.prototype.setChangeValue = function(b) {
     var c = this;
     var e = c._minimum;
     var f = c._maximum;
     var d = c._oScale;
     if (d) {
         b = KJE.s_Translate(b * 100, d._Min, d._Mid1, d._Mid2, d._Max, d._stepMin, d._stepMid, d._stepMax)
     } else {
         var a = c._increment;
         b = b * c._range + e;
         b = (a == 1 ? Math.round(b) : (Math.round(b / a) * a))
     }
     c._InComplete = false;
     c.setValue((b > f ? f : (b < e ? e : b)), false, true)
 };
 KJE.InputItem.prototype.doIncrement = function(c) {
     var b = this;
     var d = b._minimum;
     var e = b._maximum;
     if (e < 20) {
         iIncrement = 0.5
     }
     if (e < 100) {
         iIncrement = 1
     } else {
         if (e < 1000) {
             iIncrement = 10
         } else {
             if (e < 10000) {
                 iIncrement = 100
             } else {
                 iIncrement = 1000
             }
         }
     }
     var a = b.getValue() + (c ? 1 : -1) * iIncrement;
     b.setValue((a > e ? e : (a < d ? d : a)), false, true)
 };
 KJE.InputItem.prototype.validate = function() {
     var a = this;
     if (a.bValidate) {
         if (a._bError) {
             throw a._sError
         }
         return !(a.bIncompleteCheck && a._InComplete)
     } else {
         return true
     }
 };
 KJE.InputItem.prototype.setValue = function(p, b, j) {
     var r = KJE;
     var l = this;
     var k = l._inputField;
     var g = l._format;
     var f = l._container;
     var i = l._inputType;
     var a = false;
     if (i == r.TypeNone) {
         l._value = p;
         l._bError = false;
         return
     } else {
         if (i == r.TypeDate) {
             var o = new Date();
             try {
                 var c = new Array();
                 if (p.indexOf("/") > 0) {
                     c = p.split("/");
                     c[0] = Math.round(c[0]);
                     c[1] = Math.round(c[1]);
                     c[2] = Math.round(c[2])
                 } else {
                     c[0] = Math.round(p.substring(0, 2));
                     c[1] = Math.round(p.substring(2, 4));
                     c[2] = Math.round(p.substring(4))
                 }
                 if (c[2] < 100) {
                     c[2] += 2000
                 }
                 if (c[2] + c[1] + c[0] > 0) {
                     o = new Date(c[2], c[0] - 1, c[1])
                 } else {
                     a = true
                 }
             } catch (m) {
                 a = true
             }
             if (a) {
                 l._sError = r.getKJEReplaced(r.MSG_INVALID_DATE, l._sLabel);
                 l._value = null
             } else {
                 l._value = o;
                 k.value = r.dateFormat(o)
             }
         } else {
             if (i == r.TypeString) {
                 k.value = p
             } else {
                 if (i == r.TypeDropBox) {
                     k.selectedIndex = Math.round(p);
                     l.setSliderPosition(p)
                 } else {
                     if (i == r.TypeLabel) {
                         k.innerHTML = p
                     } else {
                         if (i == r.TypeCheckbox) {
                             k.checked = p
                         } else {
                             if (l.bValidate) {
                                 if (p > l._maximum) {
                                     l._sError = r.getKJEReplaced(this.MSG_EXCEEDS_LIMIT_OF_RANGE ? this.MSG_EXCEEDS_LIMIT_OF_RANGE : r.MSG_EXCEEDS_LIMIT_OF_RANGE, l._sLabel, r.format[g]((r.FMT_PERCENT == g ? l._maximum / 100 : l._maximum), l._decimals, l._iPadding));
                                     a = true
                                 } else {
                                     if (p < l._minimum) {
                                         l._sError = r.getKJEReplaced(this.MSG_UNDER_LIMIT_OF_RANGE ? this.MSG_UNDER_LIMIT_OF_RANGE : r.MSG_UNDER_LIMIT_OF_RANGE, l._sLabel, r.format[g]((r.FMT_PERCENT == g ? l._minimum / 100 : l._minimum), l._decimals, l._iPadding));
                                         a = true
                                     }
                                 }
                             }
                             var q = l._value = r.round(p, l._decimals);
                             var h = "";
                             if (r.deviceUseNumberType && (g == r.FMT_DOLLARS || g == r.FMT_PERCENT)) {
                                 h = r.nbr(q, l._decimals, "", "", true, false)
                             } else {
                                 h = r.format[g]((g == r.FMT_PERCENT ? q / 100 : q), l._decimals, l._iPadding)
                             }
                             k.value = r.replace("&nbsp;", " ", h);
                             l.setSliderPosition(q)
                         }
                     }
                 }
             }
         }
     }
     l._bError = a;
     if (a) {
         f.style.backgroundColor = r.ErrorBackground
     } else {
         f.style.backgroundColor = f.backgroundColor
     }
     if (!b) {
         r.dataChanged(j)
     }
 };
 KJE.InputItem.prototype.setSliderPosition = function(a) {
     var f = this;
     if (f.bSlider) {
         var e = f._slider.width;
         if (e && (a || a == 0)) {
             var g = f._oScale;
             var d = f._posAdjust;
             var b = 0;
             if (g) {
                 b = KJE.s_Untranslate(a, g._Min, g._Mid1, g._Mid2, g._Max) / 100
             } else {
                 var h = f._maximum;
                 var c = f._minimum;
                 b = ((a > h ? h : (a < c ? c : a)) - c) / f._range
             }
             if (KJE.bNativeSlider) {
                 f._line.value = b * 100
             } else {
                 f._knob.style.left = (((e - d) * b) + d / 2) + "px"
             }
         }
     }
 };
 KJE.InputItem.prototype.setTypedString = function(c) {
     var b = KJE.replace;
     var a = this;
     a.setValue(b("<", "", b(">", "", b("(", "", b(")", "", a._inputField.value)))), c)
 };
 KJE.InputItem.prototype.setTypedDate = function(f) {
     var a = KJE;
     var c = this;
     var e = c._inputField.value;
     var b = e;
     c._InComplete = false;
     if (e == "TODAY") {
         b = a.dateFormat(new Date())
     } else {
         if (e == "NEXT_MONTH") {
             var g = new Date();
             g.setMonth(g.getMonth() + 1);
             b = a.dateFormat(g)
         } else {
             if (b.substr(10, 1) == "T") {
                 b = b.substr(5, 2) + "/" + b.substr(8, 2) + "/" + b.substr(0, 4)
             }
             b = a.stripDate(b);
             if (b == "" || b == c._sLabel) {
                 c._inputField.value = c.bNoLabel ? c._sLabel : "";
                 c._InComplete = true;
                 c._bError = false;
                 c._container.style.backgroundColor = a.IncompleteBackground;
                 if (!f) {
                     a.dataChanged()
                 }
                 c._value = null;
                 return
             }
         }
     }
     c.setValue(b, f)
 };
 KJE.InputItem.prototype.setTypedValue = function(e) {
     var a = KJE;
     var c = this;
     c._InComplete = false;
     var d = c._inputField.value;
     if (d == "" || d == c._sLabel) {
         c.setSliderPosition(c._minimum);
         c._inputField.value = c.bNoLabel ? c._sLabel : "";
         c._InComplete = true;
         c._bError = false;
         c._container.style.backgroundColor = a.IncompleteBackground;
         if (!e) {
             a.dataChanged()
         }
     } else {
         var b = a.round(parseFloat(a.strip(d)), c._decimals);
         c.bSetRange = false;
         c.setValue(b, e)
     }
 };
 KJE.InputItem.prototype.getSecondValue = function() {
     var a = this;
     return a.getV(a._inputTypeAdditional, a._Additional)
 };
 KJE.InputItem.prototype.getValue = function() {
     var a = this;
     return a._value = a.getV(a._inputType, a._inputField, a._format)
 };
 KJE.InputItem.prototype.setText = function(a) {
     var b = this;
     return b.setT(b._inputType, b._inputField, a)
 };
 KJE.InputItem.prototype.setSecondText = function(a) {
     var b = this;
     return b.setT(b._inputTypeAdditional, b._Additional, a)
 };
 KJE.InputItem.prototype.getSecondFormatted = function() {
     var a = this;
     return a.getF(a._inputTypeAdditional, a._Additional)
 };
 KJE.InputItem.prototype.getFormatted = function() {
     var a = this;
     return (a._InComplete ? KJE.sIncomplete : a.getF(a._inputType, a._inputField))
 };
 KJE.InputItem.prototype.getF = function(g, f) {
     var b = KJE;
     var e = "";
     var d = this;
     var c = d._value;
     var a = d._format;
     switch (g) {
         case b.TypeRadio:
         case b.TypeCheckbox:
             e = f.value;
             break;
         case b.TypeDropBox:
             e = (f[f.selectedIndex].text);
             break;
         case b.TypeLabel:
             e = f.innerHTML;
             break;
         case b.TypeDate:
             e = b.dateFormat(c);
             break;
         case b.TypeString:
             e = f.value;
             break;
         case b.TypeNumber:
             e = b.format[a]((a == b.FMT_PERCENT ? c / 100 : c), d._decimals, d._iPadding);
             break;
         case b.TypeNone:
             e = c
     }
     return e
 };
 KJE.InputItem.prototype.getV = function(f, e, b) {
     var a = KJE;
     var c = 0;
     var d = this;
     switch (f) {
         case a.TypeRadio:
         case a.TypeCheckbox:
             c = e.checked;
             break;
         case a.TypeDropBox:
             c = e[e.selectedIndex].value;
             if (b != a.FMT_STRING) {
                 c = Math.round(c)
             }
             break;
         case a.TypeLabel:
             c = e.innerHTML;
             break;
         case a.TypeDate:
             c = d._value;
             break;
         case a.TypeString:
             c = e.value;
             break;
         case a.TypeNumber:
             c = a.round(parseFloat(a.strip(e.value)), d._decimals);
             break;
         case a.TypeNone:
             c = d._value
     }
     return c
 };
 KJE.InputItem.prototype.setT = function(e, d, b) {
     var a = KJE;
     var c = this;
     switch (e) {
         case a.TypeRadio:
         case a.TypeCheckbox:
             break;
         case a.TypeDropBox:
             break;
         case a.TypeLabel:
             d.innerHTML = b;
             break;
         case a.TypeDate:
             d.value = b;
             c.setTypedDate(true);
             break;
         case a.TypeString:
             d.value = b;
             c.setTypedString(true);
             break;
         case a.TypeNumber:
             d.value = a.replace("&nbsp;", " ", b);
             c.setTypedValue(true);
             break
     }
 };
 KJE.InputItem.prototype.shortDesc = function() {
     return this._sLabel + KJE.Colon + " " + this.getFormatted()
 };
 KJE.InputItem.prototype.newWidth = function() {
     var j = KJE;
     var e = this;
     var d = e._inputField;
     var a = e._Additional;
     if (e._inputType == j.TypeNone) {
         return
     }
     var c = e.SliderX();
     if (d.resize) {
         var b = Math.max(c - d.indent, 0);
         if (e._iInputFieldDiv) {
             e._iInputFieldDiv.style.width = b + "px";
             d.style.width = b + KJE.iDPDropBoxModernPad + "px"
         } else {
             d.style.width = b + "px"
         }
     }
     if (a) {
         if (a.indent && e._inputTypeAdditional != j.TypeRadio) {
             var b = c + 10 - a.indent;
             if (e._AdditionalDiv) {
                 e._AdditionalDiv.style.width = b + "px";
                 a.style.width = b + KJE.iDPDropBoxModernPad + "px"
             } else {
                 a.style.width = b + "px"
             }
         }
     }
     var f = e._slider;
     if (f && !KJE.bPlusMinus) {
         this.showSlider(f)
     }
     var h = e._label2;
     if (h) {
         var g = h.offsetHeight;
         if (g + 6 > j.iDPRowHeight) {
             e._container.style.height = g + (j.iDPInputHeight / 4) + 2 + "px"
         }
     }
 };
 KJE.InputItem.prototype.SliderX = function() {
     return KJE.CalculatorWidth - KJE.iDPInputPad * 2 - (this.SliderWidthAdjust ? this.SliderWidthAdjust : KJE.SliderWidthAdjust)
 };
 KJE.InputItem.prototype.showSlider = function(e) {
     var a = KJE;
     var d = this;
     var c = d.SliderX();
     if (e.indent) {
         if (c - a.InputTotalLength < a.SliderMinLength) {
             e.style.display = "none";
             e.labels.style.display = "none"
         } else {
             e.style.display = "inline-block";
             e.labels.style.display = "inline-block";
             var b = c - e.indent;
             e.width = b;
             e.style.width = b + "px";
             d._line.style.width = b - a.SliderKnobSize + "px";
             e.labels.style.width = c - e.labels.indent + "px";
             d.setSliderPosition(d._inputType == a.TypeDropBox ? d._inputField.selectedIndex : d._value)
         }
     }
 };
 KJE.InputItem.prototype.hide = function() {
     var a = this._container;
     if (a) {
         a.style.display = "none"
     }
 };
 KJE.InputItem.prototype.show = function() {
     var a = this._container;
     if (a) {
         a.style.display = "block"
     }
 };
 KJE.InputItem.prototype.setLabelSlider = function(h, g, b, j) {
     var k = ["left", "center", "center", "right"];
     var e = document.createElement("div");
     e.className = "KJEScale";
     e.setAttribute("aria-hidden", "true");
     e.className = "KJEScale";
     e.unselectable = "on";
     e.style.position = "absolute";
     e.style.height = h + "px";
     e.style.cursor = "pointer";
     e.style.top = (g - 18) + "px";
     e.style.left = b + "px";
     this._container.appendChild(e);
     var a = KJE.SliderLabelVertAdj;
     if (j) {
         var d = (j.length > 5 ? 5 : j.length) - 1;
         for (var c = 0; c <= d; c++) {
             var f = document.createElement("div");
             f.className = "KJEScale";
             f.unselectable = "on";
             f.style.position = "absolute";
             f.style.height = h + "px";
             f.style.textAlign = k[c == d ? 3 : c];
             f.style.cursor = "pointer";
             f.style.top = (0 + a) + "px";
             if (d == 4) {
                 switch (c) {
                     case 0:
                         f.style.width = "100%";
                         f.style.left = 0;
                         break;
                     case 1:
                         f.style.width = "55%";
                         f.style.left = 0;
                         break;
                     case 2:
                         f.style.width = "100%";
                         break;
                     case 3:
                         f.style.width = "75%";
                         f.style.left = 0;
                         break;
                     case 4:
                         f.style.width = "100%";
                         f.style.right = 0;
                         break
                 }
             } else {
                 if (d < 2) {
                     f.style.width = "100%"
                 } else {
                     f.style.width = (d > 2 ? 66.66 : 100) + "%"
                 }
                 if (c > 1) {
                     f.style.right = 0
                 } else {
                     f.style.left = 0
                 }
             }
             f.innerHTML = j[c];
             e.appendChild(f)
         }
     }
     return e
 };
 KJE.InputItem.prototype.disable = function(a, b) {
     var d = this;
     var e = d._inputType;
     var c = d._label2;
     var f = d._label;
     if (e == KJE.TypeNone) {
         return false
     }
     d.bValidate = false;
     d._container.style.backgroundColor = d._container.backgroundColor;
     d._InComplete = false;
     if (e == KJE.TypeCheckbox) {
         if (c) {
             c.className = "KJETrailingLabelDisable"
         }
     }
     if (f && !a) {
         f.className = d.className + " KJETrailingLabelDisable"
     }
     if (d.bSlider) {
         d._slider.labels.style.display = "none";
         d._slider.style.display = "none"
     }
     if (d._inputField && b) {
         d._inputField.style.display = "none"
     }
     return d._inputField.disabled = true
 };
 KJE.InputItem.prototype.enable = function() {
     var a = KJE;
     var c = this;
     var d = c._inputType;
     var b = c._label2;
     var e = c._label;
     if (d == a.TypeNone) {
         return false
     }
     c.bValidate = true;
     if (d == a.TypeCheckbox) {
         if (b) {
             b.className = "KJETrailingLabel"
         }
     }
     if (e) {
         e.className = this.className
     }
     if (c.bSlider) {
         c.showSlider(c._slider, null)
     }
     if (c._inputField) {
         c._inputField.style.display = "block"
     }
     if (d == a.TypeDate) {
         c.setTypedDate(true)
     }
     if (d == a.TypeNumber) {
         c.setTypedValue(true)
     }
     return c._inputField.disabled = false
 };
 KJE.InputItem.prototype.getName = function() {
     return this._sLabel
 };
 KJE.shortDesc = function() {
     var b = "";
     for (var a = 0; a < arguments.length; a++) {
         if (arguments[a].shortDesc) {
             b += arguments[a].shortDesc() + (a == arguments.length - 1 ? "" : ", ")
         } else {
             b += arguments[a]
         }
     }
     return b
 };
 KJE.stripDate = function(a) {
     if (!a) {
         return ""
     }
     var c = a.length;
     var d = "";
     while (c > 0) {
         var b = a.charAt(c - 1);
         switch (b) {
             case "0":
             case "1":
             case "2":
             case "3":
             case "4":
             case "5":
             case "6":
             case "7":
             case "8":
             case "9":
             case "/":
                 d = b + d;
                 break;
             case "-":
                 d = b + "/";
                 break;
             default:
                 break
         }
         c--
     }
     return d
 };
 KJE.strip = function(a) {
     if (!a) {
         return "0"
     }
     var c = a.length;
     var e = "";
     var f = 0;
     var g = 0;
     while (c > 0) {
         var b = a.charAt(c - 1);
         switch (b) {
             case "0":
             case "1":
             case "2":
             case "3":
             case "4":
             case "5":
             case "6":
             case "7":
             case "8":
             case "9":
                 e = b + e;
                 break;
             case ".":
                 if (!f) {
                     e = b + e
                 }
                 f++;
                 break;
             case "-":
             case "(":
                 g++;
                 break;
             default:
                 break
         }
         c--
     }
     if (e == "") {
         return "0"
     }
     return (g ? "-" + e : e)
 };
 KJE.DataPointTimeOut = -1;
 KJE.DataPointObject = null;
 KJE.DataPointShow = function(f, c, b, g, h, d) {
     var j = KJE;
     if (!d) {
         d = 2500
     }
     j.DataPoint.style.display = "block";
     var i = j.getScreenCoord(b, g, h);
     var a = j.DataPointOffset();
     j.DataPoint.style.left = (i.x + a.x - 47 + j.DataPointX) + "px";
     j.DataPoint.style.top = (i.y + a.y - 5 + j.DataPointY) + "px";
     j.DataPoint.innerHTML = c;
     if (j.DataPointTimeOut) {
         clearTimeout(j.DataPointTimeOut)
     }
     j.DataPointTimeOut = setTimeout(j.DataPointHide, d);
     j.DataPointObject = h
 };
 KJE.DataPointHide = function() {
     var a = KJE;
     a.DataPoint.style.display = "none";
     if (a.DataPointTimeOut) {
         clearTimeout(a.DataPointTimeOut)
     }
     a.DataPointTimeOut = -1;
     a.DataPointObject = null
 };
 KJE.DataPointOffset = function() {
     var a = KJE.DataPoint.offsetParent;
     if (a) {
         var b = KJE.getScreenCoord(0, 0, a);
         return {
             x: -b.x,
             y: -b.y
         }
     } else {
         return {
             x: 0,
             y: 0
         }
     }
 };
 KJE.DefnPointTimeOut = -1;
 KJE.DefnPoint = null;
 KJE.DefnPointX = 5;
 KJE.DefnPointY = 19;
 KJE.DefnPointShow = function(i, b, g, f, d, c) {
     var j = KJE;
     if (j.DefnPointTimeOut) {
         clearTimeout(j.DefnPointTimeOut)
     }
     if (j.DefnPoint) {
         j.DefnPointHide()
     }
     if (!d) {
         d = 2500
     }
     j.DefnPoint = i;
     i.style.display = "block";
     var h = j.getScreenCoord(b, g, f);
     var a = j.DataPointOffset();
     i.style.left = (j.DefnPointX) + "px";
     i.style.top = (j.DefnPointY) + "px";
     i.setAttribute("aria-hidden", "false");
     j.DefnPointTimeOut = setTimeout(j.DefnPointHide, d);
     if (c) {
         try {
             document.getElementById("KJE-POCLOSE-" + c).focus()
         } catch (e) {}
     }
 };
 KJE.DefnPointHide = function(c) {
     var a = KJE;

     a.DefnPoint.style.display = "none";
     a.DefnPoint.setAttribute("aria-hidden", "true");
     if (a.DefnPointTimeOut) {
         clearTimeout(a.DefnPointTimeOut)
     }
     a.DefnPointTimeOut = -1;
     a.DefnPoint = null;
     if (c) {
         try {
             //   document.getElementById("KJE-" + c).focus()
         } catch (b) {}
     }
 };
 KJE.sDropperTitle = '<div class=KJEToggleIcon>**ICON**</div><div class=KJEToggleTitle>**TITLE_TEXT**</div>';
 KJE.DropperDefined = function(a) {
     return document.getElementById("KJE-P-" + a)
 };
 KJE.DivDefined = function(a) {
     return document.getElementById("KJE-D-" + a)
 };
 KJE.Dropper = function(d, b, n, l, f, e) {
     var g = this;
     var o = KJE;
     o.iDropperCount += 1;
     var m = o.parameters.get("DROPPER_OPEN" + Math.floor(o.droppers.length + 1), b);
     if (o.IE7and8) {
         b = true
     } else {
         b = m
     }
     g.getOpen = (n ? n : false);
     g.getClosed = (l ? l : false);
     var j = g._idDropper = document.getElementById("KJE-P-" + d);
     j.setAttribute("role", "button");
     if (e) {
         j.style.display = "none"
     }
     var h = g._idDrop = document.getElementById("KJE-D-" + d);
     var a = g._idDroppee = document.getElementById("KJE-E-" + d);
     if (h) {
         h.className = ("KJEDrop")
     }
     if (a) {
         a.className = ("KJEDroppee")
     }
     j.className = "KJEDropper";
     j.tabIndex = "0";
     if (o.IE7and8) {
         j.style.paddingRight = "0"
     }
     a.style.display = "block";
     a.style.width = "100%";
     g._iHeight = a.offsetHeight;
     if (!g._iHeight || o.iDPDroppeeForceSize) {
         g._iHeight = 0;
         var k = a.getElementsByTagName("div");
         for (var c = 0; c < k.length; c++) {
             if (k[c].className == "KJEInputContainer") {
                 g._iHeight += o.iDPRowHeight
             }
         }
         g._iHeight += 10
     }
     g.InCalculator = (f ? false : true);
     g._sInnerHTML = j.innerHTML;
     g._sName = d;
     g.sExtraClass = (o.DropperColors ? (o.DropperColors.length >= o.iDropperCount ? o.DropperColors[o.iDropperCount - 1] : false) : false);
     g.AddEvents();
     g.show(b ? true : false);
     if (!b) {
         a.style.height = "0px";
         a.style.display = "none";
         a.style.visibility = "hidden";
         j.setAttribute(o.sExpand, "false")
     } else {
         a.style.height = g._iHeight + "px";
         a.style.overflow = "visible";
         j.setAttribute(o.sExpand, "true")
     }
     if (o.IE7and8 && !m) {
         setTimeout(function() {
             KJE.inCommandTask(false);
             g.toggle()
         }, 1001)
     }
 };
 KJE.Dropper.prototype.AddEvents = function() {
     var a = this;
     var b = a._idDropper;
     if (b.addEventListener) {
         b.addEventListener("click", function() {
             a.toggle(a)
         }, false);
         b.addEventListener("keypress", function(c) {
             if (c.keyCode == 32 || c.keyCode == 13) {
                 return KJE.Dropper.stopBubble(c)
             }
         }, false);
         b.addEventListener("keydown", function(c) {
             if (c.keyCode == 32 || c.keyCode == 13) {
                 a.toggle();
                 return KJE.Dropper.stopBubble(c)
             }
         }, false)
     } else {
         b.attachEvent("onclick", function() {
             a.toggle(a)
         });
         b.attachEvent("onkeypress", function(c) {
             if (c.keyCode == 32 || c.keyCode == 13) {
                 return KJE.Dropper.stopBubble(c)
             }
         });
         b.attachEvent("onkeydown", function(c) {
             if (c.keyCode == 32 || c.keyCode == 13) {
                 a.toggle();
                 return KJE.Dropper.stopBubble(c)
             }
         })
     }
 };
 KJE.Dropper.prototype.setHidden = function(b) {
     var a = this;
     a._idDrop.style.display = "none";
     a._idDroppee.style.display = "none"
 };
 KJE.Dropper.prototype.setShown = function(b) {
     var a = this;
     a._idDrop.style.display = "block";
     a._idDroppee.style.display = "block"
 };
 KJE.Dropper.prototype.setBackground = function(b) {
     var a = this;
     if (a._idDrop) {
         a._idDrop.style.backgroundColor = b
     }
     a._idDroppee.style.backgroundColor = b
 };
 KJE.Dropper.prototype.setText = function(b) {
     var c = this;
     var d = c.getOpen;
     var a = c.getClosed;
     var e = c._bShow;
     if (b) {} else {
         if (e && d) {
             if ("function" == typeof d) {
                 b = d()
             } else {
                 b = d
             }
         } else {
             if (!e && a) {
                 if ("function" == typeof a) {
                     b = a()
                 } else {
                     b = a
                 }
             } else {
                 b = c._sInnerHTML
             }
         }
     }
     c._idDropper.innerHTML = KJE.setToggleTitleText(b, c, KJE)
 };
 KJE.Dropper.prototype.show = function(a) {
     var b = this;
     b._bShow = a;
     b.setText()
 };
 KJE.Dropper.prototype.toggle = function() {
     if (KJE.inCommandTask(true)) {
         return
     }
     var b = this;
     var c = b._idDroppee;
     var a = (KJE.deviceNoTransition || KJE.IE7and8 ? 0 : 8);
     c.style.overflow = "hidden";
     if (b._bShow) {
         if (KJE.IE7and8) {
             c.style.display = "none"
         } else {
             c.style.height = 0 + "px"
         }
         b._bShow = false;
         b.show();
         KJE.Calculator.style.height = KJE.Main.offsetHeight + "px";
         setTimeout(function() {
             KJE.inCommandTask(false);
             c.style.visibility = "hidden";
             c.style.display = "none";
             b._idDropper.setAttribute(KJE.sExpand, "false")
         }, 100)
     } else {
         c.style.display = "block";
         c.style.visibility = "visible";
         b._count = 0;
         KJE._iInterval = setInterval(function() {
             b.open(c.style, b._iHeight, a)
         }, 25)
     }
 };
 KJE.Dropper.stopBubble = function(a) {
     a.cancelBubble = true;
     a.returnValue = false;
     if (a.stopPropagation) {
         a.stopPropagation()
     }
     if (a.preventDefault) {
         a.preventDefault()
     }
     return false
 };
 KJE.Dropper.prototype.open = function(d, f, b) {
     var c = this;
     var a = c._count;
     if (a >= b) {
         clearInterval(KJE._iInterval);
         if (!KJE.IE7and8) {
             d.height = f + "px"
         }
         KJE.Calculator.style.height = KJE.Main.offsetHeight + "px";
         setTimeout(function() {
             KJE.inCommandTask(false);
             c.show(true);
             c._idDropper.setAttribute(KJE.sExpand, "true");
             c._idDroppee.style.overflow = "visible"
         }, 100);
         return
     } else {
         if (a >= b - 2) {
             a -= 0.5
         }
     }
     a++;
     d.height = f * (a / b) + "px";
     KJE.Calculator.style.height = KJE.Main.offsetHeight + "px";
     c._count = a
 };
 KJE.addDiv = function(c, b, d) {
     var a = document.getElementById("KJE-D-" + c);
     if (a) {
         a.className = ("KJEInputDiv" + (d ? " " + d : ""));
         if (b) {
             a.style.backgroundColor = b
         }
     }
     return a
 };
 KJE.addDropper = function(b, a) {
     if (a) {
         b.setBackground(a)
     }
     KJE.droppers.set(b._sName, b);
     return b
 };
 KJE.setToggleTitleText = function(e, h, d, g) {
     if (!e) {
         e = ""
     }
     var f = e.indexOf("<");
     var k = e.indexOf("|");
     if (f > 0 && k > 0) {
         f = (f > k ? k : f)
     } else {
         f = (f < k ? k : f)
     }
     var i = (f > 0 ? e.substring(0, f) : e).trim();
     if (i.charAt(i.length - 1) == ".") {
         i = i.slice(0, -1)
     }
     if (i.charAt(i.length - 1) != KJE.Colon.trim()) {
         i += KJE.Colon
     }
     var l = "";
     var b = "";
     var n = "";
     if (h) {
         l = h._bShow ? d.sToggleAltTextOpen : d.sToggleAltTextClose;
         b = h._bShow ? d.sToggleClose : d.sToggleOpen;
         n = h._bShow ? d.sExpanded : d.sCollapse
     }
     var m = KJE.sToggleTitle;
     var c = "";
     var j = e.indexOf("|");
     var a = (g || !h ? "" : d.sToggleIcon);
     if (g || !h) {
         b = "";
         l = ""
     }
     if (j > -1) {
         m = KJE.sToggleTitle2;
         c = e.substring(j + 1);
         e = e.substring(0, j)
     } else {
         if (!h || g) {
             m = KJE.sToggleTitle1
         }
     }
     if (h != null) {
         if (h.sExtraClass) {
             m = KJE.replace("**EXTRA_CLASS**", h.sExtraClass, m)
         }
     }
     return m.replace("**IMG_TEXT**", l).replace("**SUMMARY_TEXT**", i).replace("**TITLE_TEXT**", e).replace("**TITLE_TEXT2**", c).replace("**ICON**", b).replace("**IMG**", a).replace("**TITLE_CLASS**", d.sToggleTitleClass).replace("**TITLE_CLASS**", d.sToggleTitleClass).replace("**EXPANDED**", n)
 };
 KJE.setDropBox = function(c, b) {
     b = b + "";
     for (var a = 0; a < c.options.length; a++) {
         if (c.options[a].value == b) {
             c.options[a].selected = true;
             break
         }
     }
     return a
 };
 KJE.getDropBox = function(f, g, d, h, b) {
     b = (b ? ' class="' + b + '" ' : "");
     h = (h ? h : d);
     var e = h.length;
     var a = d.length;
     var k = "<select name=" + f + " id=KJE-" + f + b + ">";
     for (var c = 0; c < a; c++) {
         var j = (d[c] == g ? " selected='selected' " : "");
         k += "<option value='" + d[c] + "' " + j + ">" + (c >= e ? d[c] : h[c])
     }
     k += "</select>";
     if (KJE.InputModern) {
         k = "<div id=KJE-" + f + b + "Div >" + k + "</div>"
     }
     return k
 };
 KJE.getTermChoice = function(k, j, e, g, b, l, f, d, m) {
     var p = new Array();
     var o = new Array();
     l = (l ? l : "");
     f = (f ? f : false);
     m = (m ? m : 1);
     var a = 0;
     var h = KJE.parameters.get("TERM_SHOW_ADDITIONAL", 7);
     for (var c = m; c <= g; c++) {
         if ((e && c <= b) || c % 5 == 0 || c == h) {
             if ((h == 0 && (c == 5 || c == 25 || c == 35)) == false) {
                 p[a] = c + " " + (c == 1 ? KJE.MSG_YEAR_LBL : KJE.MSG_YEARS_LBL) + (c > b ? l : "");
                 o[a] = c;
                 a++
             }
         }
     }
     if (d) {
         return KJE.getDropBox(k, j, o, p, f)
     } else {
         return {
             d: p,
             v: o
         }
     }
 };
 KJE.getMortgageTermChoice = function(b, c, d) {
     var a = KJE;
     return a.getTermChoice(b, c, a.parameters.get("MORTGAGE_TERM_MAX", a.Default.MortgageShowAll), a.parameters.get("MORTGAGE_TERM_MAX", a.Default.MortgageTermMax), a.parameters.get("MORTGAGE_SHOW_MAX", a.Default.MortgageShowAllMax), "", false, d, a.parameters.get("MORTGAGE_TERM_MIN", a.Default.MortgageTermMin))
 };
 KJE.getMortgageTermDrop = function(a, b) {
     return KJE.getMortgageTermChoice(a, b, true)
 };
 KJE.getMortgageTermList = function() {
     return KJE.getMortgageTermChoice("", 0, false)
 };
 KJE.iGraphFixedWidth = 0;
 KJE.gScaleLabel = ["", "Thousands of ", "Millions of ", "Billions of "];
 KJE.gScaleLabelMax = [0, 100000, 100000000, 100000000000];
 KJE.gScaleLabelFactor = [1, 1000, 1000000, 1000000000];
 KJE.gFont = ["Arial", "Arial", "Arial", "Arial", "Arial", "Arial"];
 KJE.gFontStyle = ["bold", "bold", "", "", "bold", ""];
 KJE.gFontSize = [13, 10, 10, 10, 10, 7];
 KJE.g = new Object();
 KJE.g.sToggleAltTextClose = "press spacebar to show graph";
 KJE.g.sToggleAltTextOpen = "press spacebar to hide graph";
 KJE.g.sNewGraphPleaseComplete = "please complete inputs to view graph";
 KJE.g.sToggleTitleClass = "KJEGraphTitle";
 KJE.g.sToggleIcon = "KJEGraphIcon";
 KJE.g.sToggleOpen = "[+]";
 KJE.g.sToggleClose = "[-]";
 KJE.g.sExpanded = "";
 KJE.g.sCollapse = "";
 KJE.g.sExpand = "aria-expanded";
 KJE.gHeight = 250;
 KJE.gHeightReport = 350;
 KJE.gWidthMax = 850;
 KJE.gLegendMin = 400;
 KJE.gColorBackground = "#FFFFFF";
 KJE.gColorForeground = "#000000";
 KJE.gColorGrid = "#BBBBBB";
 KJE.gColorGridBackground1 = "#FFFFFF";
 KJE.gColorGridBackground2 = "#CCCCCC";
 KJE.gColorAxisLine = "#666666";
 KJE.gColorText = "#000000";
 KJE.gColorList = ["#000055", "#7B68EE", "#64A650", "#FFF200", "#5f007f", "#F15A22", "#B72467", "#6DC8BF", "#FF0000", "#ff00ff", "#ffff00", "#00ffff", "#7f007f", "#7f0000", "#007f7f", "#0000ff", "#00c8ff", "#60ffff", "#bfffbf", "#ffff90", "#a0c8ef"];
 KJE.gPleaseComplete = "";
 KJE.gWidthAdjust = 0;
 KJE.gPIE = 0;
 KJE.gCOLUMN = 1;
 KJE.gCATEGORIES = 2;
 KJE.gSTACKED = 3;
 KJE.gLINE = 4;
 KJE.gGetFontHeight = function(a) {
     return Math.ceil(a.measureText("m").width + 2)
 };
 KJE.gDarker = function(d, h) {
     if (d[0] == "#") {
         d = d.slice(1)
     }
     var c = parseInt(d, 16);
     var f = (c >> 16) * h;
     if (f > 255) {
         f = 255
     } else {
         if (f < 0) {
             f = 0
         }
     }
     var a = ((c >> 8) & 255) * h;
     if (a > 255) {
         a = 255
     } else {
         if (a < 0) {
             a = 0
         }
     }
     var e = (c & 255) * h;
     if (e > 255) {
         e = 255
     } else {
         if (e < 0) {
             e = 0
         }
     }
     return "rgb(" + Math.floor(f) + "," + Math.floor(a) + "," + Math.floor(e) + ")"
 };
 KJE.gTitle = new Object();
 KJE.gGraphLine = new Object();
 KJE.gAxis = new Object();
 KJE.gGraphColumn = new Object();
 KJE.gGraphPie = new Object();
 KJE.gTitle.HORIZONTAL = 0;
 KJE.gTitle.VERTICAL = 1;
 KJE.gLegend = new Object();
 KJE.gLegend.LEFT = 0;
 KJE.gLegend.RIGHT = 1;
 KJE.gLegend.TOP = 3;
 KJE.gLegend.BOTTOM = 4;
 KJE.gLegend.TOP_LEFT = 5;
 KJE.gLegend.TOP_RIGHT = 6;
 KJE.gLegend.BOTTOM_LEFT = 7;
 KJE.gLegend.BOTTOM_RIGHT = 8;
 KJE.gLegend.GRID_TOP_RIGHT = 9;
 KJE.gLegend.GRID_TOP_LEFT = 10;
 KJE.gLegend.GRID_BOTTOM_RIGHT = 11;
 KJE.gLegend.GRID_BOTTOM_LEFT = 12;
 KJE.gLegend.GRID_TOP = 13;
 KJE.gLegend.GRID_BOTTOM = 14;
 KJE.gLegend.GRID_RIGHT = 15;
 KJE.gLegend.GRID_LEFT = 16;
 KJE.gLegend.TOP_GRID_ALIGN = 17;
 KJE.gLegend.BANDED_LEGEND = 0;
 KJE.gLegend.DATA_SERIES_LEGEND = 1;
 KJE.gLegend.CATEGORY_LEGEND = 2;
 KJE.gLegend.ROUND_LEGEND = 0;
 KJE.gLegend.SQUARE_LEGEND = 1;
 KJE.gLegend._sSHADOW_COLOR = "#222222";
 KJE.gTITLE_FONT = 0;
 KJE.gBOLD_FONT = 1;
 KJE.gPLAIN_FONT = 2;
 KJE.gLEGEND_FONT = 3;
 KJE.gLEGEND_FONT_BOLD = 4;
 KJE.gLEGEND_FONT_TINY = 5;
 KJE.gSCALE = (KJE.VML ? 1 : 2);
 KJE.ggetFont = function(b) {
     var a = KJE;
     var c = a.gFontSize[b];
     if (a.gFontStyle.length <= b && b == a.gLEGEND_FONT_TINY) {
         b -= 3;
         c = a.gFontSize[b] - 3
     }
     if (a.gFontStyle.length <= b) {
         b -= 2;
         c = a.gFontSize[b]
     }
     return ((a.VML ? "" : a.gFontStyle[b] + " ") + Math.floor(a.gSCALE * c) + "pt " + a.gFont[b]).trim()
 };
 KJE.gBORDER_WIDTH = 10 * KJE.gSCALE;
 KJE.gLegend._iSIDE_BORDER_WIDTH = 10 * KJE.gSCALE;
 KJE.gLegend._iTOPBOTTOM_BORDER_WIDTH = 3 * KJE.gSCALE;
 KJE.gLegend._iBOX_SIDE_LENGTH = 12 * KJE.gSCALE;
 KJE.gLegend._iCIR_SIDE_LENGTH = 7 * KJE.gSCALE;
 KJE.gLegend._iBOX_TO_LABEL_SPACE = 10 * KJE.gSCALE;
 KJE.gLegend._sSHADOW_BLUR_X = 2 * KJE.gSCALE;
 KJE.gLegend._sSHADOW_BLUR_Y = 2 * KJE.gSCALE;
 KJE.gLegend._LINE_WIDTH = KJE.gSCALE;
 KJE.gLegend._LINE_SPACE = 7.5 * KJE.gSCALE;
 KJE.gLegend._PAD = KJE.gSCALE;
 KJE.gGraphPie._LINE_WIDTH = KJE.gSCALE;
 KJE.gGraphLine._CLICKABLE = 7 * KJE.gSCALE;
 KJE.gGraphLine._sSHADOW_BLUR = 0;
 KJE.gGraphLine._LINE_WIDTH = 3 * KJE.gSCALE;
 KJE.gGraphLine._sSHADOW_BLUR_X = 0;
 KJE.gGraphLine._sSHADOW_BLUR_Y = 0;
 KJE.gGraphColumn._LINE_WIDTH = KJE.gSCALE;
 KJE.giGridLineWidth = KJE.gSCALE;
 KJE.gAxis.TICK_LENGTH = 3 * KJE.gSCALE;
 KJE.gAxis.LABEL_SPACE_LENGTH = 5 * KJE.gSCALE;
 KJE.gAxis.LINE_WIDTH = KJE.gSCALE;
 KJE.gAxis.LEFT = 0;
 KJE.gAxis.RIGHT = 1;
 KJE.gAxis.TOP = 3;
 KJE.gAxis.BOTTOM = 4;
 KJE.gGraphColumn.LINE_NONE = 0;
 KJE.gGraphColumn.LINE_ON_FIRST_ONLY = 2;
 KJE.gGraphColumn.LINE_ON_ALL = 3;
 KJE.gGraphColumn._sSHADOW_COLOR = "#929292";
 KJE.gGraphColumn._sSHADOW_BLUR = 8;
 KJE.gGraphColumn._sSHADOW_BLUR_X = 3 * KJE.gSCALE;
 KJE.gGraphColumn._sSHADOW_BLUR_Y = 2 * KJE.gSCALE * -1;
 KJE.gGraphPie._LINE_JOIN = "round";
 KJE.gGraphPie._LINE_COLOR = "#000000";
 KJE.gGraphLine.AREA_NONE = 0;
 KJE.gGraphLine.AREA_ALL = 1;
 KJE.gGraphLine.AREA_FIRST_ONLY = 2;
 KJE.gGraphLine.AREA_SECOND_ONLY = 3;
 KJE.gGraphLine.AREA_BANDED = 4;
 KJE.gGraphLine._sSHADOW_COLOR = "#929292";
 KJE.sgvStr = function(a) {
     if (a == null) {
         return null
     }
     return a.replace(/%%/g, '"').replace(/@@/g, "|").replace(/\^\^/g, ",").replace(/!!/, "~")
 };
 KJE.spvStr = function(a) {
     if (a == null) {
         return null
     }
     if (a.replace) {
         return a.replace(/"/g, "%%").replace(/\|/g, "@@").replace(/,/g, "^^").replace(/~/g, "!!")
     } else {
         return a
     }
 };
 KJE.spvColor = function(a) {
     if (!a) {
         return "#000000"
     }
     return a
 };
 KJE.sgvColor = function(a) {
     if (!a) {
         return "#000000"
     }
     return a
 };
 KJE.sgv = function(b, a) {
     if (b == null) {
         return a
     } else {
         if (b == "null") {
             return a
         } else {
             if (b == " ") {
                 return a
             } else {
                 if (typeof(a) == "string") {
                     return KJE.sgvStr(b)
                 } else {
                     if (typeof(a) == "boolean") {
                         if (b == "") {
                             return a
                         }
                         return b.trim() == "true"
                     } else {
                         if (typeof(a) == "number") {
                             return parseFloat(b)
                         }
                     }
                 }
             }
         }
     }
 };
 KJE.sgvNumList = function(d) {
     if (d == null) {
         return null
     } else {
         if (d == "null") {
             return null
         } else {
             if (d.trim() == "") {
                 return null
             } else {
                 var b = d.split(",");
                 var a = KJE.FloatArray(b.length);
                 for (var c = 0; c < b.length; c++) {
                     a[c] = parseFloat(b[c])
                 }
             }
         }
     }
     return a
 };
 KJE.sgvStrList2 = function(d) {
     var a = [];
     if (d == null) {
         a = null
     } else {
         if (d == "null") {
             a = null
         } else {
             if (d.trim() == "") {
                 a = null
             } else {
                 var c = d.split("~");
                 for (var b = 0; b < c.length; b++) {
                     a[b] = KJE.sgvStrList(c[b])
                 }
             }
         }
     }
     return a
 };
 KJE.sgvStrList = function(d) {
     var a = [];
     if (d == null) {
         a = null
     } else {
         if (d == "null") {
             a = null
         } else {
             if (d.trim() == "") {
                 a = null
             } else {
                 var c = d.split(",");
                 for (var b = 0; b < c.length; b++) {
                     a[b] = KJE.sgvStr(c[b])
                 }
             }
         }
     }
     return a
 };
 KJE.spvStringList2 = function(d) {
     var a = KJE;
     if (d == null) {
         return "null"
     }
     var c = a.spvStringList(d[0]);
     for (var b = 1; b < d.length; b++) {
         c += "~" + a.spvStringList(d[b])
     }
     return c
 };
 KJE.spvStringList = function(d) {
     var a = KJE;
     if (d == null) {
         return "null"
     }
     var c = a.spvStr(d[0]);
     for (var b = 1; b < d.length; b++) {
         c += "," + a.spvStr(d[b])
     }
     return c
 };
 KJE.spvColorList = function(d) {
     var a = KJE;
     if (d == null) {
         return "null"
     }
     var c = a.spvStr(d[0]);
     for (var b = 1; b < d.length; b++) {
         c += "," + a.spvColor(d[b])
     }
     return c
 };
 KJE.spvFloatList = function(e, d) {
     var a = KJE;
     if (e == null) {
         return "null"
     }
     var c = "" + a.input(e[0], d);
     for (var b = 1; b < e.length; b++) {
         c += "," + a.input(e[b], d)
     }
     return c
 };
 KJE.gNewGraph = function(f, i, a, e, k, g, h, b) {
     var c = document.getElementById("KJE-C-" + i);
     if (c) {
         var j = KJE;
         e = !j.parameters.get("GRAPH_OPEN" + Math.floor(j.gGraphs.length + 1), (j.VML && !h ? false : !e));
         var d = j.gGraphs[j.gGraphs.length] = new j.gCanvas(c, f, i, a, e, k, g, h, b);
         if (f == j.gPIE || f == j.gCATEGORIES) {
             d._bPopDetail = false
         }
         return d
     } else {
         return null
     }
 };
 KJE.gCanvas = function(c, f, l, b, d, n, g, i, a) {
     var h = this;
     var m = KJE;
     var k = h.wCanvas = document.getElementById("KJE-G-" + l);
     h._bPopDetail = true;
     h._bPopCat = true;
     h.wContainer = c;
     h.wContainer.className = "KJEGraphContainer";
     h.wCanvas.className = "KJEGraph";
     if (KJE.iGraphFixedWidth) {
         h.wContainer.style.width = KJE.iGraphFixedWidth + "px"
     } else {
         h.wContainer.style.width = "100%"
     }
     if (typeof G_vmlCanvasManager != "undefined") {
         G_vmlCanvasManager.initElement(h.wCanvas)
     }
     h._ctx = null;
     h.sTitle = g;
     h.TT = g;
     h.InCalculator = (i ? false : true);
     h.bBorder = (a ? false : true);
     h._sGraphType = f;
     h._gtGraphType = new m.gType(f);
     h.FONT_TITLE = m.ggetFont(m.gTITLE_FONT);
     h.FONT_BOLD = m.ggetFont(m.gBOLD_FONT);
     h.FONT_PLAIN = m.ggetFont(m.gPLAIN_FONT);
     h.FONT_LEGEND = m.ggetFont(m.gLEGEND_FONT);
     h.FONT_LEGEND_BOLD = m.ggetFont(m.gLEGEND_FONT_BOLD);
     h.FONT_LEGEND_TINY = m.ggetFont(m.gLEGEND_FONT_TINY);
     h._legend = new m.gGraphLegend(m.gLegend.RIGHT, this);
     h._grid = new m.gGrid(this);
     h._axisY = new m.gValueAxis(this);
     h._axisX = new m.gCategoryAxis(this);
     h._titleGraph = new m.gGraphTitle(h.sTitle);
     h._titleXAxis = new m.gGraphTitle("");
     h._titleYAxis = new m.gGraphTitle(m.sCurrency);
     h._titleYAxis._iOrientation = m.gTitle.VERTICAL;
     h._vDataSeries = new Array();
     h._showItemLabel = false;
     h._showItemLabelFmt = m.FMT_DOLLARS;
     h._showItemLabelDecimals = h._iLimit = 0;
     h._showItemLabelOnTop = h._showLabelFactor = true;
     h._iArea = m.gGraphLine.AREA_NONE;
     h._cGrid = m.gColorGrid;
     h._cGridBackground1 = m.gColorGridBackground1;
     h._cGridBackground2 = m.gColorGridBackground2;
     h._cAxisLine = m.gColorAxisLine;
     h._cTextColor = m.gColorText;
     h._sGraphCategories = h._sGraphCategoriesBold = h._sValueLabels = h._showItemValues = null;
     h._colorList = m.gColorList;
     h._iDataSeriesCount = 0;
     if (b) {
         var j = h.wTitle = document.createElement("DIV");
         j.className = (h.InCalculator && h.bBorder ? "KJEGraphDropper" : "KJEDropperReport");
         j.setAttribute("role", "button");
         if (h.InCalculator) {
             j.tabIndex = "0"
         }
         if (m.VML) {
             j.style.paddingRight = "0"
         }
         c.insertBefore(j, k)
     }
     if (h.wTitle && !i) {
         if (h.wTitle.addEventListener) {
             h.wTitle.addEventListener("click", function(o) {
                 h.toggle()
             }, false);
             h.wTitle.addEventListener("keypress", function(o) {
                 if (o.keyCode == 32 || o.keyCode == 13) {
                     return KJE.Dropper.stopBubble(o)
                 }
             }, false);
             h.wTitle.addEventListener("keydown", function(o) {
                 if (o.keyCode == 32 || o.keyCode == 13) {
                     h.toggle();
                     return KJE.Dropper.stopBubble(o)
                 }
             }, false)
         } else {
             h.wTitle.attachEvent("onclick", function(o) {
                 h.toggle()
             });
             h.wTitle.attachEvent("onkeypress", function(o) {
                 if (o.keyCode == 32 || o.keyCode == 13) {
                     return KJE.Dropper.stopBubble(o)
                 }
             });
             h.wTitle.attachEvent("onkeydown", function(o) {
                 if (o.keyCode == 32 || o.keyCode == 13) {
                     h.toggle();
                     return KJE.Dropper.stopBubble(o)
                 }
             })
         }
     }
     if (k) {
         var e = h._gtGraphType;
         if (k.addEventListener) {
             k.addEventListener("click", function(q) {
                 var o = KJE.getMouseCoord(q, k);
                 var p = e.getWedgeValue(o.x, o.y);
                 if (p) {
                     KJE.DataPointShow(q, p.s, p.x, p.y, k)
                 }
             }, false);
             k.addEventListener("mousemove", function(q) {
                 var o = KJE.getMouseCoord(q, k);
                 var p = e.getWedgeValue(o.x, o.y);
                 if (p) {
                     KJE.DataPointShow(q, p.s, p.x, p.y, k)
                 }
             }, false)
         } else {
             k.attachEvent("onclick", function(q) {
                 var o = KJE.getMouseCoord(q, k);
                 var p = e.getWedgeValue(o.x, o.y);
                 if (p) {
                     KJE.DataPointShow(q, p.s, p.x, p.y, k)
                 }
             });
             k.attachEvent("onmousemove", function(q) {
                 var o = KJE.getMouseCoord(q, k);
                 var p = e.getWedgeValue(o.x, o.y);
                 if (p) {
                     KJE.DataPointShow(q, p.s, p.x, p.y, k)
                 }
             })
         }
     }
     h.setBackground(n);
     this.setWidth();
     h.setHeight(i ? m.gHeightReport : m.gHeight);
     h.show(!d, h.sTitle)
 };
 KJE.gCanvas.prototype.setShown = function(b) {
     var a = this;
     a.wContainer.style.display = "block";
     a.wContainer.style.width = "100%";
     this.setWidth(true)
 };
 KJE.gCanvas.prototype.setHidden = function(b) {
     var a = this;
     a.wContainer.style.display = "none"
 };
 KJE.gCanvas.prototype.setTitle = function(a) {
     this.sTitle = a
 };
 KJE.gCanvas.prototype.toggle = function() {
     if (KJE.Error || KJE.InComplete) {
         return
     }
     if (KJE.inCommandTask(true)) {
         return
     }
     var b = this;
     var c = b.wCanvas;
     var a = (KJE.deviceNoTransition || KJE.VML ? 0 : 10);
     if (this._bShow) {
         if (KJE.VML) {
             c.style.display = "none"
         }
         c.style.overflow = "hidden";
         this._bShow = false;
         this.show();
         setTimeout(function() {
             KJE.inCommandTask(false)
         }, 100)
     } else {
         this._count = 0;
         if (KJE.VML) {
             setTimeout(function() {
                 c.style.overflow = "hidden";
                 c.style.display = "block";
                 c.style.visibility = "visible";
                 b.show(true);
                 b.paint(null, true);
                 setTimeout(function() {
                     KJE.inCommandTask(false)
                 }, 10)
             }, 300)
         } else {
             c.style.overflow = "hidden";
             c.style.display = "block";
             c.style.visibility = "visible";
             this.paint(null, true);
             KJE._iInterval = setInterval(function() {
                 b.open(b.iGraphHeight, a)
             }, 25)
         }
     }
 };
 KJE.gCanvas.prototype.show = function(b, a) {
     if (this.wTitle) {
         var c = this;
         c._bShow = b;
         var e = c.wTitle;
         var f = 0;
         if (b) {
             f = c.iGraphHeight;
             e.setAttribute(KJE.g.sExpand, "true")
         } else {
             e.setAttribute(KJE.g.sExpand, "false")
         }
         e.innerHTML = KJE.setToggleTitleText((a ? a : this._titleGraph.s), c, KJE.g, !this.InCalculator);
         var d = e.offsetHeight;
         this.wContainer.style.height = ((d ? d : 28) + f) + "px";
         if (this.InCalculator) {
             KJE.Calculator.style.height = KJE.Main.offsetHeight + "px"
         } else {
             KJE.Calculator.style.height = "0px"
         }
     }
 };
 KJE.gCanvas.prototype.open = function(c, a) {
     if (this._count >= a) {
         clearInterval(KJE._iInterval);
         this.show(true);
         setTimeout(function() {
             KJE.inCommandTask(false)
         }, 100);
         return
     } else {
         if (this._count >= a - 2) {
             this._count -= 0.5
         }
     }
     this._count++;
     var b = c * (this._count / a);
     this.wContainer.style.height = (this.wTitle.offsetHeight + b) + "px";
     if (this.InCalculator) {
         KJE.Calculator.style.height = KJE.Main.offsetHeight + "px"
     }
 };
 KJE.gCanvas.prototype.setProperty = function(d) {
     var b = d.split("|");
     var a = KJE.sgv;
     var e = KJE.sgvStrList;
     var c = this;
     c.removeAll();
     for (var f = 0; f < b.length; f++) {
         switch (f) {
             case 0:
                 if (b[f] != c._gtGraphType._iGraphType) {
                     this._gtGraphType = new KJE.gType(b[f])
                 }
                 break;
             case 1:
                 c._showItemLabel = a(b[f], c._showItemLabel);
                 break;
             case 2:
                 c._showItemLabelFmt = a(b[f], c._showItemLabelFmt);
                 break;
             case 3:
                 c._showItemLabelDecimals = a(b[f], c._showItemLabelDecimals);
                 break;
             case 4:
                 c._showItemLabelOnTop = a(b[f], c._showItemLabelOnTop);
                 break;
             case 5:
                 c._iArea = a(b[f], c._iArea);
                 break;
             case 6:
                 c._cBackground = a(b[f], c._cBackground);
                 break;
             case 7:
                 c._cGrid = a(b[f], c._cGrid);
                 break;
             case 8:
                 c._cGridBackground1 = a(b[f], c._cGridBackground1);
                 break;
             case 9:
                 c._cGridBackground2 = a(b[f], c._cGridBackground2);
                 break;
             case 10:
                 c._cAxisLine = a(b[f], c._cAxisLine);
                 break;
             case 11:
                 c._cTextColor = a(b[f], c._cTextColor);
                 break;
             case 12:
                 c._iLimit = a(b[f], c._iLimit);
                 break;
             case 13:
                 c._sGraphCategories = e(b[f]);
                 break;
             case 14:
                 c._sGraphCategoriesBold = e(b[f]);
                 break;
             case 15:
                 c._sValueLabels = e(b[f]);
                 break;
             case 16:
                 c._colorList = e(b[f]);
                 break;
             case 17:
                 c._showItemValues = a(b[f], c._showItemValues);
                 break;
             case 18:
                 c._bPopDetail = a(b[f], c._bPopDetail);
                 break;
             case 19:
                 c._bPopCat = a(b[f], c._bPopCat);
                 break;
             case 20:
                 c._showLabelFactor = a(b[f], c._showLabelFactor);
                 break
         }
     }
 };
 KJE.gCanvas.prototype.getProperty = function() {
     var c = KJE.spvStringList;
     var b = this;
     var a = KJE;
     return b._gtGraphType._iGraphType + "|" + b._showItemLabel + "|" + b._showItemLabelFmt + "|" + b._showItemLabelDecimals + "|" + b._showItemLabelOnTop + "|" + b._iArea + "|" + a.spvColor(b._cBackground) + "|" + a.spvColor(b._cGrid) + "|" + a.spvColor(b._cGridBackground1) + "|" + a.spvColor(b._cGridBackground2) + "|" + a.spvColor(b._cAxisLine) + "|" + a.spvColor(b._cTextColor) + "|" + b._iLimit + "|" + c(b._sGraphCategories) + "|" + c(b._sGraphCategoriesBold) + "|" + c(b._sValueLabels) + "|" + a.spvColorList(b._colorList) + "|" + a.spvStringList2(b._showItemValues) + "|" + b._bPopDetail + "|" + b._bPopCat + "|" + b._showLabelFactor
 };
 KJE.gCanvas.prototype.getColor = function(a) {
     a -= 1;
     a %= this._colorList.length;
     return this._colorList[a]
 };
 KJE.gCanvas.prototype.blank = function() {
     this.removeAll();
     this.paint();
     if (this.wTitle) {
         this.setTitleGraph(KJE.gPleaseComplete)
     }
 };
 KJE.gCanvas.prototype.getDataSeriesCount = function() {
     return this._iDataSeriesCount
 };
 KJE.gCanvas.prototype.getDataProperties = function() {
     var a = "";
     for (var b = 0; b < this._iDataSeriesCount; b++) {
         a += "|" + this._vDataSeries[b].getProperty()
     }
     return a.substring(1)
 };
 KJE.gCanvas.prototype.getValueCount = function() {
     var b = this._iDataSeriesCount;
     var a = this._iLimit;
     var c = 0;
     while (b) {
         c = this._vDataSeries[b - 1].getValueCount();
         if (a > c || a == 0) {
             a = c
         }
         b--
     }
     return a
 };
 KJE.gCanvas.prototype.getMinValue = function() {
     if (this._vDataSeries == null) {
         return 0
     }
     var a = this._vDataSeries[0].getMinValue(this._iLimit);
     var b = a;
     for (var c = 1; c < this._iDataSeriesCount; c++) {
         b = this._vDataSeries[c].getMinValue(this._iLimit);
         if (b < a) {
             a = b
         }
     }
     return a
 };
 KJE.gCanvas.prototype.getMaxValue = function() {
     if (this._vDataSeries == null) {
         return 0
     }
     var d = 0;
     var f = 0;
     if (this._gtGraphType._iGraphType == KJE.gSTACKED) {
         var c = new Array();
         for (var a = 0; a < this._vDataSeries.length; a++) {
             var b = this._vDataSeries[a]._fValues;
             for (var e = 0; e < b.length; e++) {
                 c[e] = b[e] + (c[e] ? c[e] : 0)
             }
         }
         return Math.max.apply(Math, c)
     } else {
         d = this._vDataSeries[0].getMaxValue(this._iLimit);
         f = d;
         for (e = 1; e < this._iDataSeriesCount; e++) {
             f = this._vDataSeries[e].getMaxValue(this._iLimit);
             if (f > d) {
                 d = f
             }
         }
         return d
     }
 };
 KJE.gCanvas.prototype.add = function(c) {
     if (c == null) {} else {
         if (typeof c == "string") {
             if (c.trim() == "") {} else {
                 var a = c.split("|");
                 for (var b = 0; b < a.length; b++) {
                     this._vDataSeries[this._iDataSeriesCount++] = new KJE.gGraphDataSeries(a[b], null, null, null)
                 }
             }
         } else {
             this._vDataSeries[this._iDataSeriesCount] = c;
             this._iDataSeriesCount++
         }
     }
 };
 KJE.gCanvas.prototype.removeAll = function() {
     this._vDataSeries = new Array();
     this._iDataSeriesCount = 0;
     this._iLimit = 0;
     this._gtGraphType.syncSetup(this);
     this._legend._cBGColor = null
 };
 KJE.gCanvas.prototype.paint = function(e, c) {
     if (this.sTitle) {
         this.setTitleGraph(this.sTitle)
     }
     if (!this.wCanvas.getContext) {
         return
     }
     if (!c) {
         if (!this._bShow) {
             return
         }
     }
     var b = this.wCanvas.getContext("2d");
     if (b.canvas.width == 0 || b.canvas.height == 0) {
         return
     }
     if (b) {
         this._ctx = b
     }
     var a = this._ctx.canvas.width;
     var d = this._ctx.canvas.height;
     if (this._iDataSeriesCount != 0) {
         b.fillStyle = this._cBackground;
         b.fillRect(0, 0, a, d);
         this._gtGraphType.paint(this._ctx, a, d)
     } else {
         b.fillStyle = (this._cBackground);
         b.fillRect(0, 0, a, d)
     }
 };
 KJE.gCanvas.prototype.setGraphCategories = function(a) {
     this._sGraphCategories = a
 };
 KJE.gCanvas.prototype.setBackground = function(a) {
     this.wContainer.style.backgroundColor = a;
     this._cBackground = a
 };
 KJE.gCanvas.prototype.setWidth = function(c, b) {
     var a = 0;
     if (!b) {
         this.wContainer.style.width = "100%";
         a = this.wContainer.clientWidth;
         if (!a) {
             a = KJE.CalculatorWidth
         }
     } else {
         a = b
     }
     if (a > KJE.gWidthMax) {
         a = KJE.gWidthMax
     }
     a -= KJE.gWidthAdjust;
     this.wCanvas.style.width = this.wContainer.style.width = a + "px";
     this.wCanvas.width = a * KJE.gSCALE;
     this.iWidth = a;
     if (c) {
         this.paint()
     }
 };
 KJE.gCanvas.prototype.setHeight = function(a) {
     this.wCanvas.style.height = a + "px";
     this.iGraphHeight = a;
     this.wCanvas.height = a * KJE.gSCALE
 };
 KJE.gCanvas.prototype.getBackground = function() {
     return this._cBackground
 };
 KJE.gCanvas.prototype.setTitleGraph = function(b) {
     var a = this;
     if (!(a._titleGraph.s == b)) {
         if (a.wTitle) {
             a.wTitle.innerHTML = KJE.setToggleTitleText(b, a, KJE.g, !a.InCalculator);
             if (a.InCalculator) {
                 KJE.Calculator.style.height = KJE.Main.offsetHeight + "px"
             }
         }
         a._titleGraph.setText(b)
     }
 };
 KJE.gCanvas.prototype.setTitleTemplate = function() {
     var b = this.TT;
     for (var a = 0; a < arguments.length; a++) {
         b = b.replace("KJE" + (a + 1), arguments[a])
     }
     this.sTitle = b
 };
 KJE.gCanvas.prototype.getFormat = function(c, g, b) {
     var e = "";
     var d = this;
     var f = d._showItemLabelFmt;
     var a = d._showItemValues;
     if (a == null) {
         e = KJE.format[f](c / (f == KJE.FMT_PERCENT && d._showLabelFactor ? 100 : 1), d._showItemLabelDecimals)
     } else {
         if (a.length > g) {
             if (a[g].length > b) {
                 e = a[g][b]
             }
         }
     }
     return e
 };
 KJE.gGraphDataSeries = function(i, p, k, l, g, j, d) {
     var h = this;
     h._iDecimals = (d ? d : 2);
     var e = (i instanceof Array);
     if (!e && KJE.TypedArray) {
         e = (i instanceof Float64Array)
     }
     if (e) {
         h._fValues = i;
         h._sSeriesTitle = p;
         h._cColor = k;
         h._sSeriesTitleBold = (!l ? "" : l);
         h._sSeriesPop = (!g ? p : g);
         h._bNoPopDetails = (j ? true : false)
     } else {
         var m = i.split("~");
         var o = m.length;
         var a = KJE.sgv;
         for (var b = 0; b < o; b++) {
             switch (b) {
                 case 0:
                     h._cColor = a(m[b], "#0000FF");
                     break;
                 case 1:
                     h._sSeriesTitle = a(m[b], "");
                     break;
                 case 2:
                     h._sSeriesTitleBold = a(m[b], "");
                     break;
                 case 3:
                     h._fValues = KJE.sgvNumList(m[b]);
                     break;
                 case 4:
                     h._sSeriesPop = a(m[b], h._sSeriesTitle);
                     break;
                 case 5:
                     h._bNoPopDetails = a(m[b], false);
                     break
             }
         }
     }
 };
 KJE.gGraphDataSeries.prototype.getProperty = function() {
     var a = KJE;
     return this._cColor + "~" + a.spvStr(this._sSeriesTitle) + "~" + a.spvStr(this._sSeriesTitleBold) + "~" + a.spvFloatList(this._fValues, this._iDecimals) + "~" + a.spvStr(this._sSeriesPop)
 };
 KJE.gGraphDataSeries.prototype.getValueCount = function() {
     if (this._fValues == null) {
         return 0
     }
     return this._fValues.length
 };
 KJE.gGraphDataSeries.prototype.getMinValue = function(c) {
     var a = this._fValues;
     if (a == null) {
         return 0
     }
     var b = a[0];
     var d = a.length;
     if (d > c && c != 0) {
         d = c
     }
     for (var e = 1; e < d; e++) {
         if (b > a[e]) {
             b = a[e]
         }
     }
     return b
 };
 KJE.gGraphDataSeries.prototype.getMaxValue = function(c) {
     var a = this._fValues;
     if (a == null) {
         return 0
     }
     var d = a.length;
     if (d > c && c != 0) {
         d = c
     }
     var b = a[0];
     for (var e = d - 1; e > 0; e--) {
         if (b < a[e]) {
             b = a[e]
         }
     }
     return b
 };
 KJE.gGraphTitle = function(a) {
     var b = this;
     b._iOrientation = KJE.gTitle.HORIZONTAL;
     b.s = a;
     b.f = "11pt Helvetica";
     b.c = "#000000";
     b.bShow = true;
     b.sText = ""
 };
 KJE.gGraphTitle.prototype.setProperty = function(a) {
     this.setText(KJE.sgv(a, ""))
 };
 KJE.gGraphTitle.prototype.getProperty = function() {
     return KJE.spvStr(this.s)
 };
 KJE.gGraphTitle.prototype.paint = function(b, a, e, c, d) {
     b.font = this.f;
     b.fillStyle = this.c;
     b.shadowBlur = "";
     b.shadowColor = "";
     b.shadowOffsetX = "";
     b.shadowOffsetY = "";
     b.textAlign = "center";
     b.textBaseline = "middle";
     if (this._iWidth != 0) {
         if (this._iOrientation == KJE.gTitle.VERTICAL) {
             b.save();
             b.rotate(-Math.PI / 2);
             b.fillText(KJE.FTR(this.sText), -e - d / 2, a + c / 2);
             b.restore()
         } else {
             b.fillText(KJE.FTR(this.sText), a + c / 2, e + d / 2)
         }
     }
 };
 KJE.gGraphTitle.prototype.setText = function(a) {
     this.s = a
 };
 KJE.gGraphTitle.prototype.setFont = function(a) {
     this.f = a
 };
 KJE.gGraphTitle.prototype.setColor = function(a) {
     this.c = a
 };
 KJE.gGraphTitle.prototype.setTitle = function(b, d) {
     var a = 0;
     var f = 0;
     var c = d || "";
     c += ((c == "" && this.s == KJE.sCurrency) ? "" : (this.s || ""));
     if (c != "" && this.bShow) {
         b.font = this.f;
         var e = f = KJE.gGetFontHeight(b) + 10;
         a = b.measureText(KJE.FTR(c)).width;
         if (this._iOrientation == KJE.gTitle.VERTICAL) {
             f = a;
             a = e
         }
     }
     this.sText = c;
     this._iHeight = f;
     this._iWidth = a
 };
 KJE.gGraphLegend = function(c, a) {
     this._gGraph = a;
     var b = this;
     b._iShape = KJE.gLegend.SQUARE_LEGEND;
     b._iOrientation = c;
     b._legendType = KJE.gLegend.DATA_SERIES_LEGEND;
     b._border = false;
     b._cBGColor = null;
     b._iLegendWidth = 0;
     b.LINE_SPACE = KJE.gLegend._LINE_SPACE;
     b._bShow = true;
     b._cColor = "#000000";
     b._iXOffset = 0;
     b._iYOffset = 0;
     b._iWidthOffset = 0;
     b._iHeightOffset = 0;
     b._iMaxLegendLength = 0;
     b._iWidth = 0;
     b._iHeight = 0;
     b._iFontHeight = 0;
     b._iColorBoxYOffset = 0;
     b._iLabelOffset = 0;
     b._iColorBoxOffset = 0;
     b._iBORDER_WIDTH = 0
 };
 KJE.gGraphLegend.prototype.setProperty = function(d) {
     var b = d.split("|");
     var a = KJE.sgv;
     var c = this;
     for (var e = 0; e < b.length; e++) {
         switch (e) {
             case 0:
                 c._cBGColor = a(b[e], c._cBGColor);
                 break;
             case 1:
                 c._iShape = a(b[e], c._iShape);
                 break;
             case 2:
                 c._iOrientation = a(b[e], c._iOrientation);
                 break;
             case 3:
                 c._border = a(b[e], c._border);
                 break;
             case 4:
                 c._iLegendWidth = a(b[e], c._iLegendWidth);
                 break;
             case 5:
                 c.LINE_SPACE = a(b[e], c.LINE_SPACE);
                 break;
             case 6:
                 c._bShow = a(b[e], c._bShow);
                 break
         }
     }
 };
 KJE.gGraphLegend.prototype.getProperty = function() {
     var a = this;
     if (a._cBGColor == null) {
         a._cBGColor = a._gGraph.getBackground()
     }
     return a._cBGColor + "|" + a._iShape + "|" + a._iOrientation + "|" + a._border + "|" + a._iLegendWidth + "|" + a.LINE_SPACE + "|" + a._bShow
 };
 KJE.gGraphLegend.prototype.setVisible = function(a) {
     this._bShow = a
 };
 KJE.gGraphLegend.prototype.useOrientation = function(a) {
     var b = this._iOrientation;
     this.bLegendSmall = false;
     if (a / KJE.gSCALE < KJE.gLegendMin) {
         b = KJE.gLegend.BOTTOM;
         this.bLegendSmall = true
     }
     return b
 };
 KJE.gGraphLegend.prototype.paint = function(m, j, h, n, f, c, b, r, p) {
     var o = this;
     var q = o._iHeight;
     var l = o._iWidth;
     var e = this._iBORDER_WIDTH;
     var a = KJE.gLegend._iTOPBOTTOM_BORDER_WIDTH;
     if (!c) {
         c = 0
     }
     if (!b) {
         b = 0
     }
     if (!r) {
         r = 0
     }
     if (!p) {
         p = 0
     }
     m.textAlign = "left";
     m.textBaseline = "middle";
     var g = KJE.gLegend;
     var d = o.useOrientation(m.canvas.width);
     switch (d) {
         case g.TOP:
             f = q;
             break;
         case g.TOP_GRID_ALIGN:
             f = q;
             n = l;
             j = c;
             break;
         case g.BOTTOM:
             h += f - q;
             f = q;
             break;
         case g.LEFT:
             if (b > 0) {
                 h = b
             }
             if (p > 0) {
                 f = p
             }
             n = l;
             break;
         case g.RIGHT:
             if (b > 0) {
                 h = b
             }
             if (p > 0) {
                 f = p
             }
             j += n - l;
             n = l;
             break;
         case g.TOP_LEFT:
             f = q;
             n = l;
             break;
         case g.BOTTOM_LEFT:
             h += f - q;
             f = q;
             n = l;
             break;
         case g.TOP_RIGHT:
             j += n - l;
             f = q;
             n = l;
             break;
         case g.BOTTOM_RIGHT:
             h += f - q;
             j += n - l;
             f = q;
             n = l;
             break;
         case g.GRID_TOP_RIGHT:
             j = c - a + r - l;
             h = b + a;
             n = l;
             f = q;
             break;
         case g.GRID_TOP_LEFT:
             j = c + a;
             h = b + a;
             n = l;
             f = q;
             break;
         case g.GRID_BOTTOM_RIGHT:
             j = c - a + r - l;
             h = b - a + p - q;
             n = l;
             f = q;
             break;
         case g.GRID_BOTTOM_LEFT:
             j = c + a;
             h = b - a + p - q;
             n = l;
             f = q;
             break;
         case g.GRID_TOP:
             j = c;
             h = b + e;
             n = r;
             f = q;
             break;
         case g.GRID_BOTTOM:
             j = c;
             h = b - e + p - q;
             n = r;
             f = q;
             break;
         case g.GRID_LEFT:
             j = c + e;
             h = b;
             n = l;
             f = p;
             break;
         case g.GRID_RIGHT:
             j = c - e + r - l;
             h = b;
             n = l;
             f = p;
             break
     }
     if (this._bShow) {
         var k = j + (n / 2) - (l / 2);
         var i = h + (f / 2) - (q / 2);
         if (this._border) {
             m.fillStyle = this._cBGColor;
             m.fillRect(k - 0.5, i - 0.5, l, q);
             m.strokeStyle = this._gGraph._cTextColor;
             m.strokeRect(k - 0.5, i - 0.5, l, q)
         }
         if (this._legendType <= g.DATA_SERIES_LEGEND) {
             this.drawDataSeriesLegend(m, k, i);
             return
         }
         this.drawCategoryLegend(m, k, i)
     }
 };
 KJE.gGraphLegend.prototype.drawDataSeriesLegend = function(i, e, d) {
     var f = this._gGraph._vDataSeries.length;
     var h = new Array(f);
     var a = new Array(f);
     var g = new Array(f);
     var c = this._gGraph._vDataSeries;
     for (var b = 0; b < f; b++) {
         h[b] = c[b]._cColor;
         a[b] = c[b]._sSeriesTitle + (KJE.VML ? c[b]._sSeriesTitleBold : "");
         if (!KJE.VML) {
             g[b] = c[b]._sSeriesTitleBold
         }
     }
     this.drawLegend(i, e, d, h, a, g)
 };
 KJE.gGraphLegend.prototype.drawCategoryLegend = function(a, f, d) {
     var b = this._gGraph._sGraphCategories;
     var c = this._gGraph._sGraphCategoriesBold;
     if (KJE.VML && c != null) {
         var e = this._gGraph._sGraphCategories.length;
         var g = new Array(e);
         for (var h = 0; h < e; h++) {
             g[h] = b[h] + c[h]
         }
         c = null;
         b = g
     }
     this.drawLegend(a, f, d, this._gGraph._colorList, b, c)
 };
 KJE.gGraphLegend.prototype.drawLegend = function(s, l, i, y, a, p) {
     var g = KJE.gLegend;
     var u = i + g._iSIDE_BORDER_WIDTH;
     var c = (this._iShape == g.SQUARE_LEGEND);
     var t = 0;
     var d = this.LINE_SPACE + this._iFontHeight;
     var o = this._iColorBoxOffset;
     var b = this._iColorBoxYOffset;
     var h = g._iSIDE_BORDER_WIDTH;
     var z = g._PAD;
     var x = (this.bLegendSmall ? this._gGraph.FONT_LEGEND_TINY : this._gGraph.FONT_LEGEND_BOLD);
     var e = (this.bLegendSmall ? this._gGraph.FONT_LEGEND_TINY : this._gGraph.FONT_LEGEND);
     var f = (this._legendType == g.BANDED_LEGEND);
     var w = a.length;
     var m = KJE.FTR;
     s.font = e;
     s.lineWidth = g._LINE_WIDTH;
     s.shadowColor = g._sSHADOW_COLOR;
     s.shadowOffsetX = g._sSHADOW_BLUR_X;
     s.shadowOffsetY = g._sSHADOW_BLUR_Y;
     for (var r = 0; r < w; r++) {
         s.fillStyle = y[r];
         if (c) {
             s.fillRect(l + o, u + b, h, h)
         } else {
             var q = g._iCIR_SIDE_LENGTH;
             s.beginPath();
             s.arc(l + o + q, u + b + q, q, 0, Math.PI * 2, true);
             s.closePath();
             s.fill()
         }
         u += d;
         if (f) {
             r++
         }
     }
     s.lineWidth = g._LINE_WIDTH;
     s.shadowBlur = "0";
     s.shadowColor = g._sSHADOW_COLOR;
     s.shadowOffsetX = "0";
     s.shadowOffsetY = "0";
     s.fillStyle = this._cTextColor;
     u = i + h + b + h / 2 + z;
     var j = l + this._iLabelOffset;
     for (r = 0; r < w; r++) {
         s.fillText(m(a[r]), j, u);
         if (p && p[r]) {
             t = s.measureText(m(a[r])).width;
             s.font = x;
             s.fillText(m(p[r]), j + t, u);
             s.font = e
         }
         u += d;
         if (f) {
             r++
         }
     }
 };
 KJE.gGraphLegend.prototype.setSize = function(l) {
     var j = KJE.gLegend;
     var g = this;
     g._iWidth = 0;
     g._iHeight = 0;
     g._iXOffset = 0;
     g._iYOffset = 0;
     var d = g._iWidthOffset = g._iBORDER_WIDTH = KJE.gBORDER_WIDTH;
     g._iHeightOffset = 0;
     if (g._bShow) {
         var i = j._iSIDE_BORDER_WIDTH;
         var c = g._gGraph;
         var h = g.LINE_SPACE;
         var f = g._iFontHeight;
         var e = j._PAD;
         g._iColorBoxOffset = i + e;
         g._iLabelOffset = i + i + j._iBOX_TO_LABEL_SPACE + e * 2;
         var k = g._iWidth = g._iLabelOffset + g._iMaxLegendLength + i;
         var b = g._iHeight = i + (f + h) * (g._legendType == j.CATEGORY_LEGEND ? (c._sGraphCategories == null ? 0 : c._sGraphCategories.length) : c.getDataSeriesCount()) - h + i;
         g._iColorBoxYOffset = Math.ceil((f - i) / 2) + e;
         var a = g.useOrientation(l.canvas.width);
         switch (a) {
             case j.TOP:
             case j.TOP_GRID_ALIGN:
                 g._iYOffset = b + d;
             case j.BOTTOM:
                 g._iHeightOffset = b + d;
                 break;
             case j.LEFT:
             case j.TOP_LEFT:
             case j.BOTTOM_LEFT:
                 g._iXOffset = k + d;
                 g._iWidthOffset = k + d + d;
                 break;
             case j.RIGHT:
             case j.TOP_RIGHT:
             case j.BOTTOM_RIGHT:
                 g._iWidthOffset = k + d;
                 break
         }
     }
 };
 KJE.gGraphLegend.prototype.setINF = function(k) {
     oThis = this;
     oThis._cColor = oThis._gGraph._cTextColor;
     oThis._cTextColor = oThis._gGraph._cTextColor;
     if (oThis._cBGColor == null) {
         oThis._cBGColor = oThis._gGraph._cBackground
     }
     oThis._iMaxLegendLength = 0;
     oThis._iFontHeight = 0;
     oThis._iFontDescent = 0;
     var b = oThis.useOrientation(k.canvas.width);
     var c = (oThis.bLegendSmall ? oThis._gGraph.FONT_LEGEND_TINY : oThis._gGraph.FONT_LEGEND_BOLD);
     var d = (oThis.bLegendSmall ? oThis._gGraph.FONT_LEGEND_TINY : oThis._gGraph.FONT_LEGEND);
     if (oThis._bShow) {
         if (oThis._iLegendWidth > 0) {
             oThis._iMaxLegendLength = oThis._iLegendWidth
         } else {
             k.font = d;
             var f = 0;
             var j = "";
             var h = oThis._gGraph._vDataSeries.length;
             var l = "";
             if (oThis._legendType != KJE.gLegend.CATEGORY_LEGEND) {
                 for (var g = 0; g < h; g++) {
                     l = oThis._gGraph._vDataSeries[g]._sSeriesTitle;
                     j = oThis._gGraph._vDataSeries[g]._sSeriesTitleBold;
                     j = (j ? j : "");
                     f = k.measureText(KJE.FTR(l + (KJE.VML ? j : ""))).width;
                     if (j != "" && !KJE.VML) {
                         k.font = oThis.FONT_LEGEND_BOLD;
                         f += k.measureText(KJE.FTR(j)).width;
                         k.font = d
                     }
                     if (f > oThis._iMaxLegendLength) {
                         oThis._iMaxLegendLength = f
                     }
                 }
             } else {
                 if (oThis._gGraph._sGraphCategories != null) {
                     var h = oThis._gGraph._sGraphCategories.length;
                     var a = (oThis._gGraph._sGraphCategoriesBold == null ? 0 : oThis._gGraph._sGraphCategoriesBold.length);
                     for (var e = 0; e < h; e++) {
                         l = oThis._gGraph._sGraphCategories[e];
                         j = (e < a ? oThis._gGraph._sGraphCategoriesBold[e] : "");
                         f = k.measureText(KJE.FTR(l + (KJE.VML ? j : ""))).width;
                         if (e < a) {
                             k.font = c;
                             f += k.measureText(KJE.FTR(j)).width;
                             k.font = d
                         }
                         if (f > oThis._iMaxLegendLength) {
                             oThis._iMaxLegendLength = f
                         }
                     }
                 }
             }
         }
         oThis._iFontHeight = KJE.gGetFontHeight(k)
     }
 };
 KJE.gValueAxis = function(a) {
     this._gGraph = a;
     this._font = a.FONT_PLAIN;
     this._bShow = true;
     this._cColor = "#FFFFFF";
     this._cLine = "#000000";
     this._cTextColor = "#000000";
     this._iFormat = KJE.FMT_DOLLARS;
     this._iXOffset = 0;
     this._iYOffset = 0;
     this._iLabelCount = 0;
     this._iMaxLabelLength = 0;
     this._iMaxLength = 0;
     this._iWidth = 0;
     this._iHeight = 0;
     this._iPixelsPerIncrement = 0;
     this._iDataLength = 0;
     this._fValuePerPixel = 0;
     this._iFontHeight = 0;
     this._iFormat = KJE.FMT_DOLLARS;
     this._bAutoMaximum = true;
     this._bAutoMinimum = false;
     this._axisMinimum = 0;
     this._axisMaximum = 100;
     this._sUnits = "";
     this._iUnitFactor = 1;
     this._fAbsoluteMinValue = 0;
     this._fAbsoluteMaxValue = 0;
     this._fRange = 0;
     this._fMinValue = 0;
     this._fMaxValue = 0;
     this._iIncrement = 0;
     this._iFactor = 0;
     this._fIncrement = 0;
     this._iZeroIntersects = 0
 };
 KJE.gValueAxis.prototype.setProperty = function(c) {
     var b = c.split("|");
     var a = KJE.sgv;
     for (var d = 0; d < b.length; d++) {
         switch (d) {
             case 0:
                 this._bShow = a(b[d], this._bShow);
                 break;
             case 1:
                 this._iFormat = a(b[d], this._iFormat);
                 break;
             case 2:
                 this._bAutoMaximum = a(b[d], this._bAutoMaximum);
                 break;
             case 3:
                 this._bAutoMinimum = a(b[d], this._bAutoMinimum);
                 break;
             case 4:
                 this._axisMaximum = a(b[d], this._axisMaximum);
                 break;
             case 5:
                 this._axisMinimum = a(b[d], this._axisMinimum);
                 break
         }
     }
 };
 KJE.gValueAxis.prototype.getProperty = function() {
     return this._bShow + "|" + this._iFormat + "|" + this._bAutoMaximum + "|" + this._bAutoMinimum + "|" + KJE.number(this._axisMaximum, 2) + "|" + KJE.number(this._axisMinimum, 2)
 };
 KJE.gValueAxis.prototype.getLabel = function(a) {
     if (this._gGraph._sValueLabels == null) {
         return KJE.format[this._iFormat](a / this._iUnitFactor, ((this._fAbsoluteMaxValue - this._fAbsoluteMinValue) <= 5) ? 2 : 0)
     } else {
         return this._gGraph._sValueLabels[Math.floor(a)]
     }
 };
 KJE.gValueAxis.prototype.getNextIncrement = function(b) {
     var a = this._iIncrement;
     return (this._gGraph._sValueLabels == null ? (this._fRange > 100 ? (b - (a * this._iFactor)) : Math.round((b * this._iFactor) - a) / this._iFactor) : (b - 1))
 };
 KJE.gValueAxis.prototype.paint = function(i, h, g) {
     if (this._bShow) {
         var f = KJE.gAxis;
         i.font = this._font;
         var a = (this._iWidth - f.TICK_LENGTH - f.LINE_WIDTH);
         var c = (f.LABEL_SPACE_LENGTH + f.TICK_LENGTH);
         var e = 0;
         var d = this.getStartingPlotValue();
         for (var b = 0; b <= this._iLabelCount; b++) {
             i.strokeStyle = this._cTextColor;
             if (this._iPixelsPerIncrement < this._iFontHeight) {
                 if ((b % 2) != 0) {
                     this.drawText(i, h, g, this.getLabel(d), c, e)
                 }
             } else {
                 this.drawText(i, h, g, this.getLabel(d), c, e)
             }
             i.strokeStyle = this._cColor;
             i.beginPath();
             this.drawLine(i, h, g, a, e, a + f.TICK_LENGTH, e, this._cLine);
             e += this._iPixelsPerIncrement;
             d = this.getNextIncrement(d)
         }
         this.drawLine(i, h, g, a + f.TICK_LENGTH, 0, a + f.TICK_LENGTH, this._iDataLength, this._cLine)
     }
 };
 KJE.gValueAxis.prototype.drawLine = function(b, e, f, a, h, c, d, g) {
     b.strokeStyle = g;
     b.moveTo(a + e + 0.5, h + f + 0.5);
     b.lineTo(c + e + 0.5, d + f + 0.5);
     b.stroke()
 };
 KJE.gValueAxis.prototype.drawText = function(h, e, c, i, g, f) {
     var d = h.measureText(KJE.FTR(i)).width;
     var a = f + ((this._iFontHeight) / 2);
     var b = this._iWidth - g - d;
     h.textAlign = "left";
     h.textBaseline = "bottom";
     h.font = this._font;
     h.fillText(KJE.FTR(i), e + b, c + a)
 };
 KJE.gValueAxis.prototype.setSize = function(a, b) {
     a.font = this._font;
     a.fillStyle = this._cColor;
     this._iPixelsPerIncrement = Math.floor(b / this._iLabelCount);
     this._iDataLength = this._iPixelsPerIncrement * this._iLabelCount;
     this._iMaxLength = b;
     this._iHeight = this._iDataLength;
     var f = 0;
     var d = this.getStartingPlotValue();
     for (var e = 0; e <= this._iLabelCount; e++) {
         if (d == 0) {
             this._iZeroIntersects = f;
             break
         }
         d = this.getNextIncrement(d);
         f += this._iPixelsPerIncrement
     }
     var c = KJE.gAxis;
     this._iWidth = this._iMaxLabelLength + c.LABEL_SPACE_LENGTH + c.TICK_LENGTH + c.LINE_WIDTH;
     this._iYOffset = (this._bShow ? this._iHeight : 0);
     this._iXOffset = (this._bShow ? this._iWidth : 0);
     this._fValuePerPixel = (this._iDataLength / this._fRange)
 };
 KJE.gValueAxis.prototype.setFormat = function(a) {
     this._iFormat = a
 };
 KJE.gValueAxis.prototype.setINF = function(j) {
     this._cLine = this._gGraph._cAxisLine;
     this._cColor = this._gGraph._cTextColor;
     this._cTextColor = this._gGraph._cTextColor;
     this._iFontHeight = KJE.gGetFontHeight(j);
     j.font = this._font;
     j.strokeStyle = this._cTextColor;
     this._fAbsoluteMaxValue = (this._bAutoMaximum ? this._gGraph.getMaxValue() : this._axisMaximum);
     this._fAbsoluteMinValue = (this._bAutoMinimum ? this._gGraph.getMinValue() : this._axisMinimum);
     if (this._fAbsoluteMaxValue < 0.00001 && this._fAbsoluteMaxValue > -0.00001 && this._fAbsoluteMinValue < 0.00001 && this._fAbsoluteMinValue > -0.00001) {
         this._fAbsoluteMaxValue = 25
     } else {
         if (this._fAbsoluteMaxValue < 1 && this._fAbsoluteMaxValue > -1 && this._fAbsoluteMinValue < 1 && this._fAbsoluteMinValue > -1 && this._iFormat == KJE.FMT_DOLLARS) {
             this._fAbsoluteMaxValue = 1
         }
     }
     var d = this._fAbsoluteMaxValue - this._fAbsoluteMinValue;
     this._iFactor = 1;
     this._iIncrement = 1;
     this._fIncrement = 1;
     if (this._gGraph._sValueLabels != null) {} else {
         var g = d;
         if (g > 100) {
             while (g > 200) {
                 this._iFactor *= 10;
                 g = (d / this._iFactor)
             }
         } else {
             while (g <= 20) {
                 this._iFactor *= 10;
                 g = (d * this._iFactor)
             }
         }
         this._iIncrement = (g > 100 ? 20 : (g > 50 ? 10 : 5));
         this._fIncrement = (d > 100 ? (this._iIncrement * this._iFactor) : this._iIncrement / this._iFactor)
     }
     if (this._fAbsoluteMinValue == 0) {
         this._fMinValue = 0
     } else {
         if ((this._fAbsoluteMinValue % this._fIncrement) == 0) {
             this._fMinValue = this._fAbsoluteMinValue
         } else {
             this._fMinValue = (Math.floor(this._fAbsoluteMinValue / this._fIncrement)) * this._fIncrement
         }
     }
     if (this._fAbsoluteMaxValue == 0) {
         this._fMaxValue = 0
     } else {
         if ((this._fAbsoluteMaxValue % this._fIncrement) == 0) {
             this._fMaxValue = this._fAbsoluteMaxValue
         } else {
             this._fMaxValue = Math.ceil(this._fAbsoluteMaxValue / this._fIncrement);
             this._fMaxValue = Math.round(this._iFactor * this._fMaxValue * this._fIncrement) / this._iFactor
         }
     }
     this._fRange = this._fMaxValue - this._fMinValue;
     if (this._fRange == 0) {
         this.fRange = this._fIncrement
     }
     if (this._gGraph._sValueLabels == null) {
         this._iLabelCount = Math.round(this._fRange / this._fIncrement)
     } else {
         this._iLabelCount = this._gGraph._sValueLabels.length - 1
     }
     this.setGraphUnits(this._fMaxValue, this._fMinValue);
     if (this._bShow) {
         var a = this.getStartingPlotValue();
         var e = 0;
         var c = 0;
         var f = this._iLabelCount;
         for (var b = 0; b <= f; b++) {
             c = j.measureText(KJE.FTR(this.getLabel(a))).width;
             e = (c > e ? c : e);
             a = this.getNextIncrement(a)
         }
         var h = KJE.gAxis;
         this._iMaxLabelLength = e;
         this._iFontHeight = KJE.gGetFontHeight(j);
         this._iWidth = this._iMaxLabelLength + h.LABEL_SPACE_LENGTH + h.TICK_LENGTH + h.LINE_WIDTH
     }
 };
 KJE.gValueAxis.prototype.getStartingPlotValue = function() {
     return (this._gGraph._sValueLabels == null ? this._fMaxValue : this._gGraph._sValueLabels.length - 1)
 };
 KJE.gValueAxis.prototype.setVisible = function(a) {
     this._bShow = a
 };
 KJE.gValueAxis.prototype.getDataLength = function() {
     return this._iDataLength
 };
 KJE.gValueAxis.prototype.setGraphUnits = function(d, g) {
     var a = KJE;
     g = g || 0;
     var c = a.gScaleLabelMax;
     var e = a.gScaleLabelFactor;
     var f = c.length;
     for (var b = f - 1; b >= 0; b--) {
         if (d >= c[b] || g <= (-1) * c[b]) {
             this._sUnits = a.gScaleLabel[b];
             this._iUnitFactor = e[b];
             break
         }
     }
     return this._iUnitFactor
 };
 KJE.gCategoryAxis = function(a) {
     this._gGraph = a;
     this._bShow = true;
     this._cColor = "#FFFFFF";
     this._cLine = "#000000";
     this._cTextColor = "#000000";
     this._fFont = "11pt Helvetica";
     this._iXOffset = 0;
     this._iYOffset = 0;
     this._iLabelCount = 0;
     this._iMaxLabelLength = 0;
     this._iWidth = 0;
     this._iHeight = 0;
     this._iPixelsPerIncrement = 0;
     this._iDataLength = 0;
     this._iFontHeight = 0;
     this._iFontOffset = 0;
     this._fSpacingPercent = 0.25;
     this._fDataGapPercent = 0;
     this._bNoOffset = false;
     this._sCategories = new Array();
     this._iCategoryCount;
     this._iBarCount;
     this._iBarWidth;
     this._iSpaceWidth;
     this._iGapWidth;
     this._iBarsPerCategory;
     this._iAxisSegmentLength;
     this._bVertical = false
 };
 KJE.gCategoryAxis.prototype.setProperty = function(c) {
     var b = c.split("|");
     var a = KJE.sgv;
     for (var d = 0; d < b.length; d++) {
         switch (d) {
             case 0:
                 this._bShow = a(b[d], this._bShow);
                 break;
             case 1:
                 this._fSpacingPercent = a(b[d], this._fSpacingPercent);
                 break;
             case 2:
                 this._fDataGapPercent = a(b[d], this._fDataGapPercent);
                 break
         }
         d++
     }
 };
 KJE.gCategoryAxis.prototype.getProperty = function() {
     return this._bShow + "|" + KJE.input(this._fSpacingPercent, 2) + "|" + KJE.input(this._fDataGapPercent, 2)
 };
 KJE.gCategoryAxis.prototype.paint = function(m, j, h, r, t) {
     var p = this;
     if (p._bShow) {
         var s = KJE.gAxis;
         h += t;
         m.font = p._fFont;
         var c = s.TICK_LENGTH;
         var q = s.LABEL_SPACE_LENGTH + s.LINE_WIDTH + s.TICK_LENGTH;
         var e = c + s.LABEL_SPACE_LENGTH;
         var a = 0;
         var b = 0;
         var d = 1;
         var i = p._sCategories;
         var f = p._iCategoryCount;
         var n = p._bVertical;
         var o = (n ? p._iFontHeight : p._iMaxLabelLength) + q;
         if (o > p._iAxisSegmentLength && f > 2) {
             d = Math.ceil(f / (p._iDataLength / o))
         }
         m.strokeStyle = p._cLine;
         m.beginPath();
         for (var g = 0; g < f; g++) {
             b = p.getCategoryLeft(g);
             if (g == 0) {
                 b -= s.LINE_WIDTH
             }
             m.moveTo(b + j + 0.5, 0 + h + 0.5);
             m.lineTo(b + j + 0.5, c + h + 0.5)
         }
         m.moveTo(j + 0.5, h + 0.5);
         m.lineTo(p._iWidth + j + 0.5, h + 0.5);
         m.stroke();
         if (i) {
             m.setStyle = p._cTextColor;
             if (n) {
                 m.save();
                 m.rotate(-Math.PI / 2);
                 m.textAlign = "right";
                 m.textBaseline = "middle"
             } else {
                 m.textAlign = "center";
                 m.textBaseline = "top"
             }
             p.getCatOffset = p._bNoOffset ? p.getCategoryLeft : p.getCategoryMid;
             var l = i.length;
             var k = KJE.FTR;
             for (var g = 0; g < f; g++) {
                 a = p.getCatOffset(g);
                 if ((d < 2 || (g % d) == 0 && g < f - (d * 0.9) && g != f - 2 || g == f - 1)) {
                     if (g < l) {
                         if (n) {
                             m.fillText(k(i[g]), -h - e - 0.5, j + a - 0.5)
                         } else {
                             m.fillText(k(i[g]), j + a + 0.5, h + e + 0.5)
                         }
                     }
                 }
             }
             if (n) {
                 m.restore()
             }
         }
     }
 };
 KJE.gCategoryAxis.prototype.drawLine = function(b, e, f, a, h, c, d, g) {
     b.beginPath();
     b.strokeStyle = g;
     b.moveTo(a + e + 0.5, h + f + 0.5);
     b.lineTo(c + e + 0.5, d + f + 0.5);
     b.stroke()
 };
 KJE.gCategoryAxis.prototype.setSize = function(k, d) {
     k.font = this._fFont;
     var e = this._gGraph.getValueCount() - (this._bNoOffset ? 1 : 0);
     var a = this._gGraph.getDataSeriesCount();
     var h = (a * e);
     var j = (2 * e);
     var b = ((a - 1) * e);
     this._iWidth = d;
     this._iDataLength = d;
     var c = Math.floor(this._iWidth / Math.round(((j * this._fSpacingPercent) + h + (b * this._fDataGapPercent))));
     var i = c * this._fDataGapPercent;
     var f = Math.floor((this._iDataLength - (c * h) - (i * b)) / j);
     this._iAxisSegmentLength = 2 * f + (i * (a - 1)) + (c * a);
     this._iXOffset = 0;
     this._iYOffset = 0;
     if (this._bShow) {
         var g = KJE.gAxis;
         if (this._iMaxLabelLength > this._iAxisSegmentLength && this._iMaxLabelLength > k.measureText("9999").width && this._iMaxLabelLength < k.measureText("9999999999999999999").width) {
             this._iHeight = this._iMaxLabelLength + g.TICK_LENGTH;
             this._bVertical = true
         } else {
             this._iHeight = this._iFontHeight + g.LABEL_SPACE_LENGTH + g.TICK_LENGTH + g.LINE_WIDTH;
             this._bVertical = false
         }
     } else {
         this._iHeight = 0
     }
     this._iBarsPerCategory = a;
     this._iBarWidth = c;
     this._iGapWidth = i;
     this._iSpaceWidth = f
 };
 KJE.gCategoryAxis.prototype.setINF = function(a) {
     this._iCategoryCount = this._gGraph.getValueCount();
     this._sCategories = this._gGraph._sGraphCategories;
     this._fFont = this._gGraph.FONT_PLAIN;
     this._cColor = this._gGraph._cTextColor;
     this._cTextColor = this._gGraph._cTextColor;
     this._cLine = this._gGraph._cAxisLine;
     this._iFontHeight = 0;
     this._iMaxLabelLength = 0;
     this._iHeight = 0;
     if (this._bShow) {
         var b = KJE.gAxis;
         if (this._sCategories) {
             this._iFontHeight = KJE.gGetFontHeight(a)
         } else {
             this._iFontHeight = -b.LABEL_SPACE_LENGTH * 2
         }
         a.font = this._fFont;
         a.strokeStyle = this._cColor;
         this._iMaxLabelLength = this.getMaximumCategoryLength(a, this._iCategoryCount, this._sCategories)
     }
 };
 KJE.gCategoryAxis.prototype.getCategoryLeft = function(a) {
     return Math.round(this._iWidth / (this._iCategoryCount - (this._bNoOffset ? 1 : 0)) * a)
 };
 KJE.gCategoryAxis.prototype.getCategoryMid = function(a) {
     return Math.round((this._iWidth / this._iCategoryCount) * a) + Math.round(((this._iBarsPerCategory * this._iBarWidth) + ((this._iBarsPerCategory - 1) * this._iGapWidth)) / 2) + this._iSpaceWidth
 };
 KJE.gCategoryAxis.prototype.getDataWidth = function() {
     return this._iGapWidth + this._iBarWidth
 };
 KJE.gCategoryAxis.prototype.getMaximumCategoryLength = function(b, e, d) {
     if (d == null) {
         return 0
     }
     if (d.length == 0) {
         return 0
     }
     var a = 0;
     var c = 0;
     for (var f = 0;
         (f < e) && (f < d.length); f++) {
         c = b.measureText(KJE.FTR(d[f])).width + 3;
         a = (c > a ? c : a)
     }
     return a
 };
 KJE.gCategoryAxis.prototype.setVisible = function(a) {
     this._bShow = a
 };
 KJE.gGrid = function(a) {
     this._gGraph = a;
     this._showYGridLines = true;
     this._showXGridLines = false;
     this._lineWidth = KJE.giGridLineWidth
 };
 KJE.gGrid.prototype.setProperty = function(c) {
     var b = c.split("|");
     var a = KJE.sgv;
     for (var d = 0; d < b.length; d++) {
         switch (d) {
             case 0:
                 this._showYGridLines = a(b[d], this._showYGridLines);
                 break;
             case 1:
                 this._showXGridLines = a(b[d], this._showXGridLines);
                 break;
             case 2:
                 this._lineWidth = a(b[d], this._lineWidth);
                 break
         }
     }
 };
 KJE.gGrid.prototype.getProperty = function() {
     return this._showYGridLines + "|" + this._showXGridLines + "|" + this._lineWidth
 };
 KJE.gGrid.prototype.paint = function(q, n, m) {
     var j = this._gGraph._axisX._iDataLength;
     var p = this._gGraph._axisY._iDataLength;
     var d = q.createLinearGradient(0, 0, 0, p);
     d.addColorStop(0, this._gGraph._cGridBackground1);
     d.addColorStop(1, this._gGraph._cGridBackground2);
     q.fillStyle = d;
     q.fillRect(n, m, j, p + 1);
     q.beginPath();
     q.strokeStyle = this._gGraph._cGrid;
     q.lineWidth = this._lineWidth;
     q.strokeRect(n, m, j + 1, p);
     q.strokeStyle = this._gGraph._cAxisLine;
     q.beginPath();
     q.moveTo(n, m + p);
     q.lineTo(n + j, m + p);
     q.closePath();
     q.strokeStyle = this._gGraph._cGrid;
     var k, i, g;
     var b = this._gGraph.getValueCount();
     if (this._showXGridLines) {
         k = 0;
         i = 0;
         g = 0;
         for (var h = 0; h < b; h++) {
             g = this._axisX.getCategoryLeft(h);
             if (h == 0) {
                 k--
             }
             k = n + g;
             q.moveTo(k + 0.5, m);
             q.lineTo(k + 0.5, m + p)
         }
     }
     var f = 0;
     if (this._showYGridLines) {
         i = m;
         var a = this._gGraph._axisY._iLabelCount;
         var c = this._gGraph._axisY._iPixelsPerIncrement;
         var o = this._gGraph._axisY._iZeroIntersects;
         for (var e = 0; e < a; e++) {
             if (o + m == i) {
                 f = i
             }
             q.moveTo(n, i + 0.5);
             q.lineTo(n + j, i + 0.5);
             i = i + c
         }
     }
     q.strokeStyle = this._gGraph._cGrid;
     q.stroke();
     q.closePath();
     if (f) {
         q.beginPath();
         q.strokeStyle = this._gGraph._cAxisLine;
         q.moveTo(n, f + 0.5);
         q.lineTo(n + j, f + 0.5);
         q.stroke();
         q.closePath()
     }
 };
 KJE.gType = function(a) {
     this._iGraphType = a;
     this.bTitleHigher = false;
     this._gGraph = null;
     this.xPopup = new Array();
     this.yPopup = new Array();
     this.xArray = new Array();
     this.yArray = new Array();
     this.sItems = new Array()
 };
 KJE.gType.prototype.syncSetup = function(a) {
     this._gGraph = a;
     if (a.wTitle) {
         a.wTitle.style.fontColor = a._cTextColor;
         a._titleGraph.bShow = false
     }
     a._titleGraph.setFont(a.FONT_TITLE);
     a._titleXAxis.setFont(a.FONT_BOLD);
     a._titleYAxis.setFont(a.FONT_BOLD);
     a._titleGraph.setColor(a._cTextColor);
     a._titleXAxis.setColor(a._cTextColor);
     a._titleYAxis.setColor(a._cTextColor);
     switch (this._iGraphType) {
         case KJE.gCOLUMN:
             a._legend._legendType = KJE.gLegend.DATA_SERIES_LEGEND;
             a._axisX._fDataGapPercent = 0.05;
             this.bTitleHigher = true;
             break;
         case KJE.gCATEGORIES:
             a._legend._legendType = KJE.gLegend.CATEGORY_LEGEND;
             a._axisX._fDataGapPercent = 0.05;
             this.bTitleHigher = true;
             break;
         case KJE.gLINE:
             a._legend._legendType = KJE.gLegend.DATA_SERIES_LEGEND;
             a._axisX._fDataGapPercent = 100;
             this.bTitleHigher = false;
             a._axisX._bNoOffset = true;
             break;
         case KJE.gPIE:
             a._legend._legendType = KJE.gLegend.CATEGORY_LEGEND;
             this.bTitleHigher = false;
             break;
         case KJE.gSTACKED:
             a._legend._legendType = KJE.gLegend.DATA_SERIES_LEGEND;
             a._axisX._fDataGapPercent = -1;
             this.bTitleHigher = true;
             break
     }
 };
 KJE.gType.prototype.paint = function(s, q, E) {
     var w = this;
     var x = w._gGraph;
     var C = x._legend;
     var d = x._axisX;
     var b = x._axisY;
     var u = x._titleXAxis;
     var l = x._titleYAxis;
     var F = x._titleGraph;
     F.setTitle(s);
     C.setINF(s);
     x._axisX.setINF(s);
     x._axisY.setINF(s);
     u.setTitle(s, "");
     l.setTitle(s, x._axisY._sUnits);
     var G = w.bTitleHigher && x._showItemLabel && x._showItemLabelOnTop;
     var H = KJE.gBORDER_WIDTH;
     var A = KJE.gBORDER_WIDTH;
     var J = q - 2 * KJE.gBORDER_WIDTH;
     var z = E - 2 * KJE.gBORDER_WIDTH;
     var m = F._iHeight;
     var e = H;
     var h = A + (G ? Math.ceil(m / 2) : 0) + m + KJE.gBORDER_WIDTH;
     var f = J;
     var c = z - ((G ? Math.ceil(m / 2) : 0) + m + KJE.gBORDER_WIDTH);
     C.setSize(s);
     var D, i, p, j, K, a, y, o, L, B, k, n, g, I, r, t;
     switch (w._iGraphType) {
         case KJE.gPIE:
             D = e;
             i = h;
             p = f;
             j = c;
             K = f;
             a = c;
             y = e;
             o = h;
             L = e;
             B = h;
             k = f;
             n = c;
             g = e + C._iXOffset;
             I = h + C._iYOffset;
             r = f - C._iWidthOffset;
             t = c - C._iHeightOffset;
             break;
         default:
             D = e + C._iXOffset;
             i = h + C._iYOffset;
             p = f - C._iWidthOffset;
             j = c - C._iHeightOffset;
             K = p - l._iWidth - (KJE.gBORDER_WIDTH);
             a = j - u._iHeight - (KJE.gBORDER_WIDTH);
             d.setSize(s, K - b._iWidth);
             b.setSize(s, a - d._iHeight);
             y = D + l._iWidth + KJE.gBORDER_WIDTH;
             o = i + (b._iMaxLength - b._iHeight);
             L = y + b._iXOffset;
             B = o + d._iYOffset;
             k = d._iDataLength;
             n = b._iDataLength;
             g = L;
             I = B;
             r = k;
             t = n
     }
     switch (w._iGraphType) {
         case KJE.gPIE:
             break;
         default:
             x._grid.paint(s, L, B);
             u.paint(s, L, b._iDataLength + B + d._iHeight + u._iHeight / 2, k, u._iHeight);
             l.paint(s, D, B, l._iWidth, n);
             b.paint(s, y, o + d._iXOffset, k, n);
             d.paint(s, y + b._iXOffset, o, k, n)
     }
     switch (w._iGraphType) {
         case KJE.gCATEGORIES:
         case KJE.gCOLUMN:
             w.paintDataColumn(s, g, I, r, t);
             break;
         case KJE.gLINE:
             w.paintDataLine(s, g, I, r, t);
             break;
         case KJE.gPIE:
             w.paintDataPie(s, g, I, r, t);
             break;
         case KJE.gSTACKED:
             w.paintDataStacked(s, g, I, r, t);
             break
     }
     F.paint(s, H, A - (G ? Math.ceil(m / 4) : 0), J, m);
     C.paint(s, e, h, f, c, L, B, k, n)
 };
 KJE.gType.prototype.paintDataColumn = function(s, m, j, w, f) {
     var r;
     var K = this._gGraph;
     var A = KJE.gGraphColumn;
     var E = this;
     var c = K._axisX._iBarWidth;
     var t = K._axisY._fValuePerPixel;
     var g = K._axisX._iSpaceWidth;
     var F = K._axisX.getDataWidth();
     var q = K._axisY._fMinValue;
     var I = K._axisY._fMaxValue;
     var b = K._axisY._iZeroIntersects;
     var B = K.getValueCount();
     s.shadowColor = A._sSHADOW_COLOR;
     s.shadowBlur = A._sSHADOW_BLUR;
     s.shadowOffsetX = (c < A._sSHADOW_BLUR_X * 3 ? 0 : A._sSHADOW_BLUR_X);
     var p = s.shadowOffsetY = (c < A._sSHADOW_BLUR_X * 3 ? 0 : A._sSHADOW_BLUR_Y);
     s.lineWidth = A._LINE_WIDTH;
     var M = new Array();
     var a = new Array();
     var d = new Array();
     var L = 0;
     s.font = K.FONT_LEGEND;
     if (!K._showItemLabelOnTop) {
         L = -KJE.gGetFontHeight(s)
     }
     s.textAlign = "center";
     s.textBaseline = "bottom";
     var H = 0;
     var i = 0;
     var z = "";
     var e = (K._legend._legendType != KJE.gLegend.CATEGORY_LEGEND);
     var o = (K._sGraphCategoriesBold != null && K._legend._legendType == KJE.gLegend.CATEGORY_LEGEND);
     var h = K._axisX._sCategories;
     for (var J = 0; J < K._vDataSeries.length; J++) {
         if (e) {
             z = K._vDataSeries[J]._sSeriesPop
         }
         var D = -9191;
         var u = -9191;
         s.fillStyle = K._vDataSeries[J]._cColor;
         var l = K._vDataSeries[J]._fValues;
         var C;
         var k, G;
         M[J] = new Array();
         a[J] = new Array();
         d[J] = new Array();
         for (var r = 0; r < B; r++) {
             C = m + K._axisX.getCategoryLeft(r) + g + (J * F);
             H = l[r];
             if (H < 0) {
                 if (I < 0) {
                     k = j;
                     G = (-1) * Math.round((H + I) * t)
                 } else {
                     k = j + b;
                     G = (-1) * Math.round(H * t)
                 }
             } else {
                 if (q > 0) {
                     G = Math.round((H - q) * t);
                     k = j + f - G
                 } else {
                     G = Math.round(H * t);
                     k = j + b - G
                 }
             }
             s.beginPath();
             if (K._legend._legendType == KJE.gLegend.CATEGORY_LEGEND) {
                 s.fillStyle = K.getColor(r + 1)
             } else {
                 s.fillStyle = K._vDataSeries[J]._cColor
             }
             s.strokeStyle = s.fillStyle;
             s.shadowOffsetY = p;
             s.fillRect(C, k, c, G);
             s.shadowOffsetY = "0";
             s.fillRect(C, k, c, G);
             if (K._iArea == KJE.gGraphColumn.LINE_ON_ALL || (K._iArea == KJE.gGraphColumn.LINE_ON_FIRST_ONLY && J == 0)) {
                 s.lineWidth = KJE.gGraphLine._LINE_WIDTH;
                 s.shadowOffsetY = KJE.gGraphLine._sSHADOW_BLUR_Y;
                 if (u != -9191) {
                     s.beginPath();
                     s.moveTo(D + c / 2, u);
                     s.lineTo(C + c / 2, k);
                     s.stroke()
                 }
                 D = C;
                 u = k
             }
             s.closePath();
             M[J][r] = K.getFormat(l[r], J, r);
             E.xPopup[i] = (C + c / 2) / KJE.gSCALE;
             E.yPopup[i] = (k + G) / KJE.gSCALE;
             E.xArray[i] = new Array(4);
             E.yArray[i] = new Array(4);
             E.xArray[i][0] = C / KJE.gSCALE;
             E.yArray[i][0] = k / KJE.gSCALE;
             E.xArray[i][1] = (C + c) / KJE.gSCALE;
             E.yArray[i][1] = E.yArray[i][0];
             E.xArray[i][2] = E.xArray[i][1];
             E.yArray[i][2] = (k + G) / KJE.gSCALE;
             E.xArray[i][3] = E.xArray[i][0];
             E.yArray[i][3] = E.yArray[i][2];
             E.sItems[i++] = z + " " + (h ? h[r] : "") + (o ? (K._sGraphCategoriesBold[r] ? K._sGraphCategoriesBold[r] : "") : "") + (K._bPopDetail ? KJE.Colon + " " + M[J][r] : "");
             a[J][r] = C + c / 2;
             d[J][r] = k - L
         }
     }
     E.xArray.length = i;
     E.yArray.length = i;
     E.sItems.length = i;
     s.shadowBlur = "0";
     s.shadowOffsetX = "0";
     s.shadowOffsetY = "0";
     s.fillStyle = K._cTextColor;
     if (K._showItemLabel) {
         for (J = 0; J < M.length; J++) {
             for (r = 0; r < M[J].length; r++) {
                 s.beginPath();
                 s.fillText(KJE.FTR(M[J][r]), a[J][r], d[J][r]);
                 s.closePath()
             }
         }
     }
 };
 KJE.gType.prototype.paintDataLine = function(p, j, g, t, d) {
     var b = KJE;
     var k = b.gGraphLine;
     var c = KJE.gSCALE;
     var E = this._gGraph;
     var B = this;
     var q = E._axisY._fValuePerPixel;
     var o = E._axisY._fMinValue;
     var C = E._axisY._fMaxValue;
     var a = E._axisY._iZeroIntersects;
     var w = E.getValueCount();
     var f = 0;
     var r = k._CLICKABLE;
     p.shadowBlur = k._sSHADOW_BLUR;
     p.shadowColor = k._sSHADOW_COLOR;
     p.shadowOffsetX = k._sSHADOW_BLUR_X;
     p.lineWidth = k._LINE_WIDTH;
     p.shadowOffsetY = k._sSHADOW_BLUR_Y;
     var e = E._axisX._sCategories;
     for (var D = 0; D < E._vDataSeries.length; D++) {
         var u = E._vDataSeries[D]._sSeriesPop;
         var l = E._vDataSeries[D]._bNoPopDetails;
         p.fillStyle = E._vDataSeries[D]._cColor;
         p.strokeStyle = E._vDataSeries[D]._cColor;
         var i = E._vDataSeries[D]._fValues;
         var A;
         var h;
         var z = -9191;
         var s = -9191;
         for (var m = 0; m < w; m++) {
             A = j + E._axisX.getCategoryLeft(m) - 0.5;
             h = a - Math.round(i[m] * q) + 0.5;
             if (C < 0) {
                 h = (-1) * Math.round((i[m] + C) * q)
             } else {
                 if (o > 0) {
                     h = d - (Math.round((i[m] - o) * q))
                 }
             }
             h += g;
             if (s != -9191) {
                 p.beginPath();
                 p.strokeStyle = E._vDataSeries[D]._cColor;
                 p.fillStyle = E._vDataSeries[D]._cColor;
                 if (E._iArea == k.AREA_ALL || (E._iArea == k.AREA_FIRST_ONLY && D == 0) || (E._iArea == k.AREA_SECOND_ONLY && D == 1)) {
                     p.moveTo(z, g + d);
                     p.lineTo(z, s);
                     p.lineTo(A + 0.5, h);
                     p.lineTo(A + 0.5, g + d);
                     p.lineTo(z, g + d);
                     p.fill()
                 } else {
                     p.moveTo(A + 0.5, h);
                     p.lineTo(z, s);
                     p.stroke()
                 }
             }
             B.xPopup[f] = (A - 5) / c;
             B.yPopup[f] = (h + 5) / c;
             B.xArray[f] = KJE.IntArray(4);
             B.yArray[f] = KJE.IntArray(4);
             B.xArray[f][0] = (A - r) / c;
             B.yArray[f][0] = (h - r) / c;
             B.xArray[f][1] = (A + r) / c;
             B.yArray[f][1] = B.yArray[f][0];
             B.xArray[f][2] = B.xArray[f][1];
             B.yArray[f][2] = (h + r) / c;
             B.xArray[f][3] = B.xArray[f][0];
             B.yArray[f][3] = B.yArray[f][2];
             B.sItems[f++] = u + (l ? "" : " " + (e ? e[m] : "") + (E._bPopDetail ? b.Colon + " " + E.getFormat(i[m], D, m) : ""));
             z = A;
             s = h
         }
     }
     B.xArray.length = f;
     B.yArray.length = f;
     B.sItems.length = f
 };
 KJE.gType.prototype.paintDataPie = function(r, b, a, B, d) {
     var F = 0;
     var D = this._gGraph;
     var A = this;
     var l = D._vDataSeries[0]._fValues;
     for (var q = 0; q < l.length; q++) {
         F += l[q]
     }
     var k = Math.round(B / 2 + b);
     var j = Math.round(d / 2 + a);
     var E = 0;
     if (B / d) {
         E = Math.floor(d / 24);
         j -= Math.ceil(E / 2) + 1;
         d -= Math.ceil(E) + 1
     }
     r.save();
     var g = (B > d ? B / d : 1);
     var f = (B > d ? 1 : d / B);
     k = k / g;
     j = j / f;
     r.scale(g, f);
     var c = Math.round(Math.min(B / 2, d / 2));
     var s = 0;
     var z = 0;
     r.shadowBlur = 10;
     r.shadowOffsetX = E;
     r.shadowOffsetY = E;
     r.lineWidth = KJE.gGraphPie._LINE_WIDTH;
     r.lineJoin = KJE.gGraphPie._LINE_JOIN;
     r.fillStyle = KJE.gGraphPie._LINE_COLOR;
     var h = D._axisX._sCategories;
     if (F <= 0) {
         r.fillStyle = KJE.gDarker(D.getColor(1), 0.5);
         r.shadowColor = r.fillStyle;
         r.beginPath();
         r.moveTo(k, j);
         r.arc(k, j, c, 0, Math.PI * 2, true);
         r.lineTo(k, j);
         r.closePath();
         r.stroke();
         r.fill();
         r.fillStyle = D.getColor(1);
         r.strokeStyle = KJE.gDarker(D.getColor(1), 0.6);
         r.beginPath();
         r.moveTo(k, j);
         r.arc(k, j, c, 0, Math.PI * 2, true);
         r.lineTo(k, j);
         r.closePath();
         r.stroke();
         r.fill()
     }
     if (F > 0) {
         for (var u = (l.length - 1); u >= 0; u--) {
             if (l[u] != 0) {
                 z = (l[u] / F);
                 r.fillStyle = KJE.gDarker(D.getColor(u + 1), 0.5);
                 r.shadowColor = r.fillStyle;
                 r.beginPath();
                 r.moveTo(k, j);
                 var w = s * Math.PI * 2;
                 var t = ((u == 0 && l[u] > 0) ? 0 : (s + z) * Math.PI * 2);
                 r.arc(k, j, c, w, t, false);
                 r.lineTo(k, j);
                 r.closePath();
                 r.fill();
                 s += z
             }
         }
         s = 0;
         r.shadowBlur = 0;
         r.shadowOffsetX = 0;
         r.shadowOffsetY = 0;
         var m = 0;
         for (u = (l.length - 1); u >= 0; u--) {
             if (l[u] != 0) {
                 z = (l[u] / F);
                 r.fillStyle = D.getColor(u + 1);
                 r.strokeStyle = KJE.gDarker(D.getColor(u + 1), 0.6);
                 r.beginPath();
                 r.moveTo(k, j);
                 var w = s * Math.PI * 2;
                 var t = ((u == 0 && l[u] > 0) ? 0 : (s + z) * Math.PI * 2);
                 r.arc(k, j, c, w, t, false);
                 r.lineTo(k, j);
                 r.closePath();
                 r.stroke();
                 r.fill();
                 z = (l[u] / F);
                 var e = Math.ceil(z * 20 + 0.01);
                 A.xArray[m] = KJE.IntArray(e + 2);
                 A.yArray[m] = KJE.IntArray(e + 2);
                 A.xArray[m][0] = (k * g) / KJE.gSCALE;
                 A.yArray[m][0] = (j * f) / KJE.gSCALE;
                 var C = (z / e);
                 for (var o = 0; o < e; o++) {
                     A.xArray[m][o + 1] = ((k + c * Math.cos((s + C * o) * Math.PI * 2)) * g) / KJE.gSCALE;
                     A.yArray[m][o + 1] = ((j + c * Math.sin((s + C * o) * Math.PI * 2)) * f) / KJE.gSCALE;
                     if (o == Math.floor(e / 2)) {
                         A.xPopup[m] = ((k + (c * 0.75) * Math.cos((s + C * o) * Math.PI * 2)) * g) / KJE.gSCALE - 5;
                         A.yPopup[m] = ((j + (c * 0.75) * Math.sin((s + C * o) * Math.PI * 2)) * f) / KJE.gSCALE + 10
                     }
                 }
                 A.xArray[m][e + 1] = ((k + c * Math.cos((s + z) * Math.PI * 2)) * g) / KJE.gSCALE;
                 A.yArray[m][e + 1] = ((j + c * Math.sin((s + z) * Math.PI * 2)) * f) / KJE.gSCALE;
                 A.sItems[m] = (h ? h[u] : "") + (D._bPopDetail ? KJE.Colon + " " + D.getFormat(l[u], 0, u) : "");
                 s += z;
                 m++
             }
         }
         A.xArray.length = m;
         A.yArray.length = m;
         A.sItems.length = m;
         A.xPopup.length = m;
         A.yPopup.length = m
     }
     r.restore()
 };
 KJE.gType.prototype.paintDataStacked = function(p, F, E, Q, M) {
     var C = this._gGraph;
     var d = C._axisY;
     var e = C._axisX;
     var J = KJE.gGraphColumn;
     var A = this;
     var G = e._iBarWidth;
     var a = d._fValuePerPixel;
     var z = e._iSpaceWidth;
     var r = e.getDataWidth();
     var c = d._fMinValue;
     var g = d._fMaxValue;
     var h = d._iZeroIntersects;
     var s = C.getValueCount();
     var m = new Array();
     var u = new Array();
     var k = new Array();
     var I = new Array();
     var N = A.xArray;
     var o = A.yArray;
     var t = A.sItems;
     var l = A.xPopup;
     var K = A.yPopup;
     var j = e._sCategories;
     p.shadowColor = J._sSHADOW_COLOR;
     p.shadowBlur = J._sSHADOW_BLUR;
     p.shadowOffsetX = (G < J._sSHADOW_BLUR_X * 3 ? 0 : J._sSHADOW_BLUR_X);
     var b = p.shadowOffsetY = (G < J._sSHADOW_BLUR_X * 3 ? 0 : J._sSHADOW_BLUR_Y);
     p.lineWidth = J._LINE_WIDTH;
     p.font = C.FONT_LEGEND;
     p.textAlign = "center";
     p.textBaseline = "bottom";
     var i = 5;
     if (!C._showItemLabelOnTop) {
         i = -KJE.gGetFontHeight(p)
     }
     var D = null;
     for (var H = 0; H < C._vDataSeries.length; H++) {
         D = C._vDataSeries[H]._fValues;
         for (var O = 0; O < D.length; O++) {
             m[O] = D[O] + (m[O] ? m[O] : 0)
         }
     }
     for (O = 0; O < m.length; O++) {
         u[O] = C.getFormat(m[O], H - 1, O)
     }
     var R = 0;
     var q = 0;
     for (H = 0; H < C._vDataSeries.length; H++) {
         var w = C._vDataSeries[H]._sSeriesPop;
         var P = 0;
         var B = 0;
         var f = 0;
         D = C._vDataSeries[H]._fValues;
         for (O = 0; O < s; O++) {
             P = F + e.getCategoryLeft(O) + z + (H * r);
             R = (m[O]);
             m[O] -= D[O];
             if (R < 0) {
                 if (g < 0) {
                     B = E;
                     f = (-1) * Math.round((R + g) * a)
                 } else {
                     B = E + h;
                     f = (-1) * Math.round(R * a)
                 }
             } else {
                 if (c > 0) {
                     f = Math.round((R - c) * a);
                     B = E + M - f
                 } else {
                     f = Math.round(R * a);
                     B = E + h - f
                 }
             }
             p.beginPath();
             p.fillStyle = C._vDataSeries[H]._cColor;
             if (H == 0) {
                 p.shadowOffsetY = b;
                 p.fillRect(P, B, G, f);
                 k[O] = P + G / 2;
                 I[O] = B - i
             }
             p.shadowOffsetY = "0";
             p.fillRect(P, B, G, f);
             var L = B + Math.floor(D[O] * a);
             l[q] = (P + G / 2) / KJE.gSCALE;
             K[q] = L / KJE.gSCALE;
             N[q] = new Array(4);
             o[q] = new Array(4);
             N[q][0] = P / KJE.gSCALE;
             o[q][0] = B / KJE.gSCALE;
             N[q][1] = (P + G) / KJE.gSCALE;
             o[q][1] = o[q][0];
             N[q][2] = N[q][1];
             o[q][2] = L / KJE.gSCALE;
             N[q][3] = N[q][0];
             o[q][3] = o[q][2];
             t[q++] = w + (C._bPopCat && j ? " " + e._sCategories[O] : "") + (C._bPopDetail ? KJE.Colon + " " + C.getFormat(D[O], H, O) : "")
         }
     }
     N.length = q;
     o.length = q;
     t.length = q;
     p.shadowBlur = "0";
     p.shadowOffsetX = "0";
     p.shadowOffsetY = "0";
     p.fillStyle = C._cTextColor;
     if (C._showItemLabel) {
         for (O = 0; O < m.length; O++) {
             p.beginPath();
             p.fillText(KJE.FTR(u[O]), k[O], I[O]);
             p.closePath()
         }
     }
 };
 KJE.gType.prototype.poly = function(e, f, a, k) {
     var d, b, h = 0;
     if (e) {
         var g = e.length;
         for (d = 0, b = g - 1; d < g; b = d++) {
             if ((((f[d] <= k) && (k < f[b])) || ((f[b] <= k) && (k < f[d]))) && (a < (e[b] - e[d]) * (k - f[d]) / (f[b] - f[d]) + e[d])) {
                 h = !h
             }
         }
     }
     return h
 };
 KJE.gType.prototype.getWedgeValue = function(a, i) {
     var e = this;
     var g = e.xArray;
     var f = e.yArray;
     var d = e.sItems.length;
     for (var b = d; b > -1; b--) {
         var h = e.poly(g[b], f[b], a, i);
         if (h) {
             return {
                 x: e.xPopup[b],
                 y: e.yPopup[b],
                 s: e.sItems[b]
             }
         }
     }
     return null
 };
 KJE.FTR = function(a) {
     return a
 };
 // Calculator backgrounds and colors
 KJE.ErrorBackground = "#FF7777"; // backgroundColor
 KJE.IncompleteBackground = "#FFFF77";
 KJE.ClearColor = "#FFFFFF";
 KJE.colorList = ["#ffffff", "#ffffff", "#F0E68C", "#5F3240", "#FABB50", "#DECBCB", "#CCCCCC", "#CCCCDD", "#CCDDCC", "#CCDDDD", "#CCCCDD"];

 // Report Header and Footer
 KJE.ReportHeader = "<div class='KJEReportTitleBlock'><div class='KJEReportTitle'>**REPORT_TITLE**</div></div>";
 KJE.ReportFooter = "<div class=KJECenter><p class='KJEReportFooter KJECenter'>Information and interactive calculators are made available to you as self-help tools for your independent use and are not intended to provide investment advice. We cannot and do not guarantee their applicability or accuracy in regards to your individual circumstances. All examples are hypothetical and are for illustrative purposes.  We encourage you to seek personalized advice from qualified professionals regarding all personal finance issues.</p></div>";

 // Graph fonts, colors and heights
 KJE.gFont = ["Arial", "Helvetica", "Helvetica"];
 KJE.gFontStyle = ["bold", "bold", ""];
 KJE.gFontSize = [13, 10, 10];
 KJE.gHeight = 250;
 KJE.gHeightReport = 350;
 KJE.gColorBackground = "#FFFFFF";
 KJE.gColorForeground = "#000000";
 KJE.gColorGrid = "#BBBBBB";
 KJE.gColorGridBackground1 = "#FFFFFF";
 KJE.gColorGridBackground2 = "#CCCCCC";
 KJE.gColorAxisLine = "#666666";
 KJE.gColorText = "#000000";
 KJE.gColorList = ["#febe40", "#B8CBE4", "#29466D", "#DBE4F2", "#5f007f", "#F15A22", "#B72467", "#6DC8BF", "#00007f", "#ff00ff", "#ffff00", "#00ffff", "#7f007f", "#7f0000", "#007f7f", "#0000ff", "#00c8ff", "#60ffff", "#bfffbf", "#ffff90", "#a0c8ef"];

 //Fix for nested forms
 KJE.bUseInputForm = false;
 // Splash Screen
 KJE.SplashContent = "Calculators provided <br/><br/>";

 var oDefinitions = document.getElementById("br-definition");
 if (oDefinitions !== null) {
     KJE.ShowDefinitions = false;
     KJE.customInit = function() {
         // var oDefinitions = document.getElementById("yourdef");
         oDefinitions.innerHTML = KJE.DefinitionText;
     }
 }




 function mapCalcValues(qsParam) { // pass array of maps
     qsParam.map(function(item) { //0=Querystring parameter, 1=Dinkytown var 2= value is boolean true/false
         var qs = getParameterByName(item[0]);
         if (qs) {
             if (typeof item[2] == 'boolean') {
                 KJE.parameters.set(item[1], !!parseInt(qs));
             } else {
                 KJE.parameters.set(item[1], qs);
             }
         }
     });

 }

 function getParameterByName(name) {
     name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
     var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
         results = regex.exec(location.search);
     return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
 }
 KJE.SocialSecurityCalc = function() {
     this.iDecimal = 0;
     this.ADJUST_ONLY = false;
     this.SOCIAL_SECURITY_CURRENT_MAX = 127200;
     this.SOCIAL_SECURITY_AP_MAX = 32244;
     this.SOCIAL_SECURITY_MAX_RATIO = 0.25349;
     this.SOCIAL_EARLIEST_RETIRE_AGE = 62;
     this.SOCIAL_NORMAL_RETIRE_AGE = 67;
     this.SOCIAL_LATEST_RETIRE_AGE = 70;
     this.EARLY_DISCOUNTS = [0.7, 0.75, 0.8, 0.86666, 0.93333, 1];
     this.EARLY_AGE_CUTOFFS = [75, 61, 0];
     this.AGE_FULL_BENEFITS = [65, 66, 67];
     this.LATE_AGE_CUTOFFS = [71, 0];
     this.LATE_AGE_INCREASES = [0.075, 0.08];
     this.SOCIAL_SPOUSE_BENEFIT = 0.5;
     this.SOCIAL_FULL_BENEFIT_AMT = 0;
     this.cats = null;
     this.DS_SOCIAL_PAYMENTS = null;
     this.DR_SOCIAL_PAYMENTS = null;
     this.MSG_SUMMARY_TEXT = KJE.parameters.get("MSG_SUMMARY_TEXT", "Social Security may provide KJE1");
     this.MSG_GRAPH3 = KJE.parameters.get("MSG_GRAPH3", "Estimated Monthly Benefits");
     this.MSG_SUMMARY_TEXT2 = KJE.parameters.get("MSG_SUMMARY_TEXT2", "If you start collecting your benefits at age KJE2 you could receive approximately KJE3 per year or KJE4 per month. This is KJE5 of your final year's income of KJE6. This is only an estimate. Actual benefits depend on work history and the complete compensation rules used by Social Security.");
     this.SUMMARY_TEXT = "";
     this.SUMMARY_TEXT2 = "";
     this.WAGE_CUTOFFS = [10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, this.SOCIAL_SECURITY_CURRENT_MAX];
     this.SOCIAL_FULL_BENEFIT = [0.6096, 0.4878, 0.3972, 0.3525, 0.3252, 0.3072, 0.2943, 0.2847, 0.2684, this.SOCIAL_SECURITY_MAX_RATIO];
     this.sSchedule = new KJE.Repeating()
 };
 KJE.SocialSecurityCalc.prototype.clear = function() {
     this.CURRENT_AGE = 0;
     this.HOUSEHOLD_INCOME = 0;
     this.SALARY_PERCENT = 0;
     this.SOCIAL_SECURITY_INCREASE_RATE = 0;
     this.MARRIED = 0;
     this.AGE_OF_RETIREMENT = 0
 };
 KJE.SocialSecurityCalc.prototype.calculate = function(G) {
     var g = KJE;
     var k = this.CURRENT_AGE;
     var s = this.HOUSEHOLD_INCOME;
     var c = this.SALARY_PERCENT;
     var q = this.SOCIAL_SECURITY_INCREASE_RATE;
     var m = this.MARRIED;
     var H = this.AGE_OF_RETIREMENT;
     var J = 0;
     var d = 0;
     var o = 0;
     var C = 0;
     var z = 0;
     var a = 0;
     var r = 65;
     var B = 0;
     var b = 0;
     var F = 0;
     var A = 0;
     var D = q / 100;
     if (H < this.SOCIAL_EARLIEST_RETIRE_AGE) {
         C = this.SOCIAL_EARLIEST_RETIRE_AGE
     } else {
         C = H
     }
     for (var v = 0; v < this.EARLY_AGE_CUTOFFS.length; v++) {
         if (this.EARLY_AGE_CUTOFFS[v] < k) {
             r = this.AGE_FULL_BENEFITS[v];
             break
         }
     }
     for (v = 0; v < this.LATE_AGE_CUTOFFS.length; v++) {
         if (k >= this.LATE_AGE_CUTOFFS[v]) {
             F = this.LATE_AGE_INCREASES[v];
             break
         }
     }
     if (!this.ADJUST_ONLY) {
         this.SOCIAL_FULL_BENEFIT_AMT = 0;
         b = r - k;
         var f = b - 1;
         f = (f < 0 ? 0 : f);
         d = g.round(KJE.FV_AMT(D, f, this.SOCIAL_SECURITY_CURRENT_MAX), 2);
         this.WAGE_CUTOFFS[this.WAGE_CUTOFFS.length - 1] = this.SOCIAL_SECURITY_CURRENT_MAX;
         J = KJE.FV_AMT(c / 100, f, s);
         var t = J;
         this.SOCIAL_FULL_BENEFIT_PERCENT = (this.SOCIAL_FULL_BENEFIT[this.SOCIAL_FULL_BENEFIT.length - 1] * d) / t;
         for (var u = 0; u < this.WAGE_CUTOFFS.length; u++) {
             if (t < KJE.FV_AMT(D, f, this.WAGE_CUTOFFS[u])) {
                 if (u == 0) {
                     this.SOCIAL_FULL_BENEFIT_PERCENT = this.SOCIAL_FULL_BENEFIT[u]
                 } else {
                     var e = KJE.FV_AMT(D, f, this.WAGE_CUTOFFS[u]);
                     var j = KJE.FV_AMT(D, f, this.WAGE_CUTOFFS[u - 1]);
                     var E = e - j;
                     var I = e - t;
                     var w = I / E;
                     this.SOCIAL_FULL_BENEFIT_PERCENT = this.SOCIAL_FULL_BENEFIT[u] + (this.SOCIAL_FULL_BENEFIT[u - 1] - this.SOCIAL_FULL_BENEFIT[u]) * w
                 }
                 break
             }
         }
         if (m > 0) {
             this.SOCIAL_FULL_BENEFIT_PERCENT = this.SOCIAL_FULL_BENEFIT_PERCENT * (1 + this.SOCIAL_SPOUSE_BENEFIT)
         }
         this.SOCIAL_FULL_BENEFIT_AMT = g.round(this.SOCIAL_FULL_BENEFIT_PERCENT * t, 0);
         if (m > 0) {
             this.SOCIAL_FULL_BENEFIT_PERCENT = this.SOCIAL_FULL_BENEFIT_AMT / J
         }
     }
     var l = this.SOCIAL_LATEST_RETIRE_AGE - this.SOCIAL_EARLIEST_RETIRE_AGE + 1;
     this.cats = new Array(l);
     this.DS_SOCIAL_PAYMENTS = new Array(l);
     this.DR_SOCIAL_PAYMENTS = new Array(l);
     for (v = 0; v < l; v++) {
         this.cats[v] = g.number(this.SOCIAL_EARLIEST_RETIRE_AGE + v);
         if (this.SOCIAL_EARLIEST_RETIRE_AGE + v <= r) {
             this.DR_SOCIAL_PAYMENTS[v] = g.round(this.SOCIAL_FULL_BENEFIT_AMT * this.EARLY_DISCOUNTS[v + this.SOCIAL_NORMAL_RETIRE_AGE - r], 0)
         } else {
             this.DR_SOCIAL_PAYMENTS[v] = g.round(this.SOCIAL_FULL_BENEFIT_AMT * (1 + F * (this.SOCIAL_EARLIEST_RETIRE_AGE - r + v)), 0)
         }
         if (C == (this.SOCIAL_EARLIEST_RETIRE_AGE + v)) {
             var y = (C - k - 1);
             A = KJE.FV_AMT(c / 100, y < 0 ? 0 : y, s);
             a = this.DR_SOCIAL_PAYMENTS[v] / A;
             o = this.DR_SOCIAL_PAYMENTS[v];
             z = this.DR_SOCIAL_PAYMENTS[v] / 12
         }
     }
     if (G) {
         var h = this.sSchedule;
         h.clearRepeat();
         h.addHeader(h.sReportCol("Age<br />Benefits Begin", 1), h.sReportCol("Amount<br />per Month", 2), h.sReportCol("Amount<br />per Year", 3))
     }
     var x = 0;
     for (v = 1; v <= l; v++) {
         x = v - 1;
         this.DS_SOCIAL_PAYMENTS[x] = this.DR_SOCIAL_PAYMENTS[x] / 12;
         if (G) {
             h.addRepeat(g.number(x + this.SOCIAL_EARLIEST_RETIRE_AGE, 0), g.dollars(this.DR_SOCIAL_PAYMENTS[x] / 12), g.dollars(this.DR_SOCIAL_PAYMENTS[x]))

         }
     }
     this.FUTURE_HOUSEHOLD_INCOME = J;
     this.SOCIAL_SECURITY_MAX = d;
     this.SOCIAL_AT_RETIRE_AMT = o;
     this.SOCIAL_AT_RETIRE_AGE = C;
     this.SOCIAL_AT_RETIRE_AMT_MONTHLY = z;
     this.SOCIAL_AT_RETIRE_PERCENT = a;
     this.SOCIAL_FULL_BENEFIT_AGE = r;
     this.SOCIAL_FULL_BENEFIT_PERCENT = B;
     this.YEARS_UNTIL_SOCIAL_FULL_BENEFITS = b;
     this.SOCIAL_DELAYED_RETIRE_PERCENT = F;
     this.HOUSEHOLD_INCOME_AT_RETIRE = A
 };
 KJE.SocialSecurityCalc.prototype.formatReport = function(b) {
     var c = KJE;
     var a = this.iDecimal;
     var d = b;
     d = KJE.replace("FUTURE_HOUSEHOLD_INCOME", c.dollars(this.FUTURE_HOUSEHOLD_INCOME), d);
     d = KJE.replace("HOUSEHOLD_INCOME_AT_RETIRE", c.dollars(this.HOUSEHOLD_INCOME_AT_RETIRE), d);
     d = KJE.replace("SOCIAL_SECURITY_MAX", c.dollars(this.SOCIAL_SECURITY_MAX), d);
     d = KJE.replace("SOCIAL_AT_RETIRE_AGE", c.number(this.SOCIAL_AT_RETIRE_AGE), d);
     d = KJE.replace("SOCIAL_AT_RETIRE_AMT_MONTHLY", c.dollars(this.SOCIAL_AT_RETIRE_AMT_MONTHLY), d);
     d = KJE.replace("SOCIAL_AT_RETIRE_AMT", c.dollars(this.SOCIAL_AT_RETIRE_AMT), d);
     d = KJE.replace("SOCIAL_AT_RETIRE_PERCENT", c.percent(this.SOCIAL_AT_RETIRE_PERCENT, 2), d);
     d = KJE.replace("SOCIAL_FULL_BENEFIT_AMT", c.dollars(this.SOCIAL_FULL_BENEFIT_AMT), d);
     d = KJE.replace("SOCIAL_FULL_BENEFIT_AGE", c.number(this.SOCIAL_FULL_BENEFIT_AGE), d);
     d = KJE.replace("SOCIAL_FULL_BENEFIT_PERCENT", c.percent(this.SOCIAL_FULL_BENEFIT_PERCENT, 2), d);
     d = KJE.replace("YEARS_UNTIL_SOCIAL_FULL_BENEFITS", c.number(this.YEARS_UNTIL_SOCIAL_FULL_BENEFITS), d);
     d = KJE.replace("CURRENT_AGE", c.number(this.CURRENT_AGE), d);
     d = KJE.replace("HOUSEHOLD_INCOME", c.dollars(this.HOUSEHOLD_INCOME), d);
     d = KJE.replace("SALARY_PERCENT", c.percent(this.SALARY_PERCENT / 100, 2), d);
     d = KJE.replace("MARRIED", c.yesno(this.MARRIED), d);
     d = KJE.replace("AGE_OF_RETIREMENT", c.number(this.AGE_OF_RETIREMENT), d);
     d = KJE.replace("SOCIAL_SECURITY_CURRENT_MAX", c.dollars(this.SOCIAL_SECURITY_CURRENT_MAX), d);
     d = KJE.replace("SOCIAL_SECURITY_INCREASE_RATE", c.percent(this.SOCIAL_SECURITY_INCREASE_RATE / 100, 2), d);
     d = KJE.replace("INFLATION_RATE", c.percent(this.SOCIAL_SECURITY_INCREASE_RATE / 100, 2), d);
     d = KJE.replace("SOCIAL_EARLIEST_RETIRE_AGE", c.number(this.SOCIAL_EARLIEST_RETIRE_AGE), d);
     d = KJE.replace("SOCIAL_LATEST_RETIRE_AGE", c.number(this.SOCIAL_LATEST_RETIRE_AGE), d);
     d = KJE.replace("SOCIAL_DELAYED_RETIRE_PERCENT", c.percent(this.SOCIAL_DELAYED_RETIRE_PERCENT, 2), d);
     d = d.replace("**REPEATING GROUP**", this.sSchedule.getRepeat());
     this.sSchedule.clearRepeat();
     return d
 };
 KJE.SocialSecurityCalc.prototype.formatGraph = function(a, b) {
     b[0].setTitle(this.MSG_GRAPH3);
     b[0].setTitleGraph(this.MSG_GRAPH3);
     b[0].show(true);
     b[0].paint()
 };
 KJE.RetirementPlanCalc = function() {
     this.SHOW_SOCIAL = KJE.parameters.get("SHOW_SOCIAL", true);
     this.MSG_ERROR1 = KJE.parameters.get("MSG_ERROR1", "Both current savings and monthly income cannot be zero.");
     this.MSG_ERROR2 = KJE.parameters.get("MSG_ERROR2", "Current age must be less than retirement age.");
     this.MSG_ERROR3 = KJE.parameters.get("MSG_ERROR3", "Start age can't be less than retirement age.");
     this.NEST_EGG = KJE.parameters.get("NEST_EGG", false);
     this.MSG_GRAPH_TITLE = KJE.parameters.get("MSG_GRAPH_TITLE", "You need to save KJE1 per month to meet your retirement needs.");
     this.MSG_TITLE = KJE.parameters.get("MSG_TITLE", "You may need KJE1 to retire at age KJE2");
     this.MSG_LABEL_3 = KJE.parameters.get("MSG_LABEL_3", "Your plan is on track.");
     this.MSG_LABEL_4 = KJE.parameters.get("MSG_LABEL_4", "You may need to save more.");
     this.MSG_RUNOUT = KJE.parameters.get("MSG_RUNOUT_BOLD", "Retirement savings runs out at age AGE_RUN_OUT.");
     this.MSG_SUCCESS = KJE.parameters.get("MSG_SUCCESS_BOLD", "Balance at end of retirement is ENDING_BALANCE.");
     this.MSG_RESULT = KJE.parameters.get("MSG_SUCCESS", "Your plan provides KJE1 when you retire. This assumes annual retirement expenses of KJE2 which is KJE3 of your last year's income of KJE4.");
     this.MSG_RESULT_SOCIAL = KJE.parameters.get("MSG_RESULT_SOCIAL", "If you have selected to include NZ Superannuation payments, these are included below and will be inflation-adjusted if you expect inflation. ");
     this.MSG_RESULT_EXTRA = KJE.parameters.get("MSG_RESULT_EXTRA", "");
     this.MSG_RESULT_EXTRA_GRAPH = KJE.parameters.get("MSG_RESULT_EXTRA_GRAPH", "");
     this.MSG_SUCCESS_REPORT = KJE.parameters.get("MSG_SUCCESS_REPORT", "Does not run out of funds.");
     this.MSG_RUNOUT_REPORT = KJE.parameters.get("MSG_RUNOUT_REPORT", "Retirement funds run out at age KJE1.");
     this.MSG_INFLATION_REPORT = KJE.parameters.get("MSG_INFLATION_REPORT", "This amount is increased INFLATION_RATE each year until you retire and through your retirement to account for inflation.");
     this.MSG_SOCIAL_SECURITY = KJE.parameters.get("MSG_SOCIAL_SECURITY", "If you have selected to include NZ Superannuation payments, these are included below and will be inflation-adjusted if you expect inflation. ");
     this.MSG_START_OF_MESSAGE = KJE.parameters.get("MSG_START_OF_MESSAGE", "");
     this.MSG_GRAPH_REPORT_TITLE = KJE.parameters.get("MSG_GRAPH_REPORT_TITLE", "Retirement Savings and Expenditures");
     this.sGraph2 = KJE.parameters.get("GRAPH_2", "Savings for retirement");
     this.sGraph3 = KJE.parameters.get("GRAPH_3", "Total expenses");
     this.bATRETIREMENT = false;
     this.iDecimals = 0;
     this.RESPONSE = "";
     this.RESPONSE1 = "";
     this.RESPONSE2 = "";
     this.START_OF_MESSAGE = "";
     this.INCREASE_ANNUAL_SAVINGS = (this.NEST_EGG ? false : true);
     this.YEARS_OF_RETIREMENT = 0;
     this.dAdjustedSavingsRate = 0;
     this.dAdjustedRorRate = 0;
     this.dAdjustedSalaryPercent = 0;
     this.dAdjusteYearsToRetirement = 0;
     this.RESULTS_MSG = "";
     this.INCOME_PERCENT = 0;
     this.AGE_RUN_OUT = 0;
     this.END_OF_RETIREMENT_MESSAGE = "";
     this.SOCIAL_SECURITY_INCREASE_RATE = 0.024;
     this.CURRENT_TAX = 0;
     this.RETIREMENT_TAX = 0;
     this.RETIREMENT_TAX_WITHDRAWALS = false;
     this.SOCIAL_SECURITY_TAX_WITHDRAWALS = false;
     this.USE_NET_INCOME = KJE.parameters.get("USE_NET_INCOME", false);
     this.SHORT_RESULTS = false;
     this.OTHER_PENSION_START = [0, 0, 0];
     this.OTHER_PENSION_AMOUNT = [0, 0, 0];
     this.OTHER_PENSION_LASTS = [0, 0, 0];
     this.OTHER_PENSION_START_MIN = KJE.FloatArray(3);
     this.OTHER_PENSION_ENFORCE_MIN = new Array(3);
     this.OTHER_PENSION_USERETIREAGE = new Array(3);
     for (var a = 0; a < 3; a++) {
         this.OTHER_PENSION_START_MIN[a] = KJE.parameters.get("OTHER_PENSION_START" + (a + 1) + "_MIN", 14);
         this.OTHER_PENSION_ENFORCE_MIN[a] = KJE.parameters.get("OTHER_PENSION_ENFORCE" + (a + 1) + "_MIN", false);
         this.OTHER_PENSION_USERETIREAGE[a] = KJE.parameters.get("OTHER_PENSION_USERETIREAGE" + (a + 1), false)
     }
     this.OTHER_PENSION_INFLATION = [false, false, false];
     this.OTHER_PENSION_CPP = [KJE.parameters.get("OTHER_PENSION_CPP1", false), KJE.parameters.get("OTHER_PENSION_CPP2", false), KJE.parameters.get("OTHER_PENSION_CPP3", false)];
     this.OTHER_PENSION_COUNT = KJE.parameters.get("OTHER_PENSION_COUNT", 0);
     this.OTHER_PENSION_AMOUNT_ADJUSTED = [0, 0, 0];
     this.OTHER_PENSION_AMOUNT_ADJUSTED = [0, 0, 0];
     this.CPP_MINIMUM_AGE = 60;
     this.CPP_MAXIMUM_AGE = 71;
     this.CPP_NOMINAL_AGE = 65;
     this.OAS_START_65 = 56;
     this.OAS_START_66 = 52;
     this.CPP_ADJUSTMENT_EARLY = 0.072;
     this.CPP_ADJUSTMENT_LATE = 0.084;
     this.DD_RETIRE1 = KJE.FloatArray(3);
     this.DD_RETIRE2 = KJE.FloatArray(3);
     this.DS_RETIRE1 = KJE.FloatArray(3);
     this.DR_SALARY = null;
     this.DR_BEGINING_BALANCE = null;
     this.DR_ENDING_BALANCE = null;
     this.DR_INTEREST = null;
     this.DR_SAVINGS = null;
     this.DR_RETIREMENT_INCOME = null;
     this.DR_SOCIAL_SECURITY_INCOME = null;
     this.DR_RETIREMENT_WITHDRAWAL = null;
     this.DS_INFLATION_INCREASE = KJE.FloatArray(4);
     this.DS_INFLATION_RUNOUT = KJE.FloatArray(4);
     this.DS_SAVEMORE_INCREASE = KJE.FloatArray(5);
     this.DS_SAVEMORE_RUNOUT = KJE.FloatArray(5);
     this.CS_INFLATION_RUNOUT = new Array(4);
     this.CS_SAVEMORE_RUNOUT = new Array(5);
     this.cats = null;
     this.cats2 = new Array(3);
     this.CAT_LABELS = KJE.parameters.get("ARRAY_CAT_LABELS", ["Projected nestegg required:", "Projected nestegg required after Social Security:", "Projected nestegg required after current Savings:"]);
     this.INFLATION_RESULTS = false;
     this.SAVEMORE_RESULTS = false;
     this.sSchedule = new KJE.Repeating()
 };
 KJE.RetirementPlanCalc.prototype.clear = function() {
     this.CURRENT_AGE = 0;
     this.HOUSEHOLD_INCOME = 0;
     this.PRE_RATE_OF_RETURN = 0;
     this.AGE_OF_RETIREMENT = 0;
     this.POST_RATE_OF_RETURN = 0;
     this.SALARY_PERCENT = 0;
     this.CURRENT_SAVINGS = 0;
     this.INFLATION_RATE = 0;
     this.INCLUDE_SOCIAL_SECURITY = false;
     this.MARRIED = false;
     this.SAVINGS_PERCENT = 0;
     var a = this.DD_RETIRE1.length;
     for (var c = 0; c < a; c++) {
         this.DD_RETIRE1[c] = 0;
         this.DD_RETIRE2[c] = 0
     }
 };
 KJE.RetirementPlanCalc.prototype.calculate = function(P) {
     var e = KJE;
     var m = this.CURRENT_AGE;
     var A = this.HOUSEHOLD_INCOME;
     var y = this.PRE_RATE_OF_RETURN;
     var x = this.AGE_OF_RETIREMENT;
     var v = this.POST_RATE_OF_RETURN;
     var s = this.SALARY_PERCENT;
     var p = this.CURRENT_SAVINGS;
     var o = this.INFLATION_RATE;
     var L = this.INCLUDE_SOCIAL_SECURITY;
     var k = this.MARRIED;
     var W = this.SAVINGS_PERCENT;
     var b = 0;
     var d = 0;
     var V = 0;
     var C = 0;
     var F = 0;
     var l = 0;
     var g = 0;
     var M = 0;
     var c = 0;
     var J = 0;
     var w = y / 100;
     var j = v / 100;
     var B = p;
     if (this.OTHER_PENSION_CPP) {
         if (m >= this.OAS_START_65) {
             this.OTHER_PENSION_START_MIN[2] = 65
         } else {
             if (m >= this.OAS_START_66) {
                 this.OTHER_PENSION_START_MIN[2] = 66
             } else {
                 this.OTHER_PENSION_START_MIN[2] = 67
             }
         }
     }
     var h = this.YEARS_UNTIL_RETIREMENT = x - m;
     this.AGE_RUN_OUT = 0;
     if (this.SHOW_SOCIAL && this.INCLUDE_SOCIAL_SECURITY) {
         var E = new KJE.SocialSecurityCalc();
         E.clear();
         E.CURRENT_AGE = (m > 69 ? 69 : m);
         E.HOUSEHOLD_INCOME = A;
         E.AGE_OF_RETIREMENT = (x > 70 ? 70 : x);
         E.SALARY_PERCENT = s;
         E.SOCIAL_SECURITY_INCREASE_RATE = o;
         E.MARRIED = k;
         E.calculate();
         g = E.SOCIAL_AT_RETIRE_AMT;
         // console.log(E);
         M = (m > E.SOCIAL_AT_RETIRE_AGE ? m : E.SOCIAL_AT_RETIRE_AGE)
     } else {
         g = 0;
         M = 65;
         L = false
     }
     this.SOCIALSECURITY_START_AGE = M;
     this.SOCIALSECURITY_AT_RETIRE = g;
     this.INCLUDE_SOCIAL_SECURITY = L;
     var H = e.round(A * (W / 100), 0);
     var r = H / 12;
     if (m > x) {
         throw (this.MSG_ERROR2)
     }
     this.bATRETIREMENT = false;
     if (m == x) {
         m = m - 1;
         this.CURRENT_AGE = m;
         this.bATRETIREMENT = true
     }
     var f = Math.round(h + this.YEARS_OF_RETIREMENT);
     var U = 0;
     var R = 0;
     var T = 0;
     this.DS_SAVINGS = KJE.FloatArray(f);
     this.DS_WITHDRAWAL = KJE.FloatArray(f);
     this.DR_SALARY = KJE.FloatArray(f);
     this.DR_BEGINING_BALANCE = KJE.FloatArray(f);
     this.DR_ENDING_BALANCE = KJE.FloatArray(f);
     this.DR_INTEREST = KJE.FloatArray(f);
     this.DR_SAVINGS = KJE.FloatArray(f);
     this.DR_RETIREMENT_INCOME = KJE.FloatArray(f);
     this.DR_SOCIAL_SECURITY_INCOME = KJE.FloatArray(f);
     this.DR_RETIREMENT_WITHDRAWAL = KJE.FloatArray(f);
     this.DR_RETIREMENT_TAXES = KJE.FloatArray(f);
     this.cats = new Array(f);
     var D = false;
     for (T = 0; T < this.OTHER_PENSION_AMOUNT.length; T++) {
         if (this.OTHER_PENSION_CPP[T]) {
             D = this.OTHER_PENSION_CPP[T]
         }
         if (this.OTHER_PENSION_USERETIREAGE[T]) {
             this.OTHER_PENSION_START[T] = x;
             if (this.OTHER_PENSION_START[T] < this.OTHER_PENSION_START_MIN[T] && this.OTHER_PENSION_ENFORCE_MIN[T]) {
                 this.OTHER_PENSION_START[T] = this.OTHER_PENSION_START_MIN[T]
             }
         }
         if (this.OTHER_PENSION_START[T] < x && this.OTHER_PENSION_START[T] != 0) {
             throw (this.MSG_ERROR3)
         }
     }
     for (T = 0; T < this.OTHER_PENSION_AMOUNT.length; T++) {
         if (!this.OTHER_PENSION_CPP[T] || (this.OTHER_PENSION_START[T] == this.CPP_NOMINAL_AGE)) {
             this.OTHER_PENSION_AMOUNT_ADJUSTED[T] = this.OTHER_PENSION_AMOUNT[T]
         } else {
             if (this.OTHER_PENSION_START[T] > this.CPP_NOMINAL_AGE) {
                 this.OTHER_PENSION_AMOUNT_ADJUSTED[T] = this.OTHER_PENSION_AMOUNT[T] + ((this.OTHER_PENSION_START[T] - this.CPP_NOMINAL_AGE) * this.CPP_ADJUSTMENT_LATE * this.OTHER_PENSION_AMOUNT[T])
             } else {
                 if (this.OTHER_PENSION_START[T] < this.CPP_NOMINAL_AGE) {
                     this.OTHER_PENSION_AMOUNT_ADJUSTED[T] = this.OTHER_PENSION_AMOUNT[T] - ((this.CPP_NOMINAL_AGE - this.OTHER_PENSION_START[T]) * this.CPP_ADJUSTMENT_EARLY * this.OTHER_PENSION_AMOUNT[T])
                 } else {
                     this.OTHER_PENSION_AMOUNT_ADJUSTED[T] = this.OTHER_PENSION_AMOUNT[T]
                 }
             }
         }
     }
     var a = 0;
     var Q = 0;
     var O = 0;
     for (T = 1; T <= f; T++) {
         U = T - 1;
         if (U == 0) {
             this.DR_BEGINING_BALANCE[U] = p;
             V = A;
             C = V * (1 - this.CURRENT_TAX / 100);
             F = V * (this.INCOME_PERCENT / 100);
             l = C * (this.INCOME_PERCENT / 100)
         } else {
             this.DR_BEGINING_BALANCE[U] = this.DR_ENDING_BALANCE[U - 1]
         }
         if ((h - T) > 0) {
             this.DR_SAVINGS[U] = (this.INCREASE_ANNUAL_SAVINGS ? ((U == 0 ? A : this.DR_SALARY[U - 1]) * (W / 100)) : H);
             this.DR_SALARY[U] = KJE.FV_AMT(s / 100, T, A);
             this.DR_INTEREST[U] = (this.DR_BEGINING_BALANCE[U]) * (w);
             this.DR_RETIREMENT_INCOME[U] = 0;
             this.DR_SOCIAL_SECURITY_INCOME[U] = 0;
             this.DR_RETIREMENT_WITHDRAWAL[U] = 0;
             V = this.DR_SALARY[U];
             C = V * (1 - this.CURRENT_TAX / 100);
             F = V * (this.INCOME_PERCENT / 100);
             l = C * (this.INCOME_PERCENT / 100)
         } else {
             this.DR_SALARY[U] = KJE.FV_AMT(o / 100, (T - h - (this.bATRETIREMENT ? 1 : 0)), V);
             this.DR_INTEREST[U] = this.DR_BEGINING_BALANCE[U] * (j);
             this.DR_SAVINGS[U] = 0;
             this.DR_RETIREMENT_INCOME[U] = (this.DR_SALARY[U] * (this.INCOME_PERCENT / 100)) * (1 - (this.USE_NET_INCOME ? this.CURRENT_TAX / 100 : 0));
             if ((((T + m) - M) >= 0) && L) {
                 //   this.DR_SOCIAL_SECURITY_INCOME[U] = KJE.FV_AMT(o / 100, (T + m - M), g); //inflation rate / 100 , years,
                 this.DR_SOCIAL_SECURITY_INCOME[U] = KJE.FV_AMT(o / 100, (T + m - M), 16034.72);
                 // console.log(g);
                 if (this.SOCIAL_SECURITY_TAX_WITHDRAWALS) {
                     this.DR_RETIREMENT_TAXES[U] = this.DR_SOCIAL_SECURITY_INCOME[U] * (this.RETIREMENT_TAX / 200)
                 }
             } else {
                 this.DR_SOCIAL_SECURITY_INCOME[U] = 0
             }
             var K = 0;
             var N = 0;
             for (R = 0; R < this.OTHER_PENSION_AMOUNT.length; R++) {
                 if (this.OTHER_PENSION_AMOUNT[R] > 0) {
                     K = T + m - (this.OTHER_PENSION_START[R] == 0 ? x : this.OTHER_PENSION_START[R]);
                     if (K >= 0) {
                         if (this.OTHER_PENSION_LASTS[R] == 0 || this.OTHER_PENSION_LASTS[R] > K) {
                             if (this.OTHER_PENSION_INFLATION[R]) {
                                 N += KJE.FV_AMT(o / 100, T - 1, this.OTHER_PENSION_AMOUNT_ADJUSTED[R] * 12)
                             } else {
                                 N += this.OTHER_PENSION_AMOUNT_ADJUSTED[R] * 12
                             }
                         }
                     }
                 }
             }
             this.DR_SOCIAL_SECURITY_INCOME[U] += N;
             if (this.RETIREMENT_TAX_WITHDRAWALS) {
                 this.DR_RETIREMENT_TAXES[U] += N * (this.RETIREMENT_TAX / 100)
             }
             this.DR_RETIREMENT_WITHDRAWAL[U] = this.DR_RETIREMENT_INCOME[U] + this.DR_RETIREMENT_TAXES[U] - this.DR_SOCIAL_SECURITY_INCOME[U];
             if (this.USE_NET_INCOME && this.DR_RETIREMENT_WITHDRAWAL[U] > 0 && this.RETIREMENT_TAX_WITHDRAWALS) {
                 var z = this.DR_RETIREMENT_WITHDRAWAL[U] / (1 - (this.RETIREMENT_TAX / 100));
                 this.DR_RETIREMENT_TAXES[U] += z - this.DR_RETIREMENT_WITHDRAWAL[U];
                 this.DR_RETIREMENT_WITHDRAWAL[U] = z
             }
             var u = 1;
             a = KJE.NPV_AMT(j, T - h + 1, this.DR_RETIREMENT_WITHDRAWAL[U]);
             this.DD_RETIRE1[1] += a;
             this.DD_RETIRE2[1] += this.DR_RETIREMENT_WITHDRAWAL[U];
             Q = KJE.NPV_AMT(j, T - h + 1, this.DR_RETIREMENT_INCOME[U]);
             this.DD_RETIRE1[0] += Q;
             this.DD_RETIRE2[0] += this.DR_RETIREMENT_INCOME[U]
         }
         this.DR_ENDING_BALANCE[U] = this.DR_BEGINING_BALANCE[U] + this.DR_INTEREST[U] + this.DR_SAVINGS[U] - this.DR_RETIREMENT_WITHDRAWAL[U];
         if ((h - T) == 1) {
             B = this.DR_ENDING_BALANCE[U]
         }
         if (this.DR_ENDING_BALANCE[U] <= 0) {
             var S = (this.AGE_RUN_OUT != 0 ? this.DR_RETIREMENT_WITHDRAWAL[U] : (-1) * this.DR_ENDING_BALANCE[U]);
             O = KJE.NPV_AMT(j, T - h + 1, S);
             this.DD_RETIRE1[2] += O;
             this.DD_RETIRE2[2] += S;
             if (this.AGE_RUN_OUT == 0) {
                 this.AGE_RUN_OUT = T + m
             }
             this.DR_RETIREMENT_WITHDRAWAL[U] = this.DR_BEGINING_BALANCE[U] + this.DR_INTEREST[U] + this.DR_SAVINGS[U];
             this.DR_ENDING_BALANCE[U] = 0
         }
     }
     var t = this.DR_ENDING_BALANCE[U];
     this.END_OF_RETIREMENT_MESSAGE = null;
     if (t == 0) {
         this.END_OF_RETIREMENT_MESSAGE = this.MSG_RUNOUT;
         this.RESULTS_MSG = this.MSG_LABEL_4;
         this.RESPONSE = this.RESPONSE2
     } else {
         this.END_OF_RETIREMENT_MESSAGE = this.MSG_SUCCESS;
         this.RESULTS_MSG = this.MSG_LABEL_3;
         this.RESPONSE = this.RESPONSE1
     }
     if (this.NEST_EGG) {
         this.RESULTS_MSG = KJE.getKJEReplaced(this.MSG_TITLE, e.dollars(this.DD_RETIRE1[0]), e.number(x))
     }
     J = 0;
     if (t == 0) {
         this.dAdjustedSavingsRate = this.getAdjustedSavingsRate((m + f), w, j);
         this.dAdjustedRorRate = this.getAdjustedRorRate((m + f), w, j);
         this.dAdjustedSalaryPercent = this.getAdjustedSalaryPercent((m + f), w, j);
         this.dAdjusteYearsToRetirement = this.getAdjustedYearsToRetirement((m + f), w, j) + m;
         if (h <= 1) {
             c = this.DD_RETIRE1[2]
         } else {
             c = e.round(this.dAdjustedSavingsRate * A, 2)
         }
         J = e.round(c / 12, 2)
     }
     if (this.INFLATION_RESULTS) {
         for (T = 0; T < 4; T++) {
             this.DS_INFLATION_INCREASE[T] = (T * 0.03 + o / 100);
             if (T == 3) {
                 this.DS_INFLATION_INCREASE[T] = ((T + 1) * 0.03 + o / 100)
             }
             this.DS_INFLATION_RUNOUT[T] = this.getRunoutAge(m, p, s / 100, A, w, W / 100, this.DS_INFLATION_INCREASE[T], j, this.INCOME_PERCENT / 100, L, o / 100, h, M, g, 110, true);
             this.CS_INFLATION_RUNOUT[T] = e.percent(this.DS_INFLATION_INCREASE[T])
         }
     }
     if (this.SAVEMORE_RESULTS) {
         for (T = 0; T < 5; T++) {
             this.DS_SAVEMORE_INCREASE[T] = (T * 0.04 + W / 100);
             this.DS_SAVEMORE_RUNOUT[T] = this.getRunoutAge(m, p, s / 100, A, w, this.DS_SAVEMORE_INCREASE[T], o / 100, j, this.INCOME_PERCENT / 100, L, o / 100, h, M, g, 110, true);
             this.CS_SAVEMORE_RUNOUT[T] = e.percent(this.DS_SAVEMORE_INCREASE[T])
         }
     }
     if (P) {
         var G = this.sSchedule;
         G.clearRepeat();
         var I = (L || this.OTHER_PENSION_COUNT > 0 ? G.sReportCol(D ? "Pension Income<br />OAS/CPP<br />or QPP" : "NZ<br />Superannuation<br />Income", 5) : null);
         if (I && !L) {
             I = I.replace("<!--STARTHIDETAXES-->", "<!--").replace("<!--ENDHIDETAXES-->", "-->")
         }
         if (this.SHORT_RESULTS) {
             G.addHeader(G.sReportCol("Age", 9), G.sReportCol("Interest<br /> and<br /> Savings", 8), G.sReportCol("Retirement<br />Account<br />Withdrawals", 6), G.sReportCol("Ending<br />Retirement<br />Balance", 7))
         } else {
             G.addHeader(G.sReportCol("Age", 9), G.sReportCol("Beginning<br />Retirement<br />Balance", 1), G.sReportCol(" <br />Investment<br />Growth", 2), (!this.NEST_EGG ? (this.INCREASE_ANNUAL_SAVINGS ? KJE.replace("CALC_RESULT", e.percent(W / 100, 2), G.sReportCol("Contributions<br />at CALC_RESULT<br />of Income", 3)) : KJE.replace("CALC_RESULT", e.percent(W / 100, 2), G.sReportCol("<br /><br />Contributions", 10))) : null), KJE.replace("CALC_RESULT", e.percent(this.INCOME_PERCENT / 100, 0), G.sReportCol("Retire<br />with CALC_RESULT<br />of Income", 4)), I, (this.USE_NET_INCOME ? G.sReportCol("Estimated<br />Retirement<br />Taxes", 8) : null), G.sReportCol("Retirement<br />Account<br />Withdrawals", 6), G.sReportCol("Ending<br />Retirement<br />Balance", 7))
         }
     }
     if (!L) {
         this.DS_RETIRE1 = KJE.FloatArray(2);
         this.cats2 = new Array(2);
         this.cats2[0] = this.CAT_LABELS[0] + " " + e.dollars(this.DD_RETIRE1[0]);
         this.cats2[1] = this.CAT_LABELS[2] + " " + e.dollars(this.DD_RETIRE1[2]);
         for (R = 0; R < this.DS_RETIRE1.length; R++) {
             this.DS_RETIRE1[R] = ((this.DD_RETIRE1[R + 1]))
         }
     } else {
         this.DS_RETIRE1 = KJE.FloatArray(3);
         this.cats2 = new Array(3);
         for (R = 0; R < this.DS_RETIRE1.length; R++) {
             this.DS_RETIRE1[R] = ((this.DD_RETIRE1[R]));
             this.cats2[R] = this.CAT_LABELS[R] + " " + e.dollars(this.DD_RETIRE1[R])
         }
     }
     for (T = 1; T <= f; T++) {
         U = T - 1;
         this.cats[U] = e.number(T + m);
         if (this.DR_ENDING_BALANCE[U] < 0) {
             this.DR_ENDING_BALANCE[U] = 0;
             this.DR_RETIREMENT_WITHDRAWAL[U] = 0
         }
         if (P) {
             if (this.SHORT_RESULTS) {
                 G.addRepeat(e.number(T + m, 0), e.dollars(this.DR_INTEREST[U] + this.DR_SAVINGS[U], this.iDecimals), e.dollars(this.DR_RETIREMENT_WITHDRAWAL[U], this.iDecimals), e.dollars(this.DR_ENDING_BALANCE[U], this.iDecimals))

             } else {
                 G.addRepeat(e.number(T + m, 0), e.dollars(this.DR_BEGINING_BALANCE[U], this.iDecimals), e.dollars(this.DR_INTEREST[U], this.iDecimals), (this.NEST_EGG ? null : e.dollars(this.DR_SAVINGS[U], this.iDecimals)), e.dollars(this.DR_RETIREMENT_INCOME[U], this.iDecimals), (L || this.OTHER_PENSION_COUNT > 0 ? e.dollars(this.DR_SOCIAL_SECURITY_INCOME[U], this.iDecimals) : null), (this.USE_NET_INCOME ? e.dollars(this.DR_RETIREMENT_TAXES[U], this.iDecimals) : null), e.dollars(this.DR_RETIREMENT_WITHDRAWAL[U], this.iDecimals), e.dollars(this.DR_ENDING_BALANCE[U], this.iDecimals));
                 //console.log( this.DR_SOCIAL_SECURITY_INCOME[U] );
             }
         }
         if (this.DR_RETIREMENT_WITHDRAWAL[U] < 0) {
             this.DR_RETIREMENT_WITHDRAWAL[U] = 0
         }
     }
     if (this.MSG_START_OF_MESSAGE = ("")) {
         this.START_OF_MESSAGE = ""
     } else {
         this.START_OF_MESSAGE = KJE.replace("NEED_AT_RETIRE_AFSS", e.dollars(this.DD_RETIRE1[1], 0), this.MSG_START_OF_MESSAGE);
         this.START_OF_MESSAGE = KJE.replace("NEED_THRU_RETIRE_AFSS", e.dollars(this.DD_RETIRE2[1], 0), this.START_OF_MESSAGE) + " "
     }
     this.SOCIAL_SECURITY_PERCENT = b;
     this.SOCIAL_SECURITY_SALARY = d;
     this.ENDING_BALANCE = t;
     this.ANNUAL_SAVINGS = H;
     this.MONTHLY_SAVINGS = r;
     this.INCOME_AT_RETIRE = V;
     this.INCOME_AT_RETIRE_NET = C;
     this.INCOME_REQUIRED_AT_RETIRE = F;
     this.INCOME_REQUIRED_AT_RETIRE_NET = l;
     this.SOCIALSECURITY_AT_RETIRE = g;
     this.SOCIALSECURITY_START_AGE = M;
     this.BALANCE_AT_RETIRE = B;
     this.ADJUST_ANNUAL_SAVINGS = c;
     this.ADJUST_MONTHLY_SAVINGS = J
 };
 KJE.RetirementPlanCalc.prototype.formatReport = function(a) {
     var c = KJE;
     var b = this.iDecimal;
     var d = a;
     d = KJE.replace("END_OF_RETIREMENT_MESSAGE", this.END_OF_RETIREMENT_MESSAGE, d);
     var e = 0;
     for (e = 0; e < this.OTHER_PENSION_START.length; e++) {
         d = KJE.replace("OTHER_PENSION_START" + (e + 1), c.number(this.OTHER_PENSION_START[e] > this.AGE_OF_RETIREMENT ? this.OTHER_PENSION_START[e] : this.AGE_OF_RETIREMENT), d);
         d = KJE.replace("OTHER_PENSION_AMOUNT" + (e + 1), c.dollars(this.OTHER_PENSION_AMOUNT_ADJUSTED[e], b), d);
         d = KJE.replace("OTHER_PENSION_INFLATION" + (e + 1), (this.OTHER_PENSION_INFLATION[e] ? this.MSG_INFLATION_REPORT : ""), d);
         d = KJE.replace("OTHER_PENSION_LASTS" + (e + 1), c.number(this.OTHER_PENSION_LASTS[e]), d)
     }
     if (this.INFLATION_RESULTS) {
         for (e = 0; e < 4; e++) {
             d = KJE.replace("INFLATION_INCREASE" + e, c.percent(this.DS_INFLATION_INCREASE[e], 2), d);
             if (this.DS_INFLATION_RUNOUT[e] < 110) {
                 d = KJE.replace("INFLATION_MSG" + e, KJE.replace("KJE1", c.number(this.DS_INFLATION_RUNOUT[e], this.MSG_RUNOUT_REPORT), d))
             } else {
                 d = KJE.replace("INFLATION_MSG" + e, this.MSG_SUCCESS_REPORT, d)
             }
         }
     }
     if (this.SAVEMORE_RESULTS) {
         for (e = 0; e < 5; e++) {
             d = KJE.replace("SAVEMORE_INCREASE" + e, c.percent(this.DS_SAVEMORE_INCREASE[e], 2), d);
             if (this.DS_SAVEMORE_RUNOUT[e] < 110) {
                 d = KJE.replace("SAVEMORE_MSG" + e, this.MSG_RUNOUT_REPORT + " " + c.number(this.DS_SAVEMORE_RUNOUT[e]), d)
             } else {
                 d = KJE.replace("SAVEMORE_MSG" + e, this.MSG_SUCCESS_REPORT, d)
             }
         }
     }
     if (this.ENDING_BALANCE == 0 && !this.bATRETIREMENT && this.CURRENT_AGE != this.AGE_OF_RETIREMENT - 1) {
         d = KJE.replace("<!--ADJUST_ADVICE-->", "", d);
         d = KJE.replace("<!--/ADJUST_ADVICE-->", "", d);
         d = KJE.replace("<ADJUST_ADVICE>", "", d);
         d = KJE.replace("<ADJUST_ADVICE>", "", d);
         d = KJE.replace("ADJUST_SAVINGS_RATE", c.percent(this.dAdjustedSavingsRate, 2), d);
         d = KJE.replace("ADJUST_ROR", c.percent(this.dAdjustedRorRate, 2), d);
         d = KJE.replace("ADJUST_INCOME_REQUIRED", c.percent(this.dAdjustedSalaryPercent), d);
         d = KJE.replace("ADJUST_YEARS", c.number(this.dAdjusteYearsToRetirement), d)
     } else {
         d = KJE.replace("<!--ADJUST_ADVICE-->", "<!--", d);
         d = KJE.replace("<!--/ADJUST_ADVICE-->", "-->", d);
         d = KJE.replace("<ADJUST_ADVICE>", "<!--", d);
         d = KJE.replace("<ADJUST_ADVICE>", "-->", d)
     }
     d = KJE.replace("ADJUST_ANNUAL_SAVINGS", c.dollars(this.ADJUST_ANNUAL_SAVINGS, 2), d);
     d = KJE.replace("ADJUST_MONTHLY_SAVINGS", c.dollars(this.ADJUST_MONTHLY_SAVINGS, 2), d);
     d = KJE.replace("INCREASE_ANNUAL_SAVINGS", (this.INCREASE_ANNUAL_SAVINGS ? "will" : "does not"), d);
     d = KJE.replace("CURRENT_AGE", c.number(this.CURRENT_AGE + (this.bATRETIREMENT ? 1 : 0)), d);
     d = KJE.replace("HOUSEHOLD_INCOME", c.dollars(this.HOUSEHOLD_INCOME, b), d);
     d = KJE.replace("PRE_RATE_OF_RETURN", c.percent(this.PRE_RATE_OF_RETURN / 100, 2), d);
     d = KJE.replace("AGE_OF_RETIREMENT", c.number(this.AGE_OF_RETIREMENT), d);
     d = KJE.replace("POST_RATE_OF_RETURN", c.percent(this.POST_RATE_OF_RETURN / 100, 2), d);
     d = KJE.replace("SALARY_PERCENT", c.percent(this.SALARY_PERCENT / 100, 2), d);
     d = KJE.replace("YEARS_UNTIL_RETIREMENT", c.number(this.YEARS_UNTIL_RETIREMENT), d);
     d = KJE.replace("YEARS_OF_RETIREMENT", c.number(this.YEARS_OF_RETIREMENT), d);
     d = KJE.replace("INCOME_PERCENT", c.percent(this.INCOME_PERCENT / 100, 2), d);
     d = KJE.replace("CURRENT_SAVINGS", c.dollars(this.CURRENT_SAVINGS, b), d);
     d = KJE.replace("INFLATION_RATE", c.percent(this.INFLATION_RATE / 100, 1), d);
     if (this.INCLUDE_SOCIAL_SECURITY) {
         d = KJE.replace("SOCIAL_SECURITY_MSG", this.MSG_SOCIAL_SECURITY, d);
         d = KJE.replace("SOCIALSECURITY_AT_RETIRE", c.dollars(this.SOCIALSECURITY_AT_RETIRE, b), d)
     } else {
         d = KJE.replace("SOCIAL_SECURITY_MSG", "", d);
         d = KJE.replace("SOCIALSECURITY_AT_RETIRE", c.dollars(0, b), d)
     }
     d = KJE.replace("RETIREMENT_TAX_WITHDRAWALS", c.yesno(this.RETIREMENT_TAX_WITHDRAWALS), d);
     d = KJE.replace("SOCIAL_SECURITY_TAX_WITHDRAWALS", c.yesno(this.SOCIAL_SECURITY_TAX_WITHDRAWALS), d);
     d = KJE.replace("INCLUDE_SOCIAL_SECURITY", c.yesno(this.INCLUDE_SOCIAL_SECURITY), d);
     d = KJE.replace("INCLUDE_SOCIAL_SECURITY", c.yesno(this.INCLUDE_SOCIAL_SECURITY), d);
     d = KJE.replace("CURRENT_TAX", c.percent(this.CURRENT_TAX / 100), d);
     d = KJE.replace("RETIREMENT_TAX", c.percent(this.RETIREMENT_TAX / 100), d);
     d = KJE.replace("MARRIED", c.yesno(this.MARRIED), d);
     d = KJE.replace("SOCIAL_SECURITY_PERCENT", c.percent(this.SOCIAL_SECURITY_PERCENT), d);
     d = KJE.replace("SOCIAL_SECURITY_SALARY", c.dollars(this.SOCIAL_SECURITY_SALARY, b), d);
     d = KJE.replace("PV_ENDING_BALANCE", c.dollars(KJE.NPV_AMT(this.INFLATION_RATE / 100, Math.round(this.YEARS_UNTIL_RETIREMENT + this.YEARS_OF_RETIREMENT), this.ENDING_BALANCE), b), d);
     d = KJE.replace("ENDING_BALANCE", c.dollars(this.ENDING_BALANCE, b), d);
     d = KJE.replace("SAVINGS_PERCENT", c.percent(this.SAVINGS_PERCENT / 100, 2), d);
     d = KJE.replace("ANNUAL_SAVINGS", c.dollars(this.ANNUAL_SAVINGS, b), d);
     d = KJE.replace("MONTHLY_SAVINGS", c.dollars(this.MONTHLY_SAVINGS, b), d);
     d = KJE.replace("INCOME_AT_RETIRE_NET", c.dollars(this.INCOME_AT_RETIRE_NET, b), d);
     d = KJE.replace("INCOME_AT_RETIRE", c.dollars(this.INCOME_AT_RETIRE, b), d);
     d = KJE.replace("INCOME_REQUIRED_AT_RETIRE_NET", c.dollars(this.INCOME_REQUIRED_AT_RETIRE_NET, b), d);
     d = KJE.replace("INCOME_REQUIRED_AT_RETIRE", c.dollars(this.INCOME_REQUIRED_AT_RETIRE, b), d);
     d = KJE.replace("SOCIALSECURITY_START_AGE", c.number(this.SOCIALSECURITY_START_AGE), d);
     d = KJE.replace("BALANCE_AT_RETIRE", c.dollars(this.BALANCE_AT_RETIRE, b), d);
     d = KJE.replace("RESULTS_MSG", this.RESULTS_MSG, d);
     d = KJE.replace("RESPONSE", this.RESPONSE, d);
     d = KJE.replace("AGE_RUN_OUT", c.number(this.AGE_RUN_OUT), d);
     d = KJE.replace("ENDING_BALANCE", c.dollars(this.ENDING_BALANCE), d);
     d = KJE.replace("NEED_AT_RETIRE_AFSS", c.dollars(this.DD_RETIRE1[1]), d);
     d = KJE.replace("NEED_AT_RETIRE_PLAN", c.dollars(this.DD_RETIRE1[2]), d);
     d = KJE.replace("NEED_AT_RETIRE", c.dollars(this.DD_RETIRE1[0]), d);
     d = KJE.replace("NEED_THRU_RETIRE_AFSS", c.dollars(this.DD_RETIRE2[1]), d);
     d = KJE.replace("NEED_THRU_RETIRE_PLAN", c.dollars(this.DD_RETIRE2[2]), d);
     d = KJE.replace("NEED_THRU_RETIRE", c.dollars(this.DD_RETIRE2[0]), d);
     d = d.replace("**REPEATING GROUP**", this.sSchedule.getRepeat());
     this.sSchedule.clearRepeat();
     return d
 };
 KJE.RetirementPlanCalc.prototype.formatGraph = function(a, b) {
     if (!this.NEST_EGG && b[0]) {
         b[0].setTitle(this.MSG_GRAPH_REPORT_TITLE);
         b[0].setTitleGraph(this.MSG_GRAPH_REPORT_TITLE);
         b[0].show(true);
         b[0].paint()
     }
 };
 KJE.RetirementPlanCalc.prototype.getRunoutAge = function(v, y, F, u, H, g, E, e, b, h, z, A, r, w, J, j) {
     var a = y;
     var G = 0;
     var l = 0;
     var D = 0;
     var t = 0;
     var x = 0;
     var p = 0;
     var C = 0;
     var I = 0;
     var B = 0;
     var d = u * g;
     var c = this.USE_NET_INCOME;
     var m = this.CURRENT_TAX / 100;
     for (var s = 1; s <= (J - v); s++) {
         B = 0;
         I = 0;
         p = 0;
         C = 0;
         if ((A - s) > 0) {
             G = KJE.FV_AMT(F, s, u);
             l = a * (H);
             D = (this.INCREASE_ANNUAL_SAVINGS ? G * (g) : d);
             t = 0;
             x = G
         } else {
             G = KJE.FV_AMT(E, s - A, x);
             l = a * (e);
             D = 0;
             t = G * (b) * (1 - (c ? m : 0));
             if (((s + v) - r >= 0) && (h > 0)) {
                 p = KJE.FV_AMT(z, (s + v) - r, w);
                 if (this.SOCIAL_SECURITY_TAX_WITHDRAWALS) {
                     B = p * (this.RETIREMENT_TAX / 200)
                 }
             }
             var k = this.OTHER_PENSION_AMOUNT.length;
             var i = 0;
             for (var o = 0; o < k; o++) {
                 if (this.OTHER_PENSION_AMOUNT_ADJUSTED[o] > 0) {
                     i = this.OTHER_PENSION_START[o] == 0 ? (s - A) : (s + v - this.OTHER_PENSION_START[o]);
                     if (this.OTHER_PENSION_LASTS[o] == 0 || this.OTHER_PENSION_LASTS[o] > i) {
                         if (this.OTHER_PENSION_INFLATION[o]) {
                             I += KJE.FV_AMT(E, (s), this.OTHER_PENSION_AMOUNT_ADJUSTED[o] * 12)
                         } else {
                             I += this.OTHER_PENSION_AMOUNT_ADJUSTED[o] * 12
                         }
                     }
                 }
             }
             if (this.RETIREMENT_TAX_WITHDRAWALS) {
                 B = I * (this.RETIREMENT_TAX / 100)
             }
             C = t + B - p - I;
             if (c && C > 0 && this.RETIREMENT_TAX_WITHDRAWALS) {
                 var f = C / (1 - (this.RETIREMENT_TAX / 100));
                 B += f - C;
                 C = f
             }
         }
         a = a + l + D - C;
         if (a < 0) {
             J = s + v;
             break
         }
     }
     if (j) {
         return J
     }
     return a
 };
 KJE.RetirementPlanCalc.prototype.getAdjustedSavingsRate = function(b, e, d) {
     var c = 200;
     var g = c / 2;
     var a = 0;
     for (var f = 1; f < 50; f++) {
         a = this.getRunoutAge(this.CURRENT_AGE, this.CURRENT_SAVINGS, this.SALARY_PERCENT / 100, this.HOUSEHOLD_INCOME, e, c, this.INFLATION_RATE / 100, d, this.INCOME_PERCENT / 100, this.INCLUDE_SOCIAL_SECURITY, this.INFLATION_RATE / 100, this.YEARS_UNTIL_RETIREMENT, this.SOCIALSECURITY_START_AGE, this.SOCIALSECURITY_AT_RETIRE, b, false);
         if (a > 0 && a < 1) {
             return KJE.round(c + 5e-8, 7)
         } else {
             if (a <= 0) {
                 c += g
             } else {
                 c -= g
             }
         }
         g = g / 2
     }
     return KJE.round(c + 5e-8, 7)
 };
 KJE.RetirementPlanCalc.prototype.getAdjustedRorRate = function(b, e, d) {
     var c = e;
     var h = 0.5;
     var a = 0;
     var f = KJE;
     for (var g = 1; g < 50; g++) {
         a = this.getRunoutAge(this.CURRENT_AGE, this.CURRENT_SAVINGS, this.SALARY_PERCENT / 100, this.HOUSEHOLD_INCOME, c, this.SAVINGS_PERCENT / 100, this.INFLATION_RATE / 100, d, this.INCOME_PERCENT / 100, this.INCLUDE_SOCIAL_SECURITY, this.INFLATION_RATE / 100, this.YEARS_UNTIL_RETIREMENT, this.SOCIALSECURITY_START_AGE, this.SOCIALSECURITY_AT_RETIRE, b, false);
         if (a > 0 && a < 1) {
             return f.round(c + 0.00005, 4)
         } else {
             if (a <= 0) {
                 c += h
             } else {
                 c -= h
             }
         }
         h = h / 2
     }
     return f.round(c + 0.00005, 4)
 };
 KJE.RetirementPlanCalc.prototype.getAdjustedSalaryPercent = function(b, e, d) {
     var c = this.INCOME_PERCENT / 100;
     var h = 0.5;
     var a = 0;
     var f = KJE;
     for (var g = 1; g < 50; g++) {
         a = this.getRunoutAge(this.CURRENT_AGE, this.CURRENT_SAVINGS, this.SALARY_PERCENT / 100, this.HOUSEHOLD_INCOME, e, this.SAVINGS_PERCENT / 100, this.INFLATION_RATE / 100, d, c, this.INCLUDE_SOCIAL_SECURITY, this.INFLATION_RATE / 100, this.YEARS_UNTIL_RETIREMENT, this.SOCIALSECURITY_START_AGE, this.SOCIALSECURITY_AT_RETIRE, b, false);
         if (a > 0 && a < 1) {
             return f.round(c - 0.005, 2)
         } else {
             if (a <= 0) {
                 c -= h
             } else {
                 c += h
             }
         }
         h = h / 2
     }
     return f.round(c - 0.005, 4)
 };
 KJE.RetirementPlanCalc.prototype.getAdjustedYearsToRetirement = function(c, i, h) {
     var g = 0;
     var f = this.INCLUDE_SOCIAL_SECURITY;
     if (f) {
         var d = new KJE.SocialSecurityCalc()
     }
     for (var b = 1; b < 50; b++) {
         var e = 0;
         var a = 0;
         if (this.INCLUDE_SOCIAL_SECURITY) {
             d.clear();
             d.CURRENT_AGE = (this.CURRENT_AGE > 69 ? 69 : this.CURRENT_AGE);
             d.HOUSEHOLD_INCOME = this.HOUSEHOLD_INCOME;
             d.AGE_OF_RETIREMENT = (this.CURRENT_AGE + this.YEARS_UNTIL_RETIREMENT + b > 70 ? 70 : this.CURRENT_AGE + this.YEARS_UNTIL_RETIREMENT + b);
             d.SALARY_PERCENT = this.SALARY_PERCENT;
             d.SOCIAL_SECURITY_INCREASE_RATE = this.INFLATION_RATE;
             d.MARRIED = this.MARRIED;
             d.calculate();
             a = d.SOCIAL_AT_RETIRE_AMT;
             e = d.SOCIAL_AT_RETIRE_AGE
         }
         g = this.getRunoutAge(this.CURRENT_AGE, this.CURRENT_SAVINGS, this.SALARY_PERCENT / 100, this.HOUSEHOLD_INCOME, i, this.SAVINGS_PERCENT / 100, this.INFLATION_RATE / 100, h, this.INCOME_PERCENT / 100, this.INCLUDE_SOCIAL_SECURITY, this.INFLATION_RATE / 100, (this.YEARS_UNTIL_RETIREMENT + b), e, a, c + b, false);
         if (g > 0) {
             return (this.YEARS_UNTIL_RETIREMENT + b)
         }
     }
     return (this.YEARS_UNTIL_RETIREMENT + 50)
 };
 KJE.RetirementPlanCalc.prototype.getGraphTitle = function(b) {
     var a = "";
     if (this.NEST_EGG) {
         a = KJE.getKJEReplaced(this.MSG_GRAPH_TITLE, KJE.dollars(this.ADJUST_MONTHLY_SAVINGS))
     } else {
         if (KJE.lang != "EN") {
             a = this.MSG_GRAPH_REPORT_TITLE
         } else {
             a = (this.MSG_RESULT_EXTRA_GRAPH == "" ? (this.ENDING_BALANCE > 0 ? this.MSG_SUCCESS : this.MSG_RUNOUT) : this.MSG_RESULT_EXTRA_GRAPH) + "<div class='KJESubTitle KJELeft'>" + this.MSG_RESULT_EXTRA + this.MSG_RESULT + (this.SHOW_SOCIAL ? " " + this.MSG_RESULT_SOCIAL : "") + "</div>";
             if (b) {
                 a = KJE.replace("AGE_RUN_OUT", KJE.number(this.AGE_RUN_OUT), a);
                 a = KJE.replace("ENDING_BALANCE", KJE.dollars(this.ENDING_BALANCE), a);
                 a = KJE.replace("NEED_AT_RETIRE_AFSS", KJE.dollars(this.DD_RETIRE1[1]), a);
                 a = KJE.replace("NEED_THRU_RETIRE_AFSS", KJE.dollars(this.DD_RETIRE2[1]), a);
                 a = KJE.getKJEReplaced(a, KJE.dollars(this.BALANCE_AT_RETIRE), KJE.dollars(this.INCOME_REQUIRED_AT_RETIRE), KJE.percent(this.INCOME_PERCENT / 100), KJE.dollars(this.INCOME_AT_RETIRE), (this.SHOW_SOCIAL ? KJE.dollars(this.SOCIALSECURITY_AT_RETIRE) : ""))
             }
         }
     }
     return a
 };
 KJE.CalcName = "Retirement Planner";
 KJE.CalcType = "retirementplan";
 KJE.CalculatorTitleTemplate = "KJE1";
 KJE.gHeight = 300;
 KJE.initialize = function() {
     KJE.CalcControl = new KJE.RetirementPlanCalc();
     KJE.GuiControl = new KJE.RetirementPlan(KJE.CalcControl)
 };
 KJE.RetirementPlan = function(i) {
     var e = KJE;
     var g = KJE.inputs.items;
     KJE.NumberSlider("CURRENT_AGE", "Current age", 14, 90, 0);
     KJE.DollarSlider("HOUSEHOLD_INCOME", "Your annual income (pre-tax)", 1, 1000000);
     KJE.InvestRateSlider("PRE_RATE_OF_RETURN", "Expected rate of return before retirement");
     KJE.NumberSlider("AGE_OF_RETIREMENT", "Age you plan to retire", 10, 90, 0, 1);
     KJE.InvestRateSlider("POST_RATE_OF_RETURN", "Expected rate of return during retirement");
     KJE.PercentSlider("SALARY_PERCENT", "Expected annual pay rise", 0, KJE.parameters.get("MAX_SALARY_PERCENT", 20), 2, 1);
     KJE.NumberSlider("YEARS_OF_RETIREMENT", "Expected years of retirement income", 1, 60, 0, 1);
     KJE.PercentSlider("INCOME_PERCENT", "Percentage of current income you want during retirement", KJE.parameters.get("MIN_INCOME_PERCENT", 25), KJE.parameters.get("MAX_INCOME_PERCENT", 100), 0, 5);
     KJE.DollarSlider("CURRENT_SAVINGS", "Current KiwiSaver balance", 0, 1000000, 0, 1, 5);
     KJE.PercentSlider("SAVINGS_PERCENT", "Total KiwiSaver contribution (including your employer’s)", 0, 100, 2, 1);
     KJE.InflationRateSlider("INFLATION_RATE", "Expected rate of inflation");
     KJE.Checkbox("MARRIED", "Married", false, "");
     KJE.Checkbox("INCLUDE_SOCIAL_SECURITY", "Include NZ Superannuation", true, "");
     KJE.DollarSlider("OTHER_PENSION_AMOUNT1", "Misc. income / pensions", KJE.parameters.get("OTHER_PENSION_AMT1_MIN", 0), KJE.parameters.get("OTHER_PENSION_AMT1_MAX", 10000));
     KJE.DollarSlider("OTHER_PENSION_AMOUNT2", "Retirement work income", KJE.parameters.get("OTHER_PENSION_AMT2_MIN", 0), KJE.parameters.get("OTHER_PENSION_AMT2_MAX", 10000));
     KJE.DollarSlider("OTHER_PENSION_AMOUNT3", "Additional retirement income", KJE.parameters.get("OTHER_PENSION_AMT3_MIN", 0), KJE.parameters.get("OTHER_PENSION_AMT3_MAX", 10000));
     KJE.Checkbox("OTHER_PENSION_INFLATION1", "Increase with inflation", true, KJE.parameters.get("MSG_OTHER_PENSION_AMOUNT1", "Misc. income / pensions"));
     KJE.Checkbox("OTHER_PENSION_INFLATION2", "Increase with inflation", true, KJE.parameters.get("MSG_OTHER_PENSION_AMOUNT2", "Retirement work income"));
     KJE.Checkbox("OTHER_PENSION_INFLATION3", "Increase with inflation", true, KJE.parameters.get("MSG_OTHER_PENSION_AMOUNT3", "Additional retirement income"));
     KJE.PercentSlider("CURRENT_TAX", "Current tax rate", 0, 50, 2);
     KJE.PercentSlider("RETIREMENT_TAX", "Retirement tax rate", 0, 50, 2);
     KJE.Checkbox("RETIREMENT_TAX_WITHDRAWALS", "Tax retirement income", false, "Check here");
     KJE.Checkbox("SOCIAL_SECURITY_TAX_WITHDRAWALS", "Tax 1/2 Social Security", false, "Check here");
     this.USE_OTHER_PENSION_START1 = KJE.parameters.get("SHOW_PENSION_START1", false);
     this.USE_OTHER_PENSION_START2 = KJE.parameters.get("SHOW_PENSION_START2", false);
     this.USE_OTHER_PENSION_START3 = KJE.parameters.get("SHOW_PENSION_START3", false);
     if (this.USE_OTHER_PENSION_START1) {
         KJE.NumberSlider("OTHER_PENSION_START1", "Misc. income / pensions starts", KJE.parameters.get("OTHER_PENSION_START1_MIN", 14), KJE.parameters.get("OTHER_PENSION_START1_MAX", 90), 0)
     }
     if (this.USE_OTHER_PENSION_START2) {
         KJE.NumberSlider("OTHER_PENSION_START2", "Retirement work income starts", KJE.parameters.get("OTHER_PENSION_START2_MIN", 14), KJE.parameters.get("OTHER_PENSION_START2_MAX", 90), 0)
     }
     if (this.USE_OTHER_PENSION_START3) {
         KJE.NumberSlider("OTHER_PENSION_START3", "Additional retirement income starts", KJE.parameters.get("OTHER_PENSION_START3_MIN", 14), KJE.parameters.get("OTHER_PENSION_START3_MAX", 90), 0)
     }
     this.USE_PENSION_LASTS1 = KJE.parameters.get("SHOW_PENSION_YEAR1", false);
     this.USE_PENSION_LASTS2 = KJE.parameters.get("SHOW_PENSION_YEAR2", false);
     if (this.USE_PENSION_LASTS1) {
         KJE.NumberSlider("OTHER_PENSION_LASTS1", "Years to work", 0, 30, 0, 1)
     }
     if (this.USE_PENSION_LASTS2) {
         KJE.NumberSlider("OTHER_PENSION_LASTS2", "Years to work", 0, 30, 0, 1)
     }
     var h = KJE.gNewGraph((i.NEST_EGG ? KJE.gCATEGORIES : KJE.gLINE), "GRAPH1", true, false, KJE.colorList[1], i.getGraphTitle());
     if (h) {
         h._titleXAxis.setText(KJE.parameters.get("MSG_GRAPH_1", ""));
         h._axisX.setVisible(!i.NEST_EGG);
         h._axisY.setVisible(true);
         h._legend._iOrientation = KJE.gLegend.BOTTOM;
         h._showItemLabel = true;
         h._showItemLabelOnTop = true;
         h._axisX._fSpacingPercent = 0.2
     }
     var a = KJE.parameters.get("MSG_DROPPER_TITLE", "Retirement plan inputs:");
     var c = KJE.parameters.get("MSG_DROPPER_CLOSETITLE", " Retire at age KJE1 with KJE2 of current income");
     var j = function() {
         return a + KJE.subText(KJE.getKJEReplaced(c, KJE.number(i.AGE_OF_RETIREMENT), KJE.percent(i.INCOME_PERCENT / 100, 3)), "KJECenter")
     };
     KJE.addDropper(new KJE.Dropper("INPUTS", true, a, j), KJE.colorList[0]);
     var b = KJE.parameters.get("MSG_DROPPER2_TITLE", "Investment returns, inflation and NZ Superannuation:");
     var d = KJE.parameters.get("MSG_DROPPER2_CLOSETITLE", "KJE1&nbsp;pre-retirement, KJE2&nbsp;in&nbsp;retirement, KJE3&nbsp;inflation, New&nbsp;Zealand&nbsp;government&nbsp;superannuation&nbsp;payments?&nbsp;KJE4");
     var f = function() {
         return b + KJE.subText(KJE.getKJEReplaced(d, KJE.percent(i.PRE_RATE_OF_RETURN / 100, 3), KJE.percent(i.POST_RATE_OF_RETURN / 100, 3), KJE.percent(i.INFLATION_RATE / 100, 3), (i.INCLUDE_SOCIAL_SECURITY ? KJE.MSG_YES : KJE.MSG_NO)), "KJECenter")
     };
     KJE.addDropper(new KJE.Dropper("INPUTS2", false, b, f), KJE.colorList[0]);
     this.DIV_RESULTS = document.getElementById("KJE-C-RESULTS");
     KJE.addDiv("RESULTS", KJE.colorList[1])
 };
 KJE.RetirementPlan.clear = function() {
     if (this.DIV_RESULTS) {
         this.DIV_RESULTS.innerHTML = ""
     }
 };
 KJE.RetirementPlan.prototype.setValues = function(b) {
     var a = KJE.inputs.items;
     b.CURRENT_AGE = a.CURRENT_AGE.getValue();
     b.HOUSEHOLD_INCOME = a.HOUSEHOLD_INCOME.getValue();
     b.PRE_RATE_OF_RETURN = a.PRE_RATE_OF_RETURN.getValue();
     b.AGE_OF_RETIREMENT = a.AGE_OF_RETIREMENT.getValue();
     b.POST_RATE_OF_RETURN = a.POST_RATE_OF_RETURN.getValue();
     b.SALARY_PERCENT = a.SALARY_PERCENT.getValue();
     b.YEARS_OF_RETIREMENT = a.YEARS_OF_RETIREMENT.getValue();
     b.INCOME_PERCENT = a.INCOME_PERCENT.getValue();
     b.CURRENT_SAVINGS = a.CURRENT_SAVINGS.getValue();
     b.INFLATION_RATE = a.INFLATION_RATE.getValue();
     b.SAVINGS_PERCENT = a.SAVINGS_PERCENT.getValue();
     b.INCLUDE_SOCIAL_SECURITY = a.INCLUDE_SOCIAL_SECURITY.getValue();
     b.MARRIED = a.MARRIED.getValue();
     b.CURRENT_TAX = a.CURRENT_TAX.getValue();
     b.RETIREMENT_TAX = a.RETIREMENT_TAX.getValue();
     b.OTHER_PENSION_AMOUNT[0] = a.OTHER_PENSION_AMOUNT1.getValue();
     b.OTHER_PENSION_AMOUNT[1] = a.OTHER_PENSION_AMOUNT2.getValue();
     b.OTHER_PENSION_AMOUNT[2] = a.OTHER_PENSION_AMOUNT3.getValue();
     b.OTHER_PENSION_INFLATION[0] = a.OTHER_PENSION_INFLATION1.getValue();
     b.OTHER_PENSION_INFLATION[1] = a.OTHER_PENSION_INFLATION2.getValue();
     b.OTHER_PENSION_INFLATION[2] = a.OTHER_PENSION_INFLATION3.getValue();
     b.RETIREMENT_TAX_WITHDRAWALS = a.RETIREMENT_TAX_WITHDRAWALS.getValue();
     b.SOCIAL_SECURITY_TAX_WITHDRAWALS = a.SOCIAL_SECURITY_TAX_WITHDRAWALS.getValue();
     if (this.USE_PENSION_LASTS1) {
         b.OTHER_PENSION_LASTS[0] = a.OTHER_PENSION_LASTS1.getValue()
     }
     if (this.USE_PENSION_LASTS2) {
         b.OTHER_PENSION_LASTS[1] = a.OTHER_PENSION_LASTS2.getValue()
     }
     if (this.USE_OTHER_PENSION_START1) {
         b.OTHER_PENSION_START[0] = a.OTHER_PENSION_START1.getValue()
     }
     if (this.USE_OTHER_PENSION_START2) {
         b.OTHER_PENSION_START[1] = a.OTHER_PENSION_START2.getValue()
     }
     if (this.USE_OTHER_PENSION_START3) {
         b.OTHER_PENSION_START[2] = a.OTHER_PENSION_START3.getValue()
     }
 };
 KJE.RetirementPlan.prototype.refresh = function(c) {
     var b = KJE;
     var a = KJE.gGraphs[0];
     KJE.setTitleTemplate(c.RESULTS_MSG);
     if (a) {
         a.removeAll();
         a.setTitle(c.getGraphTitle(true));
         if (c.NEST_EGG) {
             a.setGraphCategories(c.cats2);
             a.add(new KJE.gGraphDataSeries(c.DS_RETIRE1, c.sGraph2, a.getColor(1)))
         } else {
             a.setGraphCategories(c.cats);
             a.add(new KJE.gGraphDataSeries(c.DR_ENDING_BALANCE, c.sGraph2, a.getColor(1)));
             a.add(new KJE.gGraphDataSeries(c.DR_RETIREMENT_WITHDRAWAL, c.sGraph3, a.getColor(2)))
         }
         a.paint()
     }
     if (this.DIV_RESULTS) {
         this.DIV_RESULTS.innerHTML = "<div style='margin-right:10px'>" + KJE.setToggleTitleText(c.getGraphTitle(true), null, KJE) + "</div>"
     }
 };
 KJE.InputScreenText = " <div id=KJE-D-INPUTS><div id=KJE-P-INPUTS>Input information:</div></div> <div id=KJE-E-INPUTS > <div id='KJE-C-CURRENT_AGE'><input id='KJE-CURRENT_AGE' /></div> <div id='KJE-C-AGE_OF_RETIREMENT'><input id='KJE-AGE_OF_RETIREMENT' /></div> <div id='KJE-C-HOUSEHOLD_INCOME'><input id='KJE-HOUSEHOLD_INCOME' /></div> <div id='KJE-C-SAVINGS_PERCENT'><input id='KJE-SAVINGS_PERCENT' /></div> <div id='KJE-C-CURRENT_SAVINGS'><input id='KJE-CURRENT_SAVINGS' /></div> <div id='KJE-C-SALARY_PERCENT'><input id='KJE-SALARY_PERCENT' /></div> <div id='KJE-C-INCOME_PERCENT'><input id='KJE-INCOME_PERCENT' /></div> <div id='KJE-C-YEARS_OF_RETIREMENT'><input id='KJE-YEARS_OF_RETIREMENT' /></div> <div style=\"height:10px\"></div> </div> <div id=KJE-D-INPUTS2><div id=KJE-P-INPUTS2>Input information:</div></div> <div id=KJE-E-INPUTS2 > <div id='KJE-C-PRE_RATE_OF_RETURN'><input id='KJE-PRE_RATE_OF_RETURN' /></div> <div id='KJE-C-POST_RATE_OF_RETURN'><input id='KJE-POST_RATE_OF_RETURN' /></div> <div id='KJE-C-INFLATION_RATE'><input id='KJE-INFLATION_RATE' /></div> <!--<div id='KJE-C-MARRIED'><input id='KJE-MARRIED' type=checkbox /></div>--> <div id='KJE-C-INCLUDE_SOCIAL_SECURITY'><input id='KJE-INCLUDE_SOCIAL_SECURITY' type=checkbox /></div> <div style=\"height:10px\"></div> </div> **GRAPH1** ";
 KJE.DefinitionText = " <div id='KJE-D-CURRENT_AGE' ><dt>Current age</dt><dd>Your current age.</dd></div> <div id='KJE-D-AGE_OF_RETIREMENT' ><dt>Age you plan to retire</dt><dd>Our calculator assumes that you will no longer make any retirement saving contributions to KiwiSaver after you reach the retirement age. So, if you retire at 65 years of age, your last retirement contribution will be made at age 64. While in practice you will contribute every payday with KiwiSaver, our calculator assumes that you contribute once, annually, at the end of each year. The difference is minimal, and our calculator is more conservative as a result as it does not include any compounding gains made within one year.</dd></div> <div id='KJE-D-HOUSEHOLD_INCOME' ><dt>Your annual income (pre-tax)</dt><dd>Your total income, pre-tax, paid by your employer or your business. Do not include income from other sources, such as investment properties, shares or managed funds.</dd></div> <div id='KJE-D-CURRENT_SAVINGS' ><dt>Current KiwiSaver balance</dt><dd>This is your current KiwiSaver balance as it appears today, or as recent as you know.</dd></div> <div id='KJE-D-PRE_RATE_OF_RETURN' ><dt>Expected rate of return before retirement</dt><dd>This is the annual rate of return you expect from your KiwiSaver performance, after tax and after fees. For example, the 10-year, pre-tax annual performance of leading KiwiSaver Conservative and Growth funds is around 5% and 7% respectively, as of December 2018. The actual rate of return on investments can vary widely over time, and there is a risk of your total investment losing value for a period in a global financial correction or crash. Since 1920 there have only been two crashes (1929 and 2018) but plenty of 20%+ corrections. **ROR_DEFINITION**</dd></div> <div id='KJE-D-POST_RATE_OF_RETURN' ><dt>Expected rate of return during retirement</dt><dd>This is the expected annual after-tax rate of return you expect from your KiwiSaver fund during retirement. This is likely to be a lower return than your expected rate of return before retirement because most New Zealanders switch to a conservative or cash fund option.<br><br>The actual rate of return is largely dependent on the types of investments you select. Most KiwiSaver cash funds have paid an average of between 2.50% to 3.00% after-tax in the 10 years to December 2018. Term deposits, i.e. leaving money in a bank account, currently pay around 2.00% to 4.00% depending on the length of the term, whereas on-call bank accounts pay between 0.00% to 0.25%.<br><br>All of the information above is historical or hypothetical and no guarantee of future returns. The actual rate of return on investments can vary widely over time, and there is a risk of your total investment losing value in a global financial crash.</dd></div> <div id='KJE-D-SAVINGS_PERCENT' ><dt>Total KiwiSaver contribution (including your employer’s)</dt><dd>Your employer contributes 3% to your KiwiSaver. You either contribute, 3%, 4% or 8% of your before-tax pay. For example, if you contribute 3%, the total KiwiSaver contribution is 6% (3% from your employer and 3% from you).</dd></div> <div id='KJE-D-SALARY_PERCENT' ><dt>Expected annual pay rise</dt><dd>This is the percentage you expect your income to increase every year. As a baseline, throughout New Zealand, most salaries and wages go up between 2% and 4% per year. In 2018, Stats NZ reported hourly earnings increased 2.9 percent for wage and salary workers.</dd></div> <div id='KJE-D-YEARS_OF_RETIREMENT' ><dt>Expected years of retirement income</dt><dd>This is the total number of years you expect to use your retirement income. For example, if you plan to retire at 65 and live until you are 90, that is 25 years.</dd></div> <div id='KJE-D-INCOME_PERCENT' ><dt>Percentage of current income you want during retirement</dt><dd>This is the percentage of your pre-retirement household income you think you will need in retirement. For example, if you currently earn $60,000 per year and would like a retirement income of $30,000 (excluding government superannuation payments), then the percentage is 50%. If you earn $100,000 and want a retirement income of $75,000, then the percentage is 75%. This amount is based on your income earned during the year immediately before your retirement, and it will increase every year to your expected retirement age if you have inserted a percentage into the expected annual pay rise (above).</dd></div> <div id='KJE-D-INFLATION_RATE' ><dt>Expected rate of inflation</dt><dd>**INFLATION_DEFINITION** <!--STARTHIDETAXES--></dd></div><!-- <div id='KJE-D-MARRIED' ><dt>Married checkbox</dt><dd>Check this box if you are married. Married couples have a higher maximum Social Security benefit than single wage earners.</dd></div>--> <div id='KJE-D-INCLUDE_SOCIAL_SECURITY' ><dt>NZ Superannuation payments</dt><dd>Check this box if you wish to include NZ Superannuation payments in your retirement planning. The New Zealand government automatically increases the superannuation payments each year based on increases in the Consumer Price Index. </dd></div> ";
 KJE.ReportText = ' <h2 class=\'KJEReportHeader KJEFontHeading\'>RESULTS_MSG</h2> <p>END_OF_RETIREMENT_MESSAGE RESPONSE This assumes annual retirement expenses of INCOME_REQUIRED_AT_RETIRE which is INCOME_PERCENT of your last year\'s income of INCOME_AT_RETIRE. SOCIAL_SECURITY_MSG <p>**GRAPH** <!--ADJUST_ADVICE--> <h2 class=\'KJEReportHeader KJEFontHeading\'>To help meet your goal, you may wish to do one of the following:</h2> <UL> <li>Increase contributions to ADJUST_SAVINGS_RATE of your income (ADJUST_ANNUAL_SAVINGS annual savings, which INCREASE_ANNUAL_SAVINGS increase as your income increases) <li>Increase your rate of return before retirement to ADJUST_ROR. <li>Reduce your required income in retirement to ADJUST_INCOME_REQUIRED of your final year\'s income. <li>Delay your retirement until age ADJUST_YEARS. </UL> <!--/ADJUST_ADVICE--> <div class=KJEReportTableDiv><table class=KJEReportTable><caption class=\'KJEHeaderRow KJEHeading\'>Retirement Plan Inputs</caption> <tr class=KJEOddRow><th class="KJELabel KJECellBorder KJECell50">Current age</th><td class="KJECell KJECell50">CURRENT_AGE</td></tr> <tr class=KJEEvenRow><th class="KJELabel KJECellBorder">Age you plan to retire</th><td class="KJECell">AGE_OF_RETIREMENT</td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder">Your annual income (pre-tax)</th><td class="KJECell">HOUSEHOLD_INCOME</td></tr> <tr class=KJEEvenRow><th class="KJELabel KJECellBorder r">Current KiwiSaver balance</th><td class="KJECell">CURRENT_SAVINGS</td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder">Total KiwiSaver contribution (including your employer’s)</th><td class="KJECell">SAVINGS_PERCENT (ANNUAL_SAVINGS annually which INCREASE_ANNUAL_SAVINGS increase as your income increases)</td></tr> <tr class=KJEEvenRow><th class="KJELabel KJECellBorder">Expected annual pay rise</th><td class="KJECell">SALARY_PERCENT</td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder">Expected years of retirement income</th><td class="KJECell">YEARS_OF_RETIREMENT</td></tr> <tr class=KJEEvenRow><th class="KJELabel KJECellBorder">Percentage of current income you want during retirement</th><td class="KJECell">INCOME_PERCENT</td></tr> <!--STARTHIDETAXES--> <tr class=KJEHeaderRow><th class=KJEHeading colspan=4>Investment Returns and Inflation</th></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder">Expected rate of return before retirement</th><td class="KJECell">PRE_RATE_OF_RETURN</td></tr> <tr class=KJEEvenRow><th class="KJELabel KJECellBorder">Expected rate of return during retirement</th><td class="KJECell">POST_RATE_OF_RETURN</td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder">Expected inflation rate</th><td class="KJECell">INFLATION_RATE</td></tr> <!--<tr class=KJEEvenRow><th class="KJELabel KJECellBorder">Are you married?</th><td class="KJECell">MARRIED</td></tr>--> <tr class=KJEEvenRow><th class="KJELabel KJECellBorder">Include  NZ Superannuation?</th><td class="KJECell">INCLUDE_SOCIAL_SECURITY</td></tr> <!--ENDHIDETAXES--> <tr class=KJEHeaderRow><th class=KJEHeading colspan=4>Result Summary</th></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder">Years until retirement</th><td class="KJECell KJELabel">YEARS_UNTIL_RETIREMENT</td></tr> <tr class=KJEEvenRow><th class="KJELabel KJECellBorder">Your last year\'s income</th><td class="KJECell KJELabel">INCOME_AT_RETIRE</td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder">Estimated annual retirement expenditures</th><td class="KJECell KJELabel">INCOME_REQUIRED_AT_RETIRE</td></tr> <tr class=KJEEvenRow><th class="KJELabel KJECellBorder">Your ending balance</th><td class="KJECell KJELabel">ENDING_BALANCE</td></tr> </table> </div> <h2 class=\'KJEScheduleHeader KJEFontHeading\'>Balances by year*</h2> **REPEATING GROUP** <p class=KJEFooter>* This chart and table reflect expected annual rates of KiwiSaver balance growth, income growth and other factors. The chart and table act as a guide only. </p> ';
 KJE.parameters.set("CURRENT_AGE", 25);
 KJE.parameters.set("AGE_OF_RETIREMENT", 65);
 KJE.parameters.set("HOUSEHOLD_INCOME", 50000);
 KJE.parameters.set("CURRENT_SAVINGS", 100000);
 KJE.parameters.set("INFLATION_RATE", KJE.Default.InflationRate);
 KJE.parameters.set("POST_RATE_OF_RETURN", KJE.Default.RORRetire);
 KJE.parameters.set("PRE_RATE_OF_RETURN", KJE.Default.RORMarket);
 KJE.parameters.set("INCOME_PERCENT", 90);
 KJE.parameters.set("SALARY_PERCENT", 2);
 KJE.parameters.set("SAVINGS_PERCENT", 6);
 KJE.parameters.set("YEARS_OF_RETIREMENT", 35);
 KJE.parameters.set("INCLUDE_SOCIAL_SECURITY", false);
 KJE.parameters.set("MARRIED", false); /**V3_EXTRA_PARAMETERS**/
 mapCalcValues([
     ["age", "CURRENT_AGE"],
     ["retage", "AGE_OF_RETIREMENT"],
     ["income", "HOUSEHOLD_INCOME"],
     ["sav", "CURRENT_SAVINGS"],
     ["prerate", "PRE_RATE_OF_RETURN"],
     ["postrate", "POST_RATE_OF_RETURN"],
     ["percontr", "SAVINGS_PERCENT"],
     ["sincr", "SALARY_PERCENT"],
     ["yrinc", "YEARS_OF_RETIREMENT"],
     ["perret", "INCOME_PERCENT"],
     ["infl", "INFLATION_RATE"]
 ]); /* */
 if (KJE.IE7and8) KJE.init();
