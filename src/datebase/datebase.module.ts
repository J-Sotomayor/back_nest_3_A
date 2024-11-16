import { Module } from '@nestjs/common';
import { datebaseprovider } from './database.providers';
import { ConfigService } from 'src/config/config.service';

@Module({
    providers:[...datebaseprovider, ConfigService],
    exports:[...datebaseprovider]
})
export class DatebaseModule {

}
