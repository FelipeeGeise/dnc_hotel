import { IsEmail, IsNotEmpty, IsString, IsEnum } from 'class-validator';
import { $Enums } from 'generated/prisma';

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @IsString()
  @IsNotEmpty()
  password!: string;

  @IsEnum($Enums.Role)
  @IsNotEmpty()
  role!: $Enums.Role;
}
