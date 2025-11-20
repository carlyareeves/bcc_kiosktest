export interface TransportFeature {
  type: "Feature";
  geometry: {
    type: "Point";
    coordinates: [number, number];
  };
  properties: {
    objectid: number;
    stopnumber: number;
    streetname: string;
    nearstreetname: string;
    description: string;
    boardingpoint: string;
    tactile: boolean;
    routes: number[];
  };
}

export const transportLocations: TransportFeature[] = [
    {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [-27.470, 153.023]
    },
    "properties": {
        "objectid": 12632,
        "stopnumber": 18,
        "streetname": "Adelaide Street",
        "nearstreetname": "George Street",
        "description": "Adelaide St at City Hall (Stop 18)",
        "boardingpoint": "Easy",
        "tactile": true,
        "routes": [40,114,121],
    }
    },
    ];