import * as fs from 'fs';
import * as path from 'path';

export class ExtentReporter {
    private reportFile = path.join(__dirname, '../../reports/extent-report.html');
    private reportData: string[] = [];

    async init() {
        this.reportData.push('<html><head><title>Automation Report</title></head><body>');
        this.reportData.push('<h1>Test Execution Report</h1><ul>');
    }

    async logTest(testName: string, status: 'PASS' | 'FAIL', message?: string) {
        const color = status === 'PASS' ? 'green' : 'red';
        this.reportData.push(`<li style="color:${color};">${testName}: ${status}${message ? ' - ' + message : ''}</li>`);
    }

    async flush() {
        this.reportData.push('</ul></body></html>');
        fs.writeFileSync(this.reportFile, this.reportData.join('\n'), 'utf-8');
        console.log(`Extent Report generated at: ${this.reportFile}`);
    }
}
