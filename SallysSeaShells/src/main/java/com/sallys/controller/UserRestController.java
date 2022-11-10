package com.sallys.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.sallys.entity.User;
import com.sallys.service.UserService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserRestController {

	@Autowired
	UserService userService;
	
	@RequestMapping(
			value = "/signUp",
    		method = RequestMethod.POST
    		)
	@ResponseBody
	public ResponseEntity<Object> signUp(@RequestBody User user) {
		
		try {
			User signedUpUser = userService.save(user);
			
			return new ResponseEntity<>(signedUpUser, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(e, HttpStatus.BAD_REQUEST);
		} catch (Error e) {
			return new ResponseEntity<>(e, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		
	}
	
}
