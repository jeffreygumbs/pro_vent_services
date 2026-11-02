import { randomUUID } from "crypto";
import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import bcrypt from "bcryptjs";

const DATA_DIR = path.join(process.cwd(), "..", "..", "data");
const USERS_FILE = path.join(DATA_DIR, "users.json");

const ADMIN_EMAIL = "admin@provent.com";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "proventadmin";
const ADMIN_HASH = bcrypt.hashSync(ADMIN_PASSWORD, 10);

export type User = {
  id: string;
  email: string;
  passwordHash: string;
  name: string;
  role?: string;
};

export type CreateUserInput = {
  email: string;
  name: string;
  password: string;
  role?: string;
};

async function ensureFile(): Promise<User[]> {
  try {
    await mkdir(DATA_DIR, { recursive: true });
  } catch {
    // ignore
  }

  try {
    const content = await readFile(USERS_FILE, "utf-8");
    const users = JSON.parse(content || "[]") as User[];

    const existingAdmin = users.find(
      (u) => u.email.toLowerCase() === ADMIN_EMAIL.toLowerCase()
    );

    if (!existingAdmin) {
      users.push({
        id: "admin",
        email: ADMIN_EMAIL,
        passwordHash: ADMIN_HASH,
        name: "Pro-Vent Admin",
        role: "admin",
      });
      await writeFile(USERS_FILE, JSON.stringify(users, null, 2));
    } else if (!bcrypt.compareSync(ADMIN_PASSWORD, existingAdmin.passwordHash)) {
      existingAdmin.passwordHash = ADMIN_HASH;
      await writeFile(USERS_FILE, JSON.stringify(users, null, 2));
    }

    return users;
  } catch {
    const seed: User[] = [
      {
        id: "1",
        email: "user@example.com",
        passwordHash: bcrypt.hashSync("password", 10),
        name: "Demo Client",
        role: "client",
      },
      {
        id: "admin",
        email: ADMIN_EMAIL,
        passwordHash: ADMIN_HASH,
        name: "Pro-Vent Admin",
        role: "admin",
      },
    ];
    await writeFile(USERS_FILE, JSON.stringify(seed, null, 2));
    return seed;
  }
}

export async function getUsers(): Promise<User[]> {
  return ensureFile();
}

export async function findUserByEmail(email: string): Promise<User | null> {
  const users = await getUsers();
  return users.find((u) => u.email.toLowerCase() === email.toLowerCase()) ?? null;
}

export async function createUser(input: CreateUserInput): Promise<User> {
  const users = await getUsers();
  if (users.some((u) => u.email.toLowerCase() === input.email.toLowerCase())) {
    throw new Error("An account with this email already exists");
  }

  const user: User = {
    id: randomUUID(),
    email: input.email,
    name: input.name,
    passwordHash: bcrypt.hashSync(input.password, 10),
    role: input.role ?? "client",
  };

  users.push(user);
  await writeFile(USERS_FILE, JSON.stringify(users, null, 2));
  return user;
}
