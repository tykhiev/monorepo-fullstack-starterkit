import { Module } from "@nestjs/common";
import { auth } from "@packages/auth";
import { AuthModule } from "@thallesp/nestjs-better-auth";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [AuthModule, AuthModule.forRoot(auth)],
})
export class AppModule {}
