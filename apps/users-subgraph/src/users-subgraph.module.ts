import { Module } from '@nestjs/common';
import { UsersSubgraphController } from './users-subgraph.controller';
import { UsersSubgraphService } from './users-subgraph.service';
import { ApolloFederationDriverConfig, ApolloFederationDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginInlineTrace } from '@apollo/server/plugin/inlineTrace';
import { UsersSubgraphResolver } from './users-subgraph.resolver';
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
  controllers: [UsersSubgraphController],
  providers: [UsersSubgraphService, UsersSubgraphResolver],
})
export class UsersSubgraphModule {}
