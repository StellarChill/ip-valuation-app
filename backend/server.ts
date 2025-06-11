import express from 'express'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const app = express()
const prisma = new PrismaClient()

app.use(express.json())

// ✅ REGISTER ENDPOINT
app.post('/register', async (req, res) => {
  const { name, email, password } = req.body

  const existingUser = await prisma.user.findUnique({ where: { email } })
  if (existingUser) {
    return res.status(400).json({ error: 'Email already registered' })
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      role: 'user',
    },
  })

  await prisma.token.create({
    data: {
      userId: user.id,
      remaining: 3,
    },
  })

  res.status(201).json({ message: 'User registered successfully', user })
})

app.listen(3000, () => {
  console.log('🚀 Server running at http://localhost:3000')
})
