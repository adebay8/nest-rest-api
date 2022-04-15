import { Body, Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller('user')
export class UserController {
  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  async getMe(@Body() dto, @Req() req: Request) {
    console.log({
      user: req.user,
    });
    return 'user insfo';
  }
}
