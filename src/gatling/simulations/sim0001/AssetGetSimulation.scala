package sim0001

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._
import io.gatling.http.request.builder.HttpRequestBuilder.toActionBuilder

class AssetGetSimulation extends Simulation {

/*
    before {
        def url = System.getProperty("url")
        println("***** Asset Get Simulation Start *****    " + url)
        
    }

    after {
        println("***** Asset Get Simulation Stop ******")
    }
*/
    val theHttpProtocolBuilder = http
        .baseURL(System.getProperty("url"))

    val theScenarioBuilder = scenario("Scenario1")
        .exec(
            /* myRequest1 is a name that describes the request. */
            http("get_asset")
                .get("/123")
        )

/*

    setUp(
        theScenarioBuilder.inject(rampUsers(100) over(1 minutes))
    ).protocols(theHttpProtocolBuilder)
*/

    setUp(
        theScenarioBuilder.inject(constantUsersPerSec(100) during(3 minutes))
    ).throttle(
        reachRps(100) in (30 seconds),
        holdFor(1 minute),
        jumpToRps(50),
        holdFor(2 minutes)
    ).protocols(theHttpProtocolBuilder)
}