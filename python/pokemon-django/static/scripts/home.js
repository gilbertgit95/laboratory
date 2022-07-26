
$(document).ready(() => {
    let downloadBtn = $('#download_btn')
    let addBtn = $('#add_btn')
    let searchBox = $('#search_key')
    let pokeBoxes = $('.pokemon-box-container')
    let baseURL = window.origin

    // search proccess, filter when searching
    searchBox.keyup((e) => {
        let searchKey = e.target.value.toLowerCase()

        pokeBoxes.each((index, box) => {
            name = box.title.toLowerCase()

            if (name.indexOf(searchKey) > -1) {
                box.style.display = ''
            } else {
                box.style.display = 'none'
            }
        })
    })

    // add button click
    addBtn.click(() => {
        location.href =  `${ baseURL }/add-pokemon`
    })

    // on click pokemon box
    pokeBoxes.click((e) => {
        name = e.currentTarget.title
        location.href =  `${ baseURL }/pokemons/${ name }`
    })

    let downloadOptions = ['name', 'poke_id', 'date_created'];
    $('.dropdown-menu a').on( 'click', ( event ) => {
        let $target = $( event.currentTarget ),
            val = $target.attr( 'data-value' ),
            $inp = $target.find( 'input' ),
            idx;
        if ( ( idx = downloadOptions.indexOf( val ) ) > -1 ) {
            downloadOptions.splice( idx, 1 );
            setTimeout(() => { $inp.prop( 'checked', false ) }, 0);
        } else {
            downloadOptions.push( val );
            setTimeout(() => { $inp.prop( 'checked', true ) }, 0);
        }
        $( event.target ).blur();
        return false;
    });

    downloadBtn.click(() => {
        let url = `${ window.origin }/download?fields=${ downloadOptions.join('-') }`
        window.open(url, "_blank"); 
    })
})