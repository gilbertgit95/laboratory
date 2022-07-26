$(document).ready(() => {
    let deleteBtn = $('#delete_btn')
    let pokemon = deleteBtn[0].name
    let getCookie = (cname) => {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    let headers = {}
    headers['X-CSRFToken'] = getCookie("csrftoken")

    deleteBtn.click(() => {
        $.ajax({
            method: 'DELETE',
            url: window.origin + '/pokemons/' + pokemon + '/edit',
            headers: headers,
            contentType: 'application/json',
            data: {}
        })
        .done((data) => {
            location.href = '/'
        })
        .fail((e) => {
            console.log(e)
        })
    })

    $('[data-toggle="tooltip"]').tooltip();
})