$(document).ready(() => {
    let btn = document.getElementById('product_save_button')
    let paramsMap = location
        .search.replace('?', '')
        .split('&').reduce((map, param) => {
            let propVal = param.split('=')
            map[propVal[0]] = propVal[1]
            return map
        }, {})
    let productInfo = {
        product_name: 'product',
        product_desc: 'product',
        product_image: 'product',
        product_brand: 'product',
        product_price: 'product',
        product_status: 'product'
    }

    btn.addEventListener('click', () => {
        let productId = paramsMap['id']

        // edit product if has id parameter
        if (productId) {
            $.ajax({
                url: `${ origin }/product?id=${ paramsMap['id'] }`,
                method: 'PATCH',
                contentType: 'application/json',
                data: JSON.stringify(productInfo)
            })
            .done((data) => {
                // location.href = `${ origin }/`
                console.log(data)
            })
            .fail((err) => {
                alert('An Error has occured while Modifying this product!')
            })

        // new product if no id
        } else {
            $.ajax({
                url: `${ origin }/product`,
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(productInfo)
            })
            .done((data) => {
                // location.href = `${ origin }/`
                console.log(data)
            })
            .fail((err) => {
                alert('An Error has occured while Uploading this product!')
            })
        }
    })
})