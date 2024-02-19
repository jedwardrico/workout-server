import { Controller, Delete, Get, Param } from '@nestjs/common';
import { Workout } from './entities/workout.entity';
import { WorkoutsService } from './workouts.service';

@Controller('workouts')
export class WorkoutsController {
  constructor(private readonly service: WorkoutsService) {}

  @Get()
  getUsers(): Promise<Workout[]> {
    return this.service.findAll();
  }

  @Get(':userId')
  getUser(@Param('id') id: number): Promise<Workout> {
    return this.service.findOne(id);
  }

  @Delete(':userId')
  deleteUser(@Param('id') id: number): Promise<void> {
    return this.service.remove(id);
  }
}
