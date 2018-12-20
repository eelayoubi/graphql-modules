import { GraphQLModule } from '@graphql-modules/core';

import { UserModule } from './user.module';
import { ChatModule } from './chat.module';

export const AppModule = new GraphQLModule({
  imports: [
    UserModule,
    ChatModule
  ],
});
