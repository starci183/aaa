import { GraphqlGatewayController } from './graphql-gateway.controller';
import { GraphqlGatewayService } from './graphql-gateway.service';
import { IntrospectAndCompose } from '@apollo/gateway';
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default"

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      server: {
                        plugins: [
                            ApolloServerPluginLandingPageLocalDefault(),
                        ],
                        playground: false,
      },
      gateway: {
        supergraphSdl: new IntrospectAndCompose({
          subgraphs: [
            { name: 'users', url: 'http://localhost:7000/graphql' },
            { name: 'posts', url: 'http://localhost:7001/graphql' },
          ],
        }),
      },
    }),
  ],
  controllers: [GraphqlGatewayController],
  providers: [GraphqlGatewayService],
})
export class GraphqlGatewayModule {}
