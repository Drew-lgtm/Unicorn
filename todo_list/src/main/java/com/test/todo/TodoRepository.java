package com.test.todo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

// interface that handles all the saving and loading from the database
@Repository
public interface TodoRepository extends JpaRepository<Todo, Long> {
}