{
  "queryPlanner" : {
    "plannerVersion" : 1,
    "namespace" : "test.geogeo",
    "indexFilterSet" : false,
    "parsedQuery" : {
      "loc" : {
        "$geoWithin" : {
          "$geometry" : {
            "type" : "Polygon",
            "coordinates" : [
              [
                [
                  -73.98784,
                  40.75747
                ],
                [
                  -73.93784,
                  40.65747
                ],
                [
                  -74.01784,
                  40.63747
                ],
                [
                  -73.98784,
                  40.75747
                ]
              ]
            ]
          }
        }
      }
    },
    "winningPlan" : {
      "stage" : "KEEP_MUTATIONS",
      "inputStage" : {
        "stage" : "FETCH",
        "filter" : {
          "loc" : {
            "$geoWithin" : {
              "$geometry" : {
                "type" : "Polygon",
                "coordinates" : [
                  [
                    [
                      -73.98784,
                      40.75747
                    ],
                    [
                      -73.93784,
                      40.65747
                    ],
                    [
                      -74.01784,
                      40.63747
                    ],
                    [
                      -73.98784,
                      40.75747
                    ]
                  ]
                ]
              }
            }
          }
        },
        "inputStage" : {
          "stage" : "IXSCAN",
          "keyPattern" : {
            "loc" : "2dsphere"
          },
          "indexName" : "loc_2dsphere",
          "isMultiKey" : false,
          "indexVersion" : 1,
          "direction" : "forward",
          "indexBounds" : {
            "loc" : [
              "[\"4f1032010\", \"4f1032010\"]",
              "[\"4f10320102\", \"4f10320102\"]",
              "[\"4f103201020\", \"4f103201020\"]",
              "[\"4f1032010202\", \"4f1032010202\"]",
              "[\"4f10320102022\", \"4f10320102023\")",
              "[\"4f103201023\", \"4f103201023\"]",
              "[\"4f1032010230\", \"4f1032010230\"]",
              "[\"4f10320102300\", \"4f10320102301\")",
              "[\"4f10320102302\", \"4f10320102303\")",
              "[\"4f10320102303\", \"4f10320102304\")",
              "[\"4f1032010231\", \"4f1032010232\")"
            ]
          }
        }
      }
    },
    "rejectedPlans" : [ ]
  },
  "executionStats" : {
    "executionSuccess" : true,
    "nReturned" : 1,
    "executionTimeMillis" : 1,
    "totalKeysExamined" : 4,
    "totalDocsExamined" : 2,
    "executionStages" : {
      "stage" : "KEEP_MUTATIONS",
      "nReturned" : 1,
      "executionTimeMillisEstimate" : 0,
      "works" : 5,
      "advanced" : 1,
      "needTime" : 3,
      "needYield" : 0,
      "saveState" : 0,
      "restoreState" : 0,
      "isEOF" : 1,
      "invalidates" : 0,
      "inputStage" : {
        "stage" : "FETCH",
        "filter" : {
          "loc" : {
            "$geoWithin" : {
              "$geometry" : {
                "type" : "Polygon",
                "coordinates" : [
                  [
                    [
                      -73.98784,
                      40.75747
                    ],
                    [
                      -73.93784,
                      40.65747
                    ],
                    [
                      -74.01784,
                      40.63747
                    ],
                    [
                      -73.98784,
                      40.75747
                    ]
                  ]
                ]
              }
            }
          }
        },
        "nReturned" : 1,
        "executionTimeMillisEstimate" : 0,
        "works" : 5,
        "advanced" : 1,
        "needTime" : 3,
        "needYield" : 0,
        "saveState" : 0,
        "restoreState" : 0,
        "isEOF" : 1,
        "invalidates" : 0,
        "docsExamined" : 2,
        "alreadyHasObj" : 0,
        "inputStage" : {
          "stage" : "IXSCAN",
          "nReturned" : 2,
          "executionTimeMillisEstimate" : 0,
          "works" : 4,
          "advanced" : 2,
          "needTime" : 2,
          "needYield" : 0,
          "saveState" : 0,
          "restoreState" : 0,
          "isEOF" : 1,
          "invalidates" : 0,
          "keyPattern" : {
            "loc" : "2dsphere"
          },
          "indexName" : "loc_2dsphere",
          "isMultiKey" : false,
          "indexVersion" : 1,
          "direction" : "forward",
          "indexBounds" : {
            "loc" : [
              "[\"4f1032010\", \"4f1032010\"]",
              "[\"4f10320102\", \"4f10320102\"]",
              "[\"4f103201020\", \"4f103201020\"]",
              "[\"4f1032010202\", \"4f1032010202\"]",
              "[\"4f10320102022\", \"4f10320102023\")",
              "[\"4f103201023\", \"4f103201023\"]",
              "[\"4f1032010230\", \"4f1032010230\"]",
              "[\"4f10320102300\", \"4f10320102301\")",
              "[\"4f10320102302\", \"4f10320102303\")",
              "[\"4f10320102303\", \"4f10320102304\")",
              "[\"4f1032010231\", \"4f1032010232\")"
            ]
          },
          "keysExamined" : 4,
          "dupsTested" : 0,
          "dupsDropped" : 0,
          "seenInvalidated" : 0,
          "matchTested" : 0
        }
      }
    },
    "allPlansExecution" : [ ]
  },
  "serverInfo" : {
    "host" : "siyuan-mbp",
    "port" : 27017,
    "version" : "3.1.0-pre-",
    "gitVersion" : "ed108dccf043a13e1eed08dafc6c9eb793094b34"
  },
  "ok" : 1
}