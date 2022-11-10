package com.sallys.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sallys.entity.User;

@Repository
public interface UserRepo extends JpaRepository<User, Integer>{

}
