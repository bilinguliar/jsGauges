var jsGauges = {

    settings: { // EDITABLE SETTINGS
        // Linear and round gauges style settings are different.
        // ROUND GAUGES SETTINGS
        rpm: {
            gaugeRadius: 100,                  // Raphael drawing will be 2px bigger than gauge.
            step: 1,                    // Numerate each "step" * "scaleDivisionValue". In this gauge each 1000.
            stepStroke: 5,                    // Graduation width of each numerated step.
            subStep: 0,                    // Choose substeps.
            subStepStroke: 2,                    // Graduation width of each non-numerated step.
            subSubStep: 0,                    // Choose subsubstep.
            font: "12px Arial",
            fontColor: "#000",
            fontStroke: 0,
            textMargin: 13,
            max: 18000,                // Number of numerated steps.
            min: 1000,                 // Starting from.
            scaleDivisionValue: 1000,                 // changing amount of graduation steps. (max - min) / scaleDivisionValue = 18
            textNumRatio: 1000,                 // If you want to show 10 instead of 1000 - use textNumRatio = 100
            startAngle: 225,                  // Start graduation from (number) degrees. Where first graduation mark will be located.
            gradAngle: 270,                  // Graduation angle. Angle of arc with graduation.
            background: "270-#E4E4E4-#bbb",   // Gauge backgroung color. Color or gradient.
            strokeColor: "#454343",
            strokeOpacity: 1,                    // Opacity from 0 to 1.
            strokeWidth: 10,                   // width in px
            handColor: "270-#FF9A00-#FF7B00",
            handStrokeColor: "#000",
            handStrokeWidth: 1,
            handOpacity: 1,
            handMaxWidth: 30,                   // Hand width in the gauge center.
            handMinWidth: 4,                    // Hand width close to graduation.
            handLengthTune: -30,                  // Adjust hand length. Value in pixels. "-30" makes it 30px less.
            handHolder: 40,                   // Display hand holder in gauge center. Radius in pixels. "0" if you don't want any.
            handHolderColor: "270-#E4E4E4-#bbb",
            handHolderStroke: 5,
            handHolderStrkClr: "#454343",
            graduationColor: "#000",
            graduationLength: 7,
            graduationMargin: 5,                    // Margin graduation from gauge border.
            redZoneStart: 15000,                // Red zone starts from this value. Or "false".
            redZoneEnd: 18000,                // Where red zone ends.
            redZoneColor: "#A30000",
            redZoneOpacity: 1,
            alarmShow: true,                 // Show alarm sign when value is in red zone. True or false.
            alarmSignWidth: 30,                   // Width and height of alarm sign.
            alarmFill: "white",
            alarmStroke: "red",
            alarmStrokeWidth: 3,
            alarmBlink: false,                // Should alarm sign blink or not. Works just when you have one gauge on a page.
            alarmGlow: "white",              // Alarm sign glow color.
            alarmFont: "18px Arial",
            alarmFontColor: "#000",
            alarmText: "!",                  // Text that you want to display when alarm sign appears.
            gaugeText: "x100 \n RPM",        // String or false. ("Km/h", "RPM", etc) "\n" to start new line
            gaugeTextX: 0,                    // Relative X position from gauge center
            gaugeTextY: 70,                   // Relative Y position from gauge center
            gaugeTextColor: "#454343",
            gaugeTextFont: "12px Arial"
        },

        speed: {
            gaugeRadius: 150,
            step: 10,
            stepStroke: 3,
            subStep: 5,
            subStepStroke: 1,
            subSubStep: 1,
            font: "13px Arial",
            fontColor: "#FF8900",
            fontStroke: 0,
            textMargin: 15,
            max: 300,
            min: 0,
            scaleDivisionValue: 2,
            textNumRatio: 1,
            startAngle: 225,
            gradAngle: 270,
            background: "r#292929-#101010",
            strokeColor: "#fff",
            strokeOpacity: 1,
            strokeWidth: 5,
            handColor: "#A01515",
            handStrokeColor: "#000",
            handStrokeWidth: 0,
            handOpacity: 1,
            handMaxWidth: 8,
            handMinWidth: 4,
            handLengthTune: 0,
            handHolder: 10,
            handHolderColor: "r#292929-#101010",
            handHolderStroke: 0,
            handHolderStrkClr: "#000",
            graduationColor: "#C3C3C3",
            graduationLength: 15,
            graduationMargin: 10,
            redZoneStart: false,
            redZoneEnd: false,
            redZoneColor: "#A30000",
            redZoneOpacity: 1,
            alarmShow: true,
            alarmSignWidth: 35,
            alarmFill: "white",
            alarmStroke: "red",
            alarmStrokeWidth: 3,
            alarmBlink: false,
            alarmGlow: "white",
            alarmFont: "18px Arial",
            alarmFontColor: "#000",
            alarmText: "!",
            gaugeText: "km/h",
            gaugeTextX: 0,
            gaugeTextY: 50,
            gaugeTextColor: "#FF8900",
            gaugeTextFont: "15px Arial"
        },

        test: {
            gaugeRadius: 150,
            step: 10,
            stepStroke: 3,
            subStep: 5,
            subStepStroke: 2,
            subSubStep: 1,
            font: "12px Arial",
            fontColor: "black",
            fontStroke: 0,
            textMargin: 20,
            max: 1000,
            min: 0,
            scaleDivisionValue: 10,
            textNumRatio: 1,
            startAngle: 180,
            gradAngle: 270,
            background: "white",
            strokeColor: "#636363",
            strokeOpacity: 0,
            strokeWidth: 0,
            handColor: "#A01515",
            handStrokeColor: "#A01515",
            handStrokeWidth: 0,
            handOpacity: 1,
            handMaxWidth: 3,
            handMinWidth: 1,
            handLengthTune: 0,
            handHolder: 0,
            handHolderColor: "#fff",
            handHolderStroke: 1,
            handHolderStrkClr: "#636363",
            graduationColor: "#636363",
            graduationLength: 20,
            graduationMargin: 5,
            redZoneStart: 800,
            redZoneEnd: 1000,
            redZoneColor: "#D92F2F",
            redZoneOpacity: 1,
            alarmShow: true,
            alarmSignWidth: 30,
            alarmFill: "white",
            alarmStroke: "red",
            alarmStrokeWidth: 3,
            alarmBlink: false,
            alarmGlow: "white",
            alarmFont: "18px Arial",
            alarmFontColor: "#000",
            alarmText: "!",
            gaugeText: "Precision \n somethingmeter",
            gaugeTextX: 0,
            gaugeTextY: -30,
            gaugeTextColor: "#636363",
            gaugeTextFont: "10px Arial"
        },

        load: {
            gaugeRadius: 150,
            step: 10,
            stepStroke: 3,
            subStep: 5,
            subStepStroke: 2,
            subSubStep: 1,
            font: "14px Arial",
            fontColor: "black",
            fontStroke: 0,
            textMargin: 20,
            max: 1000,
            min: 0,
            scaleDivisionValue: 10,
            textNumRatio: 1,
            startAngle: 180,
            gradAngle: 330,
            background: "white",
            strokeColor: "#000",
            strokeOpacity: 1,
            strokeWidth: 1,
            handColor: "#000",
            handStrokeColor: "#000",
            handStrokeWidth: 0,
            handOpacity: 1,
            handMaxWidth: 5,
            handMinWidth: 1,
            handLengthTune: 0,
            handHolder: 5,
            handHolderColor: "#000",
            handHolderStroke: 0,
            handHolderStrkClr: "#000",
            graduationColor: "#000",
            graduationLength: 20,
            graduationMargin: 5,
            redZoneStart: 900,
            redZoneEnd: 1000,
            redZoneColor: "#D92F2F",
            redZoneOpacity: 1,
            alarmShow: true,
            alarmSignWidth: 30,
            alarmFill: "white",
            alarmStroke: "red",
            alarmStrokeWidth: 3,
            alarmBlink: false,
            alarmGlow: "white",
            alarmFont: "18px Arial",
            alarmFontColor: "#000",
            alarmText: "!",
            gaugeText: "Precision \n somethingmeter",
            gaugeTextX: 0,
            gaugeTextY: 40,
            gaugeTextColor: "#000",
            gaugeTextFont: "10px Arial"
        },
        // ROUND GAUGES SETTINGS ENDED
        // LINEAR GAUGES SETTINGS STARTED
        temp: {
            animationTime: 100,                              // Column animation time in ms.
            alarmShow: true,                             // Show alarm sign when value is in red zone. True or false.
            alarmBlink: false,                            // Should alarm sign blink or not. Works just when you have one gauge on a page.
            alarmText: "!",                              // Text that you want to display when alarm sign appears.
            alarmFont: "30px Arial",
            alarmFontColor: "#000",
            alarmGlow: "white",
            alarmFill: "white",
            alarmStroke: "red",
            alarmStrokeWidth: 3,
            gaugeHeight: 300,                              // Height in pixels.
            gaugeWidth: 100,                              // Width in pixels.
            step: 10,                               // Numerate each "step" * "scaleDivisionValue". In this gauge each 1000.
            subStep: 5,                                // Each fifth graduation mark will be longer than subsubstep
            subSubStep: 1,                                // Each 1 mark will be short. Subsubstep.
            max: 50,                               // Max value for graduation.
            min: -50,                              // Min value for graduation.
            scaleDivisionValue: 1,                                // changing amount of graduation steps. (max - min) / scaleDivisionValue = 100
            textNumRatio: 1,                                // If you want to show 10 instead of 1000 - use textNumRatio = 100
            background: "0-#000-#272727:40-#000",         // Gauge background color. Color or gradient.
            strokeColor: "#313131",
            strokeOpacity: 1,                                // Number 0 - 1
            strokeWidth: 4,                                // Width in pixels.
            greenValueStart: 20,                                // From this
            greenValueEnd: 27,                             // to this values column will be displayed green.
            columnGreenColor: "0-#5C8926-#71A138:30-#5C8926",   // Column green color.
            yellowValueStart: 28,                             // From this
            yellowValueEnd: 34,                             // to this values column will be displayed yellow.
            columnYellowColor: "0-#CEAC39-#E0C362:30-#CEAC39",   // Column yellow color.
            redValueStart: 35,                             // From this
            redValueEnd: 51,                            // to this values column will be displayed red.
            columnRedColor: "0-#9E1313-#D64646:30-#9E1313",   // Column red color.
            columnWidth: 50,                               // Gauge column width.
            columnMarginY: 20,                               // Column margin top and margin bottom,
            columnStroke: "none",                           // Color of stroke
            columnStrokeWidth: 0,                                // Width in pixels
            columnStrokeOpacity: 1,                                // Number 0 - 1
            graduationColor: "#777777",                        // Stroke color
            gradRedZoneColor: "#9E0000",                        // Color of graduation in red zone.
            textMarginRight: 10,
            font: "10px Arial",
            fontColor: "#C3C3C3",
            redZoneStart: 30,                               // Red zone starts from this value. Or "false".
            redZoneEnd: 50,                               // Where red zone ends. Or "false".
            gaugeText: "Temperature",                    // String or false. ("Km/h", "RPM", etc) "\n" to start new line
            gaugeTextX: 0,                                // Realtive X position from gauge center
            gaugeTextY: 143,                              // Realtive Y position from gauge center
            gaugeTextColor: "#fff",
            gaugeTextFont: "10px Arial"
        },

        level: {
            animationTime: 100,
            alarmShow: true,
            alarmBlink: false,
            alarmText: "!",
            alarmFont: "30px Arial",
            alarmFontColor: "#000",
            alarmGlow: "white",
            alarmFill: "white",
            alarmStroke: "red",
            alarmStrokeWidth: 3,
            gaugeHeight: 300,
            gaugeWidth: 100,
            step: 10,
            subStep: 5,
            subSubStep: 1,
            max: 100,
            min: 0,
            scaleDivisionValue: 1,
            textNumRatio: 1,
            background: "#fff",
            strokeColor: "#005708",
            strokeOpacity: 0,
            strokeWidth: 0,
            greenValueStart: 0,
            greenValueEnd: 33,
            columnGreenColor: "0-#5C8926-#71A138:30-#5C8926",
            yellowValueStart: 34,
            yellowValueEnd: 67,
            columnYellowColor: "0-#CEAC39-#E0C362:30-#CEAC39",
            redValueStart: 68,
            redValueEnd: 101,
            columnRedColor: "0-#9E1313-#D64646:30-#9E1313",
            columnWidth: 50,
            columnMarginY: 20,
            columnStroke: "none",
            columnStrokeWidth: 0,
            columnStrokeOpacity: 1,
            graduationColor: "#000",
            gradRedZoneColor: "#9E0000",
            textMarginRight: 10,
            font: "10px Arial",
            fontColor: "#000",
            redZoneStart: 90,
            redZoneEnd: 100,
            gaugeText: "LOAD",
            gaugeTextX: 0,
            gaugeTextY: 143,
            gaugeTextColor: "#000",
            gaugeTextFont: "10px Arial"
        }
        // LINEAR GAUGES SETTINGS ENDED
        // EDITABLE SETTINGS ENDED
    },

    getData: function () { // Loading JSON

        function doMock() {
            jsGauges.json = {"round": {}, "linear":{}};

            jsGauges.json.round.rpm = (Math.random() * 10000) + 1;
            jsGauges.json.round.speed = (Math.random() * 100) + 1;
            jsGauges.json.round.test = (Math.random() * 100) + 1;
            jsGauges.json.round.load = (Math.random() * 1000) + 1;

            jsGauges.json.linear.temp = (Math.random() * 100) + 1;
            jsGauges.json.linear.level = (Math.random() * 100) + 1;
        }

        // SETTINGS
        jsGauges.settings.targetDiv = document.getElementById("jsGauges"); // Target DIV
        jsGauges.settings.interval = 1000; // AJAX refreshing interval in ms.
        // SETTINGS ENDED

        if (!jsGauges.json) {       // If data loaded first time - build gauges.

            doMock();
            jsGauges.placeDivs();

        } else {                    // Else just update

            doMock();
            jsGauges.update();
        }

    },

    // Parses JSON file. Places DIVs for gauges.
    placeDivs: function () {

        var fragment = document.createDocumentFragment(),
            roundDiv,
            linearDiv;

        if (jsGauges.json.round) {

            for (var a in jsGauges.json.round) {
                roundDiv = document.createElement("div");
                roundDiv.id = a;
                roundDiv.className = "roundGauge";
                fragment.appendChild(roundDiv);
            }
        }

        if (jsGauges.json.linear) {

            for (var b in jsGauges.json.linear) {
                linearDiv = document.createElement("div");
                linearDiv.id = b;
                linearDiv.className = "linearGauge";
                fragment.appendChild(linearDiv);
            }
        }

        jsGauges.settings.targetDiv.appendChild(fragment);

        jsGauges.placeGauges();
    },

    // Draws paths (shapes, graduation) for all gauges. Just once.
    // All hands and columns are drawn and animated in jsGauges.update() function.
    placeGauges: function () {

        /* drawAlarmSign function params:
         *   divID,
         *   alarmSettings = {
         *       width,              // Width of alarm sign
         *       startX,             // Left lower corner position X
         *       startY,             // Left lower corner position Y
         *       alarmAttr,          // Object with alarm styling settings {fill: "red", "stroke-width": 2}
         *       alarmGlow           // Glow color "#fff"
         *   },
         *   alarmTextSettings = {
         *       textX,              // Text X position
         *       textY,              // Text Y position
         *       alarmTextAttr,      // Object with alarm text styling settings {font: "Arial", "font-size": 12}
         *       textData            // String with text
         *   }
         */
        function drawAlarmSign(divId, alarmSettings, alarmTextSettings, settings) {

            if (!settings.alarmShow) {
                return;
            }

            // Draw and hide alarm sign
            var paper = jsGauges[divId].paper,
                alarmX1 = alarmSettings.width,
                alarmY1 = "0",
                alarmX2 = "-" + (alarmX1 / 2),
                alarmY2 = "-" + alarmX1,
                alarm,
                alarmText,
                alarmGlow,
                alarmSet = jsGauges.toUpdate[divId].alarmSet = paper.set();

            // Drawing triangle path
            alarm = paper.path("M" + alarmSettings.startX + "," + alarmSettings.startY + "l" + alarmX1 + "," + alarmY1 + " " + alarmX2 + "," + alarmY2 + "z");
            alarm.attr(alarmSettings.alarmAttr);

            // Draw "glow" for alarm triangle
            alarmGlow = alarm.glow();
            alarmGlow.attr({stroke: alarmSettings.alarmGlow});

            // Drawing alarm text
            alarmText = paper.text(alarmTextSettings.textX, alarmTextSettings.textY, alarmTextSettings.textData);
            alarmText.attr(alarmTextSettings.alarmTextAttr);

            // Put alarm triangle, glow and text in a set
            alarmSet.push(alarmGlow, alarm, alarmText);
        }

        function getElementsByClassName(node, classname) {

            var a = [],
                re = new RegExp('(^| )' + classname + '( |$)'),
                els = node.getElementsByTagName("*");

            for (var i = 0, j = els.length; i < j; i += 1) {
                if (re.test(els[i].className)) {
                    a.push(els[i]);
                }
            }

            return a;
        }


        // Function draws all ROUND GAUGES
        function drawRoundGauge(gaugesDiv, settings) {
            var paperWidth = (settings.gaugeRadius + 1 + settings.strokeWidth) * 2;
            jsGauges[gaugesDiv.id] = {};
            jsGauges[gaugesDiv.id].paper = Raphael(gaugesDiv, paperWidth, paperWidth);

            var paper = jsGauges[gaugesDiv.id].paper,
                circleRadius = settings.gaugeRadius,
                circleXY = settings.gaugeRadius + (settings.strokeWidth / 2),
                roundGauge = paper.circle(circleXY, circleXY, circleRadius),
                startAngle = settings.startAngle,
                gradSet = paper.set(),
                gradAmount = (settings.max - settings.min) / settings.scaleDivisionValue,
                gradLength = settings.graduationLength,
                gradAngle = settings.gradAngle,
                gradDensity = gradAngle / gradAmount,
                gradCoordAmount = 360 / gradDensity,
                gradMargin = settings.graduationMargin,
                beta = Math.PI * 2 / gradCoordAmount,
                scaleDivisionValue = settings.scaleDivisionValue,
                r1 = (circleRadius - gradMargin),
                r2 = r1 - gradLength,
                redZoneRadius = circleRadius - gradMargin - (gradLength / 2),
                redZone,
                redZoneStartX,
                redZoneStartY,
                redZoneEndX,
                redZoneEndY,
                alarmSettings,
                alarmTextSettings,
                delta,
                gradItemX1,
                gradItemX2,
                gradItemY1,
                gradItemY2,
                gradStroke,
                textX,
                textY,
                textNumData;

            jsGauges.toUpdate[gaugesDiv.id] = {};
            jsGauges.toUpdate[gaugesDiv.id].handLength = circleRadius - gradMargin - gradLength;
            jsGauges.settings[gaugesDiv.id].circleX = circleXY;

            roundGauge.attr({
                fill: settings.background,
                stroke: settings.strokeColor,
                "stroke-opacity": settings.strokeOpacity,
                "stroke-width": settings.strokeWidth
            });

            // Distribute graduation in circle
            for (var a = 0; a <= gradAmount; a += 1) {

                var alpha = beta * (a + (startAngle / gradDensity)) - Math.PI / 2,
                    cos = Math.cos(alpha),
                    sin = Math.sin(alpha),
                    realVal = (a + settings.min / scaleDivisionValue) * scaleDivisionValue;

                gradItemX1 = circleXY + r1 * cos;
                gradItemY1 = circleXY + r1 * sin;

                if (settings.redZoneStart && realVal == settings.redZoneStart) {

                    redZoneStartX = circleXY + (r2 + (gradLength * 0.5)) * cos;
                    redZoneStartY = circleXY + (r2 + (gradLength * 0.5)) * sin;
                }

                if (settings.redZoneStart && realVal == settings.redZoneEnd) {

                    redZoneEndX = circleXY + (r2 + (gradLength * 0.5)) * cos;
                    redZoneEndY = circleXY + (r2 + (gradLength * 0.5)) * sin;

                    // RedZone ARC Draw (rx ry x-axis-rotation large-arc-flag sweep-flag x y)+
                    redZone = paper.path([
                        ["M", redZoneStartX, redZoneStartY],
                        ["A", redZoneRadius, redZoneRadius, 0, 0, 1, redZoneEndX, redZoneEndY]
                    ]);
                    redZone.attr({
                        fill: "none",
                        stroke: settings.redZoneColor,
                        "stroke-opacity": settings.redZoneOpacity,
                        "stroke-width": gradLength
                    });
                }

                if (a % settings.step === 0) {

                    delta = 0.9;
                    textX = circleXY + ((r2 * delta) - settings.textMargin) * cos;
                    textY = circleXY + ((r2 * delta) - settings.textMargin) * sin;
                    textNumData = realVal / settings.textNumRatio;
                    gradStroke = settings.stepStroke;

                    paper.text(textX, textY, textNumData).attr({
                        "stroke-width": settings.fontStroke,
                        font: settings.font,
                        fill: settings.fontColor
                    });

                } else if (a % settings.subStep === 0) {

                    delta = 0.95;
                    gradStroke = settings.subStepStroke;

                } else if (a % settings.subSubStep === 0) {

                    delta = 0.99;
                    gradStroke = settings.subSubStepStroke;

                }

                gradItemX2 = circleXY + (r2 * delta) * cos;
                gradItemY2 = circleXY + (r2 * delta) * sin;

                gradSet.push(paper.path([
                        ["M", gradItemX1, gradItemY1],
                        ["L", gradItemX2, gradItemY2]
                    ]).attr({
                        "stroke-width": gradStroke,
                        stroke: settings.graduationColor
                    }));
            }

            gradSet.toFront();

            alarmSettings = {
                width: settings.alarmSignWidth,                          // Width of alarm sign
                startX: circleXY - (settings.alarmSignWidth / 2),          // Left lower corner position X
                startY: circleXY + (settings.alarmSignWidth / 2),          // Left lower corner position Y
                alarmAttr: {                                                 // Object with alarm styling settings {fill: "red", "stroke-width": 2}
                    fill: settings.alarmFill,
                    stroke: settings.alarmStroke,
                    "stroke-width": settings.alarmStrokeWidth
                },
                alarmGlow: settings.alarmGlow      // Glow color "#fff"
            };

            alarmTextSettings = {
                textX: alarmSettings.startX + (alarmSettings.width / 2),                             // Text X position
                textY: alarmSettings.startY + (alarmSettings.width / 5) - parseInt(settings.alarmFont),    // Text Y position
                alarmTextAttr: {
                    font: settings.alarmFont,
                    fill: settings.alarmFontColor
                },
                textData: settings.alarmText       // String with text
            };

            drawAlarmSign(gaugesDiv.id, alarmSettings, alarmTextSettings, settings);

            // Draw optional gauge text (RPM, km/h, etc)
            if (settings.gaugeText) {
                paper.text(settings.gaugeTextX + circleXY, settings.gaugeTextY + circleXY, settings.gaugeText).attr({
                    fill: settings.gaugeTextColor,
                    font: settings.gaugeTextFont
                });
            }
        }

        // Function draws all LINEAR GAUGES
        function drawLinearGauge(gaugesDiv, settings) {

            var paperHeight = settings.gaugeHeight + settings.strokeWidth,
                paperWidth = settings.gaugeWidth + settings.strokeWidth;

            jsGauges[gaugesDiv.id] = {};
            jsGauges[gaugesDiv.id].paper = Raphael(gaugesDiv, paperWidth, paperHeight);

            var paper = jsGauges[gaugesDiv.id].paper,
                halfStroke = settings.strokeWidth / 2,
                linearGauge = paper.rect(halfStroke, halfStroke, settings.gaugeWidth, settings.gaugeHeight),
                gradAmount = (settings.max - settings.min) / settings.scaleDivisionValue,
                gradMargin = (settings.gaugeHeight - (settings.columnMarginY * 2)) / gradAmount,
                gradWidth = (settings.gaugeWidth - halfStroke - settings.columnWidth) / 2,
                columnMaxHeight = settings.gaugeHeight - (settings.columnMarginY * 2),
                columnStartY = halfStroke + settings.columnMarginY + columnMaxHeight,
                columnStartX = (paperWidth / 2) - (settings.columnWidth / 2),
                alarmSettings,
                alarmTextSettings,
                gradX,
                gradY,
                gradNum,
                gradStroke,
                pathTo;

            // Saving some data in object to make them available from jsGauges.update() function.
            jsGauges.settings[gaugesDiv.id].columnMaxHeight = columnMaxHeight;
            jsGauges.settings[gaugesDiv.id].gradAmount = gradAmount;
            jsGauges.settings[gaugesDiv.id].columnStartX = columnStartX;
            jsGauges.settings[gaugesDiv.id].columnStartY = columnStartY;
            jsGauges.toUpdate[gaugesDiv.id] = {};

            linearGauge.attr({
                fill: settings.background,
                stroke: settings.strokeColor,
                "stroke-opacity": settings.strokeOpacity,
                "stroke-width": settings.strokeWidth
            });

            // Adding graduation and text.
            for (var d = 0; d <= gradAmount; d += 1) {

                gradX = columnStartX;
                gradY = halfStroke + settings.columnMarginY + columnMaxHeight - (d * gradMargin);

                // Filter numbers to find where to draw text.   
                if (d % settings.step === 0) {

                    gradNum = settings.min + (d * settings.scaleDivisionValue);

                    // Draw numbers here
                    paper.text((settings.gaugeWidth - settings.textMarginRight), gradY, (gradNum / settings.textNumRatio)).attr({
                        font: settings.font,
                        fill: settings.fontColor,
                        "stroke-width": 0
                    });

                    gradX -= gradWidth * 0.1;
                    pathTo = "l -" + (gradWidth * 0.9) + ", 0"; // 90% length graduation

                } else if (d % settings.subStep === 0) {

                    gradX -= gradWidth * 0.25;
                    pathTo = "l -" + (gradWidth * 0.75) + ", 0"; // 75% length graduation

                } else if (d % settings.subSubStep === 0) {

                    gradX -= gradWidth * 0.5;
                    pathTo = "l -" + (gradWidth * 0.5) + ", 0"; // 50% length graduation

                }

                // Display red zone (just another graduation color)
                if (settings.min + (d * settings.scaleDivisionValue) >= settings.redZoneStart && settings.min + (d * settings.scaleDivisionValue) <= settings.redZoneEnd) {

                    gradStroke = settings.gradRedZoneColor;
                } else {

                    gradStroke = settings.graduationColor;
                }

                // Draw graduation with settings that was applied before.
                paper.path("M" + gradX + "," + gradY + pathTo).attr({stroke: gradStroke});
            }

            alarmSettings = {
                width: settings.columnWidth,                 // Width of alarm sign
                startX: columnStartX,                         // Left lower corner position X
                startY: columnStartY - columnMaxHeight / 2,   // Left lower corner position Y
                alarmAttr: {                                     // Object with alarm styling settings {fill: "red", "stroke-width": 2}
                    fill: settings.alarmFill,
                    stroke: settings.alarmStroke,
                    "stroke-width": settings.alarmStrokeWidth
                },
                alarmGlow: settings.alarmGlow                    // Glow color "#fff"
            };

            alarmTextSettings = {
                textX: columnStartX + (settings.columnWidth / 2),                                                            // Text X position
                textY: columnStartY - (columnMaxHeight / 2) - (settings.columnWidth / 2) + (parseInt(settings.alarmFont) / 4),     // Text Y position
                alarmTextAttr: {                                                                                                     // Object with alarm text styling settings {font: "Arial", "font-size": 12}
                    font: settings.alarmFont,
                    fill: settings.alarmFontColor
                },
                textData: settings.alarmText                                                                                    // String with text
            };

            drawAlarmSign(gaugesDiv.id, alarmSettings, alarmTextSettings, settings);

            // Draw optional gauge text (RPM, km/h, etc)
            if (settings.gaugeText) {
                paper.text((settings.gaugeTextX + (settings.gaugeWidth / 2)), (settings.gaugeTextY + (settings.gaugeHeight / 2)), settings.gaugeText).attr({
                    fill: settings.gaugeTextColor,
                    font: settings.gaugeTextFont
                });
            }
        }

        // Creating objects with gauges.
        jsGauges.toUpdate = {};
        jsGauges.roundGauges = getElementsByClassName(jsGauges.settings.targetDiv, "roundGauge");
        jsGauges.linearGauges = getElementsByClassName(jsGauges.settings.targetDiv, "linearGauge");

        for (var b = 0; b < jsGauges.roundGauges.length; b += 1) {

            if (jsGauges.settings[jsGauges.roundGauges[b].id]) {

                drawRoundGauge(jsGauges.roundGauges[b], jsGauges.settings[jsGauges.roundGauges[b].id]);
            } else {

                alert("You don't have settings for round gauge with ID: " + jsGauges.roundGauges[b].id);
            }
        }

        for (var c = 0; c < jsGauges.linearGauges.length; c += 1) {
            if (jsGauges.settings[jsGauges.linearGauges[c].id]) {
                drawLinearGauge(jsGauges.linearGauges[c], jsGauges.settings[jsGauges.linearGauges[c].id]);
            } else {
                alert("You don't have settings for linear gauge with ID: " + jsGauges.linearGauges[c].id);
            }
        }

        jsGauges.update();

        setInterval(function () { // Update data from JSON

            jsGauges.getData();

        }, jsGauges.settings.interval);
    },

    // Function draws gauges hands, columns. Shows or hides alarm sign.
    update: function () {

        function filterValue(gaugeType, divName, settings) {

            var value = jsGauges.json[gaugeType][divName];

            // If value in JSON is over maximum (graduation)
            if (value > settings.max) {
                value = settings.max * 1.1;
            }

            // If value is below minimum
            if (value < settings.min) {
                value = settings.min;
            }

            return value;
        }

        // Show alarm sign if value is in red zone, hide if not
        function alarmSignShowOrHide(alarmSet, currentValue, settings, id) {

            if (!settings.alarmShow) {
                return;
            }

            if (currentValue >= settings.redZoneStart && currentValue <= settings.redZoneEnd) {

                alarmSet.toFront();

                if (settings.alarmBlink) { // Blink alarm sign if allowed in settings.

                    jsGauges.toUpdate[id].blink = setInterval(function () { // Show alarm every second

                        alarmSet.show();

                        setTimeout(function () { // Hide alarm sign after 0.5 seconds

                            alarmSet.hide();

                        }, 500);

                        setTimeout(function () { // Stop blinking when JSON data is going to update

                            clearInterval(jsGauges.toUpdate[id].blink);

                        }, jsGauges.settings.interval);

                    }, 1000);

                } else {
                    alarmSet.show();
                }
            } else {
                alarmSet.hide();
            }
        }

        function handRotate(id, settings, value) {

            var centerX = settings.circleX,
                hand = jsGauges.toUpdate[id].hand,
                density = (settings.max - settings.min) / settings.gradAngle,
                startAngle = settings.startAngle - 180;

            hand.angle = (value - settings.min) / density + startAngle;

            hand.animate({transform: "r" + hand.angle + " " + centerX + " " + centerX}, 500);
        }

        function setColumnColor(settings, value) {

            var color;

            if (value >= settings.greenValueStart
                && value <= settings.greenValueEnd) {

                color = settings.columnGreenColor;
            } else if (value >= settings.yellowValueStart
                && value <= settings.yellowValueEnd) {

                color = settings.columnYellowColor;
            } else if (value >= settings.redValueStart
                && value <= settings.redValueEnd) {

                color = settings.columnRedColor;
            } else {
                color = "pink"; // Just to turn attention
            }

            return color;
        }

        var linearGaugeDivId,
            roundGaugeDivId,
            settings,
            paper,
            handPath,
            x1,
            x2,
            x3,
            y1,
            y2,
            y3,
            circleX,
            columnPath,
            columnColor,
            columnHeight,
            currentValue,
            currentAlarmSet;

        for (var c = 0; c < jsGauges.roundGauges.length; c += 1) {

            roundGaugeDivId = jsGauges.roundGauges[c].id;
            settings = jsGauges.settings[roundGaugeDivId];
            currentAlarmSet = jsGauges.toUpdate[roundGaugeDivId].alarmSet;
            currentValue = filterValue("round", roundGaugeDivId, settings);

            // DRAW HAND
            if (!jsGauges.toUpdate[roundGaugeDivId].hand) {

                paper = jsGauges[roundGaugeDivId].paper;
                circleX = settings.circleX;
                x1 = settings.handMaxWidth;
                x2 = (settings.handMaxWidth - settings.handMinWidth) / 2;
                y2 = jsGauges.toUpdate[roundGaugeDivId].handLength + settings.handLengthTune;
                x3 = settings.handMinWidth;
                handPath = "M" + (circleX - (x1 / 2)) + "," + circleX + "l" + x1 + ",0 -" + x2 + "," + y2 + " -" + x3 + ",0z";

                jsGauges.toUpdate[roundGaugeDivId].hand = paper.path(handPath).attr({
                    fill: settings.handColor,
                    stroke: settings.handStrokeColor,
                    "stroke-width": settings.handStrokeWidth,
                    opacity: settings.handOpacity
                });

                handRotate(roundGaugeDivId, settings, currentValue);

                if (settings.handHolder) {

                    paper.circle(circleX, circleX, settings.handHolder).attr({
                        fill: settings.handHolderColor,
                        stroke: settings.handHolderStrkClr,
                        "stroke-width": settings.handHolderStroke
                    });
                }

            } else {

                handRotate(roundGaugeDivId, settings, currentValue);
            }

            alarmSignShowOrHide(currentAlarmSet, currentValue, settings, roundGaugeDivId);

        }

        // Updating linear gauges (if exist)
        for (var d = 0; d < jsGauges.linearGauges.length; d += 1) {

            linearGaugeDivId = jsGauges.linearGauges[d].id;
            settings = jsGauges.settings[linearGaugeDivId];
            currentAlarmSet = jsGauges.toUpdate[linearGaugeDivId].alarmSet;

            currentValue = filterValue("linear", linearGaugeDivId, settings);

            paper = jsGauges[linearGaugeDivId].paper;
            columnHeight = settings.columnMaxHeight * (currentValue / ((settings.max - settings.min) / 100) / 100);
            columnColor = setColumnColor(settings, currentValue);
            x1 = settings.columnWidth;
            y1 = "0";
            x2 = "0";
            y2 = "-" + columnHeight;
            x3 = "-" + settings.columnWidth;
            y3 = "0";
            columnPath = "M" + settings.columnStartX + "," + settings.columnStartY + "l" + x1 + "," + y1 + " " + x2 + "," + y2 + " " + x3 + "," + y3 + "z";

            if (!jsGauges.toUpdate[linearGaugeDivId].column) {

                jsGauges.toUpdate[linearGaugeDivId].column = paper.path(columnPath).attr({
                    fill: columnColor,
                    stroke: settings.columnStroke,
                    "stroke-opacity": settings.columnStrokeOpacity,
                    "stroke-width": settings.columnStrokeWidth
                });

            } else {

                jsGauges.toUpdate[linearGaugeDivId].column.animate({path: columnPath}, settings.animationTime).attr({fill: columnColor});
            }

            alarmSignShowOrHide(currentAlarmSet, currentValue, settings, linearGaugeDivId)

        }
    },

    onDomReady: function (handler) {
        var called = false;

        function ready() {
            if (called) return;
            called = true;
            handler();
        }

        if (document.addEventListener) {
            document.addEventListener("DOMContentLoaded", function () {
                ready();
            }, false);
        } else if (document.attachEvent) {
            if (document.documentElement.doScroll && window == window.top) {

                function tryScroll() {
                    if (called) return;
                    if (!document.body) return;

                    try {
                        document.documentElement.doScroll("left");
                        ready();
                    } catch (e) {
                        setTimeout(tryScroll, 0)
                    }
                }

                tryScroll();
            }

            document.attachEvent("onreadystatechange", function () {
                if (document.readyState === "complete") {
                    ready();
                }
            });
        }

        if (window.addEventListener){
            window.addEventListener('load', ready, false)
        } else if (window.attachEvent) {
            window.attachEvent('onload', ready);
        }
    }
};

jsGauges.onDomReady(jsGauges.getData);