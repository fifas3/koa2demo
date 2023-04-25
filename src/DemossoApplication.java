package com.example.demosso;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

https://github.com/Azure-Samples/ms-identity-javascript-react-spa.git
https://learn.microsoft.com/zh-cn/azure/active-directory/develop/scenario-spa-sign-in?source=recommendations&tabs=javascript2
https://learn.microsoft.com/zh-CN/azure/active-directory/conditional-access/howto-conditional-access-session-lifetime

@SpringBootApplication
@RestController
public class DemossoApplication {
	public static void main(String[] args) {
		SpringApplication.run(DemossoApplication.class, args);
	}
	@CrossOrigin
	@GetMapping("/hello")
	public String hello(@RequestParam(value = "name", defaultValue = "World") String name) {
		return String.format("Hello %s!", name);
	}
	@CrossOrigin
	@GetMapping("/sso-login")
	public RedirectView redirectView() {
		System.out.println("sso-login");
		return new RedirectView("https://login.microsoftonline.com/9a69c408-c578-46af-8a7a-12f0d1148fee/oauth2/v2.0/authorize?client_id=d73f3893-036a-4d7b-be23-146c67e87b20&response_type=code&redirect_uri=http://localhost:3000/frontend/loginSSO&response_mode=query&scope=offline_access user.read mail.read&state=12345");
	}
}
