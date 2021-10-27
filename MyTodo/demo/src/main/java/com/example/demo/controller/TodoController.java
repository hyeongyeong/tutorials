package com.example.demo.controller;

import com.example.demo.domain.Todo;
import com.example.demo.repository.TodoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

// RestController vs Controller
// Controller : View 반환할 때 사용, Data 반환을 위해 @ResponseBody 어노테이션을 사용해야 함.
// EX) public @ResponseBody User info(@RequestBody User user){return userService.get(user);}
// RestController : JSON 형태 객체 데이터 반환 (@ResponseBody가 필요없음)
@RestController
@RequestMapping("/todo")
// final 객체를 Constructor Injection 해줌. (Autowired 역할)
@RequiredArgsConstructor
public class TodoController {

    private final TodoRepository todoRepository;

    /**
     * 할일 페이지 조회
     * @return
     */
    @GetMapping
    public ModelAndView Todo() {
        ModelAndView mav = new ModelAndView("todo");
        mav.addObject("todoList", todoRepository.findAll());
        return mav;
    }

    /**
    * 할일 목록 조회
    * @return 할일 row
    */
    @GetMapping("list")
    public List<Todo> findAllTodoList() {
        return todoRepository.findAll();
    }

    /**
     * 할일 등록
     * @param todo
     * @return
     */
    @PostMapping("create")
    public ResponseEntity<?> createTodo(@RequestBody Todo todo) {
        todo.regist();
        todoRepository.save(todo);
        return new ResponseEntity<>("{}", HttpStatus.OK);
    }

    /**
     * 할일 상태 수정
     * @param idx
     * @return
     */
    @PutMapping("/{idx}")
    public ResponseEntity<?> putTodo(@PathVariable("idx") Long idx){
        Todo persistTodo = todoRepository.getOne(idx);
        persistTodo.updateState();
        todoRepository.save(persistTodo);
        return new ResponseEntity<>("{}", HttpStatus.OK);
    }

    /**
     * 할일 내용 수정
     * @param idx
     * @param todo
     * @return
     */
    @PutMapping("/edit/{idx}")
    public ResponseEntity<?> putDescription(@PathVariable("idx") Long idx, @RequestBody Todo todo) {
        Todo persistTodo = todoRepository.getOne(idx);
        persistTodo.updateContent(todo.getContent());
        todoRepository.save(persistTodo);
        return new ResponseEntity<>("{}", HttpStatus.OK);
    }

    /**
     * 할일 삭제
     * @param idx
     * @return
     */
    @DeleteMapping("/{idx}")
    public ResponseEntity<?> deleteTodo(@PathVariable("idx") Long idx){
        todoRepository.deleteById(idx);
        return new ResponseEntity<>("{}", HttpStatus.OK);
    }
}
