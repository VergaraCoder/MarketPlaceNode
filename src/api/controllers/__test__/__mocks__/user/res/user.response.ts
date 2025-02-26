import {CreateUserDtoAlready} from '../../../../../../application/dto/user/createUser.dto';
import { User } from '../../../../../../domain/models/user.model';
import { SuccessResult } from '../../../../../../utils/resultError/type.result';

export const mockUserData:CreateUserDtoAlready={
    id:1,
    name:'jhonatan',
    email:'jhonatan@gmail.com',
    password:"Diosesmitodo96/",
    idRole:2
}

export const mockAllUserData:CreateUserDtoAlready[]=[
    {
        id:1,
        name:'jhonatan',
        email:'jhonatan@gmail.com',
        password:"Diosesmitodo96/",
        idRole:2
    }
];

export const mockAllUser:SuccessResult<CreateUserDtoAlready[] | any> ={
    data:[mockUserData],
    error:null
}


export const mockOneUser:SuccessResult<CreateUserDtoAlready | any>={
    data:mockUserData,
    error:null
}

export const mockUpdateUser:SuccessResult<boolean>={
    data:true,
    error:null
}

export const mockDeleteUser:SuccessResult<boolean>={
    data:true,
    error:null
}