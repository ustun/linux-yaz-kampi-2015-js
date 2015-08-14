var InsanListesi = function () {
    this.insanlar = [];
};

InsanListesi.prototype.ekle = function (insan) {
    this.insanlar.push(insan);
};

InsanListesi.prototype.ozet = function () {
    console.log(this.insanlar.length + ' tane insan var');
    console.log(this.insanlar);
};

var insanListesi = new InsanListesi();

var Insan = function (name, surname, age, type, takim) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.type = type;
    this.takim = takim;

    insanListesi.ekle(this);

};

Insan.prototype.toggle = function () {

    if (this.type === "Ogrenci") {
        this.type = "Ogretmen";
    } else {
        this.type = "Ogrenci";
    }
};

// insanlari ekle
new Insan("Ustun", "Ozgur", 30, "Ogretmen", "BJK");
new Insan("Aytac", "Genc", 22, "Ogrenci", "FB");
new Insan("Burak", "Guneli", 23, "Ogrenci", "GS");

var insanlar = [
    ["Fatih", "Guneli", 23, "Ogrenci", "TS"],
    ["Mehmet", "Sargil", 21, "Ogrenci", "Bursa"],
    ["Cuneyt", "Elmas", 22, "Ogrenci", "BJK"]
];

insanlar.forEach(function (insan) {
    /*     new Insan(insan[0], insan[1], insan[2], insan[3], insan[4]); */
    Insan.apply(Object.create(Insan.prototype), insan);
});


insanListesi.ozet();
