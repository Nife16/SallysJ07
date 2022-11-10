package com.sallys.service;

import org.springframework.beans.factory.annotation.Autowired;
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
}
