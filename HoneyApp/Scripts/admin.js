//створення і ініціалізація бд
var honeyTypes = TAFFY([
    {
        "id": "tr",
        "name": "Травневий мед",
        "availability": 1,
        "description": "Мед першого відкачування має виражені корисними властивостями для організму людини: в ньому підвищений вміст мінеральних" +
        " речовин, вітамінів, фруктози і глюкози. Дієтологи рекомендують щодня вживати травневий мед: властивості його благотворно впливають" +
        "на всі системи і органи. Високі органолептичні якості продукту роблять його одним з кращих сортів." +
        " Глюкоза вважається прекрасним харчуванням для головного мозку, серця, м'язової маси тіла, печінки. " +
        "Травневий мед рекомендують вживати спортсменам, школярам, студентам - людям, що займаються фізичною та розумовою працею."
    },
    {
        "id": "gr",
        "name": "Гречаний мед",
        "availability": 2,
        "description": " Вітамінний склад гречаного меду представлений цілою лінійкою вітамінів групи В, " +
        "аскорбіновою кислотою і ніацином. Сприяє гречаний мед і більш швидкому загоєнню виразок шлунка " +
        "та дванадцятипалої кишки, а також пом’якшення симптомів гастриту з підвищеною кислотністю шлункового соку." +
        " Гречаний мед покращує травлення, застосовується при захворюваннях печінки, утворення каменів у жовчних протоках і нирках." +
        "Поширена практика застосування гречаного меду для лікування хвороб очей."
    },
    {
        "id": "lu",
        "name": "Липовий мед",
        "availability": 0,
        "description": "Крім неповторного аромату і чудового смаку, даний продукт має й " +
        "інші гідності. Липовий мед має яскраво вираженим антибактеріальним, протизапальну, потогінну," +
        " жарознижувальну дію, тому він незамінний при нежиті, ларингіті, синуситі, трахеїті, " +
        "бронхіальній астмі. При ангіні й стоматиті його розбавляють водою і використовують для " +
        "полоскання горла. Ці ліки не тільки знімає запалення, але і відбілює зуби. Не варто додавати " +
        "мед в гарячий чай: так він втрачає свій лікувальний ефект. Краще їсти його вприкуску великим" +
        " вмістом заліза гречаний мед відрізняється від інших видів. Крім заліза присутні мідь, кобальт," +
        " цинк, фтор, йод, калій, кальцій, марганець і фосфор."
    },
    {
        "id": "so",
        "name": "Соняшниковий мед",
        "availability": 2,
        "description": "Завдяки тому, що в складі соняшникового меду багато ферментів, показовий для застосування " +
        "людям, що мають проблеми з серцем, органами дихання, кровоносної системи. Також при захворюванні легенів " +
        "та сечостатевої системи. Цей вид меду корисно вживати тим, хто проживає у несприятливих умовах навколишнього " +
        "середовища, так як з його допомогою можна посприяти виходу шлаків з організму. До того корисно вживати мед з" +
        " соняшнику страждають на атеросклероз, невроз, стреси та інші невралгічні захворювання."
    },
    {
        "id": "kv",
        "name": "Квітковий мед",
        "availability": 2,
        "description": "Медом з різнотрав’я (квітковим медом) називають продукт, отриманий з нектару," +
        " зібраного з трав, рослин і дерев, що ростуть в одному регіоні. Мед з різнотрав’я збирають у літній період," +
        " з травня по кінець серпня. Які трави можуть стати джерелом для такого меду? В першу чергу це буркун лікарський." +
        " конюшина, липа, гречка, черемица, Іван-чай, комірник  ,соняшник та ін"
    },
    {
        "id": "ak",
        "name": "Акацієвий мед",
        "availability": 2,
        "description": "Через те, що акацієвий мед містить дуже велику кількість фруктози, людський організм його " +
        "легко і швидко засвоює. Це є основною причиною, по якій його рекомендують при дієтах і діабеті." +
        "До того ж, поточний сорт рекомендують вживати дітям. Справа в тому, що каротин і ферменти," +
        " наявні у величезному обсязі в складі даного продукту, покращують процес травлення." +
        " Крім того, дане бджолине виріб антиалергенну, отчого корисно фактично для всіх людей. " +
        " рекомендується їсти при безсонні, і для того, щоб вкласти спати дітей."
    }
]);


