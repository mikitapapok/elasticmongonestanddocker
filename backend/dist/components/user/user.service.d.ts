import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
export declare class UserService {
    private readonly userRepo;
    constructor(userRepo: Repository<User>);
    create(userDto: UserDto): Promise<User>;
    getAllUsers(): Promise<User[]>;
}
