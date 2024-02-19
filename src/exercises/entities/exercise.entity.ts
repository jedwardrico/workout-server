import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum BodyPart {
  ARMS = 'arms',
  LEGS = 'legs',
  BACK = 'back',
  SHOULDERS = 'shoulders',
  BICEPS = 'biceps',
  TRICEPS = 'triceps',
  CHEST = 'chest',
  ABS = 'abs',
  QUADS = 'quads',
  HAMSTRINGS = 'hamstrings',
  FULL = 'full',
}

export enum Difficulty {
  BEGINNER = 'beginner',
  INTERMEDIATE = 'intermediate',
  EXPERT = 'expert',
}

@Entity()
export class Exercise {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    type: 'enum',
    enum: BodyPart,
    default: BodyPart.FULL,
  })
  bodyPart: BodyPart;

  @Column({
    type: 'enum',
    enum: Difficulty,
    default: Difficulty.BEGINNER,
  })
  difficulty: Difficulty;
}
