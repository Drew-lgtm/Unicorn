package com.test.todo;

import org.springframework.web.bind.annotation.*;
import java.util.List;

// rest requests controller
@RestController
@RequestMapping("/api/todos")
@CrossOrigin
public class TodoController {

    private final TodoRepository repository;

    // constructor for the repository
    public TodoController(TodoRepository repository) {
        this.repository = repository;
    }

    // GET
    @GetMapping
    public List<Todo> getAllTodos() {
        return repository.findAll();
    }

    // POST - UPDATED
    @PostMapping
    public Todo createTodo(@RequestBody Todo todo) {
        // security to prevent injections
        String safeTask = todo.getTask().replaceAll("<", "").replaceAll(">", "");
        todo.setTask(safeTask);

        return repository.save(todo);
    }
    // DELETE
    @DeleteMapping("/{id}")
    public void deleteTodo(@PathVariable Long id) {
        repository.deleteById(id);
    }
}