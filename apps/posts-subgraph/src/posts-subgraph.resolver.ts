import { Args, ID, Resolver } from '@nestjs/graphql';
import { Post } from './posts-subgraph.dto';
import { Query } from '@nestjs/graphql';

@Resolver()
export class PostsSubgraphResolver {
  constructor() {}

  @Query(() => Post)
  getPost(@Args({ name: 'id', type: () => ID }) id: number): Post {
    const posts: Post[] = [
    { id: 1, name: 'Truyen 18+' },
    { id: 2, name: 'doremon' },
  ];
    return posts.find((post) => post.id === Number(id)) ?? { id: 0, name: 'Unknown Post'};
  }
}
