import Cron from './Cron';
import Logger from '../../../Shared/Helpers/Logger';

class TestCron extends Cron
{
    cronName(): string
    {
        return TestCron.name;
    }

    time(): string
    {
        return '* * * * *';
    }

    async task(): Promise<void>
    {
        Logger.info('Test cron');
    }
}

export default TestCron;
