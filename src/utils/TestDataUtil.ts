import * as fs from 'fs';
import * as path from 'path';

export class TestDataUtil {
    static readJson(fileName: string): any {
        const filePath = path.join(__dirname, '../../test-data', fileName);
        const rawData = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(rawData);
    }
}
