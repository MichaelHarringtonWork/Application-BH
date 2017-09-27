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

//on receiving a message, depending on the sensor name, extract the sensor value and assign to a 
//private variable so that it can be used in index.js to update components.
    ws.onmessage = function (payload) {
        console.log("This is the payload received by the client");
        console.log(payload);
        //var bhdata = "[" + payload + "]";
        var data = JSON.parse(payload.data); 
        
        switch(data["sensor_name"]){
            case "CLAC_Distance_Travelled" : //Distance travelled in Meters
                _DistanceTravelled = data["sensorCalculatedValue"];
                break;
            case "RS232_P2_FUEL_GPS_mph": //Speedo in MPH
                _SpeedMPH = data["sensorCalculatedValue"];
                break;
            case "CALC_DECUJetTBTPercent": //Jet Turbine Blade Temperature (percentage of measurement range)
                _TurbinTemp = data["sensorCalculatedValue"];
                break;
            case "MILBUS_DECUJetNozArea": //The nozzle exhaust area (Area Jet)
                _AJ = data["sensorCalculatedValue"];
                break;
            case "MILBUS_DECUJetNL": //Low pressure spool area
                _NL = data["sensorCalculatedValue"];
                break;
            case "MILBUS_DECUJetNH": //High pressure spool area 
                _NH = data["sensorCalculatedValue"];
                break;
            case "CALC_JetFuelRemaining": //Fuel Level
                _FuelLevel = data["sensorCalculatedValue"];
                break;
            case "A1_20_FL_ACC_Z": //Lateral side-to-side G
                _LateralG = data["sensorCalculatedValue"];
                break;
            case "A2_2_FR_TC2_OUTER_BRK_PAD_TEMP": //Brake pad temps front 
                _BreakPadTempFront = data["sensorCalculatedValue"];
                break;
            case "A2_2_BR_TC2_OUTER_BRK_PAD_TEMP": //Break pads temp back
                _BreakPadTempBack = data["sensorCalculatedValue"];
                break;
            case "A2_26_POWER_BUS_VOLTAGE_SIG": //Power Bus Voltage
                _PowerBusVoltage = data["sensorCalculatedValue"];
                break;
            case "CALC_MachNo": //Mach No.
                _MachNo = data["sensorCalculatedValue"];
                break;
            case "CALC_SpeedOfSound": //Speed Of Sound
                _SpeedOfSound = data["sensorCalculatedValue"];
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