const apikey = '5c0c9e99-747d-4439-8177-1dbc842ceedf'
const apihost = 'https://todo-api.coderslab.pl'

function apiListTask() {
    return fetch(
        apihost + '/api/tasks', {
            headers: {
                Authorization: apikey
            }
        }
    ).then(
        function(resp) {
            if (!resp.ok) {
                alert('Wystąpił błąd! Otwórz devtools i zakładkę Sieć/Network, i poszukaj przyczyny')
            }
        }
    )
}

function renderTask(taskId, title, description, status) {
    console.log('Zadanie o id =', taskId)
    console.log('tytuł to: ', title)
    console.log('opis to: ', description)
    console.log('status to: ', status)
}