package com.crud.backend.repository;

import com.crud.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;


//extends with JPARepository or CRUDRepository
//<model name, data type of primary key>
public interface UserRepo extends JpaRepository<User, Long> {
}
