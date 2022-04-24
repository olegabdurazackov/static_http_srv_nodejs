<head>
<! Здесь с помощью <link> и <style> определены четыре таблицы стилей. >
<! Две подключаемые внешние таблицы стилей являются альтернативными >
<! и потому по умолчанию отключены. >
<! Все таблицы имеют атрибут id, что позволяет обращаться к ним по имени. >
<link rel="stylesheet" type="text/css" href="ss0.css" id="ss0">
<link rel="alternate stylesheet" type="text/css" href="ss1.css"
       id="ss1" title="Крупный шрифт">
<link rel="alternate stylesheet" type="text/css" href="ss2.css"
       id="ss2" title="Высокий контраст">
<style id="ss3" title="Sans Serif">
body { fontfamily: sansserif; }
</style>
<script>
// Эта функция включает или выключает таблицу стилей с заданным атрибутом id.
// Она работает с элементами <link> и <style>.
function enableSS(sheetid, enabled) {
    document.getElementById(sheetid).disabled = !enabled;
}
</script>
</head>
<body>
<! Это простая HTMLформа, которая позволяет включать и выключать таблицы стилей. >
<! Здесь жестко определены имена таблиц в документе, но можно >
<! определять их динамически на основе заголовков. >
<form>
<input type="checkbox"
        onclick="enableSS('ss0', this.checked)" checked>Основная
<br><input type="checkbox"
            onclick="enableSS('ss1', this.checked)">Крупный шрифт
<br><input type="checkbox"
            onclick="enableSS('ss2', this.checked)">Высокий контраст
<br><input type="checkbox"
            onclick="enableSS('ss3', this.checked)" checked>Sans Serif
</form>
</body>

---------------------------


