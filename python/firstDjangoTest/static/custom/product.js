$(document).ready(() => {
    let btn = document.getElementById('delete_button')
    let paramsMap = location
        .search.replace('?', '')
        .split('&').reduce((map, param) => {
            let propVal = param.split('=')
            map[propVal[0]] = propVal[1]
            return map
        }, {})

    btn.addEventListener('click', () => {
        $.ajax({
                url: `${ origin }/product?id=${ paramsMap['id'] }`,
                method: 'DELETE',
                data: {}
            })
            .done((data) => {
                location.href = `${ origin }/`
            })
            .fail((err) => {
                alert('An Error has occured while removing this product!')
            })
    })
})