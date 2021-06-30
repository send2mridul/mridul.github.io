window.addEventListener('clear', function (eventData) {
        console.log('In Script');

    try {
        document.getElementById("chatBoxMain").innerHTML = "";
        document.getElementById("chatOptions").innerHTML = "";
        window.YellowMessengerPlugin.sendEvent(JSON.stringify({
            event_code: 'ym-client-event', data: "start"
        }), '*');
        return;
    } catch (error) {
        console.log(error, "error")
    }
}, false);
