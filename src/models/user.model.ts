import {Entity, model, property} from '@loopback/repository';

enum Role {
  admin = "admin",
  user = "user",
  guest = "guest"
}

@model()
export class User extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  username: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'date',
    required: true,
  })
  createAt: string;

  @property({
    type: 'date',
    required: true,
  })
  updateAt: string;

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  role: Role[];

  @property({
    type: 'string',
    required: true,
  })
  resetToken: string;

  @property({
    type: 'string',
    required: true,
  })
  refreshToken: string;


  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
