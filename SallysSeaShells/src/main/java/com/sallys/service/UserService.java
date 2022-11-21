package com.sallys.service;

import org.hibernate.exception.ConstraintViolationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import com.sallys.entity.User;
import com.sallys.repo.UserRepo;

@Service
public class UserService {

	@Autowired
	UserRepo userRepo;
	
	public User save(User user) {
		return userRepo.save(user);
	}

	public User signIn(User user) throws Exception {
		User foundUser = userRepo.signIn(user.getEmail(), user.getPassword());

		if(foundUser == null) {
			throw new Exception("No user found.");
		}

		return foundUser;
	}

	public User getUserByEmail(String email) throws Exception {
		User foundUser = userRepo.getUserByEmail(email);

		if(foundUser == null) {
			throw new Exception("No user found.");
		}

		return foundUser;
	}
}
