var APP_DATA = {
  "scenes": [
    {
      "id": "0-hall",
      "name": "Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -0.10616087757751025,
        "pitch": 0.24607103551462828,
        "fov": 1.2959776848255018
      },
      "linkHotspots": [
        {
          "yaw": 0.7541763826573966,
          "pitch": 0.05769089216456358,
          "rotation": 4.71238898038469,
          "target": "1-bathroom"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.5157678811425264,
          "pitch": -0.10557257631234762,
          "title": "Wardrobe",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-bathroom",
      "name": "Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 1.671054397703971,
        "pitch": 0.13121268459067892,
        "fov": 1.2959776848255018
      },
      "linkHotspots": [
        {
          "yaw": 1.671054397703971,
          "pitch": 0.13121268459067892,
          "rotation": 0,
          "target": "0-hall"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.435763447950718,
          "pitch": -0.319858258903281,
          "title": "Bathroom Cabinet",
          "text": "Full of Toilet Paper"
        }
      ]
    }
  ],
  "name": "Tayson 2",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
