import type {Config} from 'drizzle-kit';
import * as dotenv from 'dotenv';

dotenv.config({path:".env"});

export default {
    driver: 'pg',
    schema: './src/lib/db/schema.ts',
    dbCredentials: {
        connectionString: process.env.DATA_BASE_URL!,
    }
} satisfies Config


// npx drizzle-kit push:pg
// drizzle-kit studio --host localhost --port 4983