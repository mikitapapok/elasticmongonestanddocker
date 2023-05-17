import { UserService } from './user.service';
import { User } from './entity/user.entity';
import { UserDto } from './dto/user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(userDto: UserDto): Promise<User>;
    getAll(): Promise<User[]>;
}
