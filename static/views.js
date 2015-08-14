var menuItems = ["Hakkinda", "SSS", "Projeler", "Iletisim"];

var Header = {

    bindEventHandlers: function () {
        this.$el.find('a').click(function (e) {
            console.log('tutmasam gidecektin');
            return false;
        });

        this.$el.click(function () {
            $(this).css('backgroundColor', 'green');
        });

        // header'daki hakkinda

        var hakkindaFonksiyonu = function (event) {
            event.preventDefault();
            event.stopPropagation();
            $(this).css({color: 'red'});
        };

        this.$el.find('ul li:eq(0)').click(hakkindaFonksiyonu);

    },

    renderMenu: function () {
        var menu = $('<ul>');

        menuItems.forEach(function (menuItem) {
            var node = $('<li>');
            node.text(menuItem);
            menu.append(node);
        });
        return menu;
    },

    render: function () {

        this.$el =$('<header>');
        var logo = $('<a href="http://cnn.com">CNN\'e Git</a>');

        this.$el.append(logo);
        this.$el.append(this.renderMenu());

        return this.$el;
    }
};

var Main = {

    render: function () {
        this.$el = $('<article>');
        this.$el.append(InsanFormu.render());
        this.$el.append(InsanTablosu.render());
        return this.$el;
    }
};

var InsanFormu = {

    bindEventHandlers: function () {
        this.$el.submit(function (e) {

            new Insan(this.name.value, this.surname.value, this.age.value, this.type.value, this.takim.value);

            App.render();

            $(this).find('#name').focus();

            return false;
        });
    },

    render: function () {
        this.$el = $('<form>');

        var children = [$('<input id="name" placeholder="Name" name="name">'),
                        $('<input placeholder="Surname"  name="surname">'),
                        $('<input  placeholder="Age" name="age">'),
                        $('<input  placeholder="Type" name="type">'),
                        $('<input  placeholder="Takim" name="takim">'),
                        $('<button  type="submit">Gonder</button>')];

        children.forEach(function (x) {
            this.$el.append(x);
        }, this);

        return this.$el;

    }

};



var InsanView = function (insan) {
    this.insan = insan;
};

InsanView.prototype.bindEventHandlers = function () {
    var that = this;

    this.$el.find('button').click(function () {
        that.insan.toggle();
        App.render();
    });
};

InsanView.prototype.render = function () {
    this.$el = $('<tr>');

    var sutunlar = ['name', 'surname', 'age', 'type'];
    sutunlar.forEach(function (sutunAdi) {
        var td = $('<td>');
        td.text(this.insan[sutunAdi]);
        this.$el.append(td);
    }, this);

    var button = $('<td>');
    button.html('<button>');
    this.$el.append(button);

    return this.$el;
};

var InsanTablosu = {

    bindEventHandlers: function () {
        this.insanViewlari.forEach(function (insanView) {
            insanView.bindEventHandlers();
        });
    },

    renderHeader: function () {
        var node = $('<thead>');
        var tr = $('<tr>');
        var sutunlar = ["Isim", "Soyad", "Yas", "Meslek", "Button"];
        sutunlar.forEach(function (sutunAdi) {
            var th = $('<th>');
            th.text(sutunAdi);
            tr.append(th);
        });

        node.append(tr);
        return node;
    },

    renderInsanlar: function () {
        var container = $('<tbody>');
        this.insanViewlari = [];

        insanListesi.insanlar.forEach(function (insan) {
            var insanView = new InsanView(insan);
            container.append(insanView.render()); // goruntu
            this.insanViewlari.push(insanView);
        }, this);

        return container;
    },

    render: function () {
        this.$el = $('<table>');
        this.$el.append(this.renderHeader());
        this.$el.append(this.renderInsanlar());
        return this.$el;
    }

};

var Footer = {

    renderMenu: function () {
        var menu = $('<ul>');

        menuItems.forEach(function (menuItem) {
            var node = $('<li>');
            node.text(menuItem);
            menu.append(node);
        });
        return menu;
    },


    render: function () {
        this.$el = $('<footer>');
        var copyright = $('<p>2015 Copyright LYK</p>');
        this.$el.append(copyright);
        this.$el.append(this.renderMenu());
        return this.$el;
    }
};

var App = {

    bindEventHandlers: function () {
        Header.bindEventHandlers();
        InsanFormu.bindEventHandlers();
        InsanTablosu.bindEventHandlers();
    },

    render: function () {
        var app = $('#app');
        app.empty();
        app.append(Header.render());
        app.append(Main.render());
        app.append(Footer.render());
        this.bindEventHandlers();
    }
};

App.render();
