var ws = new WebSocket('ws://localhost:4200');


window.onload = function () {
    var _DistanceTravelled;
    var _SpeedMPH;
    var _TurbinTemp;
    var _AJ;
    var _NL;
    var _NH;
    var _FuelLevel;
    var _LateralG;
    var _BreakPadTempFront;
    var _BreakPadTempBack;
    var _PowerBusVoltage;
    var _MachNo;
    var _SpeedOfSound;
    
    ws.onopen = function () {
        setTitle("Connected to Bloodhound Dashboard");
    };

    ws.onclose = function () {
        setTitle("Disconnected from Bloodhound Dashboard");
    };

    ws.onmessage = function (payload) {
        console.log("This is the payload received by the client");
        console.log(payload);
        //var bhdata = "[" + payload + "]";
        var data = JSON.parse(payload.data); 
        
        switch(data["sensor_name"]){
            case "CLAC_Distance_Travelled" : //Distance travelled in Meters
                _DistanceTravelled = data["sensorCalculatedValue"];
                //document.querySelector('#DistTrav2').innerHTML = data["sensorCalculatedValue"];
                break;
            case "RS232_P2_FUEL_GPS_mph": //Speedo in MPH
                _SpeedMPH = data["sensorCalculatedValue"];
                //document.querySelector('#MPH').innerHTML =  data["sensorCalculatedValue"];
                break;
            case "CALC_DECUJetTBTPercent": //Jet Turbine Blade Temperature (percentage of measurement range)
                _TurbinTemp = data["sensorCalculatedValue"];
                //document.querySelector('#TurbineTemp').innerHTML = data["sensorCalculatedValue"];
                break;
            case "MILBUS_DECUJetNozArea": //The nozzle exhaust area (Area Jet)
                _AJ = data["sensorCalculatedValue"];
                //document.querySelector('#AJ').innerHTML = data["sensorCalculatedValue"];
                break;
            case "MILBUS_DECUJetNL": //Low pressure spool area
                _NL = data["sensorCalculatedValue"];
                //document.querySelector('#NL').innerHTML = data["sensorCalculatedValue"];
                break;
            case "MILBUS_DECUJetNH": //High pressure spool area 
                _NH = data["sensorCalculatedValue"];
                //document.querySelector('#NH').innerHTML = data["sensorCalculatedValue"];
                break;
            case "CALC_JetFuelRemaining": //Fuel Level
                _FuelLevel = data["sensorCalculatedValue"];
                //document.querySelector('#FuelLevel').innerHTML = data["sensorCalculatedValue"];
                break;
            case "A1_20_FL_ACC_Z": //Lateral side-to-side G
                _LateralG = data["sensorCalculatedValue"];
                //document.querySelector('#LateralG').innerHTML = data["sensorCalculatedValue"];
                break;
            case "A2_2_FR_TC2_OUTER_BRK_PAD_TEMP": //Brake pad temps front 
                _BreakPadTempFront = data["sensorCalculatedValue"];
                //document.querySelector('#BreakPadTempFront').innerHTML = data["sensorCalculatedValue"];
                break;
            case "A2_2_BR_TC2_OUTER_BRK_PAD_TEMP": //Break pads temp back
                _BreakPadTempBack = data["sensorCalculatedValue"];
                 //document.querySelector('#BreakPadTempBack').innerHTML = data["sensorCalculatedValue"];
                break;
            case "A2_26_POWER_BUS_VOLTAGE_SIG": //Power Bus Voltage
                _PowerBusVoltage = data["sensorCalculatedValue"];
                //document.querySelector('#PowerBusVoltage').innerHTML = data["sensorCalculatedValue"];
                break;
            case "CALC_MachNo": //Mach No.
                _MachNo = data["sensorCalculatedValue"];
                //document.querySelector('#MachNo').innerHTML = data["sensorCalculatedValue"];
                break;
            case "CALC_SpeedOfSound": //Speed Of Sound
                _SpeedOfSound = data["sensorCalculatedValue"];
                //document.querySelector('#SpeedOfSound').innerHTML = data["sensorCalculatedValue"];
                break;
        };
   
        document.querySelector('p').innerHTML = payload.data;
        console.log("This is the onmessage function");
    };

    function setTitle(title) {
        console.log("This will set the Title of the page");
        document.querySelector('h1').innerHTML = title;
    }
};