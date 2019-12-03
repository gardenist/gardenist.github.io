(function() {
    console.log('load');
    let regexp = {
        onlyNumber: /^\d+$/,
        phoneNumber: /^01\d-\d{3,4}-\d{4}$/,
        ip: /^[12]?\d{1,2}.[12]?\d{1,2}.[12]?\d{1,2}.[12]?\d{1,2}$/,
        email: /^[0-9\.a-zA-Z\-_]+@\w+\.\w+(\.\w+)?$/,
        url: /^https?:\/\/(\w+\.)?\w+\.\w+(\.\w+)?(\/\w+)*(\?(\w+=\w*)*)?$/
    }
    document.querySelectorAll('.validate').forEach(function(button) {
        button.onclick = function() {
            let type = button.dataset.for;
            console.log('init ' + type);
            let input = document.getElementById(type);
            if(regexp[type].test(input.value)) {
                input.style.backgroundColor = 'lightgreen';
            } else {
                input.style.backgroundColor = 'red';
            }
        }
    })
});