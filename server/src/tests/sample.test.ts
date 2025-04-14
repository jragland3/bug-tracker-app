import request from 'supertest';
import express from 'express';

const app = express();
app.get('/test', (_req, res) => {res.status(200).send('OK')});

describe('Sample test', () => {
    it('should return OK', async () => {
        const res = await request(app).get('/test');
        expect(res.text).toBe('OK');
    });
});
