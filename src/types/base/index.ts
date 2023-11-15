import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';

@ApiExtraModels()
export class TrackActionDTO {
  @ApiProperty({
    description: 'The Creator',
  })
  createBy?: string;

  @ApiProperty({
    description: 'The Updator',
  })
  updateBy?: string;

  @ApiProperty({
    description: 'The date of creating',
  })
  createdAt?: Date;

  @ApiProperty({
    description: 'The date of updating',
  })
  updatedAt?: Date;
}
