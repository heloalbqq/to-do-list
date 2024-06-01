let input = document.getElementById('lista')
let item = document.getElementById('item')
let itens = []
let tab = document.getElementById('div2')

function pesquisar() {
    if(input.value.length == 0) {
        alert('[ERRO] Adicione um item.')
    } else {
        
        let i = document.createElement('li')
        i.textContent = `${input.value}`
        i.value = `tab${input}`
        tab.appendChild(i)
        input.value = ''
        input.focus()

    }

}
