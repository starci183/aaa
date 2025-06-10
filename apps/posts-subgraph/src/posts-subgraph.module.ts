import { Module } from '@nestjs/common';
import { PostsSubgraphController } from './posts-subgraph.controller';
import { PostsSubgraphService } from './posts-subgraph.service';
import { ApolloFederationDriverConfig, ApolloFederationDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginInlineTrace } from '@apollo/server/plugin/inlineTrace';
import { PostsSubgraphResolver } from './posts-subgraph.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
      plugins: [ApolloServerPluginInlineTrace()],
    }),
  ],
  controllers: [PostsSubgraphController],
  providers: [PostsSubgraphService, PostsSubgraphResolver],
})
export class PostsSubgraphModule {}
