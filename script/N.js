//if (jQuery) {
//	console.log('On success');
//};


$.ajax({
    url: 'http://localhost:8080/actg/token/?identifier=tokenized-with-landingpage',
    async: true,
    crossDomain: true,
    method: 'GET',
    headers: {
        'content-type': 'application/json',
        'cache-control': 'no-cache'
    },
    done: function(jqxhr, response) {
        console.log('On success', response)
    },
    fail: function(jqxhr, textStatus, error) {
        console.log('On failure', textStatus, error)
    }
 });
 $.ajax({
    url: 'http://localhost:8080/actg/token/?identifier=tokenized-without-landingpage',
    async: true,
    crossDomain: true,
    method: 'GET',
    headers: {
        'content-type': 'application/json',
        'cache-control': 'no-cache'
    },
    done: function(jqxhr, response) {
        console.log('On success', response)
    },
    fail: function(jqxhr, textStatus, error) {
        console.log('On failure', textStatus, error)
    }
 });


	











