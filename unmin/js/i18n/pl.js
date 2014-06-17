/*!
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * v4.0.3-development - 2014-06-11
 *
 *//*! Modernizr (Custom Build) | MIT & BSD */
/*
 * Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 */
/*
----- Polish dictionary (il8n) ---
 */
( function( wb ) {
"use strict";
/* main index */
wb.i18nDict = {
	"lang-code": "pl",
	"lang-native": "Język polski",
	all: "Wszystko",
	tphp: "Góra strony",
	load: "ładowanie ...",
	process: "przetwarzanie ...",
	srch: "Szukaj",
	"no-match": "Nie znaleziono odpowiedników",
	matches: {
		mixin: "Znaleziono [MIXIN] odpowiedników"
	},
	current: "(bieżący)",
	hide: "Ukryj",
	err: "Błąd",
	colon: ":",
	hyphen: " - ",
	"full-stop": ".",
	"comma-space": ", ",
	space: "&#32;",
	start: "Rozpocznij",
	stop: "Zatrzymaj",
	back: "Wstecz",
	cancel: "Anuluj",
	"min-ago": "minutę temu",
	"coup-mins": "kilka minut temu",
	"mins-ago": {
		mixin: "[MIXIN] minut temu"
	},
	"hour-ago": "godzinę temu",
	"hours-ago": {
		mixin: "[MIXIN] godzin temu"
	},
	"days-ago": {
		mixin: "[MIXIN} dni temu"
	},
	yesterday: "wczoraj",

	nxt: "Następny",
	"nxt-r": "Następny (klawisz strzałki w prawo)",
	prv: "Poprzedni",
	"prv-l": "Poprzedni (klawisz strzałka w lewo)",
	first: "Pierwszy",
	last: "Ostatni",
	menu: "Menu",
	email: "Email",
	"menu-close": "Zamknij menu",
	"overlay-close": "Zamknij nakładkę",
	"esc-key": "(klawisz Esc)",
	show: "Pokaż",

	/* Tabbed interface */
	"tab-rot": {
		off: "Zatrzymaj przewijanie zakładek",
		on: "Rozpocznij przewijanie zakładek"
	},
	"tab-list": "Lista zakładek",
	"tab-pnl-end1": "Koniec tego panelu zakładek.",
	"tab-pnl-end2": "Powrót do listy zakładek",
	"tab-pnl-end3": "lub kontynuuj do końca strony.",
	/* Multimedia player */
	play: "Odtwarzanie",
	pause: "Pauza",
	open: "Otwórz",
	close: "Zamknij",
	rew: "Przewiń do tyłu",
	ffwd: "Szybkie przewijanie do przodu",
	mute: {
		on: "Bez dźwięku",
		off: "Przywróć dźwięk"
	},
	cc: {
		off: "Ukryj podpisy",
		on: "Pokaż podpisy"
	},
	"cc-err": "Błąd w ładowaniu podpisów",
	adesc: {
		on: "Włącz informację audio",
		off: "Wyłącz informację audio"
	},
	pos: "Aktualna pozycja:",
	dur: "Czas całkowity:",
	/* Share widget */
	"shr-txt": "Prześlij",
	"shr-pg": " tę stronę",
	"shr-vid": " ten film",
	"shr-hnt": " do {s} ",
	"shr-disc": "Nie wyrażamy bezposrednio lub pośrednio poparcia dla żadnych produktów ani usług.",
	/* Form validation */
	"frm-nosubmit": "Nie można było wysłać formularza, ponieważ ",
	"errs-fnd": " znaleziono błędy",
	"err-fnd": " znaleziono błąd",
	/* Date picker */
	"date-show": "Proszę wybrać datę z kalendarza:",
	"date-sel": "Wybrany",
	/* Calendar */
	days: [
		"Niedziela",
		"Poniedziałek",
		"Wtorek",
		"Środa",
		"Czwartek",
		"Piątek",
		"Sobota"
	],
	mnths: [
		"Styczeń",
		"Luty",
		"Marzec",
		"Kwiecień",
		"Maj",
		"Czerwiec",
		"Lipiec",
		"Sierpień",
		"Wrzesień",
		"Październik",
		"Listopad",
		"Grudzień"
	],
	cal: "Kalendarz",
	currDay: "(Bieżący dzień)",
	"cal-goToLnk": "Idź do<span class=\"wb-inv\"> miesiąca w roku</span>",
	"cal-goToTtl": "Idź do miesiąca w roku",
	"cal-goToMnth": "Miesiąc:",
	"cal-goToYr": "Rok:",
	"cal-goToBtn": "Przejdź",
	prvMnth: "Poprzedni miesiąc: ",
	nxtMnth: "Następny miesiąc: ",
	/* Lightbox */
	"lb-curr": "Pozycja %curr% z %total%",
	"lb-xhr-err": "Nie udało się załadować treści.",
	"lb-img-err": "Nie udało się załadować obrazu.",
	/* Charts widget */
	"tbl-txt": "Tabela",
	"tbl-dtls": "Wykres. Szczegóły w tabeli poniżej.",
	/* Session timeout */
	"st-to-msg-bgn": "Twoja sesja wygaśnie automatycznie w #min# min #sec# sek.",
	"st-to-msg-end": "Wybierz \"Kontynuuj sesję\" przedłużyć sesję.",
	"st-msgbx-ttl": "Ostrzeżenie: limit czasu sesji",
	"st-alrdy-to-msg": "Niestety sesja już się skończyła. Zaloguj się ponownie.",
	"st-btn-cont": "Kontynuuj sesji",
	"st-btn-end": "Koniec sesji teraz",
	/* Toggle details */
	"td-toggle": "Wyłącz wszystko",
	"td-open": "Rozwiń wszystko",
	"td-close": "Zwiń wszystko",
	"td-ttl-open": "Rozwiń wszystkie sekcje zawartości",
	"td-ttl-close": "Zwiń wszystkie sekcje zawartości",
	/* Table enhancement */
	sortAsc: ": włączyć dla sortowania rosnąco",
	sortDesc: ": włączyć dla sortowania malejąco",
	emptyTbl: "Nie ma danych w tabeli",
	infoEntr: "Wyświetlono _START_ do _END_ z _TOTAL_ pozycji",
	infoEmpty: "Wyświetlono 0 do 0 z 0 pozycji",
	infoFilt: "(filtrowane z _MAX_ wszystkich wpisów)",
	info1000: "&#160;",
	lenMenu: "Pokaż _MENU_ wpisów",
	filter: "Filtruj pozycje",
	/* Geomap */
	"geo-mapctrl": "@geo-mapctrl@",
	"geo-zmin": "Powiększ",
	"geo-zmout": "Pomniejsz",
	"geo-zmwrld": "Powiększenie do zasięgu mapy",
	"geo-zmfeat": "Powiększ do elementu",
	"geo-sclln": "skala mapy",
	"geo-msepos": "Szerokość i długość geograficzna kursora myszy",
	"geo-ariamap": "Obiekt na mapie. Opisy funkcji na mapie są w tabeli poniżej.",
	"geo-ally": "<strong>Dla użytkowników klawiatury:</strong> Kiedy mapa jest w centrum, używaj klawiszy strzałek, aby przesunąć mapę oraz klawiszy plus i minus, aby ją powiększyć lub zmniejszyć. Klawisze strzałek nie będą przesuwać mapy po powiększeniu jej do granicy mapy.",
	"geo-allyttl": "Instrukcje: nawigacja mapy",
	"geo-tgllyr": "Przełączyć wyświetlanie warstwy",
	"geo-hdnlyr": "Warstwa ta jest obecnie ukryta.",
	"geo-bmapurl": "http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-bmapttl": "BaseMaps_CBMT3978",
	"geo-bmapurltxt": "http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-attrlnk": "http://geogratis.gc.ca/geogratis/CBM_CBC?lang=en",
	"geo-attrttl": "GeoGratis - Kanada baza map (tylko w języku angielskim lub francuskim)",
	"geo-sel": "Wybrać",
	"geo-lblsel": "Wybierz element na mapie",
	/* Disable/enable WET plugins and polyfills */
	"wb-disable": "Podstawowa wersja HTML",
	"wb-enable": "Wersja standardowa",
	/* Template */
	"tmpl-signin": "Zaloguj się"
};

})( wb );

