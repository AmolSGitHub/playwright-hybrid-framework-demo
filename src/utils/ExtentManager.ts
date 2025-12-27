import { ExtentReporter } from '@reporters/ExtentReporter';

export class ExtentManager {
    private static reporter: ExtentReporter;

    static async initReports() {
        this.reporter = new ExtentReporter();
        await this.reporter.init();
    }

    static getReporter(): ExtentReporter | undefined {
        return this.reporter;
    }

    static async flushReports() {
        if (this.reporter) await this.reporter.flush();
    }
}
