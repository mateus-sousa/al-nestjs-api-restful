import { Injectable } from "@nestjs/common"

@Injectable()
export class UserRepository {
    private users = []

    create(user) {
        this.users.push(user)
    }

    getAll() {
        return this.users
    }
}