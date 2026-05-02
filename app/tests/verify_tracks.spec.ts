import { test, expect } from '@playwright/test';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

test.describe('Registration Tracks Verification', () => {
  test.beforeAll(async () => {
    try {
      await prisma.user.deleteMany({
        where: {
          email: {
            in: ['invalid-track@example.com', 'valid-track@example.com', 'missing-track@example.com']
          }
        }
      });
    } catch (e) {
      console.log('Cleanup error (safe to ignore):', e.message);
    }
  });

  test.afterAll(async () => {
    await prisma.$disconnect();
  });

  async function testRegistration(page, url, email, password, name) {
    console.log(`\nTesting registration via: ${url}`);
    
    await page.goto(url);
    await page.fill('input[name="name"]', name);
    await page.fill('input[name="email"]', email);
    await page.fill('input[name="password"]', password);
    await page.click('button[type="submit"]');

    // Wait for redirect to onboarding or dashboard
    await page.waitForURL('**/*');
    
    // Some tracks go to /api/checkout, some to /onboarding, some might redirect. 
    // We just wait a bit for server action to complete.
    await page.waitForTimeout(3000);

    // Check DB
    const user = await prisma.user.findUnique({ where: { email } });
    if (user) {
      console.log(`-> ✅ User created in Prisma! marketTrack: ${user.marketTrack}`);
      return user.marketTrack;
    } else {
      console.log(`-> ❌ User NOT FOUND in Prisma!`);
      return null;
    }
  }

  test('1. Invalid track registration', async ({ page }) => {
    const track = await testRegistration(
      page,
      'http://localhost:3000/register?track=InvalidGarbageTrack',
      'invalid-track@example.com',
      'password123',
      'Invalid Track'
    );
    expect(track).toBe('multi');
  });

  test('2. Valid track registration', async ({ page }) => {
    const track = await testRegistration(
      page,
      'http://localhost:3000/register?track=forex',
      'valid-track@example.com',
      'password123',
      'Valid Track'
    );
    expect(track).toBe('forex');
  });

  test('3. Missing track registration', async ({ page }) => {
    const track = await testRegistration(
      page,
      'http://localhost:3000/register',
      'missing-track@example.com',
      'password123',
      'Missing Track'
    );
    expect(track).toBe('forex'); // default in register-form.tsx is 'forex'
  });
});
