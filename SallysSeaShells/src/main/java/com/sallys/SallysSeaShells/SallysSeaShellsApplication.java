package com.sallys.SallysSeaShells;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.sallys")
public class SallysSeaShellsApplication {

	public static void main(String[] args) {
		SpringApplication.run(SallysSeaShellsApplication.class, args);
	}

}
