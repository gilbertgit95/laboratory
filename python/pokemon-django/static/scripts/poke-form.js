const createListElement = (val, opt) => {
    return document.createRange().createContextualFragment(`
        <span class="btn ${ opt }-value" style="border: 1px solid #d77a2e;">
            <input class="from-control"
                placeholder="Enter Value"
                value="${ val }"
                style="width: 100px;
                        border: none;
                        outline: none;
                        background: none;">
            <button class="btn" onclick="removeParentEl(this)">
                <i class="fa fa-trash"></i>
            </button>
        </span>
    `)
}

const removeParentEl = (e) => {
    e.parentElement.remove()
}

$(document).ready(() => {
    let nameForm = $('#name_form')
    let imageForm = $('#image_form')
    let weigthForm = $('#weight_form')
    let heightForm = $('#height_form')
    let pokeidForm = $('#pokeid_form')

    let evolutionAddBtn = $('#evolution_add')
    let abilityAddBtn = $('#ability_add')
    let itemAddBtn = $('#item_add')
    let typeAddBtn = $('#type_add')

    let saveBtn = $('#save_btn')
    let submitForm = $('#submit_form')

    evolutionAddBtn.find('button').click(() => {
        let inp = evolutionAddBtn.find('input')
        let val = inp.val()

        if (val && val.length) {
            let el = createListElement(val, 'evolution')
            $(el).insertBefore(evolutionAddBtn)
            inp.val('')
        }
    })

    abilityAddBtn.find('button').click(() => {
        let inp = abilityAddBtn.find('input')
        let val = inp.val()

        if (val && val.length) {
            let el = createListElement(val, 'ability')
            $(el).insertBefore(abilityAddBtn)
            inp.val('')
        }
    })

    itemAddBtn.find('button').click(() => {
        let inp = itemAddBtn.find('input')
        let val = inp.val()

        if (val && val.length) {
            let el = createListElement(val, 'item')
            $(el).insertBefore(itemAddBtn)
            inp.val('')
        }
    })

    typeAddBtn.find('button').click(() => {
        let inp = typeAddBtn.find('input')
        let val = inp.val()

        if (val && val.length) {
            let el = createListElement(val, 'type')
            $(el).insertBefore(typeAddBtn)
            inp.val('')
        }
    })

    saveBtn.click(() => {
        let evolutionForm = $('.evolution-value')
        let abilitiesForm = $('.ability-value')
        let heldItemsForm = $('.item-value')
        let typesForm = $('.type-value')
        let statsForm = $('.stats-value')

        let name = nameForm.val()
        let image = imageForm.val()
        let weight = weigthForm.val()
        let height = heightForm.val()
        let pokeid = pokeidForm.val()
        let evolution = []
        let abilities = []
        let items = []
        let types = []
        let stats = []

        evolutionForm.each((e, el) => {
            evolution.push($(el).find('input').val())
        })
        abilitiesForm.each((e, el) => {
            abilities.push($(el).find('input').val())
        })
        heldItemsForm.each((e, el) => {
            items.push($(el).find('input').val())
        })
        typesForm.each((e, el) => {
            types.push($(el).find('input').val())
        })
        statsForm.each((e, el) => {
            let inp = $(el).find('input')
            let td = el.title
            let baseStat = inp.first().val()
            let effort = inp.last().val()

            stats.push(`${ td }:${ baseStat }:${ effort }`)
        })

        evolution = evolution.join(',')
        abilities = abilities.join(',')
        items = items.join(',')
        types = types.join(',')
        stats = stats.join(',')

        // assign to form inputs
        let inputs = submitForm.find('input')
        inputs[0].value = name
        inputs[1].value = image
        inputs[2].value = weight
        inputs[3].value = height
        inputs[4].value = pokeid
        inputs[5].value = abilities
        inputs[6].value = items
        inputs[7].value = types
        inputs[8].value = stats
        inputs[9].value = evolution

        submitForm.find('button').click()
    })
})