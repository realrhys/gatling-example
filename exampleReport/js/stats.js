var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "13537",
        "ok": "13537",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "45",
        "ok": "45",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3629",
        "ok": "3629",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "97",
        "ok": "97",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "162",
        "ok": "162",
        "ko": "-"
    },
    "percentiles1": {
        "total": "62",
        "ok": "62",
        "ko": "-"
    },
    "percentiles2": {
        "total": "84",
        "ok": "84",
        "ko": "-"
    },
    "percentiles3": {
        "total": "174",
        "ok": "174",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1047",
        "ok": "1047",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 13349,
        "percentage": 99
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 126,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 62,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "64.156",
        "ok": "64.156",
        "ko": "-"
    }
},
contents: {
"req_get-asset-ef029": {
        type: "REQUEST",
        name: "get_asset",
path: "get_asset",
pathFormatted: "req_get-asset-ef029",
stats: {
    "name": "get_asset",
    "numberOfRequests": {
        "total": "13537",
        "ok": "13537",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "45",
        "ok": "45",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3629",
        "ok": "3629",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "97",
        "ok": "97",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "162",
        "ok": "162",
        "ko": "-"
    },
    "percentiles1": {
        "total": "62",
        "ok": "62",
        "ko": "-"
    },
    "percentiles2": {
        "total": "84",
        "ok": "84",
        "ko": "-"
    },
    "percentiles3": {
        "total": "174",
        "ok": "174",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1047",
        "ok": "1047",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 13349,
        "percentage": 99
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 126,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 62,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "64.156",
        "ok": "64.156",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
