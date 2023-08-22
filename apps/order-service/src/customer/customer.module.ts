import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CustomerModuleBase } from "./base/customer.module.base";
import { CustomerService } from "./customer.service";

@Module({
  imports: [CustomerModuleBase, forwardRef(() => AuthModule)],
  providers: [CustomerService],
  exports: [CustomerService],
})
export class CustomerModule {}
