package com.test.todo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Todo {

    @Id // pk for the database
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String task;
    private boolean isCompleted;

    //  constructor required for the database
    public Todo() {}

    public Todo(String task) {
        this.task = task;
        this.isCompleted = false;
    }
    // getters and setters so other classes can access these variables
    public Long getId() { return id; }
    public String getTask() { return task; }
    public void setTask(String task) { this.task = task; }
    public boolean isCompleted() { return isCompleted; }
    public void setCompleted(boolean completed) { isCompleted = completed; }
}