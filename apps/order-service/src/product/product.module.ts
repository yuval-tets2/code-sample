import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProductModuleBase } from "./base/product.module.base";
import { ProductService } from "./product.service";

@Module({
  imports: [ProductModuleBase, forwardRef(() => AuthModule)],
  providers: [ProductService],
  exports: [ProductService],
})
export class ProductModule {}
