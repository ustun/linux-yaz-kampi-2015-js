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
        this.$el.text('BURASI MAIN');
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
    },

    render: function () {
        var app;
        app = $('#app');
        app.empty();
        app.append(Header.render());
        app.append(Main.render());
        app.append(Footer.render());
        this.bindEventHandlers();
    }
};

App.render();
