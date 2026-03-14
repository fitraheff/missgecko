import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { Role } from '@prisma/client';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  //   canActivate(context: ExecutionContext): boolean {
  //     const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
  //       context.getHandler(),
  //       context.getClass(),
  //     ]);
  //     if (!requiredRoles) {
  //       return true;
  //     }
  //     const { user } = context.switchToHttp().getRequest();
  //     return requiredRoles.some((role) => user.roles?.includes(role));
  //   }
  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    const user = context.switchToHttp().getRequest().user;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return requiredRoles.some((role) => user.role === role);
  }
}
