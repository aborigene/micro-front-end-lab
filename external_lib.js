const applicationId = '2d92270e-1bd9-4f57-af67-1e6da9870a4d';
const beaconUrl = 'https://bf31782rqn.bf.dynatrace.com/mbeacon';

const openKit = new OpenKitBuilder(beaconUrl, applicationId).build();

openKit.waitForInit((initializedSuccessfully) => {
    const sessionWithoutArgument = openKit.createSession();
    session.identifyUser('some user'); 
});

function sorteio(){
    var w3includehtmlDiv = document.getElementById("w3-include-html");
    w3includehtmlDiv.innerHTML += "Clique abaixo para participar do sorteio.<br>"
    w3includehtmlDiv.innerHTML += "<input type='button' onClick=sortear();>"
    w3includehtmlDiv.innerHTML += "<div id='resultado_sorteio'></div>"
}

function sortear(){
    const rootActionName = 'Sortear';
    const action = session.enterAction(rootActionName);
    var xhttp = new XMLHttpRequest();
    var resultado_sorteio = document.getElementById("resultado_sorteio");
    var rollingImageContents = `<svg width="36px" height="36px" viewBox="0 0 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
    <!-- Generator: Sketch 3.1 (8751) - http://www.bohemiancoding.com/sketch -->
    <title>loader01 2</title>
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
        <g id="Group-3" sketch:type="MSLayerGroup" fill="#4990E2">
            <rect id="Rectangle-1" sketch:type="MSShapeGroup" x="16.5873418" y="0" width="3" height="9.13705584"></rect>
            <rect id="Rectangle-2" fill-opacity="0.58" sketch:type="MSShapeGroup" x="16.678481" y="26.8629442" width="3" height="9.13705584"></rect>
            <rect id="Rectangle-4" fill-opacity="0.79" sketch:type="MSShapeGroup" transform="translate(31.530380, 17.954315) rotate(-270.000000) translate(-31.530380, -17.954315) " x="30.0303797" y="13.3857868" width="3" height="9.13705584"></rect>
            <rect id="Rectangle-3" fill-opacity="0.37" sketch:type="MSShapeGroup" transform="translate(4.735443, 18.045685) rotate(-270.000000) translate(-4.735443, -18.045685) " x="3.23544304" y="13.4771574" width="3" height="9.13705584"></rect>
            <rect id="Rectangle-4" fill-opacity="0.72" sketch:type="MSShapeGroup" transform="translate(29.758244, 24.676171) rotate(-240.000000) translate(-29.758244, -24.676171) " x="28.2582441" y="20.1076435" width="3" height="9.13705584"></rect>
            <rect id="Rectangle-3" fill-opacity="0.3" sketch:type="MSShapeGroup" transform="translate(6.507579, 11.323829) rotate(-240.000000) translate(-6.507579, -11.323829) " x="5.00757864" y="6.75530065" width="3" height="9.13705584"></rect>
            <rect id="Rectangle-4" fill-opacity="0.65" sketch:type="MSShapeGroup" transform="translate(24.871110, 29.609153) rotate(-210.000000) translate(-24.871110, -29.609153) " x="23.37111" y="25.0406255" width="3" height="9.13705584"></rect>
            <rect id="Rectangle-3" fill-opacity="0.23" sketch:type="MSShapeGroup" transform="translate(11.394713, 6.390847) rotate(-210.000000) translate(-11.394713, -6.390847) " x="9.89471277" y="1.82231869" width="3" height="9.13705584"></rect>
            <rect id="Rectangle-4" fill-opacity="0.51" sketch:type="MSShapeGroup" transform="translate(11.473642, 29.654839) rotate(-150.000000) translate(-11.473642, -29.654839) " x="9.97364166" y="25.0863108" width="3" height="9.13705584"></rect>
            <rect id="Rectangle-3" fill-opacity="0.93" sketch:type="MSShapeGroup" transform="translate(24.792181, 6.345161) rotate(-150.000000) translate(-24.792181, -6.345161) " x="23.2921811" y="1.77663341" width="3" height="9.13705584"></rect>
            <rect id="Rectangle-4" fill-opacity="0.44" sketch:type="MSShapeGroup" transform="translate(6.553148, 24.755301) rotate(-120.000000) translate(-6.553148, -24.755301) " x="5.05314826" y="20.1867727" width="3" height="9.13705584"></rect>
            <rect id="Rectangle-3" fill-opacity="0.86" sketch:type="MSShapeGroup" transform="translate(29.712675, 11.244699) rotate(-120.000000) translate(-29.712675, -11.244699) " x="28.2126745" y="6.67617143" width="3" height="9.13705584"></rect>
        </g>
        <animateTransform attributeName="transform"
    type="rotate"
    from="0 18 18"
    to="360 18 18"
    begin="0s"
    dur="0.85s"
    repeatCount="indefinite"
    />
        </g>
    </svg>`
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            resultado_sorteio.innerHTML = "<h1>Resultado do sorteio:</h1><h1>";
            resultado_sorteio.innerHTML += obj.resultado;
            resultado_sorteio.innerHTML += "</h1><br>";
            action.leaveAction();
            webRequestTracer
                .setBytesSent(byteLength(url)) // fetch API does not expose the request headers
                .setBytesReceived(byteLength(this.response)) // bytes processed
                .stop(this.status); // stop the tracer
        }
    };
    const url = 'https://endpoint/sortear'
    const webRequestTracer = action.traceWebRequest(url);
    xhttp.setRequestHeader('X-dynaTrace', webRequestTracer.getTag());

    webRequestTracer.start();

    xhttp.open('GET', url, true);
    xhttp.send();
    resultado_sorteio.innerHTML = rollingImageContents;
}