wb.doc.one( "formLanguages.wb", function() {
/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: PL (Polish; język polski, polszczyzna)
 */
(function ($) {
	$.extend($.validator.messages, {
		required: "To pole jest wymagane.",
		remote: "Proszę o wypełnienie tego pola.",
		email: "Proszę o podanie prawidłowego adresu email.",
		url: "Proszę o podanie prawidłowego URL.",
		date: "Proszę o podanie prawidłowej daty.",
		dateISO: "Proszę o podanie prawidłowej daty (ISO).",
		number: "Proszę o podanie prawidłowej liczby.",
		digits: "Proszę o podanie samych cyfr.",
		creditcard: "Proszę o podanie prawidłowej karty kredytowej.",
		equalTo: "Proszę o podanie tej samej wartości ponownie.",
		accept: "Proszę o podanie wartości z prawidłowym rozszerzeniem.",
		maxlength: $.validator.format("Proszę o podanie nie więcej niż {0} znaków."),
		minlength: $.validator.format("Proszę o podanie przynajmniej {0} znaków."),
		rangelength: $.validator.format("Proszę o podanie wartości o długości od {0} do {1} znaków."),
		range: $.validator.format("Proszę o podanie wartości z przedziału od {0} do {1}."),
		max: $.validator.format("Proszę o podanie wartości mniejszej bądź równej {0}."),
		min: $.validator.format("Proszę o podanie wartości większej bądź równej {0}.")
	});
}(jQuery));

});