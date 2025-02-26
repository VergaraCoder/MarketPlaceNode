export class CreateUserDto {
  name: string;
  email: string;
  password: string;
  idRole: number;
}


export class CreateUserDtoAlready extends CreateUserDto{
  id:number
}