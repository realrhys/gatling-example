# Gatling Example

The following is an example of using Gatling to test the API Gateway on AWS. Note that this is a rudimentary example, however, in conjunction with the Serverless example, you will be able to great performance and load tests.

Note that I generated this project so you can ignore the java stuff.

Should we move forward with this technology we will need to write better tests, however, this should get us started.

# Install

Just run:

```
gradle clean build
```

This will download all the dependancies and allow you to run the gatling tests.

To run the tests, run the following command... Note that the <URL> should be replaced with the API gateway generated by AWS.

```
gradle gatling -Durl="https://<URL>/dev/asset"
```