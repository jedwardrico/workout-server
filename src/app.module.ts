import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { Workout } from './workouts/entities/workout.entity';
import { Exercise } from './exercises/entities/exercise.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'postgres',
      entities: [User, Workout, Exercise],
      synchronize: true,
    }),
    UsersModule,
  ],
})
export class AppModule {
  constructor() {}
}
