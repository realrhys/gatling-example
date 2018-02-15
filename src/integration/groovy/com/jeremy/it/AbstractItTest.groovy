package com.jeremy.it

import com.jeremy.Application
import org.springframework.test.annotation.DirtiesContext
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.ContextConfiguration
import spock.lang.Specification

@SpringBootTest(classes = Application.class,webEnvironment=SpringBootTest.WebEnvironment.RANDOM_PORT)
@DirtiesContext
@ContextConfiguration
abstract class  AbstractItTest extends Specification {
}
