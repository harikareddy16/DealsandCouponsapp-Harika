package in.admin.controller;

import in.admin.dto.CredentialsDto;
import in.admin.dto.UserDto;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import in.admin.services.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@Slf4j
@RequestMapping("/users")
public class UserController {
	private static final Logger log = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private UserService userService;

    @PostMapping("/signIn")
    public ResponseEntity<UserDto> signIn(@RequestBody CredentialsDto credentialsDto) {
        log.info("Trying to login {}", credentialsDto.getEmail());
        return ResponseEntity.ok(userService.signIn(credentialsDto));
    }

    @PostMapping("/validateToken")
    public ResponseEntity<UserDto> signIn(@RequestParam String token) {
        log.info("Trying to validate token {}", token);
        return ResponseEntity.ok(userService.validateToken(token));
    }

    @GetMapping("/test")
    public String test(){
        return "success";
    }

    @PostMapping("/createUser")
    public ResponseEntity<UserDto> createUser(@RequestBody CredentialsDto credentialsDto){
        return ResponseEntity.ok(userService.createUser(credentialsDto));
    }
    @PutMapping("/updateUser/{email}")
    public ResponseEntity<UserDto> updateUser(@PathVariable String email ,@RequestBody CredentialsDto credentialsDto){
        return ResponseEntity.ok(userService.updateUser(email,credentialsDto));
    }
}
