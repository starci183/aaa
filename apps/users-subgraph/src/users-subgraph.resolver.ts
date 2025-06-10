import { Args, ID, Resolver } from '@nestjs/graphql';
import { User } from './users-subgraph.dto';
import { Query } from '@nestjs/graphql';

@Resolver()
export class UsersSubgraphResolver {
  constructor() {}

  @Query(() => User)
  getUser(@Args({ name: 'id', type: () => ID }) id: number): User {
    const users: User[] = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Richard Roe' },
  ];
    return users.find((user) => user.id === Number(id)) ?? { id: 0, name: 'Unknown User'};
  }
}
