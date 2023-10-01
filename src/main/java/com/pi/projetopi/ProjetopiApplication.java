package com.pi.projetopi;

import java.io.IOException;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ProjetopiApplication {

	public static void main(String[] args) throws IOException, InterruptedException {
		/*
		 * boolean isWindows = File.separatorChar == '\\'; if(isWindows) {
		 * System.out.println("é windows"); }
		 * System.out.println("Realizando build do front-end..."); Process p = isWindows
		 * ? Runtime.getRuntime().exec("buildFront.cmd") :
		 * Runtime.getRuntime().exec("buildFront.sh"); // int exitVal = p.waitFor(); //
		 * if (exitVal < 0) { //
		 * System.err.println("Não foi possivel realizar a build do front-end"); // }
		 */
		SpringApplication.run(ProjetopiApplication.class, args);
	}

	

}
