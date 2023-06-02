import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserRepository } from "./user.repository";
import { CreateUserDTO } from "./dto/createuser.dto";

@Controller('/users')
export class UserController{

    constructor(private userRepository: UserRepository) {}
    @Post()
    async create(@Body() userData: CreateUserDTO) {
        this.userRepository.create(userData)
        return userData
    }
    @Get()
    async getAll() {
        return this.userRepository.getAll()

    }
}