//виведення повідомлення
function informer(name) {
    $('.modal_Description').text(honeyTypes({name: "" + name + ""}).first().description);
    alert(honeyTypes({name: "" + name + ""}).first().name);
};

//обрабоччики кнопок - види меду
$(window).ready(function () {

    adminUpdater();
//обработчики кнопок  - види меду
    $('.nav_container_hony_on').click(function () {
        $(".modal_title").text('Травневий мед');
        $('.model_img').css({'background':'url("img/magnolia.jpeg") no-repeat', "background-size": "100%"});
        informer("Травневий мед");
    });
    $('.nav_container_hony_two').click(function () {
        //по аналогії картинка змінюється для всіх видів меду
        $(".modal_title").text('Гречаний мед');
        $('.model_img').css({'background':'url("img/grecka 2.jpg") no-repeat', "background-size": "100%"});
        informer("Гречаний мед");
    });
    $('.nav_container_hony_three').click(function () {
        $(".modal_title").text('Липовий мед');
        $('.model_img').css({'background':'url("img/lipa.jpg") no-repeat', "background-size": "100%"});
        informer("Липовий мед");
    });
    $('.nav_container_hony_four').click(function () {
        $(".modal_title").text('Соняшниковий мед');
        $('.model_img').css({'background':'url("img/podsolnuhi.jpg") no-repeat', "background-size": "100%"});
        informer("Соняшниковий мед");
    });
    $('.nav_container_hony_five').click(function () {
        $(".modal_title").text('Квітковий мед');
        $('.model_img').css({'background':'url("img/poleve.jpg") no-repeat', "background-size": "100%"});
        informer("Квітковий мед");
    });
    $('.nav_container_hony_six').click(function () {
        $(".modal_title").text('Акацієвий мед');
        $('.model_img').css({'background':'url("img/ackacia.jpg") no-repeat', "background-size": "100%"});
        informer("Акацієвий мед");
    });

//обработчики но наведенні - види меду
    $('.nav_container_hony_on').mousemove(function (e) {
        isAvailable("Травневий мед", e);
    });
    $('.nav_container_hony_two').mousemove(function (e) {
        isAvailable("Гречаний мед", e);
    });
    $('.nav_container_hony_three').mousemove(function (e) {
        isAvailable("Липовий мед", e);
    });
    $('.nav_container_hony_four').mousemove(function (e) {
        isAvailable("Соняшниковий мед", e);
    });
    $('.nav_container_hony_five').mousemove(function (e) {
        isAvailable("Квітковий мед", e);
    });
    $('.nav_container_hony_six').mousemove(function (e) {
        isAvailable("Акацієвий мед", e);
    });
    $('.nav_container_hony').mouseout(function () {
        $(".tooltips").hide();
    });
});

//обработчики натиснення кнопок - адмінка
function getdetails(obj) {

    var itemToString = obj.id;
    honeyTypes({id: "" + itemToString.substring(0, 2) + ""}).update({availability: "" + itemToString.substring(2) + ""});
    console.log(honeyTypes({id: itemToString.substring(0, 2)}).get());
    adminUpdater();
}

//виділення кольором кнопок в адмінкі
function adminUpdater() {
    honeyTypes().each(function (record) {
        for (var i = 0; i < 3; i++) {

            $('.' + record["id"] + i).css('background-color', 'white');
            if (record["availability"] == i) {
                $('.' + record["id"] + i).css('background-color', 'yellow');
            }
        }
    });
}

function isAvailable(name, e) {
    $('.modal_Description').text(honeyTypes({name: "" + name + ""}).first().description);
    if (honeyTypes({name: "" + name + ""}).first().availability == 0) {
        $('.tooltips_text').text("Ще не сезон на цей вид меду");
        $('.tooltips').css({'left': e.clientX + 10, 'top': e.clientY + 0}).show();
    }
    ;
    if (honeyTypes({name: "" + name + ""}).first().availability == 2) {
        $('.tooltips_text').text("На жаль, цей мед уже закінчився");
        $('.tooltips').css({'left': e.clientX + 20, 'top': e.clientY + 0}).show();
    }
}
