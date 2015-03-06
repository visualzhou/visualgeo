{
  "queryPlanner" : {
    "plannerVersion" : 1,
    "namespace" : "test.geogeo",
    "indexFilterSet" : false,
    "parsedQuery" : {
      "loc" : {
        "$nearSphere" : {
          "$geometry" : {
            "type" : "Point",
            "coordinates" : [
              -73.98784,
              40.75747
            ]
          },
          "$maxDistance" : 1000000
        }
      }
    },
    "winningPlan" : {
      "stage" : "GEO_NEAR_2DSPHERE",
      "keyPattern" : {
        "loc" : "2dsphere"
      },
      "indexName" : "loc_2dsphere",
      "inputStages" : [
        {
          "stage" : "FETCH",
          "inputStage" : {
            "stage" : "IXSCAN",
            "filter" : {
              "TwoDSphereKeyInRegionExpression" : true
            },
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
                "[\"4f1032010202\", \"4f1032010203\")",
                "[\"4f103201021\", \"4f103201021\"]",
                "[\"4f1032010213\", \"4f1032010213\"]",
                "[\"4f10320102133\", \"4f10320102134\")",
                "[\"4f103201022\", \"4f103201023\")",
                "[\"4f103201023\", \"4f103201024\")",
                "[\"4f10320103\", \"4f10320103\"]",
                "[\"4f103201030\", \"4f103201030\"]",
                "[\"4f1032010300\", \"4f1032010301\")",
                "[\"4f1032011\", \"4f1032011\"]",
                "[\"4f10320110\", \"4f10320110\"]",
                "[\"4f103201101\", \"4f103201101\"]",
                "[\"4f1032011011\", \"4f1032011011\"]",
                "[\"4f10320110111\", \"4f10320110112\")",
                "[\"4f10320113\", \"4f10320113\"]",
                "[\"4f103201132\", \"4f103201133\")",
                "[\"4f103201133\", \"4f103201134\")"
              ]
            }
          }
        },
        {
          "stage" : "FETCH",
          "inputStage" : {
            "stage" : "IXSCAN",
            "filter" : {
              "TwoDSphereKeyInRegionExpression" : true
            },
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
                "[\"4f10320100\", \"4f10320100\"]",
                "[\"4f103201002\", \"4f103201003\")",
                "[\"4f10320101\", \"4f10320102\")",
                "[\"4f10320102\", \"4f10320103\")",
                "[\"4f10320103\", \"4f10320104\")",
                "[\"4f1032011\", \"4f1032012\")",
                "[\"4f1032012\", \"4f1032012\"]",
                "[\"4f10320120\", \"4f10320121\")",
                "[\"4f1032013\", \"4f1032013\"]",
                "[\"4f10320131\", \"4f10320132\")",
                "[\"4f10320132\", \"4f10320132\"]",
                "[\"4f103201321\", \"4f103201322\")"
              ]
            }
          }
        },
        {
          "stage" : "FETCH",
          "inputStage" : {
            "stage" : "IXSCAN",
            "filter" : {
              "TwoDSphereKeyInRegionExpression" : true
            },
            "keyPattern" : {
              "loc" : "2dsphere"
            },
            "indexName" : "loc_2dsphere",
            "isMultiKey" : false,
            "indexVersion" : 1,
            "direction" : "forward",
            "indexBounds" : {
              "loc" : [
                "[\"4f1032002\", \"4f1032003\")",
                "[\"4f1032003\", \"4f1032004\")",
                "[\"4f1032010\", \"4f1032011\")",
                "[\"4f1032011\", \"4f1032012\")",
                "[\"4f1032012\", \"4f1032013\")",
                "[\"4f1032013\", \"4f1032014\")",
                "[\"4f1032020\", \"4f1032021\")",
                "[\"4f1032021\", \"4f1032021\"]",
                "[\"4f10320210\", \"4f10320211\")",
                "[\"4f1032321\", \"4f1032321\"]",
                "[\"4f10323212\", \"4f10323213\")",
                "[\"4f1032322\", \"4f1032323\")",
                "[\"4f1033033\", \"4f1033033\"]",
                "[\"4f10330333\", \"4f10330334\")",
                "[\"4f1033100\", \"4f1033101\")",
                "[\"4f1033103\", \"4f1033104\")",
                "[\"4f1033110\", \"4f1033110\"]",
                "[\"4f10331100\", \"4f10331100\"]",
                "[\"4f103311000\", \"4f103311001\")"
              ]
            }
          }
        },
        {
          "stage" : "FETCH",
          "inputStage" : {
            "stage" : "IXSCAN",
            "filter" : {
              "TwoDSphereKeyInRegionExpression" : true
            },
            "keyPattern" : {
              "loc" : "2dsphere"
            },
            "indexName" : "loc_2dsphere",
            "isMultiKey" : false,
            "indexVersion" : 1,
            "direction" : "forward",
            "indexBounds" : {
              "loc" : [
                "[\"4f1032000\", \"4f1032001\")",
                "[\"4f1032001\", \"4f1032002\")",
                "[\"4f1032002\", \"4f1032003\")",
                "[\"4f1032003\", \"4f1032004\")",
                "[\"4f1032012\", \"4f1032013\")",
                "[\"4f1032013\", \"4f1032013\"]",
                "[\"4f10320133\", \"4f10320133\"]",
                "[\"4f103201333\", \"4f103201333\"]",
                "[\"4f1032013333\", \"4f1032013333\"]",
                "[\"4f10320133333\", \"4f10320133334\")",
                "[\"4f1032020\", \"4f1032021\")",
                "[\"4f1032021\", \"4f1032022\")",
                "[\"4f1032022\", \"4f1032023\")",
                "[\"4f1032023\", \"4f1032024\")",
                "[\"4f1032030\", \"4f1032031\")",
                "[\"4f1032031\", \"4f1032032\")",
                "[\"4f1032032\", \"4f1032033\")",
                "[\"4f1032033\", \"4f1032033\"]",
                "[\"4f10320331\", \"4f10320332\")",
                "[\"4f1032311\", \"4f1032312\")",
                "[\"4f1032312\", \"4f1032313\")",
                "[\"4f1032313\", \"4f1032314\")",
                "[\"4f1032320\", \"4f1032321\")",
                "[\"4f1032321\", \"4f1032322\")",
                "[\"4f1032322\", \"4f1032323\")",
                "[\"4f1032323\", \"4f1032324\")",
                "[\"4f1033020\", \"4f1033020\"]",
                "[\"4f10330201\", \"4f10330201\"]",
                "[\"4f103302011\", \"4f103302011\"]",
                "[\"4f1033020111\", \"4f1033020112\")",
                "[\"4f1033023\", \"4f1033024\")",
                "[\"4f1033030\", \"4f1033031\")",
                "[\"4f1033031\", \"4f1033032\")",
                "[\"4f1033032\", \"4f1033033\")",
                "[\"4f1033033\", \"4f1033034\")",
                "[\"4f1033100\", \"4f1033101\")",
                "[\"4f1033101\", \"4f1033102\")",
                "[\"4f1033102\", \"4f1033103\")",
                "[\"4f1033103\", \"4f1033104\")",
                "[\"4f1033110\", \"4f1033111\")",
                "[\"4f1033111\", \"4f1033112\")",
                "[\"4f1033112\", \"4f1033112\"]",
                "[\"4f10331120\", \"4f10331120\"]",
                "[\"4f103311200\", \"4f103311201\")",
                "[\"4f1033113\", \"4f1033114\")",
                "[\"4f1033120\", \"4f1033120\"]",
                "[\"4f10331200\", \"4f10331200\"]",
                "[\"4f103312000\", \"4f103312000\"]",
                "[\"4f1033120000\", \"4f1033120001\")",
                "[\"4f1033131\", \"4f1033132\")",
                "[\"4f1033132\", \"4f1033133\")"
              ]
            }
          }
        },
        {
          "stage" : "FETCH",
          "inputStage" : {
            "stage" : "IXSCAN",
            "filter" : {
              "TwoDSphereKeyInRegionExpression" : true
            },
            "keyPattern" : {
              "loc" : "2dsphere"
            },
            "indexName" : "loc_2dsphere",
            "isMultiKey" : false,
            "indexVersion" : 1,
            "direction" : "forward",
            "indexBounds" : {
              "loc" : [
                "[\"2f1211122\", \"2f1211122\"]",
                "[\"2f12111222\", \"2f12111223\")",
                "[\"2f12112\", \"2f12113\")",
                "[\"2f12121\", \"2f12122\")",
                "[\"4f1030122\", \"4f1030122\"]",
                "[\"4f10301222\", \"4f10301223\")",
                "[\"4f10302\", \"4f10303\")",
                "[\"4f10312\", \"4f10313\")",
                "[\"4f10313\", \"4f10314\")",
                "[\"4f10320\", \"4f10321\")",
                "[\"4f10321\", \"4f10322\")",
                "[\"4f10322\", \"4f10323\")",
                "[\"4f10323\", \"4f10324\")",
                "[\"4f10330\", \"4f10331\")",
                "[\"4f10331\", \"4f10332\")",
                "[\"4f10332\", \"4f10333\")",
                "[\"4f10333\", \"4f10334\")"
              ]
            }
          }
        },
        {
          "stage" : "FETCH",
          "inputStage" : {
            "stage" : "IXSCAN",
            "filter" : {
              "TwoDSphereKeyInRegionExpression" : true
            },
            "keyPattern" : {
              "loc" : "2dsphere"
            },
            "indexName" : "loc_2dsphere",
            "isMultiKey" : false,
            "indexVersion" : 1,
            "direction" : "forward",
            "indexBounds" : {
              "loc" : [
                "[\"2f1122\", \"2f1123\")",
                "[\"2f1211\", \"2f1212\")",
                "[\"2f1212\", \"2f1213\")",
                "[\"2f1221\", \"2f1222\")",
                "[\"4f1001\", \"4f1002\")",
                "[\"4f1002\", \"4f1003\")",
                "[\"4f1020\", \"4f1021\")",
                "[\"4f102322\", \"4f102323\")",
                "[\"4f1030\", \"4f1031\")",
                "[\"4f1031\", \"4f1032\")",
                "[\"4f1032\", \"4f1033\")",
                "[\"4f1033\", \"4f1034\")",
                "[\"4f1100\", \"4f1101\")",
                "[\"4f1101\", \"4f1102\")"
              ]
            }
          }
        },
        {
          "stage" : "FETCH",
          "inputStage" : {
            "stage" : "IXSCAN",
            "filter" : {
              "TwoDSphereKeyInRegionExpression" : true
            },
            "keyPattern" : {
              "loc" : "2dsphere"
            },
            "indexName" : "loc_2dsphere",
            "isMultiKey" : false,
            "indexVersion" : 1,
            "direction" : "forward",
            "indexBounds" : {
              "loc" : [
                "[\"2f1122\", \"2f1123\")",
                "[\"2f1210\", \"2f1211\")",
                "[\"2f1211\", \"2f1212\")",
                "[\"2f1212\", \"2f1213\")",
                "[\"2f1213\", \"2f1214\")",
                "[\"2f1220333\", \"2f1220333\"]",
                "[\"2f12203333\", \"2f12203334\")",
                "[\"2f1221\", \"2f1222\")",
                "[\"4f1000\", \"4f1001\")",
                "[\"4f1001\", \"4f1002\")",
                "[\"4f1002\", \"4f1003\")",
                "[\"4f10031\", \"4f10032\")",
                "[\"4f10133\", \"4f10134\")",
                "[\"4f1020\", \"4f1021\")",
                "[\"4f1023\", \"4f1024\")",
                "[\"4f1030\", \"4f1031\")",
                "[\"4f103111\", \"4f103112\")",
                "[\"4f1100\", \"4f1101\")",
                "[\"4f1101\", \"4f1102\")"
              ]
            }
          }
        }
      ]
    },
    "rejectedPlans" : [ ]
  },
  "executionStats" : {
    "executionSuccess" : true,
    "nReturned" : 4,
    "executionTimeMillis" : 3,
    "totalKeysExamined" : 22,
    "totalDocsExamined" : 4,
    "executionStages" : {
      "stage" : "GEO_NEAR_2DSPHERE",
      "nReturned" : 4,
      "executionTimeMillisEstimate" : 0,
      "works" : 44,
      "advanced" : 4,
      "needTime" : 39,
      "needYield" : 0,
      "saveState" : 0,
      "restoreState" : 0,
      "isEOF" : 1,
      "invalidates" : 0,
      "keyPattern" : {
        "loc" : "2dsphere"
      },
      "indexName" : "loc_2dsphere",
      "searchIntervals" : [
        {
          "minDistance" : 0,
          "maxDistance" : 13633.317181384604,
          "maxInclusive" : false
        },
        {
          "minDistance" : 13633.317181384604,
          "maxDistance" : 40899.95154415381,
          "maxInclusive" : false
        },
        {
          "minDistance" : 40899.95154415381,
          "maxDistance" : 95433.22026969222,
          "maxInclusive" : false
        },
        {
          "minDistance" : 95433.22026969222,
          "maxDistance" : 204499.75772076903,
          "maxInclusive" : false
        },
        {
          "minDistance" : 204499.75772076903,
          "maxDistance" : 422632.8326229227,
          "maxInclusive" : false
        },
        {
          "minDistance" : 422632.8326229227,
          "maxDistance" : 858898.9824272301,
          "maxInclusive" : false
        },
        {
          "minDistance" : 858898.9824272301,
          "maxDistance" : 1000000,
          "maxInclusive" : true
        }
      ],
      "inputStages" : [
        {
          "stage" : "FETCH",
          "nReturned" : 2,
          "executionTimeMillisEstimate" : 0,
          "works" : 5,
          "advanced" : 2,
          "needTime" : 2,
          "needYield" : 0,
          "saveState" : 0,
          "restoreState" : 0,
          "isEOF" : 1,
          "invalidates" : 0,
          "docsExamined" : 2,
          "alreadyHasObj" : 0,
          "inputStage" : {
            "stage" : "IXSCAN",
            "filter" : {
              "TwoDSphereKeyInRegionExpression" : true
            },
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
                "[\"4f1032010202\", \"4f1032010203\")",
                "[\"4f103201021\", \"4f103201021\"]",
                "[\"4f1032010213\", \"4f1032010213\"]",
                "[\"4f10320102133\", \"4f10320102134\")",
                "[\"4f103201022\", \"4f103201023\")",
                "[\"4f103201023\", \"4f103201024\")",
                "[\"4f10320103\", \"4f10320103\"]",
                "[\"4f103201030\", \"4f103201030\"]",
                "[\"4f1032010300\", \"4f1032010301\")",
                "[\"4f1032011\", \"4f1032011\"]",
                "[\"4f10320110\", \"4f10320110\"]",
                "[\"4f103201101\", \"4f103201101\"]",
                "[\"4f1032011011\", \"4f1032011011\"]",
                "[\"4f10320110111\", \"4f10320110112\")",
                "[\"4f10320113\", \"4f10320113\"]",
                "[\"4f103201132\", \"4f103201133\")",
                "[\"4f103201133\", \"4f103201134\")"
              ]
            },
            "keysExamined" : 4,
            "dupsTested" : 0,
            "dupsDropped" : 0,
            "seenInvalidated" : 0,
            "matchTested" : 2
          }
        },
        {
          "stage" : "FETCH",
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
          "docsExamined" : 1,
          "alreadyHasObj" : 0,
          "inputStage" : {
            "stage" : "IXSCAN",
            "filter" : {
              "TwoDSphereKeyInRegionExpression" : true
            },
            "nReturned" : 1,
            "executionTimeMillisEstimate" : 0,
            "works" : 4,
            "advanced" : 1,
            "needTime" : 3,
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
                "[\"4f10320100\", \"4f10320100\"]",
                "[\"4f103201002\", \"4f103201003\")",
                "[\"4f10320101\", \"4f10320102\")",
                "[\"4f10320102\", \"4f10320103\")",
                "[\"4f10320103\", \"4f10320104\")",
                "[\"4f1032011\", \"4f1032012\")",
                "[\"4f1032012\", \"4f1032012\"]",
                "[\"4f10320120\", \"4f10320121\")",
                "[\"4f1032013\", \"4f1032013\"]",
                "[\"4f10320131\", \"4f10320132\")",
                "[\"4f10320132\", \"4f10320132\"]",
                "[\"4f103201321\", \"4f103201322\")"
              ]
            },
            "keysExamined" : 4,
            "dupsTested" : 0,
            "dupsDropped" : 0,
            "seenInvalidated" : 0,
            "matchTested" : 1
          }
        },
        {
          "stage" : "FETCH",
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
          "docsExamined" : 1,
          "alreadyHasObj" : 0,
          "inputStage" : {
            "stage" : "IXSCAN",
            "filter" : {
              "TwoDSphereKeyInRegionExpression" : true
            },
            "nReturned" : 1,
            "executionTimeMillisEstimate" : 0,
            "works" : 4,
            "advanced" : 1,
            "needTime" : 3,
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
                "[\"4f1032002\", \"4f1032003\")",
                "[\"4f1032003\", \"4f1032004\")",
                "[\"4f1032010\", \"4f1032011\")",
                "[\"4f1032011\", \"4f1032012\")",
                "[\"4f1032012\", \"4f1032013\")",
                "[\"4f1032013\", \"4f1032014\")",
                "[\"4f1032020\", \"4f1032021\")",
                "[\"4f1032021\", \"4f1032021\"]",
                "[\"4f10320210\", \"4f10320211\")",
                "[\"4f1032321\", \"4f1032321\"]",
                "[\"4f10323212\", \"4f10323213\")",
                "[\"4f1032322\", \"4f1032323\")",
                "[\"4f1033033\", \"4f1033033\"]",
                "[\"4f10330333\", \"4f10330334\")",
                "[\"4f1033100\", \"4f1033101\")",
                "[\"4f1033103\", \"4f1033104\")",
                "[\"4f1033110\", \"4f1033110\"]",
                "[\"4f10331100\", \"4f10331100\"]",
                "[\"4f103311000\", \"4f103311001\")"
              ]
            },
            "keysExamined" : 4,
            "dupsTested" : 0,
            "dupsDropped" : 0,
            "seenInvalidated" : 0,
            "matchTested" : 1
          }
        },
        {
          "stage" : "FETCH",
          "nReturned" : 0,
          "executionTimeMillisEstimate" : 0,
          "works" : 1,
          "advanced" : 0,
          "needTime" : 0,
          "needYield" : 0,
          "saveState" : 0,
          "restoreState" : 0,
          "isEOF" : 1,
          "invalidates" : 0,
          "docsExamined" : 0,
          "alreadyHasObj" : 0,
          "inputStage" : {
            "stage" : "IXSCAN",
            "filter" : {
              "TwoDSphereKeyInRegionExpression" : true
            },
            "nReturned" : 0,
            "executionTimeMillisEstimate" : 0,
            "works" : 1,
            "advanced" : 0,
            "needTime" : 0,
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
                "[\"4f1032000\", \"4f1032001\")",
                "[\"4f1032001\", \"4f1032002\")",
                "[\"4f1032002\", \"4f1032003\")",
                "[\"4f1032003\", \"4f1032004\")",
                "[\"4f1032012\", \"4f1032013\")",
                "[\"4f1032013\", \"4f1032013\"]",
                "[\"4f10320133\", \"4f10320133\"]",
                "[\"4f103201333\", \"4f103201333\"]",
                "[\"4f1032013333\", \"4f1032013333\"]",
                "[\"4f10320133333\", \"4f10320133334\")",
                "[\"4f1032020\", \"4f1032021\")",
                "[\"4f1032021\", \"4f1032022\")",
                "[\"4f1032022\", \"4f1032023\")",
                "[\"4f1032023\", \"4f1032024\")",
                "[\"4f1032030\", \"4f1032031\")",
                "[\"4f1032031\", \"4f1032032\")",
                "[\"4f1032032\", \"4f1032033\")",
                "[\"4f1032033\", \"4f1032033\"]",
                "[\"4f10320331\", \"4f10320332\")",
                "[\"4f1032311\", \"4f1032312\")",
                "[\"4f1032312\", \"4f1032313\")",
                "[\"4f1032313\", \"4f1032314\")",
                "[\"4f1032320\", \"4f1032321\")",
                "[\"4f1032321\", \"4f1032322\")",
                "[\"4f1032322\", \"4f1032323\")",
                "[\"4f1032323\", \"4f1032324\")",
                "[\"4f1033020\", \"4f1033020\"]",
                "[\"4f10330201\", \"4f10330201\"]",
                "[\"4f103302011\", \"4f103302011\"]",
                "[\"4f1033020111\", \"4f1033020112\")",
                "[\"4f1033023\", \"4f1033024\")",
                "[\"4f1033030\", \"4f1033031\")",
                "[\"4f1033031\", \"4f1033032\")",
                "[\"4f1033032\", \"4f1033033\")",
                "[\"4f1033033\", \"4f1033034\")",
                "[\"4f1033100\", \"4f1033101\")",
                "[\"4f1033101\", \"4f1033102\")",
                "[\"4f1033102\", \"4f1033103\")",
                "[\"4f1033103\", \"4f1033104\")",
                "[\"4f1033110\", \"4f1033111\")",
                "[\"4f1033111\", \"4f1033112\")",
                "[\"4f1033112\", \"4f1033112\"]",
                "[\"4f10331120\", \"4f10331120\"]",
                "[\"4f103311200\", \"4f103311201\")",
                "[\"4f1033113\", \"4f1033114\")",
                "[\"4f1033120\", \"4f1033120\"]",
                "[\"4f10331200\", \"4f10331200\"]",
                "[\"4f103312000\", \"4f103312000\"]",
                "[\"4f1033120000\", \"4f1033120001\")",
                "[\"4f1033131\", \"4f1033132\")",
                "[\"4f1033132\", \"4f1033133\")"
              ]
            },
            "keysExamined" : 1,
            "dupsTested" : 0,
            "dupsDropped" : 0,
            "seenInvalidated" : 0,
            "matchTested" : 0
          }
        },
        {
          "stage" : "FETCH",
          "nReturned" : 0,
          "executionTimeMillisEstimate" : 0,
          "works" : 5,
          "advanced" : 0,
          "needTime" : 4,
          "needYield" : 0,
          "saveState" : 0,
          "restoreState" : 0,
          "isEOF" : 1,
          "invalidates" : 0,
          "docsExamined" : 0,
          "alreadyHasObj" : 0,
          "inputStage" : {
            "stage" : "IXSCAN",
            "filter" : {
              "TwoDSphereKeyInRegionExpression" : true
            },
            "nReturned" : 0,
            "executionTimeMillisEstimate" : 0,
            "works" : 4,
            "advanced" : 0,
            "needTime" : 4,
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
                "[\"2f1211122\", \"2f1211122\"]",
                "[\"2f12111222\", \"2f12111223\")",
                "[\"2f12112\", \"2f12113\")",
                "[\"2f12121\", \"2f12122\")",
                "[\"4f1030122\", \"4f1030122\"]",
                "[\"4f10301222\", \"4f10301223\")",
                "[\"4f10302\", \"4f10303\")",
                "[\"4f10312\", \"4f10313\")",
                "[\"4f10313\", \"4f10314\")",
                "[\"4f10320\", \"4f10321\")",
                "[\"4f10321\", \"4f10322\")",
                "[\"4f10322\", \"4f10323\")",
                "[\"4f10323\", \"4f10324\")",
                "[\"4f10330\", \"4f10331\")",
                "[\"4f10331\", \"4f10332\")",
                "[\"4f10332\", \"4f10333\")",
                "[\"4f10333\", \"4f10334\")"
              ]
            },
            "keysExamined" : 4,
            "dupsTested" : 0,
            "dupsDropped" : 0,
            "seenInvalidated" : 0,
            "matchTested" : 0
          }
        },
        {
          "stage" : "FETCH",
          "nReturned" : 0,
          "executionTimeMillisEstimate" : 0,
          "works" : 5,
          "advanced" : 0,
          "needTime" : 4,
          "needYield" : 0,
          "saveState" : 0,
          "restoreState" : 0,
          "isEOF" : 1,
          "invalidates" : 0,
          "docsExamined" : 0,
          "alreadyHasObj" : 0,
          "inputStage" : {
            "stage" : "IXSCAN",
            "filter" : {
              "TwoDSphereKeyInRegionExpression" : true
            },
            "nReturned" : 0,
            "executionTimeMillisEstimate" : 0,
            "works" : 4,
            "advanced" : 0,
            "needTime" : 4,
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
                "[\"2f1122\", \"2f1123\")",
                "[\"2f1211\", \"2f1212\")",
                "[\"2f1212\", \"2f1213\")",
                "[\"2f1221\", \"2f1222\")",
                "[\"4f1001\", \"4f1002\")",
                "[\"4f1002\", \"4f1003\")",
                "[\"4f1020\", \"4f1021\")",
                "[\"4f102322\", \"4f102323\")",
                "[\"4f1030\", \"4f1031\")",
                "[\"4f1031\", \"4f1032\")",
                "[\"4f1032\", \"4f1033\")",
                "[\"4f1033\", \"4f1034\")",
                "[\"4f1100\", \"4f1101\")",
                "[\"4f1101\", \"4f1102\")"
              ]
            },
            "keysExamined" : 4,
            "dupsTested" : 0,
            "dupsDropped" : 0,
            "seenInvalidated" : 0,
            "matchTested" : 0
          }
        },
        {
          "stage" : "FETCH",
          "nReturned" : 0,
          "executionTimeMillisEstimate" : 0,
          "works" : 1,
          "advanced" : 0,
          "needTime" : 0,
          "needYield" : 0,
          "saveState" : 0,
          "restoreState" : 0,
          "isEOF" : 1,
          "invalidates" : 0,
          "docsExamined" : 0,
          "alreadyHasObj" : 0,
          "inputStage" : {
            "stage" : "IXSCAN",
            "filter" : {
              "TwoDSphereKeyInRegionExpression" : true
            },
            "nReturned" : 0,
            "executionTimeMillisEstimate" : 0,
            "works" : 1,
            "advanced" : 0,
            "needTime" : 0,
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
                "[\"2f1122\", \"2f1123\")",
                "[\"2f1210\", \"2f1211\")",
                "[\"2f1211\", \"2f1212\")",
                "[\"2f1212\", \"2f1213\")",
                "[\"2f1213\", \"2f1214\")",
                "[\"2f1220333\", \"2f1220333\"]",
                "[\"2f12203333\", \"2f12203334\")",
                "[\"2f1221\", \"2f1222\")",
                "[\"4f1000\", \"4f1001\")",
                "[\"4f1001\", \"4f1002\")",
                "[\"4f1002\", \"4f1003\")",
                "[\"4f10031\", \"4f10032\")",
                "[\"4f10133\", \"4f10134\")",
                "[\"4f1020\", \"4f1021\")",
                "[\"4f1023\", \"4f1024\")",
                "[\"4f1030\", \"4f1031\")",
                "[\"4f103111\", \"4f103112\")",
                "[\"4f1100\", \"4f1101\")",
                "[\"4f1101\", \"4f1102\")"
              ]
            },
            "keysExamined" : 1,
            "dupsTested" : 0,
            "dupsDropped" : 0,
            "seenInvalidated" : 0,
            "matchTested" : 0
          }
        }
      ]
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