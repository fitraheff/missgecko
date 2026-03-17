// prisma/seed.ts

import { PrismaClient, Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL as string,
});
const prisma = new PrismaClient({ adapter });

async function main() {
  // hash password
  const password = await bcrypt.hash('superadmin123', 10);

  // create superadmin user
  const superadmin = await prisma.user.upsert({
    where: { email: 'admin@geckoindonesia.com' },
    update: {},
    create: {
      name: 'Super Admin',
      email: 'admin@geckoindonesia.com',
      password: password,
      role: Role.SUPERADMIN,
      photoUrl: null,
    },
  });

  // create company profile
  const company = await prisma.company.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      name: 'Gecko Indonesia',
      visi: 'Menjadi toko reptil terpercaya di Indonesia',
      misi: 'Menyediakan gecko berkualitas dengan pelayanan terbaik',
      logo: 'https://example.com/logo.png',
      alamat: 'Jl. Raya Bekasi No.10, Bekasi',
      email: 'admin@geckoindonesia.com',
      whatsapp: '6281234567890',
      instagram: 'https://instagram.com/geckoindonesia',
      tiktok: 'https://tiktok.com/@geckoindonesia',
      deskripsi:
        'Gecko Indonesia adalah toko yang menyediakan berbagai jenis leopard gecko berkualitas tinggi.',
    },
  });

  console.log('Seed berhasil dibuat');
  console.log({ superadmin, company });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
