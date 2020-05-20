var azure = require('azure-storage');

const getStatusAlt = async (req, res, next) =>{
  const conn = await azure.createTableService("DefaultEndpointsProtocol=https;AccountName=cosmos-demo4iot;AccountKey=JOCirzSuFAA2TOOX9xJVwiaACSibjajBny7PRUq877shuH9dLQgvMxr6EFimclS8Cqa9398riTvgzxIh4Rt7JQ==;TableEndpoint=https://cosmos-demo4iot.table.cosmos.azure.com:443/;");
  // const conn = await azure.createTableService(process.env.DefaultEndpointsProtocol,process.env.AccountName,process.env.AccountKey,process.env.TableEndpoint);
    
    conn.on('error', (err) => { 
        console.log("Connection error " + err);
        next(err);
      });

      var device = ['864495034011417', '864495034011418','864495034011416','864495034011233' ];

      for(i in device){ // for loop is good or bad for this position.
      
        var query = new azure.TableQuery()
        .select(['DeviceSerialNumber', 'Latitude','Longitude','Speed',
        'RecordedTime','SatelliteTime','ServerTime','Timestamp'])
        .top(1)
        .where('PartitionKey eq ?', device[i]);

            conn.queryEntities('gps_data',query, null, function(error, result, response) {
                if(!error) {
                    // when device sends the data(handling null data)
                    if(result.entries.length){ 
                        var jsonObj = JSON.stringify(result.entries,'',2);
                        console.log(jsonObj);
                    }
                }
            });
        }
      return 'result'; 
};

getStatusAlt()
.then(status => console.log(':::Device Details:::',status))
.catch(e => console.error('Error: ',e));
