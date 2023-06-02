import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator"

export class CreateUserDTO {
    
    @IsNotEmpty({message: 'O nome é obrigatório'})
    name: string

    @IsEmail(undefined, {message: 'e-mail informado é invalido'})
    email: string
    
    @MinLength(6, {message: 'A senha precisa ter pelo menos 6 caracteres'})
    password: string
}