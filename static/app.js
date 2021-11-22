let response;

const http = new XMLHttpRequest()

http.open("GET", "https://project-apis.codespace.co.za/api/list")
http.send()

http.onload = () => {
    response = http.responseText

    let myVue = new Vue({
        el: '#myApp',
    
        data: response,
    });

    console.log(http.responseText)
}

