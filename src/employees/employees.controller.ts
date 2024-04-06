import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { Prisma } from '@prisma/client';
import { Throttle, SkipThrottle } from '@nestjs/throttler';

@SkipThrottle() // By Default we can disable throttling for this entire controller routes
@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post()
  create(@Body() createEmployeeDto: Prisma.EmployeeCreateInput) {
    return this.employeesService.create(createEmployeeDto);
  }

  @SkipThrottle({ default: false }) // disable throttling for this method only.
  @Get()
  findAll(@Query('role') role?: 'ADMIN' | 'SUBSCRIBER') {
    return this.employeesService.findAll(role);
  }

  @Throttle({ short: { ttl: 1000, limit: 2 } }) // limit to 1 request per second
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEmployeeDto: Prisma.EmployeeUpdateInput,
  ) {
    return this.employeesService.update(+id, updateEmployeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeesService.remove(+id);
  }
}
