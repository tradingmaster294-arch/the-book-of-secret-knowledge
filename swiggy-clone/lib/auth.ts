import { User } from '@/types';

const JWT_SECRET = 'your-secret-key-change-in-production';

export function generateToken(user: User): string {
  // Simple JWT simulation (in production, use proper JWT library)
  const payload = {
    id: user.id,
    email: user.email,
    exp: Date.now() + 7 * 24 * 60 * 60 * 1000 // 7 days
  };
  return Buffer.from(JSON.stringify(payload)).toString('base64');
}

export function verifyToken(token: string): { id: string; email: string } | null {
  try {
    const payload = JSON.parse(Buffer.from(token, 'base64').toString());
    if (payload.exp < Date.now()) {
      return null;
    }
    return { id: payload.id, email: payload.email };
  } catch {
    return null;
  }
}

export function hashPassword(password: string): string {
  // Simple hash simulation (in production, use bcrypt)
  return Buffer.from(password).toString('base64');
}

export function comparePassword(password: string, hash: string): boolean {
  return hashPassword(password) === hash;
}
