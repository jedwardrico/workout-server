import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Workout } from './entities/workout.entity';

@Injectable()
export class WorkoutsService {
  constructor(
    @InjectRepository(Workout)
    private workoutsRepository: Repository<Workout>,
  ) {}

  async findAll(): Promise<Workout[]> {
    return this.workoutsRepository.find();
  }

  findOne(id: number): Promise<Workout | null> {
    return this.workoutsRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.workoutsRepository.delete(id);
  }
}
