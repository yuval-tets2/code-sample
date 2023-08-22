import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AddressModuleBase } from "./base/address.module.base";
import { AddressService } from "./address.service";

@Module({
  imports: [AddressModuleBase, forwardRef(() => AuthModule)],
  providers: [AddressService],
  exports: [AddressService],
})
export class AddressModule {}
