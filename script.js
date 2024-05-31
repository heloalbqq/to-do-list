document.addEventListener('DOMContentLoaded', () => {
    let input = document.getElementById('lista');
    let lista = document.getElementById('item');

    input.addEventListener('keydown', (event) => {
        if(event.value.length == '' ) {
            alert('[ERRO] Adicione algum item')
        } else if (event.key === 'Enter') {
            alert('ok')
        }
    })
})
