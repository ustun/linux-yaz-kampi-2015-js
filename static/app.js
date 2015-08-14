var Header = {

    items: ['Home', 'About', 'Login'],

    render: function () {
        var inner = $('<ul id="header">');
        this.items.forEach(function (item) {
            var itemNode = $('<li>');
            itemNode.text(item);
            inner.append(itemNode);
        });
        return inner;
    }
};

var Main = {
    render: function () {
        var inner = $('<div class="body">');
        inner.html('This is the body. Time is now: ' + new Date());
        return inner;
    }

};

var Footer = {

    items: ['Home', 'About', 'Login', 'Asagidakiler'],

    render: function () {
        var inner = $('<div id="footer">');

        var copyright = $('<p>');
        copyright.text('Bu sitenin icerigi kopyalanabilir.');
        inner.append(copyright);

        this.items.forEach(function (item) {
            var itemNode = $('<li>');
            itemNode.text(item);
            inner.append(itemNode);
        });
        return inner;
    }
};

var App = {
    render: function () {
        var inner = $('<div>');
        var header = Header.render();
        var main = Main.render();
        var footer = Footer.render();

        inner.append(header);
        inner.append(main);
        inner.append(footer);

        return inner;

    }
};


var bindEvents = function () {

    $('#app').on('click', 'a.button', function () {
        console.log('button clicked');
    });

};

var render = function () {
    $('#app').html(App.render());
};

render();
bindEvents();
