/* =========================================================
   HEART DISEASE PREDICTION
   FINAL JAVASCRIPT
   BILINGUAL VERSION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const predictionForm =
        document.getElementById("predictionForm");

    const resultBox =
        document.getElementById("result");

    const resultTitle =
        document.getElementById("resultTitle");

    const resultMessage =
        document.getElementById("resultMessage");

    const probabilityValue =
        document.getElementById("probabilityValue");

    const submitButton =
        predictionForm
            ? predictionForm.querySelector(
                'button[type="submit"]'
            )
            : null;


    /* =====================================================
       TRANSLATIONS
    ===================================================== */

    const translations = {

        en: {

            "nav.about":
                "About",

            "nav.performance":
                "Performance",

            "nav.prediction":
                "Prediction",

            "nav.start":
                "Start Assessment",


            "hero.status":
                "Machine Learning Powered",

            "hero.title1":
                "Heart Disease",

            "hero.title2":
                "Prediction",

            "hero.title3":
                "Reimagined.",

            "hero.description":
                "An intelligent machine learning system designed to analyze clinical indicators and estimate the likelihood of heart disease.",

            "hero.start":
                "Start Assessment",

            "hero.explore":
                "Explore Model",

            "hero.ai":
                "AI ANALYSIS",

            "hero.live":
                "● LIVE",

            "hero.assessment":
                "Cardiovascular Assessment",

            "hero.powered":
                "Powered by Logistic Regression",

            "hero.modelStatus":
                "Model Status",

            "hero.ready":
                "Ready",


            "stats.accuracy":
                "Accuracy",

            "stats.patients":
                "Patients",

            "stats.features":
                "Features",


            "about.eyebrow":
                "01 — ABOUT THE PROJECT",

            "about.title1":
                "Machine Learning",

            "about.title2":
                "Behind the Experience.",

            "about.description":
                "This Heart Disease Prediction system uses clinical and medical indicators to generate a machine learning based risk assessment.",


            "about.dataset.title":
                "Dataset",

            "about.dataset.text":
                "UCI Heart Disease Dataset containing 303 patient records.",


            "about.features.title":
                "Features",

            "about.features.text":
                "13 clinical and cardiovascular indicators are used as model inputs.",


            "about.algorithm.title":
                "Algorithm",

            "about.algorithm.text":
                "Logistic Regression was evaluated alongside Random Forest during model development.",


            "performance.eyebrow":
                "02 — MODEL PERFORMANCE",

            "performance.title1":
                "Built on",

            "performance.title2":
                "Real Evaluation.",


            "metrics.accuracy":
                "Accuracy",

            "metrics.precision":
                "Precision",

            "metrics.recall":
                "Recall",

            "metrics.f1":
                "F1 Score",

            "metrics.test":
                "Test Set",

            "metrics.weighted":
                "Weighted Average",


            "model.selected":
                "SELECTED MODEL",

            "model.description":
                "Evaluated against Random Forest during model development.",


            "prediction.eyebrow":
                "03 — LIVE PREDICTION",

            "prediction.title1":
                "Analyze Clinical",

            "prediction.title2":
                "Indicators.",

            "prediction.description":
                "Enter the patient's clinical information below to generate a machine learning prediction.",


            "form.patient.title":
                "Patient Information",

            "form.patient.subtitle":
                "Basic patient characteristics",

            "form.age":
                "Age",

            "form.sex":
                "Sex",

            "form.selectSex":
                "Select sex",

            "form.male":
                "Male",

            "form.female":
                "Female",


            "form.symptoms.title":
                "Symptoms & Exercise",

            "form.symptoms.subtitle":
                "Chest pain and exercise response",

            "form.chestPain":
                "Chest Pain Type",

            "form.selectChest":
                "Select chest pain type",

            "form.typical":
                "Typical Angina",

            "form.atypical":
                "Atypical Angina",

            "form.nonAnginal":
                "Non-Anginal Pain",

            "form.asymptomatic":
                "Asymptomatic",

            "form.exang":
                "Exercise-Induced Angina",

            "form.selectOption":
                "Select option",

            "form.no":
                "No",

            "form.yes":
                "Yes",


            "form.clinical.title":
                "Clinical Measurements",

            "form.clinical.subtitle":
                "Blood pressure, cholesterol and heart rate",

            "form.trestbps":
                "Resting Blood Pressure",

            "form.chol":
                "Serum Cholesterol",

            "form.thalach":
                "Maximum Heart Rate Achieved",


            "form.tests.title":
                "Medical Tests",

            "form.tests.subtitle":
                "Laboratory and cardiovascular test results",

            "form.fbs":
                "Fasting Blood Sugar",

            "form.selectResult":
                "Select result",

            "form.fbsLow":
                "Less than 120 mg/dl",

            "form.fbsHigh":
                "Greater than 120 mg/dl",

            "form.restecg":
                "Resting Electrocardiographic Results",

            "form.normal":
                "Normal",

            "form.st":
                "ST-T Wave Abnormality",

            "form.lvh":
                "Left Ventricular Hypertrophy",

            "form.oldpeak":
                "ST Depression",

            "form.slope":
                "ST Segment Slope",

            "form.selectSlope":
                "Select slope",

            "form.upsloping":
                "Upsloping",

            "form.flat":
                "Flat",

            "form.downsloping":
                "Downsloping",

            "form.ca":
                "Number of Major Vessels",

            "form.selectNumber":
                "Select number",

            "form.thal":
                "Thallium Test Result",

            "form.thalNormal":
                "Normal",

            "form.fixed":
                "Fixed Defect",

            "form.reversible":
                "Reversible Defect",

            "form.analyze":
                "Analyze Patient",


            "result.complete":
                "ANALYSIS COMPLETE",

            "result.probability":
                "Predicted Probability",

            "result.note":
                "This machine learning prediction is for educational and informational purposes only and should not be considered a medical diagnosis.",


            "result.risk.title":
                "Potential Risk Detected",

            "result.risk.message":
                "The model predicts a higher likelihood of heart disease based on the provided clinical data.",


            "result.safe.title":
                "Lower Risk Predicted",

            "result.safe.message":
                "The model predicts a lower likelihood of heart disease based on the provided clinical data.",


            "result.error.title":
                "Prediction Error",

            "result.error.message":
                "Something went wrong while processing the prediction. Please check the entered information and try again.",


            "loading":
                "Analyzing Patient Data...",


            "footer.title":
                "Heart Disease Prediction",

            "footer.description":
                "Machine Learning • Healthcare • Artificial Intelligence"

        },


        ar: {

            "nav.about":
                "عن المشروع",

            "nav.performance":
                "أداء النموذج",

            "nav.prediction":
                "التنبؤ",

            "nav.start":
                "ابدأ التقييم",


            "hero.status":
                "مدعوم بتقنيات التعلم الآلي",

            "hero.title1":
                "التنبؤ بأمراض",

            "hero.title2":
                "القلب",

            "hero.title3":
                "بأسلوب متطور.",

            "hero.description":
                "نظام ذكي يعتمد على التعلم الآلي لتحليل المؤشرات السريرية وتقدير احتمالية الإصابة بأمراض القلب.",

            "hero.start":
                "ابدأ التقييم",

            "hero.explore":
                "استكشف النموذج",

            "hero.ai":
                "تحليل بالذكاء الاصطناعي",

            "hero.live":
                "● مباشر",

            "hero.assessment":
                "تقييم حالة القلب والأوعية الدموية",

            "hero.powered":
                "مدعوم بنموذج الانحدار اللوجستي",

            "hero.modelStatus":
                "حالة النموذج",

            "hero.ready":
                "جاهز",


            "stats.accuracy":
                "الدقة",

            "stats.patients":
                "مريضًا",

            "stats.features":
                "خاصية",


            "about.eyebrow":
                "01 — عن المشروع",

            "about.title1":
                "التعلم الآلي",

            "about.title2":
                "خلف هذه التجربة.",

            "about.description":
                "يستخدم نظام التنبؤ بأمراض القلب مؤشرات سريرية وطبية لإنشاء تقييم للمخاطر باستخدام تقنيات التعلم الآلي.",


            "about.dataset.title":
                "مجموعة البيانات",

            "about.dataset.text":
                "مجموعة بيانات UCI لأمراض القلب وتحتوي على 303 سجلًا للمرضى.",


            "about.features.title":
                "الخصائص",

            "about.features.text":
                "يتم استخدام 13 مؤشرًا سريريًا ومؤشرًا متعلقًا بالقلب والأوعية الدموية كمدخلات للنموذج.",


            "about.algorithm.title":
                "الخوارزمية",

            "about.algorithm.text":
                "تم تقييم نموذج الانحدار اللوجستي إلى جانب نموذج الغابة العشوائية أثناء تطوير النموذج.",


            "performance.eyebrow":
                "02 — أداء النموذج",

            "performance.title1":
                "مبني على",

            "performance.title2":
                "تقييم حقيقي.",


            "metrics.accuracy":
                "الدقة",

            "metrics.precision":
                "Precision",

            "metrics.recall":
                "Recall",

            "metrics.f1":
                "درجة F1",

            "metrics.test":
                "مجموعة الاختبار",

            "metrics.weighted":
                "المتوسط المرجح",


            "model.selected":
                "النموذج المختار",

            "model.description":
                "تم تقييمه مقارنةً بنموذج الغابة العشوائية أثناء تطوير النموذج.",


            "prediction.eyebrow":
                "03 — التنبؤ المباشر",

            "prediction.title1":
                "تحليل المؤشرات",

            "prediction.title2":
                "السريرية.",

            "prediction.description":
                "أدخل المعلومات السريرية للمريض أدناه لإنشاء تنبؤ باستخدام نموذج التعلم الآلي.",


            "form.patient.title":
                "معلومات المريض",

            "form.patient.subtitle":
                "الخصائص الأساسية للمريض",

            "form.age":
                "العمر",

            "form.sex":
                "الجنس",

            "form.selectSex":
                "اختر الجنس",

            "form.male":
                "ذكر",

            "form.female":
                "أنثى",


            "form.symptoms.title":
                "الأعراض والمجهود",

            "form.symptoms.subtitle":
                "ألم الصدر والاستجابة للمجهود",

            "form.chestPain":
                "نوع ألم الصدر",

            "form.selectChest":
                "اختر نوع ألم الصدر",

            "form.typical":
                "ذبحة صدرية نموذجية",

            "form.atypical":
                "ذبحة صدرية غير نموذجية",

            "form.nonAnginal":
                "ألم غير مرتبط بالذبحة",

            "form.asymptomatic":
                "بدون أعراض",

            "form.exang":
                "الذبحة الناتجة عن المجهود",

            "form.selectOption":
                "اختر الاختيار",

            "form.no":
                "لا",

            "form.yes":
                "نعم",


            "form.clinical.title":
                "القياسات السريرية",

            "form.clinical.subtitle":
                "ضغط الدم والكوليسترول ومعدل ضربات القلب",

            "form.trestbps":
                "ضغط الدم أثناء الراحة",

            "form.chol":
                "كوليسترول الدم",

            "form.thalach":
                "أقصى معدل لضربات القلب",


            "form.tests.title":
                "الفحوصات الطبية",

            "form.tests.subtitle":
                "نتائج الفحوصات المعملية والقلبية",

            "form.fbs":
                "سكر الدم أثناء الصيام",

            "form.selectResult":
                "اختر النتيجة",

            "form.fbsLow":
                "أقل من 120 mg/dl",

            "form.fbsHigh":
                "أكبر من 120 mg/dl",

            "form.restecg":
                "نتائج تخطيط القلب أثناء الراحة",

            "form.normal":
                "طبيعي",

            "form.st":
                "اضطراب في موجة ST-T",

            "form.lvh":
                "تضخم البطين الأيسر",

            "form.oldpeak":
                "انخفاض مقطع ST",

            "form.slope":
                "ميل مقطع ST",

            "form.selectSlope":
                "اختر الميل",

            "form.upsloping":
                "صاعد",

            "form.flat":
                "مستوٍ",

            "form.downsloping":
                "هابط",

            "form.ca":
                "عدد الأوعية الدموية الرئيسية",

            "form.selectNumber":
                "اختر العدد",

            "form.thal":
                "نتيجة اختبار الثاليوم",

            "form.thalNormal":
                "طبيعي",

            "form.fixed":
                "عيب ثابت",

            "form.reversible":
                "عيب قابل للعكس",

            "form.analyze":
                "تحليل حالة المريض",


            "result.complete":
                "اكتمل التحليل",

            "result.probability":
                "الاحتمالية المتوقعة",

            "result.note":
                "هذا التنبؤ باستخدام التعلم الآلي لأغراض تعليمية ومعلوماتية فقط، ولا ينبغي اعتباره تشخيصًا طبيًا.",


            "result.risk.title":
                "تم اكتشاف احتمالية خطر",

            "result.risk.message":
                "يتوقع النموذج احتمالية أعلى للإصابة بأمراض القلب بناءً على البيانات السريرية المدخلة.",


            "result.safe.title":
                "احتمالية خطر أقل",

            "result.safe.message":
                "يتوقع النموذج احتمالية أقل للإصابة بأمراض القلب بناءً على البيانات السريرية المدخلة.",


            "result.error.title":
                "حدث خطأ في التنبؤ",

            "result.error.message":
                "حدث خطأ أثناء معالجة التنبؤ. يرجى التحقق من البيانات المدخلة والمحاولة مرة أخرى.",


            "loading":
                "جاري تحليل بيانات المريض...",


            "footer.title":
                "التنبؤ بأمراض القلب",

            "footer.description":
                "التعلم الآلي • الرعاية الصحية • الذكاء الاصطناعي"

        }

    };


    /* =====================================================
       LANGUAGE SYSTEM
    ===================================================== */

    let currentLanguage =
        localStorage.getItem("heartDiseaseLanguage") || "en";


    function translatePage(language) {

        const dictionary =
            translations[language];

        if (!dictionary) return;


        /* HTML Direction */

        document.documentElement.lang =
            language;

        document.documentElement.dir =
            language === "ar"
                ? "rtl"
                : "ltr";


        /* Page Translation */

        document
            .querySelectorAll("[data-i18n]")
            .forEach(element => {

                const key =
                    element.getAttribute("data-i18n");

                if (dictionary[key] !== undefined) {

                    element.textContent =
                        dictionary[key];

                }

            });


        /* Language Buttons */

        document
            .querySelectorAll(".language-btn")
            .forEach(button => {

                button.classList.toggle(
                    "active",
                    button.dataset.lang === language
                );

            });


        /* Result text */

        updateResultLanguage();


        /* Loading text */

        if (
            submitButton &&
            submitButton.classList.contains("loading")
        ) {

            submitButton.innerHTML = `
                <span class="loading-spinner"></span>
                ${dictionary.loading}
            `;

        }


        localStorage.setItem(
            "heartDiseaseLanguage",
            language
        );

        currentLanguage = language;

    }


    /* =====================================================
       LANGUAGE BUTTONS
    ===================================================== */

    document
        .querySelectorAll(".language-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const language =
                        button.dataset.lang;

                    translatePage(language);

                }
            );

        });


    /* =====================================================
       RESULT LANGUAGE
    ===================================================== */

    let lastPrediction = null;
    let lastResultType = null;


    function updateResultLanguage() {

        if (
            !resultBox ||
            resultBox.classList.contains("hidden")
        ) {
            return;
        }


        const dictionary =
            translations[currentLanguage];


        if (
            lastResultType === "risk"
        ) {

            resultTitle.textContent =
                dictionary["result.risk.title"];

            resultMessage.textContent =
                dictionary["result.risk.message"];

        }

        else if (
            lastResultType === "safe"
        ) {

            resultTitle.textContent =
                dictionary["result.safe.title"];

            resultMessage.textContent =
                dictionary["result.safe.message"];

        }

        else if (
            lastResultType === "error"
        ) {

            resultTitle.textContent =
                dictionary["result.error.title"];

            resultMessage.textContent =
                dictionary["result.error.message"];

        }

    }


    /* =====================================================
       INITIAL LANGUAGE
    ===================================================== */

    translatePage(currentLanguage);


    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(link => {

            link.addEventListener(
                "click",
                function (event) {

                    const targetId =
                        this.getAttribute("href");


                    if (
                        !targetId ||
                        targetId === "#"
                    ) {

                        event.preventDefault();

                        window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        });

                        return;

                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (target) {

                        event.preventDefault();

                        target.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }

                }
            );

        });


    /* =====================================================
       NAVBAR SCROLL
    ===================================================== */

    const navbar =
        document.querySelector(".navbar");


    window.addEventListener(
        "scroll",
        () => {

            if (!navbar) return;


            if (window.scrollY > 40) {

                navbar.classList.add(
                    "scrolled"
                );

            } else {

                navbar.classList.remove(
                    "scrolled"
                );

            }

        }
    );


    /* =====================================================
       FORM SUBMISSION
    ===================================================== */

    if (predictionForm) {

        predictionForm.addEventListener(
            "submit",
            async (event) => {

                event.preventDefault();


                /* Browser Validation */

                if (
                    !predictionForm.checkValidity()
                ) {

                    predictionForm.reportValidity();

                    return;

                }


                /* Loading */

                setLoading(true);


                /* Collect Data
                   EXACT SAME ORDER AS FLASK
                */

                const data = {

                    age:
                        document
                            .getElementById("age")
                            .value,

                    sex:
                        document
                            .getElementById("sex")
                            .value,

                    cp:
                        document
                            .getElementById("cp")
                            .value,

                    trestbps:
                        document
                            .getElementById("trestbps")
                            .value,

                    chol:
                        document
                            .getElementById("chol")
                            .value,

                    fbs:
                        document
                            .getElementById("fbs")
                            .value,

                    restecg:
                        document
                            .getElementById("restecg")
                            .value,

                    thalach:
                        document
                            .getElementById("thalach")
                            .value,

                    exang:
                        document
                            .getElementById("exang")
                            .value,

                    oldpeak:
                        document
                            .getElementById("oldpeak")
                            .value,

                    slope:
                        document
                            .getElementById("slope")
                            .value,

                    ca:
                        document
                            .getElementById("ca")
                            .value,

                    thal:
                        document
                            .getElementById("thal")
                            .value

                };


                /* Send Data To Flask */

                try {

                    const response =
                        await fetch(
                            "/predict",
                            {

                                method: "POST",

                                headers: {
                                    "Content-Type":
                                        "application/json"
                                },

                                body:
                                    JSON.stringify(data)

                            }
                        );


                    if (!response.ok) {

                        throw new Error(
                            `Server returned ${response.status}`
                        );

                    }


                    const result =
                        await response.json();


                    showResult(result);


                } catch (error) {

                    console.error(
                        "Prediction Error:",
                        error
                    );

                    showError();

                } finally {

                    setLoading(false);

                }

            }
        );

    }


    /* =====================================================
       SHOW RESULT
    ===================================================== */

    function showResult(result) {

        if (!resultBox) return;


        const prediction =
            Number(result.prediction);

        const probability =
            Number(result.probability);


        lastPrediction =
            prediction;


        resultBox.classList.remove(
            "hidden"
        );


        resultBox.classList.remove(
            "result-safe",
            "result-risk",
            "result-error"
        );


        if (prediction === 1) {

            lastResultType =
                "risk";

            resultBox.classList.add(
                "result-risk"
            );

        } else {

            lastResultType =
                "safe";

            resultBox.classList.add(
                "result-safe"
            );

        }


        updateResultLanguage();


        /* Probability */

        if (probabilityValue) {

            animateNumber(
                probabilityValue,
                0,
                probability,
                1000
            );

        }


        /* Scroll */

        setTimeout(() => {

            resultBox.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 150);

    }


    /* =====================================================
       ERROR
    ===================================================== */

    function showError() {

        if (!resultBox) return;


        resultBox.classList.remove(
            "hidden",
            "result-safe",
            "result-risk"
        );


        resultBox.classList.add(
            "result-error"
        );


        lastResultType =
            "error";


        updateResultLanguage();


        if (probabilityValue) {

            probabilityValue.textContent =
                "--%";

        }


        resultBox.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }


    /* =====================================================
       LOADING STATE
    ===================================================== */

    function setLoading(isLoading) {

        if (!submitButton) return;


        const dictionary =
            translations[currentLanguage];


        if (isLoading) {

            submitButton.disabled =
                true;


            submitButton.dataset.originalText =
                submitButton.innerHTML;


            submitButton.innerHTML = `
                <span class="loading-spinner"></span>
                ${dictionary.loading}
            `;


            submitButton.classList.add(
                "loading"
            );

        } else {

            submitButton.disabled =
                false;


            if (
                submitButton.dataset.originalText
            ) {

                submitButton.innerHTML =
                    submitButton.dataset.originalText;

            }


            submitButton.classList.remove(
                "loading"
            );

        }

    }


    /* =====================================================
       ANIMATED PROBABILITY
    ===================================================== */

    function animateNumber(
        element,
        start,
        end,
        duration
    ) {

        const startTime =
            performance.now();


        function update(currentTime) {

            const elapsed =
                currentTime - startTime;


            const progress =
                Math.min(
                    elapsed / duration,
                    1
                );


            const easedProgress =
                1 -
                Math.pow(
                    1 - progress,
                    3
                );


            const currentValue =
                start +
                (end - start) *
                easedProgress;


            element.textContent =
                `${currentValue.toFixed(2)}%`;


            if (progress < 1) {

                requestAnimationFrame(
                    update
                );

            }

        }


        requestAnimationFrame(
            update
        );

    }


    /* =====================================================
       INPUT VALIDATION
    ===================================================== */

    if (predictionForm) {

        const numberInputs =
            predictionForm.querySelectorAll(
                'input[type="number"]'
            );


        numberInputs.forEach(input => {

            input.addEventListener(
                "input",
                () => {

                    const min =
                        input.getAttribute("min");

                    const max =
                        input.getAttribute("max");

                    const value =
                        Number(input.value);


                    if (
                        min !== null &&
                        value < Number(min)
                    ) {

                        input.setCustomValidity(
                            currentLanguage === "ar"
                                ? `يجب ألا تقل القيمة عن ${min}.`
                                : `Value must be at least ${min}.`
                        );

                    }

                    else if (
                        max !== null &&
                        value > Number(max)
                    ) {

                        input.setCustomValidity(
                            currentLanguage === "ar"
                                ? `يجب ألا تزيد القيمة عن ${max}.`
                                : `Value must not exceed ${max}.`
                        );

                    }

                    else {

                        input.setCustomValidity("");

                    }

                }
            );

        });

    }


    /* =====================================================
       INPUT FOCUS EFFECT
    ===================================================== */

    const formInputs =
        document.querySelectorAll(
            ".form-group input, .form-group select"
        );


    formInputs.forEach(input => {

        input.addEventListener(
            "focus",
            () => {

                const parent =
                    input.closest(
                        ".form-group"
                    );


                if (parent) {

                    parent.classList.add(
                        "focused"
                    );

                }

            }
        );


        input.addEventListener(
            "blur",
            () => {

                const parent =
                    input.closest(
                        ".form-group"
                    );


                if (parent) {

                    parent.classList.remove(
                        "focused"
                    );

                }

            }
        );

    });


    /* =====================================================
       REVEAL ANIMATION
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".section, .info-card, .metric-card, .model-card"
        );


    if (
        "IntersectionObserver"
        in window
    ) {

        const observer =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );


                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(element => {

            element.classList.add(
                "reveal"
            );


            observer.observe(
                element
            );

        });

    }


    /* =====================================================
       HIDE OLD RESULT WHEN USER CHANGES INPUT
    ===================================================== */

    if (
        predictionForm &&
        resultBox
    ) {

        predictionForm.addEventListener(
            "input",
            () => {

                resultBox.classList.add(
                    "hidden"
                );

            }
        );


        predictionForm.addEventListener(
            "change",
            () => {

                resultBox.classList.add(
                    "hidden"
                );

            }
        );

    }


    /* =====================================================
       PAGE LOAD
    ===================================================== */

    document.body.classList.add(
        "page-loaded"
    );

});