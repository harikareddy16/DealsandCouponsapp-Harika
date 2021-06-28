package in.admin.mappers;

import in.admin.dto.UserDto;
import in.admin.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {

    @Mapping(source = "user.role", target = "role")
    @Mapping(source = "user.username", target = "username")
    @Mapping(source = "token", target = "token")
    UserDto toUserDto(User user, String token);
